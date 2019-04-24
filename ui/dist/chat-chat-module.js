(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chat_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.routing */ "./src/app/chat/chat.routing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat/chat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_chat_chat_component__WEBPACK_IMPORTED_MODULE_9__["ChatComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_chat_routing__WEBPACK_IMPORTED_MODULE_2__["chatRoutes"]),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]
            ]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.routing.ts":
/*!**************************************!*\
  !*** ./src/app/chat/chat.routing.ts ***!
  \**************************************/
/*! exports provided: chatRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatRoutes", function() { return chatRoutes; });
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat/chat.component.ts");

var chatRoutes = [{
        path: '',
        component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_0__["ChatComponent"]
    }];


/***/ }),

/***/ "./src/app/chat/chat/chat-component.html":
/*!***********************************************!*\
  !*** ./src/app/chat/chat/chat-component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"start\" class=\"gene-chat-page\">\n   <div fxFlex.gt-md=\"100\" fxFlex.gt-sm=\"100\" fxFlex=\"100\">\n      <mat-card class=\"mat-pad-none\">\n         <mat-sidenav-container class=\"chat-content-area\">\n            <mat-sidenav #chatnavbar [mode]=\"isOver() ? 'over' : 'side'\" [opened]=\"!isOver()\" class=\"gene-chat-sidebar\">\n            <mat-toolbar class=\"primary-bg chat-toolbar-side\">\n               <a> <img class=\"img-circle\" src=\"assets/img/register-user-1.jpg\"> </a> <span fxFlex></span>\n               <button [matMenuTriggerFor]=\"user\" mat-icon-button>\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </mat-toolbar>\n            <hr>\n            <mat-nav-list class=\"gene-chat-user\">\n               <mat-list-item (click)=\"onSelect(chat)\" *ngFor=\"let chat of chats\">\n               <div class=\"gene-chat-thumb\"><img class=\"img-circle\" mat-list-avatar src=\"{{chat.photo}}\" alt=\"\"></div>\n               <div class=\"gene-user-info pad-wrap\">\n                  <span> {{chat.from}} </span>\n                  <p mat-line> {{chat.subject}} </p>\n               </div>\n               </mat-list-item>\n            </mat-nav-list>\n            </mat-sidenav>\n            <mat-toolbar class=\"chat-toolbar primary-bg\">\n               <button (click)=\"chatnavbar.toggle()\" mat-icon-button>\n                  <mat-icon>short_text</mat-icon>\n               </button>\n               <a fxHide=\"true\" fxHide.gt-xs=\"false\"> <img class=\"img-circle\" src=\"{{selectedChat.photo}}\"> </a>\n               <div fxFlex class=\"pad-wrap\">\n                  <span class=\"gene-block make-ellipse\">{{selectedChat.from}}</span>\n                  <span class=\"margin-none inline-block gene-text-md\">Online</span>\n               </div>\n               <button fxHide=\"true\" fxHide.gt-xs=\"false\" mat-icon-button>\n                  <mat-icon>attach_file</mat-icon>\n               </button>\n               <button [matMenuTriggerFor]=\"them\" mat-icon-button>\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </mat-toolbar>\n            <div class=\"gene-chat-area \" fxLayout=\"column\" fxLayoutAlign=\"end stretch\">\n               <perfect-scrollbar #chatScroll id=\"newid\">\n                  <div class=\"gene-chat-content\">\n                     <div class=\"gene-chat-wrap\" *ngFor=\"let message of messages\" [ngSwitch]=\"message.from\" fxLayout=\"column\">\n                     <div class=\"gene-chat-list accent-bg\" *ngSwitchCase=\"'them'\" fxLayout=\"row\" fxLayoutAlign=\"start start\" class=\"mrgn-b-md\">\n                        <div><img class=\"img-circle\" [src]=\"selectedChat.photo\"></div>\n                        <div class=\"pad-wrap\">\n                           <div class=\"accent-bg gene-chat-msg\"><span class=\"gene-block font-bold\"> {{selectedChat.from}} </span><span>{{ message.msg }}</span></div>\n                           <div> <span class=\"meta-post gene-text-md\">{{message.time}}</span> </div>\n                        </div>\n                        <span fxFlex></span> \n                     </div>\n                     <div class=\"gene-chat-list primary-bg\" *ngSwitchCase=\"'me'\" fxLayout=\"row\" fxLayoutAlign=\"start start\" class=\"mrgn-b-md\">\n                        <span fxFlex></span>\n                        <div class=\"pad-wrap\">\n                           <div class=\"primary-bg gene-chat-msg\">\n                              <span class=\"gene-block font-bold\"> Gene Admin </span>\n                              <span>{{ message.msg }}</span>\n                           </div>\n                           <div> \n                              <span class=\"meta-post gene-text-md\">{{message.time}}</span>\n                           </div>\n                        </div>\n                        <div><img class=\"img-circle\" src=\"assets/img/register-user-1.jpg\"></div>\n                     </div>\n                  </div>\n            </div>\n            </perfect-scrollbar>\n            <div class=\"gene-chat-form\">\n               <div>\n                  <mat-form-field>\n                     <input matInput (keyup.enter)=\"send()\" [(ngModel)]=\"newMessage\" placeholder=\"Send Message\">\n                  </mat-form-field>\n                  <button mat-fab (click)=\"send()\" color=\"primary\" class=\"gene-send-btn\">\n                     <mat-icon>send</mat-icon>\n                  </button>\n               </div>\n            </div>\n   </div>\n   </mat-sidenav-container>\n   </mat-card>\n</div>\n</div>\n<mat-menu #user=\"matMenu\">\n   <button mat-menu-item>\n      <mat-icon> account_circle </mat-icon>\n      <span> Profile </span> \n   </button>\n   <button mat-menu-item>\n      <mat-icon> settings </mat-icon>\n      <span> Settings </span> \n   </button>\n   <button mat-menu-item>\n      <mat-icon>help</mat-icon>\n      <span>Help</span> \n   </button>\n   <mat-divider></mat-divider>\n   <button mat-menu-item>\n      <mat-icon> exit_to_app </mat-icon>\n      <span> Logout </span> \n   </button>\n</mat-menu>\n<mat-menu #them=\"matMenu\">\n   <button mat-menu-item>\n      <mat-icon> account_circle </mat-icon>\n      <span> Contact Info </span> \n   </button>\n   <button mat-menu-item>\n      <mat-icon> volume_mute </mat-icon>\n      <span> Mute Chat </span> \n   </button>\n   <mat-divider></mat-divider>\n   <button mat-menu-item (click)=\"clearMessages()\">\n      <mat-icon> clear_all </mat-icon>\n      <span> Clear Messages </span> \n   </button>\n</mat-menu>"

/***/ }),

/***/ "./src/app/chat/chat/chat-component.scss":
/*!***********************************************!*\
  !*** ./src/app/chat/chat/chat-component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC9jaGF0LWNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/chat/chat/chat.component.ts":
/*!*********************************************!*\
  !*** ./src/app/chat/chat/chat.component.ts ***!
  \*********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
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



var ChatComponent = /** @class */ (function () {
    function ChatComponent(pageTitleService) {
        this.pageTitleService = pageTitleService;
        this.chats = [{
                from: 'Bobby Sullivan',
                photo: 'assets/img/user-11.jpg',
                subject: 'Refferal Module',
            }, {
                from: 'Bryan Morgan',
                photo: 'assets/img/user-2.jpg',
                subject: 'Good Luck',
            }, {
                from: 'Phillip Carroll',
                photo: 'assets/img/user-3.jpg',
                subject: 'Sign In Process',
            }, {
                from: 'Brandon Boyd',
                photo: 'assets/img/user-4.jpg',
                subject: 'New Offers',
            }, {
                from: 'Laura Mason',
                photo: 'assets/img/user-5.jpg',
                subject: 'Thanks Guys!',
            }, {
                from: 'Barbara Chapman',
                photo: 'assets/img/user-6.jpg',
                subject: 'Happy with Service',
            }, {
                from: 'Doris Baker',
                photo: 'assets/img/user-7.jpg',
                subject: 'Best Deals',
            }
        ];
        this.messages = [{
                from: 'them',
                msg: 'Need help in Refferal Module',
                time: '5 min ago'
            }, {
                from: 'me',
                msg: 'What kind of issue you faced?',
                time: '4 min ago'
            }, {
                from: 'them',
                msg: 'By refferal invite, my friend not get refferal offer',
                time: '2 min ago'
            }, {
                from: 'them',
                msg: 'and I have not received any notification',
                time: '2 min ago'
            }
        ];
        this.selectedChat = this.chats[1];
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Chat");
    };
    /**
      * isOver method is used to open the chat side nav bar
      * according to window width
      */
    ChatComponent.prototype.isOver = function () {
        return window.matchMedia("(max-width: 960px)").matches;
    };
    /**
      * onSelect method is used to select the paticular chart.
      */
    ChatComponent.prototype.onSelect = function (chat) {
        this.selectedChat = chat;
    };
    /**
      * send method is used to send a new message.
      */
    ChatComponent.prototype.send = function () {
        if (this.newMessage) {
            this.messages.push({
                msg: this.newMessage,
                from: 'me',
                time: 'now'
            });
            this.newMessage = '';
        }
    };
    /**
      * clearMessage method is to clear the chat.
      */
    ChatComponent.prototype.clearMessages = function () {
        this.messages.length = 0;
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-chat',
            template: __webpack_require__(/*! ./chat-component.html */ "./src/app/chat/chat/chat-component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./chat-component.scss */ "./src/app/chat/chat/chat-component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ })

}]);
//# sourceMappingURL=chat-chat-module.js.map