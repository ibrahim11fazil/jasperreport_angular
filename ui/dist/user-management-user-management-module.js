(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-management-user-management-module"],{

/***/ "./src/app/user-management/user-grid-list/user-grid-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/user-management/user-grid-list/user-grid-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-grid-list-wrap\">\n\t<div fxLayout=\"row wrap\">\n\t\t<div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"33.33\" fxFlex.lg=\"25\" fxFlex.xl=\"25\" *ngFor = \"let gridlist of userGridList\">\n\t\t\t<mat-card class=\"grid-list-card mat-pad-none\">\t\n\t\t\t\t<div class=\"grid-image\">\n\t\t\t\t \t<img class=\"#\" src=\"{{gridlist.backgroundImage}}\" height=\"450\" width=\"700\">\n\t\t\t\t \t<div class=\"img-overlay\" fxLayoutAlign=\"end start\">\n                  <div class=\"social-icon-wrapper warn-bg\">\n                     <a href=\"\" class=\"icon facebook\">\n                     \t<mat-icon class=\"fa fa-facebook\"></mat-icon>\n                     </a>\n                  \t<a href=\"\" class=\"icon google\">\n                  \t\t<mat-icon class=\"fa fa-google\"></mat-icon>\n                  \t</a>\n                  \t<a href=\"\" class=\"icon twitter\">\n                  \t\t<mat-icon class=\"fa fa-twitter\"></mat-icon>\n                  \t</a>\n                  \t<a href=\"\" class=\"icon twitter\">\n                  \t\t<mat-icon class=\"fa fa-github-alt\"></mat-icon>\n                  \t</a>\n                  </div>\n               </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"pad-x-sm pad-b-sm\"> \t\n\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t<div class=\"mrgn-b-md pad-l-sm\" fxLayoutAlign=\"start center\">\n\t\t\t\t\t\t\t<div class=\"img-thumbnail mrgn-r-sm mrgn-b-sm\">\n\t                     <img class=\"img-circle\" src=\"{{gridlist.image}}\" height=\"50\" width=\"50\">\n\t                  </div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<h5 class=\"margin-none\">{{gridlist.name}}</h5>\n\t\t\t\t\t\t\t\t<span class=\"mat-text-muted gene-text-md\" fxLayoutAlign=\"start center\"><mat-icon>location_on</mat-icon>{{gridlist.location}}</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t<div class=\"add-user-btn\">\n\t\t               <mat-card-actions class=\"mat-pad-none mrgn-b-sm\">\n\t\t                  <button mat-raised-button color=\"{{gridlist.buttonColor}}\">SEND MESSAGE <mat-icon class=\"mrgn-l-sm\">send</mat-icon></button>\n\t\t               </mat-card-actions>\n\t         \t\t</div>\n\t         \t\t<span class=\"mat-text-{{gridlist.colorClass}}\" fxLayoutAlign=\"start center\">\n\t         \t\t\t<mat-icon>{{gridlist.icon}}</mat-icon><small>Availabel For Hire</small>\n\t         \t\t</span>\n\t\t\t\t\t</mat-card-content>\t\n\t\t\t\t</div>\t\n\t\t\t</mat-card>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-management/user-grid-list/user-grid-list.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/user-management/user-grid-list/user-grid-list.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbWFuYWdlbWVudC91c2VyLWdyaWQtbGlzdC91c2VyLWdyaWQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user-management/user-grid-list/user-grid-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/user-management/user-grid-list/user-grid-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: UserGridListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGridListComponent", function() { return UserGridListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserGridListComponent = /** @class */ (function () {
    function UserGridListComponent(pageTItleService) {
        this.pageTItleService = pageTItleService;
        this.userGridList = [
            {
                backgroundImage: "assets/img/gridlist-1.jpg",
                image: "assets/img/user-1.jpg",
                name: "Robert See",
                location: "Durham",
                colorClass: "primary",
                buttonColor: "primary",
                icon: "done"
            },
            {
                backgroundImage: "assets/img/gridlist-2.jpg",
                image: "assets/img/user-2.jpg",
                name: "Alice Perrone",
                location: "San Diego",
                colorClass: "warn",
                buttonColor: "accent",
                icon: "clear"
            },
            {
                backgroundImage: "assets/img/gridlist-3.jpg",
                image: "assets/img/user-3.jpg",
                name: "Daniel Bagley",
                location: "Morden",
                colorClass: "primary",
                buttonColor: "primary",
                icon: "done"
            },
            {
                backgroundImage: "assets/img/gridlist-4.jpg",
                image: "assets/img/user-4.jpg",
                name: "Carolyn Copeland",
                location: "Hartford",
                colorClass: "warn",
                buttonColor: "accent",
                icon: "clear"
            },
            {
                backgroundImage: "assets/img/gridlist-5.jpg",
                image: "assets/img/user-5.jpg",
                name: "Annie Workman",
                location: "Houston",
                colorClass: "primary",
                buttonColor: "primary",
                icon: "done"
            },
            {
                backgroundImage: "assets/img/gridlist-6.jpg",
                image: "assets/img/user-6.jpg",
                name: "Anna Robertson",
                location: "Owensboro",
                colorClass: "warn",
                buttonColor: "accent",
                icon: "clear"
            },
            {
                backgroundImage: "assets/img/gridlist-1.jpg",
                image: "assets/img/user-7.jpg",
                name: "Priscilla Hughes",
                location: "Houston",
                colorClass: "primary",
                buttonColor: "primary",
                icon: "done"
            },
            {
                backgroundImage: "assets/img/gridlist-2.jpg",
                image: "assets/img/user-8.jpg",
                name: "Flossie Morrow",
                location: "Brock",
                colorClass: "warn",
                buttonColor: "accent",
                icon: "clear"
            },
            {
                backgroundImage: "assets/img/gridlist-3.jpg",
                image: "assets/img/user-9.jpg",
                name: "Joseph Prasad",
                location: "Toronto",
                colorClass: "primary",
                buttonColor: "primary",
                icon: "done"
            },
            {
                backgroundImage: "assets/img/gridlist-4.jpg",
                image: "assets/img/user-9.jpg",
                name: "Ronald Lee",
                location: "Erin Mills",
                colorClass: "primary",
                buttonColor: "primary",
                icon: "done"
            },
            {
                backgroundImage: "assets/img/gridlist-5.jpg",
                image: "assets/img/user-10.jpg",
                name: "Charles Numbers",
                location: "Surrey",
                colorClass: "warn",
                buttonColor: "accent",
                icon: "clear"
            },
            {
                backgroundImage: "assets/img/gridlist-6.jpg",
                image: "assets/img/user-11.jpg",
                name: "Ron Mingo",
                location: "Montreal",
                colorClass: "primary",
                buttonColor: "primary",
                icon: "done"
            }
        ];
    }
    UserGridListComponent.prototype.ngOnInit = function () {
        this.pageTItleService.setTitle("User Grid List");
    };
    UserGridListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-user-grid-list',
            template: __webpack_require__(/*! ./user-grid-list.component.html */ "./src/app/user-management/user-grid-list/user-grid-list.component.html"),
            styles: [__webpack_require__(/*! ./user-grid-list.component.scss */ "./src/app/user-management/user-grid-list/user-grid-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"]])
    ], UserGridListComponent);
    return UserGridListComponent;
}());



