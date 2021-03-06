import { Injectable } from '@angular/core';
import { TacActivity, ResponseTacActivity } from "../../models/tac-activity";
import { Observable, of } from 'rxjs';
import { TacCourseMaster, CourseActivityDatesRequest, SearchCourse, TacCourseMasterSub } from 'app/models/tac-course-master';
import { TacActivation } from 'app/models/tac-activation';
import { TacInstructor, TacInstructorRequest } from '../../models/tac-instructor';
import { CiSystemUsersRequest, CiCourseRequestedUsers } from 'app/models/ci-system-user';
import { SearchUser } from 'app/models/system-user';
import { SearchJobCard, JobCardData, JobCardDataSearch } from 'app/models/job-card-data';
import { TacCourseAttendance } from 'app/models/tac-course-attendance';
import {
  EmployeeCourseRequest,
  UserTaskExecuteRequest,
  CommentSaveModel,
  CommentsForTask,
  UserTaskHistoryExecutionsDetailsRequest,
  HistoryUserRequest,
  UserDelegation
} from 'app/models/workflow';
import { HttpClient } from '@angular/common/http';
import {
  WORK_FLOW_REQUEST,
  GET_MY_TASKS,
  GET_MY_WITH_DELEGATIONS,
  EXECUTE_TASK,
  SAVE_COMMENT,
  GET_COMMENTS,
  PROCESS_HISTORY_BY_EXECUTION_ID,
  PROCESS_HISTORY_BY_PROCESS_ID,
  PROCESS_HISTORY_BY_USER,
  SAVE_USER_DELEGATION, GET_MY_DELEGATION, DELETE_MY_DELEGATION
} from 'app/app.constants';
@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  constructor(private httpClient: HttpClient) { }

  listMyTasks(search:SearchUser): Observable<Object> {
    return this.httpClient.post(GET_MY_TASKS,search);
  }

  listMyTasksWithDelegations(search:SearchUser): Observable<Object> {
    return this.httpClient.post(GET_MY_WITH_DELEGATIONS,search);
  }

  executeTask(request:UserTaskExecuteRequest): Observable<Object> {
    return this.httpClient.post(EXECUTE_TASK,request);
  }

  saveComment(request:CommentSaveModel): Observable<Object> {
    return this.httpClient.post(SAVE_COMMENT,request);
  }

  getComments(request:CommentsForTask): Observable<Object> {
    return this.httpClient.post(GET_COMMENTS,request);
  }

  processHistory(request:UserTaskHistoryExecutionsDetailsRequest): Observable<Object> {
    return this.httpClient.post(PROCESS_HISTORY_BY_EXECUTION_ID,request);
  }

  // 1--> 
  processHistoryByUser(request:HistoryUserRequest): Observable<Object> {
    return this.httpClient.post(PROCESS_HISTORY_BY_USER,request);
  }

   // 2--> 
  processHistoryByProcess(request:HistoryUserRequest): Observable<Object> {
    return this.httpClient.post(PROCESS_HISTORY_BY_PROCESS_ID,request);
  }

  // 3--> 
  processHistoryByExection(request:HistoryUserRequest): Observable<Object> {
    return this.httpClient.post(PROCESS_HISTORY_BY_EXECUTION_ID,request);
  }

  saveDelegation(request:UserDelegation): Observable<Object> {
    return this.httpClient.post(SAVE_USER_DELEGATION,request);
  }

  listUserDelegation(): Observable<Object> {
    return this.httpClient.post(GET_MY_DELEGATION,null);
  }

  deleteUserDelegation(request:UserDelegation): Observable<Object> {
    return this.httpClient.post(DELETE_MY_DELEGATION,request);
  }

}
