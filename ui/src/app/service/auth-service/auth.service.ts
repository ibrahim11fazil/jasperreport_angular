import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CONTENT_TYPE_FORM_URL_ENCODE, LOGIN_URL} from "../../app.constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	//user 		  : Observable<firebase.User>;
	 userData   : any;
    isLoggedIn = false;

   constructor(//private firebaseAuth : AngularFireAuth,
               private http:HttpClient,
               private router : Router,
               private toastr : ToastrService) { 
   //	this.user = firebaseAuth.authState;
   }

   /*
    *  getLocalStorageUser function is used to get local user profile data.
    */
   getLocalStorageUser(){
      this.userData = JSON.parse(localStorage.getItem("userProfile"));
      if(this.userData) {
         this.isLoggedIn = true;
         return true;
      } else {
         this.isLoggedIn = false;
         return false;
      }    
   }

  	/*
    * signupUserProfile method save email and password into firabse &
    * signupUserProfile method save the user sign in data into local storage. 
    */
   signupUserProfile(value) {
    	// this.firebaseAuth
   	// .auth
      // .createUserWithEmailAndPassword(value.email, value.password)
      // .then(value => {
      //   this.toastr.success('Successfully Signed Up!');
      //   this.setLocalUserProfile(value);
      //   this.router.navigate(['/']);
      // })
      // .catch(err => {
      //    this.toastr.error(err.message);
      // });


   }

   /*
    * loginUser fuction used to login 
    */
   loginUser(value) {
      let options = {
         headers: new HttpHeaders()
             .set('Content-Type', 'application/x-www-form-urlencoded')
             .set('Authorization', 'Basic ' +'VVNFUl9DTElFTlRfQVBQOnBhc3N3b3JkQDIwMTg=')
      };
      let body = new URLSearchParams()
      body.set('username', value.email)
      body.set('password', value.password)
      body.set('grant_type', 'password')
      body.set('', '')
      this.http.post(LOGIN_URL,body.toString(),options)
          .subscribe(
              response => {
               console.log(response); 
               this.setLocalUserProfile(value); 
               this.toastr.success('Successfully Logged In!');
               this.router.navigate(['/']);
            },
            error => {
                  console.log(error); 
                  this.toastr.error(error.message);
            }
       );
   }

   /*
    * resetPassword is used to reset your password
    */
   resetPassword(value) {
      // this.firebaseAuth.auth.sendPasswordResetEmail(value.email)
      //    .then(value => {
      //     	this.toastr.success("A password reset link has been sent to this email.");
      //     	this.router.navigate(['/session/login']);
      //    })
      //    .catch(err => {
      //       this.toastr.error(err.message);
      //    });
   }


   /*
    * resetPasswordV2 is used to reset your password
    */
   resetPasswordV2(value) {
      // this.firebaseAuth.auth.sendPasswordResetEmail(value.email)
      //    .then(value => {
      //        this.toastr.success("A password reset link has been sent to this email.");
      //        this.router.navigate(['/session/loginV2']);
      //    })
      //    .catch(err => {
      //       this.toastr.error(err.message);
      //    });
   }

   /*
    * logOut function is used to sign out  
    */
   logOut() {
        localStorage.removeItem("userProfile");
        this.toastr.success("Successfully logged out!");
        this.router.navigate(['/session/loginV2']);
      // this.firebaseAuth
      // .auth
      // .signOut();
      // localStorage.removeItem("userProfile");
      // this.isLoggedIn = false;
      // this.toastr.success("Successfully logged out!");
      // this.router.navigate(['/session/loginV2']);
   }   

   /*
    * setLocalUserProfile function is used to set local user profile data.
    */
   setLocalUserProfile(value){
   	localStorage.setItem("userProfile", JSON.stringify(value));
      this.getLocalStorageUser();
      this.isLoggedIn = true;
   }
}
