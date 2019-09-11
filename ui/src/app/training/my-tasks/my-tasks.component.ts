import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { SystemUserService } from 'app/service/user/system-user.service';
import { ToastrService } from 'ngx-toastr';
import { SystemUser, SystemUserResponse, SearchUser, ISystemUserResponseList, SystemUserResponseArray, GenericResponse } from 'app/models/system-user';
import { Page } from "../../models/paged-data";
import { PAGE_LIMIT, DURATION_FLAG_LIST } from 'app/app.constants';
import { Router } from '@angular/router';
import { WorkflowService } from 'app/service/training/workflow.service';
import { TaskResponse, TaskResponseData, CommentsForTask, CommentsForTaskResponse, UserTaskHistoryExecutionsDetailsRequest, UserTaskHistoryResponse, UserTaskResponseHistory, CommentSaveModel, CommentSaveResponse, UserTaskExecuteRequest, UserTaskExecuteResponseModel, UserTaskExecuteResponse } from 'app/models/workflow';
import { TrainingSystemServiceService } from 'app/service/training/training-system-service.service';
import { TrainingService } from 'app/service/training/training.service';
import { ActivationData, ResponseActivationData } from 'app/models/activation-data';
import { TacActivation } from 'app/models/tac-activation';
@Component({
  selector: 'ms-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent implements OnInit {

  systemUser: SystemUser
  form: FormGroup
  page = 0
  commentTxt=""
  ds: TaskResponseData[] = [];
  firstSearch=false
  activation: ActivationData;
  estimatedCost: Number;
  durationFlagList = DURATION_FLAG_LIST;
  durationValueString: String;
  dataStatus = false;
  displayedColumns: string[] = ['id', 'name', 'workflowType','jobId', 'cnameAr', 'edit'];
  data : TaskResponseData;
  items: string[] = [];
  historyExecutions:UserTaskResponseHistory[]=[]
  constructor(
    private fb: FormBuilder,
    private pageTitleService: PageTitleService,
    private toastr: ToastrService,
    private workflowService:WorkflowService,
    private router:Router,
    private trainingSystemService:TrainingSystemServiceService,
    private trainingService: TrainingService) {
    this.pageTitleService.setTitle("User Tasks")
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

  saveComment(){
    if(this.commentTxt!=""){
      if(this.data.id!=null){
        var comment =  new CommentSaveModel()
        comment.taskId= this.data.id
        comment.commandMessage= this.commentTxt
        comment.processInstanceId= this.data.processId
        this.workflowService.saveComment(comment).subscribe(
          data=>{
            var response = <CommentSaveResponse>data
            if( response.status)
            this.commentTxt=""
            this.getComment();
          },
          error => {
            console.log(error)
           // this.trainingSystemService.viewDetailsOfTasks(row,this.activation,this.estimatedCost,this.durationValueString);
          this.toastr.error(error.message)
          }
        )
        }
    }
  }
  approve(){
     this.saveComment()
     this.approveOrRejectAction("approved")
  }

  reject(){
    this.saveComment()
    this.approveOrRejectAction("rejected")
  }
 

  approveOrRejectAction(actionTaken:string){
     if(actionTaken!=""){
      if(this.data.id!=null){
        var action =  new UserTaskExecuteRequest()
        action.executionId= this.data.executionId
        action.processId=this.data.processId
        action.taskId=this.data.id
        action.role="immanager"
        action.action=actionTaken
    
        this.workflowService.executeTask(action).subscribe(
          data=>{
            var response = <UserTaskExecuteResponse>data
           if(response.status){
            this.toastr.info(String(response.message))
           }else{
            this.toastr.error(String(response.message))
           }
          },
          error => {
            console.log(error)
            this.toastr.error(error)
           // this.trainingSystemService.viewDetailsOfTasks(row,this.activation,this.estimatedCost,this.durationValueString);
           // this.toastr.error(error.message)
          }
        )
        }
     }
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
    this.data=row
    this.commentTxt=""
    this.dataStatus=true
    let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0)
      courseActivation.activationId = Number( row.userRequestModel.courseActivationId)
      this.trainingService.getActivationById(courseActivation).subscribe(
        data => {
          var response = <ResponseActivationData>data
          this.activation = response.data
          console.log(this.activation)
          this.estimatedCost = +this.activation.costHospitality + +this.activation.costInstructor + +this.activation.costTranslation
            + +this.activation.costTransport + +this.activation.costVenue + +this.activation.costAirticket + +this.activation.costBonus
            + +this.activation.costFood + +this.activation.costGift;
          var durationItemsArray = this.durationFlagList.filter(durationItemsArray => durationItemsArray.value == this.activation.durationFlag)
          if (durationItemsArray[0] != null) {
            this.durationValueString = durationItemsArray[0].viewValue
          }
          //this.trainingSystemService.viewDetailsOfTasks(row,this.activation,this.estimatedCost,this.durationValueString);
        },
        error => {
          console.log(error)
         // this.trainingSystemService.viewDetailsOfTasks(row,this.activation,this.estimatedCost,this.durationValueString);
         // this.toastr.error(error.message)
        }
      )
      this.getComment();
      this.getHistoryTasks();
  }


  getComment(){
    if(this.data.id!=null){
      this.items =[]
      var task = new CommentsForTask()
      task.taskId= this.data.id
      this.workflowService.getComments(task).subscribe(
        data=>{
          var response = <CommentsForTaskResponse>data
          if(response.data!=null && response.status && response.data.length>0){
            response.data.forEach(item =>  {
              this.items.push(item.message)
            }) 
          }
        }
        ,
        error => {
          console.log(error)
         // this.trainingSystemService.viewDetailsOfTasks(row,this.activation,this.estimatedCost,this.durationValueString);
         // this.toastr.error(error.message)
        }
      )
      }
  }

  getHistoryTasks(){
    if(this.data.id!=null){
      this.items =[]
      var history =  new UserTaskHistoryExecutionsDetailsRequest()
      history.executionId= this.data.executionId
      this.workflowService.processHistory(history).subscribe(
        data=>{
          var response = <UserTaskHistoryResponse>data
          if(response.data!=null && response.status && response.data.length>0){
           this.historyExecutions=response.data
          }
        },
        error => {
          console.log(error)
         // this.trainingSystemService.viewDetailsOfTasks(row,this.activation,this.estimatedCost,this.durationValueString);
         // this.toastr.error(error.message)
        }
      )
      }
  }

}
