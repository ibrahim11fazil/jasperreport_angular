(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task-board-task-board-module"],{

/***/ "./src/app/task-board/task-board.module.ts":
/*!*************************************************!*\
  !*** ./src/app/task-board/task-board.module.ts ***!
  \*************************************************/
/*! exports provided: TaskBoardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskBoardModule", function() { return TaskBoardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _task_board_task_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task-board/task-board.component */ "./src/app/task-board/task-board/task-board.component.ts");
/* harmony import */ var _task_board_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task-board.routing */ "./src/app/task-board/task-board.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var TaskBoardModule = /** @class */ (function () {
    function TaskBoardModule() {
    }
    TaskBoardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_task_board_task_board_component__WEBPACK_IMPORTED_MODULE_8__["TaskBoardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_6__["DragulaModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_task_board_routing__WEBPACK_IMPORTED_MODULE_9__["TaskBoardRoutes"])
            ]
        })
    ], TaskBoardModule);
    return TaskBoardModule;
}());



/***/ }),

/***/ "./src/app/task-board/task-board.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/task-board/task-board.routing.ts ***!
  \**************************************************/
/*! exports provided: TaskBoardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskBoardRoutes", function() { return TaskBoardRoutes; });
/* harmony import */ var _task_board_task_board_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-board/task-board.component */ "./src/app/task-board/task-board/task-board.component.ts");

var TaskBoardRoutes = [
    {
        path: '',
        component: _task_board_task_board_component__WEBPACK_IMPORTED_MODULE_0__["TaskBoardComponent"]
    }
];


/***/ }),

