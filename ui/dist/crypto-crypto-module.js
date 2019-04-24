(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crypto-crypto-module"],{

/***/ "./src/app/crypto/crypto.module.ts":
/*!*****************************************!*\
  !*** ./src/app/crypto/crypto.module.ts ***!
  \*****************************************/
/*! exports provided: CryptoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptoModule", function() { return CryptoModule; });
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _widget_component_widget_component_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../widget-component/widget-component.module */ "./src/app/widget-component/widget-component.module.ts");
/* harmony import */ var _crypto_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./crypto.routing */ "./src/app/crypto/crypto.routing.ts");
/* harmony import */ var _marketcap_marketcap_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./marketcap/marketcap.component */ "./src/app/crypto/marketcap/marketcap.component.ts");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/crypto/wallet/wallet.component.ts");
/* harmony import */ var _trade_trade_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./trade/trade.component */ "./src/app/crypto/trade/trade.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var CryptoModule = /** @class */ (function () {
    function CryptoModule() {
    }
    CryptoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_marketcap_marketcap_component__WEBPACK_IMPORTED_MODULE_12__["MarketcapComponent"], _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_13__["WalletComponent"], _trade_trade_component__WEBPACK_IMPORTED_MODULE_14__["TradeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_crypto_routing__WEBPACK_IMPORTED_MODULE_11__["cryptoRouters"]),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _widget_component_widget_component_module__WEBPACK_IMPORTED_MODULE_10__["WidgetComponentModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_8__["SlickCarouselModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"]
            ]
        })
    ], CryptoModule);
    return CryptoModule;
}());



/***/ }),

/***/ "./src/app/crypto/crypto.routing.ts":
/*!******************************************!*\
  !*** ./src/app/crypto/crypto.routing.ts ***!
  \******************************************/
/*! exports provided: cryptoRouters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cryptoRouters", function() { return cryptoRouters; });
/* harmony import */ var _marketcap_marketcap_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./marketcap/marketcap.component */ "./src/app/crypto/marketcap/marketcap.component.ts");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/crypto/wallet/wallet.component.ts");
/* harmony import */ var _trade_trade_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trade/trade.component */ "./src/app/crypto/trade/trade.component.ts");



var cryptoRouters = [
    {
        path: '',
        redirectTo: 'marketcap',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: "marketcap",
                component: _marketcap_marketcap_component__WEBPACK_IMPORTED_MODULE_0__["MarketcapComponent"]
            },
            {
                path: "wallet",
                component: _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_1__["WalletComponent"]
            },
            {
                path: "trade",
                component: _trade_trade_component__WEBPACK_IMPORTED_MODULE_2__["TradeComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/crypto/marketcap/marketcap.component.html":
/*!***********************************************************!*\
  !*** ./src/app/crypto/marketcap/marketcap.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"ticker-slider\" dir=\"ltr\">\n   <ms-ticker-slider [sliderContent]=\"tickerSliderContent\" [sliderConfig]=\"tickerSliderConfig\"></ms-ticker-slider>\n</mat-card>\n<!-- ticker slider -->\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" class=\"crypto-dash-card\">\n   <div class=\"crypto-progress\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n      <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\n         <div fxFlex.gt-md=\"25\" fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" *ngFor=\"let content of statsProgressCard\">\n            <mat-card class=\"{{content.bg_color}} mat-card\">\n               <div class=\"mrgn-b-xs\" mat-card-widget fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                  <span class=\"inline-block lead\">\n                     <i class=\"cc {{content.icon}} mrgn-r-xs\"></i>\n                  </span>\n                  <span class=\"lead inline-block\">{{content.coinName}}</span>\n               </div>\n               <div class=\"mrgn-b-md\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n                  <span>{{content.code}}</span>\n                  <span>{{'Trade'|translate}} : {{content.trade}}</span>\n               </div>\n               <div class=\"crypto-progress-bar mrgn-b-xs\">\n                  <mat-progress-bar mode=\"determinate\" value=\"{{content.progress}}\"></mat-progress-bar>\n               </div>\n            </mat-card>\n         </div>\n      </div>\n   </div>\n   <!--Crypto Progress Cards -->\n</div>\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" class=\"crypto-dash-card\">\n   <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n      <div class=\"mrkcap-scroll-wrap\">\n         <div class=\"mktcap-wrapper\">\n            <div class=\"mktcap-resp-scroll\">\n               <mat-card>\n                  <div class=\"mktcap-wrap\">\n                     <div class=\"mktcap-title mktcap-sno\">\n                        S.No\n                     </div>\n                     <div class=\"mktcap-title mktcap-currency\">\n                        Currency\n                     </div>\n                     <div class=\"mktcap-title mktcap-value\">\n                        Market cap\n                     </div>\n                     <div class=\"mktcap-title mktcap-price\">\n                        Price\n                     </div>\n                     <div class=\"mktcap-title mktcap-volume\">\n                        Volume\n                     </div>\n                     <div class=\"mktcap-title mktcap-change\">\n                        Change(24hr)\n                     </div>\n                     <div class=\"mktcap-title mktcap-more\">\n                        More\n                     </div>\n                  </div>\n               </mat-card>\n               <mat-accordion>\n                  <mat-expansion-panel class=\"mrgn-y-md\" [expanded]=\"content.expand\" *ngFor=\"let content of marketCap\">\n                     <mat-expansion-panel-header>\n                        <div class=\"mktcap-wrap\">\n                           <div class=\"mktcap-title mktcap-sno\">\n                              {{content.sr_no}}\n                           </div>\n                           <div class=\"mktcap-title mktcap-currency\">\n                              {{content.currency}}\n                           </div>\n                           <div class=\"mktcap-title mktcap-value\">\n                              {{content.market_cap}}\n                           </div>\n                           <div class=\"mktcap-title mktcap-price\">\n                              {{content.price}}\n                           </div>\n                           <div class=\"mktcap-title mktcap-volume\">\n                              {{content.volume}}\n                           </div>\n                           <div class=\"mktcap-title mktcap-change\">\n                              {{content.change}}\n                           </div>\n                           <div class=\"mktcap-title mktcap-more\">\n                              {{content.more}}\n                           </div>\n                        </div>\n                     </mat-expansion-panel-header>\n                     <div class=\"buttongroup mrgn-b-md\">\n                        <button class=\"mrgn-b-xs\" (click)=\"dataChange('year')\" mat-raised-button color=\"primary\">Yearly</button>\n                        <button class=\"mrgn-b-xs\" (click)=\"dataChange('month')\" mat-raised-button color=\"warn\">Monthly</button>\n                        <button class=\"mrgn-b-xs\" (click)=\"dataChange('week')\" mat-raised-button color=\"accent\">Weekly</button>\n                     </div> \n                     <ng-container *ngIf=\"changeType == 'year'\">\n                        <ng-container *ngIf=\"content.yearly\">\n                           <div class=\"mktcap-chart-wrap\">\n                              <ms-market-cap-charts [data]=\"content.yearly.chartData\" [label]=\"content.yearly.chartLabel\"></ms-market-cap-charts>\n                           </div>\n                        </ng-container>\n                     </ng-container>\n                      <ng-container *ngIf=\"changeType == 'month'\">\n                        <ng-container *ngIf=\"content.monthly\">\n                           <div class=\"mktcap-chart-wrap\">\n                              <ms-market-cap-charts [data]=\"content.monthly.chartData\" [label]=\"content.monthly.chartLabel\"></ms-market-cap-charts>\n                           </div>\n                        </ng-container>\n                     </ng-container>\n                      <ng-container *ngIf=\"changeType == 'week'\">\n                        <ng-container *ngIf=\"content.weekly\">\n                           <div class=\"mktcap-chart-wrap\">\n                              <ms-market-cap-charts [data]=\"content.weekly.chartData\" [label]=\"content.weekly.chartLabel\"></ms-market-cap-charts>\n                           </div>\n                        </ng-container>\n                     </ng-container>\n                  </mat-expansion-panel>\n               </mat-accordion>\n            </div>\n         </div>\n      </div>   \n   </div>\n</div>  \n"

/***/ }),

/***/ "./src/app/crypto/marketcap/marketcap.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/crypto/marketcap/marketcap.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyeXB0by9tYXJrZXRjYXAvbWFya2V0Y2FwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/crypto/marketcap/marketcap.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/crypto/marketcap/marketcap.component.ts ***!
  \*********************************************************/
/*! exports provided: MarketcapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketcapComponent", function() { return MarketcapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
/* harmony import */ var _service_core_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/core/core.service */ "./src/app/service/core/core.service.ts");
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




