import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { TaskResponseData } from 'app/models/workflow';

@Component({
  selector: 'ms-view-task-details',
  templateUrl: './view-task-details.component.html',
  styleUrls: ['./view-task-details.component.scss']
})
export class ViewTaskDetailsComponent implements OnInit {

  data : TaskResponseData;

	constructor(public dialogRef : MatDialogRef<ViewTaskDetailsComponent>){
	} 

	ngOnInit() {
	}

	// yes method is used to close the delete dialog and send the response "yes".
	yes(){
		this.dialogRef.close("yes");
	}

}
