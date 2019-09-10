import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { SystemUserService } from 'app/service/user/system-user.service';
import { ToastrService } from 'ngx-toastr';
import { SystemUser, SystemUserResponse, SearchUser, ISystemUserResponseList, SystemUserResponseArray, GenericResponse } from 'app/models/system-user';
import { Page } from "../../models/paged-data";
import { PAGE_LIMIT } from 'app/app.constants';
import { Router } from '@angular/router';
import { WorkflowService } from 'app/service/training/workflow.service';
import { TaskResponse, TaskResponseData } from 'app/models/workflow';
import { TrainingSystemServiceService } from 'app/service/training/training-system-service.service';
@Component({
  selector: 'ms-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent implements OnInit {

  systemUser: SystemUser
  form: FormGroup
  page = 0
  ds: TaskResponseData[] = [];
  firstSearch=false
  displayedColumns: string[] = ['id', 'name', 'workflowType','jobId', 'cnameAr', 'edit','view'];
  constructor(
    private fb: FormBuilder,
    private pageTitleService: PageTitleService,
    private toastr: ToastrService,
    private workflowService:WorkflowService,
    private router:Router,
    private trainingSystemService:TrainingSystemServiceService) {
    this.pageTitleService.setTitle("User Creration")
  }

  ngOnInit() {
    this.formInit()
  }

  formInit() {
    this.form = this.fb.group({
      searchControl: [""]
    });
  }
  onSubmit() {
    this.ds = new Array<TaskResponseData>();
    this.ds = [...this.ds];
    this.page = 0
    this.firstSearch=true
    this.search()
  }

  search() {
    var searchString = new SearchUser()
    searchString.jobId = this.form.value.searchControl
    searchString.limit = PAGE_LIMIT
    searchString.start = this.page
    this.workflowService.listMyTasks().subscribe(
      data => {
        var response = <TaskResponse>data
        if (response.status && response.data.length>0) {
          response.data.forEach(item => {
            // var rName=""
            // if(item.roles!=null && item.roles.length>0){
            //   item.roles.forEach(r => {  rName = rName + " " +  r.remark})
            //   item.roleName =rName
            // }
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
        console.log(error.message)
        this.toastr.error(error.message)
      }
    )
  }

  onScroll() {
    this.page = this.page + 1;
    this.firstSearch=false
    this.search();
  }

  deleteRow(element) {
    var user = new SystemUser()
    user.id = element.id
    user.enabled=element.enabled
    debugger
    if (user.enabled == 1) {
      this.disableUser(user)
    }
    else {
      this.enableUser(user)
    }
  }

  enableUser(user) {
    // this.userService.enableUser(user).subscribe(
    //   data => {
    //     var response = <GenericResponse>data
    //     if (response.status) {
    //       this.toastr.success(response.message.toString())
    //       this.ds.find(item => item.id == user.id).enabled = 1;
    //       this.ds = [...this.ds];
    //     }
    //   },
    //   error => {
    //     console.log(error)
    //     this.toastr.error(error.message)
    //   }
    // )
  }

  disableUser(user) {
    // this.userService.disableUser(user).subscribe(
    //   data => {
    //     var response = <GenericResponse>data
    //     if (response.status) {
    //       debugger
    //       this.toastr.success(response.message.toString())
    //       this.ds.find(item => item.id == user.id).enabled = 0;
    //       this.ds = [...this.ds];
    //     }
    //   },
    //   error => {
    //     console.log(error)
    //     this.toastr.error(error.message)
    //   }
    // )
  }

  updateRow(row){
    //this.router.navigate(["create-course"])
    //this.router.navigate(["/training/user-creation/",row.id]);
  }

  viewDetails(row){
    this.trainingSystemService.viewDetailsOfTasks(row);
  }

}
