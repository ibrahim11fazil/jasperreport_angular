import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TacActivity,ResponseTacActivity} from "../../models/tac-activity";
import {Observable,of} from 'rxjs';
import {CREATE_ACTIVITY} from "../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private httpClient:HttpClient) { }

  saveActivity(activity:TacActivity):Observable<Object>{
    return this.httpClient.post(CREATE_ACTIVITY,activity);
  }

}

