import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TacInstructor } from 'app/models/tac-instructor';
import { TrainingService } from 'app/service/training/training.service';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SearchUser, ISystemInstructorResponseList } from 'app/models/system-user';
import { PAGE_LIMIT } from 'app/app.constants';
import { JobGrades,JobTitle,JobCardData, IJobCardDataListResponse, SearchJobCard, JobCardDataSearch,JobGradesListResponse,JobTitleListResponse} from 'app/models/job-card-data';
import { UserSearchComponent } from '../user-search/user-search.component';
import { SystemUserService } from 'app/service/user/system-user.service';
import { MainComponent } from 'app/main/main.component';
import { LanguageUtil } from 'app/app.language';
import { ErrorService } from 'app/service/error/error.service';
import {SEARCH_BY} from "../../app.constants";

@Component({
  selector: 'ms-job-card-search',
  templateUrl: './job-card-search.component.html',
  styleUrls: ['./job-card-search.component.scss']
})
export class JobCardSearchComponent implements OnInit {
  form: FormGroup
  page = 0
  ds: JobCardData[] = [];
  jobGradeList: JobGrades[] = []
  jobTitleList: JobTitle[] = []
  searchOption=SEARCH_BY
  searchValue:Number=0
  language:LanguageUtil
  firstSearch=false
  displaySearchByJobCardNo:boolean=false;
  displaySearchByJobGrade:boolean=false;
  displaySearchByJobTitle:boolean=false;
  displayedColumns: string[] = ['jobTitle', 'jobGrade', 'jobGroup','job','jobcardNo', 'Edit','Status','HStatus' ];
  constructor(
    private trainingService: TrainingService,
    private userService:SystemUserService,
    private fb: FormBuilder,
    private pageTitleService: PageTitleService,
    private toastr: ToastrService,
    private mainComponent:MainComponent,
    private router:Router,
    private errorService:ErrorService) {
    this.pageTitleService.setTitle("Search JobCard")
    this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
  }
  ngDoCheck(): void {
    this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
  }

  ngOnInit() {
    this.formSetup()
    this.formInit()
  }

  formInit() {
    this.form = this.fb.group({
      searchControl: [""],
      jobGradeControl:[""],
      jobTitleControl:[""],
      searchValueControl:[null],
    });
  }
  formSetup() {
debugger
    this.userService.getGrades().subscribe(
      data => {
        var response = <JobGradesListResponse>data
        if (response.status) {
          this.jobGradeList=response.data
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
    this.userService.getJobTitles().subscribe(
      data => {
        var response = <JobTitleListResponse>data
        if (response.status) {
          this.jobTitleList=response.data
        }
        else {
          console.log(response.message)
          this.toastr.error(response.message.toString())
        }
      },
      error => { console.log(error)
        this.errorService.errorResponseHandling(error)}
    )

        
  }
  onSubmit() {
    this.ds = new Array<JobCardData>();
    this.ds = [...this.ds];
    this.page = 0
    this.firstSearch=true
    this.search()
  }

  search() {
    debugger;
    var searchString = new JobCardDataSearch()
    if(this.searchValue==1)
    {

      searchString.job = this.form.value.searchControl
      searchString.jobGrade=""
      searchString.jobTitle=""
     

    }
     if(this.searchValue==2)
    {
      searchString.jobGrade = this.form.value.jobGradeControl.psLevel
      searchString.job=""
      searchString.jobTitle=""

    }
     if(this.searchValue==3)
    {
       searchString.jobTitle = this.form.value.jobTitleControl.job
       searchString.jobGrade=""
       searchString.job=""

    }
    if(this.searchValue==4)
    {
      searchString.jobTitle = ""
       searchString.jobGrade=""
       searchString.job=""
    }
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
    this.router.navigate(["/training/job-card-management/",row.jobcardNo]);
  }

  getSearchField(search)
  {
 
    debugger;
    if(search.value.value==1)
    {
      
      this.displaySearchByJobCardNo=true;
      this.displaySearchByJobGrade=false;
      this.displaySearchByJobTitle=false;
      this.searchValue=1
    }
    else if(search.value.value== 2)
    {

      this.displaySearchByJobCardNo=false;
      this.displaySearchByJobGrade=true;
       this.displaySearchByJobTitle=false;
       this.searchValue=2
    }
  
  else if(search.value.value==3)
    {

      this.displaySearchByJobCardNo=false;
      this.displaySearchByJobGrade=false;
      this.displaySearchByJobTitle=true;
      this.searchValue=3
    }
    else if(search.value.value==3)
    {
      this.displaySearchByJobCardNo=false;
      this.displaySearchByJobGrade=false;
      this.displaySearchByJobTitle=false;
      this.searchValue=4
    }
  }

  clear() {
      this.form.value.searchControl=""
      this.form.value.jobGradeControl.psLevel=""
      this.form.value.jobTitleControl.job=""
  }
  

}
