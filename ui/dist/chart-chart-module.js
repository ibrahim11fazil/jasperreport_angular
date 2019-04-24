(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chart-chart-module"],{

/***/ "./src/app/chart/chart.module.ts":
/*!***************************************!*\
  !*** ./src/app/chart/chart.module.ts ***!
  \***************************************/
/*! exports provided: ChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartModule", function() { return ChartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts/ng2-charts */ "./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng2modules_easypiechart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2modules-easypiechart */ "./node_modules/ng2modules-easypiechart/index.js");
/* harmony import */ var ng2modules_easypiechart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2modules_easypiechart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng2_charts_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ng2-charts/chart.component */ "./src/app/chart/ng2-charts/chart.component.ts");
/* harmony import */ var _easy_pie_chart_easy_pie_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./easy-pie-chart/easy-pie-chart.component */ "./src/app/chart/easy-pie-chart/easy-pie-chart.component.ts");
/* harmony import */ var _chart_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chart.routing */ "./src/app/chart/chart.routing.ts");
/* harmony import */ var _widget_component_widget_component_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../widget-component/widget-component.module */ "./src/app/widget-component/widget-component.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ChartModule = /** @class */ (function () {
    function ChartModule() {
    }
    ChartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_easy_pie_chart_easy_pie_chart_component__WEBPACK_IMPORTED_MODULE_9__["EasyPieChartComponent"], _ng2_charts_chart_component__WEBPACK_IMPORTED_MODULE_8__["ChartComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ChartsModule"],
                ng2modules_easypiechart__WEBPACK_IMPORTED_MODULE_4__["EasyPieChartModule"],
                _widget_component_widget_component_module__WEBPACK_IMPORTED_MODULE_11__["WidgetComponentModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_chart_routing__WEBPACK_IMPORTED_MODULE_10__["ChartRoutes"])
            ]
        })
    ], ChartModule);
    return ChartModule;
}());



/***/ }),

/***/ "./src/app/chart/chart.routing.ts":
/*!****************************************!*\
  !*** ./src/app/chart/chart.routing.ts ***!
  \****************************************/
/*! exports provided: ChartRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartRoutes", function() { return ChartRoutes; });
/* harmony import */ var _ng2_charts_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng2-charts/chart.component */ "./src/app/chart/ng2-charts/chart.component.ts");
/* harmony import */ var _easy_pie_chart_easy_pie_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./easy-pie-chart/easy-pie-chart.component */ "./src/app/chart/easy-pie-chart/easy-pie-chart.component.ts");


