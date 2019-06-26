import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { TrainingService } from '../../service/training/training.service';
import { ToastrService } from 'ngx-toastr';
import { TacInstructor, Subject, Qualification, SubjectListResponse, QualifiacationListResponse, TacInstructorRequest } from '../../models/tac-instructor';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';
import { PRIORITY_LIST } from 'app/app.constants';
import { ActivatedRoute } from '@angular/router';
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
  param:any;
  @ViewChild('fileUploaderComponent') public fileuploader:FileUploaderComponent
  constructor(
    private fb:FormBuilder,
     private pageTitleService: PageTitleService,
     private trainingService: TrainingService,
     private toastr : ToastrService,
     private activatedRoute: ActivatedRoute){
      this.pageTitleService.setTitle("Instructor Registration")
      this.tacInstructor={
      instructorId:0,
      jobId:"",
      name:"",
      ibanNo:"",
      qid:"",
      passportNo:""
    } 

   
    //this.patch()
   // this.formSetup()
   // this.loadDataFromParam()

  }

  ngOnInit() {
    this.formInit()
    this.formSetup()
    this.loadDataFromParam()

  }

  formInit()
  {
    this.form = this.fb.group({
      jobId:[this.tacInstructor.jobId, Validators.compose([Validators.required])],
      instructorName: [ this.tacInstructor.name, Validators.compose([Validators.required])],
      organization:[this.tacInstructor.companyName, Validators.compose([Validators.required])],
      qid: [this.tacInstructor.qid, Validators.compose([Validators.required])],
      passportNo: [this.tacInstructor.passportNo, Validators.compose([Validators.required])],
      ibanNo:[this.tacInstructor.ibanNo, Validators.compose([Validators.required])],
      email: [this.tacInstructor.email, Validators.compose([Validators.required])],
      subject:this.fb.array([]),
      qualification:this.fb.array([]),
      photo:[null, Validators.compose([Validators.required])],
      priority:[null, Validators.compose([Validators.required])],
      instructorType:[null, Validators.compose([Validators.required])],
    });
  }

  patch(){
    //TODO need to patch 
    const controlSubjectOptions = this.getControlOfAddMore('subject');
    this.tacInstructor.tacCommSubjects.forEach(x => {
      controlSubjectOptions.push(this.patchValuesSubjects(x.subjectId, x.subjectName,x.subjectId))
    })

    const controlQualificationsOptions = this.getControlOfAddMore('qualification');
    this.tacInstructor.tacCommQualifications.forEach(x => {
      controlQualificationsOptions.push(this.patchValuesQualifications(x.qualificationId, x.qualificationName,x.qualificationId))
    })
    
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
        this.toastr.error(error.message)
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
        this.toastr.error(error.message)
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
    debugger
    const subjectsCtrl = this.getControlOfAddMore('subject');
    var subjectsArray = <Subject[]>subjectsCtrl.value

    const qualificationCtrl = this.getControlOfAddMore('qualification');
    var qualificationArray = <Qualification[]>qualificationCtrl.value

    this.tacInstructor={
      instructorId:this.tacInstructor.instructorId,
      jobId:this.form.value.jobId,
      name:this.form.value.instructorName,
      ibanNo:this.form.value.ibanNo,
      qid:this.form.value.qidPassport,
      photo:this.fileuploader.fileName,
      tacCommSubjects:subjectsArray,
      tacCommQualifications:qualificationArray
    }
    console.log(this.tacInstructor)
    this.trainingService.saveInstructor(this.tacInstructor).subscribe(
        data=>this.successSaveInstructor(data),
        error=>{
          console.log(error)
          this.toastr.error(error.message)
        }
    )
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
        debugger
        this.trainingService.getInstructorById(instructor).subscribe(
          data => this.loadData(data),
          error => {
            this.toastr.error(error.message)
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


  


}
