(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crm-crm-module"],{

/***/ "./src/app/crm/clients/clients.component.html":
/*!****************************************************!*\
  !*** ./src/app/crm/clients/clients.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\n   <mat-card class=\"pad-y-lg mrgn-b-md\">\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n         <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"30\" fxFlex.lg=\"30\" fxFlex.xl=\"30\">\n            <div class=\"pad-r-md\">\n               <h2>{{'Search' | translate}}</h2>\n            </div>\n         </div>\n         <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"70\" fxFlex.lg=\"70\" fxFlex.xl=\"70\">\n            <div fxLayout=\"row wrap\">\n               <div class=\"form-group pad-r-md\" fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"calc(100% - 200px)\" fxFlex.lg=\"calc(100% - 200px)\" fxFlex.xl=\"calc(100% - 200px)\">\n                  <mat-form-field class=\"full-wid\" floatLabel=\"never\">\n                     <input matInput placeholder=\"Search Projects\">\n                  </mat-form-field>\n               </div>\n               <div class=\"contact-btn\" fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"200px\" fxFlex.lg=\"200px\" fxFlex.xl=\"200px\"> \n                  <button class=\"mrgn-r-sm mrgn-b-sm\" mat-raised-button color=\"primary\">Search</button>\n                  <button mat-raised-button color=\"primary\" (click)=\"addNewClientDialog()\">Add<mat-icon class=\"mrgn-l-sm\">add</mat-icon></button>\n               </div>\n            </div>\n         </div>\n      </div>\t\t\t\n   </mat-card>\t\n</div>\n<div class=\"contact-wrapper client-wrapper\">\n   <div class=\"contact-tab-wrapper\">\n      <div>\n         <mat-card class=\"pad-all-md\">\n            <mat-tab-group color=\"accent\">\n               <mat-tab label=\"{{'All Client' | translate }}\">\n                  <div class=\"gene-card-content pad-b-xs\" fxLayout=\"row wrap\">\n                     <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"33.33\" fxFlex.lg=\"25\" fxFlex.xl=\"25\" *ngFor = \"let contacts of clientsContent;let i = index\">\n                        <mat-card class=\"pad-all-md\">\n                           <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between start\">\n                              <div fxFlex.xl=\"100\" fxFlex.lg=\"100\" fxFlex.md=\"100\"  fxFlex.sm=\"100\" fxFlex.xs=\"100\">\n                                 <div class=\"contact-item-info\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n                                    <div class=\"pad-all-xs\" fxFlex.xl=\"100\" fxFlex.lg=\"100\" fxFlex.md=\"100\" fxFlex.sm=\"100\" fxFlex.xs=\"100\">\n                                       <div class=\"tab-image\">\n                                          <img class=\"border-rad-base\" alt=\"tab image\" src=\"{{contacts.image}}\" width=\"95\" height=\"95\">\n                                       </div>\n                                    </div>\t\n                                    <div class=\"pad-all-xs\" fxFlex.xl=\"100\" fxFlex.xl=\"100\" fxFlex.xl=\"100\"  fxFlex.sm=\"100\" fxFlex.xs=\"100\">\n                                       <h4 class=\"margin-none primary-text\">{{contacts.name}}</h4>\n                                       <span class=\"contact-links gene-block make-ellipse\"><a class=\"gene-text-md\" href=\"{{contacts.e_mail}}\">{{contacts.e_mail}}</a></span>\n                                       <span class=\"contact-links gene-block\"><a class=\"gene-text-md\" href=\"{{contacts.phone_number}}\">{{contacts.phone_number}}</a> </span>\n                                       <span class=\"gene-block gene-text-md\">{{contacts.country}}</span>\n                                    </div>\t\t\n                                 </div>\n                              </div>\n                              <div fxFlex.xl=\"100\" fxFlex.lg=\"100\" fxFlex.md=\"100\"  fxFlex.sm=\"100\" fxFlex.xs=\"100\">\n                                 <div class=\"icon\" fxLayoutAlign=\"start start\">\n                                    <button mat-icon-button (click)=\"onEdit(contacts,i)\"><mat-icon>edit</mat-icon></button>\n                                    <button mat-icon-button (click)=\"onDelete(i)\"><mat-icon>delete</mat-icon></button>\n                                 </div>\n                              </div>\n                           </div>\t\n                        </mat-card>\t\n                     </div>\t\n                  </div>\t\t\t\t\t\n               </mat-tab>\n               <mat-tab label=\"{{'Favourite' | translate}}\">\n                  <div class=\"gene-card-content pad-b-xs\" fxLayout=\"row wrap\">\n                     <ng-container *ngFor = \"let contacts of clientsContent; let i = index\">\n                        <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"33.33\" fxFlex.lg=\"25\" fxFlex.xl=\"25\" *ngIf=\"contacts.tag=='favourite'\">\n                           <mat-card class=\"pad-all-md\">\n                              <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between start\">\n                                 <div fxFlex.xl=\"100\" fxFlex.lg=\"100\" fxFlex.md=\"100\"  fxFlex.sm=\"100\" fxFlex.xs=\"100\">\n                                    <div class=\"contact-item-info\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n                                       <div class=\"pad-all-xs\" fxFlex.xl=\"100\" fxFlex.lg=\"100\" fxFlex.md=\"100\" fxFlex.sm=\"100\" fxFlex.xs=\"100\">\n                                          <div class=\"tab-image\">\n                                             <img class=\"border-rad-base\" alt=\"tab image\" src=\"{{contacts.image}}\" width=\"95\" height=\"95\">\n                                          </div>\n                                       </div>\t\n                                       <div class=\"pad-all-xs\" fxFlex.xl=\"100\" fxFlex.xl=\"100\" fxFlex.xl=\"100\"  fxFlex.sm=\"100\" fxFlex.xs=\"100\">\n                                          <h4 class=\"margin-none primary-text\">{{contacts.name}}</h4>\n                                          <span class=\"contact-links gene-block make-ellipse\"><a class=\"gene-text-md\" href=\"{{contacts.e_mail}}\">{{contacts.e_mail}}</a></span>\n                                          <span class=\"contact-links gene-block\"><a class=\"gene-text-md\" href=\"{{contacts.phone_number}}\">{{contacts.phone_number}}</a> </span>\n                                          <span class=\"gene-block gene-text-md\">{{contacts.country}}</span>\n                                       </div>\t\t\n                                    </div>\n                                 </div>\n                                 <div fxFlex.xl=\"100\" fxFlex.lg=\"100\" fxFlex.md=\"100\"  fxFlex.sm=\"100\" fxFlex.xs=\"100\">\n                                    <div class=\"icon\" fxLayoutAlign=\"start start\">\n                                       <button mat-icon-button (click)=\"onEdit(contacts,i)\"><mat-icon>edit</mat-icon></button>\n                                       <button mat-icon-button (click)=\"onDelete(i)\"><mat-icon>delete</mat-icon></button>\n                                    </div>\n                                 </div>\n                              </div>\t\n                           </mat-card>\t\n                        </div>\n                     </ng-container>\t\n                  </div>\t\t\t\t\t\n               </mat-tab>\n               <mat-tab label=\"{{'Recently Added' | translate}}\">\n                  <div class=\"gene-card-content pad-b-xs\" fxLayout=\"row wrap\" >\n                     <ng-container *ngFor = \"let contacts of clientsContent; let i = index\">\n                        <div fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"33.33\" fxFlex.lg=\"25\" fxFlex.xl=\"25\" *ngIf=\"contacts.tag=='recently_added'\">\n                           <mat-card class=\"pad-all-md\">\n                              <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between start\">\n                                 <div fxFlex.xl=\"100\" fxFlex.lg=\"100\" fxFlex.md=\"100\"  fxFlex.sm=\"100\" fxFlex.xs=\"100\">\n                                    <div class=\"contact-item-info\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n                                       <div class=\"pad-all-xs\" fxFlex.xl=\"100\" fxFlex.lg=\"100\" fxFlex.md=\"100\" fxFlex.sm=\"100\" fxFlex.xs=\"100\">\n                                          <div class=\"tab-image\">\n                                             <img class=\"border-rad-base\" alt=\"tab image\" src=\"{{contacts.image}}\" width=\"95\" height=\"95\">\n                                          </div>\n                                       </div>\t\n                                       <div class=\"pad-all-xs\" fxFlex.xl=\"100\" fxFlex.xl=\"100\" fxFlex.xl=\"100\"  fxFlex.sm=\"100\" fxFlex.xs=\"100\">\n                                          <h4 class=\"margin-none primary-text\">{{contacts.name}}</h4>\n                                          <span class=\"contact-links gene-block make-ellipse\"><a class=\"gene-text-md\" href=\"{{contacts.e_mail}}\">{{contacts.e_mail}}</a></span>\n                                          <span class=\"contact-links gene-block\"><a class=\"gene-text-md\" href=\"{{contacts.phone_number}}\">{{contacts.phone_number}}</a> </span>\n                                          <span class=\"gene-block gene-text-md\">{{contacts.country}}</span>\n                                       </div>\t\t\n                                    </div>\n                                 </div>\n                                 <div fxFlex.xl=\"100\" fxFlex.lg=\"100\" fxFlex.md=\"100\"  fxFlex.sm=\"100\" fxFlex.xs=\"100\">\n                                    <div class=\"icon\" fxLayoutAlign=\"start start\">\n                                       <button mat-icon-button (click)=\"onEdit(contacts,i)\"><mat-icon>edit</mat-icon></button>\n                                       <button mat-icon-button (click)=\"onDelete(i)\"><mat-icon>delete</mat-icon></button>\n                                    </div>\n                                 </div>\n                              </div>\t\n                           </mat-card>\t\n                        </div>\t\n                     </ng-container>      \n                  </div>\t\t\t\n               </mat-tab>\t\n            </mat-tab-group>\n         </mat-card>\n      </div>\t\t\n   </div>\n</div>\t\n"

/***/ }),

