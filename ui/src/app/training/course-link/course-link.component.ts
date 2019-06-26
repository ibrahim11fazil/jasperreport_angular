import { Component, OnInit } from '@angular/core';
import { TacActivity, ITacActivityList } from 'app/models/tac-activity';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from "@angular/forms";
import { TrainingService } from 'app/service/training/training.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { ITacCourseMasterList, ITacCourseList, TacCourseMaster, Course, ResponseTacCourseMaster, CourseActivityDatesRequest } from '../../models/tac-course-master';
import { TrainingGuidelines } from 'app/models/training-guidelines';
import { ExpectedResults } from 'app/models/expected-results';
import { ResponseTargetAudiences, TargetAudience } from 'app/models/target-audience';
import { isNgTemplate } from '@angular/compiler';
import { Location, ResponseLocation } from 'app/models/location';
import { Prerequisites, ResponsePrerequisites } from 'app/models/prerequisites';
import { DURATION_FLAG_LIST, IS_SUB_COURSES } from 'app/app.constants';
import { CourseDate, ResponseDate } from 'app/models/courseDate';
import { PageTitleService } from 'app/core/page-title/page-title.service';



@Component({
  selector: 'ms-course-link',
  templateUrl: './course-link.component.html',
  styleUrls: ['./course-link.component.scss']
})
export class CourseLinkComponent implements OnInit {
  subCourse = IS_SUB_COURSES
  activityList: TacActivity[] = [];
  courseList: Course[] = [];
  guidelineList: TrainingGuidelines[] = [];
  expectedResult: ExpectedResults[] = [];
  dates: CourseDate[] = [];
  param:any;
  courseDetails: TacCourseMaster;
  loadedActivityId:Number=0 // NOt required
  loadedCourseDates:CourseDate[]=[] // NOt required
  displayCourseDetails: boolean = false;
  targetAudiences: TargetAudience[] = [];
  targetAudiencesResult: TargetAudience[] = [];
  targetAudienceString: String[] = [];
  tacCourseLocation: Location[] = [];
  tacCoursePrerequisites: Prerequisites[] = [];
  tacCourseMaster: TacCourseMaster;
  tacCourseDates: CourseDate[] = [];
  durationFlagList = DURATION_FLAG_LIST
  editable: true;
  existingActivity = "Empty";

