import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { TaskResponseData, WorkflowResponse } from 'app/models/workflow';
import { TrainingService } from 'app/service/training/training.service';
import { TacActivation } from 'app/models/tac-activation';
import { ResponseActivationData, ActivationData } from 'app/models/activation-data';
import { DURATION_FLAG_LIST } from 'app/app.constants';

@Component({
  selector: 'ms-view-task-details',
  templateUrl: './view-task-details.component.html',
  styleUrls: ['./view-task-details.component.scss']
})
export class ViewTaskDetailsComponent implements OnInit {

  data : TaskResponseData;
  activation: ActivationData;
  estimatedCost: Number;
  durationFlagList = DURATION_FLAG_LIST;
  durationValueString: String;
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
	constructor(
    public dialogRef : MatDialogRef<ViewTaskDetailsComponent>  
    ){
	} 

	ngOnInit() { 
    this.dialogRef.updateSize('80%', '80%');
	}

	// yes method is used to close the delete dialog and send the response "yes".
	yes(){
		this.dialogRef.close("yes");
	}

}
