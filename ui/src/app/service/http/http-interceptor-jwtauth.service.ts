import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpHandler,HttpRequest } from '@angular/common/http';
import {AuthService} from "../auth-service/auth.service";
@Injectable({
  providedIn: 'root'
})

export class HttpInterceptorJwtauthService implements HttpInterceptor {
   token=''
  constructor(private loginService:AuthService) {
    this.token ='Bearer ' +this.loginService.getToken();

  }
  
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    this.token ='Bearer ' +this.loginService.getToken();
    if(this.loginService.getToken()!=null){
    request = request.clone({
      setHeaders:{
      Authorization:this.token
     
    }})
  }
   return next.handle(request);
  }
}