import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { SystemUserService } from 'app/service/user/system-user.service';
import { ToastrService } from 'ngx-toastr';
import { SystemUser, SystemUserResponse, SearchUser, ISystemUserResponseList, SystemUserResponseArray, GenericResponse } from 'app/models/system-user';
import { Page } from "../../models/paged-data";
import { PAGE_LIMIT, DURATION_FLAG_LIST, WORKFLOW_2_EMP_REQUEST } from 'app/app.constants';
import { Router } from '@angular/router';
import { WorkflowService } from 'app/service/training/workflow.service';
import { TaskResponse, TaskResponseData, CommentsForTask, CommentsForTaskResponse, UserTaskHistoryExecutionsDetailsRequest, UserTaskHistoryResponse, UserTaskResponseHistory, CommentSaveModel, CommentSaveResponse, UserTaskExecuteRequest, UserTaskExecuteResponseModel, UserTaskExecuteResponse } from 'app/models/workflow';
import { TrainingSystemServiceService } from 'app/service/training/training-system-service.service';
import { TrainingService } from 'app/service/training/training.service';
import { ActivationData, ResponseActivationData } from 'app/models/activation-data';
import { TacActivation } from 'app/models/tac-activation';
import { MainComponent } from 'app/main/main.component';
import { LanguageUtil } from 'app/app.language';
import { ErrorService } from 'app/service/error/error.service';
import { DatePipe } from '@angular/common';
import { SeatCapacity, SeatCapacityCheck, SeatCapacityResponse } from 'app/models/seat-capacity';
@Component({
  selector: 'ms-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss']
})
export class MyTasksComponent implements OnInit {

  systemUser: SystemUser
  form: FormGroup
  language:LanguageUtil;
  page = 0
  commentTxt=""
  ds: TaskResponseData[] = [];
  firstSearch=false
  isrequestedFor=false
  activation: ActivationData;
  estimatedCost: Number;
  durationFlagList = DURATION_FLAG_LIST;
  durationValueString: String;
  dataStatus = false;
  //displayedColumns: string[] = ['createdOn', 'name',  'workflowType','jobId', 'cnameAr', 'edit'];
  displayedColumns: string[] = ['createdOn','course', 'jobId', 'cnameAr', 'edit'];
  data : TaskResponseData;
  items: string[] = [];
  historyExecutions:UserTaskResponseHistory[]=[]
  constructor(
    private fb: FormBuilder,
    private pageTitleService: PageTitleService,
    private toastr: ToastrService,
    private workflowService:WorkflowService,
    private router:Router,
    public datepipe: DatePipe,
    private trainingSystemService:TrainingSystemServiceService,
    private mainComponent:MainComponent,
    private trainingService: TrainingService,
    private errorService:ErrorService) {
    this.pageTitleService.setTitle("User Tasks")
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
      searchControl: [""]
    });
    this.search()
  }

  onSubmit() {
    this.ds = new Array<TaskResponseData>();
    this.ds = [...this.ds];
    this.page = 0
    this.firstSearch=true
    this.search()
  }

  search() {
    //this.ds=[]
    var searchString = new SearchUser()
    searchString.jobId = this.form.value.searchControl
    searchString.limit = PAGE_LIMIT
    searchString.start = this.page
    this.workflowService.listMyTasksWithDelegations(searchString).subscribe(
      data => {
        var response = <TaskResponse>data
        if (response.status && response.data.length>0) {
          response.data.forEach(item => {
            // var rName=""
            // if(item.roles!=null && item.roles.length>0){
            //   item.roles.forEach(r => {  rName = rName + " " +  r.remark})
            //   item.roleName =rName
            // }
            debugger
            this.ds.push(item);
          })
          this.ds = [...this.ds]; // this.ds is conided as varaible , this will update the variable in UI
          if(this.firstSearch==true && response.data.length==0){
            this.toastr.info("Search result no found")
          }
        }
        else {
          console.log(response.message)
          this.toastr.info(response.message.toString())
        }
      },
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
      }
    )
  }

  onScroll() {
    this.page = this.page  + PAGE_LIMIT //+ 1;
    this.firstSearch=false
    this.search()
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
            this.errorService.errorResponseHandling(error)
          }
        )
        }
    }
  }
  approve(){
    const activationId= Number(this.data.userRequestModel.courseActivationId);
    let capacity =  new SeatCapacityCheck(activationId)
    this.trainingService.checkforSeats(capacity).subscribe(
      data =>{
        var response = <SeatCapacityResponse>data
        if(response.status)   {
          this.saveComment()
          this.approveOrRejectAction("approved")
        } else{
             this.toastr.error(this.language.noSeatMessage)
             this.commentTxt=this.language.noSeatComment.toString()
        }  
      },  
      error=>{
        console.log(error)
        this.errorService.errorResponseHandling(error)
      }
    )
   
  }

  reject(){
    if(this.commentTxt!=""){
    this.saveComment()
    this.approveOrRejectAction("rejected")
    }else{
      this.toastr.error(this.language.requiredComment.toString())
    }
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
            this.dataStatus=false
            this.onSubmit()
           }else{
            this.toastr.error(String(response.message))
           }
          },
          error => {
            console.log(error)
             this.errorService.errorResponseHandling(error)
          }
        )
        }
     }
  }


  viewDetails(row){
    this.data=row
    if(this.data.userRequestModel.workflowType==WORKFLOW_2_EMP_REQUEST){
      this.isrequestedFor=true
    }else{
      this.isrequestedFor=false
    }
    this.commentTxt=""
    this.dataStatus=true
    let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0,0)
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
          this.errorService.errorResponseHandling(error)
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
          this.errorService.errorResponseHandling(error)
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
          this.errorService.errorResponseHandling(error)
        }
      )
      }
  }

}
