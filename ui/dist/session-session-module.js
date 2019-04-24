(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["session-session-module"],{

/***/ "./src/app/session/forgot-password/forgot-password-component.html":
/*!************************************************************************!*\
  !*** ./src/app/session/forgot-password/forgot-password-component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gene-forgot gene-session pad-y-xl\">\n   <div fxLayout=\"row\" fxLayoutAlign=\"center start\">\n      <div fxLayout=\"column\"  fxFlex.xl=\"450px\" fxFlex.lg=\"450px\" fxFlex.md=\"450px\" fxFlex.sm=\"450px\"  fxFlex.xs=\"100\" class=\"gene-forget-pass\">\n         <mat-card>\n            <div>\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n               <div class=\"login-logo\">\n               <img src=\"assets/img/logo.png\" width=\"180\" height=\"57\">\n               </div>\n            </div>\n            <form #form=\"ngForm\" (ngSubmit)=\"send(form.value)\">\n               <div fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\n                  <mat-form-field class=\"full-wid mrgn-b-sm\">\n                     <input matInput placeholder=\"E-Mail\" type=\"text\" name=\"email\" required [(ngModel)]=\"email\">\n                  </mat-form-field>\n                  <button color=\"primary\" mat-raised-button [disabled]=\"!form.valid\" class=\"primary-bg\">{{'RECOVER PASSWORD'|translate}}</button>\n                  <p style=\"text-align: center;\"><a [routerLink]=\"['/session/login']\">{{'Back to login'|translate}}</a></p>\n               </div>\n            </form>\n            </div>\n         </mat-card>\n      </div>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/session/forgot-password/forgot-password-component.scss":
/*!************************************************************************!*\
  !*** ./src/app/session/forgot-password/forgot-password-component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gene-forget-pass .login-logo img {\n  margin-bottom: 1.5rem; }\n\n.gene-forget-pass button {\n  margin-bottom: 1rem; }\n\n.gene-forget-pass .mat-card {\n  padding-bottom: 2rem;\n  padding-top: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL3Nlc3Npb24vZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC1jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdZLHFCQUFxQixFQUFBOztBQUhqQztFQU9RLG1CQUFtQixFQUFBOztBQVAzQjtFQVVRLG9CQUFvQjtFQUNwQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb24vZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC1jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nZW5lLWZvcmdldC1wYXNze1xuICAgIC5sb2dpbi1sb2dve1xuICAgICAgICBpbWd7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgYnV0dG9ue1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cbiAgICAubWF0LWNhcmR7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/session/forgot-password/forgot-password.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/session/forgot-password/forgot-password.component.ts ***!
  \**********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/auth-service/auth.service */ "./src/app/service/auth-service/auth.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(authService, translate) {
        this.authService = authService;
        this.translate = translate;
    }
    /**
      * send method is used to send a reset password link into your email.
      */
    ForgotPasswordComponent.prototype.send = function (value) {
        this.authService.resetPassword(value);
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-forgot-password',
            template: __webpack_require__(/*! ./forgot-password-component.html */ "./src/app/session/forgot-password/forgot-password-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./forgot-password-component.scss */ "./src/app/session/forgot-password/forgot-password-component.scss")]
        }),
        __metadata("design:paramtypes", [_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/session/forgot-passwordV2/forgot-passwordV2-component.html":
/*!****************************************************************************!*\
  !*** ./src/app/session/forgot-passwordV2/forgot-passwordV2-component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gene-forgotpassV2 pad-y-xl\">\n   <div fxLayout=\"row\" fxLayoutAlign=\"center start\">\n      <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.xs=\"90\" fxFlex.sm=\"80\" fxFlex.md=\"80\" fxFlex.lg=\"70\" fxFlex.xl=\"60\">\n         <mat-toolbar-row fxLayoutAlign=\"space-between\" fxLayout.xs=\"column\" fxLayoutAlign.xs=\"center center\">\n            <div class=\"mrgn-b-md\">\n               <img src=\"assets/img/logo-sign.png\">\n            </div>\n            <span class=\"mrgn-b-md\">\n               <p class=\"text-center text-inverse\"><span  class=\"mrgn-r-sm\">Create Account?</span><button [routerLink]=\"['/session/registerV2']\" mat-raised-button color=\"accent\">Sign Up</button></p>\n            </span>\n         </mat-toolbar-row>\n         <div fxLayout=\"row wrap\" fxLayoutAlign=\"center stretch\" class=\"height-full pad-t-xl pad-b-xl form-wrap-row\">\n            <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.xs=\"100\" fxFlex.sm=\"500px\" fxFlex.md=\"544px\" fxFlex.lg=\"544px\" fxFlex.xl=\"544px\">\n               <mat-card class=\"gene-login-v2 height-full \">\n                  <div>\n                     <div class=\"login-logo text-center\">\n                        <img class=\"img-circle\" src=\"assets/img/user-1.jpg\" alt=\"user\" title=\"user\"/>\n                     </div>\n                     <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mrgn-b-sm text-center\">\n                        <h2>{{'Reset Password'|translate}}</h2>\n                        <p>{{\"You’ll receive reset password instruction to you email.\" |translate}}</p>\n                     </div>\n                     <form #form=\"ngForm\"(ngSubmit)=\"send(form.value)\" fxLayoutAlign=\"center start\">\n                     <div fxLayout=\"column\" fxFlex.xl=\"75\" fxFlex.lg=\"75\" fxFlex.md=\"80\" fxFlex.sm=\"80\" fxFlex.xs=\"100\" fxLayoutAlign=\"start\">\n                        <mat-form-field class=\"full-wid mrgn-b-md\">\n                           <input matInput placeholder=\"Enter Your E-Mail\" type=\"text\" name=\"email\" required [(ngModel)]=\"email\">\n                           <span matSuffix><i class=\"material-icons\">vpn_key</i></span>                              \n                        </mat-form-field>\n                        <div fxLayoutAlign=\"center start\" class=\"mrgn-b-md gene-btn-wrap\">\n                           <button mat-flat-button color=\"green-600\" class=\"gene-btn-lg full-wid\" [disabled]=\"!form.valid\">{{'Reset Password'|translate}}</button>    \n                        </div>\n                     </div>\n                     </form>\n                     <div  fxLayout=\"row wrap\" fxLayoutAlign=\"center start\">\n                        <div fxLayout=\"column\" fxFlex.xl=\"75\" fxFlex.lg=\"75\" fxFlex.md=\"80\" fxFlex.sm=\"80\" fxFlex.xs=\"100\" fxLayoutAlign=\"start\">\n                           <div fxLayoutAlign=\"center start\" class=\"gene-btn-wrap\">\n                              <button mat-flat-button color=\"accent\" class=\"gene-btn-lg full-wid\" (click)=\"router.navigate(['/session/loginV2'])\">{{'Already have an account? Login'|translate}}</button>    \n                           </div>\n                        </div>\n                     </div>\n                  </div>\n               </mat-card>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/session/forgot-passwordV2/forgot-passwordV2-component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/session/forgot-passwordV2/forgot-passwordV2-component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gene-forget-pass .login-logo img {\n  margin-bottom: 1.5rem; }\n\n.gene-forget-pass button {\n  margin-bottom: 1rem; }\n\n.gene-forget-pass .mat-card {\n  padding-bottom: 2rem;\n  padding-top: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL3Nlc3Npb24vZm9yZ290LXBhc3N3b3JkVjIvZm9yZ290LXBhc3N3b3JkVjItY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHWSxxQkFBcUIsRUFBQTs7QUFIakM7RUFPUSxtQkFBbUIsRUFBQTs7QUFQM0I7RUFVUSxvQkFBb0I7RUFDcEIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZXNzaW9uL2ZvcmdvdC1wYXNzd29yZFYyL2ZvcmdvdC1wYXNzd29yZFYyLWNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdlbmUtZm9yZ2V0LXBhc3N7XG4gICAgLmxvZ2luLWxvZ297XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBidXR0b257XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuICAgIC5tYXQtY2FyZHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/session/forgot-passwordV2/forgot-passwordV2.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/session/forgot-passwordV2/forgot-passwordV2.component.ts ***!
  \**************************************************************************/
/*! exports provided: ForgotPasswordV2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordV2Component", function() { return ForgotPasswordV2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth-service/auth.service */ "./src/app/service/auth-service/auth.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPasswordV2Component = /** @class */ (function () {
    function ForgotPasswordV2Component(authService, router, translate) {
        this.authService = authService;
        this.router = router;
        this.translate = translate;
    }
    /**
      * send method is used to send a reset password link into your email.
      */
    ForgotPasswordV2Component.prototype.send = function (value) {
        this.authService.resetPasswordV2(value);
    };
    ForgotPasswordV2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-forgot-password',
            template: __webpack_require__(/*! ./forgot-passwordV2-component.html */ "./src/app/session/forgot-passwordV2/forgot-passwordV2-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./forgot-passwordV2-component.scss */ "./src/app/session/forgot-passwordV2/forgot-passwordV2-component.scss")]
        }),
        __metadata("design:paramtypes", [_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], ForgotPasswordV2Component);
    return ForgotPasswordV2Component;
}());



