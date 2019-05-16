import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TacActivity,ResponseTacActivity} from "../../models/tac-activity";
import {Observable,of} from 'rxjs';
import {CREATE_ACTIVITY, LIST_ACTIVITY} from "../../app.constants";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private httpClient:HttpClient) { }

  saveActivity(activity:TacActivity):Observable<Object>{
    return this.httpClient.post(CREATE_ACTIVITY,activity);
  }

  listActivity(activity:TacActivity):Observable<Object>{
    return this.httpClient.post(LIST_ACTIVITY,activity);
  }

  //Activity Listing event
  private messageSource = new BehaviorSubject('default');
  currentActivitySearchMessage = this.messageSource.asObservable();

  changeActivitySearchMessage(message: string) {
    this.messageSource.next(message)
  }


}

