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
import { Subject } from 'rxjs';
import { CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  DAYS_OF_WEEK,
  
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
  customEvent:CalendarEvent;
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
  courseStartDate:Date;
  courseEndDate:Date;
displayCalendar:boolean=false;
  activeDayIsOpen: boolean = true;
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  view: string = 'month';
  viewDate: Date = new Date();


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
   console.log(this.eventCourseDetail.course_date);
   const str = this.eventCourseDetail.course_date.split('-');
      const year = Number(str[2]);
      const date = Number(str[1]);
      const month = Number(str[0])-1;
      this.courseStartDate=new Date(year,month,date);
      console.log(this.courseStartDate)

      const strENd=this.eventCourseDetail.end_date.split('-');
      const yearEnd = Number(strENd[2]);
      const dateEnd = Number(strENd[1]);
      const monthEnd = Number(strENd[0])-1;
      this.courseEndDate=new Date(yearEnd,monthEnd,dateEnd);

   console.log(this.courseEndDate   )
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
        debugger;
       
       //console.log(this.courseStartDate+"course start date");
    
      this.addEvent();
      
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
      this.refresh.next();
    
   }

   /**
     * handleEvent method is used to handle the event and action.
     */
   handleEvent(action: string, event: CalendarEvent): void {
console.log("handle event")
      this.modalData = {event, action};
      this.modal.open(this.modalContent, {size: 'lg'});
   }
   

   events: CalendarEvent[] = [{
  
    start: this.courseStartDate,
    end:this.courseEndDate,
    title: "Currenr Event" ,
    color: colors.red,
 }];

 addEvent(): void {
 console.log(this.courseStartDate.getDay())
 var i=new Date;
while(this.courseStartDate<=this.courseEndDate)
{
// if (this.courseStartDate.getDay()==5) this.courseStartDate.setDate(this.courseStartDate.getDate()+1);
// else if (this.courseStartDate.getDay()==6) this.courseStartDate.setDate(this.courseStartDate.getDate()+2);
if(this.courseStartDate.getDay()==5)
{
  this.courseStartDate.setDate(this.courseStartDate.getDate()+2)
}
else if(this.courseStartDate.getDay()==6)
{
  this.courseStartDate.setDate(this.courseStartDate.getDate()+1)
}
  this.events.push({
     title: 'Course Schedule',
     start: startOfDay(new Date(this.courseStartDate)),
     //end: endOfDay(new Date(this.courseEndDate)),
     color: colors.blue,
     draggable: true,
     allDay: false,
     resizable: {
       beforeStart: true,
       afterEnd: true
     }
  });
  this.courseStartDate.setDate(this.courseStartDate.getDate()+1)

}
//   this.events.push({
//     title: 'Course Schedule',
//     start: startOfDay(new Date()),
//     end: endOfDay(new Date()),
//     color: colors.red,
//     draggable: true,
//     resizable: {
//       beforeStart: true,
//       afterEnd: true
//     }
//  });
  this.refresh.next();
  this.displayCalendar=true;
  
}
}
