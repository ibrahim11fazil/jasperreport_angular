import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Page } from 'app/models/paged-data';
import { ActivatedRoute } from '@angular/router';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { ResponseActivationData, ActivationData } from 'app/models/activation-data';
import { TacInstructor, ITacInstructorList } from 'app/models/tac-instructor';
import { Location, ResponseLocation, ResponseLocationDetail } from 'app/models/location';
import { DURATION_FLAG_LIST, WORKFLOW_1_EMP_REQUEST,WORKFLOW_2_EMP_REQUEST } from 'app/app.constants';
import { SystemUser, ISystemUserResponseList, SystemUserResponseArray } from 'app/models/system-user';
import { SystemUserService } from 'app/service/user/system-user.service';
import { CourseManagementRes, ITacCourseManagementList, TacCourseMaster, ResponseTacCourseMaster, TacCourseMasterSub } from 'app/models/tac-course-master';
import { TacActivation } from 'app/models/tac-activation';
import { TrainingService } from 'app/service/training/training.service';
import { EmployeeCourseRequest, WorkflowResponse } from 'app/models/workflow';
import { SupervisorResponse, SupervisorResponseData } from 'app/models/course-request';
import { AuthService } from 'app/service/auth-service/auth.service';
import { AbsentInfo, AbsentInfoResponse } from 'app/models/employee-data';



@Component({
  selector: 'ms-emp-request',
  templateUrl: './emp-request.component.html',
  styleUrls: ['./emp-request.component.scss']
})
export class EmpRequestComponent implements OnInit {

  rows: CourseManagementRes[];
  page = new Page();
  eventCourseDetail: CourseManagementRes;
  courseStartDate: Date;
  courseEndDate: Date;
  activation: ActivationData;
  estimatedCost: Number;
  tacInstructor: TacInstructor[] = [];
  tacInstructorResult: TacInstructor[] = [];
  displayCourseDetails: boolean = false;
  locationType: Number;
  durationFlagList = DURATION_FLAG_LIST;
  durationValueString: String;
  tacInstructorString: String[] = [];
  courseDetail: TacCourseMaster;
  trainingRoomDetail: Location;
  userList: SystemUserResponseArray[] = [];
  selectedItem:TacActivation;
  tacCoordinatorString: String[] = [];
  public form: FormGroup;
  public formDetails:FormGroup;
  searchText: String;
  employeesUnderSupervisor:SupervisorResponseData[]=[]
  isHead=false

  

  constructor(private fb: FormBuilder,
    private modal: NgbModal,
    private trainingService: TrainingService,
    private toastr:ToastrService,
    private authService:AuthService)
  {
  }

  ngOnInit() {
  
    this.form = this.fb.group
    (
      {

      courseName: null,
    }

    )
    this.formDetails = this.fb.group
    (
      {
      supervisorsCtrl:null , 
    }

    )

    this.getEmployeesUnderSupervisor()
  }

  searchFutureCourses() {
     
     var course = new TacCourseMasterSub()
     course.courseName=this.form.value.courseName
     this.trainingService.searchFutureCourseWithName(course).subscribe(
      data => {
        var response = <ITacCourseManagementList>data
        this.rows = response.data
        console.log(this.rows)
      },
      error => {
        console.log(error)
        this.toastr.error(error.message)
      })

    }
  
getActivationData(row) {
  this.eventCourseDetail = row;
  console.log(this.eventCourseDetail.course_date);
  const str = this.eventCourseDetail.course_date.split('-');
  const year = Number(str[2]);
  const date = Number(str[1]);
  const month = Number(str[0]) - 1;
  this.courseStartDate = new Date(year, month, date);
  console.log(this.courseStartDate)

  const strENd = this.eventCourseDetail.end_date.split('-');
  const yearEnd = Number(strENd[2]);
  const dateEnd = Number(strENd[1]);
  const monthEnd = Number(strENd[0]) - 1;
  this.courseEndDate = new Date(yearEnd, monthEnd, dateEnd);

  console.log(this.courseEndDate)
  let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0)
  courseActivation.activationId = row.activation_id
  this.selectedItem = courseActivation;
  this.trainingService.getActivationById(courseActivation).subscribe(
    data => {
      var response = <ResponseActivationData>data
      this.activation = response.data
      this.estimatedCost = +this.activation.costHospitality + +this.activation.costInstructor + +this.activation.costTranslation
        + +this.activation.costTransport + +this.activation.costVenue + +this.activation.costAirticket + +this.activation.costBonus
        + +this.activation.costFood + +this.activation.costGift;
      this.tacInstructorResult = this.activation.instructors;
      //get Instructors usimg activationId
      this.locationType = this.activation.locationId;
      this.displayCourseDetails = true
      var durationItemsArray = this.durationFlagList.filter(durationItemsArray => durationItemsArray.value == this.activation.durationFlag)
      if (durationItemsArray[0] != null) {
        this.durationValueString = durationItemsArray[0].viewValue
      }

      this.tacInstructorResult.forEach(i => {
        var item = this.tacInstructor.filter(item => item.instructorId == i.instructorId)
        if (item[0] != null) {
          this.tacInstructorString.push(item[0].name)
        }
      })
      let courseMaster = new TacCourseMaster(0, null, "", 0, null, 0, 0, null, null, null, null, 0, 0, null, null)
      courseMaster.courseId = this.activation.belongsTo;
      this.trainingService.getCourseById(courseMaster).subscribe(
        data => {
          var response = <ResponseTacCourseMaster>data
          debugger
          this.courseDetail = response.data;
          this.selectedItem.courseName = this.courseDetail.courseName;
          this.selectedItem.courseId= this.courseDetail.courseId;
        })
      let location = new Location(0, "");
      location.locationId = this.locationType;
      this.trainingService.getCourseRoomDetail(location).subscribe(
        data => {
          var response = <ResponseLocationDetail>data
          this.trainingRoomDetail = response.data
        })
      var item = this.userList.filter(item => item.id == this.activation.coordinator)
      if (item != null && item.length>0) {
        this.tacCoordinatorString.push(item[0].username);
      }
    },
    error => {
      console.log(error)
      this.toastr.error(error.message)
    }
  )
}

