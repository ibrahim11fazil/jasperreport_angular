import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth-service/auth.service';
import { ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {VERSION_UI} from "../../app.constants";

@Component({
   selector: 'ms-loginV2-session',
   templateUrl:'./loginV2-component.html',
   styleUrls: ['./loginV2-component.scss'],
   encapsulation: ViewEncapsulation.None
})
export class LoginV2Component {

   //email    : string = "demo@example.com";
   //password : string = "0123456789";

   email    : string = "user";
   password : string = "password@2018";
   version =VERSION_UI


   constructor( public authService: AuthService,
                public translate : TranslateService ) { }

   // when email and password is correct, user logged in.
   login(value) {
      this.authService.loginUser(value);
   }
}



