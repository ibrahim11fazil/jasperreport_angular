import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TacActivity, ResponseTacActivity } from "../../models/tac-activity";
import { Observable, of } from 'rxjs';

import { CREATE_ACTIVITY, LIST_ACTIVITY, DELETE_ACTIVITY, CREATE_COURSE, SEARCH_COURSE, DELETE_COURSE, GET_ALL_COURSE_CATEGORIES, GET_ALL_COURSE_TARGET, GET_ALL_ACTIVITIES, GET_ALL_COURSES, ENABLE_COURSE, GET_COURSE_BY_ID, GET_LOCATION, GET_PREREQUISITES, LINK_COURSE } from "../../app.constants";

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
  private messageSource = new BehaviorSubject("");
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
  enableCourse(course: TacCourseMaster): Observable<Object> {
    return this.httpClient.post(ENABLE_COURSE, course);
  }
  searchCourse(course: TacCourseMaster): Observable<Object> {
    return this.httpClient.post(SEARCH_COURSE, course);
  }
  getAllCourseCategories(): Observable<Object> {
    return this.httpClient.get(GET_ALL_COURSE_CATEGORIES);
  }
  getAllCourseTargetGroups(): Observable<Object> {
    return this.httpClient.get(GET_ALL_COURSE_TARGET);
  }
  getAllActivityList(): Observable<Object> {
    return this.httpClient.get(GET_ALL_ACTIVITIES);
  }
  getAllCourseList(): Observable<Object> {
    return this.httpClient.get(GET_ALL_COURSES);
  }

  getCourseById(course: TacCourseMaster): Observable<Object> {
    return this.httpClient.post(GET_COURSE_BY_ID, course);
  }
  getAllTacCourseLocation(): Observable<Object> {
    return this.httpClient.get(GET_LOCATION);
  }

  getAllCoursePrerequisites():Observable<Object> {
    return this.httpClient.get(GET_PREREQUISITES);
  }

  linkCourseWithActivity(course: TacCourseMaster): Observable<Object> {
    return this.httpClient.post(LINK_COURSE, course);
}
}