/***/ }),

/***/ "./src/app/session/lockscreen/lockscreen-component.html":
/*!**************************************************************!*\
  !*** ./src/app/session/lockscreen/lockscreen-component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gene-user-section gene-session gene-lockscreen pad-y-xl\">\n   <div fxLayout=\"row\" fxLayoutAlign=\"center start\">\n      <div fxLayout=\"column\" fxFlex.xl=\"540px\" fxFlex.lg=\"540px\" fxFlex.md=\"540px\" fxFlex.sm=\"540px\"  fxFlex.xs=\"100\">\n         <mat-card>\n            <mat-card-content>\n               <form #form=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n                  <h2 class=\"text-center  mrgn-b-lg warn-text\">Session Expired !</h2>\n                  <div class=\"login-logo text-center\">\n                     <img class=\"img-circle\" src=\"assets/img/user-1.jpg\" alt=\"user\" title=\"user\"/>\n                  </div>\n                     <h4 class=\"text-center\">John Doe</h4>\n                  <div fxLayout=\"column\" fxLayoutAlign=\"space-around\">\n                     <div>\n                     <mat-form-field class=\"full-wid mrgn-b-sm\">\n                        <input matInput placeholder=\"Username\" name=\"username\" required [(ngModel)]=\"username\">\n                     </mat-form-field>\n                     </div>\n                     <div style=\"text-align: center;\"> <button class=\"primary-bg\" mat-raised-button type=\"submit\" [disabled]=\"!form.valid\">Unlock</button></div>\n                  </div>\n               </form>\n            </mat-card-content>\n         </mat-card>\n      </div>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/session/lockscreen/lockscreen-component.scss":
/*!**************************************************************!*\
  !*** ./src/app/session/lockscreen/lockscreen-component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gene-user-section .login-logo img {\n  margin-bottom: 1.5rem; }\n\n.gene-user-section button {\n  margin-bottom: 1rem; }\n\n.gene-user-section .mat-card {\n  padding-bottom: 2rem;\n  padding-top: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL3Nlc3Npb24vbG9ja3NjcmVlbi9sb2Nrc2NyZWVuLWNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR1kscUJBQXFCLEVBQUE7O0FBSGpDO0VBT1EsbUJBQW1CLEVBQUE7O0FBUDNCO0VBVVEsb0JBQW9CO0VBQ3BCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2Vzc2lvbi9sb2Nrc2NyZWVuL2xvY2tzY3JlZW4tY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2VuZS11c2VyLXNlY3Rpb257XG4gICAgLmxvZ2luLWxvZ297XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBidXR0b257XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuICAgIC5tYXQtY2FyZHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/session/lockscreen/lockscreen.component.ts":
/*!************************************************************!*\
  !*** ./src/app/session/lockscreen/lockscreen.component.ts ***!
  \************************************************************/