var MarketcapComponent = /** @class */ (function () {
    function MarketcapComponent(pageTitleService, service, translate) {
        this.pageTitleService = pageTitleService;
        this.service = service;
        this.translate = translate;
        this.changeType = 'year';
        //stat progress card
        this.statsProgressCard = [
            {
                icon: "BTC-alt",
                coinName: "Bitcoin",
                trade: "30%",
                progress: "30",
                code: "+ 41",
                bg_color: "primary-bg"
            },
            {
                icon: "ETC",
                coinName: "Ethereum",
                trade: "60%",
                progress: "60",
                code: "+ 4381",
                bg_color: "success-bg"
            },
            {
                icon: "LTC-alt",
                coinName: "Litecoin",
                trade: "80%",
                progress: "80",
                code: "+ 2611",
                bg_color: "accent-bg"
            },
            {
                icon: "ZEC-alt",
                coinName: "Zcash",
                trade: "40%",
                progress: "40",
                code: "+ 611",
                bg_color: "warn-bg"
            }
        ];
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
    }
    MarketcapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitleService.setTitle("Market Cap");
        this.service.getMarketCap().
            subscribe(function (res) { _this.marketCap = res; }, function (err) { return console.log(err); }, function () { return _this.marketCap; });
        this.service.getTickerData().
            subscribe(function (res) { _this.tickerSliderContent = res; }, function (err) { return console.log(err); }, function () { return _this.tickerSliderContent; });
    };
    //dataChange method is used to change the chart data according to button event.
    MarketcapComponent.prototype.dataChange = function (data) {
        this.changeType = data;
    };
    MarketcapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-marketcap',
            template: __webpack_require__(/*! ./marketcap.component.html */ "./src/app/crypto/marketcap/marketcap.component.html"),
            styles: [__webpack_require__(/*! ./marketcap.component.scss */ "./src/app/crypto/marketcap/marketcap.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"],
            _service_core_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], MarketcapComponent);
    return MarketcapComponent;
}());



/***/ }),

