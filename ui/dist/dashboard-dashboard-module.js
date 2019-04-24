(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/courses/courses.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/courses/courses.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"courses-wrap\">\n   <ms-courses-banner></ms-courses-banner>\n   <div fxLayout=\"row wrap\" fxLayoutAlign=\"center stretch\" class=\"height-full\">\n      <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n         <div class=\"courses-grid-sec pad-y-lg\">\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" class=\"height-full\">\n               <div fxFlex.gt-md=\"35\" fxFlex=\"100\">\n                  <mat-card class=\"card-full-height card-full-width\" fxLayoutAlign=\"start center\">\n                     <div class=\"pad-y-xl\">\n                        <h2 class=\"full-wid\">Best collection from best tutors from around the globe</h2>\n                        <p class=\"full-wid\">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                     </div>\n                  </mat-card>\n               </div>\n               <div fxFlex.gt-md=\"65\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                  <mat-card class=\"overflow-show tab-wrap set-ietab-height\">\n                     <mat-tab-group animationDuration=\"0ms\">\n                        <mat-tab label=\"Management\">\n                           <div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" *ngIf=\"getCoursesByType('management')\">\n                              <div class=\"course-item-wrap\" fxFlex.gt-sm=\"33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" *ngFor = \"let course of getCoursesByType('management'); let i = index\">\n                                 <ng-container *ngIf = \"i<3\">\n                                    <ms-courses-card [course] = \"course\"></ms-courses-card>\n                                    <ms-courses-description [course] = \"course\"></ms-courses-description>\n                                 </ng-container>\n                              </div>\n                           </div>\n                           <div class=\"view-all-wrap text-right mrgn-x-md pad-x-xs pad-b-md\">\n                              <a [routerLink]=\"['/courses/courses-list']\" class=\"warn-text\">View All</a>\n                           </div>\n                        </mat-tab>\n                        <mat-tab label=\"Design\">\n                           <div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" *ngIf=\"getCoursesByType('design')\">\n                              <div class=\"course-item-wrap\" fxFlex.gt-sm=\"33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" *ngFor = \"let course of getCoursesByType('design'); let i = index\">\n                                 <ng-container *ngIf = \"i<2\">\n                                    <ms-courses-card [course] = \"course\"></ms-courses-card>\n                                    <ms-courses-description [course] = \"course\"></ms-courses-description>\n                                 </ng-container>\n                              </div>\n                           </div>\n                        </mat-tab>\n                        <mat-tab label=\"Development\">\n                           <div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" *ngIf=\"getCoursesByType('develop')\">\n                              <div class=\"course-item-wrap\" fxFlex.gt-sm=\"33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" *ngFor = \"let course of getCoursesByType('develop'); let i = index\">\n                                 <ng-container *ngIf = \"i<1\">\n                                    <ms-courses-card [course] = \"course\"></ms-courses-card>\n                                    <ms-courses-description [course] = \"course\"></ms-courses-description>\n                                 </ng-container>\n                              </div>\n                           </div>\n                        </mat-tab>\n                     </mat-tab-group>\n                  </mat-card>\n               </div>\n            </div>\n         </div>\n         <div class=\"courses-grid col-4-resp\">\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\" class=\"height-full\">\n               <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n                  <div class=\"overflow-show tab-wrap mat-pad-none\">\n                     <mat-tab-group animationDuration=\"0ms\">\n                        <mat-tab label=\"Top\">\n                           <div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\n                              <div class=\"course-item-wrap\" fxFlex.gt-md=\"25\" fxFlex.gt-sm=\"33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" *ngFor = \"let course of getCoursesByPopularity('top'); let i = index\">\n                                 <ng-container *ngIf = \"i< 8\">\n                                    <ms-courses-card [course] = \"course\"></ms-courses-card>\n                                    <ms-courses-description [course] = \"course\"></ms-courses-description>\n                                 </ng-container>\n                              </div>\n                           </div>\n                        </mat-tab>\n                        <mat-tab label=\"New\">\n                           <div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\n                              <div class=\"course-item-wrap\" fxFlex.gt-md=\"25\" fxFlex.gt-sm=\"33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" *ngFor = \"let course of getCoursesByPopularity('new'); let i = index\">\n                                 <ms-courses-card [course] = \"course\"></ms-courses-card>\n                                 <ms-courses-description [course] = \"course\"></ms-courses-description>\n                              </div>\n                           </div>\n                        </mat-tab>\n                        <mat-tab label=\"Trending\">\n                           <div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\n                              <div class=\"course-item-wrap\" fxFlex.gt-md=\"25\" fxFlex.gt-sm=\"33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" *ngFor = \"let course of getCoursesByPopularity('trending'); let i = index\">\n                                 <ms-courses-card [course] = \"course\"></ms-courses-card>\n                                 <ms-courses-description [course] = \"course\"></ms-courses-description>\n                              </div>\n                           </div>\n                        </mat-tab>\n                     </mat-tab-group>\n                  </div>\n               </div>\n            </div>\n         </div>\n         <div class=\"instructor-card-wrap pad-y-lg\">\n            <div class=\"gene-sec-title  mrgn-l-md\">\n               <h3>{{'Popular Instructors'|translate}}</h3>\n            </div>\n            <div fxLayout=\"row\" fxLayout.lt-lg=\"row wrap\" fxLayoutAlign=\"start\" class=\"height-full\">\n               <ng-container *ngIf = \"jsonResponse.instructors && jsonResponse.instructors.length>0\">\n                  <div *ngFor = \"let instructor of jsonResponse.instructors\" fxFlex.gt-md=\"20\" fxFlex.gt-sm=\"33.333\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\n                     <ms-instructor-card [instruct] = \"instructor\" class = \"full-wid\"></ms-instructor-card>\n                  </div>\n               </ng-container>\n            </div>\n         </div>\n      </div>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/courses/courses.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/courses/courses.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".courses-wrap .mat-tab-body-wrapper, .courses-wrap .mat-tab-body-content, .courses-wrap .mat-tab-body.mat-tab-body-active, .courses-wrap .mat-tab-body-content {\n  overflow: visible !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL2Rhc2hib2FyZC9jb3Vyc2VzL2NvdXJzZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFTSw0QkFBNEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb3Vyc2VzL2NvdXJzZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY291cnNlcy13cmFwe1xuICAgLm1hdC10YWItYm9keS13cmFwcGVyLC5tYXQtdGFiLWJvZHktY29udGVudCwubWF0LXRhYi1ib2R5Lm1hdC10YWItYm9keS1hY3RpdmUsLm1hdC10YWItYm9keS1jb250ZW50e1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbiAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/courses/courses.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/courses/courses.component.ts ***!
  \********************************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
/* harmony import */ var _core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/route-animation/route.animation */ "./src/app/core/route-animation/route.animation.ts");
/* harmony import */ var _service_core_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/core/core.service */ "./src/app/service/core/core.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(pageTitleService, coreService, router, translate) {
        this.pageTitleService = pageTitleService;
        this.coreService = coreService;
        this.router = router;
        this.translate = translate;
        this.jsonResponse = [];
    }
    CoursesComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Courses");
        this.getCourses();
    };
    /**
      * getCourses method is used to get the courses list.
      */
    CoursesComponent.prototype.getCourses = function () {
        var _this = this;
        this.coreService.getCourses().
            subscribe(function (res) { _this.jsonResponse = res; }, function (err) { return console.log(err); }, function () { return _this.jsonResponse; });
    };
    ;
    /**
      * getCoursesByType method is used to get the type of courses.
      */
    CoursesComponent.prototype.getCoursesByType = function (type) {
        var course = [];
        if (this.jsonResponse.courses && this.jsonResponse.courses.length > 0) {
            for (var _i = 0, _a = this.jsonResponse.courses; _i < _a.length; _i++) {
                var list = _a[_i];
                if (list.type == type) {
                    course.push(list);
                }
            }
            return course;
        }
    };
    /**
      * getCoursesByPopularity method is used to get the popularity of courses.
      */
    CoursesComponent.prototype.getCoursesByPopularity = function (type) {
        var course = [];
        if (this.jsonResponse.courses && this.jsonResponse.courses.length > 0) {
            for (var _i = 0, _a = this.jsonResponse.courses; _i < _a.length; _i++) {
                var list = _a[_i];
                if (list.popular == type) {
                    course.push(list);
                }
            }
            return course;
        }
    };
    CoursesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-courses',
            template: __webpack_require__(/*! ./courses.component.html */ "./src/app/dashboard/courses/courses.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./courses.component.scss */ "./src/app/dashboard/courses/courses.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"],
            _service_core_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/crm/crm.component.html":
/*!**************************************************!*\
  !*** ./src/app/dashboard/crm/crm.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" class=\"crm-stats-cards\" *ngIf=\"statsCards\">\n   <div class=\"crm-stats\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\n         <div fxFlex.gt-md=\"25\" fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" *ngFor=\"let cards of statsCards\">\n            <mat-card class=\"{{cards.card_color}} mat-card\">\n               <div class=\"mrgn-b-xs\" mat-card-widget fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                  <span class=\"inline-block lead\">\n                     <i class=\"fa {{cards.icon}} mrgn-r-xs\" aria-hidden=\"true\"></i>\n                  </span>\n                  <span class=\"lead inline-block\">{{cards.title}}</span>\n               </div>\n              \n               <div class=\"chart-wrap\">\n                  <ms-stats-line-chart [label]=\"cards.chartLabel\" [data]=\"cards.chartData\" [color]=\"cards.chartColors\"></ms-stats-line-chart>\n               </div>\n               <div class=\"mrgn-b-md\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n                  <span>{{cards.viewer}}</span>\n                  <span>Trade : {{cards.trade}}%</span>\n               </div>\n            </mat-card>\n         </div>\n      </div>\n   </div>\n   <!--Crm stats cards -->\n</div>\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\">\n   <div fxFlex.gt-md=\"66.66\" fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n      <mat-card class=\"card-full-height card-full-width\">\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h4 class=\"mrgn-b-none\">{{'Project Status' | translate}}</h4>\n               </div> <span fxFlex></span>\n               <button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n               <button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content crm-progress-wrap\">\n            <div class=\"chart-wrap\">\n               <ms-column-chart-with-images></ms-column-chart-with-images>\n            </div>\n         </div>\n      </mat-card>\n   </div>\n   <div fxFlex.gt-md=\"33.33\" fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n      <mat-card class=\"card-full-height card-full-width\">\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h4 class=\"mrgn-b-none\">{{'Sales' | translate}}</h4>\n               </div> <span fxFlex></span>\n               <button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n               <button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content crm-progress-wrap\">\n            <div class=\"chart-wrap\">\n               <ms-amcharts-pie-chart [data]=\"saleChartData\"></ms-amcharts-pie-chart>\n            </div>\n         </div>\n      </mat-card>\n   </div>\n</div>\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\">\n   <div fxFlex.gt-md=\"33.33\" fxFlex.gt-sm=\"33.33\" fxFlex=\"100\">\n      <mat-card class=\"card-full-height card-full-width\">\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h4 class=\"mrgn-b-none\">{{'Upcoming Events' | translate}}</h4>\n               </div> <span fxFlex></span>\n               <button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n               <button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content crm-list-wrap\">\n            <mat-list class=\"mat-pad-none\">\n               <mat-list-item *ngFor=\"let events of UpcomingEvents\">\n                  <div class=\"full-wid pad-b-sm pad-t-xs\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">   \n                     <div>\n                        <h4 class=\"mrgn-b-none\" mat-line>{{events.title}}</h4>\n                        <p mat-line class=\"meta-post mrgn-b-none\">{{events.date}}, {{events.location}}</p>\n                     </div>\n                     <div>\n                        <a href=\"javascript:void(0);\" class=\"crypto-duration mat-grey-300 inline-block\"> {{events.status}} </a>\n                     </div>\n                  </div>\n                  <mat-divider></mat-divider>\n               </mat-list-item>\n            </mat-list>\n         </div>\n      </mat-card>\n   </div>\n   <div fxFlex.gt-md=\"33.33\" fxFlex.gt-sm=\"33.33\" fxFlex=\"100\">\n      <mat-card class=\"card-full-height card-full-width\">\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h4 class=\"mrgn-b-none\">{{'Ongoing Projects' | translate}}</h4>\n               </div> <span fxFlex></span>\n               <button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n               <button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content crm-progress-wrap\">\n            <h4 class=\"mrgn-b-sm\">{{'Project' | translate}} 1</h4>\n            <div class=\"project-descp\">\n               <mat-list class=\"pad-t-none mrgn-b-md\">\n                  <mat-list-item>                     \n                     <div class=\"full-wid\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                        <span class=\"mrgn-b-xs font-bold\" fxFlex=\"170px\" mat-line><i class=\"fa fa-user-circle-o primary-text\" aria-hidden=\"true\"></i>{{'Supervisor' | translate}} : </span>\n                        <span class=\"mrgn-b-xs\" fxFlex=\"calc(100% - 170px)\">John Gena</span>\n                     </div>\n                  </mat-list-item>\n                  <mat-list-item>                     \n                     <div class=\"full-wid\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                        <span class=\"mrgn-b-xs font-bold\" fxFlex=\"170px\" mat-line><i class=\"fa fa-clock-o primary-text\" aria-hidden=\"true\"></i>{{'Duration' | translate}} : </span>\n                        <span class=\"mrgn-b-xs\" fxFlex=\"calc(100% - 170px)\">3 Weeks</span>\n                     </div>\n                  </mat-list-item>\n                  <mat-list-item>                     \n                     <div class=\"full-wid\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                        <span class=\"mrgn-b-xs font-bold\" fxFlex=\"170px\" mat-line><i class=\"fa fa-money primary-text\" aria-hidden=\"true\"></i>Net {{'Worth' | translate}} : </span>\n                        <span class=\"mrgn-b-xs\" fxFlex=\"calc(100% - 170px)\">$2364378</span>\n                     </div>\n                  </mat-list-item>\n                  <mat-list-item>                     \n                     <div class=\"full-wid\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                        <span class=\"mrgn-b-xs font-bold\" fxFlex=\"170px\" mat-line><i class=\"fa fa-envelope-o primary-text\" aria-hidden=\"true\"></i>{{'Email' | translate}} : </span>\n                        <span class=\"mrgn-b-xs text-ellipse\" fxFlex=\"calc(100% - 170px)\">support@theironnetwork.org</span>\n                     </div>\n                  </mat-list-item>\n                  <mat-list-item>                     \n                     <div class=\"full-wid\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n                        <span class=\"mrgn-b-xs font-bold\" fxFlex=\"170px\" mat-line><i class=\"fa fa-phone primary-text\" aria-hidden=\"true\"></i>{{'Phone' | translate}} : </span>\n                        <span class=\"mrgn-b-xs\" fxFlex=\"calc(100% - 170px)\">+01 3456 25378</span>\n                     </div>\n                  </mat-list-item>\n               </mat-list>\n               <div class=\"progress-wrap\">\n                  <div class=\"mrgn-b-md\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n                     <span class=\"font-bold\">{{'Progress' | translate}} : </span>\n                     <span> 30%</span>\n                  </div>\n                  <div class=\"mrgn-b-xs\">\n                     <mat-progress-bar mode=\"determinate\" value=\"30\"></mat-progress-bar>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </mat-card>\n   </div>\n   <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-md=\"33.33%\" fxFlex=\"100\">\n      <mat-card class=\"card-full-height card-full-width\">\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h4 class=\"mrgn-b-none\">{{'Project Status' | translate}}</h4>\n               </div> <span fxFlex></span>\n               <button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n               <button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content crm-progress-wrap\">\n            <mat-list class=\"mat-pad-none\">\n               <mat-list-item *ngFor =\"let status of projectStatus\">\n                  <div class=\"full-wid\">\n                     <div class=\"full-wid pad-b-sm pad-t-xs\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">   \n                        <div>\n                           <span class=\"mrgn-b-none font-bold\" mat-line>{{status.title}}</span>\n                        </div>\n                        <div>\n                           <a href=\"javascript:void(0);\" class=\"crypto-duration {{status.color}} inline-block\"> {{status.duration}} </a>\n                        </div>\n                     </div>\n                     <div class=\"progress-wrap mrgn-b-md\">\n                        <mat-progress-bar mode=\"determinate\" value=\"{{status.value}}\"></mat-progress-bar>\n                     </div>\n                  </div>\n               </mat-list-item> \n            </mat-list>\n         </div>\n      </mat-card>\n   </div>\n</div>\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\">   \n   <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n\t\t<mat-card class=\"notification-wrap card-full-height\">\n\t\t\t<div class=\"gene-card-title\">\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t<div fxLayout=\"column\">\n\t\t\t\t\t\t<h4 class=\"mrgn-b-none\">{{'Notifications' | translate}}</h4>\n\t\t\t\t\t</div> <span fxFlex></span>\n\t\t\t\t\t<button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n\t\t\t\t</div>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t</div>\n\t\t\t<div class=\"gene-card-content text-inverse-all\">\n\t\t\t\t<mat-list class=\"gene-theme-list mrgn-b-lg\">\n               <ng-container *ngFor=\"let content of notificationContent\">\n   \t\t\t\t\t<mat-list-item class=\"{{content.card_color}} mat-list-item\">\n   \t\t\t\t\t\t<div> {{content.notification}} </div>\n   \t\t\t\t\t</mat-list-item>\n   \t\t\t   </ng-container>\n               </mat-list>\n\t\t\t\t<div class=\"text-center mrgn-b-md\">\n               <button class=\"mrgn-all-xs meta-post\" mat-button>View All Notfications</button>\n            </div>\n\t\t\t</div>\n\t\t</mat-card>\n\t</div>\n\t<div fxFlex.gt-sm=\"66.66%\" fxFlex=\"100\">\n\t\t<mat-card class=\"card-full-height live-chat-card\">\n\t\t\t<div class=\"gene-card-title\">\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t<div fxLayout=\"column\">\n\t\t\t\t\t\t<h4 class=\"mrgn-b-none\">{{'Live Chat Support' | translate}}</h4>\n\t\t\t\t\t</div> <span fxFlex></span>\n\t\t\t\t\t<button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n\t\t\t\t</div>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t</div>\n\t\t\t<div class=\"gene-card-content\">\n            <perfect-scrollbar class=\"chat-content-wrap\">\n               <div fxLayout=\"row\" fxLayoutAlign=\"start start\" class=\"{{livechat.classSendBy}} chat-list pad-y-sm\" *ngFor=\"let livechat of liveChatSupport\">\n                  <div class=\"chat-thumbnail\" fxFlex.gt-md=\"65px\" fxFlex.gt-xs=\"70px\" fxFlex=\"70px\" >\n                     <img class=\"img-responsive img-circle\" src=\"{{livechat.image}}\" alt=\"User Image\" width=\"64\" height=\"64\">\n                  </div>\n                  <div class=\"pad-wrap chat-content\" fxFlex.gt-md=\"calc(80% - 75px)\" fxFlex.gt-xs=\"80\" fxFlex.sm=\"100\">\n                     <div fxLayout=\"row wrap\" class=\"title-wrap\">\n                        <span class=\"chat-text font-bold inline-block\">{{livechat.name}}</span>\n                        <h5 class=\"meta-post mrgn-b-none inline-block\">{{livechat.time}}</h5>\n                     </div>\n                     <div class=\"gene-chat-content\">\n                        <p class=\"mrgn-b-none gene-msg-block\">{{livechat.chat}}</p>\n                     </div>\n                  </div>\n               </div>\n            </perfect-scrollbar>\n            <div class=\"gene-chat-form\">\n               <div>\n                  <mat-form-field class=\"gene-send-text mrgn-r-md\">\n                     <input matInput placeholder=\"Send Message\">\n                  </mat-form-field>\n                  <button mat-fab color=\"primary\" class=\"gene-send-btn\">\n                     <mat-icon>send</mat-icon>\n                  </button>\n               </div>\n            </div>\n\t\t\t</div>\n\t\t</mat-card>\n   </div>\n</div>\n<div *ngIf=\"tableTabData\">\n   <mat-card class=\"pad-all-md\">\n      <mat-tab-group class=\"table-tab-list\" color=\"accent\">\n         <mat-tab label=\"{{'Transaction List' | translate}}\">\n            <div fxFlex.gt-md=\"100\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n               <div class=\"transactiion-list table-list-wrap\">\n                  <div class=\"table-responsive\">  \n                     <table class=\"full-wid\" mat-table [dataSource]=\"tableTabData.transactionList\">\n                        <ng-container matColumnDef=\"transid\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Transaction Id</th>\n                           <td mat-cell *matCellDef=\"let element\">\n                              <div>{{element.transid}}</div>\n                           </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"date\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Date</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.date | date:'mediumDate'}} </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"account\">\n                           <th mat-header-cell *matHeaderCellDef>Account</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.account}}</td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"type\">\n                           <th mat-header-cell *matHeaderCellDef>Type</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">\n                              <mat-chip-list>\n                                 <mat-chip color=\"{{element.typeColor}}\" selected>{{element.type}}</mat-chip>\n                              </mat-chip-list>\n                           </td>   \n                        </ng-container>\n                        <ng-container matColumnDef=\"amount\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Amount</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.amount}} </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"debit\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Debit</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.debit}} </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"credit\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Credit</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.credit}} </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"balance\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Balance</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.balance}} </td>\n                        </ng-container>\n                        <tr mat-header-row *matHeaderRowDef=\"displayedTransactionColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedTransactionColumns\"></tr>\n                     </table>\n                  </div>  \n               </div>\n            </div>\n         </mat-tab>\n         <mat-tab label=\"{{'Transfer Report' | translate}}\">\n            <div fxFlex.gt-md=\"100\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n               <div class=\"invoice-list table-list-wrap\">\n                  <div class=\"table-responsive\">  \n                     <table class=\"full-wid\" mat-table [dataSource]=\"tableTabData.transferreport\">\n                        <ng-container matColumnDef=\"transid\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Transfer Id</th>\n                           <td mat-cell *matCellDef=\"let element\">\n                              <div>{{element.transid}}</div>\n                           </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"date\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Date</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.date | date:'mediumDate'}} </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"account\">\n                           <th mat-header-cell *matHeaderCellDef>Account</th>\n                           \n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.account}}</td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"type\">\n                           <th mat-header-cell *matHeaderCellDef>Type</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">\n                              <mat-chip-list>\n                                 <mat-chip color=\"{{element.typeColor}}\" selected>{{element.type}}</mat-chip>\n                              </mat-chip-list>\n                           </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"amount\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Amount</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.amount}} </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"balance\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Balance</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.balance}} </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"status\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Status</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">\n                              <mat-chip-list>\n                                 <mat-chip color=\"{{element.statusColor}}\" selected>{{element.status}}</mat-chip>\n                              </mat-chip-list> \n                           </td>\n                        </ng-container>\n                        <tr mat-header-row *matHeaderRowDef=\"displayedTransferColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedTransferColumns\"></tr>\n                     </table>\n                  </div>   \n               </div>\n            </div> \n         </mat-tab>\n         <mat-tab label=\"{{'Expense Category' | translate}}\">\n            <div fxFlex.gt-md=\"100\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n               <div class=\"Expense-category-list table-list-wrap\">\n                  <div class=\"table-responsive\">  \n                     <table class=\"full-wid\" mat-table [dataSource]=\"tableTabData.expenseCategory\">\n                        <ng-container matColumnDef=\"itmNo\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Item No</th>\n                           <td mat-cell *matCellDef=\"let element\">\n                              <div>{{element.itmNo}}</div>\n                           </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"date\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Date</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.date | date:'mediumDate'}} </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"type\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Type</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">\n                              <mat-chip-list>\n                                 <mat-chip color=\"{{element.typeColor}}\" selected>{{element.type}}</mat-chip>\n                              </mat-chip-list> \n                           </td>   \n                        </ng-container>\n                        <ng-container matColumnDef=\"description\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Description</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.description}} </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"amount\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Amount</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.amount}} </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"status\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Status</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">\n                              <mat-chip-list>\n                                 <mat-chip color=\"{{element.statusColor}}\" selected>{{element.status}}</mat-chip>\n                              </mat-chip-list> \n                           </td>\n                        </ng-container>\n                        <tr mat-header-row *matHeaderRowDef=\"displayedExpenseColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedExpenseColumns\"></tr>\n                     </table>\n                  </div>   \n               </div>\n            </div>   \n         </mat-tab>\n      </mat-tab-group>\n   </mat-card>\n</div> \n<mat-menu #options=\"matMenu\" x-position=\"before\">\n   <button mat-menu-item>\n      <mat-icon>settings</mat-icon> Settings </button>\n   <button mat-menu-item>\n      <mat-icon>more</mat-icon> View More </button>\n   <button mat-menu-item>\n      <mat-icon>notifications_off</mat-icon> Disable notifications </button>\n   <button mat-menu-item>\n      <mat-icon>exit_to_app</mat-icon> Remove Panel </button>\n</mat-menu>"

/***/ }),

