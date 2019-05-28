import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "ng2-validation";
import {TrainingService} from "../../service/training/training.service";
import {TacActivity} from "../../models/tac-activity";
import {ToastrService} from "ngx-toastr";
import {PageTitleService} from "../../core/page-title/page-title.service";
import {Page} from "../../models/paged-data"
import { TacCourseMaster } from 'app/models/tac-course-master';

@Component({
  selector: 'ms-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.scss']
})
export class SearchCourseComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder,
              private trainingService:TrainingService,
              private toastr : ToastrService
              ) {}

  ngOnInit() {
  }
SearchCourse(courseName)
{
  let course:TacCourseMaster ={courseId:0,tacCourseCategory:null,courseName:courseName,duration:0,objective:"",durationFlag:0,
    numberofhours:0,tacCourseGuidelineses:null,targetAudience:null,expectedResults:null}
  this.trainingService.searchCourse(course).subscribe(
    data => this.successSearch(data),
    error=>this.errorWhileSearching(error)
  )
}
successSearch(data){
  if(data.status==true){
    this.toastr.success(data.message)
    this.form.reset()
  }else{
    this.toastr.error(data.message)
  }
}
errorWhileSearching(error){
  console.log(error);
  this.toastr.error(error.message)
}
}