/***/ }),

/***/ "./src/app/user-management/user-manage-list/user-manage-list.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/user-management/user-manage-list/user-manage-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-manage-list\">\n   <mat-card>\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\">\n         <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n            <div class=\"mrgn-r-sm\">\n               <mat-icon class=\"mat-icon-grey cursor-pointer\">loop</mat-icon>\n            </div>\n            <div class=\"mrgn-l-sm mrgn-r-sm\">\n               <mat-form-field>\n                  <mat-select placeholder=\"More\">\n                     <mat-option value=\"All\">All</mat-option>\n                     <mat-option value=\"Remove\">Remove</mat-option>\n                     <mat-option value=\"Edit\">Edit</mat-option>\n                     <mat-option value=\"Recently\">Recently</mat-option>\n                  </mat-select>\n               </mat-form-field>\n            </div>\n         </div>   \n         <div class=\"mrgn-l-md mrgn-b-md add-user-btn\" fxLayoutAlign=\"start center\">\n            <mat-card-actions class=\"mat-pad-none margin-none\">\n               <button mat-raised-button mat-button-sm color=\"primary\" (click)=\"addNewUserDialog()\">ADD NEW USER<mat-icon class=\"mrgn-l-md gene-text-xl\">add</mat-icon></button>\n            </mat-card-actions>\n         </div>\n      </div>\n      <mat-divider></mat-divider>       \n      <div class=\"table-responsive\">  \n         <table class=\"full-wid\" mat-table [dataSource]=\"dataSource\">\n            <ng-container matColumnDef=\"select\">\n               <th mat-header-cell *matHeaderCellDef>\n                  <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                     [checked]=\"selection.hasValue() && isAllSelected()\"\n                     [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                  </mat-checkbox>\n               </th>\n               <td mat-cell *matCellDef=\"let row\">\n                  <mat-checkbox (click)=\"$event.stopPropagation()\"\n                     (change)=\"$event ? selection.toggle(row) : null\"\n                     [checked]=\"selection.isSelected(row)\">\n                  </mat-checkbox>\n               </td>\n            </ng-container>\n            <ng-container matColumnDef=\"user\">\n               <th mat-header-cell *matHeaderCellDef>User</th>\n               <td mat-cell *matCellDef=\"let element\">\n                  <div fxLayoutAlign=\"start center\">\n                     <div class=\"mrgn-r-sm user-list-image\">\n                        <img class=\"img-circle\" src=\"{{element.img}}\" height=\"50\" width=\"50\">\n                     </div>\n                     <div>   \n                        <h5 class=\"mrgn-b-xs\">{{element.firstName}} {{element.lastName}}</h5>\n                        <div *ngIf=\"element.isNewUser\">\n                        <mat-chip-list>\n                           <mat-chip color=\"primary\" selected>{{element.isNewUser}}</mat-chip>\n                        </mat-chip-list>\n                        </div>\n                     </div>   \n                  </div>\n               </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"emailAddress\">\n               <th mat-header-cell *matHeaderCellDef>Email Address</th>\n               <td mat-cell *matCellDef=\"let element\"><div class=\"make-ellipse\">{{element.emailAddress}} </div></td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"status\">\n               <th mat-header-cell *matHeaderCellDef>Status</th>\n               <td mat-cell *matCellDef=\"let element\"> \n                  <div fxLayoutAlign=\"start start\">\n                     <div class=\"rounded mrgn-r-xs primary-bg status-icon\"></div>\n                     <div class=\"status-text\">\n                        <div>{{element.status}}</div>\n                        <div class=\"mat-text-muted\">{{element.statusTime}}</div>\n                     </div>\n                  </div>\n               </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"accountType\">\n               <th mat-header-cell *matHeaderCellDef>Account Type</th>\n               <td mat-cell *matCellDef=\"let element\">\n                  <mat-chip-list>\n                     <mat-chip color=\"{{element.accountTypeColor}}\" selected> {{element.accountType}}</mat-chip>\n                  </mat-chip-list> \n               </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"dateCreated\">\n               <th mat-header-cell *matHeaderCellDef>Date Created</th>\n               <td mat-cell *matCellDef=\"let element\"> {{element.dateCreated | date:'mediumDate'}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"action\">\n               <th mat-header-cell *matHeaderCellDef>Action</th>\n               <td mat-cell *matCellDef=\"let element;let i = index;\">\n                  <button mat-icon-button>\n                     <mat-icon class=\"mat-icon-grey gene-text-lg\" (click)=\"onEdit(element, i)\">edit</mat-icon>\n                  </button>\n                   <button mat-icon-button>\n                     <mat-icon class=\"mat-icon-grey gene-text-lg\">remove_red_eye</mat-icon>\n                  </button>\n                   <button mat-icon-button (click)=\"onDelete(i)\">\n                     <mat-icon class=\"mat-icon-grey gene-text-lg\">delete</mat-icon>\n                  </button>\n               </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"\n               (click)=\"selection.toggle(row)\"></tr>\n         </table>\n      </div>   \n      <div class=\"pagination\">\n         <mat-paginator [length]=\"usermanagelist.length\"\n           [pageSize]=\"10\"\n           [pageSizeOptions]=\"[5, 10, 25, 100]\">\n         </mat-paginator>\n      </div>\n   </mat-card>\n</div>   "

