import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "ng2-validation";
import { TrainingService } from "../../service/training/training.service";
import { TacActivity, ITacActivityList } from "../../models/tac-activity";
import { ToastrService } from "ngx-toastr";
import { PageTitleService } from "../../core/page-title/page-title.service";
import { Page } from "../../models/paged-data"
import { TacCourseMaster, ITacCourseMasterList, ITacCourseList, Course } from 'app/models/tac-course-master';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material';
import { LanguageUtil } from 'app/app.language';
import { MainComponent } from 'app/main/main.component';
import { ResponseActivationDetail, TacActivation } from 'app/models/tac-activation';
import { ErrorService } from 'app/service/error/error.service';

@Component({
  selector: 'ms-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.scss']
})
export class SearchCourseComponent implements OnInit 
{
  //rows = new Array<Course>();
  rows = new Array<Course>();
  //tData:Boolean;
  searchText: String;
  page = new Page();
  public form: FormGroup;
  activityList:TacActivity[];
  activitySelection:TacActivity[]=[];

   dialogRef : MatDialogRef<CourseActionDialog>;
   result    : string;
   language:LanguageUtil;
   tacActivation:TacActivation;

  constructor(private fb: FormBuilder,
    private trainingService: TrainingService,
    private toastr: ToastrService,
    private router:Router,
    public dialog: MatDialog,
    private mainComponent:MainComponent,
    private errorService:ErrorService)
   {
    this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
   }

   ngDoCheck(): void
   {
    this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
   }
  
  ngOnInit() {
    this.form = this.fb.group({
      courseName: null,
      activitySelect:[null],
    });
    this.formSetup();
    
  } 

  formSetup() {
      this.trainingService.getAllActivities().subscribe(
        data =>{
          var response=<ITacActivityList>data
          this.activityList=response.data       
      },
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
      })
  }

  searchCourse() {
    this.searchText = this.form.value.courseName;
if(this.form.value.activitySelect!=null)
{
  this.activitySelection=[]
    this.activitySelection.push(this.form.value.activitySelect)
  }
  else
  {
    this.activitySelection=null
  }

    let course: TacCourseMaster = {
       courseId: 0, 
       tacCourseCategory: null,
       courseName: this.form.value.courseName, 
       duration: 0, 
       objective: null, 
       durationFlag: 0,
       numberofhours: 0,
       tacCourseGuidelineses: null, 
       tacCourseAudiences: null, 
       tacCourseOutcomes: null,
       tacCoursePrerequisiteses:[],
       subcourseFlag:0,
       locationType:0,
       tacCourseDates:null,
       tacActivities:this.activitySelection,
       
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
    console.log(error)
    this.errorService.errorResponseHandling(error)
  }

  openDialog(row) {
    this.dialogRef = this.dialog.open(CourseActionDialog, {
       disableClose: false
    });
    this.dialogRef.afterClosed().subscribe(result => {
       this.result = result;
      
       if(this.result=='Yes'){
        this.deleteRow(row)
        console.log(result)
        console.log(row)
       }
       this.dialogRef = null;
    });
 }

  deleteRow(row) {
    if(row.status==1){
    let course: TacCourseMaster = row;
    console.log(course.courseName);
    this.trainingService.deleteCourse(course).subscribe(
      data => this.successDelete(data),
      error => this.errorWhileSearching(error)
    )
    } else{
      let course: TacCourseMaster = row;
      console.log(course.courseName);
      this.trainingService.enableCourse(course).subscribe(
        data => this.successDelete(data),
        error => this.errorWhileSearching(error)
      )
      }
  }

  updateRow(row){
    var courseMaster=new TacCourseMaster(row.courseId,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
    courseMaster.courseId=row.courseId
    this.trainingService.getCourseActivationById(courseMaster).subscribe(
      data => {
        var response = <ResponseActivationDetail>data
        this.tacActivation=response.data
        if(this.tacActivation==null )
      {
   
    this.router.navigate(["/training/create-course/",row.courseId]);
      }
      else
      {
        this.toastr.error("Could not update Activated Course")
      }
      })
      
  }

  updateLink(row){
    this.router.navigate(["/training/course-link/",row.courseId]);
  }

  updateActivation(row){
    this.router.navigate(["/training/activate-course/",row.courseId]);
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
      tacCourseOutcomes: null,
      tacCoursePrerequisiteses:null,
       subcourseFlag:0,
       locationType:0,
       tacCourseDates:null,
       tacActivities:null
    }
    this.trainingService.searchCourse(course).subscribe(
      data => this.successSearch(data),
      error => this.errorWhileSearching(error)
    )
  }

}

@Component({
  selector: 'ms-search-course-dialog',
  template: `
     <h1>Would you like to update?</h1>

     <mat-dialog-actions align="end">
      <button mat-button (click)="dialogRef.close('No')">No</button>
      <button mat-button color="primary" (click)="dialogRef.close('Yes')">Yes</button>
     </mat-dialog-actions>`
})

export class CourseActionDialog {
  constructor(public dialogRef: MatDialogRef<CourseActionDialog>) { }
}