/***/ "./src/app/crm/clients/clients.component.scss":
/*!****************************************************!*\
  !*** ./src/app/crm/clients/clients.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NybS9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/crm/clients/clients.component.ts":
/*!**************************************************!*\
  !*** ./src/app/crm/clients/clients.component.ts ***!
  \**************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_core_core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/core/core.service */ "./src/app/service/core/core.service.ts");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
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




var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(coreService, pageTitleService, translate) {
        this.coreService = coreService;
        this.pageTitleService = pageTitleService;
        this.translate = translate;
        //client content
        this.clientsContent = [
            {
                image: "assets/img/user-1.jpg",
                name: "Jerry Ried",
                e_mail: "JerryBRied@jourrapide.com",
                phone_number: "+1 207-589-4752",
                country: "Liberty",
                tag: "recently_added"
            },
            {
                image: "assets/img/user-2.jpg",
                name: "Gustavo Stevenson",
                e_mail: "GustavoJStevenson@rhyta.com",
                phone_number: "+1 727-709-5505",
                country: "Tampa",
                tag: "recently_added"
            },
            {
                image: "assets/img/user-3.jpg",
                name: "John Shrum",
                e_mail: "JohnLShrum@jourrapide.com ",
                phone_number: "+1 650-722-2798",
                country: "San Francisco",
                tag: "recently_added"
            },
            {
                image: "assets/img/user-4.jpg",
                name: "Julie Reno",
                e_mail: "JulieDReno@dayrep.com",
                phone_number: "+1 956-303-4288",
                country: "Harlingen",
                tag: "favourite"
            },
            {
                image: "assets/img/user-5.jpg",
                name: "Nancy Beck",
                e_mail: "NancyKBeck@teleworm.us",
                phone_number: "+1 423-954-4020",
                country: "Chattanooga",
                tag: "favourite"
            },
            {
                image: "assets/img/user-6.jpg",
                name: "Travis Klotz",
                e_mail: "TravisMKlotz@jourrapide.com",
                phone_number: "+1 312-405-5954",
                country: "Hickory Hills",
                tag: "favourite"
            },
            {
                image: "assets/img/user-2.jpg",
                name: "Anna Estes",
                e_mail: "AnnaLEstes@armyspy.com",
                phone_number: "+1 808-652-9469",
                country: "Waipahu",
                tag: "favourite"
            },
            {
                image: "assets/img/user-3.jpg",
                name: "David Jones",
                e_mail: "DavidDJones@jourrapide.com",
                phone_number: "+1 407-343-1604",
                country: "Kissimmee",
                tag: "favourite"
            },
            {
                image: "assets/img/user-4.jpg",
                name: "Hayden Bower",
                e_mail: "HaydenMBower@armyspy.com",
                phone_number: "+1 601-298-5772",
                country: "Carthage",
                tag: "favourite"
            },
            {
                image: "assets/img/user-1.jpg",
                name: "Cathy Hagood",
                e_mail: "CathyWHagood@jourrapide.com",
                phone_number: "+1 325-660-7801",
                country: "Abilene",
                tag: "recently_added"
            },
            {
                image: "assets/img/user-2.jpg",
                name: "Anna Estes",
                e_mail: "AnnaLEstes@armyspy.com",
                phone_number: "+1 808-652-9469",
                country: "Waipahu",
                tag: "recently_added"
            },
            {
                image: "assets/img/user-2.jpg",
                name: "Mary Perez",
                e_mail: "MaryJPerez@teleworm.us",
                phone_number: "+1 626-374-4199",
                country: "Alhambra",
                tag: "recently_added"
            }, {
                image: "assets/img/user-1.jpg",
                name: "Jerry Ried",
                e_mail: "JerryBRied@jourrapide.com",
                phone_number: "+1 207-589-4752",
                country: "Liberty",
                tag: "recently_added"
            },
            {
                image: "assets/img/user-2.jpg",
                name: "Gustavo Stevenson",
                e_mail: "GustavoJStevenson@rhyta.com",
                phone_number: "+1 727-709-5505",
                country: "Tampa",
                tag: "recently_added"
            },
            {
                image: "assets/img/user-3.jpg",
                name: "John Shrum",
                e_mail: "JohnLShrum@jourrapide.com ",
                phone_number: "+1 650-722-2798",
                country: "San Francisco",
                tag: "favourite"
            },
            {
                image: "assets/img/user-4.jpg",
                name: "Julie Reno",
                e_mail: "JulieDReno@dayrep.com",
                phone_number: "+1 956-303-4288",
                country: "Harlingen",
                tag: "favourite"
            }
        ];
    }
    ClientsComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Clients");
    };
    /**
     *onDelete method is used to open a delete dialog.
     */
    ClientsComponent.prototype.onDelete = function (i) {
        var _this = this;
        this.coreService.deleteDialog("Are you sure you want to delete this Client permanently?").
            subscribe(function (res) { _this.popUpDeleteResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getDeleteResponse(_this.popUpDeleteResponse, i); });
    };
    /**
     * getDeleteResponse method is used to delete a client from the client list.
     */
    ClientsComponent.prototype.getDeleteResponse = function (response, i) {
        if (response == 'yes') {
            this.clientsContent.splice(i, 1);
        }
    };
    /**
     * addNewClientDialog method is used to open a add new client dialog.
     */
    ClientsComponent.prototype.addNewClientDialog = function () {
        var _this = this;
        this.coreService.addNewClientDialog().
            subscribe(function (res) { _this.popUpNewClientResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getAddClientPopupResponse(_this.popUpNewClientResponse); });
    };
    /**
      *getAddClientPopupResponse method is used to get a new client dialog response.
      *if response will be get then add new client into client list.
      */
    ClientsComponent.prototype.getAddClientPopupResponse = function (response) {
        if (response) {
            var addUser = {
                image: "assets/img/user-4.jpg",
                name: response.name,
                e_mail: response.emailAddress,
                tag: "recently_added",
                country: response.location,
                phone_number: response.phoneNumber
            };
            this.clientsContent.push(addUser);
        }
    };
    /**
      * onEdit method is used to open a edit dialog.
      */
    ClientsComponent.prototype.onEdit = function (data, index) {
        var _this = this;
        this.coreService.editClientList(data).
            subscribe(function (res) { _this.popUpEditUserResponse = res; }, function (err) { return console.log(err); }, function () { return _this.getEditResponse(_this.popUpEditUserResponse, data, index); });
    };
    /**
      * getEditResponse method is used to edit a client data.
      */
    ClientsComponent.prototype.getEditResponse = function (response, data, i) {
        if (response) {
            this.clientsContent[i].name = response.name,
                this.clientsContent[i].country = response.country,
                this.clientsContent[i].e_mail = response.e_mail,
                this.clientsContent[i].phone_number = response.phone_number;
        }
    };
    ClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-clients',
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/crm/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.scss */ "./src/app/crm/clients/clients.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_core_core_service__WEBPACK_IMPORTED_MODULE_1__["CoreService"],
            _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/crm/crm.module.ts":
