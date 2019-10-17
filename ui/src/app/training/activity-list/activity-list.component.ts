import { Component, OnInit } from '@angular/core';
import { Page } from "../../models/paged-data";
import { TacActivity } from "../../models/tac-activity";
import { TrainingService } from "../../service/training/training.service";
import { ToastrService } from "ngx-toastr";
import { LanguageUtil } from 'app/app.language';
import { MainComponent } from 'app/main/main.component';

@Component({
  selector: 'ms-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {
  language:LanguageUtil;
  activities: TacActivity;
  searchText: string;
  page = new Page();
  rows = new Array<TacActivity>();
  totalData: number;
  tData: Boolean;
  constructor(private trainingService: TrainingService,
    private toastr: ToastrService,
    private mainComponent:MainComponent) {
      this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
  }

  ngDoCheck(): void {
    this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
  }

  ngOnInit() {
    this.trainingService.currentActivitySearchMessage.subscribe(message => {
      let activity: TacActivity = { activityName: message, activityId: 0 }
      this.trainingService.listActivity(activity).subscribe(
        data => this.successSearchActivity(data),
        error => this.errorWhileSearching(error)
      )
    })
  }

  errorWhileSearching(error) {
    console.log(error);
    this.toastr.error(error.message)
  }

  successSearchActivity(data) {
    this.tData = true;
    debugger;
    if (data.status) {
      this.rows = data.data;
    } else {
      this.rows = [];
      this.toastr.error(data.message)
    }
  }

  deleteRow(id) {
    let activity: TacActivity = id;
    console.log(activity.activityName);
    this.trainingService.deleteActivity(activity).subscribe(
      data => this.successDelete(data),
      error => this.errorWhileSearching(error)
    )
  }
  
  successDelete(data) {
    this.tData = false;
    let activity: TacActivity = { activityName: this.searchText, activityId: 0 }
    this.trainingService.listActivity(activity).subscribe(
      data => this.successSearchActivity(data),
      error => this.errorWhileSearching(error)
    )
    this.toastr.success(data.message)
  }


  

}