/*! exports provided: LockScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockScreenComponent", function() { return LockScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LockScreenComponent = /** @class */ (function () {
    function LockScreenComponent(router, translate) {
        this.router = router;
        this.translate = translate;
    }
    // when submit button click, router navigates to a home page.
    LockScreenComponent.prototype.onSubmit = function () {
        this.router.navigate(['/']);
    };
    LockScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-lockscreen',
            template: __webpack_require__(/*! ./lockscreen-component.html */ "./src/app/session/lockscreen/lockscreen-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./lockscreen-component.scss */ "./src/app/session/lockscreen/lockscreen-component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], LockScreenComponent);
    return LockScreenComponent;
}());



/***/ }),

/***/ "./src/app/session/lockscreenV2/lockscreenV2-component.html":
/*!******************************************************************!*\
  !*** ./src/app/session/lockscreenV2/lockscreenV2-component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gene-lockscreenV2 pad-y-xl\">\n   <div fxLayout=\"row\" fxLayoutAlign=\"center start\">\n      <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.xs=\"90\" fxFlex.sm=\"80\" fxFlex.md=\"80\" fxFlex.lg=\"70\" fxFlex.xl=\"60\">\n         <mat-toolbar-row fxLayoutAlign=\"space-between\" fxLayout.xs=\"column\" fxLayoutAlign.xs=\"center center\">\n            <div class=\"mrgn-b-md\">\n               <img src=\"assets/img/logo-sign.png\">\n            </div>\n            <span class=\"mrgn-b-md\">\n               <p class=\"text-center text-inverse\"><button [routerLink]=\"['/session/registerV2']\" mat-raised-button color=\"accent\">{{'Sign Up'|translate}}</button></p>\n            </span>\n         </mat-toolbar-row>\n         <div fxLayout=\"row wrap\" fxLayoutAlign=\"center stretch\" class=\"height-full pad-t-xl pad-b-xl form-wrap-row\">\n            <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.xs=\"100\" fxFlex.sm=\"500px\" fxFlex.md=\"544px\" fxFlex.lg=\"544px\" fxFlex.xl=\"544px\">\n               <mat-card class=\"gene-login-v2 height-full \">\n                  <div>                  \n                     <div class=\"login-logo text-center\">\n                        <img class=\"img-circle\" src=\"assets/img/user-1.jpg\" alt=\"user\" title=\"user\"/>\n                     </div>\n                     <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mrgn-b-sm text-center\">\n                        <h2>{{'Johnshon Deo'|translate}}</h2>                                                    \n                        <p>{{'Welcome back to Reactify platform'|translate}}</p>\n                     </div>\n                     <form #form=\"ngForm\" (ngSubmit)=\"onSubmit()\" fxLayoutAlign=\"center start\">\n                        <div fxLayout=\"column\" fxFlex.xl=\"75\" fxFlex.lg=\"75\" fxFlex.md=\"80\" fxFlex.sm=\"80\" fxFlex.xs=\"100\" fxLayoutAlign=\"start\">\n                           <mat-form-field class=\"full-wid mrgn-b-md\">\n                              <input matInput placeholder=\"Enter Your Password\" type=\"password\" name=\"password\" required [(ngModel)]=\"password\">\n                              <span matSuffix><i class=\"material-icons\">verified_user</i></span>                              \n                           </mat-form-field>\n                           <div fxLayoutAlign=\"center start\" class=\"mrgn-b-md gene-btn-wrap\">\n                              <button mat-flat-button color=\"green-600\" class=\"gene-btn-lg full-wid\" [disabled]=\"!form.valid\">UnLock</button>    \n                           </div>\n                        </div>\n                     </form>\n                  </div>\n               </mat-card>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>\n"

/***/ }),

/***/ "./src/app/session/lockscreenV2/lockscreenV2-component.scss":
/*!******************************************************************!*\
  !*** ./src/app/session/lockscreenV2/lockscreenV2-component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gene-user-section .login-logo img {\n  margin-bottom: 1.5rem; }\n\n.gene-user-section button {\n  margin-bottom: 1rem; }\n\n.gene-user-section .mat-card {\n  padding-bottom: 2rem;\n  padding-top: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL3Nlc3Npb24vbG9ja3NjcmVlblYyL2xvY2tzY3JlZW5WMi1jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdZLHFCQUFxQixFQUFBOztBQUhqQztFQU9RLG1CQUFtQixFQUFBOztBQVAzQjtFQVVRLG9CQUFvQjtFQUNwQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb24vbG9ja3NjcmVlblYyL2xvY2tzY3JlZW5WMi1jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nZW5lLXVzZXItc2VjdGlvbntcbiAgICAubG9naW4tbG9nb3tcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIGJ1dHRvbntcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG4gICAgLm1hdC1jYXJke1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/session/lockscreenV2/lockscreenV2.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/session/lockscreenV2/lockscreenV2.component.ts ***!
  \****************************************************************/
