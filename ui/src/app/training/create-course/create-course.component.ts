import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
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
 
  courseDurationFlag = [
    { value: '1', viewValue: 'YEAR' },
    { value: '2', viewValue: 'MONTH' },
    { value: '3', viewValue: 'DAY' },
    { value: '4', viewValue: 'HOUR' }
  ];
  param:any;
  public form: FormGroup;
  constructor(private fb: FormBuilder,
    private trainingService: TrainingService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
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
        tacCourseOutcomes: []
      }
  }

  ngOnInit() {
    this.formInit()
    this.patch()
    this.formSetup()
    this.loadDataFromParam();
  }

  formInit(){
    this.form = this.fb.group({
      courseName: [this.tacCourseMaster.courseName, Validators.compose([Validators.required])],
      coursecourseDurationFlagSelect:[this.tacCourseMaster.durationFlag, Validators.compose([Validators.required])],
      duration: [this.tacCourseMaster.duration, Validators.compose([Validators.required])],
      objective:[this.tacCourseMaster.objective, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])],
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
    }else{
      this.toastr.error("Invalid Action")
    }
  }

  createCourse() {
    let courseMaster=new TacCourseMaster(0,null,this.form.value.courseName,this.form.value.duration,null,0,this.form.value.numberofhours,null,null,null)

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
    categorySelected.categoryId = <Number>this.form.value.courseCategoriesSelect
    this.tacCourseMaster.tacCourseCategory = categorySelected
    courseMaster.tacCourseCategory = categorySelected
    courseMaster.tacCourseOutcomes = this.tacCourseMaster.tacCourseOutcomes
    courseMaster.tacCourseGuidelineses = this.tacCourseMaster.tacCourseGuidelineses
    courseMaster.tacCourseOutcomes = this.tacCourseMaster.tacCourseOutcomes
    courseMaster.tacCourseAudiences = this.tacCourseMaster.tacCourseAudiences
    courseMaster.courseId = this.tacCourseMaster.courseId
    courseMaster.objective =this.form.value.objective
    debugger
    console.log(JSON.stringify(courseMaster));
    this.trainingService.saveCourse(courseMaster).subscribe(
      data => this.successSaveCourse(data),
      error => {
        console.log(error)
        this.toastr.error(error.message)
      }
    )
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
    this.activatedRoute.params.subscribe(params => {
      if(params['id']){
          this.param = params['id'];
      }
     });  
      if(this.param!='' && this.param!=undefined){
        console.log(this.param);
        let courseMaster=new TacCourseMaster(0,null,this.form.value.courseName,this.form.value.duration,null,0,this.form.value.numberofhours,null,null,null)
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
