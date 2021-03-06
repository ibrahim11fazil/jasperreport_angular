import { Component, OnInit } from '@angular/core';
import { SearchUser, ISystemInstructorResponseList } from 'app/models/system-user';
import { PAGE_LIMIT } from 'app/app.constants';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TacInstructor } from 'app/models/tac-instructor';
import { TrainingService } from 'app/service/training/training.service';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MainComponent } from 'app/main/main.component';
import { LanguageUtil } from 'app/app.language';
import { ErrorService } from 'app/service/error/error.service';

@Component({
  selector: 'ms-search-instructor',
  templateUrl: './search-instructor.component.html',
  styleUrls: ['./search-instructor.component.scss']
})
export class SearchInstructorComponent implements OnInit {

  form: FormGroup
  page = 0
  ds: TacInstructor[] = [];
  language:LanguageUtil
  firstSearch=false
  displayedColumns: string[] = ['instructorId', 'jobId', 'name','ibanNo','qid', 'Edit','Status' ];
  constructor(
    private trainingService: TrainingService,
    private fb: FormBuilder,
    private pageTitleService: PageTitleService,
    private toastr: ToastrService,
    private mainComponent:MainComponent,
    private router:Router,
    private errorService:ErrorService) {
    this.pageTitleService.setTitle("Search Instrcutor")
    this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
    
  }

  ngDoCheck(): void {
    this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
  }

  ngOnInit() {
    this.formInit()
  }

  formInit() {
    this.form = this.fb.group({
      searchControl: [""]
    });
  }
  onSubmit() {
    this.ds = new Array<TacInstructor>();
    this.ds = [...this.ds];
    this.page = 0
    this.firstSearch=true
    this.search()
  }

  search() {
    var searchString = new SearchUser()
    searchString.name = this.form.value.searchControl
    searchString.limit = PAGE_LIMIT
    searchString.start = this.page
    this.trainingService.getAllInstructorByName(searchString).subscribe(
      data => {
        var response = <ISystemInstructorResponseList>data
        if (response.status) {
          response.data.forEach(item => {
            this.ds.push(item);
          })
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
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
      }
    )
  }

  onScroll() {
    this.page = this.page + 1;
    this.firstSearch=false
    this.search();
  }

  updateRow(row){
    this.router.navigate(["/training/create-instructor/",row.instructorId]);
  }

}
