(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"],{

/***/ "./src/app/tables/table-editing/table-editing-component.html":
/*!*******************************************************************!*\
  !*** ./src/app/tables/table-editing/table-editing-component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\n  \t<div fxFlex=\"100\">\n      <ngx-datatable \n         #mydatatable\n         class=\"material mrgn-all-md\"\n         [headerHeight]=\"50\"\n         [limit]=\"5\"\n         [columnMode]=\"'force'\"\n         [footerHeight]=\"50\"\n         [rowHeight]=\"'auto'\"\n         [rows]=\"rows\">\n         \n         <ngx-datatable-column name=\"Name\">\n            <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-value=\"value\" let-row=\"row\">\n            <span\n               title=\"Double click to edit\"\n               (dblclick)=\"editing[rowIndex + '-name'] = true\"\n               *ngIf=\"!editing[rowIndex + '-name']\">\n               {{value}}\n            </span>\n               <input\n                  autofocus\n                  (blur)=\"updateValue($event, 'name', rowIndex)\"\n                  *ngIf=\"editing[rowIndex+ '-name']\"\n                  type=\"text\"\n                  [value]=\"value\"\n               />\n            </ng-template>\n         </ngx-datatable-column>\n\n         <ngx-datatable-column name=\"Gender\">\n            <ng-template ngx-datatable-cell-template let-rowIndex=\"rowIndex\" let-row=\"row\" let-value=\"value\">\n               <span\n                  title=\"Double click to edit\"\n                  (dblclick)=\"editing[rowIndex + '-gender'] = true\"\n                  *ngIf=\"!editing[rowIndex + '-gender']\">\n                  {{value}}\n               </span>\n               <select\n                  *ngIf=\"editing[rowIndex + '-gender']\"\n                  (blur)=\"editing[rowIndex + '-gender'] = false\"\n                  (change)=\"updateValue($event, 'gender', rowIndex)\"\n                  [value]=\"value\">\n                  <option value=\"male\">Male</option>\n                  <option value=\"female\">Female</option>\n               </select>\n            </ng-template>\n         </ngx-datatable-column>\n\n         <ngx-datatable-column name=\"Age\">\n            <ng-template ngx-datatable-cell-template let-value=\"value\">\n               {{value}}\n            </ng-template>\n         </ngx-datatable-column>\n      </ngx-datatable>\n   </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tables/table-editing/table-editing-component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/tables/table-editing/table-editing-component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy90YWJsZS1lZGl0aW5nL3RhYmxlLWVkaXRpbmctY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tables/table-editing/table-editing.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tables/table-editing/table-editing.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditingTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditingTableComponent", function() { return EditingTableComponent; });
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



var EditingTableComponent = /** @class */ (function () {
    function EditingTableComponent(pageTitleService) {
        var _this = this;
        this.pageTitleService = pageTitleService;
        this.editing = {};
        this.rows = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    EditingTableComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Editing");
    };
    /**
      * To fetch the data from JSON file.
      */
    EditingTableComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    /**
      * updateValue is used to update the data when edit.
      */
    EditingTableComponent.prototype.updateValue = function (event, cell, rowIndex) {
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = this.rows.slice();
    };
    EditingTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-editing-table',
            template: __webpack_require__(/*! ./table-editing-component.html */ "./src/app/tables/table-editing/table-editing-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./table-editing-component.scss */ "./src/app/tables/table-editing/table-editing-component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"]])
    ], EditingTableComponent);
    return EditingTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/table-filter/table-filter-component.html":
/*!*****************************************************************!*\
  !*** ./src/app/tables/table-filter/table-filter-component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\n   <div fxFlex=\"100\">\n      <div class=\"pad-all-md mat-white box-inset mrgn-all-md\">\n         <form class=\"example-form\" fxFlex=\"220px\">\n            <mat-form-field class=\"full-wid\">\n               <input matInput type=\"text\" placeholder='Type to filter the name column...' (keyup)='updateFilter($event)' />\n            </mat-form-field>\n         </form>\n      </div>\n      <ngx-datatable #table \n      class='material mrgn-all-md' \n      [columns]=\"columns\" \n      [columnMode]=\"'force'\" \n      [headerHeight]=\"50\" \n      [footerHeight]=\"50\" \n      [rowHeight]=\"'auto'\" \n      [limit]=\"10\" \n      [rows]='rows'>\n      </ngx-datatable>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/tables/table-filter/table-filter-component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/tables/table-filter/table-filter-component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy90YWJsZS1maWx0ZXIvdGFibGUtZmlsdGVyLWNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tables/table-filter/table-filter.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/tables/table-filter/table-filter.component.ts ***!
  \***************************************************************/
/*! exports provided: FilterTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTableComponent", function() { return FilterTableComponent; });
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



var FilterTableComponent = /** @class */ (function () {
    function FilterTableComponent(pageTitleService) {
        var _this = this;
        this.pageTitleService = pageTitleService;
        this.rows = [];
        this.temp = [];
        this.columns = [
            { prop: 'name' },
            { name: 'Company' },
            { name: 'Gender' }
        ];
        this.fetch(function (data) {
            // cache our list
            _this.temp = data.slice();
            // push our inital complete list
            _this.rows = data;
        });
    }
    FilterTableComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Filter");
    };
    /**
      * To fetch the data from JSON file.
      */
    FilterTableComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    /**
      * updateFilter method is used to filter the data.
      */
    FilterTableComponent.prototype.updateFilter = function (event) {
        var val = event.target.value;
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
    };
    FilterTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-filter-table',
            template: __webpack_require__(/*! ./table-filter-component.html */ "./src/app/tables/table-filter/table-filter-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./table-filter-component.scss */ "./src/app/tables/table-filter/table-filter-component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"]])
    ], FilterTableComponent);
    return FilterTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/table-fullscreen/table-fullscreen-component.html":
/*!*************************************************************************!*\
  !*** ./src/app/tables/table-fullscreen/table-fullscreen-component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n   <div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\n      <ngx-datatable\n         class=\"material fullscreen mrgn-all-md\"\n         style=\"top: 64px;width: calc(100% - 2rem)\"\n         [columnMode]=\"'force'\"\n         [headerHeight]=\"50\"\n         [footerHeight]=\"0\"\n         [rowHeight]=\"50\"\n         [scrollbarV]=\"true\"\n         [scrollbarH]=\"true\"\n         [rows]=\"rows\">\n         <ngx-datatable-column name=\"Id\" [width]=\"80\"></ngx-datatable-column>\n         <ngx-datatable-column name=\"Name\" [width]=\"300\"></ngx-datatable-column>\n         <ngx-datatable-column name=\"Gender\"></ngx-datatable-column>\n         <ngx-datatable-column name=\"Age\"></ngx-datatable-column>\n         <ngx-datatable-column name=\"City\" [width]=\"300\" prop=\"address.city\"></ngx-datatable-column>\n         <ngx-datatable-column name=\"State\" [width]=\"300\" prop=\"address.state\"></ngx-datatable-column>\n      </ngx-datatable>    \n   </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tables/table-fullscreen/table-fullscreen-component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/tables/table-fullscreen/table-fullscreen-component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fullscreen {\n  position: absolute !important;\n  height: auto !important;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL3RhYmxlcy90YWJsZS1mdWxsc2NyZWVuL3RhYmxlLWZ1bGxzY3JlZW4tY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWJsZXMvdGFibGUtZnVsbHNjcmVlbi90YWJsZS1mdWxsc2NyZWVuLWNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGxzY3JlZW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tables/table-fullscreen/table-fullscreen.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tables/table-fullscreen/table-fullscreen.component.ts ***!
  \***********************************************************************/
/*! exports provided: FullscreenTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenTableComponent", function() { return FullscreenTableComponent; });
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



var FullscreenTableComponent = /** @class */ (function () {
    function FullscreenTableComponent(pageTitleService) {
        var _this = this;
        this.pageTitleService = pageTitleService;
        this.rows = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    FullscreenTableComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Full Screen");
    };
    /**
      * To fetch the data from 100k.json fileT
      */
    FullscreenTableComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/100k.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    FullscreenTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-fullscreen-table',
            template: __webpack_require__(/*! ./table-fullscreen-component.html */ "./src/app/tables/table-fullscreen/table-fullscreen-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./table-fullscreen-component.scss */ "./src/app/tables/table-fullscreen/table-fullscreen-component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"]])
    ], FullscreenTableComponent);
    return FullscreenTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/table-paging/table-paging-component.html":
/*!*****************************************************************!*\
  !*** ./src/app/tables/table-paging/table-paging-component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\n  \t<div fxFlex=\"100%\">\n      <ngx-datatable\n         class=\"material mrgn-all-md\"\n         [rows]=\"rows\"\n         [columns]=\"[{name:'Name'},{name:'Gender'},{name:'Company'}]\"\n         [columnMode]=\"'force'\"\n         [headerHeight]=\"50\"\n         [footerHeight]=\"50\"\n         [rowHeight]=\"'auto'\"\n         [limit]=\"10\">\n      </ngx-datatable>\n   </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tables/table-paging/table-paging-component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/tables/table-paging/table-paging-component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy90YWJsZS1wYWdpbmcvdGFibGUtcGFnaW5nLWNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tables/table-paging/table-paging.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/tables/table-paging/table-paging.component.ts ***!
  \***************************************************************/
/*! exports provided: PagingTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingTableComponent", function() { return PagingTableComponent; });
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



var PagingTableComponent = /** @class */ (function () {
    function PagingTableComponent(pageTitleService) {
        var _this = this;
        this.pageTitleService = pageTitleService;
        this.rows = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    PagingTableComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Paging");
    };
    /**
      * To fetech the data from company.json file.
      */
    PagingTableComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    PagingTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-paging-table',
            template: __webpack_require__(/*! ./table-paging-component.html */ "./src/app/tables/table-paging/table-paging-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./table-paging-component.scss */ "./src/app/tables/table-paging/table-paging-component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"]])
    ], PagingTableComponent);
    return PagingTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/table-pinning/table-pinning-component.html":
/*!*******************************************************************!*\
  !*** ./src/app/tables/table-pinning/table-pinning-component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\n   <div fxFlex=\"100%\">\n      <ngx-datatable\n      class=\"material pinning gene-pinning mrgn-all-md\"\n      [columnMode]=\"'force'\"\n      [headerHeight]=\"50\"\n      [footerHeight]=\"50\"\n      [rowHeight]=\"50\"\n      [scrollbarV]=\"true\"\n      [scrollbarH]=\"true\"\n      [rows]=\"rows\">\n      <ngx-datatable-column\n      name=\"Name\"\n      [width]=\"300\"\n      [frozenLeft]=\"true\">\n      </ngx-datatable-column>\n      <ngx-datatable-column\n         name=\"Gender\">\n      </ngx-datatable-column>\n      <ngx-datatable-column\n         name=\"Age\">\n      </ngx-datatable-column>\n      <ngx-datatable-column\n         name=\"City\"\n         [width]=\"150\"\n         prop=\"address.city\">\n      </ngx-datatable-column>\n      <ngx-datatable-column\n      name=\"State\"\n      [width]=\"300\"\n      prop=\"address.state\"\n      [frozenRight]=\"true\">\n      </ngx-datatable-column>\n      </ngx-datatable>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/tables/table-pinning/table-pinning-component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/tables/table-pinning/table-pinning-component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pinning {\n  height: 400px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL3RhYmxlcy90YWJsZS1waW5uaW5nL3RhYmxlLXBpbm5pbmctY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy90YWJsZS1waW5uaW5nL3RhYmxlLXBpbm5pbmctY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGlubmluZyB7XG4gICAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xufVxuXG5cblxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/tables/table-pinning/table-pinning.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tables/table-pinning/table-pinning.component.ts ***!
  \*****************************************************************/
/*! exports provided: PinningTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinningTableComponent", function() { return PinningTableComponent; });
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



var PinningTableComponent = /** @class */ (function () {
    function PinningTableComponent(pageTitleService) {
        var _this = this;
        this.pageTitleService = pageTitleService;
        this.rows = [];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    PinningTableComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Pinning");
    };
    /**
      * to fetch the data from 100k.json file.
      */
    PinningTableComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/100k.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    PinningTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-pinning-table',
            template: __webpack_require__(/*! ./table-pinning-component.html */ "./src/app/tables/table-pinning/table-pinning-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./table-pinning-component.scss */ "./src/app/tables/table-pinning/table-pinning-component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"]])
    ], PinningTableComponent);
    return PinningTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/table-responsive/table-responsive-component.html":
/*!*************************************************************************!*\
  !*** ./src/app/tables/table-responsive/table-responsive-component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n   <mat-card>\n      <div class=\"gene-card-title\">\n         <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div fxLayout=\"column\">\n               <h4>{{'Table Responsive'|translate}}</h4>\n            </div> <span fxFlex></span>\n\n         </div>\n         <mat-divider></mat-divider>\n      </div>\n      <div class=\"gene-card-content pad-t-none\">\n         <div class=\"table-responsive\">\n            <table class=\"table table-hover table-middle th-fw-light mb-0\">\n               <thead>\n                  <tr>\n                     <th>User Thumb</th>\n                     <th>Name</th>\n                     <th>Status</th>\n                     <th>User-Name</th>\n                     <th>User-ID</th>\n                     <th>Date Joined</th>\n\n                     <th>Ratings</th>\n                     <th>Actions</th>\n                  </tr>\n               </thead>\n               <tbody>\n                  <tr>\n                     <td><img src=\"assets/img/user-1.jpg\" width=\"50\" height=\"50\" class=\"img-fluid img-circle\" alt=\"User Image\"></td>\n                     <td>Alberto Decosta</td>\n                     <td><span class=\"badge badge-success rounded\">Schedules</span> </td>\n                     <td>User Name</td>\n                     <td>012 345 6978</td>\n                     <td>Oct 16, 2016</td>\n\n                     <td><i class=\"fa fa-star\" aria-hidden=\"true\"></i><i class=\"fa fa-star\" aria-hidden=\"true\"></i><i\n                           class=\"fa fa-star\" aria-hidden=\"true\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star-half-o\"></i></td>\n                     <td><a href=\"javascript:;\"><i class=\"fa fa-edit mr-1\"></i></a><a href=\"javascript:;\"><i class=\"fa fa-times text-danger\"></i></a></td>\n                  </tr>\n                  <tr>\n                     <td><img src=\"assets/img/user-2.jpg\" width=\"50\" height=\"50\" class=\"img-fluid img-circle\" alt=\"User Image\"></td>\n                     <td>Jainne Frost</td>\n                     <td><span class=\"badge badge-danger rounded\">Free</span> </td>\n                     <td>User Name</td>\n                     <td>012 345 6978</td>\n                     <td>Oct 12, 2016</td>\n\n                     <td><i class=\"fa fa-star\" aria-hidden=\"true\"></i><i class=\"fa fa-star\" aria-hidden=\"true\"></i><i\n                           class=\"fa fa-star\" aria-hidden=\"true\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star-half-o\"></i></td>\n                     <td><a href=\"javascript:;\"><i class=\"fa fa-edit mr-1\"></i></a><a href=\"javascript:;\"><i class=\"fa fa-times text-danger\"></i></a></td>\n                  </tr>\n                  <tr>\n                     <td><img src=\"assets/img/user-3.jpg\" width=\"50\" height=\"50\" class=\"img-fluid img-circle\" alt=\"User Image\"></td>\n                     <td>Vic Phill</td>\n                     <td><span class=\"badge badge-success rounded\">Schedules</span> </td>\n                     <td>User Name</td>\n                     <td>012 345 6978</td>\n                     <td>May 18, 2016</td>\n\n                     <td><i class=\"fa fa-star\" aria-hidden=\"true\"></i><i class=\"fa fa-star\" aria-hidden=\"true\"></i><i\n                           class=\"fa fa-star\" aria-hidden=\"true\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star-half-o\"></i></td>\n                     <td><i class=\"fa fa-edit mr-1\"></i><i class=\"fa fa-times text-danger\"></i></td>\n                  </tr>\n                  <tr>\n                     <td><img src=\"assets/img/user-4.jpg\" width=\"50\" height=\"50\" class=\"img-fluid img-circle\" alt=\"User Image\"></td>\n                     <td>Venna Mercy</td>\n                     <td><span class=\"badge badge-success rounded\">Schedules</span> </td>\n                     <td>User Name</td>\n                     <td>012 345 6978</td>\n                     <td>Apr 28, 2016</td>\n\n                     <td><i class=\"fa fa-star\" aria-hidden=\"true\"></i><i class=\"fa fa-star\" aria-hidden=\"true\"></i><i\n                           class=\"fa fa-star\" aria-hidden=\"true\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star-half-o\"></i></td>\n                     <td><a href=\"javascript:;\"><i class=\"fa fa-edit mr-1\"></i></a><a href=\"javascript:;\"><i class=\"fa fa-times text-danger\"></i></a></td>\n                  </tr>\n                  <tr>\n                     <td><img src=\"assets/img/user-5.jpg\" width=\"50\" height=\"50\" class=\"img-fluid img-circle\" alt=\"User Image\"></td>\n                     <td>Rose Golddust</td>\n                     <td><span class=\"badge badge-danger rounded\">Free</span> </td>\n                     <td>User Name</td>\n                     <td>012 345 6978</td>\n                     <td> Oct 16, 2016</td>\n\n                     <td><i class=\"fa fa-star\" aria-hidden=\"true\"></i><i class=\"fa fa-star\" aria-hidden=\"true\"></i><i\n                           class=\"fa fa-star\" aria-hidden=\"true\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star-half-o\"></i></td>\n                     <td><a href=\"javascript:;\"><i class=\"fa fa-edit mr-1\"></i></a><a href=\"javascript:;\"><i class=\"fa fa-times text-danger\"></i></a></td>\n                  </tr>\n                  <tr>\n                     <td><img src=\"assets/img/user-6.jpg\" width=\"50\" height=\"50\" class=\"img-fluid img-circle\" alt=\"User Image\"></td>\n                     <td>Dusty Raims</td>\n                     <td><span class=\"badge badge-success rounded\">Schedules</span> </td>\n                     <td>User Name</td>\n                     <td>012 345 6978</td>\n                     <td>Oct 12, 2016</td>\n\n                     <td><i class=\"fa fa-star\" aria-hidden=\"true\"></i><i class=\"fa fa-star\" aria-hidden=\"true\"></i><i\n                           class=\"fa fa-star\" aria-hidden=\"true\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star-half-o\"></i></td>\n                     <td><a href=\"javascript:;\"><i class=\"fa fa-edit mr-1\"></i></a><a href=\"javascript:;\"><i class=\"fa fa-times text-danger\"></i></a></td>\n                  </tr>\n               </tbody>\n            </table>\n         </div>\n      </div>\n   </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/tables/table-responsive/table-responsive-component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/tables/table-responsive/table-responsive-component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy90YWJsZS1yZXNwb25zaXZlL3RhYmxlLXJlc3BvbnNpdmUtY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tables/table-responsive/table-responsive.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tables/table-responsive/table-responsive.component.ts ***!
  \***********************************************************************/
/*! exports provided: ResponsiveTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveTableComponent", function() { return ResponsiveTableComponent; });
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




var ResponsiveTableComponent = /** @class */ (function () {
    function ResponsiveTableComponent(pageTitleService, translate) {
        this.pageTitleService = pageTitleService;
        this.translate = translate;
    }
    ResponsiveTableComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Responsive");
    };
    ResponsiveTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-responsive-table',
            template: __webpack_require__(/*! ./table-responsive-component.html */ "./src/app/tables/table-responsive/table-responsive-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./table-responsive-component.scss */ "./src/app/tables/table-responsive/table-responsive-component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], ResponsiveTableComponent);
    return ResponsiveTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/table-selection/table-selection-component.html":
/*!***********************************************************************!*\
  !*** ./src/app/tables/table-selection/table-selection-component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\n  \t<div fxFlex=\"100%\">\n        <ngx-datatable\n        class=\"material selection-cell mrgn-all-md\"\n        [rows]=\"rows\"\n        [columnMode]=\"'force'\"\n        [columns]=\"columns\"\n        [headerHeight]=\"50\"\n        [footerHeight]=\"50\"\n        [rowHeight]=\"50\"\n        [selected]=\"selected\"\n        [selectionType]=\"'cell'\">\n      </ngx-datatable>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tables/table-selection/table-selection-component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/tables/table-selection/table-selection-component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".datatable-body-cell.sort-active.active .datatable-body-cell-label {\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL3RhYmxlcy90YWJsZS1zZWxlY3Rpb24vdGFibGUtc2VsZWN0aW9uLWNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBRUcsV0FOb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy90YWJsZS1zZWxlY3Rpb24vdGFibGUtc2VsZWN0aW9uLWNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGFjdGl2ZS1jZWxsLWNvbG9yOiNmZmY7IFxuXG5cblxuLmRhdGF0YWJsZS1ib2R5LWNlbGwuc29ydC1hY3RpdmUuYWN0aXZle1xuICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwtbGFiZWx7XG4gICBjb2xvcjogJGFjdGl2ZS1jZWxsLWNvbG9yOyAgIFxuICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/tables/table-selection/table-selection.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/tables/table-selection/table-selection.component.ts ***!
  \*********************************************************************/
/*! exports provided: SelectionTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionTableComponent", function() { return SelectionTableComponent; });
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



var SelectionTableComponent = /** @class */ (function () {
    function SelectionTableComponent(pageTitleService) {
        var _this = this;
        this.pageTitleService = pageTitleService;
        this.rows = [];
        this.selected = [];
        this.columns = [
            { prop: 'name' },
            { name: 'Company' },
            { name: 'Gender' }
        ];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    SelectionTableComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Selection");
    };
    /**
      * To fetch the data from company.json file.
      */
    SelectionTableComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    SelectionTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-selection-table',
            template: __webpack_require__(/*! ./table-selection-component.html */ "./src/app/tables/table-selection/table-selection-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./table-selection-component.scss */ "./src/app/tables/table-selection/table-selection-component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"]])
    ], SelectionTableComponent);
    return SelectionTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/table-sorting/table-sorting-component.html":
/*!*******************************************************************!*\
  !*** ./src/app/tables/table-sorting/table-sorting-component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"start\">\n   <mat-card fxFlex=\"100%\" style=\"padding: 0;\">\n      <ngx-datatable\n         class=\"material sorting\"\n         [rows]=\"rows\"\n         [columns]=\"columns\"\n         [sortType]=\"'multi'\"\n         [columnMode]=\"'force'\"\n         [headerHeight]=\"50\"\n         [footerHeight]=\"50\"\n         [rowHeight]=\"50\"\n         [scrollbarV]=\"true\">\n      </ngx-datatable>\n   </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/tables/table-sorting/table-sorting-component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/tables/table-sorting/table-sorting-component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sorting {\n  height: 400px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL3RhYmxlcy90YWJsZS1zb3J0aW5nL3RhYmxlLXNvcnRpbmctY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYmxlcy90YWJsZS1zb3J0aW5nL3RhYmxlLXNvcnRpbmctY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29ydGluZyB7XG4gICAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tables/table-sorting/table-sorting.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tables/table-sorting/table-sorting.component.ts ***!
  \*****************************************************************/
/*! exports provided: SortingTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortingTableComponent", function() { return SortingTableComponent; });
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



var SortingTableComponent = /** @class */ (function () {
    function SortingTableComponent(pageTitleService) {
        var _this = this;
        this.pageTitleService = pageTitleService;
        this.rows = [];
        this.columns = [
            { name: 'Company' },
            { name: 'Name' },
            { name: 'Gender' }
        ];
        this.fetch(function (data) {
            _this.rows = data;
        });
    }
    SortingTableComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Sorting");
    };
    /**
      * to fetch the data from company.json file.
      */
    SortingTableComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/company.json");
        req.onload = function () {
            var data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    };
    SortingTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-sorting-table',
            template: __webpack_require__(/*! ./table-sorting-component.html */ "./src/app/tables/table-sorting/table-sorting-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./table-sorting-component.scss */ "./src/app/tables/table-sorting/table-sorting-component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"]])
    ], SortingTableComponent);
    return SortingTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/tables.module.ts":
/*!*****************************************!*\
  !*** ./src/app/tables/tables.module.ts ***!
  \*****************************************/
/*! exports provided: TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _tables_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tables.routing */ "./src/app/tables/tables.routing.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _table_fullscreen_table_fullscreen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./table-fullscreen/table-fullscreen.component */ "./src/app/tables/table-fullscreen/table-fullscreen.component.ts");
/* harmony import */ var _table_editing_table_editing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./table-editing/table-editing.component */ "./src/app/tables/table-editing/table-editing.component.ts");
/* harmony import */ var _table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./table-filter/table-filter.component */ "./src/app/tables/table-filter/table-filter.component.ts");
/* harmony import */ var _table_paging_table_paging_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./table-paging/table-paging.component */ "./src/app/tables/table-paging/table-paging.component.ts");
/* harmony import */ var _table_sorting_table_sorting_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./table-sorting/table-sorting.component */ "./src/app/tables/table-sorting/table-sorting.component.ts");
/* harmony import */ var _table_pinning_table_pinning_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./table-pinning/table-pinning.component */ "./src/app/tables/table-pinning/table-pinning.component.ts");
/* harmony import */ var _table_selection_table_selection_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./table-selection/table-selection.component */ "./src/app/tables/table-selection/table-selection.component.ts");
/* harmony import */ var _table_responsive_table_responsive_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./table-responsive/table-responsive.component */ "./src/app/tables/table-responsive/table-responsive.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _table_fullscreen_table_fullscreen_component__WEBPACK_IMPORTED_MODULE_8__["FullscreenTableComponent"],
                _table_editing_table_editing_component__WEBPACK_IMPORTED_MODULE_9__["EditingTableComponent"],
                _table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_10__["FilterTableComponent"],
                _table_paging_table_paging_component__WEBPACK_IMPORTED_MODULE_11__["PagingTableComponent"],
                _table_sorting_table_sorting_component__WEBPACK_IMPORTED_MODULE_12__["SortingTableComponent"],
                _table_pinning_table_pinning_component__WEBPACK_IMPORTED_MODULE_13__["PinningTableComponent"],
                _table_selection_table_selection_component__WEBPACK_IMPORTED_MODULE_14__["SelectionTableComponent"],
                _table_responsive_table_responsive_component__WEBPACK_IMPORTED_MODULE_15__["ResponsiveTableComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_tables_routing__WEBPACK_IMPORTED_MODULE_6__["TablesRoutes"]),
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
            ]
        })
    ], TablesModule);
    return TablesModule;
}());



