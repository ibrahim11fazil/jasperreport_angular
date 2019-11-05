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
import { ActivationData, ResponseActivationData } from 'app/models/activation-data';
import { LanguageUtil } from 'app/app.language';
import { MainComponent } from 'app/main/main.component';
import { ErrorService } from 'app/service/error/error.service';


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
  activationData:ActivationData;
  courseCategories: Categories[] = [];
  displayCourseDetails: boolean = false;
  editable: true;
  language:LanguageUtil;
  public form: FormGroup;
  constructor(private fb: FormBuilder,
    private trainingService: TrainingService,
    private userService: SystemUserService,
    private toastr: ToastrService,
    private pageTitleService: PageTitleService,
    private mainComponent:MainComponent,
    private activatedRoute: ActivatedRoute,
    private errorService:ErrorService) {
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
      status: 0,
      seatCapacity:0
    }
    this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
  }

  ngDoCheck(): void
  {
   this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
  }

  ngOnInit() {
    this.pageTitleService.setTitle("ACTIVATE COURSE")
    let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0,0)
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
      instructorCost: [this.tacCourseActivation.costInstructor],
      buffetCost: [this.tacCourseActivation.costFood],
      transportCost: [this.tacCourseActivation.costTransport],
      ticketCost: [this.tacCourseActivation.costAirticket],
      hospitalityCost: [this.tacCourseActivation.costHospitality],
      giftCost: [this.tacCourseActivation.costGift],
      reservationCost: [this.tacCourseActivation.costVenue],
      bonusCost: [this.tacCourseActivation.costBonus],
      seatCapacity:[this.tacCourseActivation.seatCapacity],
      translationCost: [this.tacCourseActivation.costTranslation],
      belongsSelect: [null],
      userSelect: [null, Validators.compose([Validators.required])],
    });

  }

  formSetup() {
    this.trainingService.getAllCourseList().subscribe(
      data => {
        var response = <ITacCourseList>data
        this.courseList = response.data
        console.log("formSetUp courselist", this.courseList)
        console.log(response)
      },
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
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
        this.errorService.errorResponseHandling(error)
      }
    )
    this.trainingService.getAllInstructor().subscribe(
      data => {


        var instructor = <ITacInstructorList>data
        this.tacInstructor = instructor.data
        console.log("formSetUp instructor", this.tacInstructor)
      },
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
      }
    )
    this.trainingService.getAllMainCourses().subscribe(
      data => {
        var response = <ITacCourseList>data
        this.mainCourseList = response.data
        console.log("formSetUp main course", this.mainCourseList)
        console.log(response)
      },
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
      }
    )
    var userObj = new SystemUser()
    userObj.roleId = 5
    this.userService.listUsersByRoleId(userObj).subscribe(
      data => {
        var response = <ISystemUserResponseList>data
        this.userList = response.data
        console.log("formSetUp userlist", this.userList)
      },
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
      }
    )


  }

  patch() {
    debugger
    var courseArray = this.courseList.filter(i => i.courseId == this.activationData.courseId)
    if (courseArray[0] != null) {
      this.form.controls['courseSelect'].patchValue(
        courseArray[0]
      )

    }
    
    var cordinatorArray = this.userList.filter(i => i.jobId == this.activationData.coordinator)
    if (cordinatorArray[0] != null) {
      this.form.controls['userSelect'].patchValue(
        cordinatorArray[0]
      )
    }
    var belongsArray = this.mainCourseList.filter(i => i.courseId == this.activationData.belongsTo)
    if (belongsArray[0] != null) {
      this.form.controls['belongsSelect'].patchValue(
        belongsArray[0]
      )
    }
  

    var locationArray = this.tacCourseLocation.filter(i => i.locationId == this.activationData.locationId)
    if (locationArray[0] != null) {
      this.form.controls['locationSelect'].patchValue(
        locationArray[0]
      )
    }

    var roomArray = this.roomDetails.filter(i => i.roomId == this.activationData.roomID)
    if (roomArray[0] != null) {
      this.form.controls['roomSelect'].patchValue(
        roomArray[0]
      )
    }

    

  

  }

  patchCourse()
  {
    var courseArray = this.courseList.filter(i => i.courseId == this.courseDetails.courseId)
    if (courseArray[0] != null) {
      this.form.controls['courseSelect'].patchValue(
        courseArray[0]
      )

    }
    this.fetchCourseRoom(this.courseDetails.locationType)
    var locationArray = this.tacCourseLocation.filter(i => i.locationId == this.courseDetails.locationType)
    if (locationArray[0] != null) {
      this.form.controls['locationSelect'].patchValue(
        locationArray[0]
      )
    }
    
    var roomArray = this.roomDetails.filter(i => i.roomId == this.activationData.roomID)
    if (roomArray[0] != null) {
      this.form.controls['roomSelect'].patchValue(
        roomArray[0]
      )
    }

    
  }

  getCourseDetails(course) {
    this.form.reset();
    let courseMaster = null
   debugger
      courseMaster = new TacCourseMaster(course.value.courseId, null, "", 0, null, 0, 0, null, null, null, null, 0, 0, null, null)
    

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
      }
      ,
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
      }
    )
    
    
  }

  fetchCourseRoom(locationType)
  {
    let location = new Location(0, "");
    location.locationId = locationType;
    this.trainingService.getCourseRoomDetail(location).subscribe(
      data => {
        var response = <ResponseLocationDetail>data
        this.trainingRoomDetail = response.data
        this.roomDetails=this.trainingRoomDetail .tacCourseRooms
      },
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
      })
  }

  getCourseRoomDetail(location) {
    let courseLocation = new Location(location.value.locationId, "")
    this.trainingService.getCourseRoomDetail(courseLocation).subscribe(
      data => {
        var response = <ResponseLocationDetail>data
        this.trainingRoomDetail = response.data
        this.roomDetails=this.trainingRoomDetail .tacCourseRooms},
        error => {
          console.log(error)
          this.errorService.errorResponseHandling(error)
        })
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
    debugger
    //if(this.form.valid){
    //console.log(this.form.value.courseSelect.courseId);
    let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0,0)
    var courseMaster = new TacCourseMaster(0, null, "", 0, "", 0, 0, null, null, null,null, 0, 0, null, null);

    courseMaster.courseId = this.form.value.courseSelect.courseId;
    courseMaster.courseName = this.form.value.courseSelect.courseName;

    courseActivation.tacCourseMaster = courseMaster;
    if(this.form.value.belongsSelect!=null)
    {
    courseActivation.dependentId = this.form.value.belongsSelect.courseId;
    }
    var tacCourseDate = new CourseDate(0, null);
    tacCourseDate.dateId = this.form.value.dateSelect.dateId
    courseActivation.tacCourseDate = tacCourseDate;

    var tacCourseRoom = new TrainingRoom(0, "");
    tacCourseRoom.roomId = this.form.value.roomSelect.roomId;
    courseActivation.tacCourseRoom = tacCourseRoom;
    const instructorOptions = this.getControlOfAddMore('instructorSelect');
    var instructors = <TacInstructor[]>instructorOptions.value;
    this.tacCourseActivation.tacCourseInstructors = instructors;

    courseActivation.tacCourseInstructors = this.tacCourseActivation.tacCourseInstructors;
    courseActivation.costInstructor = this.form.value.instructorCost
    courseActivation.costFood = this.form.value.buffetCost
    courseActivation.costTransport = this.form.value.transportCost
    courseActivation.costAirticket = this.form.value.ticketCost
    courseActivation.costHospitality = this.form.value.hospitalityCost
    courseActivation.costGift = this.form.value.giftCost
    courseActivation.costVenue = this.form.value.reservationCost
    courseActivation.costBonus = this.form.value.bonusCost
    courseActivation.costTranslation = this.form.value.translationCost
    courseActivation.coordinatorId=this.form.value.userSelect.jobId
    courseActivation.seatCapacity=Number(this.form.value.seatCapacity)
    debugger
    this.trainingService.saveCourseActivation(courseActivation).subscribe(
      data => this.successSaveActivation(data),
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
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
  loadDataFromParam() {

    // console.log(this.param);
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.param = params['id'];
      }
    });
    if (this.param != '' && this.param != undefined) {
      let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0,0)
      courseActivation.activationId = this.param
     
      this.trainingService.getActivationById(courseActivation).subscribe(
        // data => this.loadData(data)
        data => {
          var response = <ResponseActivationData>data
          this.activationData = response.data
          console.log(this.activationData)
   
  
          let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, this.activationData.costInstructor, this.activationData.costFood,this.activationData.costTransport
            , this.activationData.costAirticket, this.activationData.costHospitality, this.activationData.costGift, 
            this.activationData.costVenue, this.activationData.costBonus, this.activationData.costTranslation, null, 0,this.activationData.seatCapacity)
            this.tacCourseActivation=courseActivation;

            let courseMaster = new TacCourseMaster(this.activationData.courseId, null, "", 0, null, 0, 0, null, null, null, null, 0, 0, null, null)
            this.trainingService.getCourseById(courseMaster).subscribe(
              data => {
                var response = <ResponseTacCourseMaster>data
                this.courseDetails = response.data
                this.tacCourseDateList = this.courseDetails.tacCourseDates})

                  this.formInit()
                  this.patch()
                this.getCourseroom(this.activationData)
  
        })
        ,
        error => {
          console.log(error)
        this.errorService.errorResponseHandling(error)
        }
      


    }
  }

  loadData(data) {
    this.activationData = data.data
    let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, this.activationData.costInstructor, this.activationData.costFood,this.activationData.costTransport
      , this.activationData.costAirticket, this.activationData.costHospitality, this.activationData.costGift, 
      this.activationData.costVenue, this.activationData.costBonus, this.activationData.costTranslation, null, 0,this.activationData.seatCapacity)
      this.tacCourseActivation=courseActivation;
      let courseMaster = new TacCourseMaster(this.activationData.courseId, null, "", 0, null, 0, 0, null, null, null, null, 0, 0, null, null)
      this.trainingService.getCourseById(courseMaster).subscribe(
        data => {
          var response = <ResponseTacCourseMaster>data
          this.courseDetails = response.data
          this.tacCourseDateList = this.courseDetails.tacCourseDates})
    
  // this.getCourseRoomDetail(this.activationData.courseId)
    //this.tacCourseDateList = this.tacCourseActivation.tacCourseMaster.tacCourseDates
    this.formInit()
    this.patch()
     this.getCourseroom(this.activationData)
     //this.trainingRoomDetail=this.trainingRoomDetail
    
  }

  getCourseActivationById(courseMaster) {
    this.trainingService.getCourseActivationById(courseMaster).subscribe(
      data => this.loadData(data),
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
      }
    )
  }
  getCourseroom(activation) {

    let location = new Location(0, "");
    location.locationId = activation.locationId;
    this.trainingService.getCourseRoomDetail(location).subscribe(
      data => {
        var response = <ResponseLocationDetail>data
        this.trainingRoomDetail = response.data
        this.roomDetails=this.trainingRoomDetail .tacCourseRooms
      this.patch()
  
    const instrcutorControl = this.getControlOfAddMore('instructorSelect');
    this.activationData.instructors.forEach(x => {
  
      console.log(x.instructorId)
      instrcutorControl.push(this.patchValues(x.instructorId,x.name))
    })
        var roomArray = this.roomDetails.filter(i => i.roomId == this.activationData.roomID)
        if (roomArray[0] != null) {
          this.form.controls['roomSelect'].patchValue(
            roomArray[0]
          )
        }
        var dateArray = this.tacCourseDateList.filter(i => i.dateId == this.activationData.dateId)
        if (dateArray[0] != null) {
    
          this.form.controls['dateSelect'].patchValue(
            dateArray[0]
          )
        }
       
       

      },
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
      }
    )
    
  }
 

}