/***/ "./src/app/dashboard/crm/crm.component.scss":
/*!**************************************************!*\
  !*** ./src/app/dashboard/crm/crm.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jcm0vY3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/crm/crm.component.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/crm/crm.component.ts ***!
  \************************************************/
/*! exports provided: CrmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrmComponent", function() { return CrmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
/* harmony import */ var _service_core_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/core/core.service */ "./src/app/service/core/core.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrmComponent = /** @class */ (function () {
    function CrmComponent(pageTitleService, coreService) {
        this.pageTitleService = pageTitleService;
        this.coreService = coreService;
        //upcoming events content
        this.UpcomingEvents = [
            {
                title: "Marketing Seminar",
                date: "28th April",
                status: "Email",
                location: "Mumbai"
            },
            {
                title: "Strategy Planning",
                date: "22th May",
                status: "Phone",
                location: "Delhi"
            },
            {
                title: "Hiring Personals",
                date: "29th May",
                status: "Skype",
                location: "Delhi"
            },
            {
                title: "Training",
                date: "30th May",
                status: "Email",
                location: "Delhi"
            }
        ];
        //project status content
        this.projectStatus = [
            {
                title: "Project 1",
                duration: "Completed",
                color: "success-bg",
                value: 50
            },
            {
                title: "Project 2",
                duration: "Pending",
                color: "warn-bg",
                value: 60
            },
            {
                title: "Project 3",
                duration: "Ongoing",
                color: "primary-bg",
                value: 70
            },
            {
                title: "Project 4",
                duration: "Completed",
                color: "success-bg",
                value: 50
            }
        ];
        //sale chart data 
        this.saleChartData = [{
                "title": "Product 1",
                "value": 351.9
            }, {
                "title": "Product 2",
                "value": 165.8
            }, {
                "title": "Product 3",
                "value": 139.9
            }, {
                "title": "Product 4",
                "value": 128.3
            }];
        this.displayedTransactionColumns = ['transid', 'date', 'account', 'type', 'amount', 'debit', 'credit', 'balance'];
        this.displayedTransferColumns = ['transid', 'date', 'account', 'type', 'amount', 'balance', 'status'];
        this.displayedExpenseColumns = ['itmNo', 'date', 'type', 'description', 'amount', 'status'];
        //notification content
        this.notificationContent = [
            {
                notification: "Site goes is down for 6 hours due to maintainance and bug fixing.Please Check",
                card_color: "warn-bg"
            },
            {
                notification: "New users from March is promoted as special benefit under promotional offer of 30%.",
                card_color: "success-bg"
            },
            {
                notification: "Bug detected from the development team at the cart module of Fashion store.",
                card_color: "primary-bg"
            }
        ];
        //live chat support content
        this.liveChatSupport = [
            {
                image: "assets/img/register-user-3.jpg",
                name: "Devy Finn",
                chat: "Hi There! Recently I updated the latest version of your app, it crashed every time when i open.Please help me out as soon as possible.....Thanks",
                time: "10 Min ago",
                classSendBy: "sender"
            },
            {
                image: "assets/img/register-user-1.jpg",
                name: "Sam Brown",
                chat: "Hi Devy, Can you please tell us your mobile configuraion.So that We can help you better.Please Also specify Version of your phone....Thank You!",
                time: "8 Min ago",
                classSendBy: "receiver"
            },
            {
                image: "assets/img/register-user-3.jpg",
                name: "Devy Finn",
                chat: "Thanks you for quick response. I using iPhone 6s and the version of this is 10.2 . Please fix this issue I need this right now....Thanks",
                time: "7 Min ago",
                classSendBy: "sender"
            },
            {
                image: "assets/img/register-user-1.jpg",
                name: "Sam Brown",
                chat: "Please wait for some time. Our tecnical support team will contact you soon and fix the issue .Thanks for using our App.We will Assit You better",
                time: "6 Min ago",
                classSendBy: "receiver"
            }
        ];
    }
    CrmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitleService.setTitle("CRM");
        this.coreService.getTableTabContent().
            subscribe(function (res) { _this.tableTabData = res; }, function (err) { return console.log(err); }, function () { return _this.tableTabData; });
        this.coreService.getCrmStatsCardContent().
            subscribe(function (res) { _this.statsCards = res; }, function (err) { return console.log(err); }, function () { return _this.statsCards; });
    };
    CrmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-crm',
            template: __webpack_require__(/*! ./crm.component.html */ "./src/app/dashboard/crm/crm.component.html"),
            styles: [__webpack_require__(/*! ./crm.component.scss */ "./src/app/dashboard/crm/crm.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"],
            _service_core_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"]])
    ], CrmComponent);
    return CrmComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/crypto/crypto.component.html":
