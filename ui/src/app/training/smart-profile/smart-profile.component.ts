import { Component, OnInit } from '@angular/core';
import { SearchUser, ISystemInstructorResponseList } from 'app/models/system-user';
import { PAGE_LIMIT } from 'app/app.constants';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TacInstructor } from 'app/models/tac-instructor';
import { TrainingService } from 'app/service/training/training.service';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { TrainingSystemServiceService } from 'app/service/training/training-system-service.service';
import { LanguageUtil } from 'app/app.language';
import { MainComponent } from 'app/main/main.component';
@Component({
  selector: 'ms-smart-profile',
  templateUrl: './smart-profile.component.html',
  styleUrls: ['./smart-profile.component.scss']
})
export class SmartProfileComponent implements OnInit {

  form:FormGroup
  language:LanguageUtil
  courses: any[] = [
    {
    from: 'جافا',
    subject: '10'
   }, 
   {
    from: 'جافا',
    subject: '10'
   },
   {
    from: 'جافا',
    subject: '10'
   }
 ];

  constructor(
    private userService:TrainingService,
    private fb:FormBuilder,
    private pageTitleService: PageTitleService,
    private toastr : ToastrService,
    private mainComponent:MainComponent,
    private activatedRoute: ActivatedRoute,){
    this.pageTitleService.setTitle("Smart Profile") 

    this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
  }


  ngOnInit() {
    this.formInit()
  }



  formInit()
  {
    this.form = this.fb.group({
      jobId:[null, Validators.compose([Validators.required])],
    });
  }



  ngDoCheck(): void {
    this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
  }

}
