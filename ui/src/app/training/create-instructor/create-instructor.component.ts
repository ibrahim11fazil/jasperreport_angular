import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { TrainingService } from '../../service/training/training.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'ms-create-instructor',
  templateUrl: './create-instructor.component.html',
  styleUrls: ['./create-instructor.component.scss']
})
export class CreateInstructorComponent implements OnInit {

  form:FormGroup


  constructor(
    private fb:FormBuilder,
     private pageTitleService: PageTitleService,
     private trainingService: TrainingService,
     private toastr : ToastrService){
      this.pageTitleService.setTitle("Instructor Registration")
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

  onSubmit(event){}

}
