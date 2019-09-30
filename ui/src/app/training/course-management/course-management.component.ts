import { Component, OnInit, ViewChild, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TrainingService } from 'app/service/training/training.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { CourseManagementRes, ITacCourseManagementList, TacCourseMaster, ResponseTacCourseMaster } from 'app/models/tac-course-master';
import { Page } from 'app/models/paged-data';
import { TacActivation, ResponseActivationDetail } from 'app/models/tac-activation';
import { Location, ResponseLocation, ResponseLocationDetail } from 'app/models/location';
import { DURATION_FLAG_LIST, GET_CERTIFICATE } from 'app/app.constants';
import { TacInstructor, ITacInstructorList } from 'app/models/tac-instructor';
import { TrainingRoom } from 'app/models/training-room';
import { SystemUser, ISystemUserResponseList, SystemUserResponseArray } from 'app/models/system-user';
import { SystemUserService } from 'app/service/user/system-user.service';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  DAYS_OF_WEEK,

} from 'angular-calendar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { ResponseEmpData, EmpData } from 'app/models/emp-data';
import { TacCourseAttendance, ITacCourseAttendance } from 'app/models/tac-course-attendance';
import { TacCourseAttendees } from 'app/models/tac-course-attendees';
import { ResponseActivationData, ActivationData } from 'app/models/activation-data';
import { CourseManagement } from 'app/models/course-management';
import { FindAttendance, FindAttendanceResponse } from 'app/models/find-attendance';
import { CertificateRequest, ResponseCertificate, ResponseCertificateList } from 'app/models/certificate-request';



