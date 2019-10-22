import { Component, OnInit } from '@angular/core';
import { CiSystemUser, CiSystemUsersRequest, CISystemUserResponseList, CiCourseRequestedUsers, CiCourseRequestedUsersList } from 'app/models/ci-system-user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TrainingService } from 'app/service/training/training.service';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { PAGE_LIMIT, WF_REQUESTED, WF_PROCESSING, WF_APPROVED, WF_REJECTED, WF_CANCELLED } from 'app/app.constants';
import { ISystemUserResponseList } from 'app/models/system-user';
import { MainComponent } from 'app/main/main.component';
import { LanguageUtil } from 'app/app.language';
import { ErrorService } from 'app/service/error/error.service';

@Component({
  selector: 'ms-cis-course-requests-i-made',
  templateUrl: './cis-course-requests-i-made.component.html',
  styleUrls: ['./cis-course-requests-i-made.component.scss']
})
export class CisCourseRequestsIMadeComponent implements OnInit {

  //systemUser: SystemUser
  form: FormGroup
  page = 0
  ds: CiCourseRequestedUsers[] = [];
  language:LanguageUtil
  firstSearch=false
  displayedColumns: string[] = ['requestId','investigationId', 'toUser', 'createdDate', 'courseNumber', 'remark','statusFlag'];
  constructor(
    private trainingService: TrainingService,
    private fb: FormBuilder,
    private pageTitleService: PageTitleService,
    private toastr: ToastrService,
    private mainComponent:MainComponent,
    private router:Router,
    private errorService:ErrorService) {
    this.pageTitleService.setTitle("CIS Training Request")
    this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
  }

  ngDoCheck(): void
  {
   this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
  }

  ngOnInit() {
    this.formInit()
  }

  formInit() {
    this.form = this.fb.group({
      searchJobId: [""]
    });
  }
  onSubmit() {
    this.ds = new Array<CiCourseRequestedUsers>();
    this.ds = [...this.ds];
    this.page = 0
    this.firstSearch=true
    this.search()
  }

  getwfStatus(status):String{
    if(status==1)
    return WF_REQUESTED
    else if(status==2)
    return WF_PROCESSING
    else if(status==3)
    return WF_APPROVED
    else if(status==5)
    return WF_REJECTED
    else 
    return WF_CANCELLED
  }

  search() {
    var searchString = new CiCourseRequestedUsers()
    searchString.fromUser = this.form.value.searchJobId
    searchString.limit = PAGE_LIMIT
    searchString.start = this.page
    this.trainingService.listUsersofCisRequest(searchString).subscribe(
      data => {
        var response = <CiCourseRequestedUsersList>data
        if (response.status) {
          response.data.forEach(item => {
           item.statusFlagString = this.getwfStatus(item.statusFlag)
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
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
      }
    )
  }

  onScroll() {
    this.page = this.page + 1;
    this.firstSearch=false
    this.search();
  }

}
