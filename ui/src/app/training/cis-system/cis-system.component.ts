import { Component, OnInit } from '@angular/core';
import { CiSystemUser, CiSystemUsersRequest, CISystemUserResponseList } from 'app/models/ci-system-user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TrainingService } from 'app/service/training/training.service';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { PAGE_LIMIT } from 'app/app.constants';
import { ISystemUserResponseList } from 'app/models/system-user';
import { MainComponent } from 'app/main/main.component';
import { LanguageUtil } from 'app/app.language';
import { ErrorService } from 'app/service/error/error.service';

@Component({
  selector: 'ms-cis-system',
  templateUrl: './cis-system.component.html',
  styleUrls: ['./cis-system.component.scss']
})
export class CisSystemComponent implements OnInit {

  //systemUser: SystemUser
  form: FormGroup
  page = 0
  ds: CiSystemUser[] = [];
  language:LanguageUtil
  firstSearch=false
  displayedColumns: string[] = ['id', 'jobCode', 'fullName', 'deparatment', 'decision','decisionDetails','decisionDate','Request'];
  constructor(
    private trainingService: TrainingService,
    private fb: FormBuilder,
    private pageTitleService: PageTitleService,
    private toastr: ToastrService,
    private mainComponent:MainComponent,
    private router:Router,
    private errorService:ErrorService) {
    this.pageTitleService.setTitle("CIS Employees")
    this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
  }
  ngDoCheck(): void {
    this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
  }


  ngOnInit() {
    this.formInit()
  }

  formInit() {
    this.form = this.fb.group({
      searchJobId: [""],
      searchId: null
    });
  }
  onSubmit() {
    this.ds = new Array<CiSystemUser>();
    this.ds = [...this.ds];
    this.page = 0
    this.firstSearch=true
    this.search()
  }

  search() {
    var searchString = new CiSystemUsersRequest()
    searchString.jobCode = this.form.value.searchJobId
    searchString.id = this.form.value.searchId
    searchString.limit = PAGE_LIMIT
    searchString.start = this.page
    this.trainingService.listUsersofCis(searchString).subscribe(
      data => {
        var response = <CISystemUserResponseList>data
        if (response.status) {
          response.data.forEach(item => {
            this.ds.push(item);
          })
          this.ds = [...this.ds]; // this.ds is conided as varaible , this will update the variable in UI
          if(this.firstSearch==true && response.data.length==0){
            this.toastr.info("Search result no found")
          }
        }
        else {
          console.log(response.message)
          this.toastr.error(response.message.toString())
        }
      },
      error => this.toastr.error(error.message)
    )
  }

  onScroll() {
    this.page = this.page + 1;
    this.firstSearch=false
    this.search();
  }

}