/***/ "./src/app/crypto/trade/trade.component.html":
/*!***************************************************!*\
  !*** ./src/app/crypto/trade/trade.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"ticker-slider\" dir=\"ltr\">\n   <ms-ticker-slider [sliderContent]=\"tickerSliderContent\" [sliderConfig]=\"tickerSliderConfig\"></ms-ticker-slider>\n</mat-card>\n<!-- ticker slider -->\n<div fxLayout=\"row wrap\" fxlayoutAlign=\"start start\">\n   <div fxFlex.gt-sm=\"100\" fxFlex.gt-md=\"65\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n      <div fxLayout=\"row wrap\" fxlayoutAlign=\"start start\">\n         <div fxFlex.gt-xs=\"50\" fxFlex.xs=\"100\" fxFlex=\"100\">\n            <mat-card>\n               <div class=\"gene-card-title\">\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                     <div fxLayout=\"column\">\n                        <h4 class=\"mrgn-b-none\">{{'Wallet Address' | translate}}</h4>\n                     </div>\n                     <span fxFlex></span>\n                     <button mat-icon-button>\n                        <mat-icon>sync</mat-icon>\n                     </button>\n                     <button mat-icon-button [matMenuTriggerFor]=\"options\">\n                        <mat-icon>more_horiz</mat-icon>\n                     </button>\n                  </div>\n                  <mat-divider></mat-divider>\n               </div>\n               <div class=\"gene-card-content\">\n                  <div class=\"trade-crypto crypto-input-prefix\">\n                     <div class=\"pad-t-sm\">\n                        <div class=\"mrgn-b-xs\">\n                           <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                              <mat-label>Bitcoin</mat-label>\n                              <span matPrefix class=\"cc BTC-alt\"></span>\n                              <input class=\"form-control\" matInput type=\"text\" placeholder=\"Wallet\" value=\"AXB35H24ISDJHCISDT\">\n                           </mat-form-field>\n                        </div>                       \n                        <div class=\"mrgn-b-xs\">\n                           <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                              <mat-label> Ethereum </mat-label>\n                              <span matPrefix class=\"cc ETC\"></span>\n                              <input class=\"form-control\" matInput type=\"text\" placeholder=\"Wallet\" value=\"YXB35H24ISDJHCISDT\">\n                           </mat-form-field>\n                        </div>\n                        <div class=\"mrgn-b-xs\">\n                           <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                              <mat-label> Litecoin </mat-label>\n                              <span matPrefix class=\"cc LTC-alt\"></span>\n                              <input class=\"form-control\" matInput type=\"text\" placeholder=\"Wallet\" value=\"TXB35H24ISDJHCISDT\">\n                           </mat-form-field>\n                        </div>\n                        <div>\n                           <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                              <mat-label> Zcash </mat-label>\n                              <span matPrefix class=\"cc ZEC-alt\"></span>\n                              <input class=\"form-control\" matInput type=\"text\" placeholder=\"Wallet\" value=\"XXB35H24ISDJHCISDT\">\n                           </mat-form-field>\n                        </div>\n                        <h4 class=\"font-normal success-text mrgn-b-md\">Total amount in all wallet is <span>200 $</span></h4>           \n                        <div class=\"button-wrap\">\n                           <button mat-raised-button color=\"primary\">Go To Wallet</button>\n                        </div>\n                     </div>                           \n                  </div>\n               </div>\n            </mat-card>\n         </div>\n         <div fxFlex.gt-xs=\"50\" fxFlex.xs=\"100\" fxFlex=\"100\">\n            <mat-card>\n               <div class=\"gene-card-title\">\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                     <div fxLayout=\"column\">\n                        <h4 class=\"mrgn-b-none\">{{'Buy Cryptocurrency' | translate}}</h4>\n                     </div>\n                     <span fxFlex></span>\n                     <button mat-icon-button>\n                        <mat-icon>sync</mat-icon>\n                     </button>\n                     <button mat-icon-button [matMenuTriggerFor]=\"options\">\n                        <mat-icon>more_horiz</mat-icon>\n                     </button>\n                  </div>\n                  <mat-divider></mat-divider>\n               </div>\n               <div class=\"gene-card-content\">\n                  <div class=\"trade-crypto crypto-input-prefix\">\n                     <div class=\"pad-t-sm\">\n                        <div class=\"mrgn-b-xs\">\n                           <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                              <mat-label>Choose Currency</mat-label>\n                              <span matPrefix class=\"fa fa-money\" aria-hidden=\"true\"></span>\n                              <mat-select value=\"Bitcoin\"> \n                                 <mat-option value=\"Bitcoin\">Bitcoin</mat-option>\n                                 <mat-option value=\"Ethereum\">Ethereum</mat-option>\n                                 <mat-option value=\"EOS\">EOS</mat-option>\n                                 <mat-option value=\"Litecoin\">Litecoin</mat-option>\n                              </mat-select>\n                           </mat-form-field>\n                        </div>\n                        <div class=\"mrgn-b-xs\">\n                           <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                              <mat-label>Payment Method</mat-label>\n                              <span matPrefix class=\"fa fa-credit-card\" aria-hidden=\"true\"></span>\n                              <mat-select value=\"Debit Card\"> \n                                 <mat-option value=\"Debit Card\">Debit Card</mat-option>\n                                 <mat-option value=\"PayPal\">PayPal</mat-option>\n                                 <mat-option value=\"Bank Transfer\">Bank Transfer</mat-option>\n                                 <mat-option value=\"Credit Cards\">Credit Cards</mat-option>\n                              </mat-select>\n                           </mat-form-field>\n                        </div>\n                        <div class=\"mrgn-b-xs\">\n                           <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                              <mat-label>Select Amount</mat-label>\n                              <input class=\"form-control\" matInput type=\"number\" placeholder=\"Amount\" min=\"1\" value=\"200\">\n                           </mat-form-field>\n                        </div>\n                        <div>\n                           <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                              <mat-label>Wallet Address</mat-label>\n                              <span matPrefix class=\"cc BTC-alt\"></span>\n                              <input class=\"form-control\" matInput type=\"text\" placeholder=\"Wallet\" value=\"AXB35H24ISDJHCISDT\">\n                           </mat-form-field>\n                        </div>\n                        <h4 class=\"font-normal success-text mrgn-b-md\">Total amount is <span>200 $</span></h4>           \n                        <div class=\"button-wrap\">\n                           <button mat-raised-button color=\"primary\">Purchase</button>\n                           <h4 class=\"font-normal inline-block success-text\">Transaction successfull</h4>\n                        </div>\n                     </div>                           \n                  </div>\n               </div>\n            </mat-card>\n         </div>\n         <div fxFlex.gt-xs=\"50\" fxFlex.xs=\"100\" fxFlex=\"100\">\n            <mat-card>\n               <div class=\"gene-card-title\">\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                     <div fxLayout=\"column\">\n                        <h4 class=\"mrgn-b-none\">{{'Sell Cryptocurrency' | translate}}</h4>\n                     </div>\n                     <span fxFlex></span>\n                     <button mat-icon-button>\n                        <mat-icon>sync</mat-icon>\n                     </button>\n                     <button mat-icon-button [matMenuTriggerFor]=\"options\">\n                        <mat-icon>more_horiz</mat-icon>\n                     </button>\n                  </div>\n                  <mat-divider></mat-divider>\n               </div>\n               <div class=\"gene-card-content\">\n                  <div class=\"trade-crypto crypto-input-prefix\">\n                     <div class=\"pad-t-sm\">\n                        <div class=\"mrgn-b-xs\">\n                           <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                              <mat-label>Choose Currency</mat-label>\n                              <span matPrefix class=\"fa fa-money\" aria-hidden=\"true\"></span>\n                              <mat-select placeholder=\"Coins\" value=\"Bitcoin\"> \n                                 <mat-option value=\"Bitcoin\">Bitcoin</mat-option>\n                                 <mat-option value=\"Ethereum\">Ethereum</mat-option>\n                                 <mat-option value=\"EOS\">EOS</mat-option>\n                                 <mat-option value=\"Litecoin\">Litecoin</mat-option>\n                              </mat-select>\n                           </mat-form-field>\n                        </div>\n                        <div class=\"mrgn-b-xs\">\n                           <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                              <mat-label>Select Amount</mat-label>\n                              <input class=\"form-control\" matInput type=\"number\" placeholder=\"Amount\" min=\"1\" value=\"200\">\n                           </mat-form-field>\n                        </div>\n                        <div class=\"mrgn-b-xs\">\n                           <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                              <mat-label>Password</mat-label>\n                              <span matPrefix class=\"fa fa-shield\" aria-hidden=\"true\"></span>\n                              <input class=\"form-control\" matInput type=\"password\" placeholder=\"Amount\">\n                           </mat-form-field>\n                        </div>\n                        <div>\n                           <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                              <mat-label>Wallet Address</mat-label>\n                              <span matPrefix class=\"cc BTC-alt\"></span>\n                              <input class=\"form-control\" matInput type=\"text\" placeholder=\"Wallet\" value=\"AXB35H24ISDJHCISDT\">\n                           </mat-form-field>\n                        </div>\n                        <h4 class=\"font-normal success-text mrgn-b-md\">Your Account will be credited with <span>200 $</span></h4>           \n                        <div class=\"button-wrap\">\n                           <button mat-raised-button color=\"primary\">Sell</button>\n                           <h4 class=\"font-normal inline-block success-text\">Transaction successfull</h4>\n                        </div>\n                     </div>                           \n                  </div>\n               </div>\n            </mat-card>\n         </div>\n         <div fxFlex.gt-xs=\"50\" fxFlex.xs=\"100\" fxFlex=\"100\">\n            <mat-card>\n               <div class=\"gene-card-title\">\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                     <div fxLayout=\"column\">\n                        <h4 class=\"mrgn-b-none\">{{'Transfer Cryptocurrency' | translate}}</h4>\n                     </div>\n                     <span fxFlex></span>\n                     <button mat-icon-button>\n                        <mat-icon>sync</mat-icon>\n                     </button>\n                     <button mat-icon-button [matMenuTriggerFor]=\"options\">\n                        <mat-icon>more_horiz</mat-icon>\n                     </button>\n                  </div>\n                  <mat-divider></mat-divider>\n               </div>\n               <div class=\"gene-card-content\">\n                  <div class=\"trade-crypto crypto-input-prefix\">\n                     <div class=\"pad-t-sm\">\n                        <div class=\"mrgn-b-xs\">\n                           <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                              <mat-label>Choose Currency</mat-label>\n                              <span matPrefix class=\"fa fa-money\" aria-hidden=\"true\"></span>\n                              <mat-select placeholder=\"Coins\" value=\"Bitcoin\"> \n                                 <mat-option value=\"Bitcoin\">Bitcoin</mat-option>\n                                 <mat-option value=\"Ethereum\">Ethereum</mat-option>\n                                 <mat-option value=\"EOS\">EOS</mat-option>\n                                 <mat-option value=\"Litecoin\">Litecoin</mat-option>\n                              </mat-select>\n                           </mat-form-field>\n                        </div>                        \n                        <div class=\"mrgn-b-xs\">\n                           <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                              <mat-label>Select Amount</mat-label>\n                              <input class=\"form-control\" matInput type=\"number\" placeholder=\"Amount\" min=\"1\" value=\"200\">\n                           </mat-form-field>\n                        </div>\n                        <div class=\"mrgn-b-xs\">\n                           <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                              <mat-label>Password</mat-label>\n                              <span matPrefix class=\"fa fa-shield\" aria-hidden=\"true\"></span>\n                              <input class=\"form-control\" matInput type=\"password\" placeholder=\"Amount\">\n                           </mat-form-field>\n                        </div>\n                        <div>\n                           <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                              <mat-label>Send To</mat-label>\n                              <span matPrefix class=\"cc BTC-alt\"></span>\n                              <input class=\"form-control\" matInput type=\"text\" placeholder=\"Wallet Address\">\n                           </mat-form-field>\n                        </div>\n                        <h4 class=\"font-normal success-text mrgn-b-md\">Total amount transfered <span>200 $</span></h4>           \n                        <div class=\"button-wrap\">\n                           <button mat-raised-button color=\"primary\">Transfer</button>\n                           <h4 class=\"font-normal inline-block success-text\">Transaction successfull</h4>\n                        </div>\n                     </div>                           \n                  </div>\n               </div>\n            </mat-card>\n         </div>\n         <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n            <mat-card>\n               <div class=\"gene-card-title\">\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                     <div fxLayout=\"column\">\n                        <h4 class=\"mrgn-b-none\">{{'Buy' | translate }} / {{ 'Sell' | translate}}</h4>\n                     </div>\n                     <span fxFlex></span>\n                     <button mat-icon-button>\n                        <mat-icon>sync</mat-icon>\n                     </button>\n                     <button mat-icon-button [matMenuTriggerFor]=\"options\">\n                        <mat-icon>more_horiz</mat-icon>\n                     </button>\n                  </div>\n                  <mat-divider></mat-divider>\n               </div>\n               <div class=\"gene-card-content\">\n                  <div class=\"buttongroup mrgn-b-md text-right\">\n                     <button class=\"mrgn-b-xs\" mat-raised-button color=\"primary\">This Month</button>\n                     <button class=\"mrgn-b-xs\" mat-raised-button color=\"warn\">This Year</button>\n                     <button class=\"mrgn-b-xs\" mat-raised-button color=\"accent\">Overall</button>\n                  </div>\n                  <div class=\"trade-chart-wrap\">\n                     <ms-buy-sell-chart [color]=\"buySellChartColors\" [data]=\"buySellChartData\" [label]=\"buySellChartLabel\"></ms-buy-sell-chart>\n                  </div>\n               </div>\n            </mat-card>\n         </div>\n      </div>\n   </div>\n   <div fxFlex.gt-sm=\"100\" fxFlex.gt-md=\"35\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n      <div fxLayout=\"row wrap\">\n         <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n            <mat-card>\n               <div class=\"gene-card-title\">\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                     <div fxLayout=\"column\">\n                        <h4 class=\"mrgn-b-none\">{{'Expenditure Stats' | translate }}</h4>\n                     </div>\n                     <span fxFlex></span>\n                     <button mat-icon-button>\n                        <mat-icon>sync</mat-icon>\n                     </button>\n                     <button mat-icon-button [matMenuTriggerFor]=\"options\">\n                        <mat-icon>more_horiz</mat-icon>\n                     </button>\n                  </div>\n                  <mat-divider></mat-divider>\n               </div>\n               <ms-amcharts-pie-chart [data]=\"expenditureChartData\"></ms-amcharts-pie-chart>\n            </mat-card>\n         </div>   \n         <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n            <mat-card class=\"exchange-rate-widget\">\n               <div class=\"gene-card-title\">\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                     <div fxLayout=\"column\">\n                        <h4 class=\"mrgn-b-none\">{{'Exchange Rate' | translate}}</h4>\n                     </div>\n                     <span fxFlex></span>\n                     <button mat-icon-button>\n                        <mat-icon>sync</mat-icon>\n                     </button>\n                     <button mat-icon-button [matMenuTriggerFor]=\"options\">\n                        <mat-icon>more_horiz</mat-icon>\n                     </button>\n                  </div>\n                  <mat-divider></mat-divider>\n               </div>\n               <div class=\"gene-card-content trade-crypto crypto-input-prefix\">\n                  <div>\n                     <div class=\"chart-wrap\">\n                        <div class=\"mrgn-b-xs\">\n                           <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                              <mat-label>Choose Currency</mat-label>\n                              <span matPrefix class=\"fa fa-money\" aria-hidden=\"true\"></span>\n                                 <mat-select placeholder=\"Coins\" value=\"Bitcoin\"> \n                                    <mat-option value=\"Bitcoin\">Bitcoin</mat-option>\n                                    <mat-option value=\"Ethereum\">Ethereum</mat-option>\n                                    <mat-option value=\"EOS\">EOS</mat-option>\n                                    <mat-option value=\"Litecoin\">Litecoin</mat-option>\n                                 </mat-select>\n                           </mat-form-field>\n                        </div>\n                        <div class=\"mrgn-b-md\">\n                           <div class=\"rotate-exchange-icon text-center\">\n                              <span class=\"fa fa-exchange inline-block\" aria-hidden=\"true\"></span>\n                           </div>\n                        </div>\n                        <div class=\"mrgn-b-md\">\n                           <mat-form-field class=\"full-wid\" appearance=\"outline\">\n                              <mat-label>Choose Currency</mat-label>\n                              <span matPrefix class=\"fa fa-money\" aria-hidden=\"true\"></span>\n                              <mat-select placeholder=\"Coins\" value=\"Ethereum\"> \n                                    <mat-option value=\"Bitcoin\">Bitcoin</mat-option>\n                                    <mat-option value=\"Ethereum\">Ethereum</mat-option>\n                                    <mat-option value=\"EOS\">EOS</mat-option>\n                                    <mat-option value=\"Litecoin\">Litecoin</mat-option>\n                                 </mat-select>\n                           </mat-form-field>\n                        </div>\n                        <div class=\"evaluated-text success-text\">\n                           <span>1 BTC = 0.45373 ETC</span>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n            </mat-card>\n         </div>     \n         <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\n            <div class=\"trade-list table-list-wrap\">\n               <mat-card>\n                  <div class=\"gene-card-title\">\n                     <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                        <div fxLayout=\"column\">\n                           <h4 class=\"mrgn-b-none\">{{'Recent Trades' | translate}}</h4>\n                        </div>\n                        <span fxFlex></span>\n                        <button mat-icon-button>\n                           <mat-icon>sync</mat-icon>\n                        </button>\n                        <button mat-icon-button [matMenuTriggerFor]=\"options\">\n                           <mat-icon>more_horiz</mat-icon>\n                        </button>\n                     </div>\n                     <mat-divider></mat-divider>\n                  </div>\n                  <div class=\"gene-card-content\">\n                     <div class=\"crypto-table table-hover mrgn-b-lg\">\n                        <perfect-scrollbar class=\"crypto-table table-hover mrgn-b-lg\">\n                           <div class=\"table-responsive recent-trade-table\">\n                              <table mat-table [dataSource]=\"recentTradeElement\">\n                                 <ng-container matColumnDef=\"currency\">\n                                    <th mat-header-cell *matHeaderCellDef> Currency </th>\n                                    <td mat-cell *matCellDef=\"let element\">  <span class=\"cc {{element.currencyIcon}} style-icon\"></span> </td>\n                                 </ng-container>\n                                 <!-- Currency Column -->\n                                 <ng-container matColumnDef=\"status\">\n                                    <th mat-header-cell *matHeaderCellDef> Status </th>\n                                    <td mat-cell *matCellDef=\"let element\"><span class=\"{{element.statusClass | translate}}\">{{element.status}}</span></td>\n                                 </ng-container>\n                                 <!-- Status Column -->\n                                 <ng-container matColumnDef=\"price\">\n                                    <th mat-header-cell *matHeaderCellDef> Price </th>\n                                    <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n                                 </ng-container>\n                                 <!-- Price Column -->\n                                 <ng-container matColumnDef=\"total\">\n                                    <th mat-header-cell *matHeaderCellDef> Total($) </th>\n                                    <td mat-cell *matCellDef=\"let element\"> ${{element.total}} </td>\n                                 </ng-container>\n                                 <!-- Total Column -->               \n                                 <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n                                 <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                              </table>\n                           </div>\n                        </perfect-scrollbar>\n                     </div>\n                     <div class=\"stats-summary mrgn-b-sm\">\n                        <div>Overall Profit: <span></span><i class=\"fa fa-plus success-text\"> $35237 </i></div>\n                        <div>Overall Loss: <span></span><i class=\"fa fa-minus warn-text\"> $200 </i></div>\n                     </div>\n                     <div class=\"button-wrap\">\n                        <button mat-raised-button color=\"primary\">Download CSV</button>\n                     </div>\n                  </div>\n               </mat-card>\n            </div>\n         </div>   \n      </div>   \n   </div>\n</div>\n<mat-menu #options=\"matMenu\" x-position=\"before\">\n   <button mat-menu-item>\n      <mat-icon>settings</mat-icon> Settings </button>\n   <button mat-menu-item>\n      <mat-icon>more</mat-icon> View More </button>\n   <button mat-menu-item>\n      <mat-icon>notifications_off</mat-icon> Disable notifications </button>\n   <button mat-menu-item>\n      <mat-icon>exit_to_app</mat-icon> Remove Panel </button>\n</mat-menu>\n"

/***/ }),

