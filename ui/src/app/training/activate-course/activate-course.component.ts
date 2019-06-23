import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TrainingService } from 'app/service/training/training.service';
import { Course, ITacCourseList, ResponseTacCourseMaster, TacCourseMaster } from 'app/models/tac-course-master';
import { ActivatedRoute } from '@angular/router';
import { ResponseCategories, Categories } from 'app/models/categories';
import { Location,ResponseLocation } from 'app/models/location';
import { ResponseRoom, TrainingRoom } from 'app/models/training-room';


@Component({
  selector: 'ms-activate-course',
  templateUrl: './activate-course.component.html',
  styleUrls: ['./activate-course.component.scss']
})

export class ActivateCourseComponent implements OnInit {
  courseList:Course[]=[];
  courseDetails:TacCourseMaster;
  roomDetails:TrainingRoom[]=[];
  courseDate:Date[]=[];
  tacCourseLocation:Location[]=[];

  courseCategories:Categories[] = [];
  displayCourseDetails:boolean=false;
  editable:true;
  public form: FormGroup;
  constructor(private fb: FormBuilder,
    private trainingService: TrainingService,
    private toastr: ToastrService,
   
    private activatedRoute: ActivatedRoute ){}

  ngOnInit() {
     this.formInit()
    this.formSetup()
  }

  formInit()
  {
    let courseMaster=new TacCourseMaster(0,null,"",0,null,0,0,null,null,null,0,0,0,null,null)
    this.courseDetails=courseMaster
    this.form = this.fb.group({
      
      courseSelect:[null, Validators.compose([Validators.required])],
      locationSelect:[null, Validators.compose([Validators.required])],
      roomSelect:[null, Validators.compose([Validators.required])],
      
      
      
    });

  }

  formSetup()
  {
    debugger;
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
    )

// this.trainingService.getAllCourseCategories().subscribe(
//   data => {
//     var response = <ResponseCategories> data
//     this.courseCategories=response.data
//     console.log(this.courseCategories)
//   },
//   error => {
//     console.log(error)
//     this.toastr.error(error.message)
//   }
// )

 }



getCourseDetails(course)
{
  debugger;
  let courseMaster=new TacCourseMaster(course.value.courseId,null,"",0,null,0,0,null,null,null,0,0,0,null,null)
  console.log(course.value);
  debugger;
  this.trainingService.getCourseById(courseMaster).subscribe(
    data => {
      debugger;
      var response = <ResponseTacCourseMaster> data
      this.courseDetails=response.data
      this.courseDate=this.courseDetails.tacCourseDates
      if(this.courseDetails!=null)
      {
        this.displayCourseDetails=true;
      }
      

    },
    error => {
      console.log(error)
      this.toastr.error(error.message)
    }
  )
}

getCourseRoomDetail(location)
{
  debugger;
  let courseLocation=new Location(location.value.locationId,"")
  console.log(courseLocation);
  console.log(location.value);
 this.roomDetails=location.value.tacCourseRooms
  // this.trainingService.getCourseRoom(courseLocation).subscribe(
  //   data => {
  //     debugger;
  //     var response = <ResponseRoom> data
  //     this.roomDetails=response.data

  //   },
  //   error => {
  //     console.log(error)
  //     this.toastr.error(error.message)
  //   }
  // )

  
}




}