const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};
@Component({
  selector: 'ms-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class CourseManagementComponent implements OnInit {

  rows: CourseManagementRes[];
  empRows: EmpData[];
  tacInstructor: TacInstructor[] = [];
  tacInstructorResult: TacInstructor[] = [];
  userList: SystemUserResponseArray[] = [];
  displayCourseDetails: boolean = false;
  customEvent: CalendarEvent;
  activation: ActivationData;
  page = new Page();
  estimatedCost: Number;
  trainingRoomDetail: Location;
  locationType: Number;
  courseDetail: TacCourseMaster;
  durationValueString: String;
  tacInstructorString: String[] = [];
  tacCoordinatorString: String[] = [];
  public form: FormGroup;
  durationFlagList = DURATION_FLAG_LIST;
  displayManage: boolean = false;
  eventCourseDetail: CourseManagementRes;
  courseStartDate: Date;
  courseEndDate: Date;
  displayCalendar: boolean = false;
  displayButton:boolean=false
  courseCompletion: boolean = false;
  activeDayIsOpen: boolean = true;
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  view: string = 'month';
  viewDate: Date = new Date();
  checkboxList: EmpData[] = [];
  isSelected: boolean = false;
  displayCourseCompletionForm: boolean = false;

  previousCourse: boolean = false;
  Follow_list: any;
  courseAttendanceList: TacCourseAttendance[] = [];
  courseCompletionData: EmpData[];
  employeeData:EmpData;
  certificateDetails:CertificateRequest;
  certificateList:CertificateRequest[];
  


  modalData: {
    action: string,
    event: CalendarEvent
  };
  excludeDays: number[] = [0, 6];

  weekStartsOn = DAYS_OF_WEEK.SUNDAY;
  refresh: Subject<any> = new Subject();

  constructor(private fb: FormBuilder,
    private modal: NgbModal,
    private trainingService: TrainingService,
    private toastr: ToastrService,
    private userService: SystemUserService,

    private activatedRoute: ActivatedRoute,
    private pageTitleService: PageTitleService) {
  }

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
  statsCard: any[] = [

    {
      card_color: "warn-bg",
      title: "Previous Courses",
      // number : "1,425",
      icon: "assessment"
    },
    {
      card_color: "success-bg",
      title: "Current Courses",
      //number : "6,101",
      icon: "assessment",
    },
    {
      card_color: "accent-bg",
      title: "Future Courses",
      //number : "5,218",
      icon: "new_releases"
    }
  ]


  getCourseManagement(card) {
    this.displayManage = false;
    if (card.title == "Previous Courses") {
      this.displayCalendar = false;
      this.displayCourseDetails = false;
      this.previousCourse = true;
      this.displayCourseCompletionForm=false;
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
    else if (card.title == "Current Courses") {
      this.displayManage = true;
      this.previousCourse = false;
      this.displayCourseCompletionForm=false;
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
    else if (card.title == "Future Courses") {
      this.displayCalendar = false;
      this.displayCourseDetails = false;
      this.previousCourse = false;
      this.displayCourseCompletionForm=false;
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
    if (this.courseEndDate = new Date()) {
      this.courseCompletion = true;
    }
    console.log(this.courseEndDate)
    let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0)
    courseActivation.activationId = row.activation_id
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

        //getCourseById
        let courseMaster = new TacCourseMaster(0, null, "", 0, null, 0, 0, null, null, null, null, 0, 0, null, null)
        courseMaster.courseId = this.activation.belongsTo;
        this.trainingService.getCourseById(courseMaster).subscribe(
          data => {
            var response = <ResponseTacCourseMaster>data
            this.courseDetail = response.data;

          })
        let location = new Location(0, "");
        location.locationId = this.locationType;
        this.trainingService.getCourseRoomDetail(location).subscribe(
          data => {
            var response = <ResponseLocationDetail>data
            this.trainingRoomDetail = response.data
          })

        var item = this.userList.filter(item => item.id == this.activation.coordinator)
        if (item != null) {
          this.tacCoordinatorString.push(item[0].username);

        }

        this.addEvent();

      },

      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
    )



  }
  /**
  * dayClicked method is used to open the active day.
  */
  dayClicked({ date, events }: { date: Date, events: CalendarEvent[] }): void {
    this.empRows = null;
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }

    let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0)
    courseActivation.activationId = this.eventCourseDetail.activation_id;
    this.trainingService.getEmpData(courseActivation).subscribe(
      data => {
        var response = <ResponseEmpData>data
        this.empRows = response.data
        debugger;
        this.empRows.forEach(emp => {
          let courseAttendance = new TacCourseAttendance(0, null, null, null)
          let tacCourseAttendees = new TacCourseAttendees(emp.attendeesId, null, 0, 0, 0, 0)
          courseAttendance.tacCourseAttendees = tacCourseAttendees;
          courseAttendance.attendanceDate = new Date();
          courseAttendance.attendanceFlag = 0;//marking as absent initially
          this.courseAttendanceList.push(courseAttendance)


        });
        debugger;
        this.trainingService.markInitialAttendance(this.courseAttendanceList).subscribe(
          data => {
            var Response = <ITacCourseAttendance>data
          }
        )



      },
      error => {
        console.log(error)
        this.toastr.error(error.message)
      })
  }

  /**
    * eventTimesChanged method is used to change the calendar Event time.
    */
  eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {

    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();

  }

  /**
    * handleEvent method is used to handle the event and action.
    */
  handleEvent(action: string, event: CalendarEvent): void {
    console.log("handle event")
    this.modalData = { event, action };
    let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0)
    courseActivation.activationId = this.eventCourseDetail.activation_id;
    this.trainingService.getEmpData(courseActivation).subscribe(
      data => {
        var response = <ResponseEmpData>data
        this.empRows = response.data
      }
      ,
      error => {
        console.log(error)
        this.toastr.error(error.message)
      })
  }
  events: CalendarEvent[] = [{

    start: this.courseStartDate,
    end: this.courseEndDate,
    title: "Currenr Event",
    color: colors.red,
  }];

  addEvent(): void {
    console.log(this.courseStartDate.getDay())
    var i = new Date;
    while (this.courseStartDate <= this.courseEndDate) {
      if (this.courseStartDate.getDay() == 5) this.courseStartDate.setDate(this.courseStartDate.getDate() + 2);
      else if (this.courseStartDate.getDay() == 6) this.courseStartDate.setDate(this.courseStartDate.getDate() + 1);
      this.events.push({
        title: this.eventCourseDetail.courseName.toString(),
        start: startOfDay(new Date(this.courseStartDate)),
        color: colors.blue,
        draggable: true,
        allDay: false,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      });
      this.courseStartDate.setDate(this.courseStartDate.getDate() + 1)

    }
    this.refresh.next();
    this.displayCalendar = true;

  }

  checkboxValue(row, event) {
    debugger;
    const checked = event.checked;
    console.log(row);
    if (checked) {
      this.checkboxList.push(row);
      console.log(this.checkboxList)
    }
    else {
      var index = this.checkboxList.indexOf(row);
      this.checkboxList.splice(index, 1);
    }




  }

  markAttendance() {
    debugger
    this.checkboxList.forEach(emp => {
      let courseAttendance = new TacCourseAttendance(0, null, null, null)
      let tacCourseAttendees = new TacCourseAttendees(emp.attendeesId, null, 0, 0, 0, 0)
      courseAttendance.tacCourseAttendees = tacCourseAttendees;
      // courseAttendance.attendanceDate = new Date();
      courseAttendance.attendanceFlag = 1;//marking as present 
      this.courseAttendanceList.push(courseAttendance)


    });
    this.trainingService.markAttendanceOfEach(this.courseAttendanceList).subscribe(
      data => {
        var Response = <ITacCourseAttendance>data
      }
    )
    if (this.courseEndDate = new Date()) {
      this.courseCompletion = true;
    }
  }
  /**
      * markCourseCompletion() method for course completion form for previous courses
      */
  markCourseCompletion(row) {
    this.displayCourseCompletionForm = true;
    debugger;
    this.eventCourseDetail = row;
    const str = this.eventCourseDetail.course_date.split('-');
    const year = Number(str[2]);
    const date = Number(str[1]);
    const month = Number(str[0]) - 1;
    this.courseStartDate = new Date(year, month, date);


    const strENd = this.eventCourseDetail.end_date.split('-');
    const yearEnd = Number(strENd[2]);
    const dateEnd = Number(strENd[1]);
    const monthEnd = Number(strENd[0]) - 1;
    this.courseEndDate = new Date(yearEnd, monthEnd, dateEnd);

    let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0)
    courseActivation.activationId = row.activation_id
    this.trainingService.getActivationById(courseActivation).subscribe(
      data => {
        var response = <ResponseActivationData>data
        this.activation = response.data
        var durationItemsArray = this.durationFlagList.filter(durationItemsArray => durationItemsArray.value == this.activation.durationFlag)
        if (durationItemsArray[0] != null) {
          this.durationValueString = durationItemsArray[0].viewValue
        }
      })
      

    let course = new FindAttendance(0, null, null)
    course.activation_id = this.eventCourseDetail.activation_id;
    course.course_date = this.courseStartDate;
    course.end_date = this.courseEndDate;
    debugger;
    this.trainingService.courseCompletionDetails(course).subscribe(
      data => {
        var response = <ResponseEmpData>data
        
        this.getCertificates(this.eventCourseDetail.activation_id,response.data)
        
        
    })
    this.courseCompletionData = [...this.courseCompletionData];


  }

  getCertificates(activationId,responseList)
  {
    let certificateRequest=new CertificateRequest(0,null,null,null,null)
        certificateRequest.activationId=activationId;
       this.trainingService.getCertificateList(certificateRequest).subscribe(  
      data=>{
        var response=<ResponseCertificateList>data
        this.certificateList=response.data

        this.courseCompletionData = responseList;
         this.certificateList.forEach(i=>{
          // var certificateArray=this.courseCompletionData.filter(item=>item.jobId==i.jobId)
          // if(certificateArray[0]!=null)
          // {
        this.courseCompletionData.find(item => item.jobId == i.jobId).generated=true
        this.courseCompletionData.find(item => item.jobId == i.jobId).url= GET_CERTIFICATE+i.certificateUrl
        // this.courseCompletionData = [...this.courseCompletionData];
      })
      })
  }



  /**
  * markCourseCompletionForCurrent() method for course completion form on end date
  */
  markCourseCompletionForCurrent() {

    if (this.courseEndDate = new Date()) {
      this.displayCourseCompletionForm = true;

      let course = new FindAttendance(0, null, null)
      course.activation_id = this.eventCourseDetail.activation_id;
      course.course_date = this.courseStartDate;
      course.end_date = this.courseEndDate;
      this.trainingService.courseCompletionDetails(course).subscribe(
        data => {
          var response = <ResponseEmpData>data
          //this.courseCompletionData = Response.data;
          this.getCertificates(this.eventCourseDetail.activation_id,response.data)
          
        })
      
    }

    

  }

  GenerateCertificate(row)
  {
debugger;
   this.employeeData=row
    let certificateRequest=new CertificateRequest(0,null,null,null,null)
    certificateRequest.activationId=this.eventCourseDetail.activation_id;
    certificateRequest.courseName=this.eventCourseDetail.courseName;
    certificateRequest.jobId=this.employeeData.jobId
    certificateRequest.userName=this.employeeData.cnameAr
    certificateRequest.courseDate = this.eventCourseDetail.end_date
    
    this.trainingService.generateCertificate(certificateRequest).subscribe(
      data => {
        var response = <ResponseCertificate>data
        this.certificateDetails=response.data;
        this.toastr.success(response.message.toString())
        if(response.status && response.data!=null){
        this.courseCompletionData.find(item => item.jobId == this.certificateDetails.jobId).generated=true
        this.courseCompletionData.find(item => item.jobId == this.certificateDetails.jobId).url= GET_CERTIFICATE+response.data.certificateUrl
        }
      },
      error=>{
        console.log(error)
        this.toastr.error(error.message)
      }
      )

  }

}





