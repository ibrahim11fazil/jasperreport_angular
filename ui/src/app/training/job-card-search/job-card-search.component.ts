import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TacInstructor } from 'app/models/tac-instructor';
import { TrainingService } from 'app/service/training/training.service';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SearchUser, ISystemInstructorResponseList } from 'app/models/system-user';
import { PAGE_LIMIT } from 'app/app.constants';
import { JobCardData, IJobCardDataListResponse, SearchJobCard, JobCardDataSearch } from 'app/models/job-card-data';
import { UserSearchComponent } from '../user-search/user-search.component';
import { SystemUserService } from 'app/service/user/system-user.service';

@Component({
  selector: 'ms-job-card-search',
  templateUrl: './job-card-search.component.html',
  styleUrls: ['./job-card-search.component.scss']
})
export class JobCardSearchComponent implements OnInit {
  form: FormGroup
  page = 0
  ds: JobCardData[] = [];
  firstSearch=false
  displayedColumns: string[] = ['jobTitle', 'jobGrade', 'jobGroup','job','jobcardNo', 'Edit','Status','HStatus' ];
  constructor(
    private trainingService: TrainingService,
    private userService:SystemUserService,
    private fb: FormBuilder,
    private pageTitleService: PageTitleService,
    private toastr: ToastrService,
    private router:Router) {
    this.pageTitleService.setTitle("Search JobCard")
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
    this.ds = new Array<JobCardData>();
    this.ds = [...this.ds];
    this.page = 0
    this.firstSearch=true
    this.search()
  }

  search() {
    var searchString = new JobCardDataSearch()
    searchString.job = this.form.value.searchControl
    searchString.limit = PAGE_LIMIT
    searchString.start = this.page
    this.trainingService.searchJobCard(searchString).subscribe(
      data => {
        var response = <IJobCardDataListResponse>data
        if (response.status) {
          response.data.forEach(item => {
            if(item.jobCardCourseLinkModelList.length==0){
              item.trainingCenterStatus=false
            }else{
              item.trainingCenterStatus=true
            }
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
      error => this.toastr.error(error.message)
    )
  }

  onScroll() {
    this.page = this.page + 1;
    this.firstSearch=false
    this.search();
  }

  updateRow(row){
    this.router.navigate(["/training/job-card-management/",row.jobcardNo]);
  }

}
