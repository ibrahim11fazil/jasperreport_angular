import { Component, OnInit } from '@angular/core';
import { LanguageUtil } from 'app/app.language';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainingService } from 'app/service/training/training.service';
import { ToastrService } from 'ngx-toastr';
import { MainComponent } from 'app/main/main.component';
import { ActivatedRoute } from '@angular/router';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { ErrorService } from 'app/service/error/error.service';
import { UserDelegation } from 'app/models/workflow';

@Component({
  selector: 'ms-emp-delegation',
  templateUrl: './emp-delegation.component.html',
  styleUrls: ['./emp-delegation.component.scss']
})
export class EmpDelegationComponent implements OnInit {
  language:LanguageUtil;
  public form: FormGroup;
  userDelegationModel:UserDelegation
  constructor(private fb: FormBuilder,
    private trainingService: TrainingService,
    private toastr: ToastrService,
    private mainComponent:MainComponent,
    private activatedRoute: ActivatedRoute,
    private pageTitleService: PageTitleService,
    private errorService:ErrorService) {}


  ngDoCheck(): void
  {
   this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
  }

  ngOnInit() {
    this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
    this.pageTitleService.setTitle("Delegations")
    this.formInit()
  
  
  

  }

  formInit() {
    let delegation = new UserDelegation() 
    this.userDelegationModel = delegation
    this.form = this.fb.group({
      empName: [null, Validators.compose([Validators.required])],
      startDate: [null],
      endDate: [null, Validators.compose([Validators.required])],
    });
  }

}