/***/ }),

/***/ "./src/app/tables/tables.routing.ts":
/*!******************************************!*\
  !*** ./src/app/tables/tables.routing.ts ***!
  \******************************************/
/*! exports provided: TablesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesRoutes", function() { return TablesRoutes; });
/* harmony import */ var _table_fullscreen_table_fullscreen_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-fullscreen/table-fullscreen.component */ "./src/app/tables/table-fullscreen/table-fullscreen.component.ts");
/* harmony import */ var _table_editing_table_editing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-editing/table-editing.component */ "./src/app/tables/table-editing/table-editing.component.ts");
/* harmony import */ var _table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-filter/table-filter.component */ "./src/app/tables/table-filter/table-filter.component.ts");
/* harmony import */ var _table_paging_table_paging_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table-paging/table-paging.component */ "./src/app/tables/table-paging/table-paging.component.ts");
/* harmony import */ var _table_sorting_table_sorting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table-sorting/table-sorting.component */ "./src/app/tables/table-sorting/table-sorting.component.ts");
/* harmony import */ var _table_pinning_table_pinning_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table-pinning/table-pinning.component */ "./src/app/tables/table-pinning/table-pinning.component.ts");
/* harmony import */ var _table_selection_table_selection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table-selection/table-selection.component */ "./src/app/tables/table-selection/table-selection.component.ts");
/* harmony import */ var _table_responsive_table_responsive_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./table-responsive/table-responsive.component */ "./src/app/tables/table-responsive/table-responsive.component.ts");








