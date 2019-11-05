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
import { MainComponent } from 'app/main/main.component';
import { AuthService } from 'app/service/auth-service/auth.service';
import { SmartProfileUserRequestModel, SmartProfileUserResponseModel, SmartProfileUserResponse, JobCardProfileRequest, UserCourseRequestedResponse, JobCardProfile, UserCourseResponseProfile, SmartProfileUserResponseModelQucik, SmartProfileUserResponseModelQucik1, SmartProfileUserResponseModelAjax, SmartProfileUserResponseAjax } from 'app/models/smart-profile-model';
import { CertificateRequest, CertificateRequestOnlyJobId, ResponseCertificateList } from 'app/models/certificate-request';
import { TranslateService } from '@ngx-translate/core';

import { LanguageUtil } from 'app/app.language';
import { CourseManagementRes, ITacCourseManagementList } from 'app/models/tac-course-master';
import { Page } from 'app/models/paged-data';
import { ErrorService } from 'app/service/error/error.service';
import { Observable } from 'rxjs';
import { tap, debounceTime, switchMap, finalize } from 'rxjs/operators';


@Component({
  selector: 'ms-smart-profile',
  templateUrl: './smart-profile.component.html',
  styleUrls: ['./smart-profile.component.scss']
})
export class SmartProfileComponent implements OnInit {


  form:FormGroup
   language:LanguageUtil
   userProfile   :SmartProfileUserResponseModel
   certificates  :CertificateRequest[]=[]
   jobCardProfile:JobCardProfile[]=[]
   jobCardProfileSuggession:JobCardProfile[]=[]
   userCourseResponseProfile:UserCourseResponseProfile[]=[]
  displayCourses: boolean = false
  page = new Page();
  courseManagement:CourseManagementRes[]=[]
  isLoading = false;
  filteredUsers: SmartProfileUserResponseModelAjax[] = [];

