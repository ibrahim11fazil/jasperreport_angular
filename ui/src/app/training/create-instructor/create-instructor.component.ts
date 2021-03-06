import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { TrainingService } from '../../service/training/training.service';
import { ToastrService } from 'ngx-toastr';
import { TacInstructor, Subject, Qualification, SubjectListResponse, QualifiacationListResponse, TacInstructorRequest } from '../../models/tac-instructor';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';
import { PRIORITY_LIST } from 'app/app.constants';
import { ActivatedRoute } from '@angular/router';
import { SystemUserService } from 'app/service/user/system-user.service';
import { MawaredUserResponse, MawaredUser } from 'app/models/system-user';
import { MainComponent } from 'app/main/main.component';
import { Language } from '@amcharts/amcharts4/core';
import { LanguageUtil } from 'app/app.language';
import { ErrorService } from 'app/service/error/error.service';
//import { TacInstrcutor, ITacInstructor } from 'app/models/tac-instructor';


@Component({
  selector: 'ms-create-instructor',
  templateUrl: './create-instructor.component.html',
  styleUrls: ['./create-instructor.component.scss']
})
export class CreateInstructorComponent implements OnInit {

  subjects:Subject[] =[]
  qualifications:Qualification[] =[]
  form:FormGroup
  tacInstructor:TacInstructor
  priorityList =PRIORITY_LIST 
  language:LanguageUtil;
  param:any;
  isEmployeeStatus:Boolean
  @ViewChild('fileUploaderComponent') public fileuploader:FileUploaderComponent
  cNameAr: any;
  constructor(
     private fb:FormBuilder,
     private pageTitleService: PageTitleService,
     private trainingService: TrainingService,
     private toastr : ToastrService,
     private userService:SystemUserService,
     private mainComponent:MainComponent,
     private activatedRoute: ActivatedRoute,
     private errorService: ErrorService) {
     this.pageTitleService.setTitle("Instructor Registration")
     this.loadForm()
      
     this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
    //this.patch()
   // this.formSetup()
   // this.loadDataFromParam()

  }



  loadForm(){
    this.tacInstructor={
      instructorId:0,
      typeFlag:0,
      priority:0,
      jobId:"",
      name:"",
      ibanNo:"",
      qid:"",
      passportNo:""
    } 
  }

  ngDoCheck(): void {
    this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
  }
  
  ngOnInit() {
    this.formSetup()
    this.formInit()
    this.loadDataFromParam()
  }

  formInit()
  {
    var priority = this.priorityList.find(i => i.value==this.tacInstructor.priority)
    this.form = this.fb.group({
      jobId:[this.tacInstructor.jobId, Validators.compose([Validators.required])],
      instructorName: [ this.tacInstructor.name, Validators.compose([Validators.required])],
      organization:[this.tacInstructor.companyName, Validators.compose([Validators.required])],
      qid: [this.tacInstructor.qid, Validators.compose([Validators.required,Validators.minLength(11),Validators.maxLength(11)])],
      passportNo: [this.tacInstructor.passportNo],
      ibanNo:[this.tacInstructor.ibanNo, Validators.compose([Validators.required])],
      email: [this.tacInstructor.email, Validators.compose([Validators.required,Validators.email])],
      department:[this.tacInstructor.department, Validators.compose([Validators.required])],
      subject:this.fb.array([]),
      qualification:this.fb.array([]),
      priority:[priority, Validators.compose([Validators.required])],
      phone:this.tacInstructor.phone,
      jobTitle:this.tacInstructor.jobTitle,
      typeFlag:[this.tacInstructor.typeFlag.toString(), Validators.compose([Validators.required])]
    });
  }

  patch(){
  
    const controlSubjectOptions = this.getControlOfAddMore('subject');
    this.tacInstructor.tacCommSubjects.forEach(x => {
      controlSubjectOptions.push(this.patchValuesSubjects(x.subjectId, x.subjectName, x.subjectId))
    })
    const controlQualificationsOptions = this.getControlOfAddMore('qualification');
    this.tacInstructor.tacCommQualifications.forEach(x => {
      controlQualificationsOptions.push(this.patchValuesQualifications(x.qualificationId, x.qualificationName, x.qualificationId))
    })
    if (this.tacInstructor.photo != "") {
      this.fileuploader.updateView(this.tacInstructor.photo);
    }
  }

  getControlOfAddMore(name): FormArray {
    return <FormArray>this.form.get(name);
  }

