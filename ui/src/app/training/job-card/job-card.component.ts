import { Component, OnInit } from '@angular/core';
import { SystemUserService } from 'app/service/user/system-user.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { JobGrades, JobFamily, JobFamilyListResponses, JobTitle, JobGradesListResponse, JobTitleListResponse, FunctionalArea, FunctionalAreaResponseList, JobCardData, TacJobcardDuty, TacJobcardSkill, TacJobcardCondition, CourseJobCard, JobCardDataSearch } from 'app/models/job-card-data';
import { TacCourseMaster, ITacCourseList, Course } from 'app/models/tac-course-master';
import { OPTIONAL_OR_NOT } from 'app/app.constants';
import { TrainingService } from 'app/service/training/training.service';
import { debug } from 'util';

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
  jobCard:JobCardData;
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
    this.loadForm();
  }

  loadForm(){
    this.jobCard={
    job: "",
    jobGrade: "",
    jobGroup: "",
    jobTitle: "",
    specialGroup: "",
    jobcardNo: 0,
    tacJobcardConditions: [],
    tacJobcardSkills: [],
    tacJobcardDuties: [],
    jobCardCourseLinkModelList:[],
    trainingCenterStatus:false
    } 
  }

  ngOnInit() {
    this.formSetup()
    this.formInit()
    this.loadDataFromParam()
  }

  formInit()
  {
    var jobGradeSelected = this.jobGrades.find(i => i.psLevel==this.jobCard.jobGrade)
    var jobFamilySelected = this.jobFamilies.find(i => i.jobFamily==this.jobCard.jobGroup)
    var jobFunctionalAreaSelected = this.functionalAreas.find(i => i.objid==this.jobCard.specialGroup)
    var jobTitlesSelected = this.jobTitles.find(i=>i.job==this.jobCard.jobTitle)
    this.form = this.fb.group({
      jobDutiesOptions:this.fb.array([]),
      conditonOptions:this.fb.array([]),
      jobSkillsOptions:this.fb.array([]),
      courseOptions:this.fb.array([]),
      job:[this.jobCard.job, Validators.compose([Validators.required])],
      jobTitle:[jobTitlesSelected, Validators.compose([Validators.required])],
      jobGrade:[jobGradeSelected, Validators.compose([Validators.required])],
      jobFamily:[jobFamilySelected, Validators.compose([Validators.required])],
      functionalArea:[jobFunctionalAreaSelected, Validators.compose([Validators.required])]
    });
  }

  patch(){
    const jobDutiesOptions = this.getControlOfAddMore('jobDutiesOptions');
    this.jobCard.tacJobcardDuties.forEach(x => {
      jobDutiesOptions.push(this.patchJobDuties(x.dutiesId,x.dutyDescription))
    })

    // debugger
    const conditonOptions = this.getControlOfAddMore('conditonOptions');
    this.jobCard.tacJobcardConditions.forEach(x => {
      conditonOptions.push(this.patchCondition(x.conditionsId,x.jobConditions))
    })

    // debugger
    const jobSkillsOptions = this.getControlOfAddMore('jobSkillsOptions');
    this.jobCard.tacJobcardSkills.forEach(x => {
      jobSkillsOptions.push(this.patchSkills(x.skillsID,x.jobSkills))
    })

    debugger
    const courseOptions = this.getControlOfAddMore('courseOptions');
    this.jobCard.jobCardCourseLinkModelList.forEach(x => {
      courseOptions.push(this.patchCourses(x.courseId,x.mandatoryFlag,x.jobcardNo))
    })
    
  }

  formSetup(){

    this.userService.getGrades().subscribe(
      data=>  {
        var response =  <JobGradesListResponse>data
        if(response.status) {
        this.jobGrades =  response.data 
        this.formInit()
        this.patch() 
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
        this.formInit()
        this.patch() 
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
        this.formInit()
        this.patch() 
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
        this.formInit()
        this.patch() 
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
        //console.log(response)
      },
      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
    )
  }

  addMoreJobDuties(){
    const control = this.getControlOfAddMore('jobDutiesOptions');
    control.push(this.patchJobDuties( 0,""))
  }
  removeJobDuties(input){
    const control = this.getControlOfAddMore('jobDutiesOptions');
    control.removeAt(input)
  }
  addMoreConditions(){
    const control = this.getControlOfAddMore('conditonOptions');
    control.push(this.patchCondition( 0,""))
  }
  removeConditions(input){
    const control = this.getControlOfAddMore('conditonOptions');
    control.removeAt(input)
  }
  addMoreSkills(){
    const control = this.getControlOfAddMore('jobSkillsOptions');
    control.push(this.patchSkills( 0,""))
  }
  removeSkills(input){
    const control = this.getControlOfAddMore('jobSkillsOptions');
    control.removeAt(input)
  }

  addMoreTrainingCourses(){
    const control = this.getControlOfAddMore('courseOptions');
    control.push(this.patchCourses(0,0,0))
  }

  removeMoretargetAudienceTextarea(input){
    const control = this.getControlOfAddMore('courseOptions');
    control.removeAt(input)
  }

  getControlOfAddMore(name): FormArray {
    return <FormArray>this.form.get(name);
  }

  patchJobDuties(dutiesId,dutyDescription) {
    return this.fb.group({
      dutyDescription: [dutyDescription],
      dutiesId: [dutiesId]
    })
  }

  patchSkills(skillsID,jobSkills) {
    return this.fb.group({
      jobSkills: [jobSkills],
      skillsID: [skillsID]
    })
  }

  patchCondition(conditionsId,jobConditions) {
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

  onSubmit(buttonType):void{
    if (buttonType==="save") 
    {this.saveJobCard()}
    else if (buttonType==="search")
    {//this.searchInstructor()
    }
  }

  saveJobCard(){
    if(this.form.valid)
    {
    const jobCardDuties = this.getControlOfAddMore('jobDutiesOptions');
    var jobCardDutiesArray = <TacJobcardDuty[]>jobCardDuties.value

    const jobSkills = this.getControlOfAddMore('jobSkillsOptions');
    var jobSkillsArray = <TacJobcardSkill[]>jobSkills.value

    const jobConditions = this.getControlOfAddMore('conditonOptions');
    var jobConditionsArray = <TacJobcardCondition[]>jobConditions.value

    const courseOptions = this.getControlOfAddMore('courseOptions');
    var courseOptionsArray = <CourseJobCard[]>courseOptions.value
    var courseOptionsArrayUpdated:CourseJobCard[] =[]
    courseOptionsArray.forEach( item => {
      if(item.mandatoryFlag){item.mandatoryFlag=1}
      courseOptionsArrayUpdated.push(item)
    })
    courseOptionsArray = courseOptionsArrayUpdated
    var id= this.jobCard.jobcardNo
    this.jobCard={
      job: this.form.value.job,
      jobcardNo:id,
      jobGrade: this.form.value.jobGrade.psLevel,
      jobGroup: this.form.value.jobFamily.jobFamily,
      jobTitle: this.form.value.jobTitle.job,
      specialGroup: this.form.value.functionalArea.objid,
      tacJobcardConditions: jobConditionsArray,
      tacJobcardSkills: jobSkillsArray,
      tacJobcardDuties: jobCardDutiesArray,
      jobCardCourseLinkModelList:courseOptionsArray,
      trainingCenterStatus:false
      } 
       debugger
      this.trainingService.createJobCard(this.jobCard).subscribe(
        data=>this.successSaveInstructor(data),
        error=>{
          console.log(error)
          this.toastr.error(error.message)
        }
      );
      }else{
        this.toastr.error("Please fill required fields") 
      }
  }
  
  successSaveInstructor(data){
    if(data.status==true){
      this.toastr.success(data.message)
      this.form.reset()
    }else{
      this.toastr.error(data.message)
    }
  }

  loadDataFromParam(){
    //console.log(this.param);
    this.activatedRoute.params.subscribe(params => {
      if(params['id']){
          this.param = params['id'];
      }
     });  
      if(this.param!='' && this.param!=undefined){
        let jobCard=new JobCardDataSearch()
        jobCard.job= this.param
        this.trainingService.getJobCardById(jobCard).subscribe(
          data => this.loadData(data),
          error => {
            this.toastr.error(error.message)
          }
        )
      }
  }

  loadData(data){
    this.jobCard = data.data;
    this.formInit()
    this.patch() 
  }


  }