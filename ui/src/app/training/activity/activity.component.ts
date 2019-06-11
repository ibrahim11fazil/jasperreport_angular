import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "ng2-validation";
import {TrainingService} from "../../service/training/training.service";
import {TacActivity} from "../../models/tac-activity";
import {ToastrService} from "ngx-toastr";
import {PageTitleService} from "../../core/page-title/page-title.service";
import {Page} from "../../models/paged-data";

@Component({
  selector: 'ms-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder,
              private trainingService:TrainingService,
              private toastr : ToastrService
              ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      activityName: [null, Validators.compose([Validators.required])],
    });
  }

  onSubmit(buttonType): void {
    if(buttonType==="save") {
      this.saveActivity()
    }
    else if(buttonType==="search"){
      this.searchActivity()
    }
  }

  saveActivity(){
    debugger;
    let activity = new TacActivity(this.form.value.activityName,0)
    this.trainingService.saveActivity(activity).subscribe(
        data=>this.successSaveActivity(data),
        error=>{
          console.log(error)
          this.toastr.error(error.message)
        }
    )
  }

  successSaveActivity(data){
    if(data.status==true){
      this.toastr.success(data.message)
      this.form.reset()
    }else{
      this.toastr.error(data.message)
    }
  }

  searchActivity(){
    //console.log("searching")
    if(this.form.value.activityName!=null)
    this.trainingService.changeActivitySearchMessage(this.form.value.activityName)
  }



}