/***/ "./src/app/task-board/task-board/task-board.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/task-board/task-board/task-board.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"taskboard-wrapper\">\t\n\t<div class=\"taskboard-title\">\n\t\t<mat-card class=\"mrgn-b-lg\">\n\t\t\t<h3>{{'Task Board'|translate}}</h3>\n\t\t</mat-card>\n\t</div>\t\n\t<mat-card class=\"pad-y-lg\">\n\t\t<div fxLayout=\"row wrap\">\n\t\t\t<div class=\"mrgn-b-md taskboard-col\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"25\"  fxFlex.lg=\"25\" fxFlex.xl=\"25\">\n\t\t\t\t<div class=\"taskboard-title\" fxLayoutAlign=\"center center\">\n\t\t\t\t\t<h4 class=\"margin-none\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t\t<mat-icon class=\"mrgn-r-sm\">menu</mat-icon>All\n\t\t\t\t\t</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"taskboard-content separator-line\" dragula=\"board\" [(dragulaModel)]=\"allTaskBoard\">\n\t\t\t\t\t<div *ngFor=\"let data of allTaskBoard\" fxLayout=\"column\">\t\n\t\t\t\t\t\t<mat-card >\n\t\t\t\t\t\t\t<div class=\"mrgn-b-md\" fxLayoutAlign=\"space-between center\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<h4 class=\"margin-none\">{{data.title}}</h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<button mat-icon-button><mat-icon class=\"mat-icon-grey gene-text-xl\">more_vert</mat-icon></button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mrgn-b-md\" fxLayoutAlign=\"space-between center\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<h5 class=\"margin-none\">{{data.message}}</h5>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor = \"let image of data.taskboard_image\">\n\t\t\t\t\t\t\t\t\t\t<img class=\"img-circle\" src=\"{{image}}\" width=\"20\" height=\"20\">\n\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mrgn-b-md\">\n\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"determinate\" value=\"{{data.value}}\"></mat-progress-bar>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-center\">\t\n\t\t\t\t\t\t\t\t<a class=\"primary-text\" href=\"\"><small>View More</small></a>\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t</mat-card>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\n\t\t\t</div>\n\t\t\t<div class=\"mrgn-b-md taskboard-col\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"25\"  fxFlex.lg=\"25\" fxFlex.xl=\"25\">\t\n\t\t\t\t<div class=\"taskboard-title\" fxLayoutAlign=\"center center\">\n\t\t\t\t\t<h4 class=\"margin-none\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t\t<mat-icon class=\"mrgn-r-sm\">list</mat-icon>To Do\n\t\t\t\t\t</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"taskboard-content separator-line\" dragula=\"board\" [(dragulaModel)]=\"todoTaskBoard\">\n\t\t\t\t\t<div *ngFor=\"let data of todoTaskBoard\" fxLayout=\"column\">\t\n\t\t\t\t\t\t<mat-card >\n\t\t\t\t\t\t\t<div class=\"mrgn-b-md\" fxLayoutAlign=\"space-between center\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<h4 class=\"margin-none\">{{data.title}}</h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<button mat-icon-button><mat-icon class=\"mat-icon-grey gene-text-xl\">more_vert</mat-icon></button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mrgn-b-md\" fxLayoutAlign=\"space-between center\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<h5 class=\"margin-none\">{{data.message}}</h5>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor = \"let image of data.taskboard_image\">\n\t\t\t\t\t\t\t\t\t\t<img class=\"img-circle\" src=\"{{image}}\" width=\"20\" height=\"20\">\n\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mrgn-b-md\">\n\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"determinate\" value=\"{{data.value}}\"></mat-progress-bar>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-center\">\t\n\t\t\t\t\t\t\t\t<a class=\"primary-text\" href=\"\"><small>View More</small></a>\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t</mat-card>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t<div class=\"mrgn-b-md taskboard-col\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"25\"  fxFlex.lg=\"25\" fxFlex.xl=\"25\">\n\t\t\t\t<div class=\"taskboard-title\" fxLayoutAlign=\"center center\">\t\n\t\t\t\t\t<h4 class=\"margin-none\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t\t<mat-icon class=\"mrgn-r-sm\">trending_up</mat-icon>Doing\n\t\t\t\t\t</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"taskboard-content separator-line\" dragula=\"board\" [(dragulaModel)]=\"doingTaskBoard\">\n\t\t\t\t\t<div *ngFor=\"let data of doingTaskBoard\" fxLayout=\"column\">\t\n\t\t\t\t\t\t<mat-card >\n\t\t\t\t\t\t\t<div class=\"mrgn-b-md\" fxLayoutAlign=\"space-between center\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<h4 class=\"margin-none\">{{data.title}}</h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<button mat-icon-button><mat-icon class=\"mat-icon-grey gene-text-xl\">more_vert</mat-icon></button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mrgn-b-md\" fxLayoutAlign=\"space-between center\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<h5 class=\"margin-none\">{{data.message}}</h5>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor = \"let image of data.taskboard_image\">\n\t\t\t\t\t\t\t\t\t\t<img class=\"img-circle\" src=\"{{image}}\" width=\"20\" height=\"20\">\n\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mrgn-b-md\">\n\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"determinate\" value=\"{{data.value}}\"></mat-progress-bar>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-center\">\t\n\t\t\t\t\t\t\t\t<a class=\"primary-text\" href=\"\"><small>View More</small></a>\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t</mat-card>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"mrgn-b-md taskboard-col\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"25\"  fxFlex.lg=\"25\" fxFlex.xl=\"25\">\n\t\t\t\t<div class=\"taskboard-title\" fxLayoutAlign=\"center center\">\t\n\t\t\t\t\t<h4 class=\"margin-none\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t\t<mat-icon class=\"mrgn-r-sm\">thumb_up</mat-icon>Done\n\t\t\t\t\t</h4>\n\t\t\t\t</div>\t\n\t\t\t\t<div class=\"taskboard-content\" dragula=\"board\" [(dragulaModel)]=\"doneTaskBoard\">\n\t\t\t\t\t<div *ngFor=\"let data of doneTaskBoard\" fxLayout=\"column\">\t\n\t\t\t\t\t\t<mat-card >\n\t\t\t\t\t\t\t<div class=\"mrgn-b-md\" fxLayoutAlign=\"space-between center\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<h4 class=\"margin-none\">{{data.title}}</h4>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<button mat-icon-button><mat-icon class=\"mat-icon-grey gene-text-xl\">more_vert</mat-icon></button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mrgn-b-md\" fxLayoutAlign=\"space-between center\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<h5 class=\"margin-none\">{{data.message}}</h5>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor = \"let image of data.taskboard_image\">\n\t\t\t\t\t\t\t\t\t\t<img class=\"img-circle\" src=\"{{image}}\" width=\"20\" height=\"20\">\n\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mrgn-b-md\">\n\t\t\t\t\t\t\t\t<mat-progress-bar mode=\"determinate\" value=\"{{data.value}}\"></mat-progress-bar>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-center\">\t\n\t\t\t\t\t\t\t\t<a class=\"primary-text\" href=\"\"><small>View More</small></a>\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t</mat-card>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div>\t\t\n\t\t\t<mat-card>\n\t\t\t\t<h4>Create New Task</h4>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<mat-form-field class=\"full-wid\">\n\t\t\t\t\t\t\t<input matInput placeholder=\"Title\" [(ngModel)]=\"title\">\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<mat-form-field class=\"full-wid\">\n\t\t\t\t\t\t\t<input matInput placeholder=\"Message\" [(ngModel)]=\"message\">\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</div>\t\n\t\t\t\t\t<button mat-raised-button color=\"primary\" (click)=\"onCreate()\">Create</button>\n\t\t\t</mat-card>\n\t\t</div>\n\t</mat-card>\t\t\n</div>\n\t\n"

