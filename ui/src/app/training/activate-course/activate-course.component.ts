import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TrainingService } from 'app/service/training/training.service';
import { Course, ITacCourseList, ResponseTacCourseMaster, TacCourseMaster } from 'app/models/tac-course-master';
import { ActivatedRoute } from '@angular/router';
import { ResponseCategories, Categories } from 'app/models/categories';
import { Location,ResponseLocation } from 'app/models/location';
import { ResponseRoom, TrainingRoom } from 'app/models/training-room';
import { ITacInstructorList, TacInstructor } from 'app/models/tac-instructor';
import { SystemUserService } from 'app/service/user/system-user.service';
import { SystemUser, ISystemUserResponse, ISystemUserResponseList, SystemUserResponse, SystemUserResponseArray } from 'app/models/system-user';
import { TacActivation } from 'app/models/tac-activation';
import { CourseDate } from "app/models/courseDate";


@Component({
  selector: 'ms-activate-course',
  templateUrl: './activate-course.component.html',
  styleUrls: ['./activate-course.component.scss']
})

export class ActivateCourseComponent implements OnInit {
  courseList:Course[]=[];
  mainCourseList:Course[]=[];
  userList:SystemUserResponseArray[]=[];
  courseDetails:TacCourseMaster;
  roomDetails:TrainingRoom[]=[];
  courseDate:CourseDate[]=[];
  tacCourseLocation:Location[]=[];
  tacInstructor:TacInstructor[]=[];
  user:SystemUser;
  tacCourseActivation:TacActivation;
  courseCategories:Categories[] = [];
  displayCourseDetails:boolean=false;
  editable:true;
  public form: FormGroup;
  constructor(private fb: FormBuilder,
    private trainingService: TrainingService,
    private userService:SystemUserService,
    private toastr: ToastrService,
   
    private activatedRoute: ActivatedRoute ){
this.tacCourseActivation = {
      activationId:0,
      tacActivity:null,
      tacCourseMaster:null,
      tacCourseRoom:null,
      tacCourseDate:null,
      dependentId:null,
      coordinatorId:"",
      costInstructor:0,
      costFood:0,
      costTransport:0,
      costAirticket:0,
      costHospitality:0,
      costGift:0,
      costVenue:0,
      costBonus:0,
      costTranslation:0,
      tacCourseInstructor:[],
      status:0
  }
    }

  ngOnInit() {
     this.formInit()
    this.formSetup()
  }

  formInit()
  {
    let courseMaster=new TacCourseMaster(0,null,"",0,null,0,0,null,null,null,0,0,0,null,null)
    this.courseDetails=courseMaster
    this.form = this.fb.group({
      
      courseSelect:[null, Validators.compose([Validators.required])],
      locationSelect:[null, Validators.compose([Validators.required])],
      dateSelect:[null, Validators.compose([Validators.required])],
      roomSelect:[null, Validators.compose([Validators.required])],
      instructorSelect:this.fb.array([]),
      instructorCost:[null, Validators.compose([Validators.required])],
      buffetCost:[null, Validators.compose([Validators.required])],
      transportCost:[null, Validators.compose([Validators.required])],
      ticketCost:[null, Validators.compose([Validators.required])],
      hospitalityCost:[null, Validators.compose([Validators.required])],
      giftCost:[null, Validators.compose([Validators.required])],
      reservationCost:[null, Validators.compose([Validators.required])],
      bonusCost:[null, Validators.compose([Validators.required])],
      translationCost:[null, Validators.compose([Validators.required])],
      belongsSelect:[null, Validators.compose([Validators.required])],
      userSelect:[null, Validators.compose([Validators.required])],
      //instructorOptions:this.fb.array([])
      
      
    });

  }