var TablesRoutes = [
    {
        path: '',
        redirectTo: 'fullscreen',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'fullscreen',
                component: _table_fullscreen_table_fullscreen_component__WEBPACK_IMPORTED_MODULE_0__["FullscreenTableComponent"]
            },
            {
                path: 'editing',
                component: _table_editing_table_editing_component__WEBPACK_IMPORTED_MODULE_1__["EditingTableComponent"]
            },
            {
                path: 'filter',
                component: _table_filter_table_filter_component__WEBPACK_IMPORTED_MODULE_2__["FilterTableComponent"]
            },
            {
                path: 'paging',
                component: _table_paging_table_paging_component__WEBPACK_IMPORTED_MODULE_3__["PagingTableComponent"]
            },
            {
                path: 'sorting',
                component: _table_sorting_table_sorting_component__WEBPACK_IMPORTED_MODULE_4__["SortingTableComponent"]
            },
            {
                path: 'pinning',
                component: _table_pinning_table_pinning_component__WEBPACK_IMPORTED_MODULE_5__["PinningTableComponent"]
            },
            {
                path: 'selection',
                component: _table_selection_table_selection_component__WEBPACK_IMPORTED_MODULE_6__["SelectionTableComponent"]
            },
            {
                path: 'responsive',
                component: _table_responsive_table_responsive_component__WEBPACK_IMPORTED_MODULE_7__["ResponsiveTableComponent"]
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=tables-tables-module.js.map