/*!********************************************************!*\
  !*** ./src/app/dashboard/crypto/crypto.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"ticker-slider\" dir=\"ltr\">\n   <ms-ticker-slider [sliderContent]=\"tickerSliderContent\" [sliderConfig]=\"tickerSliderConfig\"></ms-ticker-slider>\n</mat-card>\n<!-- ticker slider -->\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" class=\"crypto-dash-card\" *ngIf=\"statsCardData\">\n   <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" *ngFor=\"let cardData of statsCardData\">\n      <ms-stats-card [statsCardData]=\"cardData\"></ms-stats-card>\n   </div>\n</div>\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\n   <div fxFlex.gt-sm=\"100\" fxFlex=\"100\">\n      <mat-card>\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h4 class=\"mrgn-b-none\">BTC / USD</h4>\n               </div>\n               <span fxFlex></span>\n               <button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n               <button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <ms-candlestick-chart></ms-candlestick-chart>\n      </mat-card>\n   </div>\n</div>\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" class=\"crypto-dash-card\">\n   <div fxFlex.gt-md=\"66.66\" fxFlex.gt-sm=\"100\" fxFlex=\"100\">\n      <div class=\"trade-list table-list-wrap\">\n         <mat-card>\n            <div class=\"gene-card-title\">\n               <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                  <div fxLayout=\"column\">\n                     <h4 class=\"mrgn-b-none\">{{'Trade History' | translate}}</h4>\n                  </div>\n                  <span fxFlex></span>\n                  <button mat-icon-button>\n                     <mat-icon>sync</mat-icon>\n                  </button>\n               <button mat-icon-button [matMenuTriggerFor]=\"options\">\n                     <mat-icon>more_horiz</mat-icon>\n                  </button>\n               </div>\n               <mat-divider></mat-divider>\n               <div class=\"gene-card-content\">\n                  <perfect-scrollbar class=\"crypto-table table-hover mrgn-b-lg\">\n                     <div class=\"table-responsive trade-history-table \">\n                        <table mat-table [dataSource]=\"tradeHistory\">\n                           <ng-container matColumnDef=\"txnno\">\n                              <th mat-header-cell *matHeaderCellDef> Txn No </th>\n                              <td  mat-cell *matCellDef=\"let element\"> {{element.txnno}} </td>\n                           </ng-container>\n                           <!-- Transaction No -->\n                           <ng-container matColumnDef=\"currency\">\n                              <th mat-header-cell *matHeaderCellDef> Currency </th>\n                              <td mat-cell *matCellDef=\"let element\">  <span class=\"cc {{element.currencyIcon}} style-icon\"></span>{{currency}} </td>\n                           </ng-container>\n                           <!-- Currency -->\n                           <ng-container matColumnDef=\"status\">\n                              <th mat-header-cell *matHeaderCellDef> Status </th>\n                              <td mat-cell *matCellDef=\"let element\"><span class=\"{{element.statusClass}}\">{{element.status}}</span></td>\n                           </ng-container>\n                           <!-- Status -->\n                           <ng-container matColumnDef=\"price\">\n                              <th mat-header-cell *matHeaderCellDef> Price </th>\n                              <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n                           </ng-container>\n                           <!-- Price -->\n                           <ng-container matColumnDef=\"total\">\n                              <th mat-header-cell *matHeaderCellDef> Total($) </th>\n                              <td mat-cell *matCellDef=\"let element\"> ${{element.total}} </td>\n                           </ng-container>\n                           <!-- Total-->\n                           <ng-container matColumnDef=\"from\">\n                              <th mat-header-cell *matHeaderCellDef> To / From </th>\n                              <td mat-cell *matCellDef=\"let element\"> {{element.from}} </td>\n                           </ng-container>\n                           <!-- From -->\n                           <ng-container matColumnDef=\"date\">\n                              <th mat-header-cell *matHeaderCellDef> Date </th>\n                              <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\n                           </ng-container>\n                           <!-- Date -->\n                           <ng-container matColumnDef=\"more\">\n                              <th mat-header-cell *matHeaderCellDef> More </th>\n                              <td mat-cell *matCellDef=\"let element\"><a href=\"javascript:void(0);\"><i class=\"style-icon margin-none material-icons\" (click)=\"showTradeHistory(element)\">{{element.more}}</i></a> </td>\n                           </ng-container>\n                           <!-- Date -->\n                           <tr mat-header-row *matHeaderRowDef=\"tradeHistoryColumns; sticky: true\"></tr>\n                           <tr mat-row *matRowDef=\"let row; columns: tradeHistoryColumns;\"></tr>\n                        </table>\n                     </div>\n                  </perfect-scrollbar>\n               </div>\n            </div>\n         </mat-card>\n      </div>\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" class=\"exchange-statistics primary-chart-shadow\">\n         <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n            <mat-card *ngIf=\"exchangeStatistic\">\n               <div class=\"gene-card-title\">\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                     <div fxLayout=\"column\">\n                        <h4 class=\"mrgn-b-none\">{{'Exchange Statistics' | translate}}</h4>\n                     </div>\n                     <span fxFlex></span>\n                     <button mat-icon-button>\n                        <mat-icon>sync</mat-icon>\n                     </button>\n                     <button mat-icon-button [matMenuTriggerFor]=\"options\">\n                        <mat-icon>more_horiz</mat-icon>\n                     </button>\n                  </div>\n                  <mat-divider></mat-divider>\n               </div>\n               <div dir=\"ltr\">\n                  <ms-exchange-statistics [exchangeStatisticConfig]=\"statisticConfig\" [exchangeStatistic]=\"exchangeStatistic\"></ms-exchange-statistics>\n               </div>\n            </mat-card>\n            <div fxLayout=\"column\">\n               <mat-card class=\"exchange-rate-widget\">\n                  <div class=\"gene-card-title\">\n                     <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <div fxLayout=\"column\">\n                           <h4 class=\"mrgn-b-none\">{{'Exchange Rate' | translate}}</h4>\n                        </div>\n                        <span fxFlex></span>\n                        <button mat-icon-button>\n                           <mat-icon>sync</mat-icon>\n                        </button>\n                        <button mat-icon-button [matMenuTriggerFor]=\"options\">\n                           <mat-icon>more_horiz</mat-icon>\n                        </button>\n                     </div>\n                     <mat-divider></mat-divider>\n                  </div>\n                  <div class=\"gene-card-content trade-crypto crypto-input-prefix\">\n                     <div>\n                        <div class=\"chart-wrap\">\n                           <div class=\"mrgn-b-xs\">\n                              <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                                 <mat-label>Choose Currency</mat-label>\n                                 <span matPrefix class=\"fa fa-money\" aria-hidden=\"true\"></span>\n                                 <mat-select value=\"Bitcoin\"> \n                                    <mat-option value=\"Bitcoin\">Bitcoin</mat-option>\n                                    <mat-option value=\"Ethereum\">Ethereum</mat-option>\n                                    <mat-option value=\"EOS\">EOS</mat-option>\n                                    <mat-option value=\"Litecoin\">Litecoin</mat-option>\n                                 </mat-select>\n                              </mat-form-field>\n                           </div>\n                           <div class=\"mrgn-b-md\">\n                              <div class=\"rotate-exchange-icon text-center\">\n                                 <span class=\"fa fa-exchange inline-block\" aria-hidden=\"true\"></span>\n                              </div>\n                           </div>\n                           <div class=\"mrgn-b-md\">\n                              <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                                 <mat-label>Choose Currency</mat-label>\n                                 <span matPrefix class=\"fa fa-money\" aria-hidden=\"true\"></span>\n                                 <mat-select value=\"Ethereum\"> \n                                    <mat-option value=\"Bitcoin\">Bitcoin</mat-option>\n                                    <mat-option value=\"Ethereum\">Ethereum</mat-option>\n                                    <mat-option value=\"EOS\">EOS</mat-option>\n                                    <mat-option value=\"Litecoin\">Litecoin</mat-option>\n                                 </mat-select>\n                              </mat-form-field>\n                           </div>\n                           <div class=\"evaluated-text success-text\">\n                              <span>1 BTC = 0.45373 ETC</span>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n               </mat-card>\n            </div>\n         </div>\n         <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n            <mat-card>\n               <div class=\"gene-card-title\">\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                     <div fxLayout=\"column\">\n                        <h4 class=\"mrgn-b-none\">{{'Quick Trade' | translate}}</h4>\n                     </div>\n                     <span fxFlex></span>\n                     <button mat-icon-button>\n                        <mat-icon>sync</mat-icon>\n                     </button>\n                     <button mat-icon-button [matMenuTriggerFor]=\"options\">\n                        <mat-icon>more_horiz</mat-icon>\n                     </button>\n                  </div>\n                  <mat-divider></mat-divider>\n               </div>\n               <div class=\"gene-card-content\">\n                  <div class=\"quick-pay-wrap\">\n                     <mat-tab-group>\n                        <mat-tab label=\"Buy\">\n                           <ng-template mat-tab-label>\n                              <mat-icon class=\"mrgn-r-sm\">shopping_cart</mat-icon>\n                              Buy\n                           </ng-template>\n                           <div class=\"gene-card-content\">\n                              <div class=\"trade-crypto crypto-input-prefix\">\n                                 <div class=\"pad-t-sm\">\n                                    <div>\n                                       <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                                          <mat-label>Choose Currency</mat-label>\n                                          <span matPrefix class=\"fa fa-money\" aria-hidden=\"true\"></span>\n                                          <mat-select value=\"Bitcoin\"> \n                                             <mat-option value=\"Bitcoin\">Bitcoin</mat-option>\n                                             <mat-option value=\"Ethereum\">Ethereum</mat-option>\n                                             <mat-option value=\"EOS\">EOS</mat-option>\n                                             <mat-option value=\"Litecoin\">Litecoin</mat-option>\n                                          </mat-select>\n                                       </mat-form-field>\n                                    </div>\n                                    <div>\n                                       <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                                          <mat-label>Payment Method</mat-label>\n                                          <span matPrefix class=\"fa fa-credit-card\" aria-hidden=\"true\"></span>\n                                          <mat-select value=\"Debit Card\"> \n                                             <mat-option value=\"Debit Card\">Debit Card</mat-option>\n                                             <mat-option value=\"PayPal\">PayPal</mat-option>\n                                             <mat-option value=\"Bank Transfer\">Bank Transfer</mat-option>\n                                             <mat-option value=\"Credit Cards\">Credit Cards</mat-option>\n                                          </mat-select>\n                                       </mat-form-field>\n                                    </div>\n                                    <div>\n                                       <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                                          <mat-label>Select Amount</mat-label>\n                                          <input value=\"200\" class=\"form-control\" matInput type=\"number\" placeholder=\"Amount\" min=\"1\">\n                                       </mat-form-field>\n                                    </div>\n                                    <div>\n                                       <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                                          <mat-label>Wallet Address</mat-label>\n                                          <span matPrefix class=\"cc BTC-alt\"></span>\n                                          <input class=\"form-control\" matInput type=\"text\" placeholder=\"Wallet\" value=\"AXB35H24ISDJHCISDT\">\n                                       </mat-form-field>\n                                    </div>\n                                    <h4 class=\"font-normal success-text mrgn-b-md\">{{'Total amount is' | translate}} <span>200 $</span></h4>\n                                    <div class=\"button-wrap\">\n                                       <button mat-raised-button color=\"primary\">Purchase</button>\n                                       <h4 class=\"font-normal inline-block success-text\">{{'Transaction successfull' | translate}}</h4>\n                                    </div>\n                                 </div>\n                              </div>\n                           </div>\n                        </mat-tab>\n                        <mat-tab label=\"Sell\">\n                           <ng-template mat-tab-label>\n                              <mat-icon class=\"mrgn-r-sm\">attach_money</mat-icon>\n                              Sell\n                           </ng-template>\n                           <div class=\"gene-card-content\">\n                              <div class=\"trade-crypto crypto-input-prefix\">\n                                 <div class=\"pad-t-sm\">\n                                    <div>\n                                       <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                                          <mat-label>Choose Currency</mat-label>\n                                          <span matPrefix class=\"fa fa-money\" aria-hidden=\"true\"></span>\n                                          <mat-select value=\"Bitcoin\"> \n                                             <mat-option value=\"Bitcoin\">Bitcoin</mat-option>\n                                             <mat-option value=\"Ethereum\">Ethereum</mat-option>\n                                             <mat-option value=\"EOS\">EOS</mat-option>\n                                             <mat-option value=\"Litecoin\">Litecoin</mat-option>\n                                          </mat-select>\n                                       </mat-form-field>\n                                    </div>\n                                    <div>\n                                       <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                                          <mat-label>Select Amount</mat-label>\n                                          <input value=\"220\" class=\"form-control\" matInput type=\"number\" placeholder=\"Amount\" min=\"1\">\n                                       </mat-form-field>\n                                    </div>\n                                    <div>\n                                       <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                                          <mat-label>Password</mat-label>\n                                          <span matPrefix class=\"fa fa-shield\" aria-hidden=\"true\"></span>\n                                          <input class=\"form-control\" matInput type=\"password\" placeholder=\"Amount\" min=\"1\">\n                                       </mat-form-field>\n                                    </div>\n                                    <div>\n                                       <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                                          <mat-label>Wallet Address</mat-label>\n                                          <span matPrefix class=\"cc BTC-alt\"></span>\n                                          <input class=\"form-control\" matInput type=\"text\" placeholder=\"Wallet\" value=\"AXB35H24ISDJHCISDT\">\n                                       </mat-form-field>\n                                    </div>\n                                    <h4 class=\"font-normal success-text mrgn-b-md\">Your Account will be credited with <span>220 $</span></h4>\n                                    <div class=\"button-wrap\">\n                                       <button mat-raised-button color=\"primary\">Sell</button>\n                                       <h4 class=\"font-normal inline-block success-text\">Transaction successfull</h4>\n                                    </div>\n                                 </div>\n                              </div>\n                           </div>\n                        </mat-tab>\n                        <mat-tab label=\"Tranfers\">\n                           <ng-template mat-tab-label>\n                              <mat-icon class=\"mrgn-r-sm\">exit_to_app</mat-icon>\n                              Transfer\n                           </ng-template>\n                           <div class=\"gene-card-content\">\n                              <div class=\"trade-crypto crypto-input-prefix\">\n                                 <div class=\"pad-t-sm\">\n                                    <div>\n                                       <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                                          <mat-label>Choose Currency</mat-label>\n                                          <span matPrefix class=\"fa fa-money\" aria-hidden=\"true\"></span>\n                                          <mat-select value=\"Bitcoin\"> \n                                             <mat-option value=\"Bitcoin\">Bitcoin</mat-option>\n                                             <mat-option value=\"Ethereum\">Ethereum</mat-option>\n                                             <mat-option value=\"EOS\">EOS</mat-option>\n                                             <mat-option value=\"Litecoin\">Litecoin</mat-option>\n                                          </mat-select>                                       </mat-form-field>\n                                    </div>\n                                    <div>\n                                       <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                                          <mat-label>Select Amount</mat-label>\n                                          <input value= \"300\" class=\"form-control\" matInput type=\"number\" placeholder=\"Amount\" min=\"1\">\n                                       </mat-form-field>\n                                    </div>\n                                    <div>\n                                       <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                                          <mat-label>Password</mat-label>\n                                          <span matPrefix class=\"fa fa-shield\" aria-hidden=\"true\"></span>\n                                          <input class=\"form-control\" matInput type=\"password\" placeholder=\"Amount\" min=\"1\">\n                                       </mat-form-field>\n                                    </div>\n                                    <div>\n                                       <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                                          <mat-label>Send To</mat-label>\n                                          <span matPrefix class=\"cc BTC-alt\"></span>\n                                          <input class=\"form-control\" matInput type=\"text\" placeholder=\"Wallet Address\">\n                                       </mat-form-field>\n                                    </div>\n                                    <h4 class=\"font-normal success-text mrgn-b-md\">Total amount transfered <span>300 $</span></h4>\n                                    <div class=\"button-wrap\">\n                                       <button mat-raised-button color=\"primary\">Transfer</button>\n                                       <h4 class=\"font-normal inline-block success-text\">Transaction successfull</h4>\n                                    </div>\n                                 </div>\n                              </div>\n                           </div>\n                        </mat-tab>\n                     </mat-tab-group>\n                  </div>\n               </div>\n            </mat-card>\n         </div>\n      </div>\n   </div>\n   <div  fxFlex.gt-md=\"33.33\" fxFlex.gt-sm=\"100\" fxFlex=\"100\">\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\">\n         <div fxFlex.gt-md=\"100\" fxFlex=\"100\">\n            <mat-card>\n               <div class=\"gene-card-title\" *ngIf=\"safeTradeContent\">\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                     <div fxLayout=\"column\">\n                        <h4 class=\"mrgn-b-none\">{{'Safe Trade' | translate}}</h4>\n                     </div>\n                     <span fxFlex></span>\n                     <button mat-icon-button>\n                        <mat-icon>sync</mat-icon>\n                     </button>\n                     <button mat-icon-button [matMenuTriggerFor]=\"options\">\n                        <mat-icon>more_horiz</mat-icon>\n                     </button>\n                  </div>\n                  <mat-divider></mat-divider>\n                  <div dir=\"ltr\">\n                     <ms-safe-trade-slider [safeTradeConfig]=\"safeTradeConfig\" [safeTradeContent]=\"safeTradeContent\"></ms-safe-trade-slider>\n                  </div>\n               </div>\n            </mat-card>\n         </div>\n         <div fxFlex.gt-md=\"100\" fxFlex.gt-sm=\"100\" fxFlex=\"100\">\n            <div class=\"trade-list table-list-wrap\">\n               <mat-card>\n                  <div class=\"gene-card-title\">\n                     <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <div fxLayout=\"column\">\n                           <h4 class=\"mrgn-b-none\">{{'Recent Trades' | translate}}</h4>\n                        </div>\n                        <span fxFlex></span>\n                        <button mat-icon-button>\n                           <mat-icon>sync</mat-icon>\n                        </button>\n                        <button mat-icon-button [matMenuTriggerFor]=\"options\">\n                           <mat-icon>more_horiz</mat-icon>\n                        </button>\n                     </div>\n                     <mat-divider></mat-divider>\n                  </div>\n                  <div class=\"gene-card-content\">\n                     <perfect-scrollbar class=\"crypto-table table-hover mrgn-b-lg\">\n                        <div class=\"table-responsive recent-trade-table\">\n                           <table mat-table [dataSource]=\"recentTradeElement\">\n                              <ng-container matColumnDef=\"currency\">\n                                 <th mat-header-cell *matHeaderCellDef> Currency </th>\n                                 <td mat-cell *matCellDef=\"let element\">  <span class=\"cc {{element.currencyIcon}} style-icon\"></span> </td>\n                              </ng-container>\n                              <!-- Currency Column -->\n                              <ng-container matColumnDef=\"status\">\n                                 <th mat-header-cell *matHeaderCellDef> Status </th>\n                                 <td mat-cell *matCellDef=\"let element\"><span class=\"{{element.statusClass}}\">{{element.status}}</span></td>\n                              </ng-container>\n                              <!-- Status Column -->\n                              <ng-container matColumnDef=\"price\">\n                                 <th mat-header-cell *matHeaderCellDef> Price </th>\n                                 <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n                              </ng-container>\n                              <!-- Price Column -->\n                              <ng-container matColumnDef=\"total\">\n                                 <th mat-header-cell *matHeaderCellDef> Total($) </th>\n                                 <td mat-cell *matCellDef=\"let element\"> ${{element.total}} </td>\n                              </ng-container>\n                              <!-- Total Column -->               \n                              <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n                              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                           </table>\n                        </div>\n                     </perfect-scrollbar>\n                     <div class=\"stats-summary mrgn-b-sm\">\n                        <div>Overall Profit: <span></span><i class=\"fa fa-plus success-text\"> $35237 </i></div>\n                        <div>Overall Loss: <span></span><i class=\"fa fa-minus warn-text\"> $20 </i></div>\n                     </div>\n                     <div class=\"button-wrap\">\n                        <button mat-raised-button color=\"primary\">Download CSV</button>\n                     </div>\n                  </div>\n               </mat-card>\n            </div>   \n         </div>\n      </div>\n   </div>\n</div>\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\n   <div fxFlex.gt-sm=\"100\" fxFlex=\"100\">\n      <div class=\"trade-list table-list-wrap coins-list-table\">\n         <mat-card>\n            <div class=\"gene-card-title\">\n               <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                  <div fxLayout=\"column\">\n                     <h4 class=\"mrgn-b-none\">{{'Coins List' | translate}}</h4>\n                  </div>\n                  <span fxFlex></span>\n                  <button mat-icon-button>\n                     <mat-icon>sync</mat-icon>\n                  </button>\n                  <button mat-icon-button [matMenuTriggerFor]=\"options\">\n                     <mat-icon>more_horiz</mat-icon>\n                  </button>\n               </div>\n               <mat-divider></mat-divider>\n            </div>\n            <div class=\"gene-card-content pad-b-none\">\n               <div class=\"buttongroup mrgn-b-md\">\n                  <button class=\"mrgn-b-xs\" mat-raised-button color=\"primary\" (click)=\"cryptoSelect('BTC')\">BTC</button>\n                  <button class=\"mrgn-b-xs\" mat-raised-button color=\"warn\" (click)=\"cryptoSelect('ETH')\">ETH</button>\n                  <button class=\"mrgn-b-xs\" mat-raised-button color=\"accent\" (click)=\"cryptoSelect('EUR')\">EUR</button>\n               </div>\n               <div class=\"table-responsive\">\n                  <table mat-table [dataSource]=\"liveTradeSource\" matSort>\n                     <ng-container matColumnDef=\"serial_number\">\n                        <th mat-header-cell *matHeaderCellDef> No. </th>\n                        <td mat-cell *matCellDef=\"let element;let i = index\"><span>{{i}}</span></td>\n                     </ng-container>\n                     <ng-container matColumnDef=\"desktop_name\">\n                        <th mat-header-cell *matHeaderCellDef> Coins </th>\n                        <td mat-cell *matCellDef=\"let element\"><span>{{element.desktop_name}}</span></td>\n                     </ng-container>\n                     <ng-container matColumnDef=\"mobile_name\">\n                        <th mat-header-cell *matHeaderCellDef> Symbol </th>\n                        <td mat-cell *matCellDef=\"let element\"><span>{{element.mobile_name}}</span></td>\n                     </ng-container>\n                     <ng-container matColumnDef=\"price\">\n                        <th mat-header-cell *matHeaderCellDef> Price </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n                     </ng-container>\n                     <ng-container matColumnDef=\"tag\">\n                        <th mat-header-cell *matHeaderCellDef> Tag </th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.tag}} </td>\n                     </ng-container>\n                     <ng-container matColumnDef=\"volume\">\n                        <th mat-header-cell *matHeaderCellDef> Direct Vol. 24H </th>\n                        <td mat-cell *matCellDef=\"let element\"><span>{{element.volume}}</span></td>\n                     </ng-container>\n                     <ng-container matColumnDef=\"total_volume\">\n                        <th mat-header-cell *matHeaderCellDef> Total Vol. 24H </th>\n                        <td mat-cell *matCellDef=\"let element\"><span>{{element.total_volume}}</span></td>\n                     </ng-container>\n                     <ng-container matColumnDef=\"market_cap\">\n                        <th mat-header-cell *matHeaderCellDef> Market Cap </th>\n                        <td mat-cell *matCellDef=\"let element\"><span>{{element.market_cap}}</span></td>\n                     </ng-container>\n                     <ng-container matColumnDef=\"circulating_supply\">\n                        <th mat-header-cell *matHeaderCellDef> Circulating Supply</th>\n                        <td mat-cell *matCellDef=\"let element\"><span>{{element.circulating_supply}}</span></td>\n                     </ng-container>\n                     <ng-container matColumnDef=\"chart\">\n                        <th mat-header-cell *matHeaderCellDef> 7d Chart (USD) </th>\n                        <td mat-cell *matCellDef=\"let element\"><div class=\"table-chart-wrap\"><ms-stats-line-chart  [data]=\"element.chartData\" [label]=\"element.chartLabel\" [color]=\"element.chartColor\"></ms-stats-line-chart></div></td>\n                     </ng-container>\n                     <ng-container matColumnDef=\"change\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Chg. 24H </th>\n                        <td mat-cell *matCellDef=\"let element\"><span>{{element.change}}</span></td>\n                     </ng-container>\n                     <tr mat-header-row *matHeaderRowDef=\"cryptoCompareColumns; sticky: true\"></tr>\n                     <tr mat-row *matRowDef=\"let row; columns: cryptoCompareColumns;\"></tr>\n                  </table>\n                  <mat-paginator [pageSizeOptions]=\"[5, 10, 15, 20]\" showFirstLastButtons></mat-paginator>\n               </div>   \n            </div>\n         </mat-card>\n      </div>   \n   </div>\n</div>\n\n<mat-menu #options=\"matMenu\" x-position=\"before\">\n   <button mat-menu-item>\n      <mat-icon>settings</mat-icon> Settings </button>\n   <button mat-menu-item>\n      <mat-icon>more</mat-icon> View More </button>\n   <button mat-menu-item>\n      <mat-icon>notifications_off</mat-icon> Disable notifications </button>\n   <button mat-menu-item>\n      <mat-icon>exit_to_app</mat-icon> Remove Panel </button>\n</mat-menu>"

/***/ }),

