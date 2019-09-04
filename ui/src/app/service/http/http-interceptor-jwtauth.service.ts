import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpHandler,HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import {AuthService} from "../auth-service/auth.service";
import { tap, catchError } from 'rxjs/operators';
import { of } from 'core-js/library/es6/array';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})

export class HttpInterceptorJwtauthService implements HttpInterceptor {
  
 
   token=''
  constructor(private loginService:AuthService,private toast:ToastrService) {
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
   
   if(request instanceof HttpResponse){
    if(request.status==401 || request.status==403){
      //TODO toast and redirect
      this.toast.error("Session Expired")
    }
   }

   return next.handle(request);
  }

}


// export class HttpResponseInterceptor implements HttpInterceptor {

//   constructor(private toast:ToastrService) {

//   }

//   intercept(req: HttpRequest<any>, next: HttpHandler)
//   { 

//     return next.handle(req).pipe(
//         tap(evt => {
//             if (evt instanceof HttpResponse) {
//               if(evt.status==401 || evt.status==403){
//                    //TODO toast and redirect
//                    this.toast.error("Session Expired")
//               }
//             }
//         }),
//         catchError((err: any) => {
//             if(err instanceof HttpErrorResponse) {
//                    //Error TODO toast and redirect
//                    this.toast.error("Session Expired")
//             }
//             return of(err);
//         }));
//   }
// }