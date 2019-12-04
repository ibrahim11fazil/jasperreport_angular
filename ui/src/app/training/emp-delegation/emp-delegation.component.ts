import { Component, OnInit } from '@angular/core';
import { LanguageUtil } from 'app/app.language';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainingService } from 'app/service/training/training.service';
import { ToastrService } from 'ngx-toastr';
import { MainComponent } from 'app/main/main.component';
import { ActivatedRoute } from '@angular/router';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { ErrorService } from 'app/service/error/error.service';
import { UserDelegation, UserDelegationResponse, UserDelegationResponseList } from 'app/models/workflow';
import { DatePipe } from '@angular/common';
import { CourseManagementRes, ITacCourseManagementList } from 'app/models/tac-course-master';
import { Page } from 'app/models/paged-data';
import { Observable } from 'rxjs';
import { tap, debounceTime, switchMap, finalize } from 'rxjs/operators';
import { SmartProfileUserResponseAjax, SmartProfileUserRequestModel, SmartProfileUserResponseModelAjax } from 'app/models/smart-profile-model';
import { WorkflowService } from 'app/service/training/workflow.service';
@Component({
  selector: 'ms-emp-delegation',
  templateUrl: './emp-delegation.component.html',
  styleUrls: ['./emp-delegation.component.scss']
})
export class EmpDelegationComponent implements OnInit {
  language:LanguageUtil;
  public form: FormGroup;
  userDelegationModel:UserDelegation
  isLoading = false;
  selectedLegacyCode=null
  page = 0
  commentTxt=""
  ds: UserDelegation[] = [];
  displayedColumns: string[] = ['id','fromUser', 'toUser', 'startDate','endDate','delete'];
  data : UserDelegation;
  firstSearch=false
  filteredUsers: SmartProfileUserResponseModelAjax[] = [];
  constructor(private fb: FormBuilder,
    private trainingService: TrainingService,
    private toastr: ToastrService,
    private workflowService:WorkflowService,
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
    this.formSetup()
  }

  formInit() {
    let delegation = new UserDelegation() 
    this.userDelegationModel = delegation
    this.form = this.fb.group({
      empName: [null],
      startDate:  [null, Validators.compose([Validators.required])],
      endDate: [null, Validators.compose([Validators.required])],
      jobId:[null, Validators.compose([Validators.required])]
    });
    this.searchOnChangeForName()
  }

  formSetup() {
    this.ds = new Array<UserDelegation>();
    this.ds = [...this.ds];
    this.page = 0
    this.firstSearch=true
    this.loadDelegations()
  }


  searchOnChangeForName(){
    this.form
    .get('empName')
    .valueChanges
    .pipe(
      debounceTime(100),
      tap(() => this.isLoading = true),
      switchMap(value => this.getEmployeeSmartProfileBasicInfoAjax(value)
      .pipe(
        finalize(() => this.isLoading = false),
        )
      )
    )
    .subscribe(users => {
      console.log(users.data)
      this.filteredUsers = users.data
    });
  }

  getEmployeeSmartProfileBasicInfoAjax(input): Observable<SmartProfileUserResponseAjax> {
    if(input!=null && input.legacycode!=null){
       input=""
    }
    var item = new  SmartProfileUserRequestModel()
    item.empName=input
   return this.trainingService.getEmployeeSmartProfileBasicInfo(item)
    .pipe(
      tap((response: SmartProfileUserResponseAjax) => {
         var   dataResponse =   response.data
          .map(user => new SmartProfileUserResponseModelAjax(user.legacycode,user.cname_AR))
          .filter(user => user.cname_AR.includes(input))
        return dataResponse;
      })
      );
  }

  displayFnUser(user: SmartProfileUserResponseModelAjax) {
    if (user) { return user.cname_AR; }
  }

  displayFn(user) {
    console.log(user.legacycode)
    this.selectedLegacyCode=user.legacycode
   //this.getUserInformations(user.legacycode,true) 
  }


  onSubmit(){

    let legacyS=null
    if(this.selectedLegacyCode!=null)
        legacyS = this.selectedLegacyCode
    else
        legacyS =this.form.value.jobId
    if(this.form.valid){
    if(legacyS!=null && this.form.value.startDate!=null && 
      this.form.value.endDate!=null){
        console.log(this.form.value.startDate.getTime())
        console.log(this.form.value.endDate.getTime())
        if(this.form.value.startDate.getTime()<=this.form.value.endDate.getTime()){
          this.toastr.info("All valid")
          const delegation = new UserDelegation()
          delegation.priority=1
          delegation.endDate=this.form.value.endDate
          delegation.startDate=this.form.value.startDate
          delegation.toUser=legacyS

          this.workflowService.saveDelegation(delegation).subscribe(
            data => {
              var response = <UserDelegationResponse>data
                if (response.status) {
                  this.toastr.info(response.message.toString())
                  this.loadDelegations()
                }else{
                  this.toastr.error(response.message.toString())
                }
              },
              error => {
                console.log(error)
                this.errorService.errorResponseHandling(error)
              }
          )
        }else{
          this.toastr.info("Dates are not valid, end date is same or after the start date")
        }


    }else{
      this.toastr.info(this.language.validationDelegation.toString())
    }
  }else{
    this.toastr.info(this.language.validationDelegation.toString())
  }
  }

  

  loadDelegations() {
    this.workflowService.listUserDelegation().subscribe(
      data => {
      var response = <UserDelegationResponseList>data
        if (response.status) {
          this.ds=response.data 
          this.ds = [...this.ds]; 
        }else{
          this.toastr.info("No items found")
        }
      },
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
      }
    )
  }


}
