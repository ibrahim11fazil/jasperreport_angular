import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TrainingService } from 'app/service/training/training.service';
import { Course, ITacCourseList, ResponseTacCourseMaster, TacCourseMaster } from 'app/models/tac-course-master';
import { ActivatedRoute } from '@angular/router';
import { ResponseCategories, Categories } from 'app/models/categories';
import { Location, ResponseLocation, ResponseLocationDetail } from 'app/models/location';
import { ResponseRoom, TrainingRoom, ResponseRoomDetail } from 'app/models/training-room';
import { ITacInstructorList, TacInstructor } from 'app/models/tac-instructor';
import { SystemUserService } from 'app/service/user/system-user.service';
import { SystemUser, ISystemUserResponse, ISystemUserResponseList, SystemUserResponse, SystemUserResponseArray } from 'app/models/system-user';
import { TacActivation, ResponseTacActivation, ResponseActivationDetail } from 'app/models/tac-activation';
import { CourseDate, ResponseDateDetail } from "app/models/courseDate";
import { PageTitleService } from 'app/core/page-title/page-title.service';


@Component({
  selector: 'ms-activate-course',
  templateUrl: './activate-course.component.html',
  styleUrls: ['./activate-course.component.scss']
})

export class ActivateCourseComponent implements OnInit {
  courseList: Course[] = [];
  mainCourseList: Course[] = [];
  userList: SystemUserResponseArray[] = [];
  courseDetails: TacCourseMaster;
  courseActivationDetails: TacActivation;
  roomDetails: TrainingRoom[] = [];
  roomLocation: TrainingRoom[] = [];
  tacCourseDateList: CourseDate[] = [];
  trainingRoomDetail?: Location;
  trainingDateDetail: CourseDate;
  param: any;
  tacCourseLocation: Location[] = [];
  tacInstructor: TacInstructor[] = [];
  user: SystemUser;
  tacCourseActivation: TacActivation;
  courseCategories: Categories[] = [];
  displayCourseDetails: boolean = false;
  editable: true;
  public form: FormGroup;
  constructor(private fb: FormBuilder,
    private trainingService: TrainingService,
    private userService: SystemUserService,
    private toastr: ToastrService,
    private pageTitleService: PageTitleService,

    private activatedRoute: ActivatedRoute) {
    this.tacCourseActivation = {
      activationId: 0,
      tacActivity: null,
      tacCourseMaster: null,
      tacCourseRoom: null,
      tacCourseDate: null,
      dependentId: null,
      coordinatorId: 0,
      costInstructor: 0,
      costFood: 0,
      costTransport: 0,
      costAirticket: 0,
      costHospitality: 0,
      costGift: 0,
      costVenue: 0,
      costBonus: 0,
      costTranslation: 0,
      tacCourseInstructors: [],
      status: 0
    }
  }