/***/ "./src/app/crypto/trade/trade.component.scss":
/*!***************************************************!*\
  !*** ./src/app/crypto/trade/trade.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyeXB0by90cmFkZS90cmFkZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/crypto/trade/trade.component.ts":
/*!*************************************************!*\
  !*** ./src/app/crypto/trade/trade.component.ts ***!
  \*************************************************/
/*! exports provided: TradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeComponent", function() { return TradeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
/* harmony import */ var _service_core_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/core/core.service */ "./src/app/service/core/core.service.ts");
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




var TradeComponent = /** @class */ (function () {
    function TradeComponent(pageTitleService, service, translate) {
        this.pageTitleService = pageTitleService;
        this.service = service;
        this.translate = translate;
        //expenditure Chart Data 
        this.expenditureChartData = [{
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
        /*
           ----------live Status Chart  ----------
        */
        // live Status chart label
        this.liveStatusChartLabel = ['9', '10', '11', '12', '13', '14', '15', '16'];
        //live Status chart data
        this.liveStatusChartData = [
            { data: [10, 26, 5, 30, 10, 26, 5, 30], label: "Live Status" }
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
          ---------- Buy/Sell Chart ----------
       */
        //line chart label
        this.buySellChartLabel = ['2011', '2012', '2013', '2014', '2015', '2016', '2017'];
        //line chart data
        this.buySellChartData = [
            { data: [0, 5, 65, 7, 120, 40, 10], label: "Buy" },
            { data: [0, 15, 45, 50, 30, 80, 10], label: "Sell" },
            { data: [0, 30, 20, 40, 10, 25, 10], label: "Transfer" }
        ];
        //line chart color
        this.buySellChartColors = [
            {
                lineTension: 0.4,
                borderColor: '#1565c0',
                pointBorderColor: '#1565c0',
                pointBorderWidth: 2,
                pointRadius: 2,
                fill: false,
                pointBackgroundColor: '#FFFFFF',
                borderWidth: 3,
            },
            {
                lineTension: 0.4,
                borderColor: '#0097a7',
                pointBorderColor: '#0097a7',
                pointBorderWidth: 2,
                pointRadius: 2,
                fill: false,
                pointBackgroundColor: '#FFFFFF',
                borderWidth: 3,
            },
            {
                lineTension: 0.4,
                borderColor: '',
                pointBorderColor: '',
                pointBorderWidth: 2,
                pointRadius: 2,
                fill: false,
                pointBackgroundColor: '#FFFFFF',
                borderWidth: 3,
            }
        ];
    }
    TradeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitleService.setTitle("Trade");
        this.service.getTickerData().
            subscribe(function (res) { _this.tickerSliderContent = res; }, function (err) { return console.log(err); }, function () { return _this.tickerSliderContent; });
    };
    TradeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-trade',
            template: __webpack_require__(/*! ./trade.component.html */ "./src/app/crypto/trade/trade.component.html"),
            styles: [__webpack_require__(/*! ./trade.component.scss */ "./src/app/crypto/trade/trade.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"],
            _service_core_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], TradeComponent);
    return TradeComponent;
}());



/***/ }),

