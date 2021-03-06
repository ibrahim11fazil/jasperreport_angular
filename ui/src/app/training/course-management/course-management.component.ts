import { Component, OnInit, ViewChild, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TrainingService } from 'app/service/training/training.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { CourseManagementRes, ITacCourseManagementList, TacCourseMaster, ResponseTacCourseMaster, courseCancellation } from 'app/models/tac-course-master';
import { Page } from 'app/models/paged-data';
import { TacActivation, ResponseActivationDetail, CancelCourse } from 'app/models/tac-activation';
import { Location, ResponseLocation, ResponseLocationDetail } from 'app/models/location';
import { DURATION_FLAG_LIST, GET_CERTIFICATE, COURSE_FILTER } from 'app/app.constants';
import { TacInstructor, ITacInstructorList } from 'app/models/tac-instructor';
import { TrainingRoom } from 'app/models/training-room';
import { SystemUser, ISystemUserResponseList, SystemUserResponseArray, MawaredUserInfo, MawaredUserResponse, MawaredUserInfoResponse } from 'app/models/system-user';
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
import { ResponseEmpData, EmpData, ResponseEmpDataDetail } from 'app/models/emp-data';
import { TacCourseAttendance, ITacCourseAttendance } from 'app/models/tac-course-attendance';
import { TacCourseAttendees } from 'app/models/tac-course-attendees';
import { ResponseActivationData, ActivationData } from 'app/models/activation-data';
import { CourseManagement } from 'app/models/course-management';
import { FindAttendance, FindAttendanceResponse } from 'app/models/find-attendance';
import { CertificateRequest, ResponseCertificate, ResponseCertificateList } from 'app/models/certificate-request';
import { LanguageUtil } from 'app/app.language';
import { MainComponent } from 'app/main/main.component';
import { formatDate } from '@angular/common';
import { ErrorService } from 'app/service/error/error.service';
import { JobGradesListResponse, JobTitleListResponse, JobGrades, JobTitle } from 'app/models/job-card-data';
import { SmartProfileUserRequestModel, SmartProfileUserResponse, SmartProfileUserResponseModel } from 'app/models/smart-profile-model';



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
  courseData: CourseManagementRes[];
  empRows: EmpData[];
  participantRows: EmpData[];
  directEnrollParticipant: EmpData;
  mawaredDataInfo: SmartProfileUserResponseModel[];
  previousAttendance: EmpData[];
  tacInstructor: TacInstructor[] = [];
  tacInstructorResult: TacInstructor[] = [];
  userList: SystemUserResponseArray[] = [];
  displayCourseDetails: boolean = false;
  customEvent: CalendarEvent;
  activation: ActivationData;
  statusCardSelected: any;
  jobGradeList: JobGrades[] = []
  jobTitleList: JobTitle[] = []
  page = new Page();
  estimatedCost: Number;
  commentTxt = "";
  remarkTxt="";
  currentCourse:Boolean=false
  trainingRoomDetail: Location;
  locationType: Number;
  courseDetail: TacCourseMaster = new TacCourseMaster(0, null, null, 0, null, null, 0, null, null, null, null, 0, 0, null, null);
  durationValueString: String;
  tacInstructorString: String[] = [];
  tacCoordinatorString: String[] = [];
  public form: FormGroup;
  durationFlagList = DURATION_FLAG_LIST;
  courseFilter = COURSE_FILTER;
  displayManage: boolean = false;
  eventCourseDetail: CourseManagementRes;
  cancelSelectCourse: CourseManagementRes;
  courseStartDate: Date;
  courseDateValidation: Date;
  courseEndDate: Date;
  displayCalendar: boolean = false;
  displayButton: boolean = false
  courseCompletion: boolean = false;
  activeDayIsOpen: boolean = true;
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  view: string = 'month';
  viewDate: Date = new Date();
  checkboxList: EmpData[] = [];
  isSelected: boolean = false;
  displayCourseCompletionForm: boolean = false;
  futureFilter: boolean = false;
  coursePeriod: String;
  displayAttendance: boolean = false;
  language: LanguageUtil;
  previousCourse: boolean = false;
  Follow_list: any;
  courseAttendanceList: TacCourseAttendance[] = [];
  courseCompletionData: EmpData[] = [];
  employeeData: EmpData;
  certificateDetails: CertificateRequest;
  certificateList: CertificateRequest[];
  temp = [];
  attendanceMarked: boolean = false;
  updateAttendance: boolean = false;
  dateClicked: Date = new Date();
  activationDate: String = ""
  displayParticipantSelection: boolean = false




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
    private mainComponent: MainComponent,
    private activatedRoute: ActivatedRoute,
    private pageTitleService: PageTitleService,
    private errorService: ErrorService) {
    this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
    this.statsCard = [

      {
        card_color: "warn-bg",
        title: this.language.previousCourse,
        // number : "1,425",
        icon: "assessment"
      },
      {
        card_color: "success-bg",
        title: this.language.currentCourse,
        //number : "6,101",
        icon: "assessment",
      },
      {
        card_color: "accent-bg",
        title: this.language.futureCourse,
        //number : "5,218",
        icon: "new_releases"
      }
    ]

  }
  ngDoCheck(): void {
    this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
  }

  ngOnInit() {
    this.pageTitleService.setTitle("COURSE MANAGEMENT")
    this.formInit();
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
        this.errorService.errorResponseHandling(error)
      }
    )


  }
  statsCard: any[] = [
  ]
  formInit() {
    this.form = this.fb.group({
      jobId: [null],
      qid:[null],
      empName:[null]
    });
  }


  getCourseManagement(card) {
    debugger;
    this.displayManage = false;
    this.courseCompletion = false;
    this.statusCardSelected = card;
    if (card.title == this.language.previousCourse) {
      this.displayCalendar = false;
      this.displayAttendance = false;
      this.displayCourseCompletionForm = false;
      this.displayCourseDetails = false;
      this.previousCourse = true;
      this.displayCourseCompletionForm = false;
      this.futureFilter = false;
      this.currentCourse=false
      this.trainingService.getPreviousCourses().subscribe(
        data => {
          var response = <ITacCourseManagementList>data
          this.rows = response.data
          this.courseData = this.rows
          console.log(this.rows)
        },
        error => {
          console.log(error)
          this.errorService.errorResponseHandling(error)
        })
    }
    else if (card.title == this.language.currentCourse) {
      this.displayManage = true;
      this.displayCourseDetails = false;
      this.displayCourseCompletionForm = false;
      this.previousCourse = false;
      this.displayCourseCompletionForm = false;
      this.futureFilter = false;
      this.currentCourse=true;
      this.trainingService.getCurrentCourses().subscribe(
        data => {
          var response = <ITacCourseManagementList>data
          this.rows = response.data
          this.courseData = this.rows
          console.log(this.rows)
        },
        error => {
          console.log(error)
          this.errorService.errorResponseHandling(error)
        })
    }
    else if (card.title == this.language.futureCourse) {
      this.displayManage = true;
      this.displayCalendar = false;
      this.displayCourseCompletionForm = false;
      this.displayAttendance = false
      this.displayCourseDetails = false;
      this.futureFilter = true;
      this.previousCourse = false;
      this.currentCourse=false
      this.displayCourseCompletionForm = false;
      this.trainingService.getFutureCourses().subscribe(
        data => {
          var response = <ITacCourseManagementList>data
          this.rows = response.data
          this.courseData = this.rows
          console.log(this.rows)
        },
        error => {
          console.log(error)
          this.errorService.errorResponseHandling(error)
        })
    }
  }
  /**
     * updateFilter method is used to filter the data.
     */
  updateFilter(event) {
    debugger
    const val = event.target.value;

    // filter our data
    const temp = this.courseData.filter(function (d) {
      return d.courseName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
  }
  getActivationData(row) {
    debugger;
    this.displayAttendance = false;
    this.courseCompletion = false;
    this.eventCourseDetail = row;
    console.log(this.eventCourseDetail.course_date);
    const str = this.eventCourseDetail.course_date.split('-');
    const year = Number(str[2]);
    const date = Number(str[0]);
    const month = Number(str[1]) - 1;
    this.courseStartDate = new Date(year, month, date);
    this.courseDateValidation = new Date(year, month, date);
    console.log(this.courseStartDate)

    const strENd = this.eventCourseDetail.end_date.split('-');
    const yearEnd = Number(strENd[2]);
    const dateEnd = Number(strENd[0]);
    const monthEnd = Number(strENd[1]) - 1;
    this.courseEndDate = new Date(yearEnd, monthEnd, dateEnd);
    if (this.courseEndDate <= new Date()) {
      this.courseCompletion = true;
    }
    console.log(this.courseEndDate)
    let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0, 0)
    courseActivation.activationId = row.activation_id
    this.trainingService.getActivationById(courseActivation).subscribe(
      data => {
        var response = <ResponseActivationData>data
        this.activation = response.data
        this.activationDate = formatDate(this.activation.courseDate, 'yyyy-MM-dd', 'en-US')
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

        var item = this.userList.filter(item => item.jobId == this.activation.coordinator)
        if (item != null && item.length > 0) {
          this.tacCoordinatorString.push(item[0].cNameAr);

        }


        //for adding participants directly
        let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0, 0)
        courseActivation.activationId = this.eventCourseDetail.activation_id;
        this.trainingService.getEmpData(courseActivation).subscribe(
          data => {
            var response = <ResponseEmpData>data
            this.empRows = response.data
          },
          error => {
            console.log(error)
            this.errorService.errorResponseHandling(error)
          })
        this.addEvent();

      },

      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
      }
    )
  }
  /**
  * dayClicked method is used to open the active day.
  */
  dayClicked({ date, events }: { date: Date, events: CalendarEvent[] }): void {
    debugger;
    this.empRows = [];
    this.checkboxList = [];
    this.courseCompletion = false;
    this.displayAttendance = true;
    this.displayCourseCompletionForm = false;
    this.dateClicked = date
    var dateCheck = new Date();
    dateCheck.setDate(dateCheck.getDate() - 1);
    var dateFuture = new Date();
    dateFuture.setHours(0);
    dateFuture.setMinutes(0);
    dateFuture.setSeconds(0);
    //dateFuture.setDate(dateFuture.getDate() + 1);

    if (date >= dateFuture) {
      this.updateAttendance = false;
      this.displayAttendance = false;
      this.toastr.error(this.language.couldNotMarkFutureAttendance)
    }
    else if (date <= dateCheck) {
      this.empRows = []
      this.previousAttendance = []
      this.courseAttendanceList = []
      this.updateAttendance = true;
      this.attendanceUpdate(date)
    }
    else {
      this.empRows = []
      this.previousAttendance = []
      this.courseAttendanceList = []
      this.updateAttendance = false;
      this.attendanceUpdate(date)
    }

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

  }

  attendanceUpdate(date) {
    debugger

    let course = new FindAttendance(0, null, null)
    course.activation_id = this.eventCourseDetail.activation_id;
    course.course_date = date;
    this.trainingService.previousDayAttendnace(course).subscribe(
      data => {
        var response = <ResponseEmpData>data
        this.empRows = response.data
        this.previousAttendance = response.data
        if (this.empRows == null || this.empRows.length == 0) {


          let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0, 0)
          courseActivation.activationId = this.eventCourseDetail.activation_id;
          this.trainingService.getEmpData(courseActivation).subscribe(
            data => {
              var response = <ResponseEmpData>data
              this.empRows = response.data
              this.previousAttendance = response.data
              this.empRows.forEach(emp => {
                let courseAttendance = new TacCourseAttendance(0, null, null, null)
                let tacCourseAttendees = new TacCourseAttendees(emp.attendeesId, null, 0, 0, 0, 0)
                courseAttendance.tacCourseAttendees = tacCourseAttendees;
                courseAttendance.attendanceDate = this.dateClicked;
                courseAttendance.attendanceFlag = 0;//marking as absent initially
                this.courseAttendanceList.push(courseAttendance)
              });
              this.trainingService.markInitialAttendance(this.courseAttendanceList).subscribe(
                data => {
                  var Response = <ITacCourseAttendance>data

                }
              )
            },
            error => {
              console.log(error)
              this.errorService.errorResponseHandling(error)
            })
        }
        else {
          debugger;
          this.empRows.forEach(emp => {
            if (emp.attendanceFlag == 1) {
              this.checkboxList.push(emp)
            }

          })
        }

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
    debugger;
    this.displayAttendance = true;
    this.modalData = { event, action };
    let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0, 0)
    courseActivation.activationId = this.eventCourseDetail.activation_id;
    this.trainingService.getEmpData(courseActivation).subscribe(
      data => {
        var response = <ResponseEmpData>data
        this.empRows = response.data
      },
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
      })
  }
  events: CalendarEvent[] = [{

    start: this.courseStartDate,
    end: this.courseEndDate,
    title: "Currenr Event",
    color: colors.red,
  }];

  addEvent(): void {
    this.events = [];
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
    debugger
    if (this.courseDateValidation > new Date()) {
      this.displayCalendar = false;
    }
    else {
      this.displayCalendar = true;
    }
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
    this.courseAttendanceList = []
    this.displayCourseCompletionForm = false;
    if (this.previousAttendance != null && this.previousAttendance.length > 0) {
      this.previousAttendance.forEach(empAttendance => {
        let courseAttendance = new TacCourseAttendance(0, null, null, null)
        let tacCourseAttendees = new TacCourseAttendees(empAttendance.attendeesId, null, 0, 0, 0, 0)
        courseAttendance.tacCourseAttendees = tacCourseAttendees;
        courseAttendance.attendanceDate = this.dateClicked;
        courseAttendance.attendanceFlag = 0
        this.courseAttendanceList.push(courseAttendance)
      })
      this.courseAttendanceList.forEach(item => {
        this.checkboxList.forEach(emp => {

          if (Number(emp.attendeesId) == item.tacCourseAttendees.attendeesId) {
            item.attendanceFlag = 1;
          }
        })
      })
    }

    this.trainingService.markAttendanceOfEach(this.courseAttendanceList).subscribe(
      data => {
        debugger;
        var Response = <ITacCourseAttendance>data
        this.attendanceMarked = true
        if (this.courseEndDate <= this.dateClicked) {
          this.courseCompletion = true;
        }
        this.toastr.success(this.language.attendanceMarkedSuccessfully)

      }
    )

  }


  // }
  /**
      * markCourseCompletion() method for course completion form for previous courses
      */
  markCourseCompletion(row) {
    this.displayCourseCompletionForm = true;
    debugger;
    this.eventCourseDetail = row;
    const str = this.eventCourseDetail.course_date.split('-');
    const year = Number(str[2]);
    const date = Number(str[0]);
    const month = Number(str[1]) - 1;
    this.courseStartDate = new Date(year, month, date);


    const strENd = this.eventCourseDetail.end_date.split('-');
    const yearEnd = Number(strENd[2]);
    const dateEnd = Number(strENd[0]);
    const monthEnd = Number(strENd[1]) - 1;
    this.courseEndDate = new Date(yearEnd, monthEnd, dateEnd);

    let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0, 0)
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
    //debugger;
    this.trainingService.courseCompletionDetails(course).subscribe(
      data => {
        var response = <ResponseEmpData>data

        this.getCertificates(this.eventCourseDetail.activation_id, response.data)
      })
    this.courseCompletionData = [...this.courseCompletionData];
  }

  getCertificates(activationId, responseList) {
    let certificateRequest = new CertificateRequest(0, null, null, null, null, null)
    certificateRequest.activationId = activationId;
    this.trainingService.getCertificateList(certificateRequest).subscribe(
      data => {
        var response = <ResponseCertificateList>data
        this.certificateList = response.data

        this.courseCompletionData = responseList;
        if (this.certificateList != null || this.certificateList.length > 0) {
          this.certificateList.forEach(i => {
            // var certificateArray=this.courseCompletionData.filter(item=>item.jobId==i.jobId)
            // if(certificateArray[0]!=null)
            // {
            this.courseCompletionData.find(item => item.jobId == i.jobId).generated = true
            this.courseCompletionData.find(item => item.jobId == i.jobId).url = GET_CERTIFICATE + i.certificateUrl
            // this.courseCompletionData = [...this.courseCompletionData];
          })
        }
      })
  }



  /**
  * markCourseCompletionForCurrent() method for course completion form on end date
  */
  markCourseCompletionForCurrent() {
    debugger;

    this.displayCourseCompletionForm = true;

    let course = new FindAttendance(0, null, null)
    course.activation_id = this.eventCourseDetail.activation_id;
    const str = this.eventCourseDetail.course_date.split('-');
    const year = Number(str[2]);
    const date = Number(str[0]);
    const month = Number(str[1]) - 1;
    this.courseStartDate = new Date(year, month, date);


    const strENd = this.eventCourseDetail.end_date.split('-');
    const yearEnd = Number(strENd[2]);
    const dateEnd = Number(strENd[0]);
    const monthEnd = Number(strENd[1]) - 1;
    this.courseEndDate = new Date(yearEnd, monthEnd, dateEnd);
    course.course_date = this.courseStartDate;
    course.end_date = this.courseEndDate;
    this.trainingService.courseCompletionDetails(course).subscribe(
      data => {
        var response = <ResponseEmpData>data
        this.courseCompletionData = response.data;
        this.getCertificates(this.eventCourseDetail.activation_id, response.data)

      })
  }

  GenerateCertificate(row) {
    debugger;
    this.employeeData = row
    let certificateRequest = new CertificateRequest(0, null, null, null, null, null)
    certificateRequest.activationId = this.eventCourseDetail.activation_id;
    certificateRequest.courseName = this.eventCourseDetail.courseName;
    certificateRequest.jobId = this.employeeData.jobId
    certificateRequest.userName = this.employeeData.cnameAr
    certificateRequest.courseDate = this.eventCourseDetail.course_date
    certificateRequest.endDate = this.eventCourseDetail.end_date

    this.trainingService.generateCertificate(certificateRequest).subscribe(
      data => {
        var response = <ResponseCertificate>data
        this.certificateDetails = response.data;
        this.toastr.success(response.message.toString())
        if (response.status && response.data != null) {
          this.courseCompletionData.find(item => item.jobId == this.certificateDetails.jobId).generated = true
          this.courseCompletionData.find(item => item.jobId == this.certificateDetails.jobId).url = GET_CERTIFICATE + response.data.certificateUrl
        }
      },
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
      }
    )

  }

  getFutureCourseFilter(courseTime) {
    this.displayCalendar = false;
    this.displayAttendance = false;
    this.displayCourseDetails = false;
    this.futureFilter = true;
    this.previousCourse = false;
    this.displayCourseCompletionForm = false;
    coursePeriod: String;

    this.trainingService.getFutureCourseFilter(courseTime.value).subscribe(
      data => {
        var response = <ITacCourseManagementList>data
        this.rows = response.data
        this.courseData = this.rows
        console.log(this.rows)
      },
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
      })
  }


  addParticipants() {
    // let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0, 0)
    //     courseActivation.activationId = this.eventCourseDetail.activation_id;
    //     this.trainingService.getParticipantData(courseActivation).subscribe(
    //       data => {
    //         var response = <ResponseEmpData>data
    //         this.participantRows = response.data
    //       },
    //       error => {
    //         console.log(error)
    //         this.errorService.errorResponseHandling(error)
    //       })
    // this.userService.getGrades().subscribe(
    //   data => {
    //     var response = <JobGradesListResponse>data
    //     if (response.status) {
    //       this.jobGradeList = response.data
    //     }
    //     else {
    //       console.log(response.message)
    //       this.toastr.error(response.message.toString())
    //     }
    //   },
    //   error => {
    //     console.log(error)
    //     this.errorService.errorResponseHandling(error)
    //   }
    // )
    // this.userService.getJobTitles().subscribe(
    //   data => {
    //     var response = <JobTitleListResponse>data
    //     if (response.status) {
    //       this.jobTitleList = response.data
    //     }
    //     else {
    //       console.log(response.message)
    //       this.toastr.error(response.message.toString())
    //     }
    //   },
    //   error => {
    //     console.log(error)
    //     this.errorService.errorResponseHandling(error)
    //   }
    // )
   

    this.displayParticipantSelection = true
    this.displayCourseDetails = false
    this.displayCalendar = false
    this.mawaredDataInfo = null
    this.displayCourseCompletionForm=false
    this.displayAttendance=false
    this.formInit()


  }


  cancelCourse() {

    if (this.commentTxt != "") {
      debugger;
      this.cancelSelectCourse = this.eventCourseDetail
      let courseActivation = new CancelCourse(0,"","","","")
      courseActivation.activationId = this.cancelSelectCourse.activation_id;
      courseActivation.courseName = this.cancelSelectCourse.courseName;
      courseActivation.courseDate=this.cancelSelectCourse.course_date;
      courseActivation.endDate=this.cancelSelectCourse.end_date;
      courseActivation.remark=this.commentTxt
      this.trainingService.cancelCourse(courseActivation)

        .subscribe(
          data => {
            var response = <courseCancellation>data
            if (response.status == true) {
              this.toastr.success(this.language.courseCancelSuccessfull)
              this.commentTxt = ""
              this.getCourseManagement(this.statusCardSelected)
              this.displayCalendar=false
            }
          },
          error => {
            console.log(error)
            this.errorService.errorResponseHandling(error)
          })
    } else {
      this.toastr.error(this.language.requiredComment.toString())
    }


  }
  searchParticipants() {
    debugger;
    var jobIdSelected = this.form.value.jobId
    var qid = this.form.value.qid
    var empName = this.form.value.empName
    if (jobIdSelected != null && jobIdSelected != "") {
      //this.getUserInformations(jobIdSelected, true)
      var input = new SmartProfileUserRequestModel()
    input.jobIdRequested = jobIdSelected
    this.trainingService.getEmployeeSmartProfile(input).subscribe(
      data => {
        var response = <SmartProfileUserResponse>data
        this.mawaredDataInfo=response.data;
      })
    } else if((qid!=null && qid!="")|| (empName!="" && empName!=null)) {
      //this.getUserInformationsAndTitle(qid, empName)
      var input = new SmartProfileUserRequestModel()
     input.qid = qid
     input.empName=empName
     this.trainingService.getdirectEnrollEmployeeSmartProfileBasicInfo(input).subscribe(
       data => {
         var response = <SmartProfileUserResponse>data
         this.mawaredDataInfo=response.data;

       })
    }else{
      this.toastr.error(this.language.invalidSearchInput.toString())
    }

    
    // let mawaredData = new EmpData(0, "", "", "", "", "", 0, 0, "", 0, 0,"")
    // if (this.form.value.jobTitleControl != null) {
    //   mawaredData.jobTitle = this.form.value.jobTitleControl.job
    // }
    // if (this.form.value.jobGradeControl != null) {
    //   mawaredData.psLevel = this.form.value.jobGradeControl.psLevel
    // }
    // this.trainingService.getMawaredData(mawaredData)
    //   .subscribe(
    //     data => {
    //       var response = <ResponseEmpData>data
    //       this.mawaredDataInfo = response.data

    //     }
    //   )

  }

  directEnrollParticipants(row) {
    debugger
    if(row.remark!="" && row.remark!=null)
    {
    this.directEnrollParticipant = row

    let enrollParticipant = new EmpData(0, "", "", "", "", "", 0, 0, "", 0, 0,"","","")

    enrollParticipant.activationId = this.eventCourseDetail.activation_id;
    enrollParticipant.seatCapacity = this.eventCourseDetail.seatCapacity
    enrollParticipant.courseDate=this.eventCourseDetail.course_date
    enrollParticipant.endDate=this.eventCourseDetail.end_date
    enrollParticipant.jobId = row.legacycode;
    enrollParticipant.mobile=row.mobile
    enrollParticipant.email=row.email
    enrollParticipant.remark=row.remark;
    enrollParticipant.cnameAr=row.cname_AR;

    this.trainingService.enrollParticipantForCourse(enrollParticipant)

      .subscribe(
        data => {
          debugger
          var response = <ResponseEmpDataDetail>data
          if (response.status == true && response.data!=null) {
            this.toastr.success(response.message.toString())
            //this.getCourseManagement(this.statusCardSelected)
          }
          else if (response.status == false && response.data!=null){
            this.toastr.warning(response.message.toString())
          }
          else{
            this.toastr.error(response.message.toString())
          }
        },
        error => {
          console.log(error)
          this.errorService.errorResponseHandling(error)
        })
      }
      else {
        this.toastr.error(this.language.requiredComment.toString())
      }


  }

  doneAddParticipant() {
    this.getActivationData(this.eventCourseDetail)

    this.displayCourseDetails = true
    this.displayCalendar = true
    this.displayParticipantSelection = false
  }

  deleteParticipants(row)
{
  debugger
  if (row.remark!="" && row.remark!=null)
  {
    this.directEnrollParticipant = row

    let enrollParticipant = new EmpData(0, "", "", "", "", "", 0, 0, "", 0, 0,"","","")

    enrollParticipant.activationId = this.eventCourseDetail.activation_id;
    enrollParticipant.seatCapacity = this.eventCourseDetail.seatCapacity
    enrollParticipant.courseDate=this.eventCourseDetail.course_date
    enrollParticipant.endDate=this.eventCourseDetail.end_date
    enrollParticipant.jobId = row.jobId;
    enrollParticipant.mobile=row.mobile
    enrollParticipant.email=row.email
    enrollParticipant.remark=row.remark;
    enrollParticipant.cnameAr=row.cnameAr;

    this.trainingService.deleteParticipantForCourse(enrollParticipant)

      .subscribe(
        data => {
          debugger
          var response = <ResponseEmpDataDetail>data
          if (response.status == true ) {
            this.toastr.success(response.message.toString())
            //this.getCourseManagement(this.statusCardSelected)
            this.getActivationData(this.eventCourseDetail)
          }
         
          else{
            this.toastr.error(response.message.toString())
          }
        },
        error => {
          console.log(error)
          this.errorService.errorResponseHandling(error)
        })
      }
      else {
        this.toastr.error(this.language.requiredComment.toString())
    }
  }
  
    



}