var ChartRoutes = [
    {
        path: '',
        redirectTo: 'ng2-charts',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'ng2-charts',
                component: _ng2_charts_chart_component__WEBPACK_IMPORTED_MODULE_0__["ChartComponent"]
            },
            {
                path: 'easy-pie-chart',
                component: _easy_pie_chart_easy_pie_chart_component__WEBPACK_IMPORTED_MODULE_1__["EasyPieChartComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/chart/easy-pie-chart/easy-pie-chart-component.html":
/*!********************************************************************!*\
  !*** ./src/app/chart/easy-pie-chart/easy-pie-chart-component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center start\" class=\"gene-easy-page\">\n   <div fxFlex.gt-md=\"50\" fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n      <mat-card>\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h4>{{'Easy Pie Chart'|translate}}</h4>\n               </div>\n               <span fxFlex></span>\n               <button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n               <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content text-center gene-relative set-chart-resp\">\n            <easy-pie-chart [percent]=\"percent\" [options]=\"options\"><span>70</span></easy-pie-chart>\n         </div>\n      </mat-card>\n   </div>\n   <div fxFlex.gt-md=\"50\" fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n      <mat-card>\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h4>{{'Easy Pie'|translate}}</h4>\n               </div>\n               <span fxFlex></span>\n               <button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n               <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content text-center gene-relative set-chart-resp\">\n            <span class=\"gene-absolute\">70</span>\n            <easy-pie-chart [percent]=\"percent2\" [options]=\"options2\"><span class=\"percent\" ng-bind=\"percent\">70</span></easy-pie-chart>\n         </div>\n      </mat-card>\n   </div>\n</div>\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"center start\" class=\"gene-easy-page\">\n   <div fxFlex.gt-md=\"50\" fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n      <mat-card>\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h4>{{'Easy Pie'|translate}}</h4>\n               </div>\n               <span fxFlex></span>\n               <button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n               <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content text-center gene-relative set-chart-resp\">\n            <span class=\"gene-absolute\">100</span>\n            <easy-pie-chart [percent]=\"percent3\" [options]=\"options3\"><span class=\"percent\" ng-bind=\"percent\">100</span></easy-pie-chart>\n         </div>\n      </mat-card>\n   </div>\n   <div fxFlex.gt-md=\"50\" fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n      <mat-card>\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h4>{{'Easy Pie'|translate}}</h4>\n               </div>\n               <span fxFlex></span>\n               <button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n               <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content text-center gene-relative set-chart-resp\">\n            <span class=\"gene-absolute\">90</span>\n            <easy-pie-chart [percent]=\"percent4\" [options]=\"options4\"><span class=\"percent\" ng-bind=\"percent\">90</span></easy-pie-chart>\n         </div>\n      </mat-card>\n   </div>\n</div>\n<mat-menu #menu=\"matMenu\" x-position=\"before\">\n   <button mat-menu-item>\n      <mat-icon>settings</mat-icon>\n      Settings \n   </button>\n   <button mat-menu-item>\n      <mat-icon>more</mat-icon>\n      View More \n   </button>\n   <button mat-menu-item>\n      <mat-icon>notifications_off</mat-icon>\n      Disable notifications \n   </button>\n   <button mat-menu-item>\n      <mat-icon>exit_to_app</mat-icon>\n      Remove Panel \n   </button>\n</mat-menu>"

/***/ }),

/***/ "./src/app/chart/easy-pie-chart/easy-pie-chart-component.scss":
/*!********************************************************************!*\
  !*** ./src/app/chart/easy-pie-chart/easy-pie-chart-component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gene-easy-page .gene-absolute {\n  font-weight: bold;\n  left: 0;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  top: 45%; }\n\n@media (max-width: 580px) {\n  canvas {\n    width: 100%; } }\n\npre {\n  overflow-x: auto; }\n\n@media (max-width: 599px) {\n  .set-chart-resp canvas {\n    width: 200px !important;\n    height: 200px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL2NoYXJ0L2Vhc3ktcGllLWNoYXJ0L2Vhc3ktcGllLWNoYXJ0LWNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixRQUFRLEVBQUE7O0FBRVo7RUFDSTtJQUNJLFdBQVcsRUFBQSxFQUNkOztBQUVMO0VBQ0EsZ0JBQWdCLEVBQUE7O0FBRWhCO0VBQ0c7SUFDRyx1QkFBdUI7SUFDdkIsd0JBQXdCLEVBQUEsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jaGFydC9lYXN5LXBpZS1jaGFydC9lYXN5LXBpZS1jaGFydC1jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nZW5lLWVhc3ktcGFnZSAuZ2VuZS1hYnNvbHV0ZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRvcDogNDUlO1xufVxuQG1lZGlhKG1heC13aWR0aDo1ODBweCl7XG4gICAgY2FudmFze1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5wcmV7XG5vdmVyZmxvdy14OiBhdXRvO1xufVxuQG1lZGlhKG1heC13aWR0aDo1OTlweCl7XG4gICAuc2V0LWNoYXJ0LXJlc3AgY2FudmFze1xuICAgICAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/chart/easy-pie-chart/easy-pie-chart.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/chart/easy-pie-chart/easy-pie-chart.component.ts ***!
  \******************************************************************/
/*! exports provided: EasyPieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EasyPieChartComponent", function() { return EasyPieChartComponent; });
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




var EasyPieChartComponent = /** @class */ (function () {
    function EasyPieChartComponent(pageTitleService, translate) {
        this.pageTitleService = pageTitleService;
        this.translate = translate;
        this.percent = 80;
        this.options = {
            barColor: '#1565c0',
            trackColor: '#f9f9f9',
            scaleColor: false,
            scaleLength: 5,
            lineCap: 'round',
            lineWidth: 3,
            size: 300,
            rotate: 0,
            animate: {
                duration: 3000,
                enabled: true
            }
        };
        this.percent2 = 70;
        this.options2 = {
            barColor: '#e53935',
            trackColor: '#f9f9f9',
            scaleColor: '#dfe0e0',
            scaleLength: 5,
            lineCap: 'round',
            lineWidth: 3,
            size: 300,
            rotate: 0,
            animate: {
                duration: 3000,
                enabled: true
            }
        };
        this.percent3 = 100;
        this.options3 = {
            barColor: '#e53935',
            trackColor: '#f9f9f9',
            scaleColor: '#dfe0e0',
            scaleLength: 5,
            lineCap: 'round',
            lineWidth: 10,
            size: 300,
            rotate: 0,
            animate: {
                duration: 3000,
                enabled: true
            }
        };
        this.percent4 = 90;
        this.options4 = {
            barColor: '#e53935',
            trackColor: '#f9f9f9',
            scaleColor: '#dfe0e0',
            scaleLength: 5,
            lineCap: 'round',
            lineWidth: 20,
            size: 300,
            rotate: 0,
            animate: {
                duration: 3000,
                enabled: true
            }
        };
    }
    EasyPieChartComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Easy Pie");
    };
    EasyPieChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-easy-pie',
            template: __webpack_require__(/*! ./easy-pie-chart-component.html */ "./src/app/chart/easy-pie-chart/easy-pie-chart-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./easy-pie-chart-component.scss */ "./src/app/chart/easy-pie-chart/easy-pie-chart-component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], EasyPieChartComponent);
    return EasyPieChartComponent;
}());