/*!***********************************!*\
  !*** ./src/app/crm/crm.module.ts ***!
  \***********************************/
/*! exports provided: CrmModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrmModule", function() { return CrmModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/crm/projects/projects.component.ts");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clients/clients.component */ "./src/app/crm/clients/clients.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/crm/reports/reports.component.ts");
/* harmony import */ var _widget_component_widget_component_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../widget-component/widget-component.module */ "./src/app/widget-component/widget-component.module.ts");
/* harmony import */ var _crm_routing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./crm.routing */ "./src/app/crm/crm.routing.ts");
/* harmony import */ var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./project-detail/project-detail.component */ "./src/app/crm/project-detail/project-detail.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var CrmModule = /** @class */ (function () {
    function CrmModule() {
    }
    CrmModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
                _clients_clients_component__WEBPACK_IMPORTED_MODULE_10__["ClientsComponent"],
                _reports_reports_component__WEBPACK_IMPORTED_MODULE_11__["ReportsComponent"], _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_14__["ProjectDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_crm_routing__WEBPACK_IMPORTED_MODULE_13__["crmRouters"]),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickCarouselModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateModule"],
                _widget_component_widget_component_module__WEBPACK_IMPORTED_MODULE_12__["WidgetComponentModule"]
            ]
        })
    ], CrmModule);
    return CrmModule;
}());



/***/ }),

/***/ "./src/app/crm/crm.routing.ts":
/*!************************************!*\
  !*** ./src/app/crm/crm.routing.ts ***!
  \************************************/
/*! exports provided: crmRouters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crmRouters", function() { return crmRouters; });
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/crm/projects/projects.component.ts");
/* harmony import */ var _clients_clients_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clients/clients.component */ "./src/app/crm/clients/clients.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/crm/reports/reports.component.ts");
/* harmony import */ var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-detail/project-detail.component */ "./src/app/crm/project-detail/project-detail.component.ts");




var crmRouters = [
    {
        path: '',
        redirectTo: 'projects',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: "projects",
                component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_0__["ProjectsComponent"]
            },
            {
                path: "clients",
                component: _clients_clients_component__WEBPACK_IMPORTED_MODULE_1__["ClientsComponent"]
            },
            {
                path: "reports",
                component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"]
            },
            {
                path: "project-detail",
                component: _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProjectDetailComponent"]
            },
            {
                path: "project-detail/:id",
                component: _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProjectDetailComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/crm/project-detail/project-detail.component.html":
/*!******************************************************************!*\
  !*** ./src/app/crm/project-detail/project-detail.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"projectDetails\">\n   <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"height-full\">\n      <div fxFlex.gt-lg=\"100\" fxFlex.gt-md=\"100\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"90\" fxFlex=\"100\">\n         <div fxLayout=\"row wrap\" fxLayoutAlign=\"center start\" class=\"height-full\">\n            <div fxFlex.gt-md=\"70\" fxFlex.gt-sm=\"60\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"pad-x-md pad-b-md\">\n               <div fxLayout=\"column\">\n                  <h2>{{projectDetails.name | translate}}</h2>\n                  <mat-card class=\"description-wrap pad-y-md mrgn-x-none mat-card\">\n                     <div class=\"gene-sec-title\">\n                        <h3>{{ 'Description' | translate}}</h3>\n                     </div>\n                     <div class=\"gene-sec-content mrgn\">\n                        <p  class=\"font-bold mrgn-b-sm\">{{projectDetails.decription_heading}}</p>\n                        <p >{{projectDetails.description}}</p>\n                        <ul class=\"mrgn-b-none pad-l-md pad-r-none\">\n                           <li *ngFor=\"let points of projectDetails.description_points\">{{points}}</li>\n                        </ul>\n                     </div>\n                  </mat-card>\n               </div>\n               <div fxLayout=\"column\">\n                  <mat-card class=\"mrgn-x-none\">\n                     <mat-card-title>\n                        <div class=\"sec-title\">\n                           <h3>{{'Files Uploaded' | translate }}</h3>\n                        </div>\n                     </mat-card-title>             \n                     <div class=\"content-wrap\">\n                        <mat-list>\n                           <ng-container *ngFor=\"let upload of projectDetails.fileUploads\">\n                              <mat-list-item>\n                                 <mat-icon mat-list-icon>{{upload.icon}}</mat-icon>\n                                 <h4 mat-line>{{upload.file}} </h4>\n                                 <small mat-line>{{upload.date}}</small>\n                              </mat-list-item>\n                              <mat-divider></mat-divider>\n                           </ng-container>\n                        </mat-list>                            \n                     </div>\n                  </mat-card>\n               </div>\n               <div fxLayout=\"column\">\n                  <mat-card class=\"mrgn-x-none\">\n                     <mat-card-title>\n                        <div class=\"sec-title\">\n                           <h3>{{ 'Statistics' | translate }}</h3>\n                        </div>\n                     </mat-card-title>             \n                     <div class=\"project-stats-chart\">\n                        <ms-statistics [data]=\"projectDetails.chartData\" [label]=\"projectDetails.chartLabel\"></ms-statistics>\n                     </div>\n                  </mat-card>\n               </div>\n            </div>\n            <div fxFlex.gt-md=\"30\" fxFlex.gt-sm=\"40\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"pad-b-xd\">                  \n               <div class=\"project-info-wrap\">\n                  <div fxLayout=\"column\">\n                     <mat-card>\n                        <mat-list role=\"list\">\n                           <mat-list-item role=\"listitem\">\n                              <div class=\"project-details-listing full-wid\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n                                 <div class=\"listing-title\">\n                                    <h5 class=\"font-normal\">{{'Budget' | translate}} : </h5>\n                                 </div>\n                                 <div class=\"listing-detail\">\n                                    <h5>{{projectDetails.budget}}</h5>\n                                 </div>\n                              </div>\n                              <mat-divider></mat-divider>\n                           </mat-list-item>\n                           <mat-list-item role=\"listitem\">\n                              <div class=\"project-details-listing full-wid\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n                                 <div class=\"listing-title\">\n                                    <h5 class=\"font-normal\">{{'Client' | translate }} : </h5>\n                                 </div>\n                                 <div class=\"listing-detail\">\n                                    <h5>{{projectDetails.client}}</h5>\n                                 </div>\n                              </div>\n                              <mat-divider></mat-divider>\n                           </mat-list-item>\n                           <mat-list-item role=\"listitem\">\n                              <div class=\"project-details-listing full-wid\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n                                 <div class=\"listing-title\">\n                                    <h5 class=\"font-normal\">{{ 'Department' | translate }} : </h5>\n                                 </div>\n                                 <div class=\"listing-detail\">\n                                    <h5>{{projectDetails.department}}</h5>\n                                 </div>\n                              </div>\n                              <mat-divider></mat-divider>\n                           </mat-list-item>\n                           <mat-list-item role=\"listitem\">\n                              <div class=\"project-details-listing full-wid\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n                                 <div class=\"listing-title\">\n                                    <h5 class=\"font-normal\">{{ 'Duration' | translate }} : </h5>\n                                 </div>\n                                 <div class=\"listing-detail\">\n                                    <h5>{{projectDetails.duration}}</h5>\n                                 </div>\n                              </div>\n                              <mat-divider></mat-divider>\n                           </mat-list-item>\n                           <mat-list-item role=\"listitem\">\n                              <div class=\"project-details-listing full-wid\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n                                 <div class=\"listing-title\">\n                                    <h5 class=\"font-normal\">{{ 'Project Manager' | translate }} : </h5>\n                                 </div>\n                                 <div class=\"listing-detail\">\n                                    <h5>{{projectDetails.project_manager}}</h5>\n                                 </div>\n                              </div>\n                              <mat-divider></mat-divider>\n                           </mat-list-item>\n                           <mat-list-item role=\"listitem\">\n                              <div class=\"project-details-listing full-wid\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n                                 <div class=\"listing-title\">\n                                    <h5 class=\"font-normal\">{{'Team' | translate }} : </h5>\n                                 </div>\n                                 <div class=\"listing-detail\">\n                                    <div class=\"team-img-wrap\">\n                                       <img class=\"thumb-gap\" src=\"{{image}}\" width=\"30\" height=\"30\" *ngFor=\"let image of projectDetails.team_image\">\n                                    </div>\n                                 </div>\n                              </div>\n                              <mat-divider></mat-divider>\n                           </mat-list-item>\n                           <mat-list-item role=\"listitem\">\n                              <div class=\"project-details-listing full-wid\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n                                 <div class=\"listing-title\">\n                                    <h5 class=\"font-normal\">{{'Status' | translate }} : </h5>\n                                 </div>\n                                 <div class=\"listing-detail\">\n                                    <h5 class=\"success-text\">{{projectDetails.status}}</h5>\n                                 </div>\n                              </div>\n                              <mat-divider></mat-divider>\n                           </mat-list-item>\n                           <mat-list-item role=\"listitem\">\n                              <div class=\"project-details-listing full-wid\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n                                 <div class=\"listing-title\">\n                                    <h5 class=\"font-normal\">{{'Deadline' | translate }} : </h5>\n                                 </div>\n                                 <div class=\"listing-detail\">\n                                    <h5>{{projectDetails.deadline}}</h5>\n                                 </div>\n                              </div>\n                           </mat-list-item>\n                        </mat-list>  \n                     </mat-card>\n                  </div>\n                  <div fxLayout=\"column\">\n                     <mat-card>                               \n                        <div class=\"progress-bar mrgn-b-md\">\n                           <h5 class=\"mrgn-b-none\">{{'Progress' | translate }} : <span class=\"primary-text\">{{projectDetails.progress_value}}%</span></h5>\n                           <mat-progress-bar mode=\"determinate\" value=\"{{projectDetails.progress_value}}\"></mat-progress-bar>\n                        </div>\n                     </mat-card>\n                  </div>\n                  <div fxLayout=\"column\">\n                     <mat-card>                               \n                        <div class=\"project-slider-wrap\">\n                           <h5 class=\"mrgn-b-md\">{{'Project Gallery' | translate }}</h5>\n                           <div class=\"project-slider\">\n                              <ngx-slick-carousel [config]=\"projectGallaryConfig\">\n                                 <img src=\"{{images}}\" ngxSlickItem width=\"\" height=\"\" alt=\"\" *ngFor=\"let images of projectDetails.project_gallery\">\n                              </ngx-slick-carousel>\n                           </div>\n                        </div>\n                     </mat-card>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/crm/project-detail/project-detail.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/crm/project-detail/project-detail.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NybS9wcm9qZWN0LWRldGFpbC9wcm9qZWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/crm/project-detail/project-detail.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/crm/project-detail/project-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailComponent", function() { return ProjectDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_core_core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/core/core.service */ "./src/app/service/core/core.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectDetailComponent = /** @class */ (function () {
    function ProjectDetailComponent(coreService, route, router, pageTitleService, translate) {
        this.coreService = coreService;
        this.route = route;
        this.router = router;
        this.pageTitleService = pageTitleService;
        this.translate = translate;
        this.projectGallaryConfig = { "slidesToShow": 1, "fade": true, "slidesToScroll": 1, "arrows": false, "dots": false, "autoplay": true, "autoplaySpeed": 2000 };
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitleService.setTitle("Project Detail");
        this.projectDetails = this.coreService.projectDetailsContent;
        this.route.params.subscribe(function (res) {
            _this.Id = res.id;
            _this.getProjectDetails();
        });
    };
    //getProjectDetails method is used to get the project details.
    ProjectDetailComponent.prototype.getProjectDetails = function () {
        var _this = this;
        this.Id = (this.Id) ? this.Id : 1;
        this.coreService.getProjectContent().
            subscribe(function (res) { _this.getProjectDetailsResponse(res); });
    };
    //getProjectDetailsResponse method is used to get the response of project and then show the project details.
    ProjectDetailComponent.prototype.getProjectDetailsResponse = function (response) {
        for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
            var data = response_1[_i];
            if (data.id == this.Id) {
                this.projectDetails = data;
                break;
            }
        }
    };
    ProjectDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-project-detail',
            template: __webpack_require__(/*! ./project-detail.component.html */ "./src/app/crm/project-detail/project-detail.component.html"),
            styles: [__webpack_require__(/*! ./project-detail.component.scss */ "./src/app/crm/project-detail/project-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_core_core_service__WEBPACK_IMPORTED_MODULE_1__["CoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_3__["PageTitleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());



/***/ }),

/***/ "./src/app/crm/projects/projects.component.html":
/*!******************************************************!*\
  !*** ./src/app/crm/projects/projects.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"pad-y-lg mrgn-b-lg\">\r\n   <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\r\n      <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"30\" fxFlex.lg=\"30\" fxFlex.xl=\"30\">\r\n         <div class=\"pad-r-md\">\r\n            <h2>{{'Search' | translate}}</h2>\r\n         </div>\r\n      </div>\r\n      <div fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"70\" fxFlex.lg=\"70\" fxFlex.xl=\"70\">\r\n         <div fxLayout=\"row wrap\">\r\n            <div class=\"form-group pad-r-md\" fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"calc(100% - 200px)\" fxFlex.lg=\"calc(100% - 200px)\" fxFlex.xl=\"calc(100% - 200px)\">\r\n               <mat-form-field class=\"full-wid\" floatLabel=\"never\">\r\n                  <input matInput placeholder=\"Search Projects\">\r\n               </mat-form-field>\r\n            </div>\r\n            <div class=\"contact-btn\" fxFlex.xs=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"200px\" fxFlex.lg=\"200px\" fxFlex.xl=\"200px\"> \r\n               <button class=\"mrgn-r-sm mrgn-b-sm\" mat-raised-button color=\"primary\">Search</button>\r\n               <button mat-raised-button color=\"primary\">Add<mat-icon class=\"mrgn-l-sm\">add</mat-icon></button>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\t\t\t\r\n</mat-card>\t\r\n<div class=\"mrgn-all-md\" fxLayoutAlign=\"space-between center\">\r\n   <div class=\"title\">\r\n      <h2 class=\"mrgn-b-none\">{{'Project' | translate }} {{showType | translate}}</h2>\r\n   </div>\r\n   <div class=\"project-icon\">\r\n      <button id=\"grid\" class=\"active\" mat-icon-button (click)=\"projectShowType('grid')\">\r\n         <mat-icon>apps</mat-icon>\r\n      </button>\r\n      <button id=\"list\" mat-icon-button (click)=\"projectShowType('list')\">\r\n         <mat-icon>list</mat-icon>\r\n      </button>\r\n   </div>\r\n</div>\r\n<ng-container *ngIf=\"showType == 'list';else gridtype\">\r\n   <div fxLayout=\"row wrap\">\r\n      <div fxFlex.gt-md=\"100\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n         <div class=\"project-list table-list-wrap\">\r\n            <mat-card class=\"pad-t-none\">\r\n               <!-- <div class=\"table-title\">\r\n                  <h4 class=\"mrgn-b-none\">Project List</h4>\r\n               </div>  -->\r\n               <mat-divider></mat-divider>       \r\n               <div class=\"table-responsive gene-card-content project-list-table\">  \r\n                  <table class=\"full-wid\" mat-table [dataSource]=\"liveTradeSource\">\r\n                     <ng-container matColumnDef=\"id\">\r\n                        <th mat-header-cell *matHeaderCellDef>Id</th>\r\n                        <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.id}}</td>\r\n                     </ng-container>\r\n                     <ng-container matColumnDef=\"name\">\r\n                        <th mat-header-cell *matHeaderCellDef>Project Name</th>\r\n                        <td class=\"text-nowrap project-name\" mat-cell *matCellDef=\"let element\"><a href=\"javascript:void(0)\" (click)=\"projectDetails(element)\">{{element.name}}</a></td>\r\n                     </ng-container>\r\n                     <ng-container matColumnDef=\"budget\">\r\n                        <th mat-header-cell *matHeaderCellDef>budget</th>\r\n                        <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.budget}}</td>\r\n                     </ng-container>\r\n                     <ng-container matColumnDef=\"duration\">\r\n                        <th mat-header-cell *matHeaderCellDef>Duration</th>\r\n                        <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.duration}}</td>\r\n                     </ng-container>\r\n                     <ng-container matColumnDef=\"client\">\r\n                        <th mat-header-cell *matHeaderCellDef>Client</th>\r\n                        <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.client}}</td>\r\n                     </ng-container>\r\n                     <ng-container matColumnDef=\"team_image\">\r\n                        <th mat-header-cell *matHeaderCellDef>Team</th>\r\n                        <td class=\"text-nowrap team-images-wrap pad-x-md\" mat-cell *matCellDef=\"let element\">\r\n                           <ng-container *ngFor=\"let image of element.team_image\">\r\n                              <img class=\"img-circle inline-block\" src=\"{{image}}\" width=\"30\" height=\"30\">\r\n                           </ng-container>\r\n                        </td>\r\n                     </ng-container>      \r\n                     <ng-container matColumnDef=\"status\">\r\n                        <th mat-header-cell *matHeaderCellDef>Status</th>\r\n                        <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">\r\n                           <mat-chip-list>\r\n                              <mat-chip color=\"{{element.statusColor}}\" selected>{{element.status}}</mat-chip>\r\n                           </mat-chip-list>\r\n                        </td>\r\n                     </ng-container>\r\n                     <ng-container matColumnDef=\"deadline\">\r\n                        <th mat-header-cell *matHeaderCellDef>Deadline</th>\r\n                        <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.deadline}}</td>\r\n                     </ng-container>\r\n                     <tr mat-header-row *matHeaderRowDef=\"displayedProjectIdColumns\"></tr>\r\n                     <tr mat-row *matRowDef=\"let row; columns: displayedProjectIdColumns\"></tr>\r\n                  </table>\r\n               </div>   \r\n               <mat-paginator [pageSizeOptions]=\"[10, 15, 20]\" showFirstLastButtons></mat-paginator>\r\n            </mat-card>\r\n         </div>\r\n      </div> \r\n   </div>\r\n</ng-container>\r\n<ng-template #gridtype>\r\n   <div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\">\r\n   \t<div fxFlex.gt-md=\"33.33\" fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\" *ngFor=\"let content of projectContent\">\r\n   \t\t<mat-card>\r\n   \t\t\t<div class=\"gene-card-title\">\r\n   \t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n   \t\t\t\t\t<div fxLayout=\"column\">\r\n   \t\t\t\t\t\t<h4 class=\"mrgn-b-none\"><a href=\"javascript:void(0);\" (click)=\"projectDetails(content)\">{{content.name | translate}}</a></h4>\r\n   \t\t\t\t\t</div> <span fxFlex></span>\r\n   \t\t\t\t\t<button mat-icon-button>\r\n                      <mat-icon>sync</mat-icon>\r\n                   </button>\r\n   \t\t\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"options\">\r\n                     <mat-icon>more_horiz</mat-icon>\r\n                  </button>\r\n   \t\t\t\t</div>\r\n   \t\t\t\t<mat-divider></mat-divider>\r\n   \t\t\t</div>\r\n   \t\t\t<div class=\"gene-card-content\">\r\n   \t\t\t\t<div class=\"desc-wrap\">\r\n                  <h5>{{'Description' | translate}} : </h5>\r\n                  <p>{{content.short_description}}<p>\r\n               </div>\r\n               <div class=\"project-team mrgn-b-md\">\r\n                  <h5>{{'Team Members' | translate}} : </h5>\r\n                  <div class=\"team-img-wrap\">\r\n                     <img class=\"thumb-gap\" src=\"{{image}}\" width=\"30\" height=\"30\" *ngFor=\"let image of content.team_image\">\r\n                  </div>\r\n               </div>\r\n               <div class=\"deadline-info mrgn-b-md\">\r\n                  <h5>{{'Deadline' | translate}} : </h5>\r\n                  <p>{{content.deadline}}</p>\r\n               </div>\r\n               <div class=\"progress-bar mrgn-b-md\">\r\n                  <h5 class=\"mrgn-b-none\">{{'Progress' | translate}} : <span class=\"primary-text\">{{content.progress_value}}%</span></h5>\r\n                  <mat-progress-bar mode=\"determinate\" value=\"{{content.progress_value}}\"></mat-progress-bar>\r\n               </div>\r\n               <div class=\"button-wrap text-right\">               \r\n                  <a href=\"javascript:void(0)\" (click)=\"projectDetails(content)\" class=\"primary-text\">{{'Learn More' | translate}}</a>\r\n               </div>\r\n   \t\t\t</div>\r\n   \t\t</mat-card>\r\n   \t</div>\r\n   </div>\r\n</ng-template>\r\n\r\n<mat-menu #options=\"matMenu\" x-position=\"before\">\r\n   <button mat-menu-item>\r\n      <mat-icon>settings</mat-icon> Settings </button>\r\n   <button mat-menu-item>\r\n      <mat-icon>more</mat-icon> View More </button>\r\n   <button mat-menu-item>\r\n      <mat-icon>notifications_off</mat-icon> Disable notifications </button>\r\n   <button mat-menu-item>\r\n      <mat-icon>exit_to_app</mat-icon> Remove Panel </button>\r\n</mat-menu>\r\n "

/***/ }),

/***/ "./src/app/crm/projects/projects.component.scss":
/*!******************************************************!*\
  !*** ./src/app/crm/projects/projects.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NybS9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/crm/projects/projects.component.ts":
/*!****************************************************!*\
  !*** ./src/app/crm/projects/projects.component.ts ***!
  \****************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_core_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/core/core.service */ "./src/app/service/core/core.service.ts");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
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






var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(router, coreService, pageTitleService, translate) {
        this.router = router;
        this.coreService = coreService;
        this.pageTitleService = pageTitleService;
        this.translate = translate;
        this.showType = 'grid';
        this.displayedProjectIdColumns = ['id', 'name', 'budget', 'duration', 'client', 'team_image', 'status', 'deadline'];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Projects");
        this.showProjectData();
    };
    /**
      * projectShowType method is used to select the show type of project.
      */
    ProjectsComponent.prototype.projectShowType = function (type) {
        this.showType = type;
        if (type == 'list') {
            document.getElementById('list').classList.add("active");
            document.getElementById('grid').classList.remove('active');
            this.showProjectData();
        }
        else {
            document.getElementById('grid').classList.add("active");
            document.getElementById('list').classList.remove('active');
        }
    };
    /**
      * projectDetails method is used to show the project details.
      */
    ProjectsComponent.prototype.projectDetails = function (content) {
        this.router.navigate(['/crm/project-detail', content.id]);
        this.coreService.projectDetailsContent = content;
    };
    /**
      * showProjectData method is used to get the project data and set the pagination in project list.
      */
    ProjectsComponent.prototype.showProjectData = function () {
        var _this = this;
        this.coreService.getProjectContent().
            subscribe(function (res) { _this.projectContent = res; }, function (err) { return console.log(err); }, function () { return _this.liveTradeSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.projectContent); });
        setTimeout(function () {
            if (_this.paginator) {
                _this.liveTradeSource.paginator = _this.paginator;
            }
        }, 1000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ProjectsComponent.prototype, "paginator", void 0);
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/crm/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/crm/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_core_core_service__WEBPACK_IMPORTED_MODULE_3__["CoreService"],
            _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_4__["PageTitleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/crm/reports/reports.component.html":
/*!****************************************************!*\
  !*** ./src/app/crm/reports/reports.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\n   <div fxFlex.gt-md=\"50\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n      <div class=\"invoice-list table-list-wrap\">\n         <mat-card class=\"pad-t-none\">\n            <div class=\"table-title gene-card-title\">\n               <h4 class=\"mrgn-b-none\">{{'Invoices' | translate}}</h4>\n            </div> \n            <mat-divider></mat-divider>       \n            <div class=\"table-responsive gene-card-content\">  \n               <table class=\"full-wid\" mat-table [dataSource]=\"invoicelist\">\n                  <ng-container matColumnDef=\"id\">\n                     <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Invoice Id</th>\n                     <td mat-cell *matCellDef=\"let element\">\n                        <div>{{element.id}}</div>\n                     </td>\n                  </ng-container>\n                  <ng-container matColumnDef=\"clientName\">\n                     <th mat-header-cell *matHeaderCellDef>Client Name</th>\n                     <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">\n                        <div>   \n                           <h6 class=\"mrgn-b-none\">{{element.firstName}} {{element.lastName}}</h6>\n                        </div>   \n                     </td>\n                  </ng-container>\n                  <ng-container matColumnDef=\"accountType\">\n                     <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Account Type</th>\n                     <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">\n                        <mat-chip-list>\n                           <mat-chip color=\"{{element.accountTypeColor}}\" selected>{{element.accountType}}</mat-chip>\n                        </mat-chip-list> \n                     </td>\n                  </ng-container>\n                  <ng-container matColumnDef=\"dateCreated\">\n                     <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Date Created</th>\n                     <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.dateCreated | date:'mediumDate'}} </td>\n                  </ng-container>\n                  <ng-container matColumnDef=\"dueDate\">\n                     <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Due Date</th>\n                     <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.dueDate | date:'mediumDate'}} </td>\n                  </ng-container>\n                  <ng-container matColumnDef=\"amount\">\n                     <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Amount</th>\n                     <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.amount}} </td>\n                  </ng-container>\n                  <tr mat-header-row *matHeaderRowDef=\"displayedInvoiceColumns\"></tr>\n                  <tr mat-row *matRowDef=\"let row; columns: displayedInvoiceColumns\"></tr>\n               </table>\n            </div>   \n         </mat-card>\n      </div>\n   </div>  \n   <div fxFlex.gt-md=\"50\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n      <div class=\"payment-list table-list-wrap\">\n         <mat-card class=\"pad-t-none\">\n            <div class=\"table-title gene-card-title\">\n               <h4 class=\"mrgn-b-none\">{{'Payments' | translate}}</h4>\n            </div>\n            <mat-divider></mat-divider> \n            <div class=\"table-responsive gene-card-content\">  \n               <table class=\"full-wid\" mat-table [dataSource]=\"paymentlist\">\n                  <ng-container matColumnDef=\"payid\">\n                     <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Payment Id</th>\n                     <td mat-cell *matCellDef=\"let element\">\n                        <div>{{element.payid}}</div>\n                     </td>\n                  </ng-container>\n                  <ng-container matColumnDef=\"clientName\">\n                     <th mat-header-cell *matHeaderCellDef>Client Name</th>\n                     <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">\n                        <div>   \n                           <h6 class=\"mrgn-b-none\">{{element.firstName}} {{element.lastName}}</h6>\n                        </div>   \n                     </td>\n                  </ng-container>\n                  <ng-container matColumnDef=\"paymentType\">\n                     <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Payment Type</th>\n                     <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">\n                        <mat-chip-list>\n                           <mat-chip color=\"{{element.paymentTypeColor}}\" selected>{{element.paymentType}}</mat-chip>\n                        </mat-chip-list> \n                     </td>\n                  </ng-container>\n                  <ng-container matColumnDef=\"paidDate\">\n                     <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Paid Date</th>\n                     <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.paidDate | date:'mediumDate'}} </td>\n                  </ng-container>\n                  <ng-container matColumnDef=\"amount\">\n                     <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Amount</th>\n                     <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.amount}} </td>\n                  </ng-container>\n                  <tr mat-header-row *matHeaderRowDef=\"displayedPaymentColumns\"></tr>\n                  <tr mat-row *matRowDef=\"let row; columns: displayedPaymentColumns\"></tr>\n               </table>\n            </div>   \n         </mat-card>\n      </div>\n   </div>  \n</div> \n<div *ngIf=\"tableTabData\">\n   <mat-card class=\"pad-all-md\">\n      <mat-tab-group class=\"table-tab-list\" color=\"accent\">\n         <mat-tab label=\"{{'Transaction List' | translate}}\">\n            <div fxFlex.gt-md=\"100\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n               <div class=\"transactiion-list table-list-wrap\">\n                  <div class=\"table-responsive\">  \n                     <table class=\"full-wid\" mat-table [dataSource]=\"tableTabData.transactionList\">\n                        <ng-container matColumnDef=\"transid\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Transaction Id</th>\n                           <td mat-cell *matCellDef=\"let element\">\n                              <div>{{element.transid}}</div>\n                           </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"date\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Date</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.date | date:'mediumDate'}} </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"account\">\n                           <th mat-header-cell *matHeaderCellDef>Account</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.account}}</td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"type\">\n                           <th mat-header-cell *matHeaderCellDef>Type</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">\n                              <mat-chip-list>\n                                 <mat-chip color=\"{{element.typeColor}}\" selected>{{element.type}}</mat-chip>\n                              </mat-chip-list>\n                           </td>   \n                        </ng-container>\n                        <ng-container matColumnDef=\"amount\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Amount</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.amount}} </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"debit\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Debit</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.debit}} </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"credit\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Credit</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.credit}} </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"balance\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Balance</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.balance}} </td>\n                        </ng-container>\n                        <tr mat-header-row *matHeaderRowDef=\"displayedTransactionColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedTransactionColumns\"></tr>\n                     </table>\n                  </div>  \n               </div>\n            </div>\n         </mat-tab>\n         <mat-tab label=\"{{'Transfer Report' | translate}}\">\n            <div fxFlex.gt-md=\"100\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n               <div class=\"invoice-list table-list-wrap\">\n                  <div class=\"table-responsive\">  \n                     <table class=\"full-wid\" mat-table [dataSource]=\"tableTabData.transferreport\">\n                        <ng-container matColumnDef=\"transid\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Transfer Id</th>\n                           <td mat-cell *matCellDef=\"let element\">\n                              <div>{{element.transid}}</div>\n                           </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"date\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Date</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.date | date:'mediumDate'}} </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"account\">\n                           <th mat-header-cell *matHeaderCellDef>Account</th>\n                           \n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.account}}</td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"type\">\n                           <th mat-header-cell *matHeaderCellDef>Type</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">\n                              <mat-chip-list>\n                                 <mat-chip color=\"{{element.typeColor}}\" selected>{{element.type}}</mat-chip>\n                              </mat-chip-list>\n                           </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"amount\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Amount</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.amount}} </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"balance\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Balance</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.balance}} </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"status\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Status</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">\n                              <mat-chip-list>\n                                 <mat-chip color=\"{{element.statusColor}}\" selected>{{element.status}}</mat-chip>\n                              </mat-chip-list> \n                           </td>\n                        </ng-container>\n                        <tr mat-header-row *matHeaderRowDef=\"displayedTransferColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedTransferColumns\"></tr>\n                     </table>\n                  </div>   \n               </div>\n            </div> \n         </mat-tab>\n         <mat-tab label=\"{{'Expense Category' | translate}}\">\n            <div fxFlex.gt-md=\"100\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n               <div class=\"Expense-category-list table-list-wrap\">\n                  <div class=\"table-responsive\">  \n                     <table class=\"full-wid\" mat-table [dataSource]=\"tableTabData.expenseCategory\">\n                        <ng-container matColumnDef=\"itmNo\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Item No</th>\n                           <td mat-cell *matCellDef=\"let element\">\n                              <div>{{element.itmNo}}</div>\n                           </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"date\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Date</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.date | date:'mediumDate'}} </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"type\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Type</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">\n                              <mat-chip-list>\n                                 <mat-chip color=\"{{element.typeColor}}\" selected>{{element.type}}</mat-chip>\n                              </mat-chip-list> \n                           </td>   \n                        </ng-container>\n                        <ng-container matColumnDef=\"description\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Description</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.description}} </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"amount\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Amount</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.amount}} </td>\n                        </ng-container>\n                        <ng-container matColumnDef=\"status\">\n                           <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Status</th>\n                           <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">\n                              <mat-chip-list>\n                                 <mat-chip color=\"{{element.statusColor}}\" selected>{{element.status}}</mat-chip>\n                              </mat-chip-list> \n                           </td>\n                        </ng-container>\n                        <tr mat-header-row *matHeaderRowDef=\"displayedExpenseColumns\"></tr>\n                        <tr mat-row *matRowDef=\"let row; columns: displayedExpenseColumns\"></tr>\n                     </table>\n                  </div>   \n               </div>\n            </div>   \n         </mat-tab>\n      </mat-tab-group>\n   </mat-card>\n</div> \n<div fxLayout=\"row wrap\">\n   <div fxFlex.gt-md=\"50\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n      <div class=\"tax-rate-list table-list-wrap\">\n         <mat-card class=\"pad-t-none\">\n            <div class=\"table-title gene-card-title\">\n               <h4 class=\"mrgn-b-none\">{{'Tax Rates' | translate}}</h4>\n            </div> \n            <mat-divider></mat-divider>       \n            <div class=\"table-responsive gene-card-content\">  \n               <table class=\"full-wid\" mat-table [dataSource]=\"taxrates\">\n                  <ng-container matColumnDef=\"date\">\n                     <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Date</th>\n                     <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.date | date:'mediumDate'}} </td>\n                  </ng-container>\n                  <ng-container matColumnDef=\"type\">\n                     <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Type</th>\n                     <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">\n                        <mat-chip-list>\n                           <mat-chip color=\"{{element.TypeColor}}\" selected>{{element.type}}</mat-chip>\n                        </mat-chip-list> \n                     </td>\n                  </ng-container>\n                  <ng-container matColumnDef=\"account\">\n                     <th mat-header-cell *matHeaderCellDef>Account</th>\n                     <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.account}}</td>\n                  </ng-container>\n                  <ng-container matColumnDef=\"amount\">\n                     <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Amount</th>\n                     <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.amount}} </td>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"credit\">\n                     <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Credit</th>\n                     <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.credit}} </td>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"balance\">\n                     <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Balance</th>\n                     <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.balance}} </td>\n                  </ng-container>\n\n                  <tr mat-header-row *matHeaderRowDef=\"displayedTaxColumns\"></tr>\n                  <tr mat-row *matRowDef=\"let row; columns: displayedTaxColumns\"></tr>\n               </table>\n            </div>   \n         </mat-card>\n      </div>\n   </div>  \n   <div fxFlex.gt-md=\"50\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n      <div class=\"payment-list table-list-wrap\">\n         <mat-card class=\"pad-t-none\">\n            <div class=\"table-title gene-card-title\">\n               <h4 class=\"mrgn-b-none\">{{'Add Tickets' | translate}}</h4>\n            </div>\n            <mat-divider></mat-divider> \n            <div class=\"table-responsive gene-card-content\">  \n               <table class=\"full-wid\" mat-table [dataSource]=\"addtickets\">\n                  <ng-container matColumnDef=\"srno\">\n                     <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Sr.No</th>\n                     <td mat-cell *matCellDef=\"let element\">\n                        <div>{{element.srno}}</div>\n                     </td>\n                  </ng-container>\n                  <ng-container matColumnDef=\"ticketCode\">\n                     <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Tickets Code</th>\n                     <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">\n                        <div>   \n                           <h6 class=\"mrgn-b-none\">{{element.ticketCode}}</h6>\n                        </div>   \n                     </td>\n                  </ng-container>\n                  <ng-container matColumnDef=\"subject\">\n                     <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Subject</th>\n                     <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.subject}} </td>\n                  </ng-container>\n                  <ng-container matColumnDef=\"date\">\n                     <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>date</th>\n                     <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.date | date:'mediumDate'}} </td>\n                  </ng-container>\n                  <ng-container matColumnDef=\"department\">\n                     <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Department</th>\n                     <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">{{element.department}} </td>\n                  </ng-container>\n                  <ng-container matColumnDef=\"status\">\n                     <th class=\"text-nowrap\" mat-header-cell *matHeaderCellDef>Status</th>\n                     <td class=\"text-nowrap\" mat-cell *matCellDef=\"let element\">\n                        <mat-chip-list>\n                           <mat-chip color=\"{{element.statusColor}}\" selected>{{element.status}}</mat-chip>\n                        </mat-chip-list> \n                     </td>\n                  </ng-container>\n                  <tr mat-header-row *matHeaderRowDef=\"displayedAddTicketsColumns\"></tr>\n                  <tr mat-row *matRowDef=\"let row; columns: displayedAddTicketsColumns\"></tr>\n               </table>\n            </div>   \n         </mat-card>\n      </div>\n   </div>  \n</div>   "

/***/ }),

/***/ "./src/app/crm/reports/reports.component.scss":
/*!****************************************************!*\
  !*** ./src/app/crm/reports/reports.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NybS9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/crm/reports/reports.component.ts":
/*!**************************************************!*\
  !*** ./src/app/crm/reports/reports.component.ts ***!
  \**************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_core_core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/core/core.service */ "./src/app/service/core/core.service.ts");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
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




var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(pageTitleService, translate, service) {
        this.pageTitleService = pageTitleService;
        this.translate = translate;
        this.service = service;
        //Invoices content
        this.invoicelist = [
            {
                id: "#inv001",
                firstName: "Steven",
                lastName: "Gonz",
                accountTypeColor: "primary",
                accountType: "Paid",
                dateCreated: "13 Aug 2017",
                dueDate: "4 Jan 2018",
                amount: "$1000"
            },
            {
                id: "#inv002",
                firstName: "Joseph",
                lastName: "Good",
                accountType: "partially paid",
                accountTypeColor: "accent",
                dateCreated: "22 Aug 2017",
                dueDate: "28 Feb 2019",
                amount: "$2500"
            },
            {
                id: "#inv003",
                firstName: "Mario",
                lastName: "Harmon",
                accountType: "paid",
                accountTypeColor: "primary",
                dateCreated: "13 Aug 2017",
                dueDate: "10 Mar 2018",
                amount: "$500"
            },
            {
                id: "#inv004",
                firstName: "Aleta",
                lastName: "Good",
                accountType: "unpaid",
                accountTypeColor: "warn",
                dateCreated: "22 Aug 2017",
                dueDate: "23 Aug 2019",
                amount: "$700"
            },
            {
                id: "#inv005",
                firstName: "Floren",
                lastName: "Smith",
                accountType: "partially paid",
                accountTypeColor: "accent",
                dateCreated: "13 Aug 2018",
                dueDate: "25 June 2018",
                amount: "$1090"
            },
            {
                id: "#inv006",
                firstName: "Helen",
                lastName: "Moron",
                accountType: "unpaid",
                accountTypeColor: "warn",
                dateCreated: "22 Aug 2017",
                dueDate: "29 Nov 2018",
                amount: "$1900"
            }
        ];
        //Payments content
        this.paymentlist = [
            {
                payid: "#pay001",
                firstName: "Leonard",
                lastName: "Gonz",
                paymentType: "Paypal",
                paymentTypeColor: "primary",
                paidDate: "19 Aug 2017",
                amount: "$2000"
            },
            {
                payid: "#pay002",
                firstName: "Agnes",
                lastName: "Good",
                paymentType: "Paytm",
                paymentTypeColor: "accent",
                paidDate: "22 Mar 2017",
                amount: "$500"
            },
            {
                payid: "#pay003",
                firstName: "Bonnie",
                lastName: "Harmon",
                paymentType: "Debit Card",
                paymentTypeColor: "primary",
                paidDate: "30 Sep 2017",
                amount: "$1500"
            },
            {
                payid: "#pay004",
                firstName: "Virgil",
                lastName: "Good",
                paymentType: "Credit Card",
                paymentTypeColor: "accent",
                paidDate: "20 Aug 2017",
                amount: "$1700"
            },
            {
                payid: "#pay005",
                firstName: "Kevin",
                lastName: "Smith",
                paymentType: "paypal",
                paymentTypeColor: "primary",
                paidDate: "13 Aug 2018",
                amount: "$1290"
            },
            {
                payid: "#pay006",
                firstName: "Alice",
                lastName: "Moron",
                paymentType: "Phone pe",
                paymentTypeColor: "warn",
                paidDate: "22 Aug 2017",
                amount: "$1500"
            }
        ];
        //Tax Rates content
        this.taxrates = [
            {
                date: "4 Jan 2018",
                account: "The Bank of America",
                TypeColor: "primary",
                type: "Expense",
                amount: "$1000.00",
                credit: "$300.00",
                balance: "$200.00"
            },
            {
                date: "28 Feb 2019",
                account: "Barclays Bank",
                TypeColor: "accent",
                type: "Income",
                amount: "$2500.00",
                credit: "$200.00",
                balance: "$150.00"
            },
            {
                date: "10 Mar 2018",
                account: "Bank of Scotland",
                TypeColor: "primary",
                type: "Saving",
                amount: "$500.00",
                credit: "$100.00",
                balance: "$50.00"
            },
            {
                date: "23 Aug 2019",
                account: "Deutsche Bank",
                TypeColor: "warn",
                type: "Income",
                amount: "$700.00",
                credit: "$300.00",
                balance: "$200.00"
            },
            {
                date: "25 June 2018",
                account: "HSBC Bank",
                TypeColor: "accent",
                type: "Saving",
                amount: "$1090.00",
                credit: "$800.00",
                balance: "$600.00"
            },
            {
                date: "29 Nov 2018",
                account: "HSBC Bank",
                TypeColor: "warn",
                type: "Expense",
                amount: "$1900.00",
                credit: "$600.00",
                balance: "$400.00"
            }
        ];
        //Add Tickets content
        this.addtickets = [
            {
                srno: "01",
                ticketCode: "TRC 45651",
                subject: "Fly Bimen",
                date: "19 Aug 2017",
                department: "First Class",
                status: "Booked",
                statusColor: "primary"
            },
            {
                srno: "02",
                ticketCode: "TRC 45652",
                subject: "Fly Emeters",
                date: "22 Mar 2017",
                department: "Second Class",
                status: "cancel",
                statusColor: "warn"
            },
            {
                srno: "03",
                ticketCode: "TRC 45653",
                subject: "Air India",
                date: "30 Sep 2017",
                department: "First Class",
                status: "Booked",
                statusColor: "primary"
            },
            {
                srno: "04",
                ticketCode: "TRC 45654",
                subject: "Air India",
                date: "20 Aug 2017",
                department: "First Class",
                status: "Booked",
                statusColor: "primary"
            },
            {
                srno: "05",
                ticketCode: "TRC 45655",
                subject: "Air India",
                date: "13 Aug 2018",
                department: "Second Class",
                status: "cancel",
                statusColor: "warn"
            },
            {
                srno: "06",
                ticketCode: "TRC 45656",
                subject: "Air India",
                date: "22 Aug 2017",
                department: "First Class",
                status: "booked",
                statusColor: "primary"
            }
        ];
        this.displayedInvoiceColumns = ['id', 'clientName', 'accountType', 'dateCreated', 'dueDate', 'amount'];
        this.displayedPaymentColumns = ['payid', 'clientName', 'paymentType', 'paidDate', 'amount'];
        this.displayedTransactionColumns = ['transid', 'date', 'account', 'type', 'amount', 'debit', 'credit', 'balance'];
        this.displayedTransferColumns = ['transid', 'date', 'account', 'type', 'amount', 'balance', 'status'];
        this.displayedExpenseColumns = ['itmNo', 'date', 'type', 'description', 'amount', 'status'];
        this.displayedTaxColumns = ['date', 'account', 'type', 'amount', 'credit', 'balance'];
        this.displayedAddTicketsColumns = ['srno', 'ticketCode', 'subject', 'date', 'department', 'status',];
    }
    ReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitleService.setTitle("Reports");
        this.service.getTableTabContent().
            subscribe(function (res) { _this.tableTabData = res; }, function (err) { return console.log(err); }, function () { return _this.tableTabData; });
    };
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/crm/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.scss */ "./src/app/crm/reports/reports.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _service_core_core_service__WEBPACK_IMPORTED_MODULE_1__["CoreService"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=crm-crm-module.js.map