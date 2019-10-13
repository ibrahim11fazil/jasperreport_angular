import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TrainingService } from 'app/service/training/training.service';
import { ToastrService } from 'ngx-toastr';
import { SystemUserService } from 'app/service/user/system-user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { ITacCourseManagementList, CourseManagementRes } from 'app/models/tac-course-master';
import { Page } from 'app/models/paged-data';
import { CertificateRequest, ResponseCertificateList } from 'app/models/certificate-request';


@Component({
  selector: 'ms-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  rows: CourseManagementRes[];
  courseData: CourseManagementRes[];
  page = new Page();
  displayPreviousAttendedCourse:boolean=false;
  displayTable:boolean=false;
  certificateList: CertificateRequest[];

  constructor(private fb: FormBuilder,
    private modal: NgbModal,
    private trainingService: TrainingService,
    private toastr: ToastrService,
    private userService: SystemUserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private pageTitleService: PageTitleService) { }

  ngOnInit() {


  }
  statsCard: any[] = [

    {
      card_color: "accent-bg",
      title: "Attended Courses",
      // number : "1,425",
      icon: "assessment"
    },
    {
      card_color: "success-bg",
      title: "Ongoing Courses",
      //number : "6,101",
      icon: "assignment_return",
    },
    {
      card_color: "warn-bg",
      title: "Request Future Courses",
      //number : "5,218",
      icon: "new_releases"
    },
    {
      card_color: "course-bg",
      title: "Approved Courses",
      //number : "6,101",
      icon: "assignment",
    },
    {
      card_color : "primary-bg",
    title : "Smart Engine Suggestion",
    icon : "remove_red_eye",
  },
  {
    card_color : "brown-bg",
  title : "My Tasks",
  icon : "add_alert",
}
  ]

  getDashboardData(card)

  {
    if(card.title == "Request Future Courses")
    {
      this.displayPreviousAttendedCourse=false;
      this.displayTable=false;
      this.router.navigate(["training/emp-request"]);
    }
    if(card.title == "Attended Courses")
    {
      this.displayTable=true;
      this.displayPreviousAttendedCourse=true;
this.trainingService.getPreviousAttendedCourses().subscribe(
  data => {

    var response = <ITacCourseManagementList>data
    this.rows = response.data
    this.courseData = this.rows
    console.log(this.rows)
  },
  error => {
    console.log(error)
    this.toastr.error(error.message)
  })
    }
    if(card.title == "Ongoing Courses")
    {
      this.displayTable=true;
      this.displayPreviousAttendedCourse=false;
      this.trainingService.getOngoingCourses().subscribe(
        data => {
          var response = <ITacCourseManagementList>data
          this.rows = response.data
          this.courseData = this.rows
          console.log(this.rows)
        },
        error => {
          console.log(error)
          this.toastr.error(error.message)
        })
    }
    if(card.title == "Approved Courses")
    {
      this.displayTable=true;
      this.displayPreviousAttendedCourse=false;
      this.trainingService.getApprovedCourses().subscribe(
        data => {
          var response = <ITacCourseManagementList>data
          this.rows = response.data
          this.courseData = this.rows
          console.log(this.rows)
        },
        error => {
          console.log(error)
          this.toastr.error(error.message)
        })
    }

    if(card.title == "My Tasks")
    {
      this.router.navigate(["training/my-tasks"]);
    }
  }

  

}
