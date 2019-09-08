import { Component, OnInit } from '@angular/core';
import { TrainingService } from 'app/service/training/training.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Page } from 'app/models/paged-data';
import { ActivatedRoute } from '@angular/router';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { ResponseActivationData, ActivationData } from 'app/models/activation-data';
import { TacInstructor, ITacInstructorList } from 'app/models/tac-instructor';
import { Location, ResponseLocation, ResponseLocationDetail } from 'app/models/location';
import { DURATION_FLAG_LIST, WORKFLOW_1_EMP_REQUEST } from 'app/app.constants';
import { SystemUser, ISystemUserResponseList, SystemUserResponseArray } from 'app/models/system-user';
import { SystemUserService } from 'app/service/user/system-user.service';
import { CourseManagementRes, ITacCourseManagementList, TacCourseMaster, ResponseTacCourseMaster } from 'app/models/tac-course-master';
import { TacActivation } from 'app/models/tac-activation';
import { EmployeeCourseRequest } from 'app/models/workflow';


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
  searchText: String;

  

  constructor(private fb: FormBuilder,
    private modal: NgbModal,
    private trainingService: TrainingService,
    private toastr:ToastrService )
  {
  }

  ngOnInit() {
  
    this.form = this.fb.group
    (
      {
      courseName: null,
    }
    )
  //else if (card.title == "Future Courses") {
    this.trainingService.getFutureCourses().subscribe(
      data => {
        var response = <ITacCourseManagementList>data
        this.rows = response.data
        console.log(this.rows)
      },
      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
      )
  }

  searchFutureCourse() {
    this.searchText = this.form.value.courseName;
    let course: TacCourseMaster = {
       courseId: 0, 
       tacCourseCategory: null,
       courseName: this.form.value.courseName, 
       duration: 0, 
       objective: null, 
       durationFlag: 0,
       numberofhours: 0,
       tacCourseGuidelineses: null, 
       tacCourseAudiences: null, 
       tacCourseOutcomes: null,
       tacCoursePrerequisiteses:[],
       subcourseFlag:0,
       locationType:0,
       tacCourseDates:null,
       tacActivities:null
       
    }
    this.trainingService.searchCourse(course).subscribe(
      data => this.successSearch(data),
      error => this.errorWhileSearching(error)
    )
  }

  
  successSearch(data) {
    if (data.status == true) {
       //var result = <ITacCourseList>data.data
      this.rows = data.data;
     } else {
      this.toastr.error(data.message)
    }
  }
  
  errorWhileSearching(error) {
    console.log(error);
    this.toastr.error(error.message)
  }

getActivationData(row) {
  debugger;

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
      debugger
      this.activation = response.data
      this.estimatedCost = +this.activation.costHospitality + +this.activation.costInstructor + +this.activation.costTranslation
        + +this.activation.costTransport + +this.activation.costVenue + +this.activation.costAirticket + +this.activation.costBonus
        + +this.activation.costFood + +this.activation.costGift;
      this.tacInstructorResult = this.activation.instructors;
      //get Instructors usimg activationId
      
      this.locationType = this.activation.locationId;

      debugger
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

      //getCourseById
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

      //this.addEvent();

    },

    error => {
      console.log(error)
      this.toastr.error(error.message)
    }
  )



}

onSubmit(){
  
  console.log("Testing")
  console.log(this.selectedItem);
  var empRequest = new EmployeeCourseRequest()
  empRequest.courseId = this.selectedItem.courseId
  empRequest.courseName= this.selectedItem.courseName
  empRequest.courseActivationId=this.selectedItem.activationId
  empRequest.workflowType= WORKFLOW_1_EMP_REQUEST
  


}

}
