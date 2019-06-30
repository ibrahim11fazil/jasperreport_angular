import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SystemUser, SearchUser, SearchUserByRole } from 'app/models/system-user';
import { Observable } from 'rxjs';
import { SAVE_SYSTEM_USER, GET_ALL_SYSTEM_ROLES, GET_ALL_SYSTEM_USERS, DISABLE_SYSTEM_USER, ENABLE_SYSTEM_USER, GET_SYSTEM_USER, GET_ALL_USERS_BY_ROLE_ID, GET_EMPLOYEE_BY_ID } from 'app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class SystemUserService {

  constructor(private httpClient: HttpClient) { }


  saveUser(user: SystemUser): Observable<Object> {
    return this.httpClient.post(SAVE_SYSTEM_USER, user);
  }

  listUsers(user: SearchUser): Observable<Object> {
    return this.httpClient.post(GET_ALL_SYSTEM_USERS, user);
  }

  listUsersByRoleId(user: SearchUserByRole): Observable<Object> {
    return this.httpClient.post(GET_ALL_USERS_BY_ROLE_ID, user);
  }

  disableUser(user: SystemUser): Observable<Object> {
    return this.httpClient.post(DISABLE_SYSTEM_USER, user);
  }

  enableUser(user: SystemUser): Observable<Object> {
    return this.httpClient.post(ENABLE_SYSTEM_USER, user);
  }

  listRoles(): Observable<Object> {
    return this.httpClient.post(GET_ALL_SYSTEM_ROLES, null);
  }

  getUser(user: SystemUser): Observable<Object> {
    return this.httpClient.post(GET_SYSTEM_USER, user);
  }

  getUserById(jobId: String): Observable<Object> {
    return this.httpClient.post(GET_EMPLOYEE_BY_ID+"/"+`${jobId}`, null);
  }

  

}