/*! exports provided: LockScreenV2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockScreenV2Component", function() { return LockScreenV2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LockScreenV2Component = /** @class */ (function () {
    function LockScreenV2Component(router, translate) {
        this.router = router;
        this.translate = translate;
    }
    // when submit button click, router navigates to a home page.
    LockScreenV2Component.prototype.onSubmit = function () {
        this.router.navigate(['/']);
    };
    LockScreenV2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-lockscreen',
            template: __webpack_require__(/*! ./lockscreenV2-component.html */ "./src/app/session/lockscreenV2/lockscreenV2-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./lockscreenV2-component.scss */ "./src/app/session/lockscreenV2/lockscreenV2-component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], LockScreenV2Component);
    return LockScreenV2Component;
}());



/***/ }),

/***/ "./src/app/session/login/login-component.html":
/*!****************************************************!*\
  !*** ./src/app/session/login/login-component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gene-login gene-session pad-y-xl\">\n   <div fxLayout=\"row\" fxLayoutAlign=\"center start\">\n      <div fxLayout=\"column\" fxFlex.xl=\"540px\" fxFlex.lg=\"540px\" fxFlex.md=\"540px\" fxFlex.sm=\"540px\" fxFlex.xs=\"100\">\n         <mat-card class=\"gene-login-wrapper\">\n            <div>\n               <div fxLayout=\"column\" fxLayoutAlign=\"center center mrgn-b-md\">\n                  <div class=\"login-logo justify-content\">\n                     <img src=\"assets/img/logo.png\">\n                     <h5>Please enter your user information</h5>\n                  </div>\n               </div>\n               <form #form=\"ngForm\" (ngSubmit)=\"login(form.value)\">\n               <div fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\n                  <mat-form-field class=\"full-wid mrgn-b-md\">\n                     <input matInput placeholder=\"E-Mail\" type=\"text\" name=\"email\" required [(ngModel)]=\"email\">\n                  </mat-form-field>\n                  <mat-form-field class=\"full-wid mrgn-b-md \">\n                     <input matInput placeholder=\"Password\" type=\"password\" name=\"password\" required [(ngModel)]=\"password\">\n                  </mat-form-field>\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                     <div fxLayout=\"column\">\n                        <mat-checkbox class=\"remember-me\">Remember Me</mat-checkbox>\n                     </div>\n                     <span fxFlex></span>\n                     <div><a [routerLink]=\"['/session/forgot-password']\">Forgot Password?</a></div>\n                  </div>\n                  <button class=\"success-bg\" mat-raised-button [disabled]=\"!form.valid\">SIGN IN</button>\n                  <p class=\"text-center\">Don't have an account? <a [routerLink]=\"['/session/register']\" class=\"primary-text\">Click here to create one</a></p>\n               </div>\n               </form>\n            </div>\n         </mat-card>\n      </div>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/session/login/login-component.scss":
/*!****************************************************!*\
  !*** ./src/app/session/login/login-component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body .gene-login-wrapper {\n  padding-top: 2rem;\n  padding-bottom: 2rem; }\n  body .gene-login-wrapper .login-logo {\n    margin-bottom: 2rem; }\n  body .gene-login-wrapper .login-logo img {\n      margin-bottom: 2rem; }\n  body .gene-login-wrapper button {\n    margin: 1rem 0; }\n  .justify-content {\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL3Nlc3Npb24vbG9naW4vbG9naW4tY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUE7RUFGeEI7SUFJUSxtQkFBbUIsRUFBQTtFQUozQjtNQU1ZLG1CQUFtQixFQUFBO0VBTi9CO0lBVVEsY0FBYyxFQUFBO0VBSXRCO0VBQ0ksdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZXNzaW9uL2xvZ2luL2xvZ2luLWNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSAuZ2VuZS1sb2dpbi13cmFwcGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICAubG9naW4tbG9nbyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgIH1cbn1cblxuLmp1c3RpZnktY29udGVudCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/session/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/session/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/auth-service/auth.service */ "./src/app/service/auth-service/auth.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, translate) {
        this.authService = authService;
        this.translate = translate;
        this.email = "demo@example.com";
        this.password = "0123456789";
    }
    // when email and password is correct, user logged in.
    LoginComponent.prototype.login = function (value) {
        this.authService.loginUser(value);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-login-session',
            template: __webpack_require__(/*! ./login-component.html */ "./src/app/session/login/login-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./login-component.scss */ "./src/app/session/login/login-component.scss")]
        }),
        __metadata("design:paramtypes", [_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/session/loginV2/loginV2-component.html":
/*!********************************************************!*\
  !*** ./src/app/session/loginV2/loginV2-component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gene-login login-v2 pad-y-xl\">\n   <div fxLayout=\"row\" fxLayoutAlign=\"center start\">\n      <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.xs=\"90\" fxFlex.sm=\"80\" fxFlex.md=\"95\" fxFlex.lg=\"70\" fxFlex.xl=\"60\">\n         <mat-toolbar-row fxLayoutAlign=\"space-between\" fxLayout.xs=\"column\" fxLayoutAlign.xs=\"center center\" class=\"mrgn-x-md\">\n            <div class=\"mrgn-b-md\">\n               <img src=\"assets/img/logo-sign.png\">\n            </div>\n            <span class=\"mrgn-b-md\">\n               <p class=\"text-center text-inverse\"><span  class=\"mrgn-r-sm\">Not Having Account?</span><button [routerLink]=\"['/session/registerV2']\" mat-raised-button color=\"accent\">Sign Up</button></p>\n            </span>\n         </mat-toolbar-row>\n         <div fxLayout=\"row wrap\" fxLayoutAlign=\"center stretch\" class=\"height-full pad-t-xl pad-b-xl form-wrap-row set-resp-space\" fxLayoutGap.gt-md=\"15px\">\n            <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"60\" fxFlex.lg=\"60\" fxFlex.xl=\"60\">\n               <mat-card class=\"gene-login-v2 card-full-height card-full-width\">\n                  <div>\n                     <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mrgn-b-lg text-center\">\n                        <h2>Get Started With Gene</h2>\n                        <p>The most powerful angular app</p>\n                     </div>\n                     <form #form=\"ngForm\" (ngSubmit)=\"login(form.value)\" fxLayoutAlign=\"center start\">\n                     <div fxLayout=\"column\" fxFlex.xs=\"100\" fxFlex.sm=\"80\" fxFlex.md=\"80\" fxFlex.lg=\"70\" fxFlex.xl=\"70\" fxLayoutAlign=\"start\">\n                        <mat-form-field class=\"full-wid mrgn-b-md\">\n                           <input class=\"mrgn-t-none\" matInput placeholder=\"E-Mail\" type=\"text\" name=\"email\" required [(ngModel)]=\"email\">\n                           <span matSuffix><i class=\"material-icons\">verified_user</i></span>                              \n                        </mat-form-field>\n                        <mat-form-field class=\"full-wid mrgn-b-md\">\n                           <input class=\"mrgn-t-none\" matInput placeholder=\"Password\" type=\"password\" name=\"password\" required [(ngModel)]=\"password\">\n                           <span matSuffix><i class=\"material-icons\">vpn_key</i></span>\n                        </mat-form-field>\n                        <div class=\"mrgn-b-md\"><a [routerLink]=\"['/session/forgot-passwordV2']\">Forgot Password?</a></div>\n                        <div fxLayoutAlign=\"center start\" class=\" mrgn-b-lg\">\n                           <button mat-flat-button class=\"success-bg gene-btn-lg\" [disabled]=\"!form.valid\">LOGIN</button>    \n                        </div>\n                        <p class=\"text-center mrgn-b-sm pad-t-xl\">Or Signup Using</p>\n                        <div class=\"social-list\" fxLayoutAlign=\"center start\" fxLayoutGap=\"15px\">\n                           <button mat-fab color=\"primary\" matTooltip=\"Facebook\" aria-label=\"Button that displays a tooltip for social media link\">f</button>\n                           <button mat-fab color=\"warn\" matTooltip=\"Google\" aria-label=\"Button that displays a tooltip for social media link\">G</button>\n                           <button mat-fab color=\"accent\" matTooltip=\"Twitter\" aria-label=\"Button that displays a tooltip for social media link\">t</button>\n                           <!-- <button mat-fab color=\"warn\" matTooltip=\"Gmail\" aria-label=\"Button that displays a tooltip for social media link\">g</button>                            -->\n                        </div>\n                     </div>\n                     </form>\n                  </div>\n               </mat-card>\n            </div>\n            <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"38\" fxFlex.lg=\"38\" fxFlex.xl=\"38\" fxHide.lt-md>\n               <div class=\"height-full full-wid\">\n                  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"height-full full-wid\">\n                     <ngx-slick-carousel [config]=\"slideConfig\"  class=\"carousel full-wid height-full\" #slickModal=\"slick-carousel\">\n                     <div ngxSlickItem *ngFor=\"let slide of sessionSlider\" class=\"height-full full-wid\">\n                        <div class=\"session-slider overlay-wrap height-full full-wid\">\n                           <div class=\"slider-bg-img full-wid\" [ngStyle] = \"{'background-image' : 'url(' + slide.image + ')'}\"></div>\n                           <div class=\"overlay-content\" fxLayoutAlign=\"start end\">\n                              <div class=\"content-wrap\">\n                                 <div class=\"sec-title\">\n                                    <h5 class=\"text-inverse\">{{slide.name}}</h5>\n                                    <span class=\"text-inverse\">{{slide.designation}}</span>\n                                 </div>\n                                 <div class=\"sec-content\">\n                                    <p class=\"text-inverse\">{{slide.content}}</p>\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n                     </div>\n                     </ngx-slick-carousel>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/session/loginV2/loginV2-component.scss":
/*!********************************************************!*\
  !*** ./src/app/session/loginV2/loginV2-component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 599px) {\n  .set-resp-space {\n    padding-top: 0.8rem !important;\n    padding-bottom: 0.8rem !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL3Nlc3Npb24vbG9naW5WMi9sb2dpblYyLWNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0c7SUFDRyw4QkFBOEI7SUFDOUIsaUNBQWlDLEVBQUEsRUFDbkMiLCJmaWxlIjoic3JjL2FwcC9zZXNzaW9uL2xvZ2luVjIvbG9naW5WMi1jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYShtYXgtd2lkdGg6NTk5cHgpe1xuICAgLnNldC1yZXNwLXNwYWNle1xuICAgICAgcGFkZGluZy10b3A6IDAuOHJlbSAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1ib3R0b206IDAuOHJlbSAhaW1wb3J0YW50O1xuICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/session/loginV2/loginV2.component.ts":
/*!******************************************************!*\
  !*** ./src/app/session/loginV2/loginV2.component.ts ***!
  \******************************************************/
/*! exports provided: LoginV2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginV2Component", function() { return LoginV2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/auth-service/auth.service */ "./src/app/service/auth-service/auth.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginV2Component = /** @class */ (function () {
    function LoginV2Component(authService, translate) {
        this.authService = authService;
        this.translate = translate;
        this.email = "demo@example.com";
        this.password = "0123456789";
        this.slideConfig = { "slidesToShow": 1, "slidesToScroll": 1, "autoplay": true, "autoplaySpeed": 1000, "dots": false, "arrows": false };
        this.sessionSlider = [
            {
                image: "assets/img/login-slider1.jpg",
                name: "Francisco Abbott",
                designation: "CEO-Gene",
                content: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
            },
            {
                image: "assets/img/login-slider2.jpg",
                name: "Samona Brown",
                designation: "Designer",
                content: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
            },
            {
                image: "assets/img/login-slider3.jpg",
                name: "Anna Smith",
                designation: "Managing Director",
                content: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
            }
        ];
    }
    // when email and password is correct, user logged in.
    LoginV2Component.prototype.login = function (value) {
        this.authService.loginUser(value);
    };
    LoginV2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-loginV2-session',
            template: __webpack_require__(/*! ./loginV2-component.html */ "./src/app/session/loginV2/loginV2-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./loginV2-component.scss */ "./src/app/session/loginV2/loginV2-component.scss")]
        }),
        __metadata("design:paramtypes", [_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], LoginV2Component);
    return LoginV2Component;
}());



