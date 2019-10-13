import { Component, OnInit } from '@angular/core';
import { SearchUser, ISystemInstructorResponseList } from 'app/models/system-user';
import { PAGE_LIMIT, GET_EMPLOYEE_PROFILE, GET_JOB_CARD_USER_PROFILE, GET_USER_COURSE_ATTENDED, GET_CERTIFICATE } from 'app/app.constants';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TacInstructor } from 'app/models/tac-instructor';
import { TrainingService } from 'app/service/training/training.service';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { TrainingSystemServiceService } from 'app/service/training/training-system-service.service';
import { LanguageUtil } from 'app/app.language';
import { MainComponent } from 'app/main/main.component';
import { AuthService } from 'app/service/auth-service/auth.service';
import { SmartProfileUserRequestModel, SmartProfileUserResponseModel, JobCardProfileRequest, UserCourseRequestedResponse, JobCardProfile, UserCourseResponseProfile } from 'app/models/smart-profile-model';
import { CertificateRequest, CertificateRequestOnlyJobId, ResponseCertificateList } from 'app/models/certificate-request';
import { TranslateService } from '@ngx-translate/core';
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

   userProfile   :SmartProfileUserResponseModel
   certificates  :CertificateRequest[]
   jobCardProfile:JobCardProfile[]=[]
   userCourseResponseProfile:UserCourseResponseProfile[]=[]

  constructor(
    private authService:AuthService,
    private trainingService:TrainingService,
    private fb:FormBuilder,
    private pageTitleService: PageTitleService,
    private toastr : ToastrService,
    private mainComponent:MainComponent,
    private translate:TranslateService,
    private activatedRoute: ActivatedRoute,){
    this.pageTitleService.setTitle("Smart Profile") 
    this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
  }


  ngOnInit() {
    this.formInit()
    var userCode =  this.authService.getLegacyCode()
    this.getUserInformations(userCode,false)
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

  getUserInformations(jobId:String,isSearch:Boolean){
    if(!isSearch){
      jobId =  this.authService.getLegacyCode()
    }
    this.getUserProfile(jobId,isSearch)
    this.getCertificates(jobId,isSearch)
    this.getUserJobCard(jobId,isSearch)
    this.getUserCoursesAttended(jobId,isSearch)
  }


  getCertificates(jobId:String,isSearch:Boolean){
    var item =new CertificateRequestOnlyJobId()
    item.jobId=jobId
   this.trainingService.getCertificateListByJobId(item)
   .subscribe(data => {
         var response = <ResponseCertificateList>data
         if(response.status && response.data.length>0){
          response.data.forEach(item => {
            item.certificateUid = GET_CERTIFICATE + item.certificateUrl
          })
          this.certificates =  response.data
         }else{
          this.certificates =[]
         }
   } ,
   error => this.toastr.error(error.message))

  }

  getUserProfile(jobId:String,isSearch:Boolean){
    var input = new SmartProfileUserRequestModel()
    input.jobIdRequested =jobId
    this.trainingService.getEmployeeSmartProfile(input).subscribe(
      data => {
        var response = <SmartProfileUserResponseModel>data
        if (response.status && response.data.length>0) {
          this.userProfile=response.data[0]
          if(isSearch && jobId.trim()==this.userProfile.legacycode.trim()){
            this.toastr.info("You dont have permission to get this user details," + jobId )
          }
        }
        else {
          console.log(response.message)
          this.toastr.error(response.message.toString())
        }
      },
      error => this.toastr.error(error.message)
    )
  }

  

  getUserJobCard(jobId:String,isSearch:Boolean){
    var input = new SmartProfileUserRequestModel()
    input.jobIdRequested =jobId
    this.trainingService.getEmployeeJobCardForSmartProfile(input).subscribe(
      data => {
        var response = <JobCardProfileRequest>data
        if (response.status && response.data.length>0) {
          this.jobCardProfile=response.data
        }
        else {
          console.log(response.message)
          this.toastr.error(response.message.toString())
        }
      },
      error => this.toastr.error(error.message)
    )
  }

  

  getUserCoursesAttended(jobId:String,isSearch:Boolean){
    var input = new SmartProfileUserRequestModel()
    input.jobIdRequested =jobId
    this.trainingService.getEmployeeCourseAttendedForSmartProfile(input).subscribe(
      data => {
        var response = <UserCourseRequestedResponse>data
        if (response.status &&  response.data.length) {
          this.userCourseResponseProfile=response.data
        }
        else {
          console.log(response.message)
          this.toastr.error(response.message.toString())
        }
      },
      error => this.toastr.error(error.message)
    )
  }

}
