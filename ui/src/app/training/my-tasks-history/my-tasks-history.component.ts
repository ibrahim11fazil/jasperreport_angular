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
import { TaskResponse, TaskResponseData, CommentsForTask, CommentsForTaskResponse, UserTaskHistoryExecutionsDetailsRequest, UserTaskHistoryResponse, UserTaskResponseHistory, CommentSaveModel, CommentSaveResponse, UserTaskExecuteRequest, UserTaskExecuteResponseModel, UserTaskExecuteResponse, HistoryUserRequest, HistoryUserResponse, HistoryUserResponseByUser, HistoryProcessResponse, HistoryUserResponseByProcess, UserRequestModel } from 'app/models/workflow';
import { TrainingSystemServiceService } from 'app/service/training/training-system-service.service';
import { TrainingService } from 'app/service/training/training.service';
import { ActivationData, ResponseActivationData } from 'app/models/activation-data';
import { TacActivation } from 'app/models/tac-activation';
import { MainComponent } from 'app/main/main.component';
import { LanguageUtil } from 'app/app.language';
import { DatePipe } from '@angular/common';
import { ErrorService } from 'app/service/error/error.service';
@Component({
  selector: 'ms-my-tasks-history',
  templateUrl: './my-tasks-history.component.html',
  styleUrls: ['./my-tasks-history.component.scss']
})
export class MyTasksHistoryComponent implements OnInit {

  systemUser: SystemUser
  form: FormGroup
  language:LanguageUtil
  page = 0
  commentTxt=""
  ds: HistoryUserResponseByUser[] = [];
  firstSearch=false
  activation: ActivationData;
  estimatedCost: Number;
  durationFlagList = DURATION_FLAG_LIST;
  durationValueString: String;
  dataStatus = false;
  displayedColumns: string[] = [  'time', 'userId' , 'edit'];
  data : UserRequestModel;
  items: string[] = [];
  historyExecutions:HistoryUserResponseByProcess[]=[]
  historyExecutionsApprovals:UserTaskResponseHistory[]=[]
  isrequestedFor=false
  constructor(
    private fb: FormBuilder,
    private pageTitleService: PageTitleService,
    private toastr: ToastrService,
    private workflowService:WorkflowService,
    private router:Router,
    private trainingSystemService:TrainingSystemServiceService,
    private mainComponent:MainComponent,
    private trainingService: TrainingService,
    public datepipe: DatePipe,
    private errorService:ErrorService) {
    this.pageTitleService.setTitle("User Tasks History")
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
    this.ds = new Array<HistoryUserResponseByUser>();
    this.ds = [...this.ds];
    this.page = 0
    this.firstSearch=true
    this.search()
  }

  search() {
    //this.ds=[]
    var searchString = new HistoryUserRequest()
    searchString.maxResult = PAGE_LIMIT
    searchString.firstResult = this.page
    this.workflowService.processHistoryByUser(searchString).subscribe(
      data => {
        var response = <HistoryUserResponse>data
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
          this.toastr.info(response.message.toString())
        }
      },
      error => {
        console.log(error.message)
        //this.toastr.error(error.message)
      }
    )
  }

  onScroll() {
    this.page = this.page + PAGE_LIMIT; // + 1 is old
    this.firstSearch=false
    this.search()
  }

  viewProcessDetails(row){
    this.commentTxt=""
    this.getHistoryByProcessId(row.rootProcessInstanceId)
    this.getHistoryTasks(row.rootProcessInstanceId) 
  }
 
  viewDetails(row){
      this.data=row
      if(this.data.workflowType==WORKFLOW_2_EMP_REQUEST){
        this.isrequestedFor=true
      }else{
        this.isrequestedFor=false
      }
      this.dataStatus=true
      let courseActivation = new TacActivation(0, null, null, null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null, 0)
      courseActivation.activationId = Number( this.data.courseActivationId)
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
      //this.getComment();
      //this.getHistoryTasks();
  }


  getComments(historyExecutionsApprovals){    
    if(historyExecutionsApprovals!=null){
      this.items =[]
      historyExecutionsApprovals.forEach(item => {
        var task = new CommentsForTask()
        task.taskId= item.id
        this.workflowService.getComments(task).subscribe(
          data => {
            var response = <CommentsForTaskResponse>data
            if(response.data!=null && response.status && response.data.length>0){
              response.data.forEach(item =>  {
                this.items.push(item.message)
              }) 
            }
          },
          error => {
            console.log(error)
          }
        )
      })
    }
  }

  getHistoryTasks(executionId:String){
    if(executionId!=null){
      this.items =[]
      var history =  new UserTaskHistoryExecutionsDetailsRequest()
      history.executionId= executionId.toString()
      this.workflowService.processHistory(history).subscribe(
        data=>{
          var response = <UserTaskHistoryResponse>data
          if(response.data!=null && response.status && response.data.length>0){
           this.historyExecutionsApprovals=response.data
           this.getComments(this.historyExecutionsApprovals)
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


  getHistoryByProcessId(processId:String){
    if(processId!=null){
      this.items =[]
      var history =  new HistoryUserRequest()
      history.processId= processId
      this.workflowService.processHistoryByProcess(history).subscribe(
        data=>{
          var response = <HistoryProcessResponse>data
          if(response.data!=null && response.status && response.data.length>0){
           this.historyExecutions=response.data
           this.historyExecutions.forEach(item =>{
             if(item.name=="applicant"){
              this.viewDetails(item.value)
             }
           })
          }
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
