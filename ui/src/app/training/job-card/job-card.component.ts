import { Component, OnInit } from '@angular/core';
import { SystemUserService } from 'app/service/user/system-user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { JobGrades, JobFamily, JobFamilyListResponses, JobTitle, JobGradesListResponse, JobTitleListResponse, FunctionalArea, FunctionalAreaResponseList } from 'app/models/job-card-data';

@Component({
  selector: 'ms-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
  form:FormGroup
  param:any;
  jobGrades:JobGrades[]=[]
  jobFamilies:JobFamily[]=[]
  jobTitles:JobTitle[]=[]
  functionalAreas:FunctionalArea[]=[]

  jobId:String=""
  constructor(  
    private userService:SystemUserService,
    private fb:FormBuilder,
    private pageTitleService: PageTitleService,
    private toastr : ToastrService,
    private activatedRoute: ActivatedRoute){
    this.pageTitleService.setTitle("Job Card Creation")  
  }

  blankUser(){
    //this.systemUser = {id:0,password:"",roleId:0,enabled:0}
  }

  ngOnInit() {
    this.formSetup()
    this.formInit()
    //this.loadDataFromParam()
  }

  formInit()
  {
    this.form = this.fb.group({
      // enabledUser:[null, Validators.compose([Validators.required])],
     // jobId:[null, Validators.compose([Validators.required])],
     // userRole:[null, Validators.compose([Validators.required])],
     // password: [null, Validators.compose([Validators.required])],
     // enabledUser:[null, Validators.compose([Validators.required])]
    });
  }

  formSetup(){

    this.userService.getGrades().subscribe(
      data=>  {
        var response =  <JobGradesListResponse>data
        if(response.status) {
        this.jobGrades =  response.data 
        }
        else {
          console.log(response.message)
          this.toastr.error(response.message.toString())
        }
      },
      error=>  this.toastr.error(error.message) 
    )

    this.userService.getJobFamily().subscribe(
      data=>  {
        var response =  <JobFamilyListResponses>data
        if(response.status) {
        this.jobFamilies =  response.data 
        }
        else {
          console.log(response.message)
          this.toastr.error(response.message.toString())
        }
      },
      error=>  this.toastr.error(error.message) 
    )

    this.userService.getJobTitles().subscribe(
      data=>  {
        var response =  <JobTitleListResponse>data
        if(response.status) {
        this.jobTitles =  response.data 
        }
        else {
          console.log(response.message)
          this.toastr.error(response.message.toString())
        }
      },
      error=>  this.toastr.error(error.message) 
    )


    this.userService.getFunctionalArea().subscribe(
      data=>  {
        var response =  <FunctionalAreaResponseList>data
        if(response.status) {
        this.functionalAreas =  response.data 
        }
        else {
          console.log(response.message)
          this.toastr.error(response.message.toString())
        }
      },
      error=>  this.toastr.error(error.message) 
    )
  }
  }