/***/ }),

/***/ "./src/app/chart/ng2-charts/chart-component.html":
/*!*******************************************************!*\
  !*** ./src/app/chart/ng2-charts/chart-component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout=\"row wrap\" fxLayoutAlign=\"center\" *ngIf=\"showChart\">\n   <!-- bar -->\n   <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" fxFlex.gt-md=\"33.33\">\n      <mat-card>\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h4>{{'Bar'|translate}}</h4>\n               </div>\n               <span fxFlex></span>\n               <button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n               <button mat-icon-button [matMenuTriggerFor]=\"menuopt\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content\">\n            <canvas height=\"200\" baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [colors]=\"barChartColors\" [legend]=\"barChartLegend\" [chartType]=\"barChartType\"></canvas>\n         </div>\n      </mat-card>\n   </div>\n   <!-- horizontal bar -->\n   <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" fxFlex.gt-md=\"33.33\">\n      <mat-card>\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h4>{{'Horizontal Bar'|translate}}</h4>\n               </div>\n               <span fxFlex></span>\n               <button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n               <button mat-icon-button [matMenuTriggerFor]=\"menuopt\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content\">\n            <canvas height=\"200\" baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barHorizontalChartOptions\" [colors]=\"barChartColors\" [legend]=\"barHorizontalChartLegend\" [chartType]=\"barHorizontalChartType\"></canvas>\n         </div>\n      </mat-card>\n   </div>\n   <!-- Stacked bar -->\n   <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" fxFlex.gt-md=\"33.33\">\n      <mat-card>\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h4>{{'Stacked Bar'|translate}}</h4>\n               </div>\n               <span fxFlex></span>\n               <button mat-icon-button >\n                  <mat-icon>sync</mat-icon>\n               </button>\n               <button mat-icon-button [matMenuTriggerFor]=\"menuopt\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content\">\n            <canvas height=\"200\" baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barStackChartOptions\" [colors]=\"barChartColors\" [legend]=\"barChartLegend\" [chartType]=\"barChartType\"></canvas>\n         </div>\n      </mat-card>\n   </div>\n   <!-- Line Chart -->\n   <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" fxFlex.gt-md=\"33.33\">\n      <mat-card>\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h4>{{'Line'|translate}}</h4>\n               </div>\n               <span fxFlex></span>\n               <button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n               <button mat-icon-button [matMenuTriggerFor]=\"menuopt\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content\">\n            <canvas baseChart height=\"200\" [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\"></canvas>\n         </div>\n      </mat-card>\n   </div>\n   <!-- Stepped Line Chart -->\n   <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" fxFlex.gt-md=\"33.33\">\n      <mat-card>\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h4>{{'Stepped Line'|translate}}</h4>\n               </div>\n               <span fxFlex></span>\n               <button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n               <button mat-icon-button [matMenuTriggerFor]=\"menuopt\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content\">\n            <canvas baseChart height=\"200\" [datasets]=\"lineChartSteppedData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\"></canvas>\n         </div>\n      </mat-card>\n   </div>\n   <!-- Point Line Chart -->\n   <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" fxFlex.gt-md=\"33.33\">\n      <mat-card>\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h4>{{'Points Line'|translate}}</h4>\n               </div>\n               <span fxFlex></span>\n               <button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n               <button mat-icon-button [matMenuTriggerFor]=\"menuopt\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content\">\n            <canvas baseChart height=\"200\" [datasets]=\"linePointChartData\" [labels]=\"lineChartLabels\" [options]=\"linePointChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\"></canvas>\n         </div>\n      </mat-card>\n   </div>\n   <!-- Pie Chart -->\n   <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" fxFlex.gt-md=\"33.33\">\n      <mat-card>\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h4>{{'Pie'|translate}}</h4>\n               </div>\n               <span fxFlex></span>\n               <button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n               <button mat-icon-button [matMenuTriggerFor]=\"menuopt\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content\">\n            <canvas baseChart height=\"200\" [data]=\"pieChartData\"  [options]=\"PieChartOptions\" [colors]=\"pieChartColors\" [chartType]=\"pieChartType\"></canvas>\n         </div>\n      </mat-card>\n   </div>\n   <!-- Doughnut Chart -->\n   <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" fxFlex.gt-md=\"33.33\">\n      <mat-card>\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h4>{{'Doughnut'|translate}}</h4>\n               </div>\n               <span fxFlex></span>\n               <button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n               <button mat-icon-button [matMenuTriggerFor]=\"menuopt\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content\">\n            <canvas baseChart height=\"200\" [data]=\"doughnutChartData\" [options]=\"PieChartOptions\" [colors]=\"pieChartColors\" [chartType]=\"doughnutChartType\"></canvas>\n         </div>\n      </mat-card>\n   </div>\n   <!-- Polar Area Chart -->\n   <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" fxFlex.gt-md=\"33.33\">\n      <mat-card>\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h4>{{'Polar Area'|translate}}</h4>\n               </div>\n               <span fxFlex></span>\n               <button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n               <button mat-icon-button [matMenuTriggerFor]=\"menuopt\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content\">\n            <canvas baseChart height=\"200\" [data]=\"polarAreaChartData\" [labels]=\"polarAreaChartLabels\" [legend]=\"polarAreaLegend\" [colors]=\"pieChartColors\" [chartType]=\"polarAreaChartType\"></canvas>\n         </div>\n      </mat-card>\n   </div>\n   <!-- Radar Chart -->\n   <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" fxFlex.gt-md=\"33.33\">\n      <mat-card>\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h4>{{'Radar'|translate}}</h4>\n               </div>\n               <span fxFlex></span>\n               <button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n               <button mat-icon-button [matMenuTriggerFor]=\"menuopt\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content\">\n            <canvas baseChart height=\"200\" [datasets]=\"radarChartData\" [labels]=\"radarChartLabels\" [legend]=\"polarAreaLegend\" [colors]=\"lineChartColors\" [chartType]=\"radarChartType\"></canvas>\n         </div>\n      </mat-card>\n   </div>\n   <!-- bubble -->\n   <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" fxFlex.gt-md=\"33.33\">\n      <mat-card>\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h4>{{'Bubble'|translate}}</h4>\n               </div>\n               <span fxFlex></span>\n               <button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n               <button mat-icon-button [matMenuTriggerFor]=\"menuopt\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content\">\n            <canvas height=\"200\" baseChart [datasets]=\"bubbleChartData\" [labels]=\"lineChartLabels\" [options]=\"bubbleChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\" [chartType]=\"bubbleChartType\"></canvas>\n         </div>\n      </mat-card>\n   </div>\n   <!-- Mixed Chart -->\n   <div fxFlex.gt-sm=\"33.33\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" fxFlex.gt-md=\"33.33\">\n      <mat-card>\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h4>{{'Mixed'|translate}}</h4>\n               </div>\n               <span fxFlex></span>\n               <button mat-icon-button>\n                  <mat-icon>sync</mat-icon>\n               </button>\n               <button mat-icon-button [matMenuTriggerFor]=\"menuopt\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content\">\n            <canvas baseChart height=\"200\" [datasets]=\"mixedPointChartData\" [labels]=\"lineChartLabels\" [options]=\"mixedChartOptions\" [colors]=\"barChartColors\" [legend]=\"lineChartLegend\" [chartType]=\"barChartType\"></canvas>\n         </div>\n      </mat-card>\n   </div>\n</div>\n<mat-menu #menuopt=\"matMenu\" x-position=\"before\">\n   <button mat-menu-item>\n      <mat-icon>settings</mat-icon>\n      Settings \n   </button>\n   <button mat-menu-item>\n      <mat-icon>more</mat-icon>\n      View More \n   </button>\n   <button mat-menu-item>\n      <mat-icon>notifications_off</mat-icon>\n      Disable notifications \n   </button>\n   <button mat-menu-item>\n      <mat-icon>exit_to_app</mat-icon>\n      Remove Panel \n   </button>\n</mat-menu>"

/***/ }),

