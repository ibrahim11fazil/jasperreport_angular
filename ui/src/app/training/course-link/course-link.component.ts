import { Component, OnInit } from '@angular/core';
import { TacActivity, ITacActivityList } from 'app/models/tac-activity';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { TrainingService } from 'app/service/training/training.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { ITacCourseMasterList, TacCourseMaster, Course } from 'app/models/tac-course-master';


@Component({
  selector: 'ms-course-link',
  templateUrl: './course-link.component.html',
  styleUrls: ['./course-link.component.scss']
})
export class CourseLinkComponent implements OnInit {

  activityList:TacActivity[]=[];
  courseList:TacCourseMaster[]=[];
editable:true;
public form: FormGroup;
  constructor(private fb: FormBuilder,
    private trainingService: TrainingService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.form = this.fb.group({
      activitySelect:[null, Validators.compose([Validators.required])],
    });


    this.formSetup()
  }

  formSetup(){
    this.trainingService.getAllActivityList().subscribe(
      data => {
        var response = <ITacActivityList> data
        this.activityList=response.data
        console.log(this.activityList)
      },
      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
    ),
    this.trainingService.getAllCourseList().subscribe(
      data => {
        var response = <Course> data
        console.log(this.courseList)
      },
      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
    )

}

getCourseDetails(courseName)
{
  // this.trainingService.getCourseDetails().subscribe(
  //   data => {
  //     var response = <Course> data
  //     console.log(this.courseList)
  //   }



}






}
