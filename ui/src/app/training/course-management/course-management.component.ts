import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TrainingService } from 'app/service/training/training.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { CourseManagementRes, ITacCourseManagementList, TacCourseMaster, ResponseTacCourseMaster } from 'app/models/tac-course-master';
import { Page } from 'app/models/paged-data';
import { TacActivation, ResponseActivationDetail } from 'app/models/tac-activation';
import { Location, ResponseLocation, ResponseLocationDetail } from 'app/models/location';
import { DURATION_FLAG_LIST } from 'app/app.constants';
import { TacInstructor, ITacInstructorList } from 'app/models/tac-instructor';
import { TrainingRoom } from 'app/models/training-room';
import { SystemUser, ISystemUserResponseList, SystemUserResponseArray } from 'app/models/system-user';
import { SystemUserService } from 'app/service/user/system-user.service';

@Component({
  selector: 'ms-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.scss']
})
export class CourseManagementComponent implements OnInit {

  rows:CourseManagementRes[];
  tacInstructor:TacInstructor[]=[];
  tacInstructorResult:TacInstructor[]=[];
  userList: SystemUserResponseArray[] = [];
  displayCourseDetails:boolean=false;
  activation:TacActivation;
  page = new Page();
  estimatedCost:Number;
  trainingRoomDetail:Location;
  locationType:Number;
  courseDetail:TacCourseMaster;
  durationValueString:String;
  tacInstructorString: String[] = [];
  tacCoordinatorString: String[] = [];
  public form: FormGroup;
  durationFlagList = DURATION_FLAG_LIST;
  displayManage:boolean=false;

  constructor(private fb: FormBuilder,
    private trainingService: TrainingService,
    private toastr: ToastrService,
    private userService: SystemUserService,

    private activatedRoute: ActivatedRoute,
    private pageTitleService: PageTitleService) { }

  ngOnInit() {
    this.pageTitleService.setTitle("COURSE MANAGEMENT")
    this.trainingService.getAllInstructor().subscribe(
      data => {
  
  
        var instructor = <ITacInstructorList>data
        this.tacInstructor = instructor.data
      })

      var userObj = new SystemUser()
      userObj.roleId = 5
      this.userService.listUsersByRoleId(userObj).subscribe(
        data => {
          var response = <ISystemUserResponseList>data
          this.userList = response.data
        },
        error => {
          console.log(error)
          this.toastr.error(error.message)
        }
      )
  }
  statsCard : any [] = [
  
    {
      card_color : "warn-bg",
      title : "Previous Courses",
     // number : "1,425",
      icon : "assessment"
    },
    {
      card_color : "success-bg",
      title : "Current Courses",
      //number : "6,101",
      icon : "assessment",
    },
    {
      card_color : "accent-bg",
      title : "Future Courses",
      //number : "5,218",
      icon : "new_releases"
    }
  ]


  getCourseManagement(card)
  {
    debugger;
    this.displayManage=false;
    if (card.title=="Previous Courses")
    {
this.trainingService.getPreviousCourses().subscribe(
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
    else if (card.title=="Current Courses")
    {
      this.displayManage=true;
      this.trainingService.getCurrentCourses().subscribe(
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
    else if (card.title=="Future Courses")
    {
      this.trainingService.getFutureCourses().subscribe(
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
  }
  getActivationData(row)
  {
    debugger;

  let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0)
  courseActivation.activationId = row.activation_id
  this.trainingService.getActivationById(courseActivation).subscribe(
    data => 
    {
      var response = <ResponseActivationDetail>data
      this.activation = response.data
      this.estimatedCost=+this.activation.costHospitality + +this.activation.costInstructor+ +this.activation.costTranslation
      + +this.activation.costTransport + +this.activation.costVenue + +this.activation.costAirticket+ +this.activation.costBonus
      + +this.activation.costFood + +this.activation.costGift;
      // if(this.activation!=null)
      // {
        this.tacInstructorResult=this.activation.tacCourseInstructors;
        this.locationType=this.activation.tacCourseMaster.locationType;
        console.log("activation instructor result"+this.activation.tacCourseInstructors);
        this.displayCourseDetails=true
        var durationItemsArray = this.durationFlagList.filter(durationItemsArray => durationItemsArray.value==this.activation.tacCourseMaster.durationFlag)
        if(durationItemsArray[0]!=null){
          this.durationValueString=durationItemsArray[0].viewValue
        }  
       

        this.tacInstructorResult.forEach(i => {
          var item = this.tacInstructor.filter(item => item.instructorId == i.instructorId)
          if (item[0] != null) {
            this.tacInstructorString.push(item[0].name)
           
          }
        })

//getCourseById
let courseMaster = new TacCourseMaster(0, null, "", 0, null, 0, 0, null, null, null, null, 0, 0, null, null)
    courseMaster.courseId=this.activation.dependentId;
this.trainingService.getCourseById(courseMaster).subscribe(
  data => {
    var response = <ResponseTacCourseMaster>data
    this.courseDetail=response.data;
    
  })
  let location = new Location(0, "");
  location.locationId = this.locationType;
  this.trainingService.getCourseRoomDetail(location).subscribe(
    data => {
      var response = <ResponseLocationDetail>data
      this.trainingRoomDetail = response.data
    })

      var item = this.userList.filter(item => item.id   ==this.activation.coordinatorId)
      if (item != null) {
        this.tacCoordinatorString.push(item[0].username);
       
      }
    
      console.log(this.activation)
    },
  
    error => {
      console.log(error)
      this.toastr.error(error.message)
    }
  )

 
  
}

}