/***/ }),

/***/ "./src/app/user-management/user-manage-list/user-manage-list.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/user-management/user-manage-list/user-manage-list.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZS1saXN0L3VzZXItbWFuYWdlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user-management/user-manage-list/user-manage-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/user-management/user-manage-list/user-manage-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: UserManageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManageListComponent", function() { return UserManageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _service_core_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/core/core.service */ "./src/app/service/core/core.service.ts");
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





var UserManageListComponent = /** @class */ (function () {
    function UserManageListComponent(coreService, pageTitleService) {
        this.coreService = coreService;
        this.pageTitleService = pageTitleService;
        this.color = {
            "Platinum": "primary",
            "Gold": "accent",
            "Silver": "warn"
        };
        this.usermanagelist = [
            {
                img: "assets/img/user-1.jpg",
                firstName: "Steven",
                lastName: "Gonzalez",
                isNewUser: "New",
                emailAddress: "StevenAGonzalez@dayrep.com",
                status: "Active",
                statusTime: "Since 1 hour",
                accountTypeColor: "primary",
                accountType: "Platinum",
                dateCreated: "13 Aug 2018"
            },
            {
                img: "assets/img/user-2.jpg",
                firstName: "Josephine",
                lastName: "Goodman",
                isNewUser: "New",
                emailAddress: "JosephineKGoodman@jourrapide.com",
                status: "Inactive",
                statusTime: "Since 30 min",
                accountType: "Gold",
                accountTypeColor: "accent",
                dateCreated: "22 Aug 2018"
            },
            {
                img: "assets/img/user-3.jpg",
                firstName: "Mario",
                lastName: "Harmon",
                emailAddress: "MarioCHarmon@armyspy.com",
                status: "Active",
                statusTime: "Since 2 hour",
                accountType: "Silver",
                accountTypeColor: "warn",
                dateCreated: "13 Aug 2018"
            },
            {
                img: "assets/img/user-4.jpg",
                firstName: "Aleta",
                lastName: "Goodell",
                emailAddress: "AletaDGoodell@teleworm.us",
                status: "Inactive",
                statusTime: "Since 24 min",
                accountType: "Platinum",
                accountTypeColor: "primary",
                dateCreated: "22 Aug 2018",
            },
            {
                img: "assets/img/user-5.jpg",
                firstName: "Florence",
                lastName: "Smith",
                emailAddress: "FlorenceJSmith@rhyta.com",
                status: "Active",
                statusTime: "Since 10 hour",
                accountType: "Gold",
                accountTypeColor: "accent",
                dateCreated: "13 Aug 2018"
            },
            {
                img: "assets/img/user-6.jpg",
                firstName: "Helen",
                lastName: "Moronta",
                emailAddress: "HelenLMoronta@teleworm.us",
                status: "Inactive",
                statusTime: "Since 5 hour",
                accountType: "Silver",
                accountTypeColor: "warn",
                dateCreated: "22 Aug 2018"
            },
            {
                img: "assets/img/user-7.jpg",
                firstName: "Leanora",
                lastName: "Reed",
                emailAddress: "LeanoraTReed@rhyta.com",
                status: "Active",
                statusTime: "Since 10 min",
                accountType: "Platinum",
                accountTypeColor: "primary",
                dateCreated: "13 Aug 2018",
            },
            {
                img: "assets/img/user-8.jpg",
                firstName: "Judy",
                lastName: "Gallardo",
                emailAddress: "JudyPGallardo@dayrep.com",
                status: "Inactive",
                statusTime: "Since 4 hour",
                accountType: "Gold",
                accountTypeColor: "accent",
                dateCreated: "22 Aug 2018"
            },
            {
                img: "assets/img/user-9.jpg",
                firstName: "Goldie",
                lastName: "Carlson",
                emailAddress: "GoldieJCarlson@teleworm.us",
                status: "Active",
                statusTime: "Since 9 hour",
                accountType: "Silver",
                accountTypeColor: "warn",
                dateCreated: "13 Aug 2018"
            },
            {
                img: "assets/img/user-3.jpg",
                firstName: "Bradley",
                lastName: "Bannon",
                emailAddress: "BradleyDBannon@teleworm.us",
                status: "Inactive",
                statusTime: "Since 5 min",
                accountType: "Platinum",
                accountTypeColor: "primary",
                dateCreated: "22 Aug 2018"
            }
        ];
        this.displayedColumns = ['select', 'user', 'emailAddress', 'status', 'accountType', 'dateCreated', 'action'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.usermanagelist);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
    }
    UserManageListComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("User Management");
        this.dataSource.paginator = this.paginator;
    };
    /**
      * Whether the number of selected elements matches the total number of rows.
      */
    UserManageListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /**
      * Selects all rows if they are not all selected; otherwise clear selection.
      */
    UserManageListComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    /**
      * addNewUserDialog method is used to open a add new user dialog.
      */
    UserManageListComponent.prototype.addNewUserDialog = function () {
        var _this = this;
        this.coreService.addNewUserDailog().
            subscribe(function (res) { _this.popUpNewUserResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getAddUserPopupResponse(_this.popUpNewUserResponse); });
    };
    /**
      *getAddUserPopupResponse method is used to get a new user dialog response.
      *if response will be get then add new user into user list.
      */
    UserManageListComponent.prototype.getAddUserPopupResponse = function (response) {
        if (response) {
            console.log(response);
            var addUser = {
                img: "assets/img/user-4.jpg",
                firstName: response.firstName,
                lastName: response.lastName,
                emailAddress: response.emailAddress,
                accountType: response.accountType,
                status: "Active",
                statusTime: "Since 1 hour",
                dateCreated: new Date(),
                accountTypeColor: this.color[response.accountType]
            };
            this.usermanagelist.push(addUser);
        }
    };
    /**
      *onDelete method is used to open a delete dialog.
      */
    UserManageListComponent.prototype.onDelete = function (i) {
        var _this = this;
        this.coreService.deleteDialog("Are you sure you want to delete this user permanently?").
            subscribe(function (res) { _this.popUpDeleteUserResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getDeleteResponse(_this.popUpDeleteUserResponse, i); });
    };
    /**
      * getDeleteResponse method is used to delete a user from the user list.
      */
    UserManageListComponent.prototype.getDeleteResponse = function (response, i) {
        if (response == "yes") {
            this.dataSource.data.splice(i, 1);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.dataSource.data);
        }
    };
    /**
      * onEdit method is used to open a edit dialog.
      */
    UserManageListComponent.prototype.onEdit = function (data, index) {
        var _this = this;
        this.coreService.editList(data).
            subscribe(function (res) { _this.popUpEditUserResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getEditResponse(_this.popUpEditUserResponse, data, index); });
    };
    /**
      * getEditResponse method is used to edit a user data.
      */
    UserManageListComponent.prototype.getEditResponse = function (response, data, i) {
        if (response) {
            this.usermanagelist[i].firstName = response.firstName,
                this.usermanagelist[i].lastName = response.lastName,
                this.usermanagelist[i].emailAddress = response.emailAddress,
                this.usermanagelist[i].accountType = response.accountType,
                this.usermanagelist[i].accountTypeColor = this.color[response.accountType];
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], UserManageListComponent.prototype, "paginator", void 0);
    UserManageListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-user-manage-list',
            template: __webpack_require__(/*! ./user-manage-list.component.html */ "./src/app/user-management/user-manage-list/user-manage-list.component.html"),
            styles: [__webpack_require__(/*! ./user-manage-list.component.scss */ "./src/app/user-management/user-manage-list/user-manage-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_core_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
            _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_4__["PageTitleService"]])
    ], UserManageListComponent);
    return UserManageListComponent;
}());



