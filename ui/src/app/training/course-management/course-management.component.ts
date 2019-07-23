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
import { DURATION_FLAG_LIST } from 'app/app.constants';
import { TacInstructor, ITacInstructorList } from 'app/models/tac-instructor';
import { TrainingRoom } from 'app/models/training-room';
import { SystemUser, ISystemUserResponseList, SystemUserResponseArray } from 'app/models/system-user';
import { SystemUserService } from 'app/service/user/system-user.service';
import { CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';


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
  tacInstructor: TacInstructor[] = [];
  tacInstructorResult: TacInstructor[] = [];
  userList: SystemUserResponseArray[] = [];
  displayCourseDetails: boolean = false;
  activation: TacActivation;
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
  eventCourseDetail:CourseManagementRes;

  activeDayIsOpen: boolean = true;
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  view: string = 'month';
  viewDate: Date = new Date();

  modalData: {
     action: string,
     event: CalendarEvent
  };
  
 


  constructor(private fb: FormBuilder,
    private modal: NgbModal,
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
   this.eventCourseDetail=row;
    let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0)
    courseActivation.activationId = row.activation_id
    this.trainingService.getActivationById(courseActivation).subscribe(
      data => {
        var response = <ResponseActivationDetail>data
        this.activation = response.data
        this.estimatedCost = +this.activation.costHospitality + +this.activation.costInstructor + +this.activation.costTranslation
          + +this.activation.costTransport + +this.activation.costVenue + +this.activation.costAirticket + +this.activation.costBonus
          + +this.activation.costFood + +this.activation.costGift;
        this.tacInstructorResult = this.activation.tacCourseInstructors;
        this.locationType = this.activation.tacCourseMaster.locationType;
        this.displayCourseDetails = true
        var durationItemsArray = this.durationFlagList.filter(durationItemsArray => durationItemsArray.value == this.activation.tacCourseMaster.durationFlag)
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
        courseMaster.courseId = this.activation.dependentId;
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

        var item = this.userList.filter(item => item.id == this.activation.coordinatorId)
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
 /**
     * dayClicked method is used to open the active day.
     */
    dayClicked({date, events}: {date: Date, events: CalendarEvent[]}): void {
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

   /**
     * eventTimesChanged method is used to change the calendar Event time.
     */   
   eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
      event.start = newStart;
      event.end = newEnd;
      this.handleEvent('Dropped or resized', event);
    
   }

   /**
     * handleEvent method is used to handle the event and action.
     */
   handleEvent(action: string, event: CalendarEvent): void {
      this.modalData = {event, action};
      this.modal.open(this.modalContent, {size: 'lg'});
   }

   events: CalendarEvent[] = [{
    
    // start: new Date(this.eventCourseDetail.course_date.toString()),
    // end: new Date(this.eventCourseDetail.end_date.toString()),
     start:subDays(startOfDay(new Date()), 5),
     end:new Date(),
    title: "Currenr Event" ,
    color: colors.red,
 }];

}