  constructor(
    private authService: AuthService,
    private trainingService: TrainingService,
    private fb: FormBuilder,
    private pageTitleService: PageTitleService,
    private toastr: ToastrService,
    private mainComponent: MainComponent,
    //private translate:TranslateService,
    private activatedRoute: ActivatedRoute,
    private errorService:ErrorService ) {
    this.pageTitleService.setTitle("Smart Profile")
    this.userProfile = new SmartProfileUserResponseModel()

    this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());

  }
  ngDoCheck(): void {
    this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
  }

  ngOnInit() {
    this.clear()
    this.formInit()
    var userCode = this.authService.getLegacyCode()
    this.getUserInformations(userCode, false)
    this.searchOnChangeForName()

  }



  formInit() {
    this.form = this.fb.group({
      jobId: [null],
      qid:[null],
      empName:[null]
    });
  }

  clear() {
    this.userProfile = new SmartProfileUserResponseModel()
    this.certificates = []
    this.jobCardProfile = []
    this.jobCardProfileSuggession = []
    this.userCourseResponseProfile = []
  }

  getUserInformations(jobId: String, isSearch: Boolean) {
    if (!isSearch) {
      jobId = this.authService.getLegacyCode()
    }

    this.getUserProfile(jobId, isSearch)
    this.getCertificates(jobId, isSearch)
    this.getUserJobCard(jobId, isSearch)
    this.getUserCoursesAttended(jobId, isSearch)
    this.getCoordinatorCourses(jobId,isSearch)
    this.getInstructorCourses(jobId,isSearch)
    this.smartSuggession()
  }


  getCertificates(jobId: String, isSearch: Boolean) {
    var input = new CertificateRequestOnlyJobId()
    input.jobId = jobId
    this.trainingService.getCertificateListByJobId(input)
      .subscribe(data => {
        var response = <ResponseCertificateList>data
        if (response.status && response.data.length > 0) {
          response.data.forEach(item => {
            item.certificateUid = GET_CERTIFICATE + item.certificateUrl
          })
          this.certificates = response.data
        } else {
          this.certificates = []
        }
      },
        error => {
          console.log(error)
          this.errorService.errorResponseHandling(error)
        }
        
        )

  }

  getUserProfile(jobId: String, isSearch: Boolean) {
    var input = new SmartProfileUserRequestModel()
    input.jobIdRequested = jobId
    this.trainingService.getEmployeeSmartProfile(input).subscribe(
      data => {
        var response = <SmartProfileUserResponse>data
        if (response.status && response.data.length > 0) {
          this.userProfile = response.data[0]
          // if(jobId.trim()==this.userProfile.legacycode.trim()){
          //   this.toastr.info("You dont have permission to get this user details," + jobId )
          // }
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



  getUserJobCard(jobId: String, isSearch: Boolean) {
    var input = new SmartProfileUserRequestModel()
    input.jobIdRequested = jobId
    this.trainingService.getEmployeeJobCardForSmartProfile(input).subscribe(
      data => {
        var response = <JobCardProfileRequest>data
        if (response.status && response.data.length > 0) {
          this.jobCardProfile = response.data
          this.smartSuggession()
        }
        else {
          console.log(response.message)
          this.toastr.info("No Job Card Found")
        }
      },
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
      }
    )
  }



  getUserCoursesAttended(jobId: String, isSearch: Boolean) {
    var input = new SmartProfileUserRequestModel()
    input.jobIdRequested = jobId
    this.trainingService.getEmployeeCourseAttendedForSmartProfile(input).subscribe(
      data => {
        var response = <UserCourseRequestedResponse>data
        if (response.status && response.data.length) {
          this.userCourseResponseProfile = response.data
          this.smartSuggession()
        }
        else {
          console.log(response.message)
          //this.toastr.info("No Course attended")
        }
      },
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
      }
    )
  }

  smartSuggession() {
    this.jobCardProfileSuggession = []
    this.jobCardProfile.forEach(item => {
      var status = false;
      this.userCourseResponseProfile.forEach(courses => {
        if (item.courseId == courses.courseId) {
          status = true
        }
      })
      if (!status) {
        this.jobCardProfileSuggession.push(item)
      }
    })
  }
  getCoordinatorCourses(jobId: String, isSearch: Boolean) {
    if (this.authService.checktheRoleisTrainingCoordinator()) {
      this.trainingService.getCoordinatorCourses().subscribe(
        data=>{
          var response=<ITacCourseManagementList>data
          if(response.data!=null || response.data.length>0)
          {
            this.displayCourses=true;
            this.courseManagement=response.data;
          }
          else {
            this.displayCourses = false;
          }
        })}
  }

  getInstructorCourses(jobId: String, isSearch: Boolean){
    this.trainingService.getInstructorCourses().subscribe(
      data=>{
        var response=<ITacCourseManagementList>data
        if(response.data!=null || response.data.length>0)
        {
          this.displayCourses=true;
          this.courseManagement=response.data;
        }
        else
        {
          this.displayCourses = false;
        }
      }) 
  }

  onSubmit() {

    this.clear();
    var jobIdSelected = this.form.value.jobId
    var qid = this.form.value.qid
    var empName = this.form.value.empName
    debugger
    if (jobIdSelected != null) {
      this.getUserInformations(jobIdSelected, true)
    } else if(qid!=null || empName!=null) {
      this.getUserInformationsAndTitle(qid, empName)
    }else{
      this.toastr.error("Invalid search input")
    }

  }


  getUserInformationsAndTitle(qid,empName){
     var input = new SmartProfileUserRequestModel()
     input.qid = qid
     input.empName=empName
     this.trainingService.getEmployeeSmartProfileBasicInfo(input).subscribe(
       data => {
         var response = <SmartProfileUserResponse>data
         if (response.status && response.data.length > 0) {
           // TODO it it is only one issue 
           if(response.data.length==1){
           this.getUserInformations(response.data[0].legacycode,true) 
           }
           else {
             console.log("multiple items")
             response.data.forEach(item => {
              console.log(item.legacycode + " " +  item.cname_AR)
             })

            
          // this.searchUserInformationsAndTitle({cname_AR: empName},1,response)
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

  getEmployeeSmartProfileBasicInfoAjax(input): Observable<SmartProfileUserResponseAjax> {
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
    this.getUserInformations(user.legacycode,true) 

    // if (user) { 
    //   return user.cname_AR; }
  }

  searchOnChangeForName(){
    this.form
    .get('empName')
    .valueChanges
    .pipe(
      debounceTime(300),
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

 

}
