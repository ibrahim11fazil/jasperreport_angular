import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TacActivity, ResponseTacActivity } from "../../models/tac-activity";
import { Observable, of } from 'rxjs';
import { CREATE_ACTIVITY, LIST_ACTIVITY, DELETE_ACTIVITY, CREATE_COURSE, SEARCH_COURSE, DELETE_COURSE } from "../../app.constants";
import { BehaviorSubject } from 'rxjs';
import { TacCourseMaster } from 'app/models/tac-course-master';
@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private httpClient: HttpClient) { }

  saveActivity(activity: TacActivity): Observable<Object> {
    return this.httpClient.post(CREATE_ACTIVITY, activity);
  }

  listActivity(activity: TacActivity): Observable<Object> {
    return this.httpClient.post(LIST_ACTIVITY, activity);
  }

  //Activity Listing event
  private messageSource = new BehaviorSubject('default');
  currentActivitySearchMessage = this.messageSource.asObservable();

  changeActivitySearchMessage(message: string) {
    this.messageSource.next(message)
  }
  deleteActivity(activity: TacActivity): Observable<Object> {
    return this.httpClient.post(DELETE_ACTIVITY, activity);
  }

  saveCourse(course: TacCourseMaster): Observable<Object> {
    return this.httpClient.post(CREATE_COURSE, course);
  }
  deleteCourse(course: TacCourseMaster): Observable<Object> {
    return this.httpClient.post(DELETE_COURSE, course);
  }
  searchCourse(course: TacCourseMaster): Observable<Object> {
    return this.httpClient.post(SEARCH_COURSE, course);
  }
}

