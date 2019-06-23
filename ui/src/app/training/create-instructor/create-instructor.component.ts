import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { TrainingService } from '../../service/training/training.service';
import { ToastrService } from 'ngx-toastr';
import { TacInstructor } from '../../models/tac-instructor';
//import { TacInstrcutor, ITacInstructor } from 'app/models/tac-instructor';


@Component({
  selector: 'ms-create-instructor',
  templateUrl: './create-instructor.component.html',
  styleUrls: ['./create-instructor.component.scss']
})
export class CreateInstructorComponent implements OnInit {

  form:FormGroup
  tacInstructor:TacInstructor 
  
  constructor(
    private fb:FormBuilder,
     private pageTitleService: PageTitleService,
     private trainingService: TrainingService,
     private toastr : ToastrService){
      this.pageTitleService.setTitle("Instructor Registration"),
      this.tacInstructor={jobid:"",name:"",ibanno:"",qid:""}
    this.formInit()

   // this.formInit()
    //this.patch()
   // this.formSetup()
   // this.loadDataFromParam()
  }

  formInit()
  {
    this.form = this.fb.group({
      instructorType:[null, Validators.compose([Validators.required])],
      instructorName: [null, Validators.compose([Validators.required])],
      organization:[null, Validators.compose([Validators.required])],
      qidPassport: [null, Validators.compose([Validators.required])],
      ibanNo:[null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      subject:[null, Validators.compose([Validators.required])],
      qualifications:[null, Validators.compose([Validators.required])],
      photo:[null, Validators.compose([Validators.required])],
      priority:[null, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
  }

  onSubmit(buttonType):void{
    if (buttonType==="save") 
    {this.saveInstructor()}
    else if (buttonType==="search")
    {this.searchInstructor()}
  }


  saveInstructor(){
    this.tacInstructor={
      jobid:this.form.value.jobId,
      name:this.form.value.instructorName,
      ibanno:this.form.value.ibanNo,
      qid:this.form.value.qidPassport
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
    //if(this.form.value.instructorName!=null)
    //this.trainingService.changeInstructorSearchMessage(this.form.value.instructorName)
    //else
   // this.trainingService.changeInstructorSearchMessage("")
  }
// code reference


// Code reference






}
