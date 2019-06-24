import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { TrainingService } from '../../service/training/training.service';
import { ToastrService } from 'ngx-toastr';
import { TacInstructor, Subject, Qualifiacation, SubjectListResponse, QualifiacationListResponse, TacInstructorRequest } from '../../models/tac-instructor';
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
  qualifications:Qualifiacation[] =[]
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
      this.pageTitleService.setTitle("Instructor Registration"),
      this.tacInstructor={
      jobId:"",
      name:"",
      ibanNo:"",
      qid:""} 

   
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
      instructorType:[null, Validators.compose([Validators.required])],
      jobId:[null, Validators.compose([Validators.required])],
      instructorName: [null, Validators.compose([Validators.required])],
      organization:[null, Validators.compose([Validators.required])],
      qid: [null, Validators.compose([Validators.required])],
      passportNo: [null, Validators.compose([Validators.required])],
      ibanNo:[null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      subject:[null, Validators.compose([Validators.required])],
      qualifications:[null, Validators.compose([Validators.required])],
      photo:[null, Validators.compose([Validators.required])],
      priority:[null, Validators.compose([Validators.required])]
    });
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
    this.tacInstructor={
      jobId:this.form.value.jobId,
      name:this.form.value.instructorName,
      ibanNo:this.form.value.ibanNo,
      qid:this.form.value.qidPassport,
      photo:this.fileuploader.fileName
    }
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
        console.log(this.param);
        let instructor=new TacInstructorRequest()
        instructor.instructorId= this.param
        this.trainingService.getInstructorById(instructor).subscribe(
          data => this.loadData(data),
          error => {
            console.log(error)
            this.toastr.error(error.message)
          }
        )
      }
  }

  loadData(data){
    this.tacInstructor = data.data;
    this.formInit()
    //TODO need to do
    //this.patch() 
  }


}