  public form: FormGroup;
  constructor(private fb: FormBuilder,
    private trainingService: TrainingService,
    private toastr: ToastrService,

    private activatedRoute: ActivatedRoute,
    private pageTitleService: PageTitleService) {
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
        prerequisitesId: 0,
        subcourseFlag: 0,
        locationType: 0,
        tacCourseDates: [],
        tacActivities: []

      }
  }

  ngOnInit() {
    debugger;
    this.pageTitleService.setTitle("COURSE LINK")
    this.formInit()
    this.formSetup()  
    this.loadDataFromParam()
  }

  formInit() {
    let courseMaster = new TacCourseMaster(0, null, "", 0, null, 0, 0, null, null, null, 0, 0, 0, null, null)
    this.courseDetails = courseMaster
    this.form = this.fb.group({
      activitySelect: [null, Validators.compose([Validators.required])],
      courseSelect: [null, Validators.compose([Validators.required])],
      locationSelect: [null, Validators.compose([Validators.required])],
      subCourseSelect: [null, Validators.compose([Validators.required])],
      prerequisitesSelect: [null, Validators.compose([Validators.required])],
      dateOptions: this.fb.array([])
    });
  }

  formSetup() {
    this.trainingService.getAllActivityList().subscribe(
      data => {
        var response = <ITacActivityList>data
        this.activityList = response.data
        console.log(this.activityList)
      },
      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
    ),
      this.trainingService.getAllCourseList().subscribe(
        data => {
          var response = <ITacCourseList>data
          this.courseList = response.data
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
          this.targetAudiences = expectedResults.data
          console.log(this.targetAudiences)
        },
        error => {
          console.log(error)
          this.toastr.error(error.message)
        }
      )
    this.trainingService.getAllTacCourseLocation().subscribe(
      data => {


        var location = <ResponseLocation>data
        this.tacCourseLocation = location.data
        console.log(this.tacCourseLocation)
      },
      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
    ),

      this.trainingService.getAllCoursePrerequisites().subscribe(
        data => {
          var prerequisites = <ResponsePrerequisites>data
          this.tacCoursePrerequisites = prerequisites.data
          console.log(this.tacCoursePrerequisites)
        },
        error => {
          console.log(error)
          this.toastr.error(error.message)
        }
      )

  }

  getCourseDetails(course) {
     debugger;
    let courseMaster = new TacCourseMaster(course.value.courseId, null, "", 0, null, 0, 0, null, null, null, 0, 0, 0, null, null)
    console.log(course.value);
    debugger;
    this.courseByIdList(courseMaster);
    // this.trainingService.getCourseById(courseMaster).subscribe(
    //   data => {
    //     debugger;
    //     var response = <ResponseTacCourseMaster>data
    //     this.courseDetails = response.data
    //     if (this.courseDetails != null) {
    //       this.displayCourseDetails = true;
    //     }
    //     this.expectedResult = this.courseDetails.tacCourseOutcomes;
    //     this.guidelineList = this.courseDetails.tacCourseGuidelineses;
    //     this.targetAudiencesResult = this.courseDetails.tacCourseAudiences;
    //     this.dates = this.courseDetails.tacCourseDates;
    //     this.targetAudiencesResult.forEach(i => {
    //       var item = this.targetAudiences.filter(item => item.targetId == i.targetId)
    //       if (item[0] != null) {
    //         this.targetAudienceString.push(item[0].targentName)
    //       }
    //     })
    //     console.log(this.targetAudienceString);
    //     this.fetchDates();
    //     this.patch();

    //   },
    //   error => {
    //     console.log(error)
    //     this.toastr.error(error.message)
    //   }
    // )
  }

  getDates(activity){
    this.loadedActivityId= activity.value.activityId
    this.fetchDates()
    
  }

  //Not required
  fetchDates(){
    debugger;
    if(this.courseDetails!=null && this.courseDetails.courseId!=null && 
      this.loadedActivityId!=0
      ){
        var request = new CourseActivityDatesRequest()
        request.courseId=this.courseDetails.courseId
        request.activityId=this.loadedActivityId
        this.trainingService.getAllDatesForCourseAndActivity(request).subscribe(
          data=> {
            var response = <ResponseDate>data
            this.loadedCourseDates= response.data
            this.patch()
          },
          error=> {
            this.toastr.error(error.message)
            console.log(error.message)
          }
        )
      } else {
        this.toastr.info("Select Course or Activity to view date")
      }
  }

  patch() {
    if (this.courseDetails.tacActivities.length > 0) {
      this.existingActivity = ""
      this.courseDetails.tacActivities.forEach(item =>
        this.existingActivity = this.existingActivity + item.activityName + " - ")
    }

    var locationArray = this.tacCourseLocation.filter(i => i.locationId == this.courseDetails.locationType)
    if (locationArray[0] != null) {
      this.form.controls['locationSelect'].patchValue(
        locationArray[0]
      )
    }

    var preRequsitesArray = this.tacCoursePrerequisites.filter(i => i.prerequisitesId == this.courseDetails.prerequisitesId)
    if (preRequsitesArray[0] != null) {
      this.form.controls['prerequisitesSelect'].patchValue(
        preRequsitesArray[0]
      )
    }

    var subCourseArray = this.subCourse.filter(i => i.value==this.courseDetails.subcourseFlag)
    if(subCourseArray[0]!=null){
    this.form.controls['subCourseSelect'].patchValue(
    subCourseArray[0] 
   )
    }
    var courseArray = this.courseList.filter(i => i.courseId==this.courseDetails.courseId)
    if(courseArray[0]!=null){
    this.form.controls['courseSelect'].patchValue(
      courseArray[0] 
   )
    }
  //   var activityArray = this.courseDetails.tacActivities.filter(i => i.activityId==this.courseDetails.tacActivities.filter(i.activityId))
  //   if(courseArray[0]!=null){
  //   this.form.controls['courseSelect'].patchValue(
  //     courseArray[0] 
  //  )
  //   }

    const datesControl = this.getControlOfAddMore('dateOptions');
    //this.form.setControl('dateOptions', this.fb.array([]));
   this.loadedCourseDates.forEach(x => {
    //console.log(x.courseDate)
    datesControl.push(this.patchValues(x.dateId, new Date(x.courseDate)))
  })
    this.loadedCourseDates.forEach(x => {
      console.log(x.courseDate)
      datesControl.push(this.patchValues(x.dateId, new Date(x.courseDate)))
    })


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

  linkCourseWithActivity() {
    debugger;
    if (this.form.valid) {

      let courseMaster = new TacCourseMaster(0, null, "", 0, null, 0, 0, null, null, null, 0, 0, 0, null, null)
      courseMaster.courseId = this.form.value.courseSelect.courseId;
      courseMaster.prerequisitesId = this.form.value.prerequisitesSelect.prerequisitesId;
      courseMaster.locationType = this.form.value.locationSelect.locationId;
      courseMaster.subcourseFlag = this.form.value.subCourseSelect.value;

      let activity = new TacActivity("", 0)
      activity.activityId = <Number>this.form.value.activitySelect.activityId;
      activity.activityName = <String>this.form.value.activitySelect.activityName;
      this.tacCourseMaster.tacActivities.push(activity);
      courseMaster.tacActivities = this.tacCourseMaster.tacActivities;


      const dateOptions = this.getControlOfAddMore('dateOptions');
      var tacCourseDates = <CourseDate[]>dateOptions.value;
      this.tacCourseMaster.tacCourseDates = tacCourseDates;
      
      courseMaster.tacCourseDates = this.tacCourseMaster.tacCourseDates;
      

      this.trainingService.linkCourseWithActivity(courseMaster).subscribe(
        data => this.successSaveCourse(data),
        error => {
          console.log(error.message)
          this.toastr.error(error.message)
        }
      )
    } else {
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
  loadDataFromParam(){
    debugger;
    console.log(this.param);
    this.activatedRoute.params.subscribe(params => {
      if(params['id']){
          this.param = params['id'];
      }
     });  
      if(this.param!='' && this.param!=undefined){
        console.log(this.param);
        let courseMaster=new TacCourseMaster(0,null,this.form.value.courseName,this.form.value.duration,null,0,this.form.value.numberofhours,null,null,null,0,0,0,null,null)
        courseMaster.courseId= this.param
        // this.trainingService.getCourseById(courseMaster).subscribe(
        //   data => this.loadData(data),
        //   error => {
        //     console.log(error)
        //     this.toastr.error(error.message)
        //   }
        // )
        this.courseByIdList(courseMaster);
      }
  }

  loadData(data){
    //this.tacCourseMaster = data.data;
    this.formInit()
    this.patch() 
  }

  courseByIdList(course)
  {
    this.trainingService.getCourseById(course).subscribe(
      data => {
        debugger;
        var response = <ResponseTacCourseMaster>data
        this.courseDetails = response.data
        if (this.courseDetails != null) {
          this.displayCourseDetails = true;
        }
      
        this.expectedResult = this.courseDetails.tacCourseOutcomes;
        this.guidelineList = this.courseDetails.tacCourseGuidelineses;
        this.targetAudiencesResult = this.courseDetails.tacCourseAudiences;
        this.dates = this.courseDetails.tacCourseDates;
        this.targetAudiencesResult.forEach(i => {
          var item = this.targetAudiences.filter(item => item.targetId == i.targetId)
          if (item[0] != null) {
            this.targetAudienceString.push(item[0].targentName)
          }
        })
        console.log(this.targetAudienceString);
        this.fetchDates();
        this.patch();

      },
      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
    )
  }
}
