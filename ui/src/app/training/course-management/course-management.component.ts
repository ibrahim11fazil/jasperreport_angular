import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TrainingService } from 'app/service/training/training.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { CourseManagementRes, ITacCourseManagementList, TacCourseMaster, ResponseTacCourseMaster } from 'app/models/tac-course-master';
import { Page } from 'app/models/paged-data';
import { TacActivation, ResponseActivationDetail } from 'app/models/tac-activation';
import { DURATION_FLAG_LIST } from 'app/app.constants';

@Component({
  selector: 'ms-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.scss']
})
export class CourseManagementComponent implements OnInit {

  rows:CourseManagementRes[];
  displayCourseDetails:boolean=false;
  activation:TacActivation;
  page = new Page();
  estimatedCost:Number;
  courseDetail:TacCourseMaster;
  durationValueString:String;
  form: FormGroup;
  durationFlagList = DURATION_FLAG_LIST;
  displayManage:boolean=false;
  constructor(private fb: FormBuilder,
    private trainingService: TrainingService,
    private toastr: ToastrService,

    private activatedRoute: ActivatedRoute,
    private pageTitleService: PageTitleService) { }

  ngOnInit() {
    this.pageTitleService.setTitle("COURSE MANAGEMENT")
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
  getActivationData(row)
  {
    debugger;

  let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0)
  courseActivation.activationId = row.activation_id
  this.trainingService.getActivationById(courseActivation).subscribe(
    data => 
    {
      var response = <ResponseActivationDetail>data
      this.activation = response.data
      this.estimatedCost=+this.activation.costHospitality + +this.activation.costInstructor+ +this.activation.costTranslation
      + +this.activation.costTransport + +this.activation.costVenue + +this.activation.costAirticket+ +this.activation.costBonus
      + +this.activation.costFood + +this.activation.costGift;
      if(this.activation!=null)
      {
        this.displayCourseDetails=true
        var durationItemsArray = this.durationFlagList.filter(durationItemsArray => durationItemsArray.value==this.activation.tacCourseMaster.durationFlag)
        if(durationItemsArray[0]!=null){
          this.durationValueString=durationItemsArray[0].viewValue
        }
//getCourseById
let courseMaster = new TacCourseMaster(0, null, "", 0, null, 0, 0, null, null, null, null, 0, 0, null, null)
    courseMaster.courseId=this.activation.dependentId;
this.trainingService.getCourseById(courseMaster).subscribe(
  data => {
    var response = <ResponseTacCourseMaster>data
    this.courseDetail=response.data;
    
  })
      }
      console.log(this.activation)
    },
  
    error => {
      console.log(error)
      this.toastr.error(error.message)
    }
  )
  
}

}
