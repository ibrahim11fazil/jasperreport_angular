import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TacActivity, ResponseTacActivity } from "../../models/tac-activity";
import { Observable, of } from 'rxjs';
import { CREATE_ACTIVITY, LIST_ACTIVITY, DELETE_ACTIVITY, CREATE_COURSE, SEARCH_COURSE, DELETE_COURSE, GET_ALL_COURSE_CATEGORIES, GET_ALL_COURSE_TARGET, GET_ALL_ACTIVITIES, GET_ALL_COURSES, ENABLE_COURSE, GET_COURSE_BY_ID, GET_LOCATION, GET_PREREQUISITES, LINK_COURSE, SAVE_INSTRUCTOR, GET_TRAINING_ROOM, UPLOAD_FILE, GET_INSTRUCTORS, GET_MAIN_COURSES, GET_CIS_USERS, GET_ALL_SUBJECTS, GET_ALL_QUALIFICATIONS, GET_INSTRUCTORS_BY_NAME, GET_INSTRUCTOR_BY_ID, SAVE_ACTIVATION, GET_ALL_DATES_FOR_COURSES_BY_ACTIVITY_ID, DOWNLOAD_FILE } from "../../app.constants";


import { BehaviorSubject } from 'rxjs';
import { TacCourseMaster, CourseActivityDatesRequest } from 'app/models/tac-course-master';

import { TacActivation } from 'app/models/tac-activation';

import { TacInstructor, TacInstructorRequest } from '../../models/tac-instructor';

import { CiSystemUsersRequest } from 'app/models/ci-system-user';
import { SearchUser } from 'app/models/system-user';
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
    //debugger;
    return this.httpClient.get(GET_LOCATION);
  }

  getAllCoursePrerequisites(): Observable<Object> {
    return this.httpClient.get(GET_PREREQUISITES);
  }

  linkCourseWithActivity(course: TacCourseMaster): Observable<Object> {
    return this.httpClient.post(LINK_COURSE, course);

  }

// getAllInstructor():Observable<Object> {
//   return this.httpClient.get(GET_INSTRUCTORS);
// }
// getAllMainCourses():Observable<Object> {
//   return this.httpClient.get(GET_MAIN_COURSES);
// }
saveCourseActivation(activation:TacActivation): Observable<Object> {
  return this.httpClient.post(SAVE_ACTIVATION,activation);
}
  getCourseRoom(location: Location): Observable<Object> {
    return this.httpClient.post(GET_TRAINING_ROOM, location);
  }

  saveInstructor(instructor: TacInstructor): Observable<Object> {
    return this.httpClient.post(SAVE_INSTRUCTOR, instructor);
  }

  getAllInstructor(): Observable<Object> {
    return this.httpClient.get(GET_INSTRUCTORS);
  }
  getAllMainCourses(): Observable<Object> {
    return this.httpClient.get(GET_MAIN_COURSES);
  }

  // getFile(fileName): Observable<any> {
  //   var request = this.httpClient.get(`${fileName}`, { responseType: 'arraybuffer' });
  //   return request;
  // }
  getFile(fileName): Observable<any> {
    var request = this.httpClient.get( DOWNLOAD_FILE+"/"+`${fileName}`, { responseType: 'arraybuffer' });
    return request;
  }

  putFile(formData): Observable<any> {
    var request = this.httpClient.post(UPLOAD_FILE, formData, { reportProgress: true, observe: 'events' })
    return request;
  }

  listUsersofCis(user: CiSystemUsersRequest): Observable<Object> {
    return this.httpClient.post(GET_CIS_USERS, user);
  }

  getAllSubjects(): Observable<Object> {
    return this.httpClient.get(GET_ALL_SUBJECTS)
  }

  getAllQualificaitons(): Observable<Object> {
    return this.httpClient.get(GET_ALL_QUALIFICATIONS);
  }

  getAllInstructorByName(instructor:SearchUser): Observable<Object> {
    return this.httpClient.post(GET_INSTRUCTORS_BY_NAME,instructor);
  }

  getInstructorById(instructor:TacInstructorRequest): Observable<Object> {
    return this.httpClient.post(GET_INSTRUCTOR_BY_ID,instructor);
  }

  getAllDatesForCourseAndActivity(course:CourseActivityDatesRequest): Observable<Object> {
    return this.httpClient.post(GET_ALL_DATES_FOR_COURSES_BY_ACTIVITY_ID,course);
  }


}