/***/ "./src/app/dashboard/crypto/crypto.component.scss":
/*!********************************************************!*\
  !*** ./src/app/dashboard/crypto/crypto.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jcnlwdG8vY3J5cHRvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/crypto/crypto.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/crypto/crypto.component.ts ***!
  \******************************************************/
/*! exports provided: CryptoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoComponent", function() { return CryptoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_core_core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/core/core.service */ "./src/app/service/core/core.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CryptoComponent = /** @class */ (function () {
    function CryptoComponent(service, router, pageTitleService) {
        this.service = service;
        this.router = router;
        this.pageTitleService = pageTitleService;
        this.cryptoCompareColumns = ['serial_number', 'desktop_name', 'mobile_name', 'price', 'volume', 'tag', 'total_volume', 'market_cap', 'circulating_supply', 'chart', 'change'];
        //ticker slider config 
        this.tickerSliderConfig = {
            "speed": 10000,
            "autoplay": true,
            "autoplaySpeed": 0,
            "cssEase": 'linear',
            "slidesToShow": 5,
            "slidesToScroll": 1,
            "arrows": false,
            "dots": false,
            "responsive": [
                {
                    breakpoint: 1480,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        speed: 7000
                    }
                },
                {
                    breakpoint: 599,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        //safe trade
        this.safeTradeConfig = { "slidesToShow": 1, "fade": true, "slidesToScroll": 1, "arrows": false, "dots": false, "autoplay": true, "autoplaySpeed": 2000 };
        //trade history
        this.tradeHistory = [
            { currencyIcon: "BTC-alt", statusClass: 'success-text', status: 'Buy', price: 16245.79, total: 16245.79, txnno: 76237523, date: '21/3/102', from: 'Ico_Tha', more: 'info', payment_currency: 'Bitcoin' },
            { currencyIcon: "ETC", statusClass: 'warn-text', status: 'Sell', price: 43224.06, total: 16245.79, txnno: 76237523, date: '21/3/102', from: 'Ico_Tha', more: 'info', payment_currency: 'Ethereum' },
            { currencyIcon: "BTC-alt", statusClass: 'success-text', status: 'Buy', price: 61213.941, total: 16245.79, txnno: 76237523, date: '21/3/102', from: 'Ico_Tha', more: 'info', payment_currency: 'Bitcoin' },
            { currencyIcon: "ETC", statusClass: 'warn-text', status: 'Sell', price: 9313.0122, total: 16245.79, txnno: 76237523, date: '21/3/102', from: 'Ico_Tha', more: 'info', payment_currency: 'Ethereum' },
            { currencyIcon: "LTC", statusClass: 'warn-text', status: 'Sell', price: 10243.11, total: 16245.79, txnno: 76237523, date: '21/3/102', from: 'Ico_Tha', more: 'info', payment_currency: 'Litecoin' },
            { currencyIcon: "BTC-alt", statusClass: 'success-text', status: 'Buy', price: 123872.07, total: 16245.79, txnno: 76237523, date: '21/3/102', from: 'Ico_Tha', more: 'info', payment_currency: 'Bitcoin' },
            { currencyIcon: "ETC", statusClass: 'success-text', status: 'Buy', price: 123872.07, total: 16245.79, txnno: 76237523, date: '21/3/102', from: 'Ico_Tha', more: 'info', payment_currency: 'Ethereum' },
            { currencyIcon: "ZEC-alt", statusClass: 'success-text', status: 'Buy', price: 123872.07, total: 16245.79, txnno: 76237523, date: '21/3/102', from: 'Ico_Tha', more: 'info', payment_currency: 'ZCash' },
            { currencyIcon: "BTC-alt", statusClass: 'success-text', status: 'Buy', price: 123872.07, total: 16245.79, txnno: 76237523, date: '21/3/102', from: 'Ico_Tha', more: 'info', payment_currency: 'Bitcoin' },
        ];
        this.tradeHistoryColumns = ['currency', 'txnno', 'status', 'price', 'total', 'date', 'from', 'more'];
        //recent trade content
        this.recentTradeElement = [
            { currencyIcon: "BTC-alt", statusClass: 'success-text', status: 'Buy', price: 16245.79, total: 16245.79 },
            { currencyIcon: "ETC", statusClass: 'warn-text', status: 'Sell', price: 43224.06, total: 16245.79 },
            { currencyIcon: "BTC-alt", statusClass: 'success-text', status: 'Buy', price: 61213.941, total: 16245.79 },
            { currencyIcon: "ETC", statusClass: 'warn-text', status: 'Sell', price: 9313.0122, total: 16245.79 },
            { currencyIcon: "LTC", statusClass: 'warn-text', status: 'Sell', price: 10243.11, total: 16245.79 },
            { currencyIcon: "BTC-alt", statusClass: 'success-text', status: 'Buy', price: 123872.07, total: 16245.79 },
            { currencyIcon: "LTC", statusClass: 'warn-text', status: 'Sell', price: 10243.11, total: 16245.79 },
            { currencyIcon: "ETC", statusClass: 'warn-text', status: 'Sell', price: 43224.06, total: 16245.79 },
            { currencyIcon: "BTC-alt", statusClass: 'success-text', status: 'Buy', price: 61213.941, total: 16245.79 },
        ];
        this.displayedColumns = ['currency', 'status', 'price', 'total'];
        /*
           ----------live Status Chart  ----------
        */
        // live Status chart label
        this.liveStatusChartLabel = ['9', '10', '11', '12'];
        //live Status chart data
        this.liveStatusChartData = [
            { data: [100, 200, 125, 250], label: "Live Status" }
        ];
        //live Status chart color
        this.liveStatusChartColors = [
            {
                fill: false,
                lineTension: 0,
                fillOpacity: 0.3,
                pointHoverBorderWidth: 4,
                borderWidth: 4,
                pointHoverRadius: 7,
                pointBorderWidth: 3,
                pointRadius: 6,
                backgroundColor: '#1565c0',
                borderColor: '#1565c0',
                pointBackgroundColor: '#1565c0',
                pointBorderColor: '#FFFFFF',
                pointHoverBackgroundColor: '#1565c0',
                pointHoverBorderColor: '#1565c0'
            }
        ];
        //Exchange Statistics
        this.statisticConfig = { "slidesToShow": 1, "fade": true, "slidesToScroll": 1, "arrows": false, "dots": false, "autoplay": true, "autoplaySpeed": 2000 };
        this.liveTradeSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.coinList);
    }
    CryptoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitleService.setTitle("Crypto");
        this.service.getCoinList().
            subscribe(function (res) { _this.coinList = res; }, function (err) { return console.log(err); }, function () { return _this.cryptoSelect('BTC'); });
        this.service.getTickerData().
            subscribe(function (res) { _this.tickerSliderContent = res; }, function (err) { return console.log(err); }, function () { return _this.tickerSliderContent; });
        this.service.getCryptoStatsCardContent().
            subscribe(function (res) { _this.statsCardData = res; }, function (err) { return console.log(err); }, function () { return _this.statsCardData; });
        this.service.getSafeTradeContent().
            subscribe(function (res) { _this.safeTradeContent = res; }, function (err) { return console.log(err); }, function () { return _this.safeTradeContent; });
        this.service.getExchangeStatisticsContent().
            subscribe(function (res) { _this.exchangeStatistic = res; }, function (err) { return console.log(err); }, function () { return _this.exchangeStatistic; });
        setTimeout(function () {
            _this.liveTradeSource.sort = _this.sort;
            _this.liveTradeSource.paginator = _this.paginator;
        }, 5000);
    };
    //showTradeHistory method is used to open the dailog of trade history.
    CryptoComponent.prototype.showTradeHistory = function (element) {
        this.service.showTradeHistory(element);
    };
    //cryptoSelect method is used to show the table data according to selected coin.
    CryptoComponent.prototype.cryptoSelect = function (data) {
        this.liveTradeSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.coinList);
        var liveTradeData = [];
        for (var _i = 0, _a = this.coinList; _i < _a.length; _i++) {
            var content = _a[_i];
            if (content.tag == data) {
                liveTradeData.push(content);
                this.liveTradeSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](liveTradeData);
                this.liveTradeSource.sort = this.sort;
                this.liveTradeSource.paginator = this.paginator;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], CryptoComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], CryptoComponent.prototype, "sort", void 0);
    CryptoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-crypto',
            template: __webpack_require__(/*! ./crypto.component.html */ "./src/app/dashboard/crypto/crypto.component.html"),
            styles: [__webpack_require__(/*! ./crypto.component.scss */ "./src/app/dashboard/crypto/crypto.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_core_core_service__WEBPACK_IMPORTED_MODULE_1__["CoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_4__["PageTitleService"]])
    ], CryptoComponent);
    return CryptoComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts/ng2-charts */ "./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ng2modules_easypiechart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2modules-easypiechart */ "./node_modules/ng2modules-easypiechart/index.js");
