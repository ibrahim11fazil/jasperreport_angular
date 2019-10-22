import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TrainingService } from 'app/service/training/training.service';
import { ToastrService } from 'ngx-toastr';
import { SystemUserService } from 'app/service/user/system-user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { ITacCourseManagementList, CourseManagementRes, myTaskCount } from 'app/models/tac-course-master';
import { Page } from 'app/models/paged-data';
import { LanguageUtil } from 'app/app.language';
import { MainComponent } from 'app/main/main.component';
import { CertificateRequest, ResponseCertificateList } from 'app/models/certificate-request';
import { ErrorService } from 'app/service/error/error.service';


@Component({
  selector: 'ms-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  rows: CourseManagementRes[];
  courseData: CourseManagementRes[];
  page = new Page();
  displayPreviousAttendedCourse: boolean = false;
  displayTable: boolean = false;
  certificateList: CertificateRequest[];
  task: String = "";
  language:LanguageUtil;

  constructor(private fb: FormBuilder,
    private modal: NgbModal,
    private trainingService: TrainingService,
    private toastr: ToastrService,
    private userService: SystemUserService,
    private router: Router,
    private mainComponent:MainComponent,
    private activatedRoute: ActivatedRoute,
    private pageTitleService: PageTitleService,
    private errorService:ErrorService) {
      this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
      this.statsCard= [

        {
          card_color: "accent-bg",
          title: this.language.attended_courses,
          number:" ",
          icon: "assessment"
        },
        {
          card_color: "success-bg",
          title: this.language.ongoing_courses,
          number:" ",
          icon: "assignment_return",
        },
        {
          card_color: "warn-bg",
          title: this.language.request_future_courses,
          number:" ",
          icon: "new_releases"
        },
        {
          card_color: "course-bg",
          title: this.language.approved_courses,
          number:" ",
          icon: "assignment",
        },
        {
          card_color: "primary-bg",
          title: this.language.smartEngineSuggestion,
          number:" ",
          icon: "remove_red_eye",
        }
      ]
     }

  ngOnInit() {
    this.trainingService.getMyTaskCount().subscribe(
      data => {
        var response = <myTaskCount>data
        this.task = String(response.data)
        this.statsCard.push(this.getTask(this.task))
      },
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
      })

  }
getTask(num){
  return  {
    card_color: "brown-bg",
    title: this.language.myTasks,
    number: num,
    icon: "add_alert",
  } 
}

  statsCard: any[] = [
  ]



  getDashboardData(card) {
    if (card.title == this.language.request_future_courses) {
      this.displayPreviousAttendedCourse = false;
      this.displayTable = false;
      this.router.navigate(["training/emp-request"]);
    }
    if (card.title == this.language.attended_courses) {
      this.displayTable = true;
      this.displayPreviousAttendedCourse = true;
      this.trainingService.getPreviousAttendedCourses().subscribe(
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
    if (card.title == this.language.ongoing_courses) {
      this.displayTable = true;
      this.displayPreviousAttendedCourse = false;
      this.trainingService.getOngoingCourses().subscribe(
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
    if (card.title == this.language.approved_courses) {
      this.displayTable = true;
      this.displayPreviousAttendedCourse = false;
      this.trainingService.getApprovedCourses().subscribe(
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

    if (card.title == this.language.myTasks) {
      this.router.navigate(["training/my-tasks"]);
    }
  }



}