  ngOnInit() {
    this.pageTitleService.setTitle("ACTIVATE COURSE")
    let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0)
    this.courseActivationDetails = courseActivation
    this.formInit()
    this.formSetup()
    this.loadDataFromParam()
  }

  formInit() {
    //var dates= this.fb.array([])
    this.form = this.fb.group({
      courseSelect: [null, Validators.compose([Validators.required])],
      locationSelect: [null, Validators.compose([Validators.required])],
      dateSelect: [null, Validators.compose([Validators.required])],
      roomSelect: [null, Validators.compose([Validators.required])],
      instructorSelect: this.fb.array([]),
      instructorCost: [this.tacCourseActivation.costInstructor, Validators.compose([Validators.required])],
      buffetCost: [this.tacCourseActivation.costFood, Validators.compose([Validators.required])],
      transportCost: [this.tacCourseActivation.costTransport, Validators.compose([Validators.required])],
      ticketCost: [this.tacCourseActivation.costAirticket, Validators.compose([Validators.required])],
      hospitalityCost: [this.tacCourseActivation.costHospitality, Validators.compose([Validators.required])],
      giftCost: [this.tacCourseActivation.costGift, Validators.compose([Validators.required])],
      reservationCost: [this.tacCourseActivation.costVenue, Validators.compose([Validators.required])],
      bonusCost: [this.tacCourseActivation.costBonus, Validators.compose([Validators.required])],
      translationCost: [this.tacCourseActivation.costTranslation, Validators.compose([Validators.required])],
      belongsSelect: [null, Validators.compose([Validators.required])],
      userSelect: [null, Validators.compose([Validators.required])],
    });

  }

  formSetup() {
    this.trainingService.getAllCourseList().subscribe(
      data => {
        var response = <ITacCourseList>data
        this.courseList = response.data
        console.log(response)
      },
      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
    )
    this.trainingService.getAllTacCourseLocation().subscribe(
      data => {


        var response = <ResponseLocation>data
        this.tacCourseLocation = response.data
        console.log("formSetUp", this.tacCourseLocation)
      },
      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
    )
    this.trainingService.getAllInstructor().subscribe(
      data => {


        var instructor = <ITacInstructorList>data
        this.tacInstructor = instructor.data
      },
      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
    )
    this.trainingService.getAllMainCourses().subscribe(
      data => {
        var response = <ITacCourseList>data
        this.mainCourseList = response.data
        console.log(response)
      },
      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
    )
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

  patch() {
    //debugger
    var courseArray = this.courseList.filter(i => i.courseId == this.tacCourseActivation.tacCourseMaster.courseId)
    if (courseArray[0] != null) {
      this.form.controls['courseSelect'].patchValue(
        courseArray[0]
      )

    }
    const instrcutorControl = this.getControlOfAddMore('instructorSelect');
    //this.form.setControl('dateOptions', this.fb.array([]));
    this.tacCourseActivation.tacCourseInstructors.forEach(x => {
      //debugger
      console.log(x.instructorId)
      instrcutorControl.push(this.patchValues(x.instructorId,x.name))
    })

    var cordinatorArray = this.userList.filter(i => i.id == this.tacCourseActivation.coordinatorId)
    if (cordinatorArray[0] != null) {
      this.form.controls['userSelect'].patchValue(
        cordinatorArray[0]
      )
    }
    var belongsArray = this.mainCourseList.filter(i => i.courseId == this.tacCourseActivation.dependentId)
    if (belongsArray[0] != null) {
      this.form.controls['belongsSelect'].patchValue(
        belongsArray[0]
      )
    }
    var dateArray = this.tacCourseActivation.tacCourseMaster.tacCourseDates.filter(i => i.dateId == this.tacCourseActivation.tacCourseDate.dateId)
    if (dateArray[0] != null) {

      this.form.controls['dateSelect'].patchValue(
        dateArray[0]
      )
    }

    var locationArray = this.tacCourseLocation.filter(i => i.locationId == this.tacCourseActivation.tacCourseMaster.locationType)
    // this.getCourseroom(this.tacCourseActivation.tacCourseMaster.locationType)
    if (locationArray[0] != null) {
      // this.roomLocation=locationArray[0].
      this.form.controls['locationSelect'].patchValue(
        locationArray[0]
      )
    }
    //trainingRoomDetail.tacCourseRoom
    debugger;
    var roomArray = this.roomDetails.filter(i => i.roomId == this.tacCourseActivation.tacCourseRoom.roomId)
    if (roomArray[0] != null) {
      this.form.controls['roomSelect'].patchValue(
        roomArray[0]
      )
    }

    
  

  }

  patchCourse()
  {
    debugger;
    this.getCourseroom(this.courseDetails.locationType)
    var locationArray = this.tacCourseLocation.filter(i => i.locationId == this.courseDetails.locationType)
    if (locationArray[0] != null) {
      this.form.controls['locationSelect'].patchValue(
        locationArray[0]
      )
    }
  }

  getCourseDetails(course) {
    let courseMaster = null
   
      courseMaster = new TacCourseMaster(course.value.courseId, null, "", 0, null, 0, 0, null, null, null, 0, 0, 0, null, null)
    

    //this.courseByIdList(courseMaster);
    this.trainingService.getCourseById(courseMaster).subscribe(
      data => {
        var response = <ResponseTacCourseMaster>data
        this.courseDetails = response.data
        this.tacCourseDateList = this.courseDetails.tacCourseDates
        console.log(this.tacCourseDateList)
        console.log(this.courseDetails)

        if (this.courseDetails != null) {
          this.displayCourseDetails = true;
        }
       this.patchCourse()
      },
      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
    )
  }

  getCourseRoomDetail(location) {
    debugger
    let courseLocation = new Location(location.value.locationId, "")
    this.roomDetails = location.value.tacCourseRooms
  }

  addMoreInstructor() {
    const control = this.getControlOfAddMore('instructorSelect');
    control.push(this.patchValues(0, ""))
  }

  removeMoreInstructor(i) {
    const control = this.getControlOfAddMore('instructorSelect');
    control.removeAt(i)
  }

  getControlOfAddMore(name): FormArray {
    return <FormArray>this.form.get(name);
  }
  patchValues(instructorId, name) {
    return this.fb.group({
      instructorId: [instructorId],
      name: [name],

    })
  }

  activateCourse() {
    //if(this.form.valid){
    //console.log(this.form.value.courseSelect.courseId);
    let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0)
    var courseMaster = new TacCourseMaster(0, null, "", 0, "", 0, 0, null, null, null, 0, 0, 0, null, null);

    courseMaster.courseId = this.form.value.courseSelect.courseId;
    courseMaster.courseName = this.form.value.courseSelect.courseName;

    courseActivation.tacCourseMaster = courseMaster;
    courseActivation.dependentId = this.form.value.belongsSelect.courseId;

    var tacCourseDate = new CourseDate(0, null);
    tacCourseDate.dateId = this.form.value.dateSelect.dateId
    courseActivation.tacCourseDate = tacCourseDate;

    var tacCourseRoom = new TrainingRoom(0, "");
    tacCourseRoom.roomId = this.form.value.roomSelect.roomId;
    courseActivation.tacCourseRoom = tacCourseRoom;
//debugger
    const instructorOptions = this.getControlOfAddMore('instructorSelect');
    var instructors = <TacInstructor[]>instructorOptions.value;
    this.tacCourseActivation.tacCourseInstructors = instructors;

    courseActivation.tacCourseInstructors = this.tacCourseActivation.tacCourseInstructors;
    courseActivation.costInstructor = this.form.value.instructorCost;
    courseActivation.costInstructor = this.form.value.instructorCost
    courseActivation.costFood = this.form.value.buffetCost
    courseActivation.costTransport = this.form.value.transportCost
    courseActivation.costAirticket = this.form.value.ticketCost
    courseActivation.costHospitality = this.form.value.hospitalityCost
    courseActivation.costGift = this.form.value.giftCost
    courseActivation.costVenue = this.form.value.reservationCost
    courseActivation.costBonus = this.form.value.bonusCost
    courseActivation.costTranslation = this.form.value.translationCost

    this.trainingService.saveCourseActivation(courseActivation).subscribe(
      data => this.successSaveActivation(data),
      error => {
        //console.log(error.message)
        this.toastr.error(error.message)
      }
    )
    // }else{

    //   this.toastr.error("Please fill all required fields");
    // }
  }

  successSaveActivation(data) {
    if (data.status == true) {
      this.toastr.success(data.message)
      this.form.reset()
    } else {
      this.toastr.error(data.message)
    }
  }
  //   courseByIdList(courseMaster){
  //   this.trainingService.getCourseById(courseMaster).subscribe(
  //     data => {
  //  //debugger;
  //       var response = <ResponseTacCourseMaster> data
  //       this.courseDetails=response.data
  //       this.tacCourseDate=this.courseDetails.tacCourseDates


  //       if(this.courseDetails!=null)
  //       {
  //         this.displayCourseDetails=true;
  //       }
  //       // this.getCourseDate(courseMaster);
  //       //  this.getCourseroom(courseMaster);
  //        //this.getCourseActivationById(courseMaster);

  //       //this.patch();

  //     },
  //     error => {
  //       console.log(error)
  //       this.toastr.error(error.message)
  //     }
  //   )
  // }
  loadDataFromParam() {

    // console.log(this.param);
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.param = params['id'];
      }
    });
    if (this.param != '' && this.param != undefined) {
      let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0)
      courseActivation.activationId = this.param
      this.trainingService.getActivationById(courseActivation).subscribe(
        data => this.loadData(data),
        error => {
          console.log(error)
          this.toastr.error(error.message)
        }
      )


    }
  }

  loadData(data) {
    //debugger
    this.tacCourseActivation = data.data
    this.tacCourseDateList = this.tacCourseActivation.tacCourseMaster.tacCourseDates
    // this.tacCourseLocation = this.tacCourseLocation
    
    this.getCourseroom(this.tacCourseActivation.tacCourseMaster.locationType)
    this.trainingRoomDetail=this.trainingRoomDetail;
    this.formInit()
    //this.formSetup()
    this.patch()
  }

  getCourseActivationById(courseMaster) {



    this.trainingService.getCourseActivationById(courseMaster).subscribe(
      data => this.loadData(data),
      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
    )
  }
  getCourseroom(locationType) {
debugger;
    let location = new Location(0, "");
    location.locationId = locationType;
    this.trainingService.getCourseRoomDetail(location).subscribe(
      data => {
        var response = <ResponseLocationDetail>data
        this.trainingRoomDetail = response.data
        this.roomDetails=this.trainingRoomDetail .tacCourseRooms
        
        console.log("getCourseRoom", response.data)
        this.patch()

      },
      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
    )
    
  }
 

}
