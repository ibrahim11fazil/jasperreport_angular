import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AUTOLOGOUT_IN_MIU } from 'app/app.constants';

const MINUTES_UNITL_AUTO_LOGOUT = AUTOLOGOUT_IN_MIU //1 // .2 // in mins
const CHECK_INTERVAL = 15000 // in ms
const STORE_KEY =  'lastAction';
@Injectable({
  providedIn: 'root'
})
export class AutoLogoutServiceService {

  val: any;
  public getLastAction() {
     return parseInt(localStorage.getItem(STORE_KEY));
   }
  public setLastAction(lastAction: number) {
     localStorage.setItem(STORE_KEY, lastAction.toString());
   }
 
   constructor(private router: Router, private authService:AuthService) {
  
     localStorage.setItem(STORE_KEY,Date.now().toString());
     this.check();
     this.initListener();
     this.initInterval();
   }

   ngOnInit(): void {
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.
   }

   ngDoCheck(): void {
     //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
     //Add 'implements DoCheck' to the class. 
   }

   
 
   initListener() {
     document.body.addEventListener('click', () => this.reset());
     document.body.addEventListener('mouseover',()=> this.reset());
     document.body.addEventListener('mouseout',() => this.reset());
     document.body.addEventListener('keydown',() => this.reset());
     document.body.addEventListener('keyup',() => this.reset());
     document.body.addEventListener('keypress',() => this.reset());
      window.addEventListener("storage",() => this.storageEvt());
 
   }
 
   reset() {
 
     //console.log('date got by using events',Date.now());
     this.setLastAction(Date.now());
     //console.log('store key',localStorage.getItem(STORE_KEY));
 
   }
 
   initInterval() {
    //console.log("called initInterval()")
     setInterval(() => {
       this.check();
     }, CHECK_INTERVAL);
   }
 
   check() {
     //console.log("called initInterval()")
     const now = Date.now();
     const timeleft = this.getLastAction() + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
     const diff = timeleft - now;
     //console.log('difference',diff)
     const isTimeout = diff < 0;
 
     if (isTimeout)  {
       localStorage.clear();
       this.authService.logOutExpire()
     }
   }
   storageEvt(){
   //console.log("storage");
   this.val = localStorage.getItem(STORE_KEY);
 }
}