/***/ "./src/app/crypto/wallet/wallet.component.html":
/*!*****************************************************!*\
  !*** ./src/app/crypto/wallet/wallet.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"ticker-slider\" dir=\"ltr\">\r\n   <ms-ticker-slider [sliderContent]=\"tickerSliderContent\" [sliderConfig]=\"tickerSliderConfig\"></ms-ticker-slider>\r\n</mat-card>\r\n<!-- ticker slider -->\r\n<div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n   <div fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n      <div class=\"currencies-available text-left mrgn-all-md\">\r\n         <h4>{{'Currencies Available' | translate}}</h4>\r\n         <div class=\"button-wrap\">\r\n            <button class=\"crypto-btn\"><span class=\"cc BTC primary-text mrgn-r-sm\"></span></button>\r\n            <button class=\"crypto-btn\"><span class=\"cc ETC-alt success-text mrgn-r-sm\"></span></button>\r\n            <button class=\"crypto-btn\"><span class=\"cc LTC warn-text mrgn-r-sm\"></span></button>\r\n            <button class=\"crypto-btn\"><span class=\"cc ZEC-alt accent-text mrgn-r-sm\"></span></button>\r\n         </div>\r\n      </div>\r\n      <!-- Currencies Available -->\r\n   </div>\r\n   <div fxFlex.gt-sm=\"60\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n      <div fxLayout=\"column\">\r\n         <mat-accordion class=\"mrgn-all-md\">\r\n            <mat-expansion-panel [expanded]=\"true\">\r\n               <mat-expansion-panel-header>\r\n                  <mat-panel-title>\r\n                     <h4 class=\"font-normal mrgn-b-none\"><span class=\"cc BTC-alt primary-text mrgn-r-sm\"></span>Bitcoin</h4>\r\n                  </mat-panel-title>\r\n               </mat-expansion-panel-header>\r\n               <div class=\"currency-info\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\r\n                  <div fxFlex.gt-md=\"50\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                     <div class=\"receive-sent-stats\" >\r\n                        <mat-list>\r\n                           <mat-list-item>                           \r\n                              <div class=\"icon-wrap\" mat-list-icon>\r\n                                 <span class=\"fa fa-money primary-text\" aria-hidden=\"true\"></span>\r\n                              </div>\r\n                              <h4 mat-line class=\"font-bold\"> {{'Received Amount' | translate}}</h4>\r\n                              <h4 mat-line> + 13247837654</h4>\r\n                           </mat-list-item>\r\n                           <mat-divider></mat-divider>\r\n                           <mat-list-item>                           \r\n                              <div class=\"icon-wrap\" mat-list-icon>\r\n                                 <span class=\"fa fa-credit-card warn-text\" aria-hidden=\"true\"></span>\r\n                              </div>\r\n                              <h4 mat-line class=\"font-bold\"> {{'Sent Amount' | translate}}</h4>\r\n                              <h4 mat-line> - 13247837654</h4>\r\n                           </mat-list-item>\r\n                           <mat-divider></mat-divider>\r\n                           <mat-list-item>                           \r\n                              <div class=\"icon-wrap\" mat-list-icon>\r\n                                 <span class=\"fa fa-university success-text\" aria-hidden=\"true\"></span>\r\n                              </div>\r\n                              <h4 mat-line class=\"font-bold\"> {{'Total Amount' | translate}}</h4>\r\n                              <h4 mat-line> + 13247837654</h4>\r\n                           </mat-list-item>\r\n                        </mat-list>\r\n                        <div class=\"button-wrap\">\r\n                           <button mat-raised-button color=\"primary\">{{'Withdraw' | translate}}</button>\r\n                           <button mat-raised-button color=\"accent\">{{'Deposit' | translate}}</button>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n                  <div fxFlex.gt-md=\"50\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                     <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                        <div class=\"qr-wrap mrgn-all-md text-center\">\r\n                           <h4 class=\"mrgn-b-md\">{{'Wallet Address' | translate}}</h4>\r\n                           <div class=\"trade-crypto crypto-input-prefix\">\r\n                              <mat-form-field class=\"full-wid\" appearance=\"outline\">\r\n                                 <mat-label> Bitcoin </mat-label>\r\n                                 <span matPrefix class=\"cc BTC\"></span>\r\n                                 <input class=\"form-control\" matInput type=\"text\" placeholder=\"Wallet\" value=\"YXB35H24ISDJHCISDT\">\r\n                              </mat-form-field>\r\n                           </div>\r\n                           <div class=\"image-wrap shadow-box\">\r\n                              <img src=\"assets/img/gene-qr.jpg\" width=\"150\" height=\"150\">\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </mat-expansion-panel>\r\n            <!-- Bitcoin -->\r\n            <mat-expansion-panel>\r\n               <mat-expansion-panel-header>\r\n                  <mat-panel-title>\r\n                     <h4 class=\"font-normal mrgn-b-none\"><span class=\"cc ETC primary-text mrgn-r-sm\"></span>Ethereum</h4>\r\n                  </mat-panel-title>\r\n               </mat-expansion-panel-header>\r\n               <div class=\"currency-info\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\r\n                  <div fxFlex.gt-md=\"50\"  fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                     <div class=\"receive-sent-stats\" >\r\n                        <mat-list>\r\n                           <mat-list-item>                           \r\n                              <div class=\"icon-wrap\" mat-list-icon>\r\n                                 <span class=\"fa fa-money primary-text\" aria-hidden=\"true\"></span>\r\n                              </div>\r\n                              <h4 mat-line class=\"font-bold\"> {{'Received Amount' | translate}}</h4>\r\n                              <h4 mat-line> + 13247837654</h4>\r\n                           </mat-list-item>\r\n                           <mat-divider></mat-divider>\r\n                           <mat-list-item>                           \r\n                              <div class=\"icon-wrap\" mat-list-icon>\r\n                                 <span class=\"fa fa-credit-card warn-text\" aria-hidden=\"true\"></span>\r\n                              </div>\r\n                              <h4 mat-line class=\"font-bold\">{{'Sent Amount' | translate}}</h4>\r\n                              <h4 mat-line> - 13247837654</h4>\r\n                           </mat-list-item>\r\n                           <mat-divider></mat-divider>\r\n                           <mat-list-item>                           \r\n                              <div class=\"icon-wrap\" mat-list-icon>\r\n                                 <span class=\"fa fa-university success-text\" aria-hidden=\"true\"></span>\r\n                              </div>\r\n                              <h4 mat-line class=\"font-bold\">{{'Total Amount' | translate}}</h4>\r\n                              <h4 mat-line> + 13247837654</h4>\r\n                           </mat-list-item>\r\n                        </mat-list>\r\n                        <div class=\"button-wrap\">\r\n                           <button mat-raised-button color=\"primary\">{{'Withdraw' | translate}}</button>\r\n                           <button mat-raised-button color=\"accent\">{{'Deposit' | translate}}</button>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n                  <div fxFlex.gt-md=\"50\"  fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                     <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                        <div class=\"qr-wrap mrgn-all-md text-center\">\r\n                           <h4 class=\"mrgn-b-md\">{{'Wallet Address' | translate}}</h4>\r\n                           <div class=\"trade-crypto crypto-input-prefix\">\r\n                              <mat-form-field class=\"full-wid\" appearance=\"outline\">\r\n                                 <mat-label> Ethereum </mat-label>\r\n                                 <span matPrefix class=\"cc ETC\"></span>\r\n                                 <input class=\"form-control\" matInput type=\"text\" placeholder=\"Wallet\" value=\"YXB35H24ISDJHCISDT\">\r\n                              </mat-form-field>\r\n                           </div>\r\n                           <div class=\"image-wrap shadow-box\">\r\n                              <img src=\"assets/img/gene-qr.jpg\" width=\"150\" height=\"150\">\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </mat-expansion-panel>\r\n            <!-- Ethereum  -->\r\n            <mat-expansion-panel>\r\n               <mat-expansion-panel-header>\r\n                  <mat-panel-title>\r\n                     <h4 class=\"font-normal mrgn-b-none\"><span class=\"cc LTC-alt primary-text mrgn-r-sm\"></span>Litecoin</h4>\r\n                  </mat-panel-title>\r\n               </mat-expansion-panel-header>\r\n               <div class=\"currency-info\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\r\n                  <div fxFlex.gt-md=\"50\"  fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                     <div class=\"receive-sent-stats\" >\r\n                        <mat-list>\r\n                           <mat-list-item>                           \r\n                              <div class=\"icon-wrap\" mat-list-icon>\r\n                                 <span class=\"fa fa-money primary-text\" aria-hidden=\"true\"></span>\r\n                              </div>\r\n                              <h4 mat-line class=\"font-bold\">{{'Received Amount' | translate}}</h4>\r\n                              <h4 mat-line> + 13247837654</h4>\r\n                           </mat-list-item>\r\n                           <mat-divider></mat-divider>\r\n                           <mat-list-item>                           \r\n                              <div class=\"icon-wrap\" mat-list-icon>\r\n                                 <span class=\"fa fa-credit-card warn-text\" aria-hidden=\"true\"></span>\r\n                              </div>\r\n                              <h4 mat-line class=\"font-bold\">{{'Sent Amount' | translate}}</h4>\r\n                              <h4 mat-line> - 13247837654</h4>\r\n                           </mat-list-item>\r\n                           <mat-divider></mat-divider>\r\n                           <mat-list-item>                           \r\n                              <div class=\"icon-wrap\" mat-list-icon>\r\n                                 <span class=\"fa fa-university success-text\" aria-hidden=\"true\"></span>\r\n                              </div>\r\n                              <h4 mat-line class=\"font-bold\">{{'Total Amount' | translate }}</h4>\r\n                              <h4 mat-line> + 13247837654</h4>\r\n                           </mat-list-item>\r\n                        </mat-list>\r\n                        <div class=\"button-wrap\">\r\n                           <button mat-raised-button color=\"primary\">{{'Withdraw' | translate}}</button>\r\n                           <button mat-raised-button color=\"accent\">{{'Deposit' | translate}}</button>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n                  <div fxFlex.gt-md=\"50\"  fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                     <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                        <div class=\"qr-wrap mrgn-all-md text-center\">\r\n                           <h4 class=\"mrgn-b-md\">{{'Wallet Address' | translate}}</h4>\r\n                           <div class=\"trade-crypto crypto-input-prefix\">\r\n                              <mat-form-field class=\"full-wid\" appearance=\"outline\">\r\n                                 <mat-label> Litecoin </mat-label>\r\n                                 <span matPrefix class=\"cc LTC-alt\"></span>\r\n                                 <input class=\"form-control\" matInput type=\"text\" placeholder=\"Wallet\" value=\"YXB35H24ISDJHCISDT\">\r\n                              </mat-form-field>\r\n                           </div>\r\n                           <div class=\"image-wrap shadow-box\">\r\n                              <img src=\"assets/img/gene-qr.jpg\" width=\"150\" height=\"150\">\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </mat-expansion-panel>\r\n            <!-- Litecoin -->\r\n            <mat-expansion-panel>\r\n               <mat-expansion-panel-header>\r\n                  <mat-panel-title>\r\n                     <h4 class=\"font-normal mrgn-b-none\"><span class=\"cc ZEC-alt primary-text mrgn-r-sm\"></span>Zcash</h4>\r\n                  </mat-panel-title>\r\n               </mat-expansion-panel-header>\r\n               <div class=\"currency-info\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\r\n                  <div fxFlex.gt-md=\"50\"  fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                     <div class=\"receive-sent-stats\" >\r\n                        <mat-list>\r\n                           <mat-list-item>                           \r\n                              <div class=\"icon-wrap\" mat-list-icon>\r\n                                 <span class=\"fa fa-money primary-text\" aria-hidden=\"true\"></span>\r\n                              </div>\r\n                              <h4 mat-line class=\"font-bold\">{{'Received Amount' | translate}}</h4>\r\n                              <h4 mat-line> + 13247837654</h4>\r\n                           </mat-list-item>\r\n                           <mat-divider></mat-divider>\r\n                           <mat-list-item>                           \r\n                              <div class=\"icon-wrap\" mat-list-icon>\r\n                                 <span class=\"fa fa-credit-card warn-text\" aria-hidden=\"true\"></span>\r\n                              </div>\r\n                              <h4 mat-line class=\"font-bold\">{{'Sent Amount' | translate}}</h4>\r\n                              <h4 mat-line> - 13247837654</h4>\r\n                           </mat-list-item>\r\n                           <mat-divider></mat-divider>\r\n                           <mat-list-item>                           \r\n                              <div class=\"icon-wrap\" mat-list-icon>\r\n                                 <span class=\"fa fa-university success-text\" aria-hidden=\"true\"></span>\r\n                              </div>\r\n                              <h4 mat-line class=\"font-bold\">{{'Total Amount' | translate}}</h4>\r\n                              <h4 mat-line> + 13247837654</h4>\r\n                           </mat-list-item>\r\n                        </mat-list>\r\n                        <div class=\"button-wrap\">\r\n                           <button mat-raised-button color=\"primary\">{{'Withdraw' | translate}}</button>\r\n                           <button mat-raised-button color=\"accent\">{{'Deposit' | translate}}</button>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n                  <div fxFlex.gt-md=\"50\"  fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                     <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                        <div class=\"qr-wrap mrgn-all-md text-center\">\r\n                           <h4 class=\"mrgn-b-md\">{{'Wallet Address' | translate}}</h4>\r\n                           <div class=\"trade-crypto crypto-input-prefix\">\r\n                              <mat-form-field class=\"full-wid\" appearance=\"outline\">\r\n                                 <mat-label> Zcash </mat-label>\r\n                                 <span matPrefix class=\"cc ZEC-alt\"></span>\r\n                                 <input class=\"form-control\" matInput type=\"text\" placeholder=\"Wallet\" value=\"YXB35H24ISDJHCISDT\">\r\n                              </mat-form-field>\r\n                           </div>\r\n                           <div class=\"image-wrap shadow-box\">\r\n                              <img src=\"assets/img/gene-qr.jpg\" width=\"150\" height=\"150\">\r\n                           </div>\r\n                        </div>\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n            </mat-expansion-panel>\r\n            <!-- Zcash -->\r\n         </mat-accordion>                \r\n      </div>\r\n   </div>\r\n   <div fxFlex.gt-sm=\"40\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n      <div class=\"crypto-progress\">\r\n         <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n            <div fxFlex.gt-sm=\"100\" fxFlex.gt-md=\"50\"  fxFlex.gt-xs=\"100\" fxFlex=\"100\" *ngFor=\"let content of cryptoProgress\">\r\n               <mat-card class=\"{{content.card_color}} mat-card\">\r\n                  <div class=\"mrgn-b-xs\" mat-card-widget fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                     <span class=\"inline-block lead\">\r\n                        <i class=\"cc {{content.icon}} mrgn-r-xs\"></i>\r\n                     </span>\r\n                     <span class=\"lead inline-block\">{{content.name}}</span>\r\n                  </div>\r\n                  <div class=\"mrgn-b-md\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\r\n                     <span>+ {{content.viewers}}</span>\r\n                     <span>Trade : {{content.trade}}%</span>\r\n                  </div>\r\n                  <div class=\"crypto-progress-bar mrgn-b-xs\">\r\n                     <mat-progress-bar mode=\"determinate\" value={{content.progressValue}}></mat-progress-bar>\r\n                  </div>\r\n               </mat-card>\r\n            </div>\r\n         </div>\r\n      </div>\r\n      <!--Crypto Progress Cards -->\r\n      <div class=\"bank-details\">\r\n         <mat-card>\r\n            <div class=\"sec-title mrgn-b-md\">\r\n               <h4>{{'Bank Details' | translate}}</h4>\r\n            </div>\r\n            <div class=\"mrgn-b-xs\" mat-card-widget fxLayout=\"row wrap\" fxLayoutAlign=\"space-between start\" fxLayoutGap=\"15px\">\r\n               <div fxFlex.gt-sm=\"calc(100% - 180px)\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                  <div class=\"bank-detail mrgn-b-md\">\r\n                     <div class=\"font-bold mrgn-b-sm inline-block\">{{'Rich Earnand' | translate}}</div>\r\n                     <h4 class=\"font-normal\"><span class=\"fa fa-university primary-text mrgn-r-xs inline-block\"></span>Central Bank Of Lorem</h4>\r\n                     <h5 class=\"verified-status success-text\"><span class=\"fa fa-check mrgn-r-xs\"></span> KYC Verified</h5>\r\n                  </div>\r\n                  <div class=\"font-bold\">\r\n                     <div class=\"mrgn-b-xs\">{{'Account' | translate }} : <span class=\"font-normal\">XXXXXXXXX73823</span></div>\r\n                     <div>{{'Phone' | translate}} : <span class=\"font-normal\">XXXXXXXX1234</span></div>\r\n                  </div>\r\n               </div>\r\n               <div class=\"price-wrap\" fxFlex.gt-sm=\"160px\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                  <h3 class=\"price text-right\">$9783862</h3>\r\n                  <div class=\"button-wrap\">\r\n                     <button class=\"gene-block mrgn-b-sm full-wid\" mat-raised-button color=\"primary\">{{'Withdraw' | translate}}</button>\r\n                     <button class=\"gene-block mrgn-b-sm full-wid\" mat-raised-button color=\"accent\">{{'Deposit' | translate}}</button>\r\n                     <button class=\"gene-block mrgn-b-sm full-wid\" routerLink = \"/ecommerce/cards\" mat-raised-button color=\"warn\">Saved Cards</button>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n         </mat-card>\r\n      </div>\r\n   </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/crypto/wallet/wallet.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/crypto/wallet/wallet.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyeXB0by93YWxsZXQvd2FsbGV0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/crypto/wallet/wallet.component.ts":
/*!***************************************************!*\
  !*** ./src/app/crypto/wallet/wallet.component.ts ***!
  \***************************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
/* harmony import */ var _service_core_core_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/core/core.service */ "./src/app/service/core/core.service.ts");
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