/***/ }),

/***/ "./src/app/session/register/register-component.html":
/*!**********************************************************!*\
  !*** ./src/app/session/register/register-component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gene-registration-form gene-session pad-y-xl\">\n   <div fxLayout=\"row\" fxLayoutAlign=\"center center\" >\n      <div fxLayout=\"column\" fxFlex.xl=\"600px\" fxFlex.lg=\"600px\" fxFlex.md=\"600px\" fxFlex.sm=\"600px\"  fxFlex.xs=\"100\">\n         <mat-card>\n            <div>\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n               <div class=\"login-logo text-center\">\n               <img src=\"assets/img/logo.png\">\n               <h5 class=\"\">{{'Please Enter your details for registrations'|translate}}</h5>\n               </div>\n            </div>\n            <form #form=\"ngForm\" (ngSubmit)=\"register(form.value)\">\n               <div fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\n                  <mat-form-field class=\"full-wid mrgn-b-sm\">\n                  <input matInput placeholder=\"Name\" type=\"text\" name=\"name\" required [(ngModel)]=\"name\">\n                  </mat-form-field>\n                  <mat-form-field class=\"full-wid mrgn-b-sm\">\n                     <input matInput placeholder=\"E-Mail\" type=\"text\" name=\"email\" required [(ngModel)]=\"email\">\n                  </mat-form-field>\n                  <mat-form-field class=\"full-wid mrgn-b-sm\">\n                     <input matInput placeholder=\"Password\" type=\"password\" name=\"password\" required [(ngModel)]=\"password\">\n                  </mat-form-field>\n                  <mat-form-field class=\"full-wid mrgn-b-sm\">\n                     <input matInput placeholder=\"Password (Confirm)\" type=\"password\" name=\"password-confirm\" required [(ngModel)]=\"passwordConfirm\">\n                  </mat-form-field>\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start\" class=\"mrgn-b-md\">\n                  <mat-checkbox>I accept the <a href=\"#\" class=\"primary-text\">{{'terms and conditions.'|translate}}</a></mat-checkbox>\n                  </div>\n                  <button mat-raised-button [disabled]=\"!form.valid\" class=\"primary-bg mrgn-b-md\">{{'CREATE ACCOUNT'|translate}}</button>\n                  <p>{{'Already have an account?'|translate}} <a [routerLink]=\"['/session/login']\" class=\"primary-text\">{{'Sign in here'|translate}}</a></p>\n               </div>\n            </form>\n            </div>\n         </mat-card>\n      </div>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/session/register/register-component.scss":
/*!**********************************************************!*\
  !*** ./src/app/session/register/register-component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gene-registration-form .login-logo img {\n  margin-bottom: 1.5rem; }\n\n.gene-registration-form button {\n  margin-bottom: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL3Nlc3Npb24vcmVnaXN0ZXIvcmVnaXN0ZXItY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHWSxxQkFBcUIsRUFBQTs7QUFIakM7RUFPUSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb24vcmVnaXN0ZXIvcmVnaXN0ZXItY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2VuZS1yZWdpc3RyYXRpb24tZm9ybXtcbiAgICAubG9naW4tbG9nb3tcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIGJ1dHRvbntcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/session/register/register.component.ts":
/*!********************************************************!*\
  !*** ./src/app/session/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/auth-service/auth.service */ "./src/app/service/auth-service/auth.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, translate) {
        this.authService = authService;
        this.translate = translate;
    }
    //register method is used to sign up on the template.
    RegisterComponent.prototype.register = function (value) {
        this.authService.signupUserProfile(value);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-register-session',
            template: __webpack_require__(/*! ./register-component.html */ "./src/app/session/register/register-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./register-component.scss */ "./src/app/session/register/register-component.scss")]
        }),
        __metadata("design:paramtypes", [_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/session/registerV2/registerV2-component.html":
/*!**************************************************************!*\
  !*** ./src/app/session/registerV2/registerV2-component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gene-registerV2 pad-y-xl\">\n   <div fxLayout=\"row\" fxLayoutAlign=\"center start\">\n      <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.xs=\"90\" fxFlex.sm=\"80\" fxFlex.md=\"95\" fxFlex.lg=\"70\" fxFlex.xl=\"60\">\n         <mat-toolbar-row fxLayoutAlign=\"space-between\" fxLayout.xs=\"column\" fxLayoutAlign.xs=\"center center\">\n            <div class=\"mrgn-b-md\">\n               <img src=\"assets/img/logo-sign.png\">\n            </div>\n            <span class=\"mrgn-b-md\">\n               <p class=\"text-center text-inverse\"><span  class=\"mrgn-r-sm\">{{'Already have an account?'|translate}}</span><button [routerLink]=\"['/session/loginV2']\" mat-raised-button color=\"accent\">{{'Login'|translate}}</button></p>\n            </span>\n         </mat-toolbar-row>\n         <div fxLayout=\"row wrap\" fxLayoutAlign=\"center stretch\" class=\"height-full pad-t-xl pad-b-xl form-wrap-row set-resp-space\" fxLayoutGap.gt-md=\"15px\">\n            <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"60\" fxFlex.lg=\"60\" fxFlex.xl=\"60\">\n               <mat-card class=\"gene-registerV2-wrap  card-full-height card-full-width\">\n                  <div>\n                     <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mrgn-b-md text-center\">\n                        <h2>{{'Get Started With Gene'|translate}}</h2>                                                    \n                        <p>{{'The most powerful angular app'|translate}}</p>\n                     </div>\n                     <form #form=\"ngForm\" (ngSubmit)=\"register(form.value)\" fxLayoutAlign=\"center start\">\n                        <div fxLayout=\"column\" fxFlex.xs=\"100\" fxFlex.sm=\"80\" fxFlex.md=\"80\" fxFlex.lg=\"70\" fxFlex.xl=\"70\" fxLayoutAlign=\"start\">\n                           <mat-form-field class=\"full-wid mrgn-b-sm\">\n                              <input matInput placeholder=\"Name\" type=\"text\" name=\"name\" required [(ngModel)]=\"name\">\n                              <span matSuffix><i class=\"material-icons\">account_circle</i></span>\n                           </mat-form-field>\n                           <mat-form-field class=\"full-wid mrgn-b-sm\">\n                              <input matInput placeholder=\"E-Mail\" type=\"text\" name=\"email\" required [(ngModel)]=\"email\">\n                              <span matSuffix><i class=\"material-icons\">verified_user</i></span>                                 \n                           </mat-form-field>\n                           <mat-form-field class=\"full-wid mrgn-b-sm\">\n                              <input matInput placeholder=\"Password\" type=\"password\" name=\"password\" required [(ngModel)]=\"password\">\n                              <span matSuffix><i class=\"material-icons\">vpn_key</i></span>\n                           </mat-form-field>\n                           <div fxLayoutAlign=\"center start\" class=\" mrgn-b-md\">\n                              <button mat-flat-button [disabled]=\"!form.valid\"  class=\"success-bg gene-btn-lg\">{{'GET STARTED'|translate}}</button>\n                              <!-- <button [disabled]=\"!form.valid\">LOGIN</button>     -->\n                           </div>\n                           <p class=\"text-center mrgn-b-sm\">{{'Or Signup Using'|translate}}</p>\n                           <div class=\"social-list mrgn-b-sm\" fxLayoutAlign=\"center start\" fxLayoutGap=\"15px\">        \n                              <button mat-fab color=\"primary\" matTooltip=\"Facebook\" aria-label=\"Button that displays a tooltip for social media link\">f</button>\n                              <button mat-fab color=\"warn\" matTooltip=\"Google\" aria-label=\"Button that displays a tooltip for social media link\">G</button>\n                              <button mat-fab color=\"accent\" matTooltip=\"Twitter\" aria-label=\"Button that displays a tooltip for social media link\">t</button>\n                              <!-- <button mat-fab color=\"warn\" matTooltip=\"Gmail\" aria-label=\"Button that displays a tooltip for social media link\">g</button>                            -->\n                           </div>\n                           <p class=\"text-center mrgn-b-xs\">{{'By signing up you agree to Gene’s'|translate}}</p>\n                           <span class=\"text-center policy-links accent-text\"><a href=\"javascript:void(0)\">Terms Of Service</a>&nbsp; and &nbsp;<a href=\"javascript:void(0)\">Privacy Policy</a></span>\n                        </div>\n                     </form>\n                  </div>\n               </mat-card>\n            </div>\n            <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"38\" fxFlex.lg=\"38\" fxFlex.xl=\"38\" fxHide.lt-md>\n               <div class=\"height-full full-wid\">\n                  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"height-full full-wid\">\n                     <ngx-slick-carousel [config]=\"slideConfig\"  class=\"carousel height-full full-wid\" #slickModal=\"slick-carousel\">\n                        <div ngxSlickItem *ngFor=\"let slide of sessionSlider\">\n                           <div class=\"session-slider overlay-wrap height-full full-wid\">\n                              <div class=\"slider-bg-img full-wid\" [ngStyle] = \"{'background-image' : 'url(' + slide.image + ')'}\"></div>\n                              <div class=\"overlay-content\" fxLayoutAlign=\"start end\">\n                                 <div class=\"content-wrap\">\n                                    <div class=\"sec-title\">\n                                       <h5 class=\"text-inverse\">{{slide.name}}</h5>\n                                       <span class=\"text-inverse\">{{slide.designation}}</span>\n                                    </div>\n                                    <div class=\"sec-content\">\n                                       <p class=\"text-inverse\">{{slide.content}}</p>\n                                    </div>\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n                     </ngx-slick-carousel>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/session/registerV2/registerV2-component.scss":
/*!**************************************************************!*\
  !*** ./src/app/session/registerV2/registerV2-component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 599px) {\n  .set-resp-space {\n    padding-top: 0.8rem !important;\n    padding-bottom: 0.8rem !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL3Nlc3Npb24vcmVnaXN0ZXJWMi9yZWdpc3RlclYyLWNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0c7SUFDRyw4QkFBOEI7SUFDOUIsaUNBQWlDLEVBQUEsRUFDbkMiLCJmaWxlIjoic3JjL2FwcC9zZXNzaW9uL3JlZ2lzdGVyVjIvcmVnaXN0ZXJWMi1jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYShtYXgtd2lkdGg6NTk5cHgpe1xuICAgLnNldC1yZXNwLXNwYWNle1xuICAgICAgcGFkZGluZy10b3A6IDAuOHJlbSAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1ib3R0b206IDAuOHJlbSAhaW1wb3J0YW50O1xuICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/session/registerV2/registerV2.component.ts":
/*!************************************************************!*\
  !*** ./src/app/session/registerV2/registerV2.component.ts ***!
  \************************************************************/
/*! exports provided: RegisterV2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterV2Component", function() { return RegisterV2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/auth-service/auth.service */ "./src/app/service/auth-service/auth.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterV2Component = /** @class */ (function () {
    function RegisterV2Component(authService, translate) {
        this.authService = authService;
        this.translate = translate;
        this.slideConfig = { "slidesToShow": 1, "slidesToScroll": 1, "autoplay": true, "autoplaySpeed": 1000, "dots": false, "arrows": false };
        this.sessionSlider = [
            {
                image: "assets/img/login-slider1.jpg",
                name: "Francisco Abbott",
                designation: "CEO-Gene",
                content: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
            },
            {
                image: "assets/img/login-slider2.jpg",
                name: "Samona Brown",
                designation: "Designer",
                content: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
            },
            {
                image: "assets/img/login-slider3.jpg",
                name: "Anna Smith",
                designation: "Managing Director",
                content: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
            }
        ];
    }
    //register method is used to sign up on the template.
    RegisterV2Component.prototype.register = function (value) {
        this.authService.signupUserProfile(value);
    };
    RegisterV2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-register-session',
            template: __webpack_require__(/*! ./registerV2-component.html */ "./src/app/session/registerV2/registerV2-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./registerV2-component.scss */ "./src/app/session/registerV2/registerV2-component.scss")]
        }),
        __metadata("design:paramtypes", [_service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], RegisterV2Component);
    return RegisterV2Component;
}());