/* harmony import */ var ng2modules_easypiechart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2modules_easypiechart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _saas_saas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./saas/saas.component */ "./src/app/dashboard/saas/saas.component.ts");
/* harmony import */ var _web_analytics_webanalytics_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./web-analytics/webanalytics.component */ "./src/app/dashboard/web-analytics/webanalytics.component.ts");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/dashboard/dashboard.routing.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _widget_component_widget_component_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../widget-component/widget-component.module */ "./src/app/widget-component/widget-component.module.ts");
/* harmony import */ var _crypto_crypto_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./crypto/crypto.component */ "./src/app/dashboard/crypto/crypto.component.ts");
/* harmony import */ var _crm_crm_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./crm/crm.component */ "./src/app/dashboard/crm/crm.component.ts");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./courses/courses.component */ "./src/app/dashboard/courses/courses.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _saas_saas_component__WEBPACK_IMPORTED_MODULE_11__["SaasComponent"],
                _web_analytics_webanalytics_component__WEBPACK_IMPORTED_MODULE_12__["WebAnalyticsComponent"],
                _crypto_crypto_component__WEBPACK_IMPORTED_MODULE_16__["CryptoComponent"],
                _crm_crm_component__WEBPACK_IMPORTED_MODULE_17__["CrmComponent"],
                _courses_courses_component__WEBPACK_IMPORTED_MODULE_18__["CoursesComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _widget_component_widget_component_module__WEBPACK_IMPORTED_MODULE_15__["WidgetComponentModule"],
                ng2modules_easypiechart__WEBPACK_IMPORTED_MODULE_9__["EasyPieChartModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__["PerfectScrollbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_13__["DashboardRoutes"]),
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk' })
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routing.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.ts ***!
  \************************************************/
/*! exports provided: DashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function() { return DashboardRoutes; });
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses/courses.component */ "./src/app/dashboard/courses/courses.component.ts");
/* harmony import */ var _saas_saas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saas/saas.component */ "./src/app/dashboard/saas/saas.component.ts");
/* harmony import */ var _web_analytics_webanalytics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-analytics/webanalytics.component */ "./src/app/dashboard/web-analytics/webanalytics.component.ts");
/* harmony import */ var _crypto_crypto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crypto/crypto.component */ "./src/app/dashboard/crypto/crypto.component.ts");
/* harmony import */ var _crm_crm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crm/crm.component */ "./src/app/dashboard/crm/crm.component.ts");





var DashboardRoutes = [
    {
        path: '',
        redirectTo: 'crm',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'saas',
                component: _saas_saas_component__WEBPACK_IMPORTED_MODULE_1__["SaasComponent"]
            },
            {
                path: 'web-analytics',
                component: _web_analytics_webanalytics_component__WEBPACK_IMPORTED_MODULE_2__["WebAnalyticsComponent"]
            },
            {
                path: "crypto",
                component: _crypto_crypto_component__WEBPACK_IMPORTED_MODULE_3__["CryptoComponent"]
            },
            {
                path: "crm",
                component: _crm_crm_component__WEBPACK_IMPORTED_MODULE_4__["CrmComponent"]
            },
            {
                path: "courses",
                component: _courses_courses_component__WEBPACK_IMPORTED_MODULE_0__["CoursesComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/dashboard/saas/saas-component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/saas/saas-component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gene-welcome-note pad-wrap\">\n\t<h2>Hi John, Welcome back</h2>\n\t<p>Explore your own powerful admin panel and keep track of all activity</p>\n</div>\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" class=\"dash-card\">\n\t<div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" attr.tourAnchor=\"{{card.tourAnchor}}\" *ngFor=\"let card of statsCard\">\n\t\t<mat-card class=\"{{card.card_color}} mat-card\">\n\t\t\t<div mat-card-widget>\n\t\t\t\t<button mat-mini-fab class=\"inline-block gene-fab-flat-icon\" mat-card-icon>\n               <mat-icon>{{card.icon}}</mat-icon>\n            </button>\n\t\t\t\t<div class=\"inline-block vertical-align-mid pad-wrap\">\n\t\t\t\t\t<h5 mat-card-widget-title class=\"mrgn-b-none\">{{card.title}}</h5>\n\t\t\t\t\t<h5>{{card.number}}</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</mat-card>\n\t</div>\n</div>\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\n\t<div fxFlex.gt-sm=\"100\" fxFlex=\"100\">\n\t\t<mat-card>\n\t\t\t<div class=\"gene-card-title\">\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t<div fxLayout=\"column\">\n\t\t\t\t\t\t<h4>{{'Sample Full Width Graph'|translate}}</h4>\n\t\t\t\t\t</div> <span fxFlex></span>\n\t\t\t\t\t<button mat-icon-button>\n                   <mat-icon>sync</mat-icon>\n                </button>\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\n                   <mat-icon>more_horiz</mat-icon>\n                </button>\n\t\t\t\t</div>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t</div>\n\t\t\t<ms-full-width-graph [lineChartData]=\"lineChartData\" [lineChartLabels]=\"lineChartLabels\" [lineChartOptions]=\"lineChartOptions\" [lineChartColors]=\"lineChartColors\" [lineChartLegend]=\"lineChartLegend\" [lineChartType]=\"lineChartType\"></ms-full-width-graph>\n\t\t</mat-card>\n\t</div>\n</div>\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\">\n\t<div fxFlex.gt-sm=\"33.33%\" fxFlex=\"100\">\n\t\t<mat-card class=\"card-full-height\">\n\t\t\t<div class=\"gene-card-title\">\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t<div fxLayout=\"column\">\n\t\t\t\t\t\t<h4>{{'To Do Lists'|translate}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<span fxFlex></span>\n\t\t\t\t\t<button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n\t\t\t\t</div>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t</div>\n\t\t\t<div class=\"gene-card-content\">\n\t\t\t\t<div class=\"todos\">\n               <perfect-scrollbar class=\"todolist-scroll\">\n\t\t\t\t\t   <ul class=\"gene-list\">\n                     <li *ngFor=\"let todo of todos\">\n                        <mat-checkbox class=\"checkbox mrgn-r-sm\" [(ngModel)]=\"todo.completed\"></mat-checkbox>\n                        <span [ngClass]=\"{'checked': todo.completed}\">{{ todo.newTodo }}</span> \n                     </li>\n                  </ul>\n               </perfect-scrollbar>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class=\"list-insert-bar\" fxFlex>\n\t\t\t\t\t\t\t<form class=\"to-do-form\" (submit)=\"addTodo($event)\" fxShow=\"false\" fxShow.gt-xs>\n\t\t\t\t\t\t\t\t<mat-form-field class=\"full-width\">\n                           <input matInput type=\"text\" placeholder=\"Add new item\" [(ngModel)]=\"newTodo\" (keyup.enter)=\"newTodo=''\" class=\"textfield\" name=\"newTodo\" />\n                        </mat-form-field>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</mat-card>\n\t</div>\n\t<div fxFlex.gt-sm=\"66.66%\" fxFlex=\"100\">\n\t\t<mat-card class=\"card-full-height live-chat-card\">\n\t\t\t<div class=\"gene-card-title\">\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t<div fxLayout=\"column\">\n\t\t\t\t\t\t<h4>{{'Live Chat Support'|translate}}</h4>\n\t\t\t\t\t</div> <span fxFlex></span>\n\t\t\t\t\t<button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n\t\t\t\t</div>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t</div>\n\t\t\t<div class=\"gene-card-content\">\n               <div fxLayout=\"row\" fxLayoutAlign=\"start start\" class=\"{{livechat.classSendBy}} chat-list pad-y-sm\" *ngFor=\"let livechat of liveChatSupport\">\n                  <div class=\"chat-thumbnail\" fxFlex.gt-md=\"65px\" fxFlex.gt-xs=\"70px\" fxFlex=\"70px\" >\n                     <img class=\"img-responsive img-circle\" src=\"{{livechat.image}}\" alt=\"User Image\" width=\"64\" height=\"64\">\n                  </div>\n                  <div class=\"pad-wrap chat-content\" fxFlex.gt-md=\"calc(80% - 75px)\" fxFlex.gt-xs=\"80\" fxFlex.sm=\"100\">\n                     <div fxLayout=\"row wrap\" class=\"title-wrap\">\n                        <span class=\"chat-text font-bold inline-block\">{{livechat.name}}</span>\n                        <h5 class=\"meta-post mrgn-b-none inline-block\">{{livechat.time}}</h5>\n                     </div>\n                     <div class=\"gene-chat-content\">\n                        <p class=\"mrgn-b-none gene-msg-block\">{{livechat.chat}}</p>\n                     </div>\n                  </div>\n               </div>\n           \t</div>\n\t\t</mat-card>\n\t</div>\n</div>\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\">\n\t<div fxFlex.gt-sm=\"66.66\" fxFlex.gt-md=\"66.66%\" fxFlex=\"100\">\n\t\t<mat-card class=\"card-full-height card-full-width\">\n\t\t\t<div class=\"gene-card-title\">\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t<div fxLayout=\"column\">\n\t\t\t\t\t\t<h4>{{'Project Status'|translate}}</h4>\n\t\t\t\t\t</div> <span fxFlex></span>\n\t\t\t\t\t<button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n\t\t\t\t</div>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t</div>\n\t\t\t<div class=\"gene-card-content-sm gene-img-table\">\n\t\t\t\t<ngx-datatable class=\"material box-shadow-none full-wid\" [rows]=\"rows\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"0\" [rowHeight]=\"'auto'\">\n\t\t\t\t\t<ngx-datatable-column name=\"Project\">\n\t\t\t\t\t\t<ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template> {{row['project']}} </ng-template>\n\t\t\t\t\t</ngx-datatable-column>\n\t\t\t\t\t<ngx-datatable-column name=\"Progress\">\n\t\t\t\t\t\t<ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n\t\t\t\t\t\t\t<mat-progress-bar mode=\"determinate\" value=\"{{row['progress']}}\" color=\"{{row['color']}}\"></mat-progress-bar> <span class=\"meta-post\">{{row['name']}}</span> </ng-template>\n\t\t\t\t\t</ngx-datatable-column><span fxFlex></span>\n\t\t\t\t\t<ngx-datatable-column name=\"Team\">\n\t\t\t\t\t\t<ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n                     <img class=\"thumb-gap\" src=\"{{row['team-member1']}}\" width=\"30px\" height=\"30px\">\n                     <img class=\"thumb-gap\" src=\"{{row['team-member2']}}\" width=\"30px\" height=\"30px\">\n                     <img class=\"thumb-gap\" src=\"{{row['team-member3']}}\" width=\"30px\" height=\"30px\">\n                     <img class=\"thumb-gap\" src=\"{{row['team-member4']}}\" width=\"30px\" height=\"30px\">\n                     <img class=\"thumb-gap\" src=\"{{row['team-member5']}}\" width=\"30px\" height=\"30px\">\n                     <img class=\"thumb-gap\" src=\"{{row['team-member6']}}\" width=\"30px\" height=\"30px\">\n                  </ng-template>\n\t\t\t\t\t</ngx-datatable-column>\n\t\t\t\t</ngx-datatable>\n\t\t\t</div>\n\t\t</mat-card>\n\t</div>\n\t<div fxFlex.gt-sm=\"33.33\" fxFlex.gt-md=\"33.33%\" fxFlex=\"100\">\n\t\t<mat-card class=\"card-full-height card-full-width\">\n\t\t\t<div class=\"gene-card-title\">\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t<div fxLayout=\"column\">\n\t\t\t\t\t\t<h4>{{'Team Member'|translate}}</h4>\n\t\t\t\t\t</div> <span fxFlex></span>\n\t\t\t\t\t<button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n\t\t\t\t</div>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t</div>\n\t\t\t<div class=\"gene-card-content\">\n\t\t\t\t<mat-list class=\"gene-team-list\">\n\t\t\t\t\t<ng-template let-item let-last=\"last\" ngFor [ngForOf]=\"team\">\n\t\t\t\t\t\t<mat-list-item class=\"pad-none\"> <img mat-list-avatar src=\"{{item.photo}}\" alt=\"\">\n\t\t\t\t\t\t\t<h3 mat-line> {{item.name}} </h3>\n\t\t\t\t\t\t\t<p mat-line class=\"meta-post\"> {{item.post}}</p>\n\t\t\t\t\t\t</mat-list-item>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</mat-list>\n\t\t\t</div>\n\t\t</mat-card>\n\t</div>\n</div>\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\">\n\t<div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n\t\t<mat-card class=\"accent-bg card-full-height\">\n\t\t\t<div class=\"gene-card-title\">\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t<div fxLayout=\"column\">\n\t\t\t\t\t\t<h4 class=\"text-inverse\">{{'Yearly Sales'|translate}}<span class=\"inline-block mrgn-l-sm\">+2.99%</span></h4>\n\t\t\t\t\t</div> <span fxFlex></span>\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\n               <mat-icon class=\"text-inverse\">more_horiz</mat-icon>\n            </button>\n\t\t\t\t</div>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t</div>\n\t\t\t<ms-yearly-sale [barChartData]=\"barChartData\" [barChartLabels]=\"barChartLabels\" [barStackChartOptions]=\"barStackChartOptions\" [barChartColors]=\"barChartColors\" [barChartLegend]=\"barChartLegend\" [barChartType]=\"barChartType\"></ms-yearly-sale>\n\t\t</mat-card>\n\t</div>\n\t<div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n\t\t<mat-card class=\"card-full-height\">\n\t\t\t<div class=\"gene-card-title\">\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t<div fxLayout=\"column\">\n\t\t\t\t\t\t<h4>{{'Sales Report'|translate}}<span class=\"inline-block mrgn-l-sm text-alert\">+458.99</span></h4>\n\t\t\t\t\t</div> <span fxFlex></span>\n\t\t\t\t\t<button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n\t\t\t\t</div>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t</div>\n\t\t\t<ms-sales-report [bubbleChartData]=\"bubbleChartData\" [lineChartLabels]=\"lineChartLabels\" [bubbleChartOptions]=\"bubbleChartOptions\" [bubbleChartColors]=\"bubbleChartColors\" [lineChartLegend]=\"lineChartLegend\" [bubbleChartType]=\"bubbleChartType\"></ms-sales-report>\n\t\t</mat-card>\n\t</div>\n</div>\n<div fxLayout=\"row wrap\">\n\t<div fxFlex.gt-sm=\"100\" fxFlex=\"100\">\n\t\t<mat-card>\n\t\t\t<div class=\"gene-card-title\">\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t<div fxLayout=\"column\">\n\t\t\t\t\t\t<h4>{{'Global Locations'|translate}}</h4>\n\t\t\t\t\t</div> <span fxFlex></span>\n\t\t\t\t\t<button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n\t\t\t\t</div>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t</div>\n\t\t\t<div class=\"gene-card-content\">\n\t\t\t\t<div fxLayout=\"row\">\n\t\t\t\t\t<div fxFlex.gt-sm=\"100\" fxFlex=\"100\">\n\t\t\t\t\t\t<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"9\" [scrollwheel]=\"false\" [styles]=\"customStyle\">\n\t\t\t\t\t\t\t<agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [iconUrl]=\"'assets/img/marker-icon.png'\"></agm-marker>\n\t\t\t\t\t\t</agm-map>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</mat-card>\n\t</div>\n</div>\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\">\n\t<div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n\t\t<mat-card class=\"card-full-height email-stats\">\n\t\t\t<div class=\"gene-card-title\">\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t<div fxLayout=\"column\">\n\t\t\t\t\t\t<h4>{{'Email Statistics'|translate}}</h4>\n\t\t\t\t\t</div> <span fxFlex></span>\n\t\t\t\t\t<button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n\t\t\t\t</div>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t</div>\n\t\t\t<ms-email-statistics [doughnutChartData]=\"doughnutChartData\" [doughnutChartLabels]=\"doughnutChartLabels\" [doughnutChartOptions]=\"doughnutChartOptions\" [doughnutChartColors]=\"doughnutChartColors\" [doughnutChartType]=\"doughnutChartType\"></ms-email-statistics>\n\t\t</mat-card>\n\t</div>\n\t<div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n\t\t<mat-card class=\"card-full-height\">\n\t\t\t<div class=\"gene-card-title\">\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t<div fxLayout=\"column\">\n\t\t\t\t\t\t<h4>{{'Traffic Sources'|translate}}</h4>\n\t\t\t\t\t</div> <span fxFlex></span>\n\t\t\t\t\t<button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n\t\t\t\t</div>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t</div>\n\t\t\t<div class=\"gene-card-content\">\n\t\t\t\t<ng-container *ngFor=\"let content of trafficSource\">\n\t\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\t\t\t\t\t\t<p>{{content.title}}</p><span fxFlex></span>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<mat-icon class=\"{{content.icon_color}} material-icons\">{{content.icon}}</mat-icon><span class=\"gene-span mrgn-l-xs\">{{content.progress}}%</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<mat-progress-bar mode=\"determinate\" value=\"{{content.progress}}\" class=\"gene-progess-md\" color=\"{{content.progress_color}}\"></mat-progress-bar>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t</mat-card>\n\t</div>\n\t<div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n\t\t<mat-card class=\"notification-wrap card-full-height\">\n\t\t\t<div class=\"gene-card-title\">\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t<div fxLayout=\"column\">\n\t\t\t\t\t\t<h4>{{'Notifications'|translate}}</h4>\n\t\t\t\t\t</div> <span fxFlex></span>\n\t\t\t\t\t<button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n\t\t\t\t</div>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t</div>\n\t\t\t<div class=\"gene-card-content text-inverse-all\">\n\t\t\t\t<mat-list class=\"gene-theme-list mrgn-b-lg\">\n               <ng-container *ngFor=\"let content of notificationContent\">\n   \t\t\t\t\t<mat-list-item class=\"{{content.card_color}} mat-list-item\">\n   \t\t\t\t\t\t<div> {{content.notification}} </div>\n   \t\t\t\t\t</mat-list-item>\n   \t\t\t   </ng-container>\n               </mat-list>\n\t\t\t\t<div class=\"text-center mrgn-b-md\">\n               <button class=\"mrgn-all-xs meta-post\" mat-button>View All Notfications</button>\n            </div>\n\t\t\t</div>\n\t\t</mat-card>\n\t</div>\n</div>\n<div fxLayout=\"row wrap\">\n\t<div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" *ngFor= \"let content of socialCard\">\n\t\t<ms-social-card [socialCard]=\"content\"></ms-social-card>\n\t</div>\n</div>\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\">\n\t<div fxFlex.gt-sm=\"33.33\" fxFlex=\"100\" *ngFor=\" let list of list\">\n\t\t<mat-card class=\"pad-t-none card-full-height\">\n\t\t\t<div class=\"gene-thumb no-gutter\"><img src=\"{{list.photo}}\"></div>\n\t\t\t<div class=\"gene-card-content\">\n\t\t\t\t<h3>{{list.title}}</h3>\n\t\t\t\t<p>{{list.desc}}</p> <span class=\"meta-post\">By: {{list.author}}, {{list.postdate}}</span> </div>\n\t\t\t<div class=\"gene-card-footer\">\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<button mat-icon-button>\n                     <mat-icon>share</mat-icon>\n                  </button>\n\t\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\n                     <mat-icon>favorite</mat-icon>\n                  </button>\n\t\t\t\t\t</div> <span fxFlex></span>\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</mat-card>\n\t</div>\n</div>\n<mat-menu #options=\"matMenu\" x-position=\"before\">\n\t<button mat-menu-item>\n      <mat-icon>settings</mat-icon> Settings </button>\n\t<button mat-menu-item>\n      <mat-icon>more</mat-icon> View More </button>\n\t<button mat-menu-item>\n      <mat-icon>notifications_off</mat-icon> Disable notifications </button>\n\t<button mat-menu-item>\n      <mat-icon>exit_to_app</mat-icon> Remove Panel </button>\n</mat-menu>\n"

/***/ }),

/***/ "./src/app/dashboard/saas/saas-component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/saas/saas-component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zYWFzL3NhYXMtY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/saas/saas.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/saas/saas.component.ts ***!
  \**************************************************/
/*! exports provided: SaasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaasComponent", function() { return SaasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
/* harmony import */ var _core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/route-animation/route.animation */ "./src/app/core/route-animation/route.animation.ts");
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




