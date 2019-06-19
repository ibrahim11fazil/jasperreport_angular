import { Component, OnInit } from '@angular/core';
import { TacActivity, ITacActivityList } from 'app/models/tac-activity';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from "@angular/forms";
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
import { DURATION_FLAG_LIST } from 'app/app.constants';
 


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
  tacCourseMaster: TacCourseMaster;
  tacCourseDates:Date[]=[];
  durationFlagList = DURATION_FLAG_LIST
editable:true;

public form: FormGroup;
  constructor(private fb: FormBuilder,
    private trainingService: TrainingService,
    private toastr: ToastrService,
   
    private activatedRoute: ActivatedRoute) { 
      this.tacCourseMaster =
      {
        courseId: 0,
        tacCourseCategory: null,
        courseName: "",
        duration: 0,
        objective: "",
        numberofhours: 0,
        durationFlag: 0,
        tacCourseGuidelineses: [],
        tacCourseAudiences: [],
        tacCourseOutcomes: [],
        prerequisitesId:0,
        subcourseFlag:0,
        locationType:0,
        tacCourseDates:[],
        tacActivities:[],

      }
    }

  ngOnInit() {
    this.formInit()
    this.formSetup()
  }

  formInit(){
    let courseMaster=new TacCourseMaster(0,null,"",0,null,0,0,null,null,null,0,0,0,null,null)
    this.courseDetails=courseMaster
    this.form = this.fb.group({
      activitySelect:[null, Validators.compose([Validators.required])],
      courseSelect:[null, Validators.compose([Validators.required])],
      locationSelect:[null, Validators.compose([Validators.required])],
      prerequisitesSelect:[null, Validators.compose([Validators.required])],
      dateOptions:this.fb.array([]),
      subCourseSelect:[null, Validators.compose([Validators.required])],
      
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
  let courseMaster=new TacCourseMaster(course.value,null,"",0,null,0,0,null,null,null,0,0,0,null,null)
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

addMoreCourseDate() {
  const control = this.getControlOfAddMore('dateOptions');
  control.push(this.patchValues(0, ""))
}

removeMoreCourseDate(i) {
  const control = this.getControlOfAddMore('dateOptions');
  control.removeAt(i)
}

getControlOfAddMore(name): FormArray {
  return <FormArray>this.form.get(name);
}
patchValues(dateId, courseDate) {
  return this.fb.group({
    dateId: [dateId],
    courseDate: [courseDate]
  })
}

linkCourseWithActivity()
{
  debugger;
  if(this.form.valid){

let courseMaster=new TacCourseMaster(0,null,"",0,null,0,0,null,null,null,0,0,0,null,null)

courseMaster.courseId=this.form.value.courseSelect.courseId;
courseMaster.prerequisitesId=this.form.value.prerequisitesSelect.prerequisitesId;
courseMaster.locationType=this.form.value.locationSelect.locationId;
courseMaster.subcourseFlag=this.form.value.subCourseSelect.value;


let activity=new TacActivity("",0)
activity.activityId=<Number>this.form.value.activitySelect.activityId;
this.tacCourseMaster.tacActivities.push(activity);
courseMaster.tacActivities=this.tacCourseMaster.tacActivities;



const dateOptions = this.getControlOfAddMore('dateOptions');
var tacCourseDates = <Date[]>dateOptions.value;
this.tacCourseMaster.tacCourseDates = tacCourseDates;
courseMaster.tacCourseDates=this.tacCourseMaster.tacCourseDates;

this.trainingService.saveCourse(courseMaster).subscribe(
  data => this.successSaveCourse(data),
  error => {
    console.log(error.message)
    this.toastr.error(error.message)
  }
)
}else{
  debugger
  this.toastr.error("Please fill all required fields");
}
}

successSaveCourse(data) {
if (data.status == true) {
  this.toastr.success(data.message)
  this.form.reset()
} else {
  this.toastr.error(data.message)
}
}

}