/***/ }),

/***/ "./src/app/user-management/user-management.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/user-management/user-management.module.ts ***!
  \***********************************************************/
/*! exports provided: UserManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementModule", function() { return UserManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_management_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-management.routing */ "./src/app/user-management/user-management.routing.ts");
/* harmony import */ var _user_manage_list_user_manage_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-manage-list/user-manage-list.component */ "./src/app/user-management/user-manage-list/user-manage-list.component.ts");
/* harmony import */ var _user_grid_list_user_grid_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-grid-list/user-grid-list.component */ "./src/app/user-management/user-grid-list/user-grid-list.component.ts");
/* harmony import */ var _widget_component_widget_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widget-component/widget-component.module */ "./src/app/widget-component/widget-component.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UserManagementModule = /** @class */ (function () {
    function UserManagementModule() {
    }
    UserManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _user_manage_list_user_manage_list_component__WEBPACK_IMPORTED_MODULE_6__["UserManageListComponent"],
                _user_grid_list_user_grid_list_component__WEBPACK_IMPORTED_MODULE_7__["UserGridListComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_user_management_routing__WEBPACK_IMPORTED_MODULE_5__["UserManagementRoutes"]),
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
                _widget_component_widget_component_module__WEBPACK_IMPORTED_MODULE_8__["WidgetComponentModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"]
            ]
        })
    ], UserManagementModule);
    return UserManagementModule;
}());



/***/ }),

/***/ "./src/app/user-management/user-management.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/user-management/user-management.routing.ts ***!
  \************************************************************/
/*! exports provided: UserManagementRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementRoutes", function() { return UserManagementRoutes; });
/* harmony import */ var _user_manage_list_user_manage_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-manage-list/user-manage-list.component */ "./src/app/user-management/user-manage-list/user-manage-list.component.ts");
/* harmony import */ var _user_grid_list_user_grid_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-grid-list/user-grid-list.component */ "./src/app/user-management/user-grid-list/user-grid-list.component.ts");


var UserManagementRoutes = [
    {
        path: '',
        redirectTo: 'usermanagelist',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'usermanagelist',
                component: _user_manage_list_user_manage_list_component__WEBPACK_IMPORTED_MODULE_0__["UserManageListComponent"]
            },
            {
                path: 'usergridlist',
                component: _user_grid_list_user_grid_list_component__WEBPACK_IMPORTED_MODULE_1__["UserGridListComponent"]
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=user-management-user-management-module.js.map