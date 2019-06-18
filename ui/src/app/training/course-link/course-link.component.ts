import { Component, OnInit } from '@angular/core';
import { TacActivity, ITacActivityList } from 'app/models/tac-activity';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { TrainingService } from 'app/service/training/training.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { ITacCourseMasterList, ITacCourseList,TacCourseMaster, Course, ResponseTacCourseMaster } from '../../models/tac-course-master';
import { TrainingGuidelines } from 'app/models/training-guidelines';
import { ExpectedResults } from 'app/models/expected-results';
import { ResponseTargetAudiences, TargetAudience } from 'app/models/target-audience';
import { isNgTemplate } from '@angular/compiler';
import { Location,ResponseLocation } from 'app/models/location';
import { Prerequisites, ResponsePrerequisites } from 'app/models/prerequisites';
 


@Component({
  selector: 'ms-course-link',
  templateUrl: './course-link.component.html',
  styleUrls: ['./course-link.component.scss']
})
export class CourseLinkComponent implements OnInit {
  subCourse = [
    {value: 0, viewValue: 'No'},
    {value: 1, viewValue: 'Yes'},
 ];

  activityList:TacActivity[]=[];
  courseList:Course[]=[];
  guidelineList:TrainingGuidelines[]=[];
  expectedResult:ExpectedResults[]=[];
  courseDetails:TacCourseMaster;
  displayCourseDetails:boolean=false;
  targetAudiences:TargetAudience[]=[];
  targetAudiencesResult:TargetAudience[]=[];
  targetAudienceString:String[]=[];
  tacCourseLocation:Location[]=[];
  tacCoursePrerequisites:Prerequisites[]=[];
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
      courseSelect:[null, Validators.compose([Validators.required])],
      locationSelect:[null, Validators.compose([Validators.required])],
      prerequisitesSelect:[null, Validators.compose([Validators.required])]
      
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
    ),
    this.trainingService.getAllCourseTargetGroups().subscribe(
      data => {
        var expectedResults = <ResponseTargetAudiences>data
        this.targetAudiences=expectedResults.data
        console.log(this.targetAudiences)
      },
      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
    ),
    this.trainingService.getAllTacCourseLocation().subscribe(
      data => {
        
        
        var location = <ResponseLocation>data
        this.tacCourseLocation=location.data
        console.log(this.tacCourseLocation)
      },
      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
    ),

    this.trainingService.getAllCoursePrerequisites().subscribe(
      data => {
        debugger;
      
        var prerequisites = <ResponsePrerequisites>data
        this.tacCoursePrerequisites=prerequisites.data
        console.log(this.tacCoursePrerequisites)
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
      if(this.courseDetails!=null)
      {
        this.displayCourseDetails=true;
      }
      this.expectedResult=this.courseDetails.tacCourseOutcomes;
      this.guidelineList=this.courseDetails.tacCourseGuidelineses;
     this.targetAudiencesResult=this.courseDetails.tacCourseAudiences;
      console.log(this.courseDetails)
      
      console.log(this.targetAudiencesResult)

      this.targetAudiencesResult.forEach(i => {
        var item =  this.targetAudiences.filter(item => item.targetId==i.targetId)
        if(item[0]!=null){
          this.targetAudienceString.push(item[0].targentName)
        }
      })
      console.log(this.targetAudienceString);
      

    },
    error => {
      console.log(error)
      this.toastr.error(error.message)
    }
  )
}






}
