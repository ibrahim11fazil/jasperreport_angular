import { Component, OnInit } from '@angular/core';
import {Page} from "../../models/paged-data";
import {TacActivity} from "../../models/tac-activity";
import {TrainingService} from "../../service/training/training.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'ms-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {
  activities:TacActivity;
  searchText:string;
  page = new Page();
  rows = new Array<TacActivity>();
  totalData:number;
  tData:Boolean;
  constructor( private trainingService:TrainingService,
               private toastr : ToastrService) {
    this.fetch((data) => {
      // cache our list
      this.temp = [...data];
      // push our inital complete list
      this.rows = data;
    });
  }

  ngOnInit() {
    this.trainingService.currentActivitySearchMessage.subscribe(message =>{
      this.searchText = message
      //console.log(searchText);
      let activity:TacActivity ={activityName:message,activityId:0}
      this.trainingService.listActivity(activity).subscribe(
          data => this.successSearch(data),
          error=>this.errorWhileSearching(error)
      )
    })
  }
  errorWhileSearching(error){
    console.log(error);
    this.toastr.error(error.message)
  }
  successSearch(data){
    console.log("success search");
this.tData=true;
    debugger;
    if(data.status==true){
      this.rows=data.data;

  //  columns = [
  //    { prop: 'Id' },
  //    { name: 'name' },
  //    { name: 'Action' }
  //  ];
 
      
    }else{
      this.rows = [];
      this.toastr.error(data.message)
    }
  }

  //Listing Operation
// rows=[];
temp=[];
columns = [
  { prop: 'Id' },
  { name: 'name' },
  { name: 'Action' }
];
 
DeleteRow(id)
{
  debugger;
 
  let activity:TacActivity =id;
  console.log(activity.activityName);
  this.trainingService.deleteActivity(activity).subscribe(
    data => this.successDelete(data),
    error=>this.errorWhileSearching(error)
)

}
successDelete(data)
{
  this.tData=false;
  let activity:TacActivity ={activityName:this.searchText,activityId:0}
  this.trainingService.listActivity(activity).subscribe(
    data => this.successSearch(data),
    error=>this.errorWhileSearching(error)
)

  this.toastr.success(data.message)
}


  /**
   * To fetch the data from JSON file.
   */
  fetch(cb) {
    const req = new XMLHttpRequest()
    req.open('GET', `assets/data/company.json`)
    req.onload = () => {
      cb(JSON.parse(req.response))
    };
    req.send()
  }

  /**
   * updateFilter method is used to filter the data.
   */
  updateFilter(event) {
    const val = event.target.value

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val
    })

    // update the rows
    this.rows = temp
  }

 

}