/***/ "./src/app/chart/ng2-charts/chart-component.scss":
/*!*******************************************************!*\
  !*** ./src/app/chart/ng2-charts/chart-component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0L25nMi1jaGFydHMvY2hhcnQtY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/chart/ng2-charts/chart.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/chart/ng2-charts/chart.component.ts ***!
  \*****************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
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




var ChartComponent = /** @class */ (function () {
    function ChartComponent(pageTitleService, translate) {
        this.pageTitleService = pageTitleService;
        this.translate = translate;
        /*
           ---------- Bar Chart ----------
        */
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = false;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartColors = [{
                backgroundColor: 'rgba(59, 85, 230, 1)',
                borderColor: 'rgba(59, 85, 230, 1)',
                pointBackgroundColor: 'rgba(59, 85, 230, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(59, 85, 230, 1)'
            }, {
                backgroundColor: 'rgba(235, 78, 54, 1)',
                borderColor: 'rgba(235, 78, 54, 1)',
                pointBackgroundColor: 'rgba(235, 78, 54, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(235, 78, 54, 1)'
            }, {
                backgroundColor: 'rgba(67, 210, 158, 0.2)',
                borderColor: 'rgba(67, 210, 158, 1)',
                pointBackgroundColor: 'rgba(67, 210, 158, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(67, 210, 158, 0.8)'
            }];
        //Horizontal Bar
        this.barHorizontalChartType = 'horizontalBar';
        this.barHorizontalChartLegend = false;
        this.barHorizontalChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        //Stacked Bar
        this.barStackChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            scales: {
                xAxes: [{
                        stacked: true,
                    }],
                yAxes: [{
                        stacked: true
                    }]
            }
        };
        /*
           ---------- Line Chart ----------
        */
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartColors = [{
                backgroundColor: 'rgba(59, 85, 230, 0.2)',
                borderColor: 'rgba(59, 85, 230, 1)',
                pointBackgroundColor: 'rgba(59, 85, 230, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(59, 85, 230, 0.8)'
            }, {
                backgroundColor: 'rgba(235, 78, 54, 0.2)',
                borderColor: 'rgba(235, 78, 54, 1)',
                pointBackgroundColor: 'rgba(235, 78, 54, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(235, 78, 54, 0.8)'
            }, {
                backgroundColor: 'rgba(67, 210, 158, 0.2)',
                borderColor: 'rgba(67, 210, 158, 1)',
                pointBackgroundColor: 'rgba(67, 210, 158, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(67, 210, 158, 0.8)'
            }];
        //Stepped Line Chart
        this.lineChartSteppedData = [{
                data: [65, 59, 80, 81, 56, 55, 40],
                label: 'Series A',
                borderWidth: 1,
                fill: false,
                steppedLine: true
            }, {
                data: [28, 48, 40, 19, 86, 27, 90],
                label: 'Series B',
                borderWidth: 1,
                fill: false,
                steppedLine: true
            }, {
                data: [18, 48, 77, 9, 100, 27, 40],
                label: 'Series C',
                borderWidth: 1,
                fill: false,
                steppedLine: true
            }];
        //Point Chart
        this.linePointChartData = [{
                data: [65, 59, 80, 81, 56, 55, 40],
                label: 'Series A',
                borderWidth: 1,
                fill: false,
                pointRadius: 10,
                pointHoverRadius: 15,
                showLine: false
            }, {
                data: [28, 48, 40, 19, 86, 27, 90],
                label: 'Series B',
                borderWidth: 1,
                fill: false,
                pointRadius: 10,
                pointHoverRadius: 15,
                showLine: false
            }, {
                data: [18, 48, 77, 9, 100, 27, 40],
                label: 'Series C',
                borderWidth: 1,
                fill: false,
                pointRadius: 10,
                pointHoverRadius: 15,
                showLine: false
            }];
        this.linePointChartOptions = {
            elements: {
                point: {
                    pointStyle: 'rectRot',
                }
            }
        };
        /*
           ---------- Pie Chart ----------
        */
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        this.pieChartColors = [{
                backgroundColor: ['#3B55E6', '#EB4E36', '#43D29E', '#32CBD8', '#E8C63B']
            }];
        this.PieChartOptions = {
            elements: {
                arc: {
                    borderWidth: 0
                }
            }
        };
        /*
           ---------- Doughnut Chart ----------
        */
        this.doughnutChartData = [350, 450, 100];
        this.doughnutChartType = 'doughnut';
        /*
           ----------Polar Area Chart ----------
        */
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = false;
        this.polarAreaChartType = 'polarArea';
        /*
           ---------- Radar Chart ----------
        */
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartType = 'radar';
        /*
           ---------- Bubble Chart ----------
        */
        this.bubbleChartData = [{
                data: [{
                        x: 6,
                        y: 5,
                        r: 15,
                    }, {
                        x: 5,
                        y: 4,
                        r: 10,
                    }, {
                        x: 8,
                        y: 4,
                        r: 6,
                    }, {
                        x: 8,
                        y: 4,
                        r: 6,
                    }, {
                        x: 5,
                        y: 14,
                        r: 14,
                    }, {
                        x: 5,
                        y: 6,
                        r: 8,
                    }, {
                        x: 4,
                        y: 2,
                        r: 10,
                    }],
                label: 'Series A',
                borderWidth: 1
            }];
        this.bubbleChartType = 'bubble';
        this.bubbleChartOptions = {
            responsive: true,
            elements: {
                points: {
                    borderWidth: 1,
                    borderColor: 'rgb(0, 0, 0)'
                }
            }
        };
        /*
           ---------- Mixed Chart ----------
        */
        this.mixedPointChartData = [{
                data: [6, 5, 8, 8, 5, 5, 4],
                label: 'Series A',
                borderWidth: 1,
                type: 'line',
                fill: false
            }, {
                data: [5, 4, 4, 2, 6, 2, 5],
                label: 'Series B',
                borderWidth: 1,
                type: 'bar',
            }];
        this.mixedChartOptions = {
            responsive: true,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9,
                        }
                    }]
            }
        };
    }
    ChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitleService.setTitle("Ng2Charts");
        setTimeout(function () {
            _this.showChart = true;
        }, 0);
    };
    ChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-charts',
            template: __webpack_require__(/*! ./chart-component.html */ "./src/app/chart/ng2-charts/chart-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./chart-component.scss */ "./src/app/chart/ng2-charts/chart-component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ })

}]);
//# sourceMappingURL=chart-chart-module.js.map