  formSetup(){
    this.trainingService.getAllSubjects().subscribe(
      data => {
        var response = <SubjectListResponse> data
        this.subjects=response.data
        console.log( this.subjects)
      },
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
      }
    )
    this.trainingService.getAllQualificaitons().subscribe(
      data => {
        var response = <QualifiacationListResponse> data
        this.qualifications=response.data
        console.log( this.qualifications)
      },
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
      }
    )
  }

  
  onSubmit(buttonType):void{
    if (buttonType==="save") 
    {this.saveInstructor()}
    else if (buttonType==="search")
    {this.searchInstructor()}
  }

  saveInstructor(){
    if(this.form.valid){
    const subjectsCtrl = this.getControlOfAddMore('subject');
    var subjectsArray = <Subject[]>subjectsCtrl.value
    const qualificationCtrl = this.getControlOfAddMore('qualification');
    var qualificationArray = <Qualification[]>qualificationCtrl.value
    var priority = this.priorityList.find(i => i.value==this.form.value.priority.value)
    this.tacInstructor = {
      instructorId:this.tacInstructor.instructorId,
      jobId:this.form.value.jobId,
      name:this.form.value.instructorName,
      department:this.form.value.department,
      email:this.form.value.email,
      ibanNo:this.form.value.ibanNo,
      qid:this.form.value.qid,
      passportNo:this.form.value.passportNo,
      companyName:this.form.value.organization,
      tacCommSubjects:subjectsArray,
      tacCommQualifications:qualificationArray,
      typeFlag:Number(this.form.value.typeFlag),
      priority:priority.value,
      photo:this.fileuploader.fileName,
      phone:this.form.value.phone,
      jobTitle:this.form.value.jobTitle
    }
    console.log(this.tacInstructor)
    this.trainingService.saveInstructor(this.tacInstructor).subscribe(
        data=>this.successSaveInstructor(data),
        error=>{
          console.log(error)
          this.toastr.error(error.message)
        }
    )
      }else{
        this.errorService.errorString("Please fill required fields") 
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

  searchInstructor(){

  }

  loadDataFromParam(){
    //console.log(this.param);
    this.activatedRoute.params.subscribe(params => {
      if(params['id']){
          this.param = params['id'];
      }
     });  
      if(this.param!='' && this.param!=undefined){
        let instructor=new TacInstructorRequest()
        instructor.instructorId= this.param
        this.trainingService.getInstructorById(instructor).subscribe(
          data => this.loadData(data),
          error => {
            console.log(error)
            this.errorService.errorResponseHandling(error)
          }
        )
      }
  }

  loadData(data){
    this.tacInstructor = data.data;
    this.formInit()
    this.patch() 
  }

  addSubjects(){
    const control = this.getControlOfAddMore('subject');
    control.push(this.patchValuesSubjects(0, "",0))
  }

  removeSubjects(i){
    const control = this.getControlOfAddMore('subject');
    control.removeAt(i)
  }

  addQualifications(){
    const control = this.getControlOfAddMore('qualification');
    control.push(this.patchValuesQualifications(0,"",0))
  }

  removeQualifications(i){
    const control = this.getControlOfAddMore('qualification');
    control.removeAt(i)
  }

  patchValuesSubjects(subjectId, subjectName,instructorId) {
    return this.fb.group({
      subjectId: [subjectId],
      subjectName: [subjectName],
      instructorId:[instructorId]
    })
  }

  patchValuesQualifications(qualificationId, qualificationName,instructorId) {
    return this.fb.group({
      qualificationId: [qualificationId],
      qualificationName: [qualificationName],
      instructorId:[instructorId]
    })
  }


 
  
  onJobIdChange(event){
    if( Number(this.form.value.typeFlag)!=2 && this.form.value.jobId!=null && this.form.value.jobId!="" ){
      this.getUserById(this.form.value.jobId)
      this.isEmployeeStatus=true
    }else{
      this.isEmployeeStatus=false
      this.tacInstructor={
        instructorId:0,
        typeFlag:Number(this.form.value.typeFlag),
        priority:0,
        jobId:this.form.value.jobId,
        name:"",
        ibanNo:"",
        qid:"",
        passportNo:""
      } 
      this.formInit()

    }
  }

  getUserById(jobId){
    this.userService.getUserById(jobId).subscribe(
      data=>{
        //this.toastr.info("Valid User")
        var response = <MawaredUserResponse>data
        if(response.data!=null){
        this.updateTacInstructorView(response.data)
        }else{
          this.cNameAr= this.language.error_invalid_user
        }
      },
      error=>{
        console.log(error.message)
        this.cNameAr= this.language.error_invalid_user
      }
    )
  }

  updateTacInstructorView(data){
    this.form.reset()
    var response = <MawaredUser> data
    this.tacInstructor = {
      instructorId:0,
      jobId:response.jobId,
      name:response.cnameAr,
      department:response.department,
      email:response.email,
      ibanNo:response.iban,
      qid:response.qid,
      phone:response.mobile,
      passportNo:"",
      companyName:"Customs",
      tacCommSubjects:[],
      tacCommQualifications:[],
      typeFlag:1,
      priority:null,
      photo:"",
      //phone:"",
      jobTitle:response.jobTitle,
      qualification:response.qualification
    }
    this.formInit()
  }


  


}