// to display job id list

// onJobIdChange(event){
//   if( this.form.value.jobId!=null && this.form.value.jobId!="" ){
//     this.getEmployeesUnderSupervisor()
//   }
// }

getEmployeesUnderSupervisor(){
  this.trainingService.employeeUnderSupervisor().subscribe(
    data=>{
      //this.toastr.info("Valid User")
      debugger
      var response = <SupervisorResponse>data
      if(response.data!=null && response.data.length>0){  
        this.isHead=true
        var headData = new SupervisorResponseData()
        headData.legacyCode = this.authService.getLegacyCode()
        headData.cNameAr =this.authService.getCNameAr() + "(Self)"
        this.employeesUnderSupervisor.push(headData)
        response.data.forEach(item => {
          this.employeesUnderSupervisor.push(item)
        })
      }else{
        this.isHead=false
      }
    },
    error=>{
      console.log(error.message)
      //this.form.value.legacyCode= "Invalid Employee"
    }
  )
}

// end of job id list

onSubmit(){
  var empRequest = new EmployeeCourseRequest()
  empRequest.courseId = this.selectedItem.courseId
  empRequest.courseName= this.selectedItem.courseName
  empRequest.courseActivationId=this.selectedItem.activationId
  if(this.isHead && 
    this.formDetails.value.supervisorsCtrl!=null &&
    this.formDetails.value.supervisorsCtrl.legacyCode != this.authService.getLegacyCode()
    )
  {
    empRequest.workflowType  =  WORKFLOW_2_EMP_REQUEST
    empRequest.forUserJobId  =  this.formDetails.value.supervisorsCtrl.legacyCode
    empRequest.forUsercnameAr=this.formDetails.value.supervisorsCtrl.cNameAr
    empRequest.forUserQid= this.formDetails.value.supervisorsCtrl.qid
    empRequest.forUserjobTitle=this.formDetails.value.supervisorsCtrl.positionAr
  }else{
    empRequest.workflowType = WORKFLOW_1_EMP_REQUEST
  }
  //TODO here to get the dates for actiation
  //TODO get qid of the person 
  //1. check the user is absent or not 
  //2. check the user is already requested
  //3. Check course requested is overriding other courses . already overriding.
  //4. if all ok save the data

  
}

saveRequest(empRequest:EmployeeCourseRequest){
  this.trainingService.saveEmployeeRequest(empRequest).subscribe(
    data => {
      var response = <WorkflowResponse>data
      //.this.rows = response.data
      this.toastr.info(response.message.toString())
      console.log(this.rows)
    },
    error => {
      console.log(error)
      this.toastr.error(error.message)
    })
}


checkUserIsAbsentOrNot(request:EmployeeCourseRequest){
  var absentInfo = new AbsentInfo()
  this.trainingService.checktheEmployeeAbsentOrNot(absentInfo).subscribe(
    data=>{
      var response =<AbsentInfoResponse>data
      if(response.data){
        this.toastr.error("The use is absent on the date,Try another date")
      }else{
        this.checkUserIsAlreadyRequested(request)
      }    
    },
    error=>{
      console.log(error)
      this.toastr.error(error.message)
    }  
  )

}

checkUserIsAlreadyRequested(request:EmployeeCourseRequest){

  this.trainingService.checktheRequestIsvalid(request).subscribe(
    data=>{
      var response =<AbsentInfoResponse>data
      if(response.data){
        this.toastr.error("The request alredy exisit.")
      }else{
        //this.checkTheUserIsAlreadyRequestedOverrdingOtherCourseDates(request)
        this.saveRequest(request)
      }    
    },
    error=>{
      console.log(error)
      this.toastr.error(error.message)
    }  
  )
  
}

checkTheUserIsAlreadyRequestedOverrdingOtherCourseDates(request:EmployeeCourseRequest){
  this.trainingService.checktheRequestIsOverriding(request).subscribe(
    data=>{
      var response =<AbsentInfoResponse>data
      if(response.data){
        this.toastr.error("You are alraeady requested for another course in the same time. Try some other dates")
      }else{
        this.saveRequest(request)
      }    
    },
    error=>{
      console.log(error)
      this.toastr.error(error.message)
    }  
  )
}


}
