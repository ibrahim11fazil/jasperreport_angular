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
  tacCourseMaster: TacCourseMaster;
  foods = [
    { value: 'Security-0', viewValue: 'Security' },
    { value: 'Auditing-1', viewValue: 'Auditing' },
    { value: 'Custom-2', viewValue: 'Custom' }
  ];
  //  guidelines=[];
  //  outcomes=[];
  public form: FormGroup;
  constructor(private fb: FormBuilder,
    private trainingService: TrainingService,
    private toastr: ToastrService
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
        targetAudience: [],
        expectedResults: []
      }
  }

  ngOnInit() {
    this.form = this.fb.group({
      courseName: [null, Validators.compose([Validators.required])],
      duration: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])],
      expectedResultsOptions: this.fb.array([]),
      numberofhours: [null, Validators.compose([Validators.required])],
    });
    this.patch()
  }

  getControlOfAddMore(name): FormArray {
    return <FormArray>this.form.get(name);

  }

  patch() {
    if (this.tacCourseMaster.expectedResults == null) {
      this.tacCourseMaster.expectedResults.push({ result: "" });
    }
    const control = this.getControlOfAddMore('expectedResultsOptions');
    this.tacCourseMaster.expectedResults.forEach(x => {
      control.push(this.patchValues(x.outcomeId, x.result))
    })
  }

  patchValues(outcomeId, result) {
    return this.fb.group({
      outcomeId: [outcomeId],
      result: [result]
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

  onSubmit(buttonType): void {
    if (buttonType === "createCourse") {
      this.createCourse()
    }
    else if (buttonType === "addMoreExpectedResultsTextarea") {
      console.log("sample1")
      //this.addTextarea()
      //this.addMoreExpectedResultsTextarea()
    }
  }

  createCourse() {
    const expectedResultsOptions = this.getControlOfAddMore('expectedResultsOptions');
    var expectedResults = <ExpectedResults[]>expectedResultsOptions.value
    this.tacCourseMaster.expectedResults = expectedResults
    expectedResults.forEach(i => console.log(i.result))

    debugger;
    let guidelines = [];
    //let outcomes=[];
    guidelines.push(new TrainingGuidelines(this.form.value.description))
    //outcomes.push(new ExpectedResults(this.form.value.result))

    //let courseMaster=new TacCourseMaster(0,null,this.form.value.courseName,this.form.value.duration,null,0,this.form.value.numberofhours,guidelines,null,outcomes)
    this.trainingService.saveCourse(this.tacCourseMaster).subscribe(
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
}
