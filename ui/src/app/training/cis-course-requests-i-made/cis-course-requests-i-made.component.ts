import { Component, OnInit } from '@angular/core';
import { CiSystemUser, CiSystemUsersRequest, CISystemUserResponseList, CiCourseRequestedUsers, CiCourseRequestedUsersList } from 'app/models/ci-system-user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TrainingService } from 'app/service/training/training.service';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { PAGE_LIMIT } from 'app/app.constants';
import { ISystemUserResponseList } from 'app/models/system-user';

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
  firstSearch=false
  displayedColumns: string[] = ['requestedId','investigationId', 'toUser', 'createdDate', 'courseNumber', 'remark','statusFlag'];
  constructor(
    private trainingService: TrainingService,
    private fb: FormBuilder,
    private pageTitleService: PageTitleService,
    private toastr: ToastrService,
    private router:Router,) {
    this.pageTitleService.setTitle("CIS Training Request")
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