var SaasComponent = /** @class */ (function () {
    function SaasComponent(pageTitleService, translate) {
        var _this = this;
        this.pageTitleService = pageTitleService;
        this.translate = translate;
        this.rows = [];
        this.lat = 50.937531;
        this.lng = 6.960278600000038;
        //stat card content
        this.statsCard = [
            {
                card_color: "primary-bg",
                title: "Today Views",
                number: "22,520",
                icon: "remove_red_eye",
                tourAnchor: "tour-ui"
            },
            {
                card_color: "warn-bg",
                title: "Revenue",
                number: "1,425",
                icon: "attach_money"
            },
            {
                card_color: "accent-bg",
                title: "Item Sales",
                number: "6,101",
                icon: "assessment"
            },
            {
                card_color: "success-bg",
                title: "New Orders",
                number: "5,218",
                icon: "new_releases"
            }
        ];
        //live chat support content
        this.liveChatSupport = [
            {
                image: "assets/img/register-user-3.jpg",
                name: "Devy Finn",
                chat: "Hi There! Recently I updated the latest version of your app, it crashed every time when i open.Please help me out as soon as possible.....Thanks",
                time: "10 Min ago",
                classSendBy: "sender"
            },
            {
                image: "assets/img/register-user-1.jpg",
                name: "Sam Brown",
                chat: "Hi Devy, Can you please tell us your mobile configuraion.So that We can help you better.Please Also specify Version of your phone....Thank You!",
                time: "8 Min ago",
                classSendBy: "receiver"
            },
            {
                image: "assets/img/register-user-3.jpg",
                name: "Devy Finn",
                chat: "Thanks you for quick response. I using iPhone 6s and the version of this is 10.2 . Please fix this issue I need this right now....Thanks",
                time: "7 Min ago",
                classSendBy: "sender"
            },
            {
                image: "assets/img/register-user-1.jpg",
                name: "Sam Brown",
                chat: "Please wait for some time. Our tecnical support team will contact you soon and fix the issue .Thanks for using our App.We will Assit You better",
                time: "6 Min ago",
                classSendBy: "receiver"
            }
        ];
        //traffic source content
        this.trafficSource = [
            {
                title: "Direct",
                icon: "arrow_drop_up",
                progress: 30,
                progress_color: "primary",
                icon_color: "text-alert"
            },
            {
                title: "Referral",
                icon: "arrow_drop_down",
                progress: 20,
                progress_color: "warn",
                icon_color: "text-danger"
            },
            {
                title: "Social",
                icon: "arrow_drop_up",
                progress: 60,
                progress_color: "accent",
                icon_color: "text-alert"
            },
            {
                title: "Internet",
                icon: "arrow_drop_up",
                progress: 70,
                progress_color: "primary",
                icon_color: "text-alert"
            },
            {
                title: "Ads",
                icon: "arrow_drop_up",
                progress: 85,
                progress_color: "warn",
                icon_color: "text-alert"
            }
        ];
        //notification content
        this.notificationContent = [
            {
                notification: "Site goes is down for 6 hours due to maintainance and bug fixing.Please Check",
                card_color: "warn-bg"
            },
            {
                notification: "New users from March is promoted as special benefit under promotional offer of 30%.",
                card_color: "success-bg"
            },
            {
                notification: "Bug detected from the development team at the cart module of Fashion store.",
                card_color: "primary-bg"
            }
        ];
        //social card content 
        this.socialCard = [
            {
                card_color: "primary-bg",
                icon: "fa-facebook",
                name: "FACEBOOK",
                follows: "41"
            },
            {
                card_color: "accent-bg",
                icon: "fa-twitter",
                name: "TWITTER",
                follows: "87"
            },
            {
                card_color: "warn-bg",
                icon: "fa-google-plus",
                name: "GOOGLE PLUS",
                follows: "17"
            }
        ];
        this.todos = [
            { newTodo: "Add widget to another site", completed: false },
            { newTodo: "Update the server no 2", completed: false },
            { newTodo: "Clean all junks now", completed: false },
            { newTodo: "Admin template optimize", completed: false },
            { newTodo: "Set record on piano tiles 2", completed: false },
            { newTodo: "Buy a fish for home", completed: false },
            { newTodo: "Wash the ear for holiday", completed: true },
            { newTodo: "Complete your task till Monday", completed: false },
            { newTodo: "Send mail to client", completed: false },
            { newTodo: "Submission of Project", completed: false },
            { newTodo: "Unit Testting for Errors", completed: false },
            { newTodo: "Resolving testing points", completed: false },
            { newTodo: "Analyis the whole project", completed: false },
        ];
        // Doughnut
        this.doughnutChartLabels = ['Bounce', 'Open', 'Unsuscribe'];
        this.doughnutChartData = [500, 250, 150];
        this.doughnutChartType = 'doughnut';
        this.doughnutChartColors = [{
                backgroundColor: ['#32CBD8', '#E8C63B', '#f0f2f7']
            }];
        this.doughnutChartOptions = {
            responsive: true,
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                }
            }
        };
        //Manage List
        this.list = [{
                title: "5 Text editor that are free",
                photo: "assets/img/post1.jpg",
                desc: "Repellendus ipsum illum optio sequi at iste. Odit molestiae, voluptatem dignissimos. Necessitatibus dolore tempora error quia minus! Esse, quidem, impedit. Delectus itaque impedit excepturi.",
                author: "Admin",
                postdate: "3 Days Ago"
            }, {
                title: "Know more about To Do List",
                photo: "assets/img/post2.jpg",
                desc: "Repellendus ipsum illum optio sequi at iste. Odit molestiae, voluptatem dignissimos. Necessitatibus dolore tempora error quia minus! Esse, quidem, impedit. Delectus itaque impedit excepturi.",
                author: "Help Desk",
                postdate: "1 Days Ago"
            }, {
                title: "Latest Angular Admin Themes",
                photo: "assets/img/post3.jpg",
                desc: "Repellendus ipsum illum optio sequi at iste. Odit molestiae, voluptatem dignissimos. Necessitatibus dolore tempora error quia minus! Esse, quidem, impedit. Delectus itaque impedit excepturi.",
                author: "Kenny",
                postdate: "3 Hrous Ago"
            }];
        // Yearly sales
        this.barChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        this.barChartType = 'bar';
        this.barChartLegend = false;
        this.barChartData = [
            { data: [9, 6, 7, 3, 4, 5, 4, 7, 9, 7], label: 'Series A' },
        ];
        this.barStackChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            scales: {
                xAxes: [{
                        stacked: false,
                        barThickness: 18,
                        display: true,
                        gridLines: {
                            color: 'rgba(0,0,0,0)',
                            zeroLineColor: 'rgba(0,0,0,0)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 10
                        }
                    }],
                yAxes: [{
                        stacked: true,
                        barThickness: 18,
                        gridLines: {
                            color: 'rgba(255, 255, 255, 0.4)',
                            zeroLineColor: 'rgba(255, 255, 255, 0.4)'
                        }
                    }]
            }
        };
        this.barChartColors = [{
                backgroundColor: '#fff',
                borderColor: 'rgba(0, 151, 167, 1)',
            }];
        // Bubble Chart
        this.bubbleChartData = [{
                data: [{
                        x: 1,
                        y: 2,
                        r: 18,
                    }, {
                        x: 1,
                        y: 8,
                        r: 12,
                    }, {
                        x: 3,
                        y: 6,
                        r: 12,
                    }, {
                        x: 5,
                        y: 8,
                        r: 18,
                    }, {
                        x: 7,
                        y: 4,
                        r: 12,
                    }, {
                        x: 9,
                        y: 2,
                        r: 15,
                    }, {
                        x: 9,
                        y: 9,
                        r: 12,
                    }],
                label: 'Series A',
                borderWidth: 1
            }];
        this.bubbleChartType = 'bubble';
        this.bubbleChartColors = [{
                backgroundColor: 'rgba(67, 210, 158, 1)',
                borderColor: 'rgba(67, 210, 158, 1)',
                pointBackgroundColor: 'rgba(67, 210, 158, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(67, 210, 158, 0.8)'
            }];
        this.bubbleChartOptions = {
            responsive: true,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0)',
                            zeroLineColor: 'rgba(0,0,0,0)',
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 10
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.09)',
                            zeroLineColor: 'rgba(0,0,0,0.09)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 10
                        }
                    }]
            }
        };
        this.customStyle = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }];
        // lineChart
        this.lineChartData = [
            { data: [90, 150, 80, 300, 90, 290, 350, 200, 80, 100, 220, 230, 310, 230, 150, 180, 120, 150], label: 'Series A' },
            { data: [110, 90, 150, 130, 290, 210, 200, 80, 80, 110, 320, 310, 50, 170, 210, 310, 150, 80, 450], label: 'Series B' },
        ];
        this.lineChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
        this.lineChartOptions = {
            responsive: true,
            scales: {
                xAxes: [{
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 450
                        }
                    }]
            }
        };
        this.lineChartColors = [{
                backgroundColor: 'rgba(235, 78, 54, 0.2)',
                borderColor: 'rgba(235, 78, 54, 1)',
                pointBackgroundColor: 'rgba(235, 78, 54, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(235, 78, 54, 0.8)'
            }, {
                backgroundColor: 'rgba(0, 151, 167, 0.2)',
                borderColor: 'rgba(0, 151, 167, 1)',
                pointBackgroundColor: 'rgba(0, 151, 167, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(0, 151, 167, 0.8)'
            }];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        // Team
        this.team = [{
                name: 'Isabela Phelaps',
                photo: 'assets/img/user-1.jpg',
                post: 'Sr.Manager',
            }, {
                name: 'Trevor Hansen',
                photo: 'assets/img/user-2.jpg',
                post: 'Manager',
            }, {
                name: 'Sandra Adams',
                photo: 'assets/img/user-3.jpg',
                post: 'Engineer',
            }, {
                name: 'Sandy Smith',
                photo: 'assets/img/user-4.jpg',
                post: 'Engineer',
            }, {
                name: 'Rosy Wonn',
                photo: 'assets/img/user-5.jpg',
                post: 'Jr.Engineer',
            }, {
                name: 'Alex Roddy',
                photo: 'assets/img/user-6.jpg',
                post: 'Jr.Engineer',
            }];
        this.fetch(function (data) { _this.rows = data; });
        this.newTodo = '';
    }
    SaasComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Home");
    };
    // project table
    SaasComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/projects.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    //addTodo method is used to add a new item into ToDo List.
    SaasComponent.prototype.addTodo = function (event) {
        this.todoObj = {
            newTodo: this.newTodo,
            completed: false
        };
        this.todos.push(this.todoObj);
        this.newTodo = '';
        event.preventDefault();
    };
    SaasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-dashboard',
            template: __webpack_require__(/*! ./saas-component.html */ "./src/app/dashboard/saas/saas-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./saas-component.scss */ "./src/app/dashboard/saas/saas-component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], SaasComponent);
    return SaasComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/web-analytics/webanalytics-component.html":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/web-analytics/webanalytics-component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center stretch\">\n\t<div fxFlex=\"100%\" fxFlex.md=\"49.5%\" fxFlex.sm=\"100%\" fxFlex.gt-md>\n\t\t<mat-card class=\"card-full-height\">\n\t\t\t<ms-pie-chart [data]=\"pieChartDemoData\" title=\"Audience\" textColor=\"#222328\"></ms-pie-chart>\n\t\t</mat-card>\n\t</div>\n\t<div fxFlex=\"100%\" fxFlex.md=\"49.5%\" fxFlex.sm=\"100%\" fxFlex.gt-md>\n\t\t<div fxLayout=\"row\" class=\"full-wid\" fxLayoutAlign=\"start {{card.flex}}\" *ngFor=\"let card of saleCard\">\n\t\t<mat-card class=\"card-full-width\">\n\t\t\t<div class=\"gene-card-title\">\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t<div fxLayout=\"column\">\n\t\t\t\t\t   <h4>{{card.title|translate}}</h4>\n\t\t\t\t\t</div> <span fxFlex></span>\n\t\t\t\t\t<button mat-icon-button>\n\t\t\t\t\t   <mat-icon>sync</mat-icon>\n\t\t\t\t\t</button>\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\n\t\t\t\t\t   <mat-icon>more_horiz</mat-icon>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t</div>\n\t\t\t<ms-sale-card [saleCardContent]=\"card\"></ms-sale-card>\n\t\t</mat-card>\n      </div>\n\t</div>\n\t<div fxFlex=\"100%\" fxFlex.sm=\"100%\" fxFlex.gt-md>\n\t\t<mat-card class=\"card-full-height\">\n\t\t\t<div class=\"gene-card-title\">\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t<div fxLayout=\"column\">\n\t\t\t\t\t\t<h4>{{'Grow Sales'|translate}}</h4>\n\t\t\t\t\t</div> <span fxFlex></span>\n\t\t\t\t\t<button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n\t\t\t\t</div>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t</div>\n\t\t\t<div class=\"gene-card-content user-profile-wrap\">\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"primary-bg no-gutter user-profile-content\">\n\t\t\t\t\t<div fxLayout=\"column\"> <img src=\"assets/img/user-12.jpg\" class=\"img-circle\"></div>\n\t\t\t\t\t<div class=\"mrgn-l-md\">\n\t\t\t\t\t\t<h3>Emmi Michel</h3> <span>Senior Developer</span></div>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"user-profile-list list-style-none pad-t-md\">\n\t\t\t\t\t<li> <span>524 barrows Causway</span> </li>\n\t\t\t\t\t<li> <span>loremipsum@example.org</span> </li>\n\t\t\t\t\t<li> <span>123-4569-7890</span> </li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"social-icons mrgn-b-md\">\n\t\t\t\t\t<ul class=\"gene-list list-inline\">\n\t\t\t\t\t\t<li> <a><i class=\"fa fa-facebook\"></i>556</a> </li>\n\t\t\t\t\t\t<li> <a><i class=\"fa fa-pinterest\"></i>62</a> </li>\n\t\t\t\t\t\t<li> <a><i class=\"fa fa-twitter\"></i>108</a> </li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t<button mat-button class=\"primary-bg\">Send Message</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</mat-card>\n\t</div>\n</div>\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\n\t<div fxFlex=\"100\" fxFlex.lg=\"50\" fxFlex.sm=\"100\" fxFlex.gt-md=\"60\">\n\t\t<mat-card class=\"card-full-height\">\n\t\t\t<div class=\"gene-card-title\">\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t<div fxLayout=\"column\">\n\t\t\t\t\t\t<h4>{{'Browser Stack'|translate}}</h4>\n\t\t\t\t\t</div> <span fxFlex></span>\n\t\t\t\t\t<button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n\t\t\t\t</div>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t</div>\n         <ms-browser-stack [barChartData]=\"barChartData\" [barChartLabels]=\"barChartLabels\" [barStackChartOptions]=\"barStackChartOptions\" [barChartColors]=\"barChartColors\" [barChartLegend]=\"barChartLegend\" [barChartType]=\"barChartType\"></ms-browser-stack>\n\t\t</mat-card>\n\t</div>\n\t<div fxFlex=\"100\" fxFlex.lg=\"50\" fxFlex.sm=\"100\" fxFlex.gt-md=\"40\">\n\t\t<div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayout=\"row wrap\" class=\"height-full\">\n\t\t\t<div class=\"social-col\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"50\" *ngFor=\"let content of socialCardContent\">\n\t\t\t\t<ms-social-card-v2 [socialCardContent]=\"content\"></ms-social-card-v2>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\">\n\t<div fxFlex=\"100%\" fxFlex.md=\"49.5%\" fxFlex.sm=\"100%\" fxFlex.gt-md>\n\t\t<mat-card class=\"card-full-height\">\n\t\t\t<div class=\"gene-card-title\">\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\t\t\t\t\t<div fxLayout=\"column\">\n\t\t\t\t\t\t<h4>{{'Chating'|translate}}</h4>\n\t\t\t\t\t</div> <span fxFlex></span>\n\t\t\t\t\t<button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n\t\t\t\t</div>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t</div>\n\t\t\t<div class=\"gene-card-content dash-chat\">\n            <perfect-scrollbar class=\" set-list-scroll\">\n               <div *ngFor=\" let chat of chats\" [ngClass]=\"{'gene-sender': chat.admin }\">\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\" class=\"mrgn-b-md\">\n                     <div class=\"dash-thumb\" fxFlex.gt-sm=\"50px\" fxFlex.gt-xs=\"50px\" fxFlex=\"50px\">\n                        <img class=\"img-circle\" src=\"{{chat.photo}}\" alt=\"User Image\" width=\"50\" height=\"50\">\n                     </div>\n                     <div class=\"pad-wrap dash-content\" fxFlex.gt-sm=\"calc(100% - 50px)\" fxFlex.gt-xs=\"calc(100% - 50px)\" fxFlex=\"100\">\n                        <div class=\"\">\n                           <div class=\"pad-all-md border-rad-base\" [ngClass]=\"{'primary-bg': chat.admin === true, 'accent-bg': chat.admin=== false }\">\n                              <h5 class=\"\">{{chat.title}}</h5>\n                              <p class=\"margin-none\">{{chat.desc}}</p>\n                           </div>\n                           <div>\n                              <h5 class=\"meta-post\">{{chat.chatdate}} <i class=\"fa fa-reply mrgn-l-r-sm\" aria-hidden=\"true\"></i></h5>\n                           </div>\n                        </div>\n                     </div>\n                     <span fxFlex></span>\n                  </div>\n               </div>\n            </perfect-scrollbar>\n\t\t\t</div>\n\t\t</mat-card>\n\t</div>\n\t<div fxFlex=\"100%\" fxFlex.md=\"49.5%\" fxFlex.sm=\"100%\" fxFlex.gt-md>\n\t\t<mat-card class=\"card-full-height\">\n\t\t\t<div class=\"gene-card-title\">\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\t\t\t\t\t<div fxLayout=\"column\">\n\t\t\t\t\t\t<h4>{{'Message'|translate}}</h4>\n\t\t\t\t\t</div> <span fxFlex></span>\n\t\t\t\t\t<button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n\t\t\t\t</div>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t</div>\n\t\t\t<div class=\"gene-card-content msg-wrapper\">\n            <perfect-scrollbar class=\" set-list-scroll\">\n               <div *ngFor=\" let msg of message\">\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\" class=\"mrgn-b-md gene-relative msg-wrap-list\">\n                     <div class=\"dash-thumb gene-relative\" fxFlex.gt-sm=\"50px\" fxFlex.gt-xs=\"50px\" fxFlex=\"50px\">\n                        <img class=\"img-circle\" src=\"{{msg.photo}}\" alt=\"User Image\" width=\"50\" height=\"50\">\n                        <i class=\"fa fa-circle gene-absolute warn-text\"></i>\n                     </div>\n                     <div class=\"pad-wrap dash-content\" fxFlex.gt-sm=\"calc(100% - 50px)\" fxFlex.gt-xs=\"calc(100% - 50px)\" fxFlex=\"100\">\n                        <div class=\"border-rad-base\">\n                           <span class=\"font-bold\">{{msg.title}}</span>\n                           <p class=\"margin-none\">{{msg.desc}}</p>\n                        </div>\n                        <div> \n                           <h5 class=\"meta-post\">{{msg.msgdate}}</h5> \n                        </div> \n                        <a href=\"#/\" class=\"gene-absolute primary-text\">\n                           <i class=\"fa fa-reply mrgn-l-r-sm\" aria-hidden=\"true\"></i>\n                        </a> \n                     </div> \n                     <span fxFlex></span>\n                  </div>\n               </div>\n            </perfect-scrollbar>\n\t\t\t</div>\n\t\t</mat-card>\n\t</div>\n\t<div fxFlex=\"100%\" fxFlex.sm=\"100%\" fxFlex.gt-md>\n\t\t<mat-card class=\"card-full-height\">\n\t\t\t<div class=\"gene-card-title\">\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\t\t\t\t\t<div fxLayout=\"column\">\n\t\t\t\t\t\t<h4>{{'Ticket'|translate}}</h4>\n\t\t\t\t\t</div> <span fxFlex></span>\n\t\t\t\t\t<button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n\t\t\t\t</div>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t</div>\n\t\t\t<div class=\"gene-card-content\">\n            <perfect-scrollbar class=\"set-list-scroll\">\n               <div *ngFor=\" let ticket of tickets\" class=\"ticket-list-item\">\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\" class=\"mrgn-b-md gene-relative msg-wrap-list\">\n                     <div class=\"dash-thumb gene-relative\" fxFlex.gt-sm=\"50px\" fxFlex.gt-xs=\"50px\" fxFlex=\"50px\"> \n                        <img class=\"img-circle\" src=\"{{ticket.photo}}\" alt=\"User Image\" width=\"50\" height=\"50\"> \n                     </div>\n                     <div class=\"pad-wrap dash-content\" fxFlex.gt-sm=\"calc(100% - 50px)\" fxFlex.gt-xs=\"calc(100% - 50px)\" fxFlex=\"100\">\n                        <div class=\"border-rad-base\">\n                           <span class=\"font-bold\">{{ticket.title}}</span>\n                           <p class=\"mrgn-b-xs\">{{ticket.desc}}</p>\n                        </div>\n                        <div> \n                           <h5 class=\"label primary-bg border-rad-base\">{{ticket.status}}</h5>\n                        </div>\n                     </div> \n                     <span fxFlex></span> \n                  </div>\n               </div>\n            </perfect-scrollbar>\n\t\t\t</div>\n\t\t</mat-card>\n\t</div>\n</div>\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\">\n\t<div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n\t\t<mat-card class=\"card-full-height\">\n\t\t\t<div class=\"gene-wheather-widget\">\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center gene-today-wheather\">\n\t\t\t\t\t<div fxLayout=\"column\">\n\t\t\t\t\t\t<h2>Monday</h2>\n\t\t\t\t\t\t<h2>7th May 2017</h2>\n\t\t\t\t\t\t<h2>12:26 PM</h2>\n\t\t\t\t\t</div> <span fxFlex></span>\n\t\t\t\t\t<div class=\"current-day  gene-relative\"> <img src=\"assets/img/rain-snow.png\" alt=\"Wheathe icon\" width=\"270\" height=\"270\"> <span class=\"current-temp gene-absolute\">32F</span> </div>\n\t\t\t\t\t<!-- <mat-divider></mat-divider> -->\n\t\t\t\t</div>\n\t\t\t\t<div class=\"wheather-info\">\n\t\t\t\t\t<h5 class=\"mrgn-b-lg\">Weather info</h5>\n\t\t\t\t\t<ul class=\"gene-list\">\n\t\t\t\t\t\t<li><span class=\"info-head\"></span> Wind <span class=\"info-data\">16km/h</span></li>\n\t\t\t\t\t\t<li><span class=\"info-head\"></span> Sunrise <span class=\"info-data\">07:15</span></li>\n\t\t\t\t\t\t<li><span class=\"info-head\"></span> Humanfeel <span class=\"info-data\">32F</span></li>\n\t\t\t\t\t\t<li><span class=\"info-head\"></span> Sunset <span class=\"info-data\">21</span></li>\n\t\t\t\t\t\t<li><span class=\"info-head\"></span> Pressure <span class=\"info-data\">22In</span></li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"wheather-future-day\">\n\t\t\t\t\t<ul class=\"list-inline-block gene-list\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<img src=\"assets/img/hail.png\" alt=\"Wheathe icon\" width=\"270\" height=\"270\">\n\t\t\t\t\t\t\t<span class=\"gene-block\">Tue</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<img src=\"assets/img/hail.png\" alt=\"Wheathe icon\" width=\"270\" height=\"270\">\n\t\t\t\t\t\t\t<span class=\"gene-block\">Wed</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<img src=\"assets/img/partly-cloudy.png\" alt=\"Wheathe icon\" width=\"270\" height=\"270\">\n\t\t\t\t\t\t\t<span class=\"gene-block\">Thu</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<img src=\"assets/img/hail.png\" alt=\"Wheathe icon\" width=\"270\" height=\"270\">\n\t\t\t\t\t\t\t<span class=\"gene-block\">Fri</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<img src=\"assets/img/partly-sunny.png\" alt=\"Wheathe icon\" width=\"270\" height=\"270\">\n\t\t\t\t\t\t\t<span class=\"gene-block\">Sat</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<img src=\"assets/img/hail.png\" alt=\"Wheathe icon\" width=\"270\" height=\"270\">\n\t\t\t\t\t\t\t<span class=\"gene-block\">Sun</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<img src=\"assets/img/hail.png\" alt=\"Wheathe icon\" width=\"270\" height=\"270\">\n\t\t\t\t\t\t\t<span class=\"gene-block\">Mon</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</mat-card>\n\t</div>\n\t<div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n\t\t<mat-card class=\"card-full-height\">\n\t\t\t<div class=\"gene-card-title\">\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\t\t\t\t\t<div fxLayout=\"column\">\n\t\t\t\t\t\t<h4>{{'User Activity'|translate}}</h4>\n               </div> \n               <span fxFlex></span>\n\t\t\t\t\t<button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n\t\t\t\t</div>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t</div>\n\t\t\t<div class=\"gene-card-content activity-wrappper\">\n\t\t\t\t<div *ngFor=\" let activity of activities\">\n\t\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start start\" class=\"mrgn-b-md gene-relative msg-wrap-list\">\n\t\t\t\t\t\t<div class=\"dash-thumb gene-relative\" fxFlex.gt-sm=\"50px\" fxFlex.gt-xs=\"50px\" fxFlex=\"50px\">\n                     <img class=\"img-circle\" src=\"{{activity.photo}}\" alt=\"User Image\" width=\"50\" height=\"50\">\n                  </div>\n\t\t\t\t\t\t<div class=\"pad-wrap dash-content\" fxFlex.gt-sm=\"calc(100% - 50px)\" fxFlex.gt-xs=\"calc(100% - 50px)\" fxFlex=\"100\">\n\t\t\t\t\t\t\t<div class=\"border-rad-base\"> <span class=\"primary-text gene-text-xl\">{{activity.title}}</span>\n\t\t\t\t\t\t\t\t<p class=\"mrgn-b-xs\">{{activity.desc}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n                        <h5 class=\"meta-post\">{{activity.activitydate}}</h5>\n                     </div>\n                  </div> \n                  <span fxFlex></span> \n               </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</mat-card>\n\t</div>\n</div>\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\">\n\t<div fxFlex.gt-md=\"50\" fxFlex=\"100\">\n\t\t<div fxLayout=\"row wrap\" class=\"height-full\" fxLayoutAlign=\"start stretch\">\n\t\t\t<div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-sm=\"50\"fxFlex.gt-md=\"50\" *ngFor=\"let content of serverCardContent\">\n\t\t\t\t<ms-server-card [serverCard]=\"content\"></ms-server-card>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div fxFlex.gt-md=\"50\" fxFlex=\"100\">\n\t\t<mat-card class=\"card-full-height\">\n\t\t\t<div class=\"gene-card-title\">\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\t\t\t\t\t<div fxLayout=\"column\">\n\t\t\t\t\t\t<h4>{{'Live Chart Support'|translate}}</h4>\n               </div> \n               <span fxFlex></span>\n\t\t\t\t\t<button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n\t\t\t\t</div>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t</div>\n\t\t\t<ms-live-chart-support [polarAreaChartData]=\"polarAreaChartData\" [polarAreaChartLabels]=\"polarAreaChartLabels\" [polarChartColors]=\"polarChartColors\" [polarAreaChartType]=\"polarAreaChartType\"></ms-live-chart-support>\n\t\t</mat-card>\n\t</div>\n</div>\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\n\t<div fxFlex.gt-sm=\"100\" fxFlex=\"100\">\n\t\t<ms-stacked-area-chart fxFlex=\"100%\" [data]=\"stackedAreaChartData\" [options]=\"stackedAreaChartOptions\"></ms-stacked-area-chart>\n\t</div>\n</div>\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\">\n\t<div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n\t\t<mat-card class=\"card-full-height\">\n\t\t\t<div class=\"gene-card-title\">\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start start\">\n\t\t\t\t\t<div fxLayout=\"column\">\n\t\t\t\t\t\t<h4>{{'Mixed Chart'|translate}}</h4>\n               </div> \n               <span fxFlex></span>\n\t\t\t\t\t<button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n\t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n\t\t\t\t</div>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t</div>\n\t\t\t<ms-mixed-chart [mixedPointChartData]=\"mixedPointChartData\" [mixedChartLabels]=\"mixedChartLabels\" [mixedChartOptions]=\"mixedChartOptions\" [mixedChartColors]=\"mixedChartColors\" [mixedChartLegend]=\"mixedChartLegend\" [barChartType]=\"barChartType\"></ms-mixed-chart>\n\t\t</mat-card>\n\t</div>\n\t<div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n\t\t<ms-line-chart title=\"{{'Memory Usage'|translate}}\" textColor=\"#000\" chartColor=\"#1565C0\" [data]=\"lineChartDemoData\"> </ms-line-chart>\n\t</div>\n</div>\n<mat-menu #options=\"matMenu\" x-position=\"before\">\n\t<button mat-menu-item>\n         <mat-icon>settings</mat-icon> Settings </button>\n\t<button mat-menu-item>\n         <mat-icon>more</mat-icon> View More </button>\n\t<button mat-menu-item>\n         <mat-icon>notifications_off</mat-icon> Disable notifications </button>\n\t<button mat-menu-item>\n         <mat-icon>exit_to_app</mat-icon> Remove Panel </button>\n</mat-menu>\n"