  formSetup()
  {
    this.trainingService.getAllCourseList().subscribe(
      data => {
        var response = <ITacCourseList> data
        this.courseList=response.data
        console.log(response)
      },
      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
    )
    
    this.trainingService.getAllTacCourseLocation().subscribe(
      data => {
        
        
        var location = <ResponseLocation>data
        this.tacCourseLocation=location.data
        console.log(this.tacCourseLocation)
      },
      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
    )
    this.trainingService.getAllInstructor().subscribe(
      data => {
        
        
        var instructor = <ITacInstructorList>data
        this.tacInstructor=instructor.data
        console.log(this.tacInstructor)
      },
      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
    )
    this.trainingService.getAllMainCourses().subscribe(
      data => {
        var response = <ITacCourseList> data
        this.mainCourseList=response.data
        console.log(response)
      },
      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
    )
    var userObj=new SystemUser()
    userObj.roleId=5
   this.userService.listUsersByRoleId(userObj).subscribe(
    data => {
      var response = <ISystemUserResponseList> data
      this.userList=response.data
      console.log(response)
    },
    error => {
      console.log(error)
      this.toastr.error(error.message)
    }
  )

// this.trainingService.getAllCourseCategories().subscribe(
//   data => {
//     var response = <ResponseCategories> data
//     this.courseCategories=response.data
//     console.log(this.courseCategories)
//   },
//   error => {
//     console.log(error)
//     this.toastr.error(error.message)
//   }
// )

 }



getCourseDetails(course)
{
  debugger;
  let courseMaster=new TacCourseMaster(course.value.courseId,null,"",0,null,0,0,null,null,null,0,0,0,null,null)
  console.log(course.value);
  debugger;
  this.trainingService.getCourseById(courseMaster).subscribe(
    data => {
      debugger;
      var response = <ResponseTacCourseMaster> data
      this.courseDetails=response.data
      this.courseDate=this.courseDetails.tacCourseDates
      if(this.courseDetails!=null)
      {
        this.displayCourseDetails=true;
      }
      

    },
    error => {
      console.log(error)
      this.toastr.error(error.message)
    }
  )
}

getCourseRoomDetail(location)
{
  debugger;
  let courseLocation=new Location(location.value.locationId,"")
  console.log(courseLocation);
  console.log(location.value);
 this.roomDetails=location.value.tacCourseRooms

}
addMoreInstructor() {
  const control = this.getControlOfAddMore('instructorSelect');
  control.push(this.patchValues(0,""))
}

removeMoreInstructor(i) {
  const control = this.getControlOfAddMore('instructorSelect');
  control.removeAt(i)
}

getControlOfAddMore(name): FormArray {
  return <FormArray>this.form.get(name);
}
patchValues(instructorId,name) {
  return this.fb.group({
    instructorId:[instructorId],
    name: [name],
  
  })
}

activateCourse()
{
  debugger;
  
  if(this.form.valid){
    console.log(this.form.value.courseSelect.courseId);
    let courseActivation=new TacActivation(0,null,null,null,null,0,"",0,0,0,0,0,0,0,0,0,null,0)
var courseMaster=new TacCourseMaster(0,null,"",0,"",0,0,null,null,null,0,0,0,null,null);

courseMaster.courseId=this.form.value.courseSelect.courseId;
courseMaster.courseName=this.form.value.courseSelect.courseName;

    courseActivation.tacCourseMaster=courseMaster;
    courseActivation.dependentId=this.form.value.belongsSelect.courseId;

    var courseDate=new CourseDate(0,null);
courseDate.dateId=this.form.value.dateSelect.dateId
courseActivation.tacCourseDate=courseDate;

var trainingRoom=new TrainingRoom(0,"");
trainingRoom.roomId=this.form.value.roomSelect.roomId;
    courseActivation.tacCourseRoom=trainingRoom;
debugger;
const instructorOptions=this.getControlOfAddMore('instructorSelect');
var instructors=<TacInstructor[]>instructorOptions.value;
this.tacCourseActivation.tacCourseInstructor=instructors;
courseActivation.tacCourseInstructor=this.tacCourseActivation.tacCourseInstructor;

   courseActivation.costInstructor=this.form.value.instructorCost;


      courseActivation.costInstructor=this.form.value.instructorCost
      courseActivation.costFood=this.form.value.buffetCost
      courseActivation.costTransport=this.form.value.transportCost
      courseActivation.costAirticket=this.form.value.ticketCost
      courseActivation.costHospitality=this.form.value.hospitalityCost
      courseActivation.costGift=this.form.value.giftCost
      courseActivation.costVenue=this.form.value.reservationCost
      courseActivation.costBonus=this.form.value.bonusCost
      courseActivation.costTranslation=this.form.value.translationCost
debugger;
      this.trainingService.saveCourseActivation(courseActivation).subscribe(
        data => this.successSaveActivation(data),
        error => {
          console.log(error.message)
          this.toastr.error(error.message)
        }
      )
      }else{
        debugger
        this.toastr.error("Please fill all required fields");
      }
      }
      
      successSaveActivation(data) {
      if (data.status == true) {
        this.toastr.success(data.message)
        this.form.reset()
      } else {
        this.toastr.error(data.message)
      }
      }

    }
