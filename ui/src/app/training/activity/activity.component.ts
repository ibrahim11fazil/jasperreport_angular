import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "ng2-validation";
import {TrainingService} from "../../service/training/training.service";
import {TacActivity} from "../../models/tac-activity";
import {ToastrService} from "ngx-toastr";
import {PageTitleService} from "../../core/page-title/page-title.service";
import {Page} from "../../models/paged-data";
import { LanguageUtil } from 'app/app.language';
import { MainComponent } from 'app/main/main.component';
import { ErrorService } from 'app/service/error/error.service';

@Component({
  selector: 'ms-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  language:LanguageUtil
  public form: FormGroup;
  constructor(private fb: FormBuilder,
              private trainingService:TrainingService,
              private toastr : ToastrService,
              private pageTitleService: PageTitleService,
              private mainComponent:MainComponent,
              private errorService:ErrorService
              ) {
                this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
  }

  ngDoCheck(): void {
    this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
  }

  ngOnInit() {
    this.pageTitleService.setTitle("COURSE DEFINITION");
    this.form = this.fb.group({
      // activityName: [null, Validators.required],
      activityName:  [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(25)])]
    });
    this.searchActivity()
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
    if(this.form.value.activityName!=null)
    this.trainingService.changeActivitySearchMessage(this.form.value.activityName)
    else
    this.trainingService.changeActivitySearchMessage("")
  }



}
