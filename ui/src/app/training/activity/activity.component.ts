import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "ng2-validation";
import {TrainingService} from "../../service/training/training.service";
import {TacActivity} from "../../models/tac-activity";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'ms-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder,private trainingService:TrainingService, private toastr : ToastrService) { }

  ngOnInit() {
    this.form = this.fb.group({
      activityName: [null, Validators.compose([Validators.required])],
    });
  }

  onSubmit(buttonType): void {
    if(buttonType==="save") {
      //console.log(buttonType)
      this.saveActivity()
    }
    if(buttonType==="search"){
      this.searchActivity()
      //console.log(buttonType)
    }

  }

  saveActivity(){
    let activity = new TacActivity(this.form.value.activityName,0);
    this.trainingService.saveActivity(activity).subscribe(
        data=>this.successSaveActivity(data),
        error=>{
          console.log(error)
          this.toastr.error(error.message);
        }
    )
  }

  successSaveActivity(data){
    if(data.status==true){
      this.toastr.success(data.message);
      this.form.reset();
    }else{
      this.toastr.error(data.message);
    }
  }

  searchActivity(){
    console.log("searching");
  }

}
