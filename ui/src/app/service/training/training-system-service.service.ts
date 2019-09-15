import { Injectable } from '@angular/core';
import { ViewTaskDetailsComponent } from 'app/training/popup/view-task-details/view-task-details.component';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MatDialog } from '@angular/material';
import { DeleteDialogComponent } from '../../widget-component/pop-up/delete-dialog/delete-dialog.component';
import { AddNewCardComponent } from '../../widget-component/pop-up/add-new-card/add-new-card.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { TaskResponseData } from 'app/models/workflow';
import { ActivationData } from 'app/models/activation-data';
@Injectable({
  providedIn: 'root'
})
export class TrainingSystemServiceService {


  constructor( private toastr : ToastrService,
		private dialog : MatDialog, 
		private http : HttpClient ) {
	}

  viewDetailsOfTasks(data:TaskResponseData,activation:ActivationData,estimatedCost:Number,durationValueString:String){
	    let dialogRef : MatDialogRef<ViewTaskDetailsComponent>;
		dialogRef = this.dialog.open(ViewTaskDetailsComponent);
		dialogRef.componentInstance.data = data;
		dialogRef.componentInstance.activation=activation;
		dialogRef.componentInstance.estimatedCost=estimatedCost;
		dialogRef.componentInstance.durationValueString=durationValueString;
		dialogRef.updateSize('80%', '80%');
		return dialogRef.afterClosed();
  }
  
  getPopupviewDetailsOfTasksResponse(response:any,numberCard){
		if(response == "yes")
		{
			//action after close
		}
	}
}
