import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SystemUser } from 'app/models/system-user';
import { Observable } from 'rxjs';
import { SAVE_SYSTEM_USER, GET_ALL_SYSTEM_ROLES } from 'app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class SystemUserService {

  constructor(private httpClient: HttpClient) { }


  saveUser(user: SystemUser): Observable<Object> {
    return this.httpClient.post(SAVE_SYSTEM_USER, user);
  }

  listRoles(): Observable<Object> {
    return this.httpClient.post(GET_ALL_SYSTEM_ROLES, null);
  }

}