/***/ }),

/***/ "./src/app/session/session.module.ts":
/*!*******************************************!*\
  !*** ./src/app/session/session.module.ts ***!
  \*******************************************/
/*! exports provided: SessionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionModule", function() { return SessionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_ecommerce_ecommerce_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/ecommerce/ecommerce.service */ "./src/app/service/ecommerce/ecommerce.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/session/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/session/register/register.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/session/forgot-password/forgot-password.component.ts");
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ "./src/app/session/lockscreen/lockscreen.component.ts");
/* harmony import */ var _lockscreenV2_lockscreenV2_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lockscreenV2/lockscreenV2.component */ "./src/app/session/lockscreenV2/lockscreenV2.component.ts");
/* harmony import */ var _forgot_passwordV2_forgot_passwordV2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forgot-passwordV2/forgot-passwordV2.component */ "./src/app/session/forgot-passwordV2/forgot-passwordV2.component.ts");
/* harmony import */ var _registerV2_registerV2_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./registerV2/registerV2.component */ "./src/app/session/registerV2/registerV2.component.ts");
/* harmony import */ var _loginV2_loginV2_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./loginV2/loginV2.component */ "./src/app/session/loginV2/loginV2.component.ts");
/* harmony import */ var _session_routing__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./session.routing */ "./src/app/session/session.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














