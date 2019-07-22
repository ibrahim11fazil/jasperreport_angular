import { Component, OnInit } from '@angular/core';
import { SystemUserService } from 'app/service/user/system-user.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { JobGrades, JobFamily, JobFamilyListResponses, JobTitle, JobGradesListResponse, JobTitleListResponse, FunctionalArea, FunctionalAreaResponseList } from 'app/models/job-card-data';
import { TacCourseMaster, ITacCourseList, Course } from 'app/models/tac-course-master';
import { OPTIONAL_OR_NOT } from 'app/app.constants';
import { TrainingService } from 'app/service/training/training.service';

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
  courses:Course[]=[]
  optionsCourse=OPTIONAL_OR_NOT
  

  jobId:String=""
  constructor(  
    private userService:SystemUserService,
    private trainingService:TrainingService,
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
      jobDutiesOptions:this.fb.array([]),
      conditonOptions:this.fb.array([]),
      jobSkillsOptions:this.fb.array([]),
      courseOptions:this.fb.array([]),
      jobTitles:[null, Validators.compose([Validators.required])],
      jobNumber:[null, Validators.compose([Validators.required])],
      jobGrade:[null, Validators.compose([Validators.required])],
      jobFamily:[null, Validators.compose([Validators.required])],
      functionalArea:[null, Validators.compose([Validators.required])]
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

    this.trainingService.getAllCourseList().subscribe(
      data => {
        var response = <ITacCourseList>data
        this.courses = response.data
        console.log(response)
      },
      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
    )
  }

  addMoreJobDuties(){
    const control = this.getControlOfAddMore('jobDutiesOptions');
    control.push(this.patchJobDuties( "",0))
  }
  removeJobDuties(input){
    const control = this.getControlOfAddMore('jobDutiesOptions');
    control.removeAt(input)
  }
  addMoreConditions(){
    const control = this.getControlOfAddMore('conditonOptions');
    control.push(this.patchCondition( "",0))
  }
  removeConditions(input){
    const control = this.getControlOfAddMore('conditonOptions');
    control.removeAt(input)
  }
  addMoreSkills(){
    const control = this.getControlOfAddMore('jobSkillsOptions');
    control.push(this.patchSkills( "",0))
  }
  removeSkills(input){
    const control = this.getControlOfAddMore('jobSkillsOptions');
    control.removeAt(input)
  }

  addMoreTrainingCourses(){
    const control = this.getControlOfAddMore('courseOptions');
    control.push(this.patchCourses(0, 0,0))
  }
  removeMoretargetAudienceTextarea(input){
    const control = this.getControlOfAddMore('courseOptions');
    control.removeAt(input)
  }

  getControlOfAddMore(name): FormArray {
    return <FormArray>this.form.get(name);
  }

  patchJobDuties(dutyDescription, dutiesId) {
    return this.fb.group({
      dutyDescription: [dutyDescription],
      dutiesId: [dutiesId]
    })
  }

  patchSkills(jobSkills,skillsID) {
    return this.fb.group({
      jobSkills: [jobSkills],
      skillsID: [skillsID]
    })
  }
  patchCondition(jobConditions, conditionsId) {
    return this.fb.group({
      jobConditions: [jobConditions],
      conditionsId: [conditionsId]
    })
  }

  patchCourses(courseId,mandatoryFlag,jobcardNo) {
    return this.fb.group({
      courseId: [courseId],
      mandatoryFlag: [mandatoryFlag],
      jobcardNo: [jobcardNo]
    })
  }

  }