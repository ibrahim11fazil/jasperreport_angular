import { Component, OnInit } from '@angular/core';
import { TacActivity, ITacActivityList } from 'app/models/tac-activity';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { TrainingService } from 'app/service/training/training.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { ITacCourseMasterList, ITacCourseList,TacCourseMaster, Course, ResponseTacCourseMaster } from '../../models/tac-course-master';
import { TrainingGuidelines } from 'app/models/training-guidelines';
import { ExpectedResults } from 'app/models/expected-results';
 


@Component({
  selector: 'ms-course-link',
  templateUrl: './course-link.component.html',
  styleUrls: ['./course-link.component.scss']
})
export class CourseLinkComponent implements OnInit {

  activityList:TacActivity[]=[];
  courseList:Course[]=[];
  guidelineList:TrainingGuidelines[]=[];
  expectedResult:ExpectedResults[]=[];
  courseDetails:TacCourseMaster;
editable:true;
public form: FormGroup;
  constructor(private fb: FormBuilder,
    private trainingService: TrainingService,
    private toastr: ToastrService,
   
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.formInit()
    this.formSetup()
  }

  formInit(){
    let courseMaster=new TacCourseMaster(0,null,"",0,null,0,0,null,null,null)
    this.courseDetails=courseMaster
    this.form = this.fb.group({
      activitySelect:[null, Validators.compose([Validators.required])],
      courseSelect:[null, Validators.compose([Validators.required])]
    });
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
        var response = <ITacCourseList> data
        this.courseList=response.data
        console.log(response)
      },
      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
    )

}

getCourseDetails(course)
{
 // debugger
  let courseMaster=new TacCourseMaster(course.value,null,"",0,null,0,0,null,null,null)
  console.log(course.value);
  this.trainingService.getCourseById(courseMaster).subscribe(
    data => {
      debugger;
      var response = <ResponseTacCourseMaster> data
      this.courseDetails=response.data
      this.expectedResult=this.courseDetails.tacCourseOutcomes;
      this.guidelineList=this.courseDetails.tacCourseGuidelineses;
      console.log(this.courseDetails)
    },
    error => {
      console.log(error)
      this.toastr.error(error.message)
    }
  )
}






}