;





var SessionModule = /** @class */ (function () {
    function SessionModule() {
    }
    SessionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__["ForgotPasswordComponent"],
                _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_13__["LockScreenComponent"],
                _loginV2_loginV2_component__WEBPACK_IMPORTED_MODULE_17__["LoginV2Component"],
                _registerV2_registerV2_component__WEBPACK_IMPORTED_MODULE_16__["RegisterV2Component"],
                _lockscreenV2_lockscreenV2_component__WEBPACK_IMPORTED_MODULE_14__["LockScreenV2Component"],
                _forgot_passwordV2_forgot_passwordV2_component__WEBPACK_IMPORTED_MODULE_15__["ForgotPasswordV2Component"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_session_routing__WEBPACK_IMPORTED_MODULE_18__["SessionRoutes"]),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__["SlickCarouselModule"]
            ],
            providers: [
                _service_ecommerce_ecommerce_service__WEBPACK_IMPORTED_MODULE_4__["EcommerceService"]
            ]
        })
    ], SessionModule);
    return SessionModule;
}());



/***/ }),

/***/ "./src/app/session/session.routing.ts":
/*!********************************************!*\
  !*** ./src/app/session/session.routing.ts ***!
  \********************************************/
/*! exports provided: SessionRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionRoutes", function() { return SessionRoutes; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/session/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ "./src/app/session/register/register.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/session/forgot-password/forgot-password.component.ts");
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ "./src/app/session/lockscreen/lockscreen.component.ts");
/* harmony import */ var _lockscreenV2_lockscreenV2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lockscreenV2/lockscreenV2.component */ "./src/app/session/lockscreenV2/lockscreenV2.component.ts");
/* harmony import */ var _forgot_passwordV2_forgot_passwordV2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-passwordV2/forgot-passwordV2.component */ "./src/app/session/forgot-passwordV2/forgot-passwordV2.component.ts");
/* harmony import */ var _registerV2_registerV2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registerV2/registerV2.component */ "./src/app/session/registerV2/registerV2.component.ts");
/* harmony import */ var _loginV2_loginV2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loginV2/loginV2.component */ "./src/app/session/loginV2/loginV2.component.ts");








var SessionRoutes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
            },
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]
            },
            {
                path: 'forgot-password',
                component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordComponent"]
            },
            {
                path: 'lockscreen',
                component: _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_3__["LockScreenComponent"]
            },
            {
                path: 'loginV2',
                component: _loginV2_loginV2_component__WEBPACK_IMPORTED_MODULE_7__["LoginV2Component"]
            },
            {
                path: 'registerV2',
                component: _registerV2_registerV2_component__WEBPACK_IMPORTED_MODULE_6__["RegisterV2Component"]
            },
            {
                path: 'forgot-passwordV2',
                component: _forgot_passwordV2_forgot_passwordV2_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordV2Component"]
            },
            {
                path: 'lockscreenV2',
                component: _lockscreenV2_lockscreenV2_component__WEBPACK_IMPORTED_MODULE_4__["LockScreenV2Component"]
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=session-session-module.js.map