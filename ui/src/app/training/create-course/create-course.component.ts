import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from "@angular/forms";
import { CustomValidators } from "ng2-validation";
import { TrainingService } from "../../service/training/training.service";
import { ToastrService } from "ngx-toastr";
import { PageTitleService } from "../../core/page-title/page-title.service";
import { Page } from "../../models/paged-data";
import { TacCourseMaster } from 'app/models/tac-course-master';
import { TrainingGuidelines } from 'app/models/training-guidelines';
import { ExpectedResults } from 'app/models/expected-results';
import { Categories, ResponseCategories } from 'app/models/categories';
import { TargetAudience, ResponseTargetAudiences } from 'app/models/target-audience';
import { ActivatedRoute } from '@angular/router';
import {DURATION_FLAG_LIST} from "../../app.constants";
@Component({
  selector: 'ms-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  selectedValue: String;
  textAreasList: any = [];
  courseCategories:Categories[] = [];
  targetAudiences:TargetAudience[]=[]
  tacCourseMaster: TacCourseMaster;
  durationFlagList = DURATION_FLAG_LIST
  param:any;
  public form: FormGroup;
  
  constructor(private fb: FormBuilder,
    private trainingService: TrainingService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private pageTitleService: PageTitleService
  ) {

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
        tacCoursePrerequisiteses:[],
        subcourseFlag:0,
        locationType:0,
        tacCourseDates:[],
        tacActivities:[]
      }
  }

  ngOnInit() {
    this.pageTitleService.setTitle("COURSE DEFINITION")
    this.formInit()
    this.formSetup()
    this.patch()
    this.loadDataFromParam()
  }

  formInit(){
    this.form = this.fb.group({
      courseName: [this.tacCourseMaster.courseName, Validators.compose([Validators.required])],
      durationFlagControl:[null, Validators.compose([Validators.required])],
      duration: [this.tacCourseMaster.duration, Validators.compose([Validators.required])],
      objective:[this.tacCourseMaster.objective, Validators.compose([Validators.required])],
      expectedResultsOptions: this.fb.array([]),
      tacCourseGuidelinesesOptions:this.fb.array([]),
      targetAudienceOptions:this.fb.array([]),
      courseCategoriesSelect:[null, Validators.compose([Validators.required])],
      numberofhours: [this.tacCourseMaster.numberofhours, Validators.compose([Validators.required])],
    });
  }

  formSetup(){
    
    this.trainingService.getAllCourseCategories().subscribe(
      data => {
        var response = <ResponseCategories> data
        this.courseCategories=response.data
        console.log(this.courseCategories)
      },
      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
    )

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
    )
  }

  getControlOfAddMore(name): FormArray {
    return <FormArray>this.form.get(name);
  }

  getControlOfFormItem(name): FormControl {
    return <FormControl>this.form.get(name);
  }

  patch() {
    const controlexpectedResults = this.getControlOfAddMore('expectedResultsOptions');
    this.tacCourseMaster.tacCourseOutcomes.forEach(x => {
      controlexpectedResults.push(this.patchValues(x.outcomeId, x.result))
    })

    const controlCourseGuideLines = this.getControlOfAddMore('tacCourseGuidelinesesOptions');
    this.tacCourseMaster.tacCourseGuidelineses.forEach(x => {
      controlCourseGuideLines.push(this.patchValuesGuideLines(x.guidelineId, x.description))
    })

    const controltargetAudienceOptions = this.getControlOfAddMore('targetAudienceOptions');
    this.tacCourseMaster.tacCourseAudiences.forEach(x => {
      controltargetAudienceOptions.push(this.patchValuesTragetAudience(x.targetId, x.targentName,x.audienceId))
    })


    var durationItemsArray = this.durationFlagList.filter(i => i.value==this.tacCourseMaster.durationFlag)
    if(durationItemsArray[0]!=null){
    this.form.controls['durationFlagControl'].patchValue(
      durationItemsArray[0] 
   )
   }
   
   if(this.tacCourseMaster.tacCourseCategory!=null){
   var courseCategoryArray = this.courseCategories.filter(i => i.categoryId==this.tacCourseMaster.tacCourseCategory.categoryId)
    if(courseCategoryArray[0]!=null){
    this.form.controls['courseCategoriesSelect'].patchValue(
      courseCategoryArray[0] 
   )
   }
  }
  
  }

  patchValues(outcomeId, result) {
    return this.fb.group({
      outcomeId: [outcomeId],
      result: [result]
    })
  }

  patchValuesGuideLines(guidelineId, description) {
    return this.fb.group({
      guidelineId: [guidelineId],
      description: [description]
    })
  }

  patchValuesTragetAudience(targetId, targentName,audienceId) {
    return this.fb.group({
      targetId: [targetId],
      audienceId:[audienceId],
      targentName: [targentName]
    })
  }
  
  addMoreExpectedResultsTextarea() {
    const control = this.getControlOfAddMore('expectedResultsOptions');
    control.push(this.patchValues(0, ""))
  }

  removeMoreExpectedResultsTextarea(i) {
    const control = this.getControlOfAddMore('expectedResultsOptions');
    control.removeAt(i)
  }

  addMoretargetAudienceTextarea() {
    const control = this.getControlOfAddMore('targetAudienceOptions');
    control.push(this.patchValuesTragetAudience(0, "",0))
  }

  removeMoretargetAudienceTextarea(i) {
    const control = this.getControlOfAddMore('targetAudienceOptions');
    control.removeAt(i)
  }

  addMoreCourseGuideLinesTextarea() {
    const control = this.getControlOfAddMore('tacCourseGuidelinesesOptions');
    control.push(this.patchValuesGuideLines(0, ""))
  }

  removeMoreCourseGuideLinesTextarea(i) {
    const control = this.getControlOfAddMore('tacCourseGuidelinesesOptions');
    control.removeAt(i)
  }

  onSubmit(buttonType): void {
    if (buttonType === "createCourse") {
      this.createCourse()
    }
  }

  createCourse() {
    if(this.form.valid){
    let courseMaster=new TacCourseMaster(0,null,this.form.value.courseName,this.form.value.duration,null,0,this.form.value.numberofhours,null,null,null,null,0,0,null,null)

    const expectedResultsOptions = this.getControlOfAddMore('expectedResultsOptions');
    var expectedResults = <ExpectedResults[]>expectedResultsOptions.value
    this.tacCourseMaster.tacCourseOutcomes = expectedResults
  
    const courseGuidelinesesOptions = this.getControlOfAddMore('tacCourseGuidelinesesOptions');
    var expectedGuidelinesesResults = <TrainingGuidelines[]>courseGuidelinesesOptions.value
    this.tacCourseMaster.tacCourseGuidelineses = expectedGuidelinesesResults
   
    const targetAudienceOptions = this.getControlOfAddMore('targetAudienceOptions');
    var targetAudienceResults = <TargetAudience[]>targetAudienceOptions.value
    this.tacCourseMaster.tacCourseAudiences=targetAudienceResults
    
    let categorySelected = new Categories("")
    categorySelected.categoryId = <Number>this.form.value.courseCategoriesSelect.categoryId
    this.tacCourseMaster.tacCourseCategory = categorySelected
    courseMaster.tacCourseCategory = categorySelected
    courseMaster.tacCourseOutcomes = this.tacCourseMaster.tacCourseOutcomes
    courseMaster.tacCourseGuidelineses = this.tacCourseMaster.tacCourseGuidelineses
    courseMaster.tacCourseOutcomes = this.tacCourseMaster.tacCourseOutcomes
    courseMaster.tacCourseAudiences = this.tacCourseMaster.tacCourseAudiences
    courseMaster.courseId = this.tacCourseMaster.courseId
    courseMaster.objective =this.form.value.objective
    courseMaster.durationFlag = this.form.value.durationFlagControl.value
  
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

  loadDataFromParam(){
    //console.log(this.param);
    debugger;
    this.activatedRoute.params.subscribe(params => {
      if(params['id']){
          this.param = params['id'];
      }
     });  
      if(this.param!='' && this.param!=undefined){
        console.log(this.param);
        let courseMaster=new TacCourseMaster(0,null,this.form.value.courseName,this.form.value.duration,null,0,this.form.value.numberofhours,null,null,null,null,0,0,null,null)
        courseMaster.courseId= this.param
        this.trainingService.getCourseById(courseMaster).subscribe(
          data => this.loadData(data),
          error => {
            console.log(error)
            this.toastr.error(error.message)
          }
        )
      }
  }

  loadData(data){
    this.tacCourseMaster = data.data;
    this.formInit()
    this.patch() 
  }

}
