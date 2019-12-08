import { Component, OnInit } from '@angular/core';
import { LanguageUtil } from 'app/app.language';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TrainingService } from 'app/service/training/training.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { SystemUserService } from 'app/service/user/system-user.service';
import { MainComponent } from 'app/main/main.component';
import { AuthService } from 'app/service/auth-service/auth.service';
import { ErrorService } from 'app/service/error/error.service';
import { CancelResponseList, TaskResponseData, cancelListItem, UserRequestModel, CancelRequest, CancelRequestResponse } from 'app/models/workflow';

@Component({
  selector: 'ms-emp-reqeust-cancel',
  templateUrl: './emp-reqeust-cancel.component.html',
  styleUrls: ['./emp-reqeust-cancel.component.scss']
})
export class EmpReqeustCancelComponent implements OnInit {

  language:LanguageUtil
  page = 0
  commentTxt=""
  ds: cancelListItem[] = [];
  displayedColumns: string[] = ['createdOn','course', 'jobId', 'status','action'];
  data : cancelListItem;
  firstSearch=false
  dateFilter = (date: Date) => date.getDay()!=5 && date.getDay()!=6 && date>=new Date();
  constructor(private fb: FormBuilder,
    private modal: NgbModal,
    private trainingService: TrainingService,
    private toastr:ToastrService,
    public datepipe: DatePipe,
    private mainComponent:MainComponent,
    private authService:AuthService,
    private errorService:ErrorService)
  {
    this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
  }
  ngDoCheck(): void {
   this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
  }

  ngOnInit() {
    this.formInit()
  }

  formInit() {
    this.ds = new Array<cancelListItem>();
    this.ds = [...this.ds];
    this.page = 0
    this.firstSearch=true
    this.search()
  }

  search() {
    this.trainingService.getCancelRequestList().subscribe(
      data => {
      var response = <CancelResponseList>data
        if (response.status) {
         let res=  response.data.filter( i =>  i.responseStatus!='REJECTED')
          this.ds=res 
          this.ds = [...this.ds]; 
        }else{
          this.toastr.info("No items found")
        }
      },
      error => {
        console.log(error)
        this.errorService.errorResponseHandling(error)
      }
    )
  }

  cancelRow(row){
    var item = <cancelListItem>row
    const request =  new CancelRequest()
    request.requestId=item.workflowId
    this.trainingService.cancelRequest(request).subscribe(
      data => {
      var response = <CancelRequestResponse>data
        if (response.status) {
          this.toastr.info(response.message.toString())
          this.formInit()
        }else{
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
    // this.page = this.page + 1;
    // this.firstSearch=false
    // this.formSetup();
  }

}