/***/ }),

/***/ "./src/app/dashboard/web-analytics/webanalytics-component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/web-analytics/webanalytics-component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC93ZWItYW5hbHl0aWNzL3dlYmFuYWx5dGljcy1jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/web-analytics/webanalytics.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/web-analytics/webanalytics.component.ts ***!
  \*******************************************************************/
/*! exports provided: WebAnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAnalyticsComponent", function() { return WebAnalyticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_widgetDemoData_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/widgetDemoData.data */ "./src/app/data/widgetDemoData.data.ts");
/* harmony import */ var _data_stackedAreaChart_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/stackedAreaChart.data */ "./src/app/data/stackedAreaChart.data.ts");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
/* harmony import */ var _core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/route-animation/route.animation */ "./src/app/core/route-animation/route.animation.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WebAnalyticsComponent = /** @class */ (function () {
    function WebAnalyticsComponent(pageTitleService, translate) {
        this.pageTitleService = pageTitleService;
        this.translate = translate;
        this.rows = [];
        this.saleCard = [
            {
                flex: "start",
                title: "Quality Sold",
                status: "-2% Than last year",
                sold_out: "4216/10,540",
                percent: "40",
                text_color: "warn-text",
                options: {
                    barColor: '#E53935',
                    trackColor: '#f0f2f9',
                    scaleColor: '#dfe0e0',
                    scaleLength: 0,
                    lineCap: 'round',
                    lineWidth: 3,
                    size: 125,
                    rotate: 0,
                    animate: {
                        duration: 3000,
                        enabled: true
                    }
                }
            },
            {
                flex: "end",
                title: "Grow Sales",
                status: "+2.5% Than last year",
                price: "$45,815",
                percent: "68",
                options: {
                    barColor: '#66BB6A',
                    trackColor: '#f0f2f9',
                    scaleColor: '#dfe0e0',
                    scaleLength: 0,
                    lineCap: 'round',
                    lineWidth: 3,
                    size: 125,
                    rotate: 0,
                    animate: {
                        duration: 3000,
                        enabled: true
                    }
                }
            }
        ];
        //social card content 
        this.socialCardContent = [
            {
                name: "Facebook",
                text_color: "primary-text",
                icon: "fa-facebook",
                budget: "4650",
                growth: "2.40"
            },
            {
                name: "Google +",
                text_color: "success-text",
                icon: "fa-google-plus",
                budget: "2875",
                growth: "1.50"
            },
            {
                name: "Twitter",
                text_color: "accent-text",
                icon: "fa-twitter",
                budget: "1024",
                growth: "1.08"
            },
            {
                name: "Youtube",
                text_color: "warn-text",
                icon: "fa-youtube",
                budget: "4047",
                growth: "3.88"
            }
        ];
        //server card content 
        this.serverCardContent = [
            {
                title: "Server AntiTheft",
                validity: "24/Mo",
                icon: "fa-shield",
                validity_color: "primary-bg",
                content: "We provide full insurance against any aspect of Server Secuity.We provide better solution for server"
            },
            {
                title: "24*7 Assistance",
                validity: "12/Mo",
                icon: "fa-life-ring",
                content: "We always here to help you anytime.Contact us on our customer care helpline for more information",
                validity_color: "accent-bg"
            },
            {
                title: "NextGen Server",
                validity: "18/Mo",
                icon: "fa-server",
                content: "We provide 3rd generation server for your site.Which provide good speed in data processing and security",
                validity_color: "warn-bg"
            },
            {
                title: "Cloud Pro",
                validity: "14/Mo",
                icon: "fa-sellsy",
                content: "For backup, we provide cloud storage which is highly secure and you can access data anytime and everywhere",
                validity_color: "success-bg"
            }
        ];
        // Browser Stats
        this.barStackChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            scales: {
                xAxes: [{
                        stacked: false,
                        barThickness: 35,
                        display: true,
                        gridLines: {
                            color: 'rgba(0,0,0,0)',
                            zeroLineColor: 'rgba(0,0,0,0)'
                        }
                    }],
                yAxes: [{
                        stacked: true,
                        barThickness: 35,
                        gridLines: {
                            color: 'rgba(0, 0, 0, 0.2)',
                            zeroLineColor: 'rgba(0, 0, 0, 0.2)'
                        }
                    }]
            }
        };
        this.barChartLabels = ['Safari', 'Chrome', 'Opera', 'IE+', 'Firefox'];
        this.barChartType = 'bar';
        this.barChartLegend = false;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56], label: 'Series A' },
            { data: [28, 48, 40, 19, 86], label: 'Series B' }
        ];
        this.barChartColors = [{
                backgroundColor: 'rgba(59, 85, 230, 1)',
                borderColor: 'rgba(59, 85, 230, 1)',
                pointBackgroundColor: 'rgba(59, 85, 230, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(59, 85, 230, 1)'
            }, {
                backgroundColor: 'rgba(240, 242, 247, 1)',
                borderColor: 'rgba(240, 242, 247, 1)',
                pointBackgroundColor: 'rgba(240, 242, 247, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(240, 242, 247, 1)'
            }];
        //Simple Bar Chart
        this.simpleBarChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
        this.simpleBarChartLegend = true;
        this.simpleBarChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Purchase' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Plans' },
            { data: [18, 38, 20, 9, 66, 37, 70], label: 'Services' }
        ];
        this.simpleBarStackChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            scales: {
                xAxes: [{
                        stacked: true,
                    }],
                yAxes: [{
                        stacked: true,
                    }]
            }
        };
        // PolarArea
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.polarAreaChartData = [300, 150, 350];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
        this.polarChartColors = [{
                backgroundColor: ['rgba(67, 210, 158, 0.8)', 'rgba(59, 85, 230, 0.8)', 'rgba(235, 78, 54, 0.8)']
            }];
        //Mixed Chart
        this.mixedChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
        this.mixedChartLegend = false;
        this.mixedPointChartData = [{
                data: [6, 5, 8, 8, 5, 5, 4],
                label: 'Series A',
                borderWidth: 3,
                type: 'line',
                fill: false
            }, {
                data: [5, 4, 5, 2, 6, 3, 5],
                label: 'Series B',
                borderWidth: 1,
                type: 'bar'
            }];
        this.mixedChartColors = [{
                backgroundColor: 'rgba(67, 210, 158, 1)',
                borderColor: 'rgba(67, 210, 158, 1)',
                pointBackgroundColor: 'rgba(67, 210, 158, 1)',
                pointBorderColor: 'rgba(67, 210, 158, 1)',
                pointHoverBackgroundColor: 'rgba(67, 210, 158, 1)',
                pointHoverBorderColor: 'rgba(67, 210, 158, 1)'
            }, {
                backgroundColor: 'rgba(240, 242, 247, 1)',
                borderColor: 'rgba(240, 242, 247, 1)',
                pointBackgroundColor: 'rgba(240, 242, 247, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(240, 242, 247, 1)'
            }];
        this.mixedChartOptions = {
            animation: false,
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9,
                        }
                    }]
            },
            responsive: true,
        };
        //User Activities
        this.activities = [{
                title: "Benn Holmes",
                photo: "assets/img/user-1.jpg",
                desc: "Changed his profile and last name.",
                activitydate: "25 min ago"
            }, {
                title: "Smith Collin",
                photo: "assets/img/user-2.jpg",
                desc: "Update the infomation regarding project 2.",
                activitydate: "19 min ago"
            }, {
                title: "Ellen Wood",
                photo: "assets/img/user-3.jpg",
                desc: "Updated 3 images from the post.",
                activitydate: "18 min ago"
            }, {
                title: "Gorrel Haze",
                photo: "assets/img/user-11.jpg",
                desc: "Delete Trash folder from the cloud storage.",
                activitydate: "18 min ago"
            }, {
                title: "Hema Mills",
                photo: "assets/img/user-9.jpg",
                desc: "Install the Project 2 and remove previous one.",
                activitydate: "3 min ago"
            },
            {
                title: "Mr. Terry",
                photo: "assets/img/user-7.jpg",
                desc: "Changed and resize site logo for Old Projects.",
                activitydate: "1 min ago"
            }];
        //Messages
        this.message = [{
                title: "Phil Fordy",
                photo: "assets/img/user-1.jpg",
                desc: "Thanks Guys! You Save our time. Highly Impressed with you guys.",
                msgdate: "15 min ago"
            }, {
                title: "Smith",
                photo: "assets/img/user-2.jpg",
                desc: "Happy with your support and product Well done guys.Best of Luck. ",
                msgdate: "10 min ago"
            }, {
                title: "Mccullam",
                photo: "assets/img/user-3.jpg",
                desc: "Nice work! Remarkable product and support.Thanks for Quick Response.",
                msgdate: "8 min ago"
            },
            {
                title: "Billy Wales",
                photo: "assets/img/user-6.jpg",
                desc: "This is the theme am looking for long time.Smooth, simple and light.",
                msgdate: "5 min ago"
            },
            {
                title: "Harry Smith",
                photo: "assets/img/user-5.jpg",
                desc: "Search ends here! Waiting for long time.Good Luck.",
                msgdate: "3 min ago"
            },
            {
                title: "David Brown",
                photo: "assets/img/user-4.jpg",
                desc: "Happy with customization of the theme ,Good Product With Good design.",
                msgdate: "2 min ago"
            }];
        //Tickets
        this.tickets = [{
                title: "Johh Rims",
                photo: "assets/img/register-user-1.jpg",
                desc: "Facebook link not open.",
                status: "Closed"
            }, {
                title: "Smith Collin",
                photo: "assets/img/register-user-2.jpg",
                desc: "Notice and warning in Site 2 ",
                status: "Progress"
            },
            {
                title: "Terry Blazes",
                photo: "assets/img/register-user-4.jpg",
                desc: "Unable to find updated images.",
                status: "Open"
            }, {
                title: "Mccullam Ted",
                photo: "assets/img/user-9.jpg",
                desc: "Problem In buying plans.",
                status: "Progress"
            },
            {
                title: "Mr. White",
                photo: "assets/img/user-10.jpg",
                desc: "Installation Setup not processed fully.",
                status: "Progress"
            }, {
                title: "David Vuen",
                photo: "assets/img/user-11.jpg",
                desc: "Problem In popup in Chrome",
                status: "Open"
            }];
        //Chat
        this.chats = [{
                title: "Maria Holmes",
                photo: "assets/img/user-8.jpg",
                desc: "Where I found documention of this theme and in documentation installation process is mentioned or not?",
                chatdate: "7 min ago",
                admin: true
            }, {
                title: "Kaity Linn",
                photo: "assets/img/user-11.jpg",
                desc: "Hi Maria.Thanks for buying our product.Yes,We provided full documentation along with installation Steps.",
                chatdate: "5 min ago",
                admin: false
            }, {
                title: "Maria Holmes",
                photo: "assets/img/user-8.jpg",
                desc: "Ya I found this under documentation folder.Thanks for your quick response.",
                chatdate: "3 min ago",
                admin: true
            }, {
                title: "Kaity Linn",
                photo: "assets/img/user-11.jpg",
                desc: "We are always here to help you. You may reach us anytime. ",
                chatdate: "2 min ago",
                admin: false
            }];
    }
    WebAnalyticsComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Web Analytics");
        this.lineChartDemoData = Object(_data_widgetDemoData_data__WEBPACK_IMPORTED_MODULE_1__["lineChartDemoDataGenerator"])();
        this.pieChartDemoData = _data_widgetDemoData_data__WEBPACK_IMPORTED_MODULE_1__["pieChartDemoData"];
        this.stackedAreaChartData = _data_stackedAreaChart_data__WEBPACK_IMPORTED_MODULE_2__["stackedAreaChartData"];
        this.stackedAreaChartOptions = {
            name: 'Sample Full Width Graph',
        };
    };
    WebAnalyticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-dashboard1',
            template: __webpack_require__(/*! ./webanalytics-component.html */ "./src/app/dashboard/web-analytics/webanalytics-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_4__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./webanalytics-component.scss */ "./src/app/dashboard/web-analytics/webanalytics-component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_3__["PageTitleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], WebAnalyticsComponent);
    return WebAnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/data/stackedAreaChart.data.ts":
/*!***********************************************!*\
  !*** ./src/app/data/stackedAreaChart.data.ts ***!
  \***********************************************/
/*! exports provided: stackedAreaChartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stackedAreaChartData", function() { return stackedAreaChartData; });
var january = new Date(2017, 0);
var february = new Date(2017, 1);
var march = new Date(2017, 2);
var april = new Date(2017, 3);
var may = new Date(2017, 4);
var june = new Date(2017, 5);
var july = new Date(2017, 6);
var august = new Date(2017, 7);
var september = new Date(2017, 8);
var october = new Date(2017, 9);
var november = new Date(2017, 10);
var december = new Date(2017, 11);
var stackedAreaChartData = [
    {
        "key": "Purchase",
        "color": "#2196F3",
        "values": [
            {
                "date": january,
                "value": 2356,
            },
            {
                "date": february,
                "value": 3212,
            },
            {
                "date": march,
                "value": 6163,
            },
            {
                "date": april,
                "value": 10573,
            },
            {
                "date": may,
                "value": 10123,
            },
            {
                "date": june,
                "value": 6876,
            },
            {
                "date": july,
                "value": 2567,
            },
            {
                "date": august,
                "value": 2856,
            },
            {
                "date": september,
                "value": 7323,
            },
            {
                "date": october,
                "value": 12978,
            },
            {
                "date": november,
                "value": 1876,
            },
            {
                "date": december,
                "value": 854,
            },
        ]
    },
    {
        "key": "Plan",
        "color": "#3F51B5",
        "values": [
            {
                "date": january,
                "value": 523,
            },
            {
                "date": february,
                "value": 873,
            },
            {
                "date": march,
                "value": 1503,
            },
            {
                "date": april,
                "value": 1321,
            },
            {
                "date": may,
                "value": 3215,
            },
            {
                "date": june,
                "value": 1803,
            },
            {
                "date": july,
                "value": 804,
            },
            {
                "date": august,
                "value": 2034,
            },
            {
                "date": september,
                "value": 1873,
            },
            {
                "date": october,
                "value": 1004,
            },
            {
                "date": november,
                "value": 1503,
            },
            {
                "date": december,
                "value": 325,
            },
        ]
    },
    {
        "key": "Services",
        "color": "#4CAF50",
        "values": [
            {
                "date": january,
                "value": 101,
            },
            {
                "date": february,
                "value": 235,
            },
            {
                "date": march,
                "value": 523,
            },
            {
                "date": april,
                "value": 325,
            },
            {
                "date": may,
                "value": 842,
            },
            {
                "date": june,
                "value": 602,
            },
            {
                "date": july,
                "value": 423,
            },
            {
                "date": august,
                "value": 752,
            },
            {
                "date": september,
                "value": 539,
            },
            {
                "date": october,
                "value": 352,
            },
            {
                "date": november,
                "value": 603,
            },
            {
                "date": december,
                "value": 231,
            },
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map