import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PageTitleService } from 'app/core/page-title/page-title.service';

@Component({
  selector: 'ms-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.scss']
})
export class UserCreationComponent implements OnInit {

  form:FormGroup


  constructor(
    private fb:FormBuilder,
     private pageTitleService: PageTitleService){
      this.pageTitleService.setTitle("User Creration")
    this.formInit()

   // this.formInit()
    //this.patch()
   // this.formSetup()
   // this.loadDataFromParam()
  }

  formInit()
  {
    this.form = this.fb.group({
      enabledUser:[null, Validators.compose([Validators.required])],
      jobId:[null, Validators.compose([Validators.required])],
      userRole:[null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
      status:[null, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
  }

  onSubmit(event){}

}