var WalletComponent = /** @class */ (function () {
    function WalletComponent(pageTitleService, service, translate) {
        this.pageTitleService = pageTitleService;
        this.service = service;
        this.translate = translate;
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
        this.cryptoProgress = [
            {
                icon: "BTC-alt",
                name: "Bitcoin",
                trade: "30",
                progressValue: "30",
                viewers: "41",
                card_color: "primary-bg"
            },
            {
                icon: "ETC",
                name: "Ethereum",
                trade: "60",
                progressValue: "60",
                viewers: "4381",
                card_color: "success-bg"
            },
            {
                icon: "LTC-alt",
                name: "Litecoin",
                trade: "80",
                progressValue: "80",
                viewers: "2611",
                card_color: "accent-bg"
            },
            {
                icon: "ZEC-alt",
                name: "Zcash",
                trade: "40",
                progressValue: "40",
                viewers: "611",
                card_color: "warn-bg"
            }
        ];
    }
    WalletComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitleService.setTitle("Wallet");
        this.service.getTickerData().
            subscribe(function (res) { _this.tickerSliderContent = res; }, function (err) { return console.log(err); }, function () { return _this.tickerSliderContent; });
    };
    WalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-wallet',
            template: __webpack_require__(/*! ./wallet.component.html */ "./src/app/crypto/wallet/wallet.component.html"),
            styles: [__webpack_require__(/*! ./wallet.component.scss */ "./src/app/crypto/wallet/wallet.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"],
            _service_core_core_service__WEBPACK_IMPORTED_MODULE_2__["CoreService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], WalletComponent);
    return WalletComponent;
}());



/***/ })

}]);
//# sourceMappingURL=crypto-crypto-module.js.map