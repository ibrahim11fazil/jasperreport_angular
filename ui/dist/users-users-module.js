(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./src/app/users/user-list/userlist-component.html":
/*!*********************************************************!*\
  !*** ./src/app/users/user-list/userlist-component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"start\" class=\"user-list-wrapper\">\n   <div fxFlex.gt-md=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" *ngFor=\"let user of userGridList\">\n      <mat-card>\n         <div class=\"user-list-wrap\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mrgn-b-md\">\n               <div fxLayout=\"column\">\n                  <div class=\"user-thumb\">\n                     <img class=\"img-responsive img-circle\" src=\"{{user.image}}\" width=\"107\" height=\"107\" alt=\"user list image\"> \n                  </div>\n               </div>\n               <div class=\"pad-wrap\">\n                  <span class=\"user-name\">{{user.name}}</span>\n               </div> \n               <span fxFlex></span>\n            </div>\n            <div class=\"user-content\">\n               <span class=\"gene-block\"><mat-icon>location_on</mat-icon>{{user.city}}, {{user.country}}</span>\n               <span class=\"gene-block mrgn-b-md\"><mat-icon>play_for_work</mat-icon>{{user.post}}</span> \n               <a class=\"primary-bg gene-btn-sm\">Message</a> \n               <a class=\"primary-bg gene-btn-sm\">Follow</a>\n            </div> \n         </div>\n      </mat-card>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/users/user-list/userlist-component.scss":
/*!*********************************************************!*\
  !*** ./src/app/users/user-list/userlist-component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-list-wrap .mat-icon {\n  vertical-align: top;\n  margin-right: 0.5rem; }\n\n.user-thumb {\n  width: 70px; }\n\n.user-name {\n  font-size: 1.125rem; }\n\n.gene-btn-sm {\n  border-radius: 3px;\n  padding: 3px 15px; }\n\n.user-list-wrapper .mat-card {\n  border-radius: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL3VzZXJzL3VzZXItbGlzdC91c2VybGlzdC1jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQjtFQUNuQixvQkFBb0IsRUFBQTs7QUFFeEI7RUFDSSxXQUFXLEVBQUE7O0FBRWY7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBRW5CO0VBRVEsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91c2Vycy91c2VyLWxpc3QvdXNlcmxpc3QtY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1saXN0LXdyYXAgLm1hdC1pY29uIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuLnVzZXItdGh1bWJ7XG4gICAgd2lkdGg6IDcwcHg7XG59XG4udXNlci1uYW1le1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG59XG4uZ2VuZS1idG4tc20ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDNweCAxNXB4O1xufVxuLnVzZXItbGlzdC13cmFwcGVye1xuICAgIC5tYXQtY2FyZHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/users/user-list/userlist.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/users/user-list/userlist.component.ts ***!
  \*******************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
/* harmony import */ var _core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/route-animation/route.animation */ "./src/app/core/route-animation/route.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListComponent = /** @class */ (function () {
    function UserListComponent(pageTitleService) {
        this.pageTitleService = pageTitleService;
        this.userGridList = [
            {
                name: 'Adam',
                city: 'California',
                country: 'USA',
                post: 'Senior Developer, Company Inc.',
                image: 'assets/img/user-1.jpg'
            },
            {
                name: 'Thomas',
                city: 'Punjab',
                country: 'India',
                post: 'Software Engineer, Company Inc.',
                image: 'assets/img/user-2.jpg'
            },
            {
                name: 'Gilcharist',
                city: 'California',
                country: 'USA',
                post: 'Senior Developer, Company Inc.',
                image: 'assets/img/user-3.jpg'
            },
            {
                name: 'John',
                city: 'Punjab',
                country: 'India',
                post: 'Software Engineer, Company Inc.',
                image: 'assets/img/user-4.jpg'
            },
            {
                name: 'Smith',
                city: 'California',
                country: 'USA',
                post: 'Senior Developer, Company Inc.',
                image: 'assets/img/user-1.jpg'
            },
            {
                name: 'Peter',
                city: 'Punjab',
                country: 'India',
                post: 'Software Engineer, Company Inc.',
                image: 'assets/img/user-2.jpg'
            },
            {
                name: 'Kley',
                city: 'California',
                country: 'USA',
                post: 'Senior Developer, Company Inc.',
                image: 'assets/img/user-3.jpg'
            },
            {
                name: 'Adam',
                city: 'Punjab',
                country: 'India',
                post: 'Software Engineer, Company Inc.',
                image: 'assets/img/user-4.jpg'
            },
            {
                name: 'Orton',
                city: 'California',
                country: 'USA',
                post: 'Senior Developer, Company Inc.',
                image: 'assets/img/user-1.jpg'
            }
        ];
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("User List");
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-userlist',
            template: __webpack_require__(/*! ./userlist-component.html */ "./src/app/users/user-list/userlist-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./userlist-component.scss */ "./src/app/users/user-list/userlist-component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/users/user-profile-v2/user-profile-v2.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/users/user-profile-v2/user-profile-v2.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-profile-v2\">\n\t<ms-user-profile [userProfile] = \"userProfile\"></ms-user-profile>\n\t<div fxLayout=\"row wrap\">\n\t\t<div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"65\" fxFlex.lg=\"65\" fxFlex.xl=\"65\">\n\t\t\t<div>\n\t\t\t\t<mat-card class=\"mrgn-b-lg\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class=\"card-title mrgn-b-md\"><h4>{{'About'|translate}}</h4></div>\n\t\t\t\t\t\t<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>\n\t\t\t\t\t\t<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<p>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex lorem ipsum.</p>\n\t\t\t\t\t\t<p>Sit amet, consectetur adipisicing elit, sed do eiusmod tempor lorem ipsum dolor .</p>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<p>Amet, consectetur adipisicing elit, sed do eiusmod\n\t\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex lorem ipsum dolor sit.</p>\n\t\t\t\t\t\t<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<p>Consectetur adipisicing elit, sed do eiusmod\n\t\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n\t\t\t\t\t\tquis nostrud exercitation ullamco laboris nisi ut aliquip ex lorem ipsum dolor sit amet.</p>\n\t\t\t\t\t\t<p>Sed do eiusmod tempor lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</mat-card>\n\t\t\t</div>\n\t\t\t<div class=\"publication-wrap\">\n\t\t\t\t<ms-publications [publicationArray] = \"publicationArray\"></ms-publications>\n\t\t\t</div>\t\n\t\t</div>\n\t\t<div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"35\" fxFlex.lg=\"35\" fxFlex.xl=\"35\">\n\t\t\t<div>\n\t\t\t\t<ms-research-interests [researchInterest] = \"researchInterest\"></ms-research-interests>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<ms-followers [followers] = \"followers\"></ms-followers>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\t"

/***/ }),

/***/ "./src/app/users/user-profile-v2/user-profile-v2.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/users/user-profile-v2/user-profile-v2.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXItcHJvZmlsZS12Mi91c2VyLXByb2ZpbGUtdjIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/users/user-profile-v2/user-profile-v2.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/users/user-profile-v2/user-profile-v2.component.ts ***!
  \********************************************************************/
/*! exports provided: UserProfileV2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileV2Component", function() { return UserProfileV2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
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



var UserProfileV2Component = /** @class */ (function () {
    function UserProfileV2Component(pageTitleService, translate) {
        this.pageTitleService = pageTitleService;
        this.translate = translate;
        this.userProfile = [
            {
                userImage: "assets/img/user-200x200.jpg",
                userName: "Stormy Estes (demo)",
                profession: "Professor",
                department: "Senior Group Leader And Professor of Surgical Oncology",
                place: "University of Cambridge",
                postCount: "50",
                followersCount: "92",
                followingCount: "73",
                viewCount: "95"
            }
        ];
        this.publicationArray = [
            {
                image: "/assets/img/user-1.jpg",
                heading: "Lorem ipsum dolor sit amet, consectetur adipisicing ut labore et dolore magna.",
                contentType: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                reference: "Learn All From This.",
                text: "Five Brilliant Ways To Advertise"
            },
            {
                image: "/assets/img/user-2.jpg",
                heading: "Consectetur adipisicing ut labore et dolore magna aliqua lorem ipsum dolor sit amet.",
                contentType: "Dolor in reprehenderit in voluptate velit esse cillum ullamco laboris nisi ut aliquip ex ea commodo",
                reference: "Learn All From This",
                text: "Five Brilliant Ways To Advertise"
            },
            {
                image: "/assets/img/user-3.jpg",
                heading: "Ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor.",
                contentType: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ut labore et dolore magna aliqua.",
                reference: "Learn All From This",
                text: "Five Brilliant Ways To Advertise"
            },
            {
                image: "/assets/img/user-4.jpg",
                heading: "Duis aute irure dolor in reprehenderit in voluptate velit ess dolore eu Cancer.",
                contentType: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat consectetur adipisicing elilaborum.",
                reference: "Learn All From This",
                text: "Five Brilliant Ways To Advertise"
            },
            {
                image: "assets/img/user-5.jpg",
                heading: "Lorem ipsum dolor sit amet, consectetur adipisicing ut labore et dolore magna aliqua.",
                contentType: "Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua commodo consequat.",
                reference: "Learn All From This",
                text: "Five Brilliant Ways To Advertise"
            }
        ];
        this.researchInterest = [
            {
                type: "Health care",
                color: "primary"
            },
            {
                type: "Education planner",
                color: "accent"
            },
            {
                type: "Surgical Oncology",
                color: "warn"
            },
            {
                type: "Prostate Cancer",
                color: "accent"
            },
            {
                type: "Surgical",
                color: "primary"
            }
        ];
        this.followers = [
            {
                image: "assets/img/user-1.jpg",
                name: "Tony Freund",
                place: "Miami"
            },
            {
                image: "assets/img/user-2.jpg",
                name: "Etta Spano",
                place: "Fayetteville"
            },
            {
                image: "assets/img/user-3.jpg",
                name: "Archie Enriquez",
                place: "Rose Hill"
            },
            {
                image: "assets/img/user-4.jpg",
                name: "Betty Rivera",
                place: "Houston"
            },
            {
                image: "assets/img/user-5.jpg",
                name: "Tessa Hinrichs",
                place: "Los Angeles"
            },
            {
                image: "assets/img/user-6.jpg",
                name: "Rena Blackmon",
                place: "Los Angeles"
            }
        ];
    }
    UserProfileV2Component.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("User Profile");
    };
    UserProfileV2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-user-profile-v2',
            template: __webpack_require__(/*! ./user-profile-v2.component.html */ "./src/app/users/user-profile-v2/user-profile-v2.component.html"),
            styles: [__webpack_require__(/*! ./user-profile-v2.component.scss */ "./src/app/users/user-profile-v2/user-profile-v2.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], UserProfileV2Component);
    return UserProfileV2Component;
}());



/***/ }),

/***/ "./src/app/users/user-profile/user-profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/users/user-profile/user-profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\n   <div fxFlex.gt-md=\"100\" fxFlex.gt-sm=\"100\" fxFlex=\"100\">\n      <div class=\"user-content\">\n         <mat-card>\n            <div class=\"pad-y-sm\">\n               <div fxLayout=\"row wrap\" fxLayoutAlign=\"start\" class=\"user-profile\">\n                  <div fxFlex.xl=\"300px\" fxFlex.lg=\"300px\" fxFlex.md=\"300px\"  fxFlex.sm=\"250px\" fxFlex.xs=\"100\" >\n                     <div class=\"mrgn-b-md\">\n                        <img class=\"img-responsive  display-ib\" src=\"assets/img/user-pro.jpg\" alt=\"user profile image\" width=\"300\" height=\"300\">\n                     </div>\n                  </div>\n                  <div fxFlex.xl=\"calc(100% - 300px)\" fxFlex.lg=\"calc(100% - 300px)\" fxFlex.md=\"calc(100% - 300px)\"  fxFlex.sm=\"calc(100% - 250px)\" fxFlex.xs=\"100\"  class=\"user-contact-info\">\n                     <ul>\n                        <li>\n                           <h4>Lisa Arnold</h4>\n                           <p>Art Director</p>\n                        </li>\n                        <li>\n                           <div class=\"contact-list\"><i class=\"fa fa-envelope primary-text\" aria-hidden=\"true\"></i> <strong>E-mail</strong></div>\n                           <a class=\"gene-block\" href=\"mailto:abcd@abcd.com\">: abcd@abcd.com</a>\n                        </li>\n                        <li>\n                           <div class=\"contact-list\"><i class=\"fa fa-phone primary-text\" aria-hidden=\"true\"></i> <strong>Phone</strong></div>\n                           <a class=\"gene-block\" href=\"mailto:abcd@abcd.com\">: +123 456 789890</a>\n                        </li>\n                        <li>\n                           <div class=\"contact-list\"><i class=\"fa fa fa-map primary-text\" aria-hidden=\"true\"></i> <strong>City</strong></div>\n                           <span>: New York</span>\n                        </li>\n                        <li>\n                           <div class=\"contact-list\"><i class=\"fa fa fa-globe primary-text\" aria-hidden=\"true\"></i> <strong>Country</strong></div>\n                           <span>: USA</span>\n                        </li>\n                        <li>\n                           <div class=\"contact-list\"><i class=\"fa fa-map-marker primary-text\" aria-hidden=\"true\"></i> <strong> Address</strong></div>\n                           <span class=\"gene-block\">: E-112,Auston Street, New York ,USA</span>\n                        </li>\n                     </ul>\n                     <div class=\"user-socail-stats\">\n                        <ul>\n                           <li>\n                              <a><i class=\"fa fa-facebook\"></i></a>\n                           </li>\n                           <li>\n                              <a><i class=\"fa fa-twitter\"></i></a>\n                           </li>\n                           <li>\n                              <a><i class=\"fa fa-google-plus\"></i></a>\n                           </li>\n                           <li>\n                              <a><i class=\"fa fa-linkedin\"></i></a>\n                           </li>\n                        </ul>\n                     </div>\n                  </div>\n               </div>\n               <div>\n                  <h4>Summary</h4>\n                  <p>\n                     Hi, This is Lisa arnold. I am feeling glad for what I have achieved here. But I think life is more about helping people rather than commanding them. I feel life is also full of variations in designs. In terms of design, nature creates beautiful graphs and sets lot of colors in our personal life.\n                  </p>\n                  <p class=\"mrgn-b-none\">\n                     So yes I get ideas from nature. The way it designs hills, oceans and fills colors into them. I feel lucky for having this life and capable of identifying hidden treasures beneath a wonderful design.\n                  </p>\n               </div>\n            </div>\n         </mat-card>\n      </div>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/users/user-profile/user-profile.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/users/user-profile/user-profile.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-socail-stats {\n  margin-bottom: 1.5rem; }\n  .user-socail-stats ul {\n    margin-top: 0.5rem;\n    padding: 0; }\n  .user-socail-stats li {\n    display: inline-block; }\n  .user-socail-stats li a:hover {\n      cursor: pointer; }\n  .user-socail-stats li i {\n      width: 30px;\n      height: 30px;\n      line-height: 30px;\n      border-radius: 100%;\n      color: #fff;\n      text-align: center; }\n  .user-socail-stats li i.fa-facebook {\n      background: #1565c0; }\n  .user-socail-stats li i.fa-twitter {\n      background: #e53935; }\n  .user-socail-stats li i.fa-google-plus {\n      background: #00bcd4; }\n  .user-socail-stats li i.fa-linkedin {\n      background: #4caf50; }\n  .user-contact-info ul {\n  list-style: none;\n  padding-left: 2rem;\n  margin: 0; }\n  .user-contact-info ul li {\n    margin-bottom: 1rem; }\n  .contact-list {\n  min-width: 120px;\n  float: left; }\n  @media (max-width: 599px) {\n  .user-contact-info ul {\n    padding-left: 0; }\n  .contact-list {\n    min-width: 90px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL3VzZXJzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDSSxxQkFBcUIsRUFBQTtFQUR6QjtJQUdRLGtCQUFrQjtJQUNsQixVQUFVLEVBQUE7RUFKbEI7SUFPUSxxQkFBcUIsRUFBQTtFQVA3QjtNQVNZLGVBQWUsRUFBQTtFQVQzQjtNQVlZLFdBQVc7TUFDWCxZQUFZO01BQ1osaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gsa0JBQWtCLEVBQUE7RUFqQjlCO01Bb0JZLG1CQXhCTSxFQUFBO0VBSWxCO01BdUJZLG1CQTFCSyxFQUFBO0VBR2pCO01BMEJZLG1CQTVCUyxFQUFBO0VBRXJCO01BNkJZLG1CQTlCUyxFQUFBO0VBbUNyQjtFQUVRLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsU0FBUyxFQUFBO0VBSmpCO0lBTVksbUJBQW1CLEVBQUE7RUFLL0I7RUFDSSxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBO0VBS2Y7RUFDSTtJQUNJLGVBQWUsRUFBQTtFQUVuQjtJQUNHLGVBQWUsRUFBQSxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICRmYWNlYm9vazogIzE1NjVjMDtcbiAgJHR3aXR0ZXI6ICNlNTM5MzU7XG4gICRnb29nbGUtcGx1czogIzAwYmNkNDtcbiAgJGZhLWxpbmtlZGluOiAjNGNhZjUwO1xuICAudXNlci1zb2NhaWwtc3RhdHMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgdWwge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgICAgbGkge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGkuZmEtZmFjZWJvb2sge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZmFjZWJvb2tcbiAgICAgICAgICB9XG4gICAgICAgICAgaS5mYS10d2l0dGVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHR3aXR0ZXJcbiAgICAgICAgICB9XG4gICAgICAgICAgaS5mYS1nb29nbGUtcGx1cyB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRnb29nbGUtcGx1c1xuICAgICAgICAgIH1cbiAgICAgICAgICBpLmZhLWxpbmtlZGluIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGZhLWxpbmtlZGluO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICBcbiAgLnVzZXItY29udGFjdC1pbmZvIHtcbiAgICAgIHVsIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICBcbiAgLmNvbnRhY3QtbGlzdCB7XG4gICAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgXG4gXG5cbiAgQG1lZGlhKG1heC13aWR0aDo1OTlweCkge1xuICAgICAgLnVzZXItY29udGFjdC1pbmZvIHVsIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgICAuY29udGFjdC1saXN0IHtcbiAgICAgICAgIG1pbi13aWR0aDogOTBweDtcbiAgICAgIH1cbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/users/user-profile/user-profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/users/user-profile/user-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
/* harmony import */ var _core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/route-animation/route.animation */ "./src/app/core/route-animation/route.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(pageTitleService) {
        this.pageTitleService = pageTitleService;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("User Profile");
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-userprofile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/users/user-profile/user-profile.component.html"),
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/users/user-profile/user-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/users/user-profile/user-profile.component.ts");
/* harmony import */ var _user_list_userlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-list/userlist.component */ "./src/app/users/user-list/userlist.component.ts");
/* harmony import */ var _user_profile_v2_user_profile_v2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-profile-v2/user-profile-v2.component */ "./src/app/users/user-profile-v2/user-profile-v2.component.ts");
/* harmony import */ var _widget_component_widget_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widget-component/widget-component.module */ "./src/app/widget-component/widget-component.module.ts");
/* harmony import */ var _users_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users.routing */ "./src/app/users/users.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _user_list_userlist_component__WEBPACK_IMPORTED_MODULE_7__["UserListComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"],
                _user_profile_v2_user_profile_v2_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileV2Component"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_users_routing__WEBPACK_IMPORTED_MODULE_10__["UserRoutes"]),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _widget_component_widget_component_module__WEBPACK_IMPORTED_MODULE_9__["WidgetComponentModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/app/users/users.routing.ts":
/*!****************************************!*\
  !*** ./src/app/users/users.routing.ts ***!
  \****************************************/
/*! exports provided: UserRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutes", function() { return UserRoutes; });
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/users/user-profile/user-profile.component.ts");
/* harmony import */ var _user_profile_v2_user_profile_v2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile-v2/user-profile-v2.component */ "./src/app/users/user-profile-v2/user-profile-v2.component.ts");
/* harmony import */ var _user_list_userlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-list/userlist.component */ "./src/app/users/user-list/userlist.component.ts");



var UserRoutes = [
    {
        path: '',
        redirectTo: 'userlist',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'userlist',
                component: _user_list_userlist_component__WEBPACK_IMPORTED_MODULE_2__["UserListComponent"]
            },
            {
                path: 'userprofile',
                component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_0__["UserProfileComponent"]
            },
            {
                path: 'userprofilev2',
                component: _user_profile_v2_user_profile_v2_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileV2Component"]
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map