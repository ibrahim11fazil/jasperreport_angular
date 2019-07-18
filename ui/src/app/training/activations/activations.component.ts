import { Component, OnInit } from '@angular/core';
import { TacActivation, ResponseTacActivation, IActivationList, ActivationList } from 'app/models/tac-activation';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TrainingService } from 'app/service/training/training.service';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { PAGE_LIMIT } from 'app/app.constants';
import { SearchCourse } from 'app/models/tac-course-master';

@Component({
  selector: 'ms-activations',
  templateUrl: './activations.component.html',
  styleUrls: ['./activations.component.scss']
})
export class ActivationsComponent implements OnInit {

  form: FormGroup
  page = 0
  searchText: String;
  ds: ActivationList[] = [];
  firstSearch=false
  displayedColumns: string[] = ['activationId', 'courseName','activationDate','Edit' ];

  constructor(
    private trainingService: TrainingService,
    private fb: FormBuilder,
    private pageTitleService: PageTitleService,
    private toastr: ToastrService,
    private router:Router,) {
    this.pageTitleService.setTitle("Search Activation")}

  ngOnInit() {
    this.formInit()
  }
  formInit() {
    this.form = this.fb.group({
      searchControl: [""]
    });
  }

  onSubmit() {;
    debugger
    this.ds = new Array<ActivationList>();
    this.ds = [...this.ds];
    this.page = 0
    this.firstSearch=true
    this.search()
  }

  search() {
    debugger;
    var searchString = new SearchCourse()
    searchString.courseName = this.form.value.searchControl
    searchString.limit = PAGE_LIMIT
    searchString.start = this.page
    this.trainingService.getAllActivationsByName(searchString).subscribe(
      data => {
        var response = <IActivationList>data
        console.log(data);
        if (response.status) {
          response.data.forEach(item => {
            this.ds.push(item);
          })
          debugger;
          this.ds = [...this.ds]; // this.ds is conided as varaible , this will update the variable in UI
          if(this.firstSearch==true && response.data.length==0){
            this.toastr.info("Search result no found")
          }
        }
        else {
          console.log(response.message)
          this.toastr.error(response.message.toString())
        }
      },
      error => this.toastr.error(error.message)
    )
  }

  onScroll() {
    this.page = this.page + 1;
    this.firstSearch=false
    this.search();
  }
  updateRow(row){
    this.router.navigate(["/training/activate-course/",row.activationId]);
  }

}


