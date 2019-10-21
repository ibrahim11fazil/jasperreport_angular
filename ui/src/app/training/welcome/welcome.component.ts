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

  constructor(private fb: FormBuilder,
    private modal: NgbModal,
    private trainingService: TrainingService,
    private toastr: ToastrService,
    private userService: SystemUserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private pageTitleService: PageTitleService,
    private errorService:ErrorService) { }

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
    title: "My Tasks",
    number: num,
    icon: "add_alert",
  } 
}

  statsCard: any[] = [

    {
      card_color: "accent-bg",
      title: "Attended Courses",
      number:" ",
      icon: "assessment"
    },
    {
      card_color: "success-bg",
      title: "Ongoing Courses",
      number:" ",
      icon: "assignment_return",
    },
    {
      card_color: "warn-bg",
      title: "Request Future Courses",
      number:" ",
      icon: "new_releases"
    },
    {
      card_color: "course-bg",
      title: "Approved Courses",
      number:" ",
      icon: "assignment",
    },
    {
      card_color: "primary-bg",
      title: "Smart Engine Suggestion",
      number:" ",
      icon: "remove_red_eye",
    }
  ]



  getDashboardData(card) {
    if (card.title == "Request Future Courses") {
      this.displayPreviousAttendedCourse = false;
      this.displayTable = false;
      this.router.navigate(["training/emp-request"]);
    }
    if (card.title == "Attended Courses") {
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
    if (card.title == "Ongoing Courses") {
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
    if (card.title == "Approved Courses") {
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

    if (card.title == "My Tasks") {
      this.router.navigate(["training/my-tasks"]);
    }
  }



}
