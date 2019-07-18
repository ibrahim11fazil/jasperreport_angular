import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TrainingService } from 'app/service/training/training.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { CourseManagementRes, ITacCourseManagementList } from 'app/models/tac-course-master';
import { Page } from 'app/models/paged-data';

@Component({
  selector: 'ms-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.scss']
})
export class CourseManagementComponent implements OnInit {

  rows:CourseManagementRes[];
  page = new Page();
  form: FormGroup
  displayManage:boolean=false;
  constructor(private fb: FormBuilder,
    private trainingService: TrainingService,
    private toastr: ToastrService,

    private activatedRoute: ActivatedRoute,
    private pageTitleService: PageTitleService) { }

  ngOnInit() {
  }
  statsCard : any [] = [
  
    {
      card_color : "warn-bg",
      title : "Previous Courses",
     // number : "1,425",
      icon : "assessment"
    },
    {
      card_color : "success-bg",
      title : "Current Courses",
      //number : "6,101",
      icon : "assessment",
    },
    {
      card_color : "accent-bg",
      title : "Future Courses",
      //number : "5,218",
      icon : "new_releases"
    }
  ]


  getCourseManagement(card)
  {
    debugger;
    this.displayManage=false;
    if (card.title=="Previous Courses")
    {
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
    else if (card.title=="Current Courses")
    {
      this.displayManage=true;
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
    else if (card.title=="Future Courses")
    {
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


  
}
