import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "ng2-validation";
import {TrainingService} from "../../service/training/training.service";
import {TacActivity} from "../../models/tac-activity";


@Component({
  selector: 'ms-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder,private trainingService:TrainingService) { }

  ngOnInit() {
    this.form = this.fb.group({
      activityName: [null, Validators.compose([Validators.required])],
    });
  }
  saveActivity(){
    debugger
    console.log(this.form.value.activityName);

    //let activity = {"activityName":this.form.value.activityName}
    //let obj = activity as TacActivity;
    let activity = new TacActivity(this.form.value.activityName,0);
    this.trainingService.saveActivity(activity).subscribe(
        data=>console.log(data),
        error=>console.log(error)
    )
  }

}
