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
import { SmartProfileUserResponseAjax, SmartProfileUserRequestModel, SmartProfileUserResponseModelAjax, SmartProfileUserResponse, SmartProfileUserResponseModel } from 'app/models/smart-profile-model';
import { WorkflowService } from 'app/service/training/workflow.service';
import { SystemUserService } from 'app/service/user/system-user.service';
import { MawaredUserResponse } from 'app/models/system-user';
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
  selectedLegacyCode:String=null
  page = 0
  ds: UserDelegation[] = [];
  displayedColumns: string[] = ['id','fromUser', 'toUser', 'startDate','endDate','delete'];
  data : UserDelegation;
  firstSearch=false
  cNameStatus:String=""
  filteredUsers: SmartProfileUserResponseModelAjax[] = [];
  userProfile   :SmartProfileUserResponseModel
  constructor(
    private userService:SystemUserService,
    private fb: FormBuilder,
    private trainingService: TrainingService,
    private toastr: ToastrService,
    private workflowService:WorkflowService,
    private mainComponent:MainComponent,
    private activatedRoute: ActivatedRoute,
    private pageTitleService: PageTitleService,
    private errorService:ErrorService) {}

  clear(){
  this.cNameStatus=""
  this.selectedLegacyCode=null
  this.ngOnInit()
    }

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
    this.selectedLegacyCode=user.legacycode.toString()
    this.cNameStatus=""
    this.form.patchValue({
      jobId: user.legacycode, 
    });
  }


  onSubmit(){

    var legacyS=null
    debugger
    if(this.selectedLegacyCode!=null)
        legacyS = this.selectedLegacyCode
    else
        legacyS =this.form.value.jobId

    if(this.form.valid){
    if(legacyS!=null && this.form.value.startDate!=null && 
      this.form.value.endDate!=null){
        if(this.form.value.startDate.getTime()<=this.form.value.endDate.getTime()){
         
          const delegation = new UserDelegation()
          delegation.priority=1
          delegation.endDate=this.form.value.endDate
          delegation.startDate=this.form.value.startDate
          delegation.toUser=legacyS
          this.getUserProfile(delegation)
          
        }else{
          this.toastr.info(this.language.datesValidationInDelgation.toString()) 
        }
    }else{
      this.toastr.info(this.language.validationDelegation.toString())
    }
  }else{
    this.toastr.info(this.language.validationDelegation.toString())
  }
  }

  saveDate(delegation){
    this.workflowService.saveDelegation(delegation).subscribe(
      data => {
        var response = <UserDelegationResponse>data
          if (response.status) {
            this.toastr.info(response.message.toString())
            this.clear()
          }else{
            this.toastr.error(response.message.toString())
          }
        },
        error => {
          console.log(error)
          this.errorService.errorResponseHandling(error)
        }
    )
  }

  

  loadDelegations() {
    this.workflowService.listUserDelegation().subscribe(
      data => {
      var response = <UserDelegationResponseList>data
        if (response.status) {
          this.ds=response.data 
          this.ds = [...this.ds]; 
        }else{
          this.toastr.info(this.language.delegationsNotFound.toString())
        }
      },
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
      }
    )
  }

  cancelRow(element:UserDelegation){
    this.workflowService.deleteUserDelegation(element).subscribe(
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
  }

  getUserProfile(delegation: UserDelegation) {
    var input = new SmartProfileUserRequestModel()
    input.jobIdRequested = delegation.toUser
    this.trainingService.getEmployeeSmartProfile(input).subscribe(
      data => {
        var response = <SmartProfileUserResponse>data
        if (response.status && response.data.length > 0) {
          this.userProfile = response.data[0]
          if(this.userProfile!=null){
            this.saveDate(delegation)
            }
          }
        else {
          console.log(response.message)
          this.toastr.error(response.message.toString())
        }
      },
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
      }
    )
  }

  onJobIdChange(event){
    if( this.form.value.jobId!=null && this.form.value.jobId!="" ){
      this.getUserById(this.form.value.jobId)
    }
  }

  getUserById(jobId){
    this.userService.getUserById(jobId).subscribe(
      data=>{
        var response = <MawaredUserResponse>data
        if(response.data!=null){
        this.cNameStatus=""
        this.form.patchValue({
          empName:response.data.cnameAr
        });
        }else{
          this.cNameStatus= this.language.invalidUser.toString()
        }
      },
      error=>{
        console.log(error.message)
        this.cNameStatus= this.language.invalidUser.toString()
      }
    )
  }


}
