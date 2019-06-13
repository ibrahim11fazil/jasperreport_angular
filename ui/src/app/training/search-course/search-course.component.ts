import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "ng2-validation";
import { TrainingService } from "../../service/training/training.service";
import { TacActivity } from "../../models/tac-activity";
import { ToastrService } from "ngx-toastr";
import { PageTitleService } from "../../core/page-title/page-title.service";
import { Page } from "../../models/paged-data"
import { TacCourseMaster, ITacCourseMasterList, ITacCourseList, Course } from 'app/models/tac-course-master';
import { Router } from '@angular/router';

@Component({
  selector: 'ms-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.scss']
})
export class SearchCourseComponent implements OnInit {
  //rows = new Array<Course>();
  rows = new Array<Course>();
  //tData:Boolean;
  searchText: String;
  page = new Page();
  public form: FormGroup;
  constructor(private fb: FormBuilder,
    private trainingService: TrainingService,
    private toastr: ToastrService,
    private router:Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      courseName: [null, Validators.compose([Validators.required])],
    }
    )
  }

  searchCourse() {
    this.searchText = this.form.value.courseName;
    let course: TacCourseMaster = {
      courseId: 0, tacCourseCategory: null, courseName: this.form.value.courseName, duration: 0, objective: null, durationFlag: 0,
      numberofhours: 0, tacCourseGuidelineses: null, tacCourseAudiences: null, tacCourseOutcomes: null
    }
    this.trainingService.searchCourse(course).subscribe(
      data => this.successSearch(data),
      error => this.errorWhileSearching(error)
    )
  }

  
  successSearch(data) {
    if (data.status == true) {
       //var result = <ITacCourseList>data.data
      this.rows = data.data;
     } else {
      this.toastr.error(data.message)
    }
  }
  
  errorWhileSearching(error) {
    console.log(error);
    this.toastr.error(error.message)
  }

  deleteRow(id) {
    let course: TacCourseMaster = id;
    console.log(course.courseName);
    this.trainingService.deleteCourse(course).subscribe(
      data => this.successDelete(data),
      error => this.errorWhileSearching(error)
    )
  }

  updateRow(row){
    //this.router.navigate(["create-course"])
    this.router.navigate(["/training/create-course/",row.courseId]);
  }

  successDelete(data) {
    //this.tData=false;
    let course: TacCourseMaster = {
      courseId: 0,
      tacCourseCategory: null,
      courseName: this.searchText,
      duration: 0,
      objective: null,
      durationFlag: 0,
      numberofhours: 0,
      tacCourseGuidelineses: null,
      tacCourseAudiences: null,
      tacCourseOutcomes: null
    }
    this.trainingService.searchCourse(course).subscribe(
      data => this.successSearch(data),
      error => this.errorWhileSearching(error)
    )
  }




}