/***/ }),

/***/ "./src/app/task-board/task-board/task-board.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/task-board/task-board/task-board.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".taskboard-wrapper .separator-line {\n  border-right: 1px solid rgba(0, 0, 0, 0.12); }\n\n@media screen and (max-width: 959px) {\n  .taskboard-wrapper .taskboard-col:nth-child(2) .separator-line {\n    border-right-width: 0; } }\n\n@media screen and (max-width: 599px) {\n  .taskboard-wrapper .separator-line {\n    border-right-width: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL3Rhc2stYm9hcmQvdGFzay1ib2FyZC90YXNrLWJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRU0sMkNBQTBDLEVBQUE7O0FBR2hEO0VBQ0c7SUFFTSxxQkFBb0IsRUFBQSxFQUN0Qjs7QUFHUDtFQUNHO0lBRU0scUJBQW9CLEVBQUEsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC90YXNrLWJvYXJkL3Rhc2stYm9hcmQvdGFzay1ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrYm9hcmQtd3JhcHBlcntcbiAgIC5zZXBhcmF0b3ItbGluZXtcbiAgICAgIGJvcmRlci1yaWdodDoxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTU5cHgpe1xuICAgLnRhc2tib2FyZC13cmFwcGVye1xuICAgICAgLnRhc2tib2FyZC1jb2w6bnRoLWNoaWxkKDIpIC5zZXBhcmF0b3ItbGluZXtcbiAgICAgICAgIGJvcmRlci1yaWdodC13aWR0aDowO1xuICAgICAgfVxuICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1OTlweCl7XG4gICAudGFza2JvYXJkLXdyYXBwZXJ7XG4gICAgICAuc2VwYXJhdG9yLWxpbmV7XG4gICAgICAgICBib3JkZXItcmlnaHQtd2lkdGg6MDtcbiAgICAgIH1cbiAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/task-board/task-board/task-board.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/task-board/task-board/task-board.component.ts ***!
  \***************************************************************/
/*! exports provided: TaskBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskBoardComponent", function() { return TaskBoardComponent; });
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



var TaskBoardComponent = /** @class */ (function () {
    function TaskBoardComponent(pageTitle, translate) {
        this.pageTitle = pageTitle;
        this.translate = translate;
        this.allTaskBoard = [
            {
                title: "Responsive",
                message: "Team",
                taskboard_image: ["assets/img/user-1.jpg", "assets/img/user-2.jpg", "assets/img/user-3.jpg", "assets/img/user-4.jpg", "assets/img/user-5.jpg"],
                value: "100",
                date: "May 17"
            },
            {
                title: "Checklist",
                message: "Team",
                taskboard_image: ["assets/img/user-1.jpg", "assets/img/user-2.jpg", "assets/img/user-3.jpg", "assets/img/user-4.jpg", "assets/img/user-5.jpg"],
                value: "0",
                date: "Apr 11"
            },
            {
                title: "Angular 7",
                message: "Team",
                taskboard_image: ["assets/img/user-1.jpg", "assets/img/user-2.jpg", "assets/img/user-3.jpg", "assets/img/user-4.jpg", "assets/img/user-5.jpg"],
                value: "50",
                date: "Aug 22"
            }
        ];
        this.todoTaskBoard = [
            {
                title: "Assessment",
                message: "Team",
                taskboard_image: ["assets/img/user-1.jpg", "assets/img/user-2.jpg", "assets/img/user-3.jpg", "assets/img/user-4.jpg", "assets/img/user-5.jpg"],
                value: "100",
                date: "Jun 19"
            },
            {
                title: "QA Testing",
                message: "Team",
                taskboard_image: ["assets/img/user-1.jpg", "assets/img/user-2.jpg", "assets/img/user-3.jpg", "assets/img/user-4.jpg", "assets/img/user-5.jpg"],
                value: "30",
                date: "May 17"
            },
            {
                title: "Navigation",
                message: "Team",
                taskboard_image: ["assets/img/user-1.jpg", "assets/img/user-2.jpg", "assets/img/user-3.jpg", "assets/img/user-4.jpg", "assets/img/user-5.jpg"],
                value: "0",
                date: "Apr 11"
            }
        ];
        this.doingTaskBoard = [
            {
                title: "Fields",
                message: "Team",
                taskboard_image: ["assets/img/user-1.jpg", "assets/img/user-2.jpg", "assets/img/user-3.jpg", "assets/img/user-4.jpg", "assets/img/user-5.jpg"],
                value: "70",
                date: "Aug 22"
            },
            {
                title: "Schedule",
                message: "Team",
                taskboard_image: ["assets/img/user-1.jpg", "assets/img/user-2.jpg", "assets/img/user-3.jpg", "assets/img/user-4.jpg", "assets/img/user-5.jpg"],
                value: "98",
                date: "Jun 19"
            },
            {
                title: "Budget",
                message: "Team",
                taskboard_image: ["assets/img/user-1.jpg", "assets/img/user-2.jpg", "assets/img/user-3.jpg", "assets/img/user-4.jpg", "assets/img/user-5.jpg"],
                value: "0",
                date: "May 17"
            }
        ];
        this.doneTaskBoard = [
            {
                title: "Material Design",
                message: "Team",
                taskboard_image: ["assets/img/user-1.jpg", "assets/img/user-2.jpg", "assets/img/user-3.jpg", "assets/img/user-4.jpg", "assets/img/user-5.jpg"],
                value: "0",
                date: "Apr 11"
            },
            {
                title: "Task board",
                message: "Team",
                taskboard_image: ["assets/img/user-1.jpg", "assets/img/user-2.jpg", "assets/img/user-3.jpg", "assets/img/user-4.jpg", "assets/img/user-5.jpg"],
                value: "68",
                date: "Aug 22"
            },
            {
                title: "Unit tests",
                message: "Team",
                taskboard_image: ["assets/img/user-1.jpg", "assets/img/user-2.jpg", "assets/img/user-3.jpg", "assets/img/user-4.jpg", "assets/img/user-5.jpg"],
                value: "100",
                date: "Jun 19"
            }
        ];
    }
    TaskBoardComponent.prototype.ngOnInit = function () {
        this.pageTitle.setTitle("Task Board");
    };
    /**
      * onCreate Method is used to create new Task Board.
      */
    TaskBoardComponent.prototype.onCreate = function () {
        if (this.message && this.title != "") {
            var create = {
                image: "assets/img/user-4.jpg",
                date: "8 May",
                title: this.title,
                message: this.message
            };
            this.allTaskBoard.push(create);
            this.title = "";
            this.message = "";
        }
    };
    TaskBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-task-board',
            template: __webpack_require__(/*! ./task-board.component.html */ "./src/app/task-board/task-board/task-board.component.html"),
            styles: [__webpack_require__(/*! ./task-board.component.scss */ "./src/app/task-board/task-board/task-board.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], TaskBoardComponent);
    return TaskBoardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=task-board-task-board-module.js.map