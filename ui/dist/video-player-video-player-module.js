(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-player-video-player-module"],{

/***/ "./node_modules/videogular2/buffering.js":
/*!***********************************************!*\
  !*** ./node_modules/videogular2/buffering.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./src/buffering/buffering */ "./node_modules/videogular2/src/buffering/buffering.js"));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVmZmVyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVmZmVyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9zcmMvYnVmZmVyaW5nL2J1ZmZlcmluZyc7XG4iXX0=

/***/ }),

/***/ "./node_modules/videogular2/controls.js":
/*!**********************************************!*\
  !*** ./node_modules/videogular2/controls.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./src/controls/controls */ "./node_modules/videogular2/src/controls/controls.js"));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vc3JjL2NvbnRyb2xzL2NvbnRyb2xzJztcbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/core.js":
/*!******************************************!*\
  !*** ./node_modules/videogular2/core.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./src/core/core */ "./node_modules/videogular2/src/core/core.js"));
// CustomEvent polyfill for IE9/10/11
(function () {
    if (typeof window === "undefined" || typeof window['CustomEvent'] === "function")
        return false;
    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    CustomEvent.prototype = window['Event'].prototype;
    window['CustomEvent'] = CustomEvent;
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBZ0M7QUFFaEMscUNBQXFDO0FBQ3JDLENBQUM7SUFFRyxFQUFFLENBQUMsQ0FBRSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksT0FBTyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssVUFBVyxDQUFDO1FBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUVqRyxxQkFBdUIsS0FBSyxFQUFFLE1BQU07UUFDaEMsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFDNUUsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBRSxhQUFhLENBQUUsQ0FBQztRQUNoRCxHQUFHLENBQUMsZUFBZSxDQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBRSxDQUFDO1FBQy9FLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQsV0FBVyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBRWxELE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxXQUFXLENBQUM7QUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vc3JjL2NvcmUvY29yZSc7XG5cbi8vIEN1c3RvbUV2ZW50IHBvbHlmaWxsIGZvciBJRTkvMTAvMTFcbihmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAoIHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIHdpbmRvd1snQ3VzdG9tRXZlbnQnXSA9PT0gXCJmdW5jdGlvblwiICkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gQ3VzdG9tRXZlbnQgKCBldmVudCwgcGFyYW1zICkge1xuICAgICAgICBwYXJhbXMgPSBwYXJhbXMgfHwgeyBidWJibGVzOiBmYWxzZSwgY2FuY2VsYWJsZTogZmFsc2UsIGRldGFpbDogdW5kZWZpbmVkIH07XG4gICAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCggJ0N1c3RvbUV2ZW50JyApO1xuICAgICAgICBldnQuaW5pdEN1c3RvbUV2ZW50KCBldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsICk7XG4gICAgICAgIHJldHVybiBldnQ7XG4gICAgfVxuXG4gICAgQ3VzdG9tRXZlbnQucHJvdG90eXBlID0gd2luZG93WydFdmVudCddLnByb3RvdHlwZTtcblxuICAgIHdpbmRvd1snQ3VzdG9tRXZlbnQnXSA9IEN1c3RvbUV2ZW50O1xufSkoKTtcbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/overlay-play.js":
/*!**************************************************!*\
  !*** ./node_modules/videogular2/overlay-play.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./src/overlay-play/overlay-play */ "./node_modules/videogular2/src/overlay-play/overlay-play.js"));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1wbGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3ZlcmxheS1wbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9zcmMvb3ZlcmxheS1wbGF5L292ZXJsYXktcGxheSc7XG4iXX0=

/***/ }),

/***/ "./node_modules/videogular2/src/buffering/buffering.js":
/*!*************************************************************!*\
  !*** ./node_modules/videogular2/src/buffering/buffering.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var vg_buffering_1 = __webpack_require__(/*! ./vg-buffering */ "./node_modules/videogular2/src/buffering/vg-buffering.js");
var VgBufferingModule = /** @class */ (function () {
    function VgBufferingModule() {
    }
    VgBufferingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [
                        vg_buffering_1.VgBuffering
                    ],
                    exports: [
                        vg_buffering_1.VgBuffering
                    ]
                },] },
    ];
    return VgBufferingModule;
}());
exports.VgBufferingModule = VgBufferingModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVmZmVyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVmZmVyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUUvQywrQ0FBNkM7QUFFN0M7SUFBQTtJQVVBLENBQUM7O2dCQVZBLGVBQVEsU0FBQztvQkFDTixPQUFPLEVBQUUsQ0FBRSxxQkFBWSxDQUFFO29CQUN6QixZQUFZLEVBQUU7d0JBQ1YsMEJBQVc7cUJBQ2Q7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLDBCQUFXO3FCQUNkO2lCQUNKOztJQUVELHdCQUFDO0NBQUEsQUFWRCxJQVVDO0FBRFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFZnQnVmZmVyaW5nIH0gZnJvbSAnLi92Zy1idWZmZXJpbmcnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFZnQnVmZmVyaW5nXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFZnQnVmZmVyaW5nXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBWZ0J1ZmZlcmluZ01vZHVsZSB7XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/videogular2/src/buffering/vg-buffering.js":
/*!****************************************************************!*\
  !*** ./node_modules/videogular2/src/buffering/vg-buffering.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var VgBuffering = /** @class */ (function () {
    function VgBuffering(ref, API) {
        this.API = API;
        this.checkInterval = 50;
        this.currentPlayPos = 0;
        this.lastPlayPos = 0;
        this.subscriptions = [];
        this.isBuffering = false;
        this.elem = ref.nativeElement;
    }
    VgBuffering.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgBuffering.prototype.onPlayerReady = function () {
        var _this = this;
        this.target = this.API.getMediaById(this.vgFor);
        this.subscriptions.push(this.target.subscriptions.bufferDetected.subscribe(function (isBuffering) { return _this.onUpdateBuffer(isBuffering); }));
    };
    VgBuffering.prototype.onUpdateBuffer = function (isBuffering) {
        this.isBuffering = isBuffering;
    };
    VgBuffering.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgBuffering.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-buffering',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<div class=\"vg-buffering\">\n            <div class=\"bufferingContainer\">\n                <div class=\"loadingSpinner\"></div>\n            </div>\n        </div>",
                    styles: ["\n        vg-buffering {\n            display: none;\n            z-index: 201;\n        }\n\n        vg-buffering.is-buffering {\n            display: block;\n        }\n        \n        .vg-buffering {\n            position: absolute;\n            display: block;\n            width: 100%;\n            height: 100%;\n        }\n\n        .vg-buffering .bufferingContainer {\n            width: 100%;\n            position: absolute;\n            cursor: pointer;\n            top: 50%;\n            margin-top: -50px;\n\n            zoom: 1;\n            filter: alpha(opacity=60);\n            opacity: 0.6;\n        }\n\n        /* Loading Spinner\n        * http://www.alessioatzeni.com/blog/css3-loading-animation-loop/\n        */\n        .vg-buffering .loadingSpinner {\n            background-color: rgba(0, 0, 0, 0);\n            border: 5px solid rgba(255, 255, 255, 1);\n            opacity: .9;\n            border-top: 5px solid rgba(0, 0, 0, 0);\n            border-left: 5px solid rgba(0, 0, 0, 0);\n            border-radius: 50px;\n            box-shadow: 0 0 35px #FFFFFF;\n            width: 50px;\n            height: 50px;\n            margin: 0 auto;\n            -moz-animation: spin .5s infinite linear;\n            -webkit-animation: spin .5s infinite linear;\n        }\n\n        .vg-buffering .loadingSpinner .stop {\n            -webkit-animation-play-state: paused;\n            -moz-animation-play-state: paused;\n        }\n\n        @-moz-keyframes spin {\n            0% {\n                -moz-transform: rotate(0deg);\n            }\n            100% {\n                -moz-transform: rotate(360deg);\n            }\n        }\n\n        @-moz-keyframes spinoff {\n            0% {\n                -moz-transform: rotate(0deg);\n            }\n            100% {\n                -moz-transform: rotate(-360deg);\n            }\n        }\n\n        @-webkit-keyframes spin {\n            0% {\n                -webkit-transform: rotate(0deg);\n            }\n            100% {\n                -webkit-transform: rotate(360deg);\n            }\n        }\n\n        @-webkit-keyframes spinoff {\n            0% {\n                -webkit-transform: rotate(0deg);\n            }\n            100% {\n                -webkit-transform: rotate(-360deg);\n            }\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgBuffering.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: vg_api_1.VgAPI }
    ]; };
    VgBuffering.propDecorators = {
        vgFor: [{ type: core_1.Input }],
        isBuffering: [{ type: core_1.HostBinding, args: ['class.is-buffering',] }]
    };
    return VgBuffering;
}());
exports.VgBuffering = VgBuffering;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctYnVmZmVyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctYnVmZmVyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdIO0FBQ2hILGtEQUFnRDtBQUtoRDtJQThHSSxxQkFBWSxHQUFlLEVBQVMsR0FBVTtRQUFWLFFBQUcsR0FBSCxHQUFHLENBQU87UUFSOUMsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0IsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFFeEIsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBRUEsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFHNUQsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ2xDLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQ2xFLENBQUM7UUFDTixDQUFDO0lBQ0wsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUM5QyxVQUFBLFdBQVcsSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQWhDLENBQWdDLENBQ2xELENBQ0osQ0FBQztJQUNOLENBQUM7SUFFRCxvQ0FBYyxHQUFkLFVBQWUsV0FBVztRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBRUQsaUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O2dCQTdJSixnQkFBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxjQUFjO29CQUN4QixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLHdLQUlDO29CQUNYLE1BQU0sRUFBRSxDQUFFLHl4RUF1RlQsQ0FBRTtpQkFDTjs7OztnQkF0R21CLGlCQUFVO2dCQUNyQixjQUFLOzs7d0JBdUdULFlBQUs7OEJBVUwsa0JBQVcsU0FBQyxvQkFBb0I7O0lBa0NyQyxrQkFBQztDQUFBLEFBOUlELElBOElDO0FBN0NZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBJUGxheWFibGUgfSBmcm9tICcuLi9jb3JlL3ZnLW1lZGlhL2ktcGxheWFibGUnO1xuaW1wb3J0IHsgVmdTdGF0ZXMgfSBmcm9tICcuLi9jb3JlL3N0YXRlcy92Zy1zdGF0ZXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctYnVmZmVyaW5nJyxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInZnLWJ1ZmZlcmluZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1ZmZlcmluZ0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nU3Bpbm5lclwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmAsXG4gICAgc3R5bGVzOiBbIGBcbiAgICAgICAgdmctYnVmZmVyaW5nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB6LWluZGV4OiAyMDE7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1idWZmZXJpbmcuaXMtYnVmZmVyaW5nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAudmctYnVmZmVyaW5nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAudmctYnVmZmVyaW5nIC5idWZmZXJpbmdDb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xuXG4gICAgICAgICAgICB6b29tOiAxO1xuICAgICAgICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTYwKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIExvYWRpbmcgU3Bpbm5lclxuICAgICAgICAqIGh0dHA6Ly93d3cuYWxlc3Npb2F0emVuaS5jb20vYmxvZy9jc3MzLWxvYWRpbmctYW5pbWF0aW9uLWxvb3AvXG4gICAgICAgICovXG4gICAgICAgIC52Zy1idWZmZXJpbmcgLmxvYWRpbmdTcGlubmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgb3BhY2l0eTogLjk7XG4gICAgICAgICAgICBib3JkZXItdG9wOiA1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMzVweCAjRkZGRkZGO1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uOiBzcGluIC41cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAuNXMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZnLWJ1ZmZlcmluZyAubG9hZGluZ1NwaW5uZXIgLnN0b3Age1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuICAgICAgICAgICAgLW1vei1hbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuICAgICAgICB9XG5cbiAgICAgICAgQC1tb3ota2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBALW1vei1rZXlmcmFtZXMgc3Bpbm9mZiB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzcGlub2ZmIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBWZ0J1ZmZlcmluZyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSB2Z0Zvcjogc3RyaW5nO1xuXG4gICAgZWxlbTogSFRNTEVsZW1lbnQ7XG4gICAgdGFyZ2V0OiBJUGxheWFibGU7XG4gICAgY2hlY2tJbnRlcnZhbDogbnVtYmVyID0gNTA7XG4gICAgY3VycmVudFBsYXlQb3M6IG51bWJlciA9IDA7XG4gICAgbGFzdFBsYXlQb3M6IG51bWJlciA9IDA7XG5cbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1idWZmZXJpbmcnKSBpc0J1ZmZlcmluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgQVBJOiBWZ0FQSSkge1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuQVBJLmlzUGxheWVyUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMub25QbGF5ZXJSZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgdGhpcy5BUEkucGxheWVyUmVhZHlFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vblBsYXllclJlYWR5KCkpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5zdWJzY3JpcHRpb25zLmJ1ZmZlckRldGVjdGVkLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBpc0J1ZmZlcmluZyA9PiB0aGlzLm9uVXBkYXRlQnVmZmVyKGlzQnVmZmVyaW5nKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uVXBkYXRlQnVmZmVyKGlzQnVmZmVyaW5nKSB7XG4gICAgICAgIHRoaXMuaXNCdWZmZXJpbmcgPSBpc0J1ZmZlcmluZztcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/controls/controls.js":
/*!***********************************************************!*\
  !*** ./node_modules/videogular2/src/controls/controls.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var vg_controls_1 = __webpack_require__(/*! ./vg-controls */ "./node_modules/videogular2/src/controls/vg-controls.js");
var vg_fullscreen_1 = __webpack_require__(/*! ./vg-fullscreen/vg-fullscreen */ "./node_modules/videogular2/src/controls/vg-fullscreen/vg-fullscreen.js");
var vg_mute_1 = __webpack_require__(/*! ./vg-mute/vg-mute */ "./node_modules/videogular2/src/controls/vg-mute/vg-mute.js");
var vg_volume_1 = __webpack_require__(/*! ./vg-volume/vg-volume */ "./node_modules/videogular2/src/controls/vg-volume/vg-volume.js");
var vg_play_pause_1 = __webpack_require__(/*! ./vg-play-pause/vg-play-pause */ "./node_modules/videogular2/src/controls/vg-play-pause/vg-play-pause.js");
var vg_playback_button_1 = __webpack_require__(/*! ./vg-playback-button/vg-playback-button */ "./node_modules/videogular2/src/controls/vg-playback-button/vg-playback-button.js");
var vg_scrub_bar_1 = __webpack_require__(/*! ./vg-scrub-bar/vg-scrub-bar */ "./node_modules/videogular2/src/controls/vg-scrub-bar/vg-scrub-bar.js");
var vg_scrub_bar_buffering_time_1 = __webpack_require__(/*! ./vg-scrub-bar/vg-scrub-bar-buffering-time/vg-scrub-bar-buffering-time */ "./node_modules/videogular2/src/controls/vg-scrub-bar/vg-scrub-bar-buffering-time/vg-scrub-bar-buffering-time.js");
var vg_scrub_bar_cue_points_1 = __webpack_require__(/*! ./vg-scrub-bar/vg-scrub-bar-cue-points/vg-scrub-bar-cue-points */ "./node_modules/videogular2/src/controls/vg-scrub-bar/vg-scrub-bar-cue-points/vg-scrub-bar-cue-points.js");
var vg_scrub_bar_current_time_1 = __webpack_require__(/*! ./vg-scrub-bar/vg-scrub-bar-current-time/vg-scrub-bar-current-time */ "./node_modules/videogular2/src/controls/vg-scrub-bar/vg-scrub-bar-current-time/vg-scrub-bar-current-time.js");
var vg_time_display_1 = __webpack_require__(/*! ./vg-time-display/vg-time-display */ "./node_modules/videogular2/src/controls/vg-time-display/vg-time-display.js");
var vg_track_selector_1 = __webpack_require__(/*! ./vg-track-selector/vg-track-selector */ "./node_modules/videogular2/src/controls/vg-track-selector/vg-track-selector.js");
var vg_controls_hidden_1 = __webpack_require__(/*! ../core/services/vg-controls-hidden */ "./node_modules/videogular2/src/core/services/vg-controls-hidden.js");
var vg_quality_selector_1 = __webpack_require__(/*! ./vg-quality-selector/vg-quality-selector */ "./node_modules/videogular2/src/controls/vg-quality-selector/vg-quality-selector.js");
var VgControlsModule = /** @class */ (function () {
    function VgControlsModule() {
    }
    VgControlsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [
                        vg_controls_1.VgControls,
                        vg_fullscreen_1.VgFullscreen,
                        vg_mute_1.VgMute,
                        vg_volume_1.VgVolume,
                        vg_play_pause_1.VgPlayPause,
                        vg_playback_button_1.VgPlaybackButton,
                        vg_scrub_bar_1.VgScrubBar,
                        vg_scrub_bar_buffering_time_1.VgScrubBarBufferingTime,
                        vg_scrub_bar_cue_points_1.VgScrubBarCuePoints,
                        vg_scrub_bar_current_time_1.VgScrubBarCurrentTime,
                        vg_time_display_1.VgTimeDisplay,
                        vg_time_display_1.VgUtcPipe,
                        vg_track_selector_1.VgTrackSelector,
                        vg_quality_selector_1.VgQualitySelector
                    ],
                    exports: [
                        vg_controls_1.VgControls,
                        vg_fullscreen_1.VgFullscreen,
                        vg_mute_1.VgMute,
                        vg_volume_1.VgVolume,
                        vg_play_pause_1.VgPlayPause,
                        vg_playback_button_1.VgPlaybackButton,
                        vg_scrub_bar_1.VgScrubBar,
                        vg_scrub_bar_buffering_time_1.VgScrubBarBufferingTime,
                        vg_scrub_bar_cue_points_1.VgScrubBarCuePoints,
                        vg_scrub_bar_current_time_1.VgScrubBarCurrentTime,
                        vg_time_display_1.VgTimeDisplay,
                        vg_time_display_1.VgUtcPipe,
                        vg_track_selector_1.VgTrackSelector,
                        vg_quality_selector_1.VgQualitySelector
                    ],
                    providers: [vg_controls_hidden_1.VgControlsHidden]
                },] },
    ];
    return VgControlsModule;
}());
exports.VgControlsModule = VgControlsModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsNkNBQTJDO0FBQzNDLCtEQUE2RDtBQUM3RCw2Q0FBMkM7QUFDM0MsbURBQWlEO0FBQ2pELCtEQUE0RDtBQUM1RCw4RUFBMkU7QUFDM0UsNERBQXlEO0FBQ3pELHNIQUFpSDtBQUNqSCwwR0FBcUc7QUFDckcsZ0hBQTJHO0FBQzNHLHFFQUE2RTtBQUM3RSwyRUFBd0U7QUFDeEUsMEVBQXVFO0FBQ3ZFLGlGQUE4RTtBQUU5RTtJQUFBO0lBcUNBLENBQUM7O2dCQXJDQSxlQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBRTtvQkFDekIsWUFBWSxFQUFFO3dCQUNWLHdCQUFVO3dCQUNWLDRCQUFZO3dCQUNaLGdCQUFNO3dCQUNOLG9CQUFRO3dCQUNSLDJCQUFXO3dCQUNYLHFDQUFnQjt3QkFDaEIseUJBQVU7d0JBQ1YscURBQXVCO3dCQUN2Qiw2Q0FBbUI7d0JBQ25CLGlEQUFxQjt3QkFDckIsK0JBQWE7d0JBQ2IsMkJBQVM7d0JBQ1QsbUNBQWU7d0JBQ2YsdUNBQWlCO3FCQUNwQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsd0JBQVU7d0JBQ1YsNEJBQVk7d0JBQ1osZ0JBQU07d0JBQ04sb0JBQVE7d0JBQ1IsMkJBQVc7d0JBQ1gscUNBQWdCO3dCQUNoQix5QkFBVTt3QkFDVixxREFBdUI7d0JBQ3ZCLDZDQUFtQjt3QkFDbkIsaURBQXFCO3dCQUNyQiwrQkFBYTt3QkFDYiwyQkFBUzt3QkFDVCxtQ0FBZTt3QkFDZix1Q0FBaUI7cUJBQ3BCO29CQUNELFNBQVMsRUFBRSxDQUFFLHFDQUFnQixDQUFFO2lCQUNsQzs7SUFFRCx1QkFBQztDQUFBLEFBckNELElBcUNDO0FBRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBWZ0NvbnRyb2xzIH0gZnJvbSAnLi92Zy1jb250cm9scyc7XG5pbXBvcnQgeyBWZ0Z1bGxzY3JlZW4gfSBmcm9tICcuL3ZnLWZ1bGxzY3JlZW4vdmctZnVsbHNjcmVlbic7XG5pbXBvcnQgeyBWZ011dGUgfSBmcm9tICcuL3ZnLW11dGUvdmctbXV0ZSc7XG5pbXBvcnQgeyBWZ1ZvbHVtZSB9IGZyb20gJy4vdmctdm9sdW1lL3ZnLXZvbHVtZSc7XG5pbXBvcnQgeyBWZ1BsYXlQYXVzZSB9IGZyb20gJy4vdmctcGxheS1wYXVzZS92Zy1wbGF5LXBhdXNlJztcbmltcG9ydCB7IFZnUGxheWJhY2tCdXR0b24gfSBmcm9tICcuL3ZnLXBsYXliYWNrLWJ1dHRvbi92Zy1wbGF5YmFjay1idXR0b24nO1xuaW1wb3J0IHsgVmdTY3J1YkJhciB9IGZyb20gJy4vdmctc2NydWItYmFyL3ZnLXNjcnViLWJhcic7XG5pbXBvcnQgeyBWZ1NjcnViQmFyQnVmZmVyaW5nVGltZSB9IGZyb20gJy4vdmctc2NydWItYmFyL3ZnLXNjcnViLWJhci1idWZmZXJpbmctdGltZS92Zy1zY3J1Yi1iYXItYnVmZmVyaW5nLXRpbWUnO1xuaW1wb3J0IHsgVmdTY3J1YkJhckN1ZVBvaW50cyB9IGZyb20gJy4vdmctc2NydWItYmFyL3ZnLXNjcnViLWJhci1jdWUtcG9pbnRzL3ZnLXNjcnViLWJhci1jdWUtcG9pbnRzJztcbmltcG9ydCB7IFZnU2NydWJCYXJDdXJyZW50VGltZSB9IGZyb20gJy4vdmctc2NydWItYmFyL3ZnLXNjcnViLWJhci1jdXJyZW50LXRpbWUvdmctc2NydWItYmFyLWN1cnJlbnQtdGltZSc7XG5pbXBvcnQgeyBWZ1RpbWVEaXNwbGF5LCBWZ1V0Y1BpcGUgfSBmcm9tICcuL3ZnLXRpbWUtZGlzcGxheS92Zy10aW1lLWRpc3BsYXknO1xuaW1wb3J0IHsgVmdUcmFja1NlbGVjdG9yIH0gZnJvbSAnLi92Zy10cmFjay1zZWxlY3Rvci92Zy10cmFjay1zZWxlY3Rvcic7XG5pbXBvcnQgeyBWZ0NvbnRyb2xzSGlkZGVuIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy92Zy1jb250cm9scy1oaWRkZW4nO1xuaW1wb3J0IHsgVmdRdWFsaXR5U2VsZWN0b3IgfSBmcm9tICcuL3ZnLXF1YWxpdHktc2VsZWN0b3IvdmctcXVhbGl0eS1zZWxlY3Rvcic7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogWyBDb21tb25Nb2R1bGUgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVmdDb250cm9scyxcbiAgICAgICAgVmdGdWxsc2NyZWVuLFxuICAgICAgICBWZ011dGUsXG4gICAgICAgIFZnVm9sdW1lLFxuICAgICAgICBWZ1BsYXlQYXVzZSxcbiAgICAgICAgVmdQbGF5YmFja0J1dHRvbixcbiAgICAgICAgVmdTY3J1YkJhcixcbiAgICAgICAgVmdTY3J1YkJhckJ1ZmZlcmluZ1RpbWUsXG4gICAgICAgIFZnU2NydWJCYXJDdWVQb2ludHMsXG4gICAgICAgIFZnU2NydWJCYXJDdXJyZW50VGltZSxcbiAgICAgICAgVmdUaW1lRGlzcGxheSxcbiAgICAgICAgVmdVdGNQaXBlLFxuICAgICAgICBWZ1RyYWNrU2VsZWN0b3IsXG4gICAgICAgIFZnUXVhbGl0eVNlbGVjdG9yXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFZnQ29udHJvbHMsXG4gICAgICAgIFZnRnVsbHNjcmVlbixcbiAgICAgICAgVmdNdXRlLFxuICAgICAgICBWZ1ZvbHVtZSxcbiAgICAgICAgVmdQbGF5UGF1c2UsXG4gICAgICAgIFZnUGxheWJhY2tCdXR0b24sXG4gICAgICAgIFZnU2NydWJCYXIsXG4gICAgICAgIFZnU2NydWJCYXJCdWZmZXJpbmdUaW1lLFxuICAgICAgICBWZ1NjcnViQmFyQ3VlUG9pbnRzLFxuICAgICAgICBWZ1NjcnViQmFyQ3VycmVudFRpbWUsXG4gICAgICAgIFZnVGltZURpc3BsYXksXG4gICAgICAgIFZnVXRjUGlwZSxcbiAgICAgICAgVmdUcmFja1NlbGVjdG9yLFxuICAgICAgICBWZ1F1YWxpdHlTZWxlY3RvclxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbIFZnQ29udHJvbHNIaWRkZW4gXVxufSlcbmV4cG9ydCBjbGFzcyBWZ0NvbnRyb2xzTW9kdWxlIHtcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-controls.js":
/*!**************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-controls.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var vg_controls_hidden_1 = __webpack_require__(/*! ./../core/services/vg-controls-hidden */ "./node_modules/videogular2/src/core/services/vg-controls-hidden.js");
var vg_states_1 = __webpack_require__(/*! ../core/states/vg-states */ "./node_modules/videogular2/src/core/states/vg-states.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var VgControls = /** @class */ (function () {
    function VgControls(API, ref, hidden) {
        this.API = API;
        this.ref = ref;
        this.hidden = hidden;
        this.isAdsPlaying = 'initial';
        this.hideControls = false;
        this.vgAutohide = false;
        this.vgAutohideTime = 3;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgControls.prototype.ngOnInit = function () {
        var _this = this;
        this.mouseMove$ = rxjs_1.fromEvent(this.API.videogularElement, 'mousemove');
        this.subscriptions.push(this.mouseMove$.subscribe(this.show.bind(this)));
        this.touchStart$ = rxjs_1.fromEvent(this.API.videogularElement, 'touchstart');
        this.subscriptions.push(this.touchStart$.subscribe(this.show.bind(this)));
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgControls.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
        this.subscriptions.push(this.target.subscriptions.play.subscribe(this.onPlay.bind(this)));
        this.subscriptions.push(this.target.subscriptions.pause.subscribe(this.onPause.bind(this)));
        this.subscriptions.push(this.target.subscriptions.startAds.subscribe(this.onStartAds.bind(this)));
        this.subscriptions.push(this.target.subscriptions.endAds.subscribe(this.onEndAds.bind(this)));
    };
    VgControls.prototype.ngAfterViewInit = function () {
        if (this.vgAutohide) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    VgControls.prototype.onPlay = function () {
        if (this.vgAutohide) {
            this.hide();
        }
    };
    VgControls.prototype.onPause = function () {
        clearTimeout(this.timer);
        this.hideControls = false;
        this.hidden.state(false);
    };
    VgControls.prototype.onStartAds = function () {
        this.isAdsPlaying = 'none';
    };
    VgControls.prototype.onEndAds = function () {
        this.isAdsPlaying = 'initial';
    };
    VgControls.prototype.hide = function () {
        if (this.vgAutohide) {
            clearTimeout(this.timer);
            this.hideAsync();
        }
    };
    VgControls.prototype.show = function () {
        clearTimeout(this.timer);
        this.hideControls = false;
        this.hidden.state(false);
        if (this.vgAutohide) {
            this.hideAsync();
        }
    };
    VgControls.prototype.hideAsync = function () {
        var _this = this;
        if (this.API.state === vg_states_1.VgStates.VG_PLAYING) {
            this.timer = setTimeout(function () {
                _this.hideControls = true;
                _this.hidden.state(true);
            }, this.vgAutohideTime * 1000);
        }
    };
    VgControls.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgControls.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-controls',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<ng-content></ng-content>",
                    styles: ["\n        vg-controls {\n            position: absolute;\n            display: flex;\n            width: 100%;\n            height: 50px;\n            z-index: 300;\n            bottom: 0;\n            background-color: rgba(0, 0, 0, 0.5);\n            -webkit-transition: bottom 1s;\n            -khtml-transition: bottom 1s;\n            -moz-transition: bottom 1s;\n            -ms-transition: bottom 1s;\n            transition: bottom 1s;\n        }\n\n        vg-controls.hide {  \n            bottom: -50px;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgControls.ctorParameters = function () { return [
        { type: vg_api_1.VgAPI },
        { type: core_1.ElementRef },
        { type: vg_controls_hidden_1.VgControlsHidden }
    ]; };
    VgControls.propDecorators = {
        isAdsPlaying: [{ type: core_1.HostBinding, args: ['style.pointer-events',] }],
        hideControls: [{ type: core_1.HostBinding, args: ['class.hide',] }],
        vgFor: [{ type: core_1.Input }],
        vgAutohide: [{ type: core_1.Input }],
        vgAutohideTime: [{ type: core_1.Input }]
    };
    return VgControls;
}());
exports.VgControls = VgControls;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctY29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1jb250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUd1QjtBQUV2QixrREFBZ0Q7QUFDaEQsNEVBQXlFO0FBRXpFLHNEQUFvRDtBQUNwRCw2QkFBK0I7QUFFL0I7SUE0Q0ksb0JBQW9CLEdBQVUsRUFBVSxHQUFlLEVBQVUsTUFBd0I7UUFBckUsUUFBRyxHQUFILEdBQUcsQ0FBTztRQUFVLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQWZwRCxpQkFBWSxHQUFXLFNBQVMsQ0FBQztRQUMzQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUdoRCxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBUXBDLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUcvQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDbEMsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpHLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV6RSxJQUFJLENBQUMsV0FBVyxHQUFHLGdCQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJ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bnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBBZnRlclZpZXdJbml0LCBWaWV3RW5jYXBzdWxhdGlvbixcbiAgICBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFZnQVBJIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy92Zy1hcGknO1xuaW1wb3J0IHsgVmdDb250cm9sc0hpZGRlbiB9IGZyb20gJy4vLi4vY29yZS9zZXJ2aWNlcy92Zy1jb250cm9scy1oaWRkZW4nO1xuXG5pbXBvcnQgeyBWZ1N0YXRlcyB9IGZyb20gJy4uL2NvcmUvc3RhdGVzL3ZnLXN0YXRlcyc7XG5pbXBvcnQge2Zyb21FdmVudH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctY29udHJvbHMnLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgICBzdHlsZXM6IFsgYFxuICAgICAgICB2Zy1jb250cm9scyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAzMDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvdHRvbSAxcztcbiAgICAgICAgICAgIC1raHRtbC10cmFuc2l0aW9uOiBib3R0b20gMXM7XG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGJvdHRvbSAxcztcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBib3R0b20gMXM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gMXM7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1jb250cm9scy5oaWRlIHsgIFxuICAgICAgICAgICAgYm90dG9tOiAtNTBweDtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIFZnQ29udHJvbHMgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gICAgZWxlbTogSFRNTEVsZW1lbnQ7XG4gICAgdGFyZ2V0OiBhbnk7XG5cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBvaW50ZXItZXZlbnRzJykgaXNBZHNQbGF5aW5nOiBzdHJpbmcgPSAnaW5pdGlhbCc7XG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5oaWRlJykgaGlkZUNvbnRyb2xzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSB2Z0Zvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHZnQXV0b2hpZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSB2Z0F1dG9oaWRlVGltZTogbnVtYmVyID0gMztcblxuICAgIHByaXZhdGUgdGltZXI6IGFueTtcbiAgICBwcml2YXRlIGhpZGVUaW1lcjogYW55O1xuXG4gICAgbW91c2VNb3ZlJDogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHRvdWNoU3RhcnQkOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBBUEk6IFZnQVBJLCBwcml2YXRlIHJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBoaWRkZW46IFZnQ29udHJvbHNIaWRkZW4pIHtcbiAgICAgICAgdGhpcy5lbGVtID0gcmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubW91c2VNb3ZlJCA9IGZyb21FdmVudCh0aGlzLkFQSS52aWRlb2d1bGFyRWxlbWVudCwgJ21vdXNlbW92ZScpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLm1vdXNlTW92ZSQuc3Vic2NyaWJlKHRoaXMuc2hvdy5iaW5kKHRoaXMpKSk7XG5cbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0JCA9IGZyb21FdmVudCh0aGlzLkFQSS52aWRlb2d1bGFyRWxlbWVudCwgJ3RvdWNoc3RhcnQnKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy50b3VjaFN0YXJ0JC5zdWJzY3JpYmUodGhpcy5zaG93LmJpbmQodGhpcykpKTtcblxuICAgICAgICBpZiAodGhpcy5BUEkuaXNQbGF5ZXJSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5vblBsYXllclJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLkFQSS5wbGF5ZXJSZWFkeUV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUGxheWVyUmVhZHkoKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy50YXJnZXQuc3Vic2NyaXB0aW9ucy5wbGF5LnN1YnNjcmliZSh0aGlzLm9uUGxheS5iaW5kKHRoaXMpKSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMudGFyZ2V0LnN1YnNjcmlwdGlvbnMucGF1c2Uuc3Vic2NyaWJlKHRoaXMub25QYXVzZS5iaW5kKHRoaXMpKSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMudGFyZ2V0LnN1YnNjcmlwdGlvbnMuc3RhcnRBZHMuc3Vic2NyaWJlKHRoaXMub25TdGFydEFkcy5iaW5kKHRoaXMpKSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMudGFyZ2V0LnN1YnNjcmlwdGlvbnMuZW5kQWRzLnN1YnNjcmliZSh0aGlzLm9uRW5kQWRzLmJpbmQodGhpcykpKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnZnQXV0b2hpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLnZnQXV0b2hpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QYXVzZSgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLmhpZGVDb250cm9scyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpZGRlbi5zdGF0ZShmYWxzZSk7XG4gICAgfVxuXG4gICAgb25TdGFydEFkcygpIHtcbiAgICAgICAgdGhpcy5pc0Fkc1BsYXlpbmcgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgb25FbmRBZHMoKSB7XG4gICAgICAgIHRoaXMuaXNBZHNQbGF5aW5nID0gJ2luaXRpYWwnO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnZnQXV0b2hpZGUpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZUFzeW5jKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgIHRoaXMuaGlkZUNvbnRyb2xzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGlkZGVuLnN0YXRlKGZhbHNlKTtcblxuICAgICAgICBpZiAodGhpcy52Z0F1dG9oaWRlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVBc3luYygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoaWRlQXN5bmMoKSB7XG4gICAgICAgIGlmICh0aGlzLkFQSS5zdGF0ZSA9PT0gVmdTdGF0ZXMuVkdfUExBWUlORykge1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZUNvbnRyb2xzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGRlbi5zdGF0ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIHRoaXMudmdBdXRvaGlkZVRpbWUgKiAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-fullscreen/vg-fullscreen.js":
/*!******************************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-fullscreen/vg-fullscreen.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var vg_fullscreen_api_1 = __webpack_require__(/*! ../../core/services/vg-fullscreen-api */ "./node_modules/videogular2/src/core/services/vg-fullscreen-api.js");
var VgFullscreen = /** @class */ (function () {
    function VgFullscreen(ref, API, fsAPI) {
        this.API = API;
        this.fsAPI = fsAPI;
        this.isFullscreen = false;
        this.subscriptions = [];
        this.ariaValue = 'normal mode';
        this.elem = ref.nativeElement;
        this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
    }
    VgFullscreen.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgFullscreen.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgFullscreen.prototype.onChangeFullscreen = function (fsState) {
        this.ariaValue = fsState ? 'fullscren mode' : 'normal mode';
        this.isFullscreen = fsState;
    };
    VgFullscreen.prototype.onClick = function () {
        this.changeFullscreenState();
    };
    VgFullscreen.prototype.onKeyDown = function (event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.changeFullscreenState();
        }
    };
    VgFullscreen.prototype.changeFullscreenState = function () {
        var element = this.target;
        if (this.target instanceof vg_api_1.VgAPI) {
            element = null;
        }
        this.fsAPI.toggleFullscreen(element);
    };
    VgFullscreen.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgFullscreen.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-fullscreen',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div class=\"icon\"\n             [class.vg-icon-fullscreen]=\"!isFullscreen\"\n             [class.vg-icon-fullscreen_exit]=\"isFullscreen\"\n             tabindex=\"0\"\n             role=\"button\"\n             aria-label=\"fullscreen button\"\n             [attr.aria-valuetext]=\"ariaValue\">\n        </div>",
                    styles: ["\n        vg-fullscreen {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-fullscreen .icon {\n            pointer-events: none;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgFullscreen.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: vg_api_1.VgAPI },
        { type: vg_fullscreen_api_1.VgFullscreenAPI }
    ]; };
    VgFullscreen.propDecorators = {
        onClick: [{ type: core_1.HostListener, args: ['click',] }],
        onKeyDown: [{ type: core_1.HostListener, args: ['keydown', ['$event'],] }]
    };
    return VgFullscreen;
}());
exports.VgFullscreen = VgFullscreen;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctZnVsbHNjcmVlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLWZ1bGxzY3JlZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEc7QUFDMUcscURBQW1EO0FBQ25ELDJFQUF3RTtBQUl4RTtJQTRDSSxzQkFBWSxHQUFlLEVBQVMsR0FBVSxFQUFTLEtBQXNCO1FBQXpDLFFBQUcsR0FBSCxHQUFHLENBQU87UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQU43RSxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUU5QixrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFFbkMsY0FBUyxHQUFHLGFBQWEsQ0FBQztRQUd0QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekcsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLENBQUM7UUFDN0YsQ0FBQztJQUNMLENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELHlDQUFrQixHQUFsQixVQUFtQixPQUFnQjtRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUM1RCxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztJQUNoQyxDQUFDO0lBR0QsOEJBQU8sR0FEUDtRQUVJLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFHRCxnQ0FBUyxHQURULFVBQ1UsS0FBb0I7UUFDMUIsb0NBQW9DO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDakMsQ0FBQztJQUNMLENBQUM7SUFFRCw0Q0FBcUIsR0FBckI7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTFCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLFlBQVksY0FBSyxDQUFDLENBQUMsQ0FBQztZQUMvQixPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25CLENBQUM7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBN0ZKLGdCQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsc1VBUUM7b0JBQ1gsTUFBTSxFQUFFLENBQUUsNmlCQW9CVCxDQUFFO2lCQUNOOzs7O2dCQXZDbUIsaUJBQVU7Z0JBQ3JCLGNBQUs7Z0JBQ0wsbUNBQWU7OzswQkF1RW5CLG1CQUFZLFNBQUMsT0FBTzs0QkFLcEIsbUJBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBc0J2QyxtQkFBQztDQUFBLEFBOUZELElBOEZDO0FBNURZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBWZ0Z1bGxzY3JlZW5BUEkgfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzL3ZnLWZ1bGxzY3JlZW4tYXBpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctZnVsbHNjcmVlbicsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiXG4gICAgICAgICAgICAgW2NsYXNzLnZnLWljb24tZnVsbHNjcmVlbl09XCIhaXNGdWxsc2NyZWVuXCJcbiAgICAgICAgICAgICBbY2xhc3MudmctaWNvbi1mdWxsc2NyZWVuX2V4aXRdPVwiaXNGdWxsc2NyZWVuXCJcbiAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJmdWxsc2NyZWVuIGJ1dHRvblwiXG4gICAgICAgICAgICAgW2F0dHIuYXJpYS12YWx1ZXRleHRdPVwiYXJpYVZhbHVlXCI+XG4gICAgICAgIDwvZGl2PmAsXG4gICAgc3R5bGVzOiBbIGBcbiAgICAgICAgdmctZnVsbHNjcmVlbiB7XG4gICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLWZ1bGxzY3JlZW4gLmljb24ge1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIH1cbiAgICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdGdWxsc2NyZWVuIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIGVsZW06IEhUTUxFbGVtZW50O1xuICAgIHZnRm9yOiBzdHJpbmc7XG4gICAgdGFyZ2V0OiBPYmplY3Q7XG4gICAgaXNGdWxsc2NyZWVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgYXJpYVZhbHVlID0gJ25vcm1hbCBtb2RlJztcblxuICAgIGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZiwgcHVibGljIEFQSTogVmdBUEksIHB1YmxpYyBmc0FQSTogVmdGdWxsc2NyZWVuQVBJKSB7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmZzQVBJLm9uQ2hhbmdlRnVsbHNjcmVlbi5zdWJzY3JpYmUodGhpcy5vbkNoYW5nZUZ1bGxzY3JlZW4uYmluZCh0aGlzKSkpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5BUEkuaXNQbGF5ZXJSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5vblBsYXllclJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLkFQSS5wbGF5ZXJSZWFkeUV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUGxheWVyUmVhZHkoKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VGdWxsc2NyZWVuKGZzU3RhdGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5hcmlhVmFsdWUgPSBmc1N0YXRlID8gJ2Z1bGxzY3JlbiBtb2RlJyA6ICdub3JtYWwgbW9kZSc7XG4gICAgICAgIHRoaXMuaXNGdWxsc2NyZWVuID0gZnNTdGF0ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VGdWxsc2NyZWVuU3RhdGUoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgLy8gT24gcHJlc3MgRW50ZXIgKDEzKSBvciBTcGFjZSAoMzIpXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRnVsbHNjcmVlblN0YXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VGdWxsc2NyZWVuU3RhdGUoKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy50YXJnZXQ7XG5cbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0IGluc3RhbmNlb2YgVmdBUEkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mc0FQSS50b2dnbGVGdWxsc2NyZWVuKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-mute/vg-mute.js":
/*!******************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-mute/vg-mute.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var VgMute = /** @class */ (function () {
    function VgMute(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.ariaValue = 'unmuted';
        this.elem = ref.nativeElement;
    }
    VgMute.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgMute.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
        this.currentVolume = this.target.volume;
    };
    VgMute.prototype.onClick = function () {
        this.changeMuteState();
    };
    VgMute.prototype.onKeyDown = function (event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.changeMuteState();
        }
    };
    VgMute.prototype.changeMuteState = function () {
        var volume = this.getVolume();
        if (volume === 0) {
            if (this.target.volume === 0 && this.currentVolume === 0) {
                this.currentVolume = 1;
            }
            this.target.volume = this.currentVolume;
        }
        else {
            this.currentVolume = volume;
            this.target.volume = 0;
        }
    };
    VgMute.prototype.getVolume = function () {
        var volume = this.target ? this.target.volume : 0;
        this.ariaValue = volume ? 'unmuted' : 'muted';
        return volume;
    };
    VgMute.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgMute.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-mute',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div class=\"icon\"\n             [class.vg-icon-volume_up]=\"getVolume() >= 0.75\"\n             [class.vg-icon-volume_down]=\"getVolume() >= 0.25 && getVolume() < 0.75\"\n             [class.vg-icon-volume_mute]=\"getVolume() > 0 && getVolume() < 0.25\"\n             [class.vg-icon-volume_off]=\"getVolume() === 0\"\n             tabindex=\"0\"\n             role=\"button\"\n             aria-label=\"mute button\"\n             [attr.aria-valuetext]=\"ariaValue\">\n        </div>",
                    styles: ["\n        vg-mute {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-mute .icon {\n            pointer-events: none;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgMute.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: vg_api_1.VgAPI }
    ]; };
    VgMute.propDecorators = {
        vgFor: [{ type: core_1.Input }],
        onClick: [{ type: core_1.HostListener, args: ['click',] }],
        onKeyDown: [{ type: core_1.HostListener, args: ['keydown', ['$event'],] }]
    };
    return VgMute;
}());
exports.VgMute = VgMute;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctbXV0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLW11dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUg7QUFDakgscURBQW1EO0FBSW5EO0lBK0NJLGdCQUFZLEdBQWUsRUFBUyxHQUFVO1FBQVYsUUFBRyxHQUFILEdBQUcsQ0FBTztRQUo5QyxrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFFbkMsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUdsQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDbEMsQ0FBQztJQUVELHlCQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLENBQUM7UUFDN0YsQ0FBQztJQUNMLENBQUM7SUFFRCw4QkFBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM1QyxDQUFDO0lBR0Qsd0JBQU8sR0FEUDtRQUVJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBR0QsMEJBQVMsR0FEVCxVQUNVLEtBQW9CO1FBQzFCLG9DQUFvQztRQUNwQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMzQixDQUFDO0lBQ0wsQ0FBQztJQUVELGdDQUFlLEdBQWY7UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFOUIsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztZQUMzQixDQUFDO1lBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM1QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDM0IsQ0FBQztJQUNMLENBQUM7SUFFRCwwQkFBUyxHQUFUO1FBQ0ksSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsNEJBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O2dCQXZHSixnQkFBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxTQUFTO29CQUNuQixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLGlmQVVDO29CQUNYLE1BQU0sRUFBRSxDQUFFLGlpQkFvQlQsQ0FBRTtpQkFDTjs7OztnQkF4QzBCLGlCQUFVO2dCQUM1QixjQUFLOzs7d0JBeUNULFlBQUs7MEJBNEJMLG1CQUFZLFNBQUMsT0FBTzs0QkFLcEIsbUJBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBa0N2QyxhQUFDO0NBQUEsQUF4R0QsSUF3R0M7QUFwRVksd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLW11dGUnLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImljb25cIlxuICAgICAgICAgICAgIFtjbGFzcy52Zy1pY29uLXZvbHVtZV91cF09XCJnZXRWb2x1bWUoKSA+PSAwLjc1XCJcbiAgICAgICAgICAgICBbY2xhc3MudmctaWNvbi12b2x1bWVfZG93bl09XCJnZXRWb2x1bWUoKSA+PSAwLjI1ICYmIGdldFZvbHVtZSgpIDwgMC43NVwiXG4gICAgICAgICAgICAgW2NsYXNzLnZnLWljb24tdm9sdW1lX211dGVdPVwiZ2V0Vm9sdW1lKCkgPiAwICYmIGdldFZvbHVtZSgpIDwgMC4yNVwiXG4gICAgICAgICAgICAgW2NsYXNzLnZnLWljb24tdm9sdW1lX29mZl09XCJnZXRWb2x1bWUoKSA9PT0gMFwiXG4gICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibXV0ZSBidXR0b25cIlxuICAgICAgICAgICAgIFthdHRyLmFyaWEtdmFsdWV0ZXh0XT1cImFyaWFWYWx1ZVwiPlxuICAgICAgICA8L2Rpdj5gLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLW11dGUge1xuICAgICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1tdXRlIC5pY29uIHtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB9XG4gICAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIFZnTXV0ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSB2Z0Zvcjogc3RyaW5nO1xuICAgIGVsZW06IEhUTUxFbGVtZW50O1xuICAgIHRhcmdldDogYW55O1xuXG4gICAgY3VycmVudFZvbHVtZTogbnVtYmVyO1xuXG4gICAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGFyaWFWYWx1ZSA9ICd1bm11dGVkJztcblxuICAgIGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZiwgcHVibGljIEFQSTogVmdBUEkpIHtcbiAgICAgICAgdGhpcy5lbGVtID0gcmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLkFQSS5pc1BsYXllclJlYWR5KSB7XG4gICAgICAgICAgICB0aGlzLm9uUGxheWVyUmVhZHkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuQVBJLnBsYXllclJlYWR5RXZlbnQuc3Vic2NyaWJlKCgpID0+IHRoaXMub25QbGF5ZXJSZWFkeSgpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBsYXllclJlYWR5KCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMuQVBJLmdldE1lZGlhQnlJZCh0aGlzLnZnRm9yKTtcbiAgICAgICAgdGhpcy5jdXJyZW50Vm9sdW1lID0gdGhpcy50YXJnZXQudm9sdW1lO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgICBvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLmNoYW5nZU11dGVTdGF0ZSgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICAgIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICAvLyBPbiBwcmVzcyBFbnRlciAoMTMpIG9yIFNwYWNlICgzMilcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VNdXRlU3RhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZU11dGVTdGF0ZSgpIHtcbiAgICAgICAgbGV0IHZvbHVtZSA9IHRoaXMuZ2V0Vm9sdW1lKCk7XG5cbiAgICAgICAgaWYgKHZvbHVtZSA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0LnZvbHVtZSA9PT0gMCAmJiB0aGlzLmN1cnJlbnRWb2x1bWUgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRWb2x1bWUgPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRhcmdldC52b2x1bWUgPSB0aGlzLmN1cnJlbnRWb2x1bWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWb2x1bWUgPSB2b2x1bWU7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC52b2x1bWUgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Vm9sdW1lKCkge1xuICAgICAgICBjb25zdCB2b2x1bWUgPSB0aGlzLnRhcmdldCA/IHRoaXMudGFyZ2V0LnZvbHVtZSA6IDA7XG4gICAgICAgIHRoaXMuYXJpYVZhbHVlID0gdm9sdW1lID8gJ3VubXV0ZWQnIDogJ211dGVkJztcbiAgICAgICAgcmV0dXJuIHZvbHVtZTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-play-pause/vg-play-pause.js":
/*!******************************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-play-pause/vg-play-pause.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var vg_states_1 = __webpack_require__(/*! ../../core/states/vg-states */ "./node_modules/videogular2/src/core/states/vg-states.js");
var VgPlayPause = /** @class */ (function () {
    function VgPlayPause(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.ariaValue = vg_states_1.VgStates.VG_PAUSED;
        this.elem = ref.nativeElement;
    }
    VgPlayPause.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgPlayPause.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgPlayPause.prototype.onClick = function () {
        this.playPause();
    };
    VgPlayPause.prototype.onKeyDown = function (event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.playPause();
        }
    };
    VgPlayPause.prototype.playPause = function () {
        var state = this.getState();
        switch (state) {
            case vg_states_1.VgStates.VG_PLAYING:
                this.target.pause();
                break;
            case vg_states_1.VgStates.VG_PAUSED:
            case vg_states_1.VgStates.VG_ENDED:
                this.target.play();
                break;
        }
    };
    VgPlayPause.prototype.getState = function () {
        this.ariaValue = this.target ? this.target.state : vg_states_1.VgStates.VG_PAUSED;
        return this.ariaValue;
    };
    VgPlayPause.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgPlayPause.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-play-pause',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div class=\"icon\"\n             [class.vg-icon-pause]=\"getState() === 'playing'\"\n             [class.vg-icon-play_arrow]=\"getState() === 'paused' || getState() === 'ended'\"\n             tabindex=\"0\"\n             role=\"button\"\n             [attr.aria-label]=\"getState() === 'paused'?'play':'pause'\"\n             [attr.aria-valuetext]=\"ariaValue\">\n        </div>",
                    styles: ["\n        vg-play-pause {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-play-pause .icon {\n            pointer-events: none;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgPlayPause.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: vg_api_1.VgAPI }
    ]; };
    VgPlayPause.propDecorators = {
        vgFor: [{ type: core_1.Input }],
        onClick: [{ type: core_1.HostListener, args: ['click',] }],
        onKeyDown: [{ type: core_1.HostListener, args: ['keydown', ['$event'],] }]
    };
    return VgPlayPause;
}());
exports.VgPlayPause = VgPlayPause;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctcGxheS1wYXVzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLXBsYXktcGF1c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUg7QUFDakgscURBQW1EO0FBQ25ELHlEQUF1RDtBQUd2RDtJQTRDSSxxQkFBWSxHQUFlLEVBQVMsR0FBVTtRQUFWLFFBQUcsR0FBSCxHQUFHLENBQU87UUFKOUMsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBRW5DLGNBQVMsR0FBRyxvQkFBUSxDQUFDLFNBQVMsQ0FBQztRQUczQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDbEMsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLENBQUM7UUFDN0YsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUdELDZCQUFPLEdBRFA7UUFFSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUdELCtCQUFTLEdBRFQsVUFDVSxLQUFvQjtRQUMxQixvQ0FBb0M7UUFDcEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9DLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQztJQUNMLENBQUM7SUFFRCwrQkFBUyxHQUFUO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTVCLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDWixLQUFLLG9CQUFRLENBQUMsVUFBVTtnQkFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDcEIsS0FBSyxDQUFDO1lBRVYsS0FBSyxvQkFBUSxDQUFDLFNBQVMsQ0FBQztZQUN4QixLQUFLLG9CQUFRLENBQUMsUUFBUTtnQkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkIsS0FBSyxDQUFDO1FBQ2QsQ0FBQztJQUNMLENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsb0JBQVEsQ0FBQyxTQUFTLENBQUM7UUFDdEUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVELGlDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUNyRCxDQUFDOztnQkFqR0osZ0JBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSx3WUFRQztvQkFDWCxNQUFNLEVBQUUsQ0FBRSw2aUJBb0JULENBQUU7aUJBQ047Ozs7Z0JBdENtQixpQkFBVTtnQkFDckIsY0FBSzs7O3dCQXVDVCxZQUFLOzBCQTBCTCxtQkFBWSxTQUFDLE9BQU87NEJBS3BCLG1CQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQWdDdkMsa0JBQUM7Q0FBQSxBQWxHRCxJQWtHQztBQWhFWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBPbkluaXQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7IFZnU3RhdGVzIH0gZnJvbSAnLi4vLi4vY29yZS9zdGF0ZXMvdmctc3RhdGVzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLXBsYXktcGF1c2UnLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImljb25cIlxuICAgICAgICAgICAgIFtjbGFzcy52Zy1pY29uLXBhdXNlXT1cImdldFN0YXRlKCkgPT09ICdwbGF5aW5nJ1wiXG4gICAgICAgICAgICAgW2NsYXNzLnZnLWljb24tcGxheV9hcnJvd109XCJnZXRTdGF0ZSgpID09PSAncGF1c2VkJyB8fCBnZXRTdGF0ZSgpID09PSAnZW5kZWQnXCJcbiAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiZ2V0U3RhdGUoKSA9PT0gJ3BhdXNlZCc/J3BsYXknOidwYXVzZSdcIlxuICAgICAgICAgICAgIFthdHRyLmFyaWEtdmFsdWV0ZXh0XT1cImFyaWFWYWx1ZVwiPlxuICAgICAgICA8L2Rpdj5gLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLXBsYXktcGF1c2Uge1xuICAgICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1wbGF5LXBhdXNlIC5pY29uIHtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB9XG4gICAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIFZnUGxheVBhdXNlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIHZnRm9yOiBzdHJpbmc7XG5cbiAgICBlbGVtOiBIVE1MRWxlbWVudDtcbiAgICB0YXJnZXQ6IGFueTtcblxuICAgIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBhcmlhVmFsdWUgPSBWZ1N0YXRlcy5WR19QQVVTRUQ7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6IFZnQVBJKSB7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5BUEkuaXNQbGF5ZXJSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5vblBsYXllclJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLkFQSS5wbGF5ZXJSZWFkeUV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUGxheWVyUmVhZHkoKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMucGxheVBhdXNlKCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gICAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIC8vIE9uIHByZXNzIEVudGVyICgxMykgb3IgU3BhY2UgKDMyKVxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnBsYXlQYXVzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxheVBhdXNlKCkge1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSBWZ1N0YXRlcy5WR19QTEFZSU5HOlxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgVmdTdGF0ZXMuVkdfUEFVU0VEOlxuICAgICAgICAgICAgY2FzZSBWZ1N0YXRlcy5WR19FTkRFRDpcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5hcmlhVmFsdWUgPSB0aGlzLnRhcmdldCA/IHRoaXMudGFyZ2V0LnN0YXRlIDogVmdTdGF0ZXMuVkdfUEFVU0VEO1xuICAgICAgICByZXR1cm4gdGhpcy5hcmlhVmFsdWU7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-playback-button/vg-playback-button.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-playback-button/vg-playback-button.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var VgPlaybackButton = /** @class */ (function () {
    function VgPlaybackButton(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.ariaValue = 1;
        this.elem = ref.nativeElement;
        this.playbackValues = ['0.5', '1.0', '1.5', '2.0'];
        this.playbackIndex = 1;
    }
    VgPlaybackButton.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgPlaybackButton.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgPlaybackButton.prototype.onClick = function () {
        this.updatePlaybackSpeed();
    };
    VgPlaybackButton.prototype.onKeyDown = function (event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.updatePlaybackSpeed();
        }
    };
    VgPlaybackButton.prototype.updatePlaybackSpeed = function () {
        this.playbackIndex = ++this.playbackIndex % this.playbackValues.length;
        if (this.target instanceof vg_api_1.VgAPI) {
            this.target.playbackRate = (this.playbackValues[this.playbackIndex]);
        }
        else {
            this.target.playbackRate[this.vgFor] = (this.playbackValues[this.playbackIndex]);
        }
    };
    VgPlaybackButton.prototype.getPlaybackRate = function () {
        this.ariaValue = this.target ? this.target.playbackRate : 1.0;
        return this.ariaValue;
    };
    VgPlaybackButton.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgPlaybackButton.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-playback-button',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n    <span class=\"button\"\n          tabindex=\"0\"\n          role=\"button\"\n          aria-label=\"playback speed button\"\n          [attr.aria-valuetext]=\"ariaValue\">\n        {{getPlaybackRate()}}x\n    </span>",
                    styles: ["\n        vg-playback-button {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        }\n\n        vg-playback-button .button {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 50px;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgPlaybackButton.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: vg_api_1.VgAPI }
    ]; };
    VgPlaybackButton.propDecorators = {
        vgFor: [{ type: core_1.Input }],
        playbackValues: [{ type: core_1.Input }],
        onClick: [{ type: core_1.HostListener, args: ['click',] }],
        onKeyDown: [{ type: core_1.HostListener, args: ['keydown', ['$event'],] }]
    };
    return VgPlaybackButton;
}());
exports.VgPlaybackButton = VgPlaybackButton;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctcGxheWJhY2stYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctcGxheWJhY2stYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlIO0FBQ2pILHFEQUFtRDtBQUduRDtJQWlESSwwQkFBWSxHQUFlLEVBQVMsR0FBVTtRQUFWLFFBQUcsR0FBSCxHQUFHLENBQU87UUFKOUMsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBRW5DLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFHVixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQzdGLENBQUM7SUFDTCxDQUFDO0lBRUQsd0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFHRCxrQ0FBTyxHQURQO1FBRUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUdELG9DQUFTLEdBRFQsVUFDVSxLQUFvQjtRQUMxQixvQ0FBb0M7UUFDcEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9DLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMvQixDQUFDO0lBQ0wsQ0FBQztJQUVELDhDQUFtQixHQUFuQjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBRXZFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLFlBQVksY0FBSyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBRSxDQUFDLENBQUM7UUFDM0UsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBRSxJQUFJLENBQUMsYUFBYSxDQUFFLENBQUMsQ0FBQztRQUN6RixDQUFDO0lBQ0wsQ0FBQztJQUVELDBDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDOUQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUNyRCxDQUFDOztnQkFwR0osZ0JBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLGdPQU9GO29CQUNSLE1BQU0sRUFBRSxDQUFFLHFyQkF1QlQsQ0FBRTtpQkFDTjs7OztnQkF2QzBCLGlCQUFVO2dCQUM1QixjQUFLOzs7d0JBd0NULFlBQUs7aUNBS0wsWUFBSzswQkEwQkwsbUJBQVksU0FBQyxPQUFPOzRCQUtwQixtQkFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUE0QnZDLHVCQUFDO0NBQUEsQUFyR0QsSUFxR0M7QUFqRVksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZnQVBJIH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy92Zy1hcGknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctcGxheWJhY2stYnV0dG9uJyxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gY2xhc3M9XCJidXR0b25cIlxuICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cInBsYXliYWNrIHNwZWVkIGJ1dHRvblwiXG4gICAgICAgICAgW2F0dHIuYXJpYS12YWx1ZXRleHRdPVwiYXJpYVZhbHVlXCI+XG4gICAgICAgIHt7Z2V0UGxheWJhY2tSYXRlKCl9fXhcbiAgICA8L3NwYW4+YCxcbiAgICBzdHlsZXM6IFsgYFxuICAgICAgICB2Zy1wbGF5YmFjay1idXR0b24ge1xuICAgICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1wbGF5YmFjay1idXR0b24gLmJ1dHRvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIH1cbiAgICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdQbGF5YmFja0J1dHRvbiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSB2Z0Zvcjogc3RyaW5nO1xuXG4gICAgZWxlbTogSFRNTEVsZW1lbnQ7XG4gICAgdGFyZ2V0OiBhbnk7XG5cbiAgICBASW5wdXQoKSBwbGF5YmFja1ZhbHVlczogQXJyYXk8c3RyaW5nPjtcbiAgICBwbGF5YmFja0luZGV4OiBudW1iZXI7XG5cbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgYXJpYVZhbHVlID0gMTtcblxuICAgIGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZiwgcHVibGljIEFQSTogVmdBUEkpIHtcbiAgICAgICAgdGhpcy5lbGVtID0gcmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMucGxheWJhY2tWYWx1ZXMgPSBbICcwLjUnLCAnMS4wJywgJzEuNScsICcyLjAnIF07XG4gICAgICAgIHRoaXMucGxheWJhY2tJbmRleCA9IDE7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLkFQSS5pc1BsYXllclJlYWR5KSB7XG4gICAgICAgICAgICB0aGlzLm9uUGxheWVyUmVhZHkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuQVBJLnBsYXllclJlYWR5RXZlbnQuc3Vic2NyaWJlKCgpID0+IHRoaXMub25QbGF5ZXJSZWFkeSgpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBsYXllclJlYWR5KCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMuQVBJLmdldE1lZGlhQnlJZCh0aGlzLnZnRm9yKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy51cGRhdGVQbGF5YmFja1NwZWVkKCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gICAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIC8vIE9uIHByZXNzIEVudGVyICgxMykgb3IgU3BhY2UgKDMyKVxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBsYXliYWNrU3BlZWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVBsYXliYWNrU3BlZWQoKSB7XG4gICAgICAgIHRoaXMucGxheWJhY2tJbmRleCA9ICsrdGhpcy5wbGF5YmFja0luZGV4ICUgdGhpcy5wbGF5YmFja1ZhbHVlcy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0IGluc3RhbmNlb2YgVmdBUEkpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnBsYXliYWNrUmF0ZSA9ICh0aGlzLnBsYXliYWNrVmFsdWVzWyB0aGlzLnBsYXliYWNrSW5kZXggXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5wbGF5YmFja1JhdGVbIHRoaXMudmdGb3IgXSA9ICh0aGlzLnBsYXliYWNrVmFsdWVzWyB0aGlzLnBsYXliYWNrSW5kZXggXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQbGF5YmFja1JhdGUoKSB7XG4gICAgICAgIHRoaXMuYXJpYVZhbHVlID0gdGhpcy50YXJnZXQgPyB0aGlzLnRhcmdldC5wbGF5YmFja1JhdGUgOiAxLjA7XG4gICAgICAgIHJldHVybiB0aGlzLmFyaWFWYWx1ZTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-quality-selector/vg-quality-selector.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-quality-selector/vg-quality-selector.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var VgQualitySelector = /** @class */ (function () {
    function VgQualitySelector(ref, API) {
        this.API = API;
        this.onBitrateChange = new core_1.EventEmitter();
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgQualitySelector.prototype.ngOnInit = function () {
    };
    VgQualitySelector.prototype.ngOnChanges = function (changes) {
        if (changes['bitrates'].currentValue && changes['bitrates'].currentValue.length) {
            this.bitrates.forEach(function (item) { return item.label = item.label || Math.round(item.bitrate / 1000).toString(); });
        }
    };
    VgQualitySelector.prototype.selectBitrate = function (index) {
        this.bitrateSelected = this.bitrates[index];
        this.onBitrateChange.emit(this.bitrates[index]);
    };
    VgQualitySelector.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgQualitySelector.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-quality-selector',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div class=\"container\">\n            <div class=\"quality-selected\"\n                 [class.vg-icon-hd]=\"!bitrateSelected\">\n                {{ bitrateSelected?.label }}\n            </div>\n            \n            <select class=\"quality-selector\" \n                    (change)=\"selectBitrate($event.target.value)\"\n                    tabindex=\"0\"\n                    aria-label=\"quality selector\"\n                    [attr.aria-valuetext]=\"ariaValue\">\n                <option \n                    *ngFor=\"let bitrate of bitrates\"\n                    [value]=\"bitrate.qualityIndex\"\n                    [selected]=\"bitrate.qualityIndex === bitrateSelected?.qualityIndex\">\n                    {{ bitrate.label }}\n                </option>\n            </select>\n        </div>\n    ",
                    styles: ["\n        vg-quality-selector {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            width: 50px;\n            height: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n        vg-quality-selector .container {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n            \n            padding: 0;\n            margin: 5px;\n        }\n        vg-quality-selector select.quality-selector {\n            width: 50px;\n            padding: 5px 8px;\n            border: none;\n            background: none;\n            -webkit-appearance: none;\n            -moz-appearance: none;\n            appearance: none;\n            color: transparent;\n            font-size: 16px;\n        }\n        vg-quality-selector select.quality-selector::-ms-expand {\n            display: none;\n        }\n        vg-quality-selector select.quality-selector option {\n            color: #000;\n        }\n        vg-quality-selector .quality-selected {\n            position: absolute;\n            width: 100%;\n            height: 50px;\n            top: -6px;\n            text-align: center;\n            text-transform: uppercase;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n            padding-top: 2px;\n            pointer-events: none;\n        }\n        vg-quality-selector .vg-icon-closed_caption:before {\n            width: 100%;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgQualitySelector.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: vg_api_1.VgAPI }
    ]; };
    VgQualitySelector.propDecorators = {
        bitrates: [{ type: core_1.Input }],
        onBitrateChange: [{ type: core_1.Output }]
    };
    return VgQualitySelector;
}());
exports.VgQualitySelector = VgQualitySelector;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctcXVhbGl0eS1zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLXF1YWxpdHktc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FTdUI7QUFDdkIscURBQW1EO0FBSW5EO0lBK0ZJLDJCQUFZLEdBQWUsRUFBUyxHQUFVO1FBQVYsUUFBRyxHQUFILEdBQUcsQ0FBTztRQVhwQyxvQkFBZSxHQUFnQyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQU81RSxrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFLL0IsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxvQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUM5QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQXJFLENBQXFFLENBQUMsQ0FBQTtRQUN4RyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFhLEdBQWIsVUFBYyxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUNyRCxDQUFDOztnQkFuSEosZ0JBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLDJ6QkFvQlQ7b0JBQ0QsTUFBTSxFQUFFLENBQUUsd3JEQXVEVCxDQUFFO2lCQUNOOzs7O2dCQTVGRyxpQkFBVTtnQkFRTCxjQUFLOzs7MkJBc0ZULFlBQUs7a0NBRUwsYUFBTTs7SUFnQ1gsd0JBQUM7Q0FBQSxBQXBIRCxJQW9IQztBQW5DWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIE9uSW5pdCxcbiAgICBJbnB1dCxcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgICBPbkRlc3Ryb3ksXG4gICAgU2ltcGxlQ2hhbmdlcyxcbiAgICBPbkNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEJpdHJhdGVPcHRpb24gfSBmcm9tICcuLi8uLi9jb3JlL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLXF1YWxpdHktc2VsZWN0b3InLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInF1YWxpdHktc2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICBbY2xhc3MudmctaWNvbi1oZF09XCIhYml0cmF0ZVNlbGVjdGVkXCI+XG4gICAgICAgICAgICAgICAge3sgYml0cmF0ZVNlbGVjdGVkPy5sYWJlbCB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJxdWFsaXR5LXNlbGVjdG9yXCIgXG4gICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwic2VsZWN0Qml0cmF0ZSgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJxdWFsaXR5IHNlbGVjdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS12YWx1ZXRleHRdPVwiYXJpYVZhbHVlXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGJpdHJhdGUgb2YgYml0cmF0ZXNcIlxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwiYml0cmF0ZS5xdWFsaXR5SW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICBbc2VsZWN0ZWRdPVwiYml0cmF0ZS5xdWFsaXR5SW5kZXggPT09IGJpdHJhdGVTZWxlY3RlZD8ucXVhbGl0eUluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGJpdHJhdGUubGFiZWwgfX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLXF1YWxpdHktc2VsZWN0b3Ige1xuICAgICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgdmctcXVhbGl0eS1zZWxlY3RvciAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgdmctcXVhbGl0eS1zZWxlY3RvciBzZWxlY3QucXVhbGl0eS1zZWxlY3RvciB7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICB2Zy1xdWFsaXR5LXNlbGVjdG9yIHNlbGVjdC5xdWFsaXR5LXNlbGVjdG9yOjotbXMtZXhwYW5kIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgdmctcXVhbGl0eS1zZWxlY3RvciBzZWxlY3QucXVhbGl0eS1zZWxlY3RvciBvcHRpb24ge1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICAgICAgdmctcXVhbGl0eS1zZWxlY3RvciAucXVhbGl0eS1zZWxlY3RlZCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHRvcDogLTZweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgdmctcXVhbGl0eS1zZWxlY3RvciAudmctaWNvbi1jbG9zZWRfY2FwdGlvbjpiZWZvcmUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdRdWFsaXR5U2VsZWN0b3IgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSBiaXRyYXRlczogQml0cmF0ZU9wdGlvbltdO1xuXG4gICAgQE91dHB1dCgpIG9uQml0cmF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPEJpdHJhdGVPcHRpb24+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgYml0cmF0ZVNlbGVjdGVkOiBCaXRyYXRlT3B0aW9uO1xuXG4gICAgZWxlbTogSFRNTEVsZW1lbnQ7XG4gICAgdGFyZ2V0OiBhbnk7XG5cbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgYXJpYVZhbHVlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6IFZnQVBJKSB7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGNoYW5nZXNbJ2JpdHJhdGVzJ10uY3VycmVudFZhbHVlICYmIGNoYW5nZXNbJ2JpdHJhdGVzJ10uY3VycmVudFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5iaXRyYXRlcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5sYWJlbCA9IGl0ZW0ubGFiZWwgfHwgTWF0aC5yb3VuZChpdGVtLmJpdHJhdGUgLyAxMDAwKS50b1N0cmluZygpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0Qml0cmF0ZShpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYml0cmF0ZVNlbGVjdGVkID0gdGhpcy5iaXRyYXRlc1tpbmRleF07XG4gICAgICAgIHRoaXMub25CaXRyYXRlQ2hhbmdlLmVtaXQodGhpcy5iaXRyYXRlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-scrub-bar/vg-scrub-bar-buffering-time/vg-scrub-bar-buffering-time.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-scrub-bar/vg-scrub-bar-buffering-time/vg-scrub-bar-buffering-time.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var VgScrubBarBufferingTime = /** @class */ (function () {
    function VgScrubBarBufferingTime(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgScrubBarBufferingTime.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgScrubBarBufferingTime.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgScrubBarBufferingTime.prototype.getBufferTime = function () {
        var bufferTime = "0%";
        if (this.target && this.target.buffer && this.target.buffered.length) {
            if (this.target.time.total === 0) {
                bufferTime = '0%';
            }
            else {
                bufferTime = ((this.target.buffer.end / this.target.time.total) * 100) + '%';
            }
        }
        return bufferTime;
    };
    VgScrubBarBufferingTime.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgScrubBarBufferingTime.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-scrub-bar-buffering-time',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<div class=\"background\" [style.width]=\"getBufferTime()\"></div>",
                    styles: ["\n        vg-scrub-bar-buffering-time {\n            display: flex;\n            width: 100%;\n            height: 5px;\n            pointer-events: none;\n            position: absolute;\n        }\n\n        vg-scrub-bar-buffering-time .background {\n            background-color: rgba(255, 255, 255, 0.3);\n        }\n\n        vg-controls vg-scrub-bar-buffering-time {\n            position: absolute;\n            top: calc(50% - 3px);\n        }\n\n        vg-controls vg-scrub-bar-buffering-time .background {\n            -webkit-border-radius: 2px;\n            -moz-border-radius: 2px;\n            border-radius: 2px;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgScrubBarBufferingTime.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: vg_api_1.VgAPI }
    ]; };
    VgScrubBarBufferingTime.propDecorators = {
        vgFor: [{ type: core_1.Input }]
    };
    return VgScrubBarBufferingTime;
}());
exports.VgScrubBarBufferingTime = VgScrubBarBufferingTime;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctc2NydWItYmFyLWJ1ZmZlcmluZy10aW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctc2NydWItYmFyLWJ1ZmZlcmluZy10aW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1HO0FBQ25HLHdEQUFzRDtBQUd0RDtJQXFDSSxpQ0FBWSxHQUFlLEVBQVMsR0FBVTtRQUFWLFFBQUcsR0FBSCxHQUFHLENBQU87UUFGOUMsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBRy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUNsQyxDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUMsQ0FBQztRQUM3RixDQUFDO0lBQ0wsQ0FBQztJQUVELCtDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsK0NBQWEsR0FBYjtRQUNJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQztRQUV0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbkUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdEIsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNGLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNqRixDQUFDO1FBQ0wsQ0FBQztRQUVELE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUNyRCxDQUFDOztnQkF2RUosZ0JBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsNkJBQTZCO29CQUN2QyxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLG9FQUFnRTtvQkFDMUUsTUFBTSxFQUFFLENBQUUsdW9CQXVCVCxDQUFFO2lCQUNOOzs7O2dCQWhDMEIsaUJBQVU7Z0JBQzVCLGNBQUs7Ozt3QkFpQ1QsWUFBSzs7SUEwQ1YsOEJBQUM7Q0FBQSxBQXhFRCxJQXdFQztBQTNDWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZnQVBJIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy92Zy1hcGknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctc2NydWItYmFyLWJ1ZmZlcmluZy10aW1lJyxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImJhY2tncm91bmRcIiBbc3R5bGUud2lkdGhdPVwiZ2V0QnVmZmVyVGltZSgpXCI+PC9kaXY+YCxcbiAgICBzdHlsZXM6IFsgYFxuICAgICAgICB2Zy1zY3J1Yi1iYXItYnVmZmVyaW5nLXRpbWUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLXNjcnViLWJhci1idWZmZXJpbmctdGltZSAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1jb250cm9scyB2Zy1zY3J1Yi1iYXItYnVmZmVyaW5nLXRpbWUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDNweCk7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1jb250cm9scyB2Zy1zY3J1Yi1iYXItYnVmZmVyaW5nLXRpbWUgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgfVxuICAgIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBWZ1NjcnViQmFyQnVmZmVyaW5nVGltZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSB2Z0Zvcjogc3RyaW5nO1xuXG4gICAgZWxlbTogSFRNTEVsZW1lbnQ7XG4gICAgdGFyZ2V0OiBhbnk7XG5cbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgQVBJOiBWZ0FQSSkge1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuQVBJLmlzUGxheWVyUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMub25QbGF5ZXJSZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5BUEkucGxheWVyUmVhZHlFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vblBsYXllclJlYWR5KCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5BUEkuZ2V0TWVkaWFCeUlkKHRoaXMudmdGb3IpO1xuICAgIH1cblxuICAgIGdldEJ1ZmZlclRpbWUoKSB7XG4gICAgICAgIGxldCBidWZmZXJUaW1lID0gXCIwJVwiO1xuXG4gICAgICAgIGlmICh0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5idWZmZXIgJiYgdGhpcy50YXJnZXQuYnVmZmVyZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXQudGltZS50b3RhbCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGJ1ZmZlclRpbWUgPSAnMCUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyVGltZSA9ICgodGhpcy50YXJnZXQuYnVmZmVyLmVuZCAvIHRoaXMudGFyZ2V0LnRpbWUudG90YWwpICogMTAwKSArICclJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBidWZmZXJUaW1lO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-scrub-bar/vg-scrub-bar-cue-points/vg-scrub-bar-cue-points.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-scrub-bar/vg-scrub-bar-cue-points/vg-scrub-bar-cue-points.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var VgScrubBarCuePoints = /** @class */ (function () {
    function VgScrubBarCuePoints(ref, API) {
        this.API = API;
        this.onLoadedMetadataCalled = false;
        this.cuePoints = [];
        this.subscriptions = [];
        this.totalCues = 0;
        this.elem = ref.nativeElement;
    }
    VgScrubBarCuePoints.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgScrubBarCuePoints.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
        var onTimeUpdate = this.target.subscriptions.loadedMetadata;
        this.subscriptions.push(onTimeUpdate.subscribe(this.onLoadedMetadata.bind(this)));
        if (this.onLoadedMetadataCalled) {
            this.onLoadedMetadata();
        }
    };
    VgScrubBarCuePoints.prototype.onLoadedMetadata = function () {
        if (this.vgCuePoints) {
            // We need to transform the TextTrackCueList to Array or it doesn't work on IE11/Edge.
            // See: https://github.com/videogular/videogular2/issues/369
            this.cuePoints = [];
            for (var i = 0, l = this.vgCuePoints.length; i < l; i++) {
                var end = (this.vgCuePoints[i].endTime >= 0) ? this.vgCuePoints[i].endTime : this.vgCuePoints[i].startTime + 1;
                var cuePointDuration = (end - this.vgCuePoints[i].startTime) * 1000;
                var position = '0';
                var percentWidth = '0';
                if (typeof cuePointDuration === 'number' && this.target.time.total) {
                    percentWidth = ((cuePointDuration * 100) / this.target.time.total) + "%";
                    position = (this.vgCuePoints[i].startTime * 100 / (Math.round(this.target.time.total / 1000))) + "%";
                }
                this.vgCuePoints[i].$$style = {
                    width: percentWidth,
                    left: position
                };
                this.cuePoints.push(this.vgCuePoints[i]);
            }
        }
    };
    VgScrubBarCuePoints.prototype.updateCuePoints = function () {
        if (!this.target) {
            this.onLoadedMetadataCalled = true;
            return;
        }
        this.onLoadedMetadata();
    };
    VgScrubBarCuePoints.prototype.ngOnChanges = function (changes) {
        if (changes['vgCuePoints'].currentValue) {
            this.updateCuePoints();
        }
    };
    VgScrubBarCuePoints.prototype.ngDoCheck = function () {
        if (this.vgCuePoints) {
            var changes = this.totalCues !== this.vgCuePoints.length;
            if (changes) {
                this.totalCues = this.vgCuePoints.length;
                this.updateCuePoints();
            }
        }
    };
    VgScrubBarCuePoints.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgScrubBarCuePoints.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-scrub-bar-cue-points',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div class=\"cue-point-container\">\n            <span *ngFor=\"let cp of cuePoints\" [style.width]=\"cp.$$style?.width\" [style.left]=\"cp.$$style?.left\"\n                  class=\"cue-point\"></span>\n        </div>\n    ",
                    styles: ["\n        vg-scrub-bar-cue-points {\n            display: flex;\n            width: 100%;\n            height: 5px;\n            pointer-events: none;\n            position: absolute;\n        }\n\n        vg-scrub-bar-cue-points .cue-point-container .cue-point {\n            position: absolute;\n            height: 5px;\n            background-color: rgba(255, 204, 0, 0.7);\n        }\n\n        vg-controls vg-scrub-bar-cue-points {\n            position: absolute;\n            top: calc(50% - 3px);\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgScrubBarCuePoints.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: vg_api_1.VgAPI }
    ]; };
    VgScrubBarCuePoints.propDecorators = {
        vgCuePoints: [{ type: core_1.Input }],
        vgFor: [{ type: core_1.Input }]
    };
    return VgScrubBarCuePoints;
}());
exports.VgScrubBarCuePoints = VgScrubBarCuePoints;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctc2NydWItYmFyLWN1ZS1wb2ludHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1zY3J1Yi1iYXItY3VlLXBvaW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQVN1QjtBQUN2Qix3REFBc0Q7QUFHdEQ7SUEyQ0ksNkJBQVksR0FBZSxFQUFTLEdBQVU7UUFBVixRQUFHLEdBQUgsR0FBRyxDQUFPO1FBUDlDLDJCQUFzQixHQUFZLEtBQUssQ0FBQztRQUN4QyxjQUFTLEdBQWUsRUFBRSxDQUFDO1FBRTNCLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUVuQyxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBR1YsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQzdGLENBQUM7SUFDTCxDQUFDO0lBRUQsMkNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUM1RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUks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R0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBRTNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztnQkFDekMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzNCLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUNyRCxDQUFDOztnQkF6SEosZ0JBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLDRPQUtUO29CQUNELE1BQU0sRUFBRSxDQUFFLDRnQkFtQlQsQ0FBRTtpQkFDTjs7OztnQkF4Q0csaUJBQVU7Z0JBUUwsY0FBSzs7OzhCQWtDVCxZQUFLO3dCQUNMLFlBQUs7O0lBMEZWLDBCQUFDO0NBQUEsQUExSEQsSUEwSEM7QUE1Rlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbnB1dCxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBTaW1wbGVDaGFuZ2UsXG4gICAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLXNjcnViLWJhci1jdWUtcG9pbnRzJyxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjdWUtcG9pbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8c3BhbiAqbmdGb3I9XCJsZXQgY3Agb2YgY3VlUG9pbnRzXCIgW3N0eWxlLndpZHRoXT1cImNwLiQkc3R5bGU/LndpZHRoXCIgW3N0eWxlLmxlZnRdPVwiY3AuJCRzdHlsZT8ubGVmdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImN1ZS1wb2ludFwiPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZXM6IFsgYFxuICAgICAgICB2Zy1zY3J1Yi1iYXItY3VlLXBvaW50cyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctc2NydWItYmFyLWN1ZS1wb2ludHMgLmN1ZS1wb2ludC1jb250YWluZXIgLmN1ZS1wb2ludCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMDQsIDAsIDAuNyk7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1jb250cm9scyB2Zy1zY3J1Yi1iYXItY3VlLXBvaW50cyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gM3B4KTtcbiAgICAgICAgfVxuICAgIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBWZ1NjcnViQmFyQ3VlUG9pbnRzIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgdmdDdWVQb2ludHM6IFRleHRUcmFja0N1ZUxpc3Q7XG4gICAgQElucHV0KCkgdmdGb3I6IHN0cmluZztcblxuICAgIGVsZW06IEhUTUxFbGVtZW50O1xuICAgIHRhcmdldDogYW55O1xuICAgIG9uTG9hZGVkTWV0YWRhdGFDYWxsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjdWVQb2ludHM6IEFycmF5PGFueT4gPSBbXTtcblxuICAgIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICB0b3RhbEN1ZXMgPSAwO1xuXG4gICAgY29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgQVBJOiBWZ0FQSSkge1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuQVBJLmlzUGxheWVyUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMub25QbGF5ZXJSZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5BUEkucGxheWVyUmVhZHlFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vblBsYXllclJlYWR5KCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5BUEkuZ2V0TWVkaWFCeUlkKHRoaXMudmdGb3IpO1xuXG4gICAgICAgIGxldCBvblRpbWVVcGRhdGUgPSB0aGlzLnRhcmdldC5zdWJzY3JpcHRpb25zLmxvYWRlZE1ldGFkYXRhO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChvblRpbWVVcGRhdGUuc3Vic2NyaWJlKHRoaXMub25Mb2FkZWRNZXRhZGF0YS5iaW5kKHRoaXMpKSk7XG5cbiAgICAgICAgaWYgKHRoaXMub25Mb2FkZWRNZXRhZGF0YUNhbGxlZCkge1xuICAgICAgICAgICAgdGhpcy5vbkxvYWRlZE1ldGFkYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWRlZE1ldGFkYXRhKCkge1xuICAgICAgICBpZiAodGhpcy52Z0N1ZVBvaW50cykge1xuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byB0cmFuc2Zvcm0gdGhlIFRleHRUcmFja0N1ZUxpc3QgdG8gQXJyYXkgb3IgaXQgZG9lc24ndCB3b3JrIG9uIElFMTEvRWRnZS5cbiAgICAgICAgICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3ZpZGVvZ3VsYXIvdmlkZW9ndWxhcjIvaXNzdWVzLzM2OVxuICAgICAgICAgICAgdGhpcy5jdWVQb2ludHMgPSBbXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnZnQ3VlUG9pbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBlbmQgPSAodGhpcy52Z0N1ZVBvaW50c1sgaSBdLmVuZFRpbWUgPj0gMCkgPyB0aGlzLnZnQ3VlUG9pbnRzWyBpIF0uZW5kVGltZSA6IHRoaXMudmdDdWVQb2ludHNbIGkgXS5zdGFydFRpbWUgKyAxO1xuICAgICAgICAgICAgICAgIGxldCBjdWVQb2ludER1cmF0aW9uID0gKGVuZCAtIHRoaXMudmdDdWVQb2ludHNbIGkgXS5zdGFydFRpbWUpICogMTAwMDtcbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSAnMCc7XG4gICAgICAgICAgICAgICAgbGV0IHBlcmNlbnRXaWR0aCA9ICcwJztcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY3VlUG9pbnREdXJhdGlvbiA9PT0gJ251bWJlcicgJiYgdGhpcy50YXJnZXQudGltZS50b3RhbCkge1xuICAgICAgICAgICAgICAgICAgICBwZXJjZW50V2lkdGggPSAoKGN1ZVBvaW50RHVyYXRpb24gKiAxMDApIC8gdGhpcy50YXJnZXQudGltZS50b3RhbCkgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSAodGhpcy52Z0N1ZVBvaW50c1sgaSBdLnN0YXJ0VGltZSAqIDEwMCAvIChNYXRoLnJvdW5kKHRoaXMudGFyZ2V0LnRpbWUudG90YWwgLyAxMDAwKSkpICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgKDxhbnk+dGhpcy52Z0N1ZVBvaW50c1sgaSBdKS4kJHN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogcGVyY2VudFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBwb3NpdGlvblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0aGlzLmN1ZVBvaW50cy5wdXNoKHRoaXMudmdDdWVQb2ludHNbIGkgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVDdWVQb2ludHMoKSB7XG4gICAgICAgIGlmICghdGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMub25Mb2FkZWRNZXRhZGF0YUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbkxvYWRlZE1ldGFkYXRhKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcE5hbWU6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG4gICAgICAgIGlmIChjaGFuZ2VzWyAndmdDdWVQb2ludHMnIF0uY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUN1ZVBvaW50cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdEb0NoZWNrKCkge1xuICAgICAgICBpZiAodGhpcy52Z0N1ZVBvaW50cykge1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlcyA9IHRoaXMudG90YWxDdWVzICE9PSB0aGlzLnZnQ3VlUG9pbnRzLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsQ3VlcyA9IHRoaXMudmdDdWVQb2ludHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ3VlUG9pbnRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-scrub-bar/vg-scrub-bar-current-time/vg-scrub-bar-current-time.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-scrub-bar/vg-scrub-bar-current-time/vg-scrub-bar-current-time.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var VgScrubBarCurrentTime = /** @class */ (function () {
    function VgScrubBarCurrentTime(ref, API) {
        this.API = API;
        this.vgSlider = false;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgScrubBarCurrentTime.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgScrubBarCurrentTime.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgScrubBarCurrentTime.prototype.getPercentage = function () {
        return this.target ? ((this.target.time.current * 100) / this.target.time.total) + '%' : '0%';
    };
    VgScrubBarCurrentTime.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgScrubBarCurrentTime.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-scrub-bar-current-time',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<div class=\"background\" [style.width]=\"getPercentage()\"></div><span class=\"slider\" *ngIf=\"vgSlider\"></span>",
                    styles: ["\n        vg-scrub-bar-current-time {\n            display: flex;\n            width: 100%;\n            height: 5px;\n            pointer-events: none;\n            position: absolute;\n        }\n\n        vg-scrub-bar-current-time .background {\n            background-color: white;\n        }\n\n        vg-controls vg-scrub-bar-current-time {\n            position: absolute;\n            top: calc(50% - 3px);\n            -webkit-border-radius: 2px;\n            -moz-border-radius: 2px;\n            border-radius: 2px;\n        }\n\n        vg-controls vg-scrub-bar-current-time .background {\n            border: 1px solid white;\n            -webkit-border-radius: 2px;\n            -moz-border-radius: 2px;\n            border-radius: 2px;\n        }\n        \n        vg-scrub-bar-current-time .slider{\n            background: white;\n            height: 15px;\n            width: 15px;\n            border-radius: 50%;\n            box-shadow: 0px 0px 10px black;\n            margin-top: -5px;\n            margin-left: -10px;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgScrubBarCurrentTime.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: vg_api_1.VgAPI }
    ]; };
    VgScrubBarCurrentTime.propDecorators = {
        vgFor: [{ type: core_1.Input }],
        vgSlider: [{ type: core_1.Input }]
    };
    return VgScrubBarCurrentTime;
}());
exports.VgScrubBarCurrentTime = VgScrubBarCurrentTime;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctc2NydWItYmFyLWN1cnJlbnQtdGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLXNjcnViLWJhci1jdXJyZW50LXRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUc7QUFDbkcsd0RBQXNEO0FBR3REO0lBb0RJLCtCQUFZLEdBQWUsRUFBUyxHQUFVO1FBQVYsUUFBRyxHQUFILEdBQUcsQ0FBTztRQVByQyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBS25DLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUcvQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDbEMsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLENBQUM7UUFDN0YsQ0FBQztJQUNMLENBQUM7SUFFRCw2Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELDZDQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNsRyxDQUFDO0lBRUQsMkNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O2dCQTNFSixnQkFBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUscUhBQTZHO29CQUN2SCxNQUFNLEVBQUUsQ0FBRSxzaUNBcUNULENBQUU7aUJBQ047Ozs7Z0JBOUMwQixpQkFBVTtnQkFDNUIsY0FBSzs7O3dCQStDVCxZQUFLOzJCQUNMLFlBQUs7O0lBK0JWLDRCQUFDO0NBQUEsQUE1RUQsSUE0RUM7QUFqQ1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLXNjcnViLWJhci1jdXJyZW50LXRpbWUnLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZFwiIFtzdHlsZS53aWR0aF09XCJnZXRQZXJjZW50YWdlKClcIj48L2Rpdj48c3BhbiBjbGFzcz1cInNsaWRlclwiICpuZ0lmPVwidmdTbGlkZXJcIj48L3NwYW4+YCxcbiAgICBzdHlsZXM6IFsgYFxuICAgICAgICB2Zy1zY3J1Yi1iYXItY3VycmVudC10aW1lIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1zY3J1Yi1iYXItY3VycmVudC10aW1lIC5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctY29udHJvbHMgdmctc2NydWItYmFyLWN1cnJlbnQtdGltZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gM3B4KTtcbiAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1jb250cm9scyB2Zy1zY3J1Yi1iYXItY3VycmVudC10aW1lIC5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdmctc2NydWItYmFyLWN1cnJlbnQtdGltZSAuc2xpZGVye1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCBibGFjaztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgICAgIH1cbiAgICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdTY3J1YkJhckN1cnJlbnRUaW1lIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIHZnRm9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdmdTbGlkZXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGVsZW06IEhUTUxFbGVtZW50O1xuICAgIHRhcmdldDogYW55O1xuXG4gICAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZiwgcHVibGljIEFQSTogVmdBUEkpIHtcbiAgICAgICAgdGhpcy5lbGVtID0gcmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLkFQSS5pc1BsYXllclJlYWR5KSB7XG4gICAgICAgICAgICB0aGlzLm9uUGxheWVyUmVhZHkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuQVBJLnBsYXllclJlYWR5RXZlbnQuc3Vic2NyaWJlKCgpID0+IHRoaXMub25QbGF5ZXJSZWFkeSgpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBsYXllclJlYWR5KCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMuQVBJLmdldE1lZGlhQnlJZCh0aGlzLnZnRm9yKTtcbiAgICB9XG5cbiAgICBnZXRQZXJjZW50YWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQgPyAoKHRoaXMudGFyZ2V0LnRpbWUuY3VycmVudCAqIDEwMCkgLyB0aGlzLnRhcmdldC50aW1lLnRvdGFsKSArICclJyA6ICcwJSc7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-scrub-bar/vg-scrub-bar.js":
/*!****************************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-scrub-bar/vg-scrub-bar.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var vg_controls_hidden_1 = __webpack_require__(/*! ./../../core/services/vg-controls-hidden */ "./node_modules/videogular2/src/core/services/vg-controls-hidden.js");
var vg_states_1 = __webpack_require__(/*! ../../core/states/vg-states */ "./node_modules/videogular2/src/core/states/vg-states.js");
var VgScrubBar = /** @class */ (function () {
    function VgScrubBar(ref, API, vgControlsHiddenState) {
        var _this = this;
        this.API = API;
        this.hideScrubBar = false;
        this.vgSlider = true;
        this.isSeeking = false;
        this.wasPlaying = false;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
        this.subscriptions.push(vgControlsHiddenState.isHidden.subscribe(function (hide) { return _this.onHideScrubBar(hide); }));
    }
    VgScrubBar.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgScrubBar.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgScrubBar.prototype.seekStart = function () {
        if (this.target.canPlay) {
            this.isSeeking = true;
            if (this.target.state === vg_states_1.VgStates.VG_PLAYING) {
                this.wasPlaying = true;
            }
            this.target.pause();
        }
    };
    VgScrubBar.prototype.seekMove = function (offset) {
        if (this.isSeeking) {
            var percentage = Math.max(Math.min(offset * 100 / this.elem.scrollWidth, 99.9), 0);
            this.target.time.current = percentage * this.target.time.total / 100;
            this.target.seekTime(percentage, true);
        }
    };
    VgScrubBar.prototype.seekEnd = function (offset) {
        this.isSeeking = false;
        if (this.target.canPlay) {
            var percentage = Math.max(Math.min(offset * 100 / this.elem.scrollWidth, 99.9), 0);
            this.target.seekTime(percentage, true);
            if (this.wasPlaying) {
                this.wasPlaying = false;
                this.target.play();
            }
        }
    };
    VgScrubBar.prototype.touchEnd = function () {
        this.isSeeking = false;
        if (this.wasPlaying) {
            this.wasPlaying = false;
            this.target.play();
        }
    };
    VgScrubBar.prototype.getTouchOffset = function (event) {
        var offsetLeft = 0;
        var element = event.target;
        while (element) {
            offsetLeft += element.offsetLeft;
            element = element.offsetParent;
        }
        return event.touches[0].pageX - offsetLeft;
    };
    VgScrubBar.prototype.onMouseDownScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive) {
                if (!this.vgSlider) {
                    this.seekEnd($event.offsetX);
                }
                else {
                    this.seekStart();
                }
            }
        }
    };
    VgScrubBar.prototype.onMouseMoveScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.seekMove($event.offsetX);
            }
        }
    };
    VgScrubBar.prototype.onMouseUpScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.seekEnd($event.offsetX);
            }
        }
    };
    VgScrubBar.prototype.onTouchStartScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive) {
                if (!this.vgSlider) {
                    this.seekEnd(this.getTouchOffset($event));
                }
                else {
                    this.seekStart();
                }
            }
        }
    };
    VgScrubBar.prototype.onTouchMoveScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.seekMove(this.getTouchOffset($event));
            }
        }
    };
    VgScrubBar.prototype.onTouchCancelScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.touchEnd();
            }
        }
    };
    VgScrubBar.prototype.onTouchEndScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.touchEnd();
            }
        }
    };
    VgScrubBar.prototype.arrowAdjustVolume = function (event) {
        if (this.target) {
            if (event.keyCode === 38 || event.keyCode === 39) {
                event.preventDefault();
                this.target.seekTime((this.target.time.current + 5000) / 1000, false);
            }
            else if (event.keyCode === 37 || event.keyCode === 40) {
                event.preventDefault();
                this.target.seekTime((this.target.time.current - 5000) / 1000, false);
            }
        }
    };
    VgScrubBar.prototype.getPercentage = function () {
        return this.target ? ((this.target.time.current * 100) / this.target.time.total) + '%' : '0%';
    };
    VgScrubBar.prototype.onHideScrubBar = function (hide) {
        this.hideScrubBar = hide;
    };
    VgScrubBar.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgScrubBar.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-scrub-bar',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div class=\"scrubBar\"\n             tabindex=\"0\"\n             role=\"slider\"\n             aria-label=\"scrub bar\"\n             aria-level=\"polite\"\n             [attr.aria-valuenow]=\"getPercentage()\"\n             aria-valuemin=\"0\"\n             aria-valuemax=\"100\"\n             [attr.aria-valuetext]=\"getPercentage() + '%'\">\n            <ng-content></ng-content>\n        </div>\n        \n    ",
                    styles: ["\n        vg-scrub-bar {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            position: absolute;\n            width: 100%;\n            height: 5px;\n            bottom: 50px;\n            margin: 0;\n            cursor: pointer;\n            align-items: center;\n            background: rgba(0, 0, 0, 0.75);\n            z-index: 250;\n            -webkit-transition: bottom 1s, opacity 0.5s;\n            -khtml-transition: bottom 1s, opacity 0.5s;\n            -moz-transition: bottom 1s, opacity 0.5s;\n            -ms-transition: bottom 1s, opacity 0.5s;\n            transition: bottom 1s, opacity 0.5s;\n        }\n        \n        vg-scrub-bar .scrubBar {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n            height: 100%;\n        }\n\n        vg-controls vg-scrub-bar {\n            position: relative;\n            bottom: 0;\n            background: transparent;\n            height: 50px;\n            flex-grow: 1;\n            flex-basis: 0;\n            margin: 0 10px;\n            -webkit-transition: initial;\n            -khtml-transition: initial;\n            -moz-transition: initial;\n            -ms-transition: initial;\n            transition: initial;\n        }\n\n        vg-scrub-bar.hide {\n            bottom: 0;\n            opacity: 0;\n        }\n\n        vg-controls vg-scrub-bar.hide {\n            bottom: initial;\n            opacity: initial;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgScrubBar.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: vg_api_1.VgAPI },
        { type: vg_controls_hidden_1.VgControlsHidden }
    ]; };
    VgScrubBar.propDecorators = {
        hideScrubBar: [{ type: core_1.HostBinding, args: ['class.hide',] }],
        vgFor: [{ type: core_1.Input }],
        vgSlider: [{ type: core_1.Input }],
        onMouseDownScrubBar: [{ type: core_1.HostListener, args: ['mousedown', ['$event'],] }],
        onMouseMoveScrubBar: [{ type: core_1.HostListener, args: ['document:mousemove', ['$event'],] }],
        onMouseUpScrubBar: [{ type: core_1.HostListener, args: ['document:mouseup', ['$event'],] }],
        onTouchStartScrubBar: [{ type: core_1.HostListener, args: ['touchstart', ['$event'],] }],
        onTouchMoveScrubBar: [{ type: core_1.HostListener, args: ['document:touchmove', ['$event'],] }],
        onTouchCancelScrubBar: [{ type: core_1.HostListener, args: ['document:touchcancel', ['$event'],] }],
        onTouchEndScrubBar: [{ type: core_1.HostListener, args: ['document:touchend', ['$event'],] }],
        arrowAdjustVolume: [{ type: core_1.HostListener, args: ['keydown', ['$event'],] }]
    };
    return VgScrubBar;
}());
exports.VgScrubBar = VgScrubBar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctc2NydWItYmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctc2NydWItYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBR3VCO0FBQ3ZCLHFEQUFtRDtBQUNuRCwrRUFBNEU7QUFDNUUseURBQXVEO0FBR3ZEO0lBdUZJLG9CQUFZLEdBQWUsRUFBUyxHQUFVLEVBQUUscUJBQXVDO1FBQXZGLGlCQUdDO1FBSG1DLFFBQUcsR0FBSCxHQUFHLENBQU87UUFabkIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFHaEQsYUFBUSxHQUFZLElBQUksQ0FBQztRQUlsQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBRy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDLENBQUM7SUFDekcsQ0FBQztJQUVELDZCQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLENBQUM7UUFDN0YsQ0FBQztJQUNMLENBQUM7SUFFRCxrQ0FBYSxHQUFiO1FB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QyxtQkFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUF5QnZDLGlCQUFDO0NBQUEsQUEzUEQsSUEyUEM7QUFqTFksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSG9zdEJpbmRpbmcsXG4gICAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBWZ0NvbnRyb2xzSGlkZGVuIH0gZnJvbSAnLi8uLi8uLi9jb3JlL3NlcnZpY2VzL3ZnLWNvbnRyb2xzLWhpZGRlbic7XG5pbXBvcnQgeyBWZ1N0YXRlcyB9IGZyb20gJy4uLy4uL2NvcmUvc3RhdGVzL3ZnLXN0YXRlcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd2Zy1zY3J1Yi1iYXInLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInNjcnViQmFyXCJcbiAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgIHJvbGU9XCJzbGlkZXJcIlxuICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzY3J1YiBiYXJcIlxuICAgICAgICAgICAgIGFyaWEtbGV2ZWw9XCJwb2xpdGVcIlxuICAgICAgICAgICAgIFthdHRyLmFyaWEtdmFsdWVub3ddPVwiZ2V0UGVyY2VudGFnZSgpXCJcbiAgICAgICAgICAgICBhcmlhLXZhbHVlbWluPVwiMFwiXG4gICAgICAgICAgICAgYXJpYS12YWx1ZW1heD1cIjEwMFwiXG4gICAgICAgICAgICAgW2F0dHIuYXJpYS12YWx1ZXRleHRdPVwiZ2V0UGVyY2VudGFnZSgpICsgJyUnXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICBgLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLXNjcnViLWJhciB7XG4gICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIGJvdHRvbTogNTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICAgICAgei1pbmRleDogMjUwO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3R0b20gMXMsIG9wYWNpdHkgMC41cztcbiAgICAgICAgICAgIC1raHRtbC10cmFuc2l0aW9uOiBib3R0b20gMXMsIG9wYWNpdHkgMC41cztcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYm90dG9tIDFzLCBvcGFjaXR5IDAuNXM7XG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYm90dG9tIDFzLCBvcGFjaXR5IDAuNXM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gMXMsIG9wYWNpdHkgMC41cztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdmctc2NydWItYmFyIC5zY3J1YkJhciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLWNvbnRyb2xzIHZnLXNjcnViLWJhciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogaW5pdGlhbDtcbiAgICAgICAgICAgIC1raHRtbC10cmFuc2l0aW9uOiBpbml0aWFsO1xuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBpbml0aWFsO1xuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGluaXRpYWw7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBpbml0aWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctc2NydWItYmFyLmhpZGUge1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLWNvbnRyb2xzIHZnLXNjcnViLWJhci5oaWRlIHtcbiAgICAgICAgICAgIGJvdHRvbTogaW5pdGlhbDtcbiAgICAgICAgICAgIG9wYWNpdHk6IGluaXRpYWw7XG4gICAgICAgIH1cbiAgICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdTY3J1YkJhciBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhpZGUnKSBoaWRlU2NydWJCYXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIHZnRm9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdmdTbGlkZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgZWxlbTogSFRNTEVsZW1lbnQ7XG4gICAgdGFyZ2V0OiBhbnk7XG4gICAgaXNTZWVraW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgd2FzUGxheWluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZiwgcHVibGljIEFQSTogVmdBUEksIHZnQ29udHJvbHNIaWRkZW5TdGF0ZTogVmdDb250cm9sc0hpZGRlbikge1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godmdDb250cm9sc0hpZGRlblN0YXRlLmlzSGlkZGVuLnN1YnNjcmliZShoaWRlID0+IHRoaXMub25IaWRlU2NydWJCYXIoaGlkZSkpKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuQVBJLmlzUGxheWVyUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMub25QbGF5ZXJSZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5BUEkucGxheWVyUmVhZHlFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vblBsYXllclJlYWR5KCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5BUEkuZ2V0TWVkaWFCeUlkKHRoaXMudmdGb3IpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZWVrU3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldC5jYW5QbGF5KSB7XG4gICAgICAgICAgICB0aGlzLmlzU2Vla2luZyA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXQuc3RhdGUgPT09IFZnU3RhdGVzLlZHX1BMQVlJTkcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhc1BsYXlpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50YXJnZXQucGF1c2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZWVrTW92ZShvZmZzZXQ6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5pc1NlZWtpbmcpIHtcbiAgICAgICAgICAgIGxldCBwZXJjZW50YWdlID0gTWF0aC5tYXgoTWF0aC5taW4ob2Zmc2V0ICogMTAwIC8gdGhpcy5lbGVtLnNjcm9sbFdpZHRoLCA5OS45KSwgMCk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC50aW1lLmN1cnJlbnQgPSBwZXJjZW50YWdlICogdGhpcy50YXJnZXQudGltZS50b3RhbCAvIDEwMDtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnNlZWtUaW1lKHBlcmNlbnRhZ2UsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNlZWtFbmQob2Zmc2V0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5pc1NlZWtpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0LmNhblBsYXkpIHtcbiAgICAgICAgICAgIGxldCBwZXJjZW50YWdlID0gTWF0aC5tYXgoTWF0aC5taW4ob2Zmc2V0ICogMTAwIC8gdGhpcy5lbGVtLnNjcm9sbFdpZHRoLCA5OS45KSwgMCk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5zZWVrVGltZShwZXJjZW50YWdlLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLndhc1BsYXlpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdG91Y2hFbmQoKSB7XG4gICAgICAgIHRoaXMuaXNTZWVraW5nID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLndhc1BsYXlpbmcpIHtcbiAgICAgICAgICAgIHRoaXMud2FzUGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFRvdWNoT2Zmc2V0KGV2ZW50OiBhbnkpIHtcbiAgICAgICAgbGV0IG9mZnNldExlZnQ6IG51bWJlciA9IDA7XG4gICAgICAgIGxldCBlbGVtZW50OiBhbnkgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgICAgICBvZmZzZXRMZWZ0ICs9IGVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gb2Zmc2V0TGVmdDtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbICckZXZlbnQnIF0pXG4gICAgb25Nb3VzZURvd25TY3J1YkJhcigkZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy50YXJnZXQuaXNMaXZlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZnU2xpZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vla0VuZCgkZXZlbnQub2Zmc2V0WCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlZWtTdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vdXNlbW92ZScsIFsgJyRldmVudCcgXSlcbiAgICBvbk1vdXNlTW92ZVNjcnViQmFyKCRldmVudDogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnRhcmdldC5pc0xpdmUgJiYgdGhpcy52Z1NsaWRlciAmJiB0aGlzLmlzU2Vla2luZykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vla01vdmUoJGV2ZW50Lm9mZnNldFgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2V1cCcsIFsgJyRldmVudCcgXSlcbiAgICBvbk1vdXNlVXBTY3J1YkJhcigkZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy50YXJnZXQuaXNMaXZlICYmIHRoaXMudmdTbGlkZXIgJiYgdGhpcy5pc1NlZWtpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlZWtFbmQoJGV2ZW50Lm9mZnNldFgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigndG91Y2hzdGFydCcsIFsgJyRldmVudCcgXSlcbiAgICBvblRvdWNoU3RhcnRTY3J1YkJhcigkZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy50YXJnZXQuaXNMaXZlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZnU2xpZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vla0VuZCh0aGlzLmdldFRvdWNoT2Zmc2V0KCRldmVudCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWVrU3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDp0b3VjaG1vdmUnLCBbICckZXZlbnQnIF0pXG4gICAgb25Ub3VjaE1vdmVTY3J1YkJhcigkZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy50YXJnZXQuaXNMaXZlICYmIHRoaXMudmdTbGlkZXIgJiYgdGhpcy5pc1NlZWtpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlZWtNb3ZlKHRoaXMuZ2V0VG91Y2hPZmZzZXQoJGV2ZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDp0b3VjaGNhbmNlbCcsIFsgJyRldmVudCcgXSlcbiAgICBvblRvdWNoQ2FuY2VsU2NydWJCYXIoJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGFyZ2V0LmlzTGl2ZSAmJiB0aGlzLnZnU2xpZGVyICYmIHRoaXMuaXNTZWVraW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaEVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6dG91Y2hlbmQnLCBbICckZXZlbnQnIF0pXG4gICAgb25Ub3VjaEVuZFNjcnViQmFyKCRldmVudDogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnRhcmdldC5pc0xpdmUgJiYgdGhpcy52Z1NsaWRlciAmJiB0aGlzLmlzU2Vla2luZykge1xuICAgICAgICAgICAgICAgIHRoaXMudG91Y2hFbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICAgIGFycm93QWRqdXN0Vm9sdW1lKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM4IHx8IGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5zZWVrVGltZSgodGhpcy50YXJnZXQudGltZS5jdXJyZW50ICsgNTAwMCkgLyAxMDAwLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzNyB8fCBldmVudC5rZXlDb2RlID09PSA0MCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuc2Vla1RpbWUoKHRoaXMudGFyZ2V0LnRpbWUuY3VycmVudCAtIDUwMDApIC8gMTAwMCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UGVyY2VudGFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ID8gKCh0aGlzLnRhcmdldC50aW1lLmN1cnJlbnQgKiAxMDApIC8gdGhpcy50YXJnZXQudGltZS50b3RhbCkgKyAnJScgOiAnMCUnO1xuICAgIH1cblxuICAgIG9uSGlkZVNjcnViQmFyKGhpZGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5oaWRlU2NydWJCYXIgPSBoaWRlO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-time-display/vg-time-display.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-time-display/vg-time-display.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
// Workaround until we can use UTC with Angular Date Pipe
var VgUtcPipe = /** @class */ (function () {
    function VgUtcPipe() {
    }
    VgUtcPipe.prototype.transform = function (value, format) {
        var date = new Date(value);
        var result = format;
        var ss = date.getUTCSeconds();
        var mm = date.getUTCMinutes();
        var hh = date.getUTCHours();
        if (ss < 10) {
            ss = '0' + ss;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        if (hh < 10) {
            hh = '0' + hh;
        }
        result = result.replace(/ss/g, ss);
        result = result.replace(/mm/g, mm);
        result = result.replace(/hh/g, hh);
        return result;
    };
    VgUtcPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'vgUtc' },] },
    ];
    return VgUtcPipe;
}());
exports.VgUtcPipe = VgUtcPipe;
var VgTimeDisplay = /** @class */ (function () {
    function VgTimeDisplay(ref, API) {
        this.API = API;
        this.vgProperty = 'current';
        this.vgFormat = 'mm:ss';
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgTimeDisplay.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgTimeDisplay.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgTimeDisplay.prototype.getTime = function () {
        var t = 0;
        if (this.target) {
            t = Math.round(this.target.time[this.vgProperty]);
            t = isNaN(t) || this.target.isLive ? 0 : t;
        }
        return t;
    };
    VgTimeDisplay.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgTimeDisplay.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-time-display',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <span *ngIf=\"target?.isLive\">LIVE</span>\n        <span *ngIf=\"!target?.isLive\">{{ getTime() | vgUtc:vgFormat }}</span>\n        <ng-content></ng-content>\n    ",
                    styles: ["\n        vg-time-display {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 60px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n            pointer-events: none;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgTimeDisplay.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: vg_api_1.VgAPI }
    ]; };
    VgTimeDisplay.propDecorators = {
        vgFor: [{ type: core_1.Input }],
        vgProperty: [{ type: core_1.Input }],
        vgFormat: [{ type: core_1.Input }]
    };
    return VgTimeDisplay;
}());
exports.VgTimeDisplay = VgTimeDisplay;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctdGltZS1kaXNwbGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctdGltZS1kaXNwbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdIO0FBQ3hILHFEQUFtRDtBQUduRCx5REFBeUQ7QUFDekQ7SUFBQTtJQXlCQSxDQUFDO0lBdkJHLDZCQUFTLEdBQVQsVUFBVSxLQUFhLEVBQUUsTUFBYztRQUNuQyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDcEIsSUFBSSxFQUFFLEdBQWtCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM3QyxJQUFJLEVBQUUsR0FBa0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzdDLElBQUksRUFBRSxHQUFrQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFM0MsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDVixFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNsQixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDVixFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNsQixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDVixFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNsQixDQUFDO1FBRUQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBVSxFQUFFLENBQUMsQ0FBQztRQUMzQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQVUsRUFBRSxDQUFDLENBQUM7UUFFM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDOztnQkF4QkosV0FBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTs7SUF5QnZCLGdCQUFDO0NBQUEsQUF6QkQsSUF5QkM7QUF4QlksOEJBQVM7QUEwQnRCO0lBcUNJLHVCQUFZLEdBQWUsRUFBUyxHQUFVO1FBQVYsUUFBRyxHQUFILEdBQUcsQ0FBTztRQVJyQyxlQUFVLEdBQVcsU0FBUyxDQUFDO1FBQy9CLGFBQVEsR0FBVyxPQUFPLENBQUM7UUFLcEMsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBRy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUNsQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUMsQ0FBQztRQUM3RixDQUFDO0lBQ0wsQ0FBQztJQUVELHFDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVWLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBRSxDQUFDLENBQUM7WUFDcEQsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUVELE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsbUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O2dCQW5FSixnQkFBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsZ0xBSVQ7b0JBQ0QsTUFBTSxFQUFFLENBQUUsb2lCQWlCVCxDQUFFO2lCQUNOOzs7O2dCQTFEMEIsaUJBQVU7Z0JBQzVCLGNBQUs7Ozt3QkEyRFQsWUFBSzs2QkFDTCxZQUFLOzJCQUNMLFlBQUs7O0lBc0NWLG9CQUFDO0NBQUEsQUFwRUQsSUFvRUM7QUF6Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBPbkluaXQsIFBpcGVUcmFuc2Zvcm0sIFBpcGUsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZnQVBJIH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy92Zy1hcGknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbi8vIFdvcmthcm91bmQgdW50aWwgd2UgY2FuIHVzZSBVVEMgd2l0aCBBbmd1bGFyIERhdGUgUGlwZVxuQFBpcGUoeyBuYW1lOiAndmdVdGMnIH0pXG5leHBvcnQgY2xhc3MgVmdVdGNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIsIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICAgIGxldCByZXN1bHQgPSBmb3JtYXQ7XG4gICAgICAgIGxldCBzczogc3RyaW5nfG51bWJlciA9IGRhdGUuZ2V0VVRDU2Vjb25kcygpO1xuICAgICAgICBsZXQgbW06IHN0cmluZ3xudW1iZXIgPSBkYXRlLmdldFVUQ01pbnV0ZXMoKTtcbiAgICAgICAgbGV0IGhoOiBzdHJpbmd8bnVtYmVyID0gZGF0ZS5nZXRVVENIb3VycygpO1xuXG4gICAgICAgIGlmIChzcyA8IDEwKSB7XG4gICAgICAgICAgICBzcyA9ICcwJyArIHNzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtbSA8IDEwKSB7XG4gICAgICAgICAgICBtbSA9ICcwJyArIG1tO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoaCA8IDEwKSB7XG4gICAgICAgICAgICBoaCA9ICcwJyArIGhoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoL3NzL2csIDxzdHJpbmc+c3MpO1xuICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZSgvbW0vZywgPHN0cmluZz5tbSk7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKC9oaC9nLCA8c3RyaW5nPmhoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd2Zy10aW1lLWRpc3BsYXknLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJ0YXJnZXQ/LmlzTGl2ZVwiPkxJVkU8L3NwYW4+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiIXRhcmdldD8uaXNMaXZlXCI+e3sgZ2V0VGltZSgpIHwgdmdVdGM6dmdGb3JtYXQgfX08L3NwYW4+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICBgLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLXRpbWUtZGlzcGxheSB7XG4gICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIFZnVGltZURpc3BsYXkgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgdmdGb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSB2Z1Byb3BlcnR5OiBzdHJpbmcgPSAnY3VycmVudCc7XG4gICAgQElucHV0KCkgdmdGb3JtYXQ6IHN0cmluZyA9ICdtbTpzcyc7XG5cbiAgICBlbGVtOiBIVE1MRWxlbWVudDtcbiAgICB0YXJnZXQ6IGFueTtcblxuICAgIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6IFZnQVBJKSB7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5BUEkuaXNQbGF5ZXJSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5vblBsYXllclJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLkFQSS5wbGF5ZXJSZWFkeUV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUGxheWVyUmVhZHkoKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG4gICAgfVxuXG4gICAgZ2V0VGltZSgpIHtcbiAgICAgICAgbGV0IHQgPSAwO1xuXG4gICAgICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgdCA9IE1hdGgucm91bmQodGhpcy50YXJnZXQudGltZVsgdGhpcy52Z1Byb3BlcnR5IF0pO1xuICAgICAgICAgICAgdCA9IGlzTmFOKHQpIHx8IHRoaXMudGFyZ2V0LmlzTGl2ZSA/IDAgOiB0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-track-selector/vg-track-selector.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-track-selector/vg-track-selector.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var VgTrackSelector = /** @class */ (function () {
    function VgTrackSelector(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgTrackSelector.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgTrackSelector.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
        var subs = Array.from(this.API.getMasterMedia().elem.children)
            .filter(function (item) { return item.tagName === 'TRACK'; })
            .filter(function (item) { return item.kind === 'subtitles'; })
            .map(function (item) { return ({
            label: item.label,
            selected: item.default === true,
            id: item.srclang
        }); });
        this.tracks = subs.concat([
            {
                id: null,
                label: 'Off',
                selected: subs.every(function (item) { return item.selected === false; })
            }
        ]);
        var track = this.tracks.filter(function (item) { return item.selected === true; })[0];
        this.trackSelected = track.id;
        this.ariaValue = track.label;
    };
    VgTrackSelector.prototype.selectTrack = function (trackId) {
        var _this = this;
        this.trackSelected = (trackId === 'null') ? null : trackId;
        this.ariaValue = 'No track selected';
        Array.from(this.API.getMasterMedia().elem.textTracks)
            .forEach(function (item) {
            if (item.language === trackId) {
                _this.ariaValue = item.label;
                item.mode = 'showing';
            }
            else {
                item.mode = 'hidden';
            }
        });
    };
    VgTrackSelector.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgTrackSelector.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-track-selector',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div class=\"container\">\n            <div class=\"track-selected\"\n                 [class.vg-icon-closed_caption]=\"!trackSelected\">\n                {{ trackSelected || '' }}\n            </div>\n            \n            <select class=\"trackSelector\" \n                    (change)=\"selectTrack($event.target.value)\"\n                    tabindex=\"0\"\n                    aria-label=\"track selector\"\n                    [attr.aria-valuetext]=\"ariaValue\">\n                <option \n                    *ngFor=\"let track of tracks\"\n                    [value]=\"track.id\"\n                    [selected]=\"track.selected === true\">\n                    {{ track.label }}\n                </option>\n            </select>\n        </div>\n    ",
                    styles: ["\n        vg-track-selector {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            width: 50px;\n            height: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n        vg-track-selector .container {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n            \n            padding: 0;\n            margin: 5px;\n        }\n        vg-track-selector select.trackSelector {\n            width: 50px;\n            padding: 5px 8px;\n            border: none;\n            background: none;\n            -webkit-appearance: none;\n            -moz-appearance: none;\n            appearance: none;\n            color: transparent;\n            font-size: 16px;\n        }\n        vg-track-selector select.trackSelector::-ms-expand {\n            display: none;\n        }\n        vg-track-selector select.trackSelector option {\n            color: #000;\n        }\n        vg-track-selector .track-selected {\n            position: absolute;\n            width: 100%;\n            height: 50px;\n            top: -6px;\n            text-align: center;\n            text-transform: uppercase;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n            padding-top: 2px;\n            pointer-events: none;\n        }\n        vg-track-selector .vg-icon-closed_caption:before {\n            width: 100%;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgTrackSelector.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: vg_api_1.VgAPI }
    ]; };
    VgTrackSelector.propDecorators = {
        vgFor: [{ type: core_1.Input }]
    };
    return VgTrackSelector;
}());
exports.VgTrackSelector = VgTrackSelector;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctdHJhY2stc2VsZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy10cmFjay1zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRztBQUNuRyxxREFBbUQ7QUFTbkQ7SUE2RkkseUJBQVksR0FBZSxFQUFTLEdBQVU7UUFBVixRQUFHLEdBQUgsR0FBRyxDQUFPO1FBSjlDLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUsvQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDbEMsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLENBQUM7UUFDN0YsQ0FBQztJQUNMLENBQUM7SUFFRCx1Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEQsSUFBTSxJQUFJLEdBQWtCLEtBQUssQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUF5QixDQUFDLFFBQVEsQ0FBQzthQUNoRyxNQUFNLENBQUMsVUFBQyxJQUFpQixJQUFLLE9BQUEsSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQXhCLENBQXdCLENBQUM7YUFDdkQsTUFBTSxDQUFDLFVBQUMsSUFBc0IsSUFBSyxPQUFBLElBQUksQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUF6QixDQUF5QixDQUFDO2FBQzdELEdBQUcsQ0FBQyxVQUFDLElBQXNCLElBQUssT0FBQSxDQUFDO1lBQzlCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJO1lBQy9CLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTztTQUNuQixDQUFDLEVBSitCLENBSS9CLENBQUMsQ0FBQztRQUVSLElBQUksQ0FBQyxNQUFNLEdBQ0osSUFBSTtZQUNQO2dCQUNJLEVBQUUsRUFBRSxJQUFJO2dCQUNSLEtBQUssRUFBRSxLQUFLO2dCQUNaLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQUMsSUFBWSxJQUFLLE9BQUEsSUFBSSxDQUFDLFFBQVEsS0FBSyxLQUFLLEVBQXZCLENBQXVCLENBQUM7YUFDbEU7VUFDSixDQUFDO1FBRUYsSUFBTSxLQUFLLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFZLElBQUssT0FBQSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBdEIsQ0FBc0IsQ0FBQyxDQUFFLENBQUMsQ0FBRSxDQUFDO1FBQ3hGLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxPQUFlO1FBQTNCLGlCQWNDO1FBYkcsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLE9BQU8sS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFFM0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztRQUVyQyxLQUFLLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBeUIsQ0FBQyxVQUFVLENBQUM7YUFDdEUsT0FBTyxDQUFDLFVBQUMsSUFBZTtZQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7WUFDMUIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBdEpKLGdCQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSx3d0JBb0JUO29CQUNELE1BQU0sRUFBRSxDQUFFLCtwREF1RFQsQ0FBRTtpQkFDTjs7OztnQkExRm1CLGlCQUFVO2dCQUNyQixjQUFLOzs7d0JBMkZULFlBQUs7O0lBcUVWLHNCQUFDO0NBQUEsQUF2SkQsSUF1SkM7QUF0RVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZnQVBJIH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy92Zy1hcGknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctdHJhY2stc2VsZWN0b3InLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRyYWNrLXNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAgW2NsYXNzLnZnLWljb24tY2xvc2VkX2NhcHRpb25dPVwiIXRyYWNrU2VsZWN0ZWRcIj5cbiAgICAgICAgICAgICAgICB7eyB0cmFja1NlbGVjdGVkIHx8ICcnIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cInRyYWNrU2VsZWN0b3JcIiBcbiAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJzZWxlY3RUcmFjaygkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJ0cmFjayBzZWxlY3RvclwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtdmFsdWV0ZXh0XT1cImFyaWFWYWx1ZVwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCB0cmFjayBvZiB0cmFja3NcIlxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwidHJhY2suaWRcIlxuICAgICAgICAgICAgICAgICAgICBbc2VsZWN0ZWRdPVwidHJhY2suc2VsZWN0ZWQgPT09IHRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgdHJhY2subGFiZWwgfX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLXRyYWNrLXNlbGVjdG9yIHtcbiAgICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIHZnLXRyYWNrLXNlbGVjdG9yIC5jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgfVxuICAgICAgICB2Zy10cmFjay1zZWxlY3RvciBzZWxlY3QudHJhY2tTZWxlY3RvciB7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICB2Zy10cmFjay1zZWxlY3RvciBzZWxlY3QudHJhY2tTZWxlY3Rvcjo6LW1zLWV4cGFuZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHZnLXRyYWNrLXNlbGVjdG9yIHNlbGVjdC50cmFja1NlbGVjdG9yIG9wdGlvbiB7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgICAgICB2Zy10cmFjay1zZWxlY3RvciAudHJhY2stc2VsZWN0ZWQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB0b3A6IC02cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHZnLXRyYWNrLXNlbGVjdG9yIC52Zy1pY29uLWNsb3NlZF9jYXB0aW9uOmJlZm9yZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBWZ1RyYWNrU2VsZWN0b3IgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgdmdGb3I6IHN0cmluZztcblxuICAgIGVsZW06IEhUTUxFbGVtZW50O1xuICAgIHRhcmdldDogYW55O1xuICAgIHRyYWNrczogQXJyYXk8T3B0aW9uPjtcbiAgICB0cmFja1NlbGVjdGVkOiBzdHJpbmc7XG5cbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgYXJpYVZhbHVlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6IFZnQVBJKSB7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5BUEkuaXNQbGF5ZXJSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5vblBsYXllclJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLkFQSS5wbGF5ZXJSZWFkeUV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUGxheWVyUmVhZHkoKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG5cbiAgICAgICAgY29uc3Qgc3ViczogQXJyYXk8T3B0aW9uPiA9IEFycmF5LmZyb20oKHRoaXMuQVBJLmdldE1hc3Rlck1lZGlhKCkuZWxlbSBhcyBIVE1MTWVkaWFFbGVtZW50KS5jaGlsZHJlbilcbiAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW06IEhUTUxFbGVtZW50KSA9PiBpdGVtLnRhZ05hbWUgPT09ICdUUkFDSycpXG4gICAgICAgICAgICAuZmlsdGVyKChpdGVtOiBIVE1MVHJhY2tFbGVtZW50KSA9PiBpdGVtLmtpbmQgPT09ICdzdWJ0aXRsZXMnKVxuICAgICAgICAgICAgLm1hcCgoaXRlbTogSFRNTFRyYWNrRWxlbWVudCkgPT4gKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogaXRlbS5sYWJlbCxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogaXRlbS5kZWZhdWx0ID09PSB0cnVlLFxuICAgICAgICAgICAgICAgIGlkOiBpdGVtLnNyY2xhbmdcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLnRyYWNrcyA9IFtcbiAgICAgICAgICAgIC4uLnN1YnMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdPZmYnLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBzdWJzLmV2ZXJ5KChpdGVtOiBPcHRpb24pID0+IGl0ZW0uc2VsZWN0ZWQgPT09IGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IHRyYWNrOiBPcHRpb24gPSB0aGlzLnRyYWNrcy5maWx0ZXIoKGl0ZW06IE9wdGlvbikgPT4gaXRlbS5zZWxlY3RlZCA9PT0gdHJ1ZSlbIDAgXTtcbiAgICAgICAgdGhpcy50cmFja1NlbGVjdGVkID0gdHJhY2suaWQ7XG4gICAgICAgIHRoaXMuYXJpYVZhbHVlID0gdHJhY2subGFiZWw7XG4gICAgfVxuXG4gICAgc2VsZWN0VHJhY2sodHJhY2tJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudHJhY2tTZWxlY3RlZCA9ICh0cmFja0lkID09PSAnbnVsbCcpID8gbnVsbCA6IHRyYWNrSWQ7XG5cbiAgICAgICAgdGhpcy5hcmlhVmFsdWUgPSAnTm8gdHJhY2sgc2VsZWN0ZWQnO1xuXG4gICAgICAgIEFycmF5LmZyb20oKHRoaXMuQVBJLmdldE1hc3Rlck1lZGlhKCkuZWxlbSBhcyBIVE1MTWVkaWFFbGVtZW50KS50ZXh0VHJhY2tzKVxuICAgICAgICAgICAgLmZvckVhY2goKGl0ZW06IFRleHRUcmFjaykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmxhbmd1YWdlID09PSB0cmFja0lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJpYVZhbHVlID0gaXRlbS5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5tb2RlID0gJ3Nob3dpbmcnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubW9kZSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-volume/vg-volume.js":
/*!**********************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-volume/vg-volume.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var VgVolume = /** @class */ (function () {
    function VgVolume(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
        this.isDragging = false;
    }
    VgVolume.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgVolume.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
        this.ariaValue = this.getVolume() * 100;
    };
    VgVolume.prototype.onClick = function (event) {
        this.setVolume(this.calculateVolume(event.clientX));
    };
    VgVolume.prototype.onMouseDown = function (event) {
        this.mouseDownPosX = event.clientX;
        this.isDragging = true;
    };
    VgVolume.prototype.onDrag = function (event) {
        if (this.isDragging) {
            this.setVolume(this.calculateVolume(event.clientX));
        }
    };
    VgVolume.prototype.onStopDrag = function (event) {
        if (this.isDragging) {
            this.isDragging = false;
            if (this.mouseDownPosX === event.clientX) {
                this.setVolume(this.calculateVolume(event.clientX));
            }
        }
    };
    VgVolume.prototype.arrowAdjustVolume = function (event) {
        if (event.keyCode === 38 || event.keyCode === 39) {
            event.preventDefault();
            this.setVolume(Math.max(0, Math.min(100, (this.getVolume() * 100) + 10)));
        }
        else if (event.keyCode === 37 || event.keyCode === 40) {
            event.preventDefault();
            this.setVolume(Math.max(0, Math.min(100, (this.getVolume() * 100) - 10)));
        }
    };
    VgVolume.prototype.calculateVolume = function (mousePosX) {
        var recObj = this.volumeBarRef.nativeElement.getBoundingClientRect();
        var volumeBarOffsetLeft = recObj.left;
        var volumeBarWidth = recObj.width;
        return (mousePosX - volumeBarOffsetLeft) / volumeBarWidth * 100;
    };
    VgVolume.prototype.setVolume = function (vol) {
        this.target.volume = Math.max(0, Math.min(1, vol / 100));
        this.ariaValue = this.target.volume * 100;
    };
    VgVolume.prototype.getVolume = function () {
        return this.target ? this.target.volume : 0;
    };
    VgVolume.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgVolume.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-volume',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div \n            #volumeBar\n            class=\"volumeBar\"\n            tabindex=\"0\"\n            role=\"slider\"\n            aria-label=\"volume level\"\n            aria-level=\"polite\"\n            [attr.aria-valuenow]=\"ariaValue\"\n            aria-valuemin=\"0\"\n            aria-valuemax=\"100\"\n            aria-orientation=\"horizontal\"\n            [attr.aria-valuetext]=\"ariaValue + '%'\"\n            (click)=\"onClick($event)\"\n            (mousedown)=\"onMouseDown($event)\">\n            <div class=\"volumeBackground\" [ngClass]=\"{dragging: isDragging}\">\n                <div class=\"volumeValue\" [style.width]=\"(getVolume() * (100-15)) + '%'\"></div>\n                <div class=\"volumeKnob\" [style.left]=\"(getVolume() * (100-15)) + '%'\"></div>\n            </div>\n        </div>\n    ",
                    styles: ["\n        vg-volume {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 100px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n        vg-volume .volumeBar {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n        }\n        vg-volume .volumeBackground {\n            display: flex;\n            flex-grow: 1;\n            height: 5px;\n            pointer-events: none;\n            background-color: #333;\n        }\n        vg-volume .volumeValue {\n            display: flex;\n            height: 5px;\n            pointer-events: none;\n            background-color: #FFF;\n            transition:all 0.2s ease-out;\n        }\n        vg-volume .volumeKnob {\n            position: absolute;\n            width: 15px; height: 15px;\n            left: 0; top: 50%;\n            transform: translateY(-50%);\n            border-radius: 15px;\n            pointer-events: none;\n            background-color: #FFF;\n            transition:all 0.2s ease-out;\n        }\n        vg-volume .volumeBackground.dragging .volumeValue,\n        vg-volume .volumeBackground.dragging .volumeKnob {\n            transition: none;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgVolume.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: vg_api_1.VgAPI }
    ]; };
    VgVolume.propDecorators = {
        vgFor: [{ type: core_1.Input }],
        volumeBarRef: [{ type: core_1.ViewChild, args: ['volumeBar',] }],
        onDrag: [{ type: core_1.HostListener, args: ['document:mousemove', ['$event'],] }],
        onStopDrag: [{ type: core_1.HostListener, args: ['document:mouseup', ['$event'],] }],
        arrowAdjustVolume: [{ type: core_1.HostListener, args: ['keydown', ['$event'],] }]
    };
    return VgVolume;
}());
exports.VgVolume = VgVolume;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctdm9sdW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctdm9sdW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBR3VCO0FBQ3ZCLHFEQUFtRDtBQUduRDtJQXVGSSxrQkFBWSxHQUFlLEVBQVMsR0FBVTtRQUFWLFFBQUcsR0FBSCxHQUFHLENBQU87UUFGOUMsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBRy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUMsQ0FBQztRQUM3RixDQUFDO0lBQ0wsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDNUMsQ0FBQztJQUVELDBCQUFPLEdBQVAsVUFBUSxLQUEwQjtRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELDhC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QyxDQUFDO0lBQ2hELENBQUM7SUFFRCw4QkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBbEtKLGdCQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUscTBCQW9CVDtvQkFDRCxNQUFNLEVBQUUsQ0FBRSxnL0NBaURULENBQUU7aUJBQ047Ozs7Z0JBaEZxQixpQkFBVTtnQkFHdkIsY0FBSzs7O3dCQStFVCxZQUFLOytCQUNMLGdCQUFTLFNBQUMsV0FBVzt5QkFzQ3JCLG1CQUFZLFNBQUMsb0JBQW9CLEVBQUUsQ0FBRSxRQUFRLENBQUU7NkJBTy9DLG1CQUFZLFNBQUMsa0JBQWtCLEVBQUUsQ0FBRSxRQUFRLENBQUU7b0NBVTdDLG1CQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOztJQStCdkMsZUFBQztDQUFBLEFBbktELElBbUtDO0FBeEZZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIFZpZXdDaGlsZCxcbiAgICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLXZvbHVtZScsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgI3ZvbHVtZUJhclxuICAgICAgICAgICAgY2xhc3M9XCJ2b2x1bWVCYXJcIlxuICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICAgIHJvbGU9XCJzbGlkZXJcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cInZvbHVtZSBsZXZlbFwiXG4gICAgICAgICAgICBhcmlhLWxldmVsPVwicG9saXRlXCJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtdmFsdWVub3ddPVwiYXJpYVZhbHVlXCJcbiAgICAgICAgICAgIGFyaWEtdmFsdWVtaW49XCIwXCJcbiAgICAgICAgICAgIGFyaWEtdmFsdWVtYXg9XCIxMDBcIlxuICAgICAgICAgICAgYXJpYS1vcmllbnRhdGlvbj1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS12YWx1ZXRleHRdPVwiYXJpYVZhbHVlICsgJyUnXCJcbiAgICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIlxuICAgICAgICAgICAgKG1vdXNlZG93bik9XCJvbk1vdXNlRG93bigkZXZlbnQpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidm9sdW1lQmFja2dyb3VuZFwiIFtuZ0NsYXNzXT1cIntkcmFnZ2luZzogaXNEcmFnZ2luZ31cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidm9sdW1lVmFsdWVcIiBbc3R5bGUud2lkdGhdPVwiKGdldFZvbHVtZSgpICogKDEwMC0xNSkpICsgJyUnXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZvbHVtZUtub2JcIiBbc3R5bGUubGVmdF09XCIoZ2V0Vm9sdW1lKCkgKiAoMTAwLTE1KSkgKyAnJSdcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLXZvbHVtZSB7XG4gICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgdmctdm9sdW1lIC52b2x1bWVCYXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgdmctdm9sdW1lIC52b2x1bWVCYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICAgICAgfVxuICAgICAgICB2Zy12b2x1bWUgLnZvbHVtZVZhbHVlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246YWxsIDAuMnMgZWFzZS1vdXQ7XG4gICAgICAgIH1cbiAgICAgICAgdmctdm9sdW1lIC52b2x1bWVLbm9iIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4OyBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICBsZWZ0OiAwOyB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOmFsbCAwLjJzIGVhc2Utb3V0O1xuICAgICAgICB9XG4gICAgICAgIHZnLXZvbHVtZSAudm9sdW1lQmFja2dyb3VuZC5kcmFnZ2luZyAudm9sdW1lVmFsdWUsXG4gICAgICAgIHZnLXZvbHVtZSAudm9sdW1lQmFja2dyb3VuZC5kcmFnZ2luZyAudm9sdW1lS25vYiB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIFZnVm9sdW1lIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIHZnRm9yOiBzdHJpbmc7XG4gICAgQFZpZXdDaGlsZCgndm9sdW1lQmFyJykgdm9sdW1lQmFyUmVmOiBFbGVtZW50UmVmO1xuXG4gICAgZWxlbTogSFRNTEVsZW1lbnQ7XG4gICAgdGFyZ2V0OiBhbnk7XG4gICAgaXNEcmFnZ2luZzogYm9vbGVhbjtcbiAgICBtb3VzZURvd25Qb3NYOiBudW1iZXI7XG4gICAgYXJpYVZhbHVlOiBudW1iZXI7XG5cbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgQVBJOiBWZ0FQSSkge1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLkFQSS5pc1BsYXllclJlYWR5KSB7XG4gICAgICAgICAgICB0aGlzLm9uUGxheWVyUmVhZHkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuQVBJLnBsYXllclJlYWR5RXZlbnQuc3Vic2NyaWJlKCgpID0+IHRoaXMub25QbGF5ZXJSZWFkeSgpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBsYXllclJlYWR5KCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMuQVBJLmdldE1lZGlhQnlJZCh0aGlzLnZnRm9yKTtcbiAgICAgICAgdGhpcy5hcmlhVmFsdWUgPSB0aGlzLmdldFZvbHVtZSgpICogMTAwO1xuICAgIH1cblxuICAgIG9uQ2xpY2soZXZlbnQ6IHsgY2xpZW50WDogbnVtYmVyIH0pIHtcbiAgICAgICAgdGhpcy5zZXRWb2x1bWUodGhpcy5jYWxjdWxhdGVWb2x1bWUoZXZlbnQuY2xpZW50WCkpO1xuICAgIH1cblxuICAgIG9uTW91c2VEb3duKGV2ZW50OiB7IGNsaWVudFg6IG51bWJlciB9KSB7XG4gICAgICAgIHRoaXMubW91c2VEb3duUG9zWCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2Vtb3ZlJywgWyAnJGV2ZW50JyBdKVxuICAgIG9uRHJhZyhldmVudDogeyBjbGllbnRYOiBudW1iZXIgfSkge1xuICAgICAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZvbHVtZSh0aGlzLmNhbGN1bGF0ZVZvbHVtZShldmVudC5jbGllbnRYKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZXVwJywgWyAnJGV2ZW50JyBdKVxuICAgIG9uU3RvcERyYWcoZXZlbnQ6IHsgY2xpZW50WDogbnVtYmVyIH0pIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xuICAgICAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodGhpcy5tb3VzZURvd25Qb3NYID09PSBldmVudC5jbGllbnRYKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWb2x1bWUodGhpcy5jYWxjdWxhdGVWb2x1bWUoZXZlbnQuY2xpZW50WCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gICAgYXJyb3dBZGp1c3RWb2x1bWUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM4IHx8IGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRWb2x1bWUoTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCh0aGlzLmdldFZvbHVtZSgpICogMTAwKSArIDEwKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3IHx8IGV2ZW50LmtleUNvZGUgPT09IDQwKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRWb2x1bWUoTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCh0aGlzLmdldFZvbHVtZSgpICogMTAwKSAtIDEwKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlVm9sdW1lKG1vdXNlUG9zWDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHJlY09iaiA9IHRoaXMudm9sdW1lQmFyUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHZvbHVtZUJhck9mZnNldExlZnQ6IG51bWJlciA9IHJlY09iai5sZWZ0O1xuICAgICAgICBjb25zdCB2b2x1bWVCYXJXaWR0aDogbnVtYmVyID0gcmVjT2JqLndpZHRoO1xuICAgICAgICByZXR1cm4gKG1vdXNlUG9zWCAtIHZvbHVtZUJhck9mZnNldExlZnQpIC8gdm9sdW1lQmFyV2lkdGggKiAxMDA7XG4gICAgfVxuXG4gICAgc2V0Vm9sdW1lKHZvbDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0LnZvbHVtZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZvbCAvIDEwMCkpO1xuICAgICAgICB0aGlzLmFyaWFWYWx1ZSA9IHRoaXMudGFyZ2V0LnZvbHVtZSAqIDEwMDtcbiAgICB9XG5cbiAgICBnZXRWb2x1bWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ID8gdGhpcy50YXJnZXQudm9sdW1lIDogMDtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/core/core.js":
/*!***************************************************!*\
  !*** ./node_modules/videogular2/src/core/core.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_player_1 = __webpack_require__(/*! ./vg-player/vg-player */ "./node_modules/videogular2/src/core/vg-player/vg-player.js");
var vg_media_1 = __webpack_require__(/*! ./vg-media/vg-media */ "./node_modules/videogular2/src/core/vg-media/vg-media.js");
var vg_cue_points_1 = __webpack_require__(/*! ./vg-cue-points/vg-cue-points */ "./node_modules/videogular2/src/core/vg-cue-points/vg-cue-points.js");
var vg_api_1 = __webpack_require__(/*! ./services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var vg_fullscreen_api_1 = __webpack_require__(/*! ./services/vg-fullscreen-api */ "./node_modules/videogular2/src/core/services/vg-fullscreen-api.js");
var vg_utils_1 = __webpack_require__(/*! ./services/vg-utils */ "./node_modules/videogular2/src/core/services/vg-utils.js");
var vg_controls_hidden_1 = __webpack_require__(/*! ./services/vg-controls-hidden */ "./node_modules/videogular2/src/core/services/vg-controls-hidden.js");
// components
__export(__webpack_require__(/*! ./vg-player/vg-player */ "./node_modules/videogular2/src/core/vg-player/vg-player.js"));
__export(__webpack_require__(/*! ./vg-media/vg-media */ "./node_modules/videogular2/src/core/vg-media/vg-media.js"));
__export(__webpack_require__(/*! ./vg-cue-points/vg-cue-points */ "./node_modules/videogular2/src/core/vg-cue-points/vg-cue-points.js"));
// services
__export(__webpack_require__(/*! ./services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js"));
__export(__webpack_require__(/*! ./services/vg-fullscreen-api */ "./node_modules/videogular2/src/core/services/vg-fullscreen-api.js"));
__export(__webpack_require__(/*! ./services/vg-utils */ "./node_modules/videogular2/src/core/services/vg-utils.js"));
__export(__webpack_require__(/*! ./services/vg-controls-hidden */ "./node_modules/videogular2/src/core/services/vg-controls-hidden.js"));
// types
__export(__webpack_require__(/*! ./events/vg-events */ "./node_modules/videogular2/src/core/events/vg-events.js"));
__export(__webpack_require__(/*! ./states/vg-states */ "./node_modules/videogular2/src/core/states/vg-states.js"));
// utility classes
__export(__webpack_require__(/*! ./vg-media/vg-media-element */ "./node_modules/videogular2/src/core/vg-media/vg-media-element.js"));
/**
 * @internal
 */
function coreDirectives() {
    return [
        vg_player_1.VgPlayer, vg_media_1.VgMedia, vg_cue_points_1.VgCuePoints
    ];
}
exports.coreDirectives = coreDirectives;
function coreServices() {
    return [
        vg_api_1.VgAPI, vg_fullscreen_api_1.VgFullscreenAPI, vg_utils_1.VgUtils, vg_controls_hidden_1.VgControlsHidden
    ];
}
exports.coreServices = coreServices;
var VgCoreModule = /** @class */ (function () {
    function VgCoreModule() {
    }
    VgCoreModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: coreDirectives(),
                    exports: coreDirectives(),
                    providers: coreServices()
                },] },
    ];
    return VgCoreModule;
}());
exports.VgCoreModule = VgCoreModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzQ0FBbUQ7QUFDbkQsbURBQWlEO0FBQ2pELGdEQUE4QztBQUM5QywrREFBNEQ7QUFDNUQsNENBQTBDO0FBQzFDLGtFQUErRDtBQUMvRCxnREFBOEM7QUFDOUMsb0VBQWlFO0FBR2pFLGFBQWE7QUFDYiwyQ0FBc0M7QUFDdEMseUNBQW9DO0FBQ3BDLG1EQUE4QztBQUU5QyxXQUFXO0FBQ1gsdUNBQWtDO0FBQ2xDLGtEQUE2QztBQUM3Qyx5Q0FBb0M7QUFDcEMsbURBQThDO0FBRTlDLFFBQVE7QUFDUix3Q0FBbUM7QUFDbkMsd0NBQW1DO0FBS25DLGtCQUFrQjtBQUNsQixpREFBNEM7QUFXNUM7O0dBRUc7QUFDSDtJQUNJLE1BQU0sQ0FBQztRQUNILG9CQUFRLEVBQUUsa0JBQU8sRUFBRSwyQkFBVztLQUNqQyxDQUFDO0FBQ04sQ0FBQztBQUpELHdDQUlDO0FBRUQ7SUFDSSxNQUFNLENBQUM7UUFDSCxjQUFLLEVBQUUsbUNBQWUsRUFBRSxrQkFBTyxFQUFFLHFDQUFnQjtLQUNwRCxDQUFDO0FBQ04sQ0FBQztBQUpELG9DQUlDO0FBRUQ7SUFBQTtJQU1BLENBQUM7O2dCQU5BLGVBQVEsU0FBQztvQkFDTixZQUFZLEVBQUUsY0FBYyxFQUFFO29CQUM5QixPQUFPLEVBQUUsY0FBYyxFQUFFO29CQUN6QixTQUFTLEVBQUUsWUFBWSxFQUFFO2lCQUM1Qjs7SUFFRCxtQkFBQztDQUFBLEFBTkQsSUFNQztBQURZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZ1BsYXllciB9IGZyb20gJy4vdmctcGxheWVyL3ZnLXBsYXllcic7XG5pbXBvcnQgeyBWZ01lZGlhIH0gZnJvbSAnLi92Zy1tZWRpYS92Zy1tZWRpYSc7XG5pbXBvcnQgeyBWZ0N1ZVBvaW50cyB9IGZyb20gJy4vdmctY3VlLXBvaW50cy92Zy1jdWUtcG9pbnRzJztcbmltcG9ydCB7IFZnQVBJIH0gZnJvbSAnLi9zZXJ2aWNlcy92Zy1hcGknO1xuaW1wb3J0IHsgVmdGdWxsc2NyZWVuQVBJIH0gZnJvbSAnLi9zZXJ2aWNlcy92Zy1mdWxsc2NyZWVuLWFwaSc7XG5pbXBvcnQgeyBWZ1V0aWxzIH0gZnJvbSAnLi9zZXJ2aWNlcy92Zy11dGlscyc7XG5pbXBvcnQgeyBWZ0NvbnRyb2xzSGlkZGVuIH0gZnJvbSAnLi9zZXJ2aWNlcy92Zy1jb250cm9scy1oaWRkZW4nO1xuXG5cbi8vIGNvbXBvbmVudHNcbmV4cG9ydCAqIGZyb20gJy4vdmctcGxheWVyL3ZnLXBsYXllcic7XG5leHBvcnQgKiBmcm9tICcuL3ZnLW1lZGlhL3ZnLW1lZGlhJztcbmV4cG9ydCAqIGZyb20gJy4vdmctY3VlLXBvaW50cy92Zy1jdWUtcG9pbnRzJztcblxuLy8gc2VydmljZXNcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZXMvdmctYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZXMvdmctZnVsbHNjcmVlbi1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlcy92Zy11dGlscyc7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2VzL3ZnLWNvbnRyb2xzLWhpZGRlbic7XG5cbi8vIHR5cGVzXG5leHBvcnQgKiBmcm9tICcuL2V2ZW50cy92Zy1ldmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9zdGF0ZXMvdmctc3RhdGVzJztcblxuLy8gaW50ZXJmYWNlc1xuZXhwb3J0ICogZnJvbSAnLi92Zy1tZWRpYS9pLW1lZGlhLWVsZW1lbnQnO1xuXG4vLyB1dGlsaXR5IGNsYXNzZXNcbmV4cG9ydCAqIGZyb20gJy4vdmctbWVkaWEvdmctbWVkaWEtZWxlbWVudCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQml0cmF0ZU9wdGlvbiB7XG4gICAgcXVhbGl0eUluZGV4OiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICBiaXRyYXRlOiBudW1iZXI7XG4gICAgbWVkaWFUeXBlOiBzdHJpbmc7XG4gICAgbGFiZWw/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3JlRGlyZWN0aXZlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICBWZ1BsYXllciwgVmdNZWRpYSwgVmdDdWVQb2ludHNcbiAgICBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29yZVNlcnZpY2VzKCk6IFByb3ZpZGVyW10ge1xuICAgIHJldHVybiBbXG4gICAgICAgIFZnQVBJLCBWZ0Z1bGxzY3JlZW5BUEksIFZnVXRpbHMsIFZnQ29udHJvbHNIaWRkZW5cbiAgICBdO1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogY29yZURpcmVjdGl2ZXMoKSxcbiAgICBleHBvcnRzOiBjb3JlRGlyZWN0aXZlcygpLFxuICAgIHByb3ZpZGVyczogY29yZVNlcnZpY2VzKClcbn0pXG5leHBvcnQgY2xhc3MgVmdDb3JlTW9kdWxlIHtcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/core/events/vg-events.js":
/*!***************************************************************!*\
  !*** ./node_modules/videogular2/src/core/events/vg-events.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var VgEvents = /** @class */ (function () {
    function VgEvents() {
    }
    VgEvents.VG_ABORT = 'abort';
    VgEvents.VG_CAN_PLAY = 'canplay';
    VgEvents.VG_CAN_PLAY_THROUGH = 'canplaythrough';
    VgEvents.VG_DURATION_CHANGE = 'durationchange';
    VgEvents.VG_EMPTIED = 'emptied';
    VgEvents.VG_ENCRYPTED = 'encrypted';
    VgEvents.VG_ENDED = 'ended';
    VgEvents.VG_ERROR = 'error';
    VgEvents.VG_LOADED_DATA = 'loadeddata';
    VgEvents.VG_LOADED_METADATA = 'loadedmetadata';
    VgEvents.VG_LOAD_START = 'loadstart';
    VgEvents.VG_PAUSE = 'pause';
    VgEvents.VG_PLAY = 'play';
    VgEvents.VG_PLAYING = 'playing';
    VgEvents.VG_PROGRESS = 'progress';
    VgEvents.VG_RATE_CHANGE = 'ratechange';
    VgEvents.VG_SEEK = 'seek';
    VgEvents.VG_SEEKED = 'seeked';
    VgEvents.VG_SEEKING = 'seeking';
    VgEvents.VG_STALLED = 'stalled';
    VgEvents.VG_SUSPEND = 'suspend';
    VgEvents.VG_TIME_UPDATE = 'timeupdate';
    VgEvents.VG_VOLUME_CHANGE = 'volumechange';
    VgEvents.VG_WAITING = 'waiting';
    VgEvents.VG_LOAD = 'load';
    VgEvents.VG_ENTER = 'enter';
    VgEvents.VG_EXIT = 'exit';
    VgEvents.VG_START_ADS = 'startads';
    VgEvents.VG_END_ADS = 'endads';
    VgEvents.decorators = [
        { type: core_1.Injectable },
    ];
    return VgEvents;
}());
exports.VgEvents = VgEvents;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctZXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDO0lBQUE7SUFpQ0EsQ0FBQztJQS9CVSxpQkFBUSxHQUFXLE9BQU8sQ0FBQztJQUMzQixvQkFBVyxHQUFXLFNBQVMsQ0FBQztJQUNoQyw0QkFBbUIsR0FBVyxnQkFBZ0IsQ0FBQztJQUMvQywyQkFBa0IsR0FBVyxnQkFBZ0IsQ0FBQztJQUM5QyxtQkFBVSxHQUFXLFNBQVMsQ0FBQztJQUMvQixxQkFBWSxHQUFXLFdBQVcsQ0FBQztJQUNuQyxpQkFBUSxHQUFXLE9BQU8sQ0FBQztJQUMzQixpQkFBUSxHQUFXLE9BQU8sQ0FBQztJQUMzQix1QkFBYyxHQUFXLFlBQVksQ0FBQztJQUN0QywyQkFBa0IsR0FBVyxnQkFBZ0IsQ0FBQztJQUM5QyxzQkFBYSxHQUFXLFdBQVcsQ0FBQztJQUNwQyxpQkFBUSxHQUFXLE9BQU8sQ0FBQztJQUMzQixnQkFBTyxHQUFXLE1BQU0sQ0FBQztJQUN6QixtQkFBVSxHQUFXLFNBQVMsQ0FBQztJQUMvQixvQkFBVyxHQUFXLFVBQVUsQ0FBQztJQUNqQyx1QkFBYyxHQUFXLFlBQVksQ0FBQztJQUN0QyxnQkFBTyxHQUFXLE1BQU0sQ0FBQztJQUN6QixrQkFBUyxHQUFXLFFBQVEsQ0FBQztJQUM3QixtQkFBVSxHQUFXLFNBQVMsQ0FBQztJQUMvQixtQkFBVSxHQUFXLFNBQVMsQ0FBQztJQUMvQixtQkFBVSxHQUFXLFNBQVMsQ0FBQztJQUMvQix1QkFBYyxHQUFXLFlBQVksQ0FBQztJQUN0Qyx5QkFBZ0IsR0FBVyxjQUFjLENBQUM7SUFDMUMsbUJBQVUsR0FBVyxTQUFTLENBQUM7SUFFL0IsZ0JBQU8sR0FBVyxNQUFNLENBQUM7SUFDekIsaUJBQVEsR0FBVyxPQUFPLENBQUM7SUFDM0IsZ0JBQU8sR0FBVyxNQUFNLENBQUM7SUFFekIscUJBQVksR0FBVyxVQUFVLENBQUM7SUFDbEMsbUJBQVUsR0FBVyxRQUFRLENBQUM7O2dCQWhDeEMsaUJBQVU7O0lBaUNYLGVBQUM7Q0FBQSxBQWpDRCxJQWlDQztBQWhDWSw0QkFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZ0V2ZW50cyB7XG4gICAgc3RhdGljIFZHX0FCT1JUOiBzdHJpbmcgPSAnYWJvcnQnO1xuICAgIHN0YXRpYyBWR19DQU5fUExBWTogc3RyaW5nID0gJ2NhbnBsYXknO1xuICAgIHN0YXRpYyBWR19DQU5fUExBWV9USFJPVUdIOiBzdHJpbmcgPSAnY2FucGxheXRocm91Z2gnO1xuICAgIHN0YXRpYyBWR19EVVJBVElPTl9DSEFOR0U6IHN0cmluZyA9ICdkdXJhdGlvbmNoYW5nZSc7XG4gICAgc3RhdGljIFZHX0VNUFRJRUQ6IHN0cmluZyA9ICdlbXB0aWVkJztcbiAgICBzdGF0aWMgVkdfRU5DUllQVEVEOiBzdHJpbmcgPSAnZW5jcnlwdGVkJztcbiAgICBzdGF0aWMgVkdfRU5ERUQ6IHN0cmluZyA9ICdlbmRlZCc7XG4gICAgc3RhdGljIFZHX0VSUk9SOiBzdHJpbmcgPSAnZXJyb3InO1xuICAgIHN0YXRpYyBWR19MT0FERURfREFUQTogc3RyaW5nID0gJ2xvYWRlZGRhdGEnO1xuICAgIHN0YXRpYyBWR19MT0FERURfTUVUQURBVEE6IHN0cmluZyA9ICdsb2FkZWRtZXRhZGF0YSc7XG4gICAgc3RhdGljIFZHX0xPQURfU1RBUlQ6IHN0cmluZyA9ICdsb2Fkc3RhcnQnO1xuICAgIHN0YXRpYyBWR19QQVVTRTogc3RyaW5nID0gJ3BhdXNlJztcbiAgICBzdGF0aWMgVkdfUExBWTogc3RyaW5nID0gJ3BsYXknO1xuICAgIHN0YXRpYyBWR19QTEFZSU5HOiBzdHJpbmcgPSAncGxheWluZyc7XG4gICAgc3RhdGljIFZHX1BST0dSRVNTOiBzdHJpbmcgPSAncHJvZ3Jlc3MnO1xuICAgIHN0YXRpYyBWR19SQVRFX0NIQU5HRTogc3RyaW5nID0gJ3JhdGVjaGFuZ2UnO1xuICAgIHN0YXRpYyBWR19TRUVLOiBzdHJpbmcgPSAnc2Vlayc7XG4gICAgc3RhdGljIFZHX1NFRUtFRDogc3RyaW5nID0gJ3NlZWtlZCc7XG4gICAgc3RhdGljIFZHX1NFRUtJTkc6IHN0cmluZyA9ICdzZWVraW5nJztcbiAgICBzdGF0aWMgVkdfU1RBTExFRDogc3RyaW5nID0gJ3N0YWxsZWQnO1xuICAgIHN0YXRpYyBWR19TVVNQRU5EOiBzdHJpbmcgPSAnc3VzcGVuZCc7XG4gICAgc3RhdGljIFZHX1RJTUVfVVBEQVRFOiBzdHJpbmcgPSAndGltZXVwZGF0ZSc7XG4gICAgc3RhdGljIFZHX1ZPTFVNRV9DSEFOR0U6IHN0cmluZyA9ICd2b2x1bWVjaGFuZ2UnO1xuICAgIHN0YXRpYyBWR19XQUlUSU5HOiBzdHJpbmcgPSAnd2FpdGluZyc7XG4gICAgXG4gICAgc3RhdGljIFZHX0xPQUQ6IHN0cmluZyA9ICdsb2FkJztcbiAgICBzdGF0aWMgVkdfRU5URVI6IHN0cmluZyA9ICdlbnRlcic7XG4gICAgc3RhdGljIFZHX0VYSVQ6IHN0cmluZyA9ICdleGl0JztcblxuICAgIHN0YXRpYyBWR19TVEFSVF9BRFM6IHN0cmluZyA9ICdzdGFydGFkcyc7XG4gICAgc3RhdGljIFZHX0VORF9BRFM6IHN0cmluZyA9ICdlbmRhZHMnO1xufVxuIl19

/***/ }),

/***/ "./node_modules/videogular2/src/core/services/vg-api.js":
/*!**************************************************************!*\
  !*** ./node_modules/videogular2/src/core/services/vg-api.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_states_1 = __webpack_require__(/*! ../states/vg-states */ "./node_modules/videogular2/src/core/states/vg-states.js");
var VgAPI = /** @class */ (function () {
    function VgAPI() {
        this.medias = {}; // TODO: refactor to Set<IPlayable> 
        this.playerReadyEvent = new core_1.EventEmitter(true);
        this.isPlayerReady = false;
    }
    VgAPI.prototype.onPlayerReady = function (fsAPI) {
        this.fsAPI = fsAPI;
        this.isPlayerReady = true;
        this.playerReadyEvent.emit(this);
    };
    VgAPI.prototype.getDefaultMedia = function () {
        for (var item in this.medias) {
            if (this.medias[item]) {
                return this.medias[item];
            }
        }
    };
    VgAPI.prototype.getMasterMedia = function () {
        var master;
        for (var id in this.medias) {
            if (this.medias[id].vgMaster === 'true' || this.medias[id].vgMaster === true) {
                master = this.medias[id];
                break;
            }
        }
        return master || this.getDefaultMedia();
    };
    VgAPI.prototype.isMasterDefined = function () {
        var result = false;
        for (var id in this.medias) {
            if (this.medias[id].vgMaster === 'true' || this.medias[id].vgMaster === true) {
                result = true;
                break;
            }
        }
        return result;
    };
    VgAPI.prototype.getMediaById = function (id) {
        if (id === void 0) { id = null; }
        var media = this.medias[id];
        if (!id || id === '*') {
            media = this;
        }
        return media;
    };
    VgAPI.prototype.play = function () {
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.medias[id].play();
            }
        }
    };
    VgAPI.prototype.pause = function () {
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.medias[id].pause();
            }
        }
    };
    Object.defineProperty(VgAPI.prototype, "duration", {
        get: function () {
            return this.$$getAllProperties('duration');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "currentTime", {
        get: function () {
            return this.$$getAllProperties('currentTime');
        },
        set: function (seconds) {
            this.$$setAllProperties('currentTime', seconds);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "state", {
        get: function () {
            return this.$$getAllProperties('state');
        },
        set: function (state) {
            this.$$setAllProperties('state', state);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "volume", {
        get: function () {
            return this.$$getAllProperties('volume');
        },
        set: function (volume) {
            this.$$setAllProperties('volume', volume);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "playbackRate", {
        get: function () {
            return this.$$getAllProperties('playbackRate');
        },
        set: function (rate) {
            this.$$setAllProperties('playbackRate', rate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "canPlay", {
        get: function () {
            return this.$$getAllProperties('canPlay');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "canPlayThrough", {
        get: function () {
            return this.$$getAllProperties('canPlayThrough');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isMetadataLoaded", {
        get: function () {
            return this.$$getAllProperties('isMetadataLoaded');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isWaiting", {
        get: function () {
            return this.$$getAllProperties('isWaiting');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isCompleted", {
        get: function () {
            return this.$$getAllProperties('isCompleted');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isLive", {
        get: function () {
            return this.$$getAllProperties('isLive');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isMaster", {
        get: function () {
            return this.$$getAllProperties('isMaster');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "time", {
        get: function () {
            return this.$$getAllProperties('time');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "buffer", {
        get: function () {
            return this.$$getAllProperties('buffer');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "buffered", {
        get: function () {
            return this.$$getAllProperties('buffered');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "subscriptions", {
        get: function () {
            return this.$$getAllProperties('subscriptions');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "textTracks", {
        get: function () {
            return this.$$getAllProperties('textTracks');
        },
        enumerable: true,
        configurable: true
    });
    VgAPI.prototype.seekTime = function (value, byPercent) {
        if (byPercent === void 0) { byPercent = false; }
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.$$seek(this.medias[id], value, byPercent);
            }
        }
    };
    VgAPI.prototype.$$seek = function (media, value, byPercent) {
        if (byPercent === void 0) { byPercent = false; }
        var second;
        var duration = media.duration;
        if (byPercent) {
            if (this.isMasterDefined()) {
                duration = this.getMasterMedia().duration;
            }
            second = value * duration / 100;
        }
        else {
            second = value;
        }
        media.currentTime = second;
    };
    VgAPI.prototype.addTextTrack = function (type, label, language) {
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.$$addTextTrack(this.medias[id], type, label, language);
            }
        }
    };
    VgAPI.prototype.$$addTextTrack = function (media, type, label, language) {
        media.addTextTrack(type, label, language);
    };
    VgAPI.prototype.$$getAllProperties = function (property) {
        var medias = {};
        var result;
        for (var id in this.medias) {
            if (this.medias[id]) {
                medias[id] = this.medias[id];
            }
        }
        var nMedias = Object.keys(medias).length;
        switch (nMedias) {
            case 0:
                // Return default values until vgMedia is initialized
                switch (property) {
                    case 'state':
                        result = vg_states_1.VgStates.VG_PAUSED;
                        break;
                    case 'playbackRate':
                    case 'volume':
                        result = 1;
                        break;
                    case 'time':
                        result = { current: 0, total: 0, left: 0 };
                        break;
                }
                break;
            case 1:
                // If there's only one media element then return the plain value
                var firstMediaId = Object.keys(medias)[0];
                result = medias[firstMediaId][property];
                break;
            default:
                // TODO: return 'master' value
                var master = this.getMasterMedia();
                result = medias[master.id][property];
        }
        return result;
    };
    VgAPI.prototype.$$setAllProperties = function (property, value) {
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.medias[id][property] = value;
            }
        }
    };
    VgAPI.prototype.registerElement = function (elem) {
        this.videogularElement = elem;
    };
    VgAPI.prototype.registerMedia = function (media) {
        this.medias[media.id] = media;
    };
    VgAPI.prototype.unregisterMedia = function (media) {
        delete this.medias[media.id];
    };
    VgAPI.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    VgAPI.ctorParameters = function () { return []; };
    return VgAPI;
}());
exports.VgAPI = VgAPI;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVEO0FBRXZELGlEQUE2QztBQUc3QztJQVFJO1FBTkEsV0FBTSxHQUFVLEVBQUUsQ0FBQyxDQUFBLG9DQUFvQztRQUV2RCxxQkFBZ0IsR0FBc0IsSUFBSSxtQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdELGtCQUFhLEdBQVksS0FBSyxDQUFDO0lBSy9CLENBQUM7SUFFRCw2QkFBYSxHQUFiLFVBQWMsS0FBc0I7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsK0JBQWUsR0FBZjtRQUNJLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFRCw4QkFBYyxHQUFkO1FBQ0ksSUFBSSxNQUFVLENBQUM7UUFDZixHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN6QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDM0Us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TUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxrQ0FBa0IsR0FBbEIsVUFBbUIsUUFBZSxFQUFFLEtBQVM7UUFDekMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUUsRUFBRSxDQUFFLENBQUUsUUFBUSxDQUFFLEdBQUcsS0FBSyxDQUFDO1lBQzFDLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVELCtCQUFlLEdBQWYsVUFBZ0IsSUFBZ0I7UUFDNUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRUQsNkJBQWEsR0FBYixVQUFjLEtBQWU7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFFRCwrQkFBZSxHQUFmLFVBQWdCLEtBQWU7UUFDM0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFsUUosaUJBQVU7Ozs7SUFxUVgsWUFBQztDQUFBLEFBclFELElBcVFDO0FBcFFZLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJUGxheWFibGV9IGZyb20gXCIuLi92Zy1tZWRpYS9pLXBsYXlhYmxlXCI7XG5pbXBvcnQge1ZnU3RhdGVzfSBmcm9tIFwiLi4vc3RhdGVzL3ZnLXN0YXRlc1wiO1xuaW1wb3J0IHsgVmdGdWxsc2NyZWVuQVBJIH0gZnJvbSAnLi92Zy1mdWxsc2NyZWVuLWFwaSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZ0FQSSB7XG4gICAgbWVkaWFzOk9iamVjdCA9IHt9Oy8vIFRPRE86IHJlZmFjdG9yIHRvIFNldDxJUGxheWFibGU+IFxuICAgIHZpZGVvZ3VsYXJFbGVtZW50OiBhbnk7XG4gICAgcGxheWVyUmVhZHlFdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgIGlzUGxheWVyUmVhZHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBmc0FQSTogVmdGdWxsc2NyZWVuQVBJO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBvblBsYXllclJlYWR5KGZzQVBJOiBWZ0Z1bGxzY3JlZW5BUEkpIHtcbiAgICAgICAgdGhpcy5mc0FQSSA9IGZzQVBJO1xuICAgICAgICB0aGlzLmlzUGxheWVyUmVhZHkgPSB0cnVlO1xuICAgICAgICB0aGlzLnBsYXllclJlYWR5RXZlbnQuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0TWVkaWEoKTpJUGxheWFibGUge1xuICAgICAgICBmb3IgKGxldCBpdGVtIGluIHRoaXMubWVkaWFzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZWRpYXNbaXRlbV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tZWRpYXNbaXRlbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNYXN0ZXJNZWRpYSgpOklQbGF5YWJsZSB7XG4gICAgICAgIGxldCBtYXN0ZXI6YW55O1xuICAgICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLm1lZGlhcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubWVkaWFzW2lkXS52Z01hc3RlciA9PT0gJ3RydWUnIHx8IHRoaXMubWVkaWFzW2lkXS52Z01hc3RlciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIG1hc3RlciA9IHRoaXMubWVkaWFzW2lkXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFzdGVyIHx8IHRoaXMuZ2V0RGVmYXVsdE1lZGlhKCk7XG4gICAgfVxuXG4gICAgaXNNYXN0ZXJEZWZpbmVkKCk6Ym9vbGVhbiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaWQgaW4gdGhpcy5tZWRpYXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1lZGlhc1tpZF0udmdNYXN0ZXIgPT09ICd0cnVlJyB8fCB0aGlzLm1lZGlhc1tpZF0udmdNYXN0ZXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2V0TWVkaWFCeUlkKGlkOnN0cmluZyA9IG51bGwpOklQbGF5YWJsZSB7XG4gICAgICAgIGxldCBtZWRpYSA9IHRoaXMubWVkaWFzW2lkXTtcblxuICAgICAgICBpZiAoIWlkIHx8IGlkID09PSAnKicpIHtcbiAgICAgICAgICAgIG1lZGlhID0gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtZWRpYTtcbiAgICB9XG5cbiAgICBwbGF5KCkge1xuICAgICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLm1lZGlhcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubWVkaWFzW2lkXSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVkaWFzWyBpZCBdLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLm1lZGlhcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubWVkaWFzW2lkXSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVkaWFzW2lkXS5wYXVzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IGR1cmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ2R1cmF0aW9uJyk7XG4gICAgfVxuXG4gICAgc2V0IGN1cnJlbnRUaW1lKHNlY29uZHMpIHtcbiAgICAgICAgdGhpcy4kJHNldEFsbFByb3BlcnRpZXMoJ2N1cnJlbnRUaW1lJywgc2Vjb25kcyk7XG4gICAgfVxuXG4gICAgZ2V0IGN1cnJlbnRUaW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ2N1cnJlbnRUaW1lJyk7XG4gICAgfVxuXG4gICAgc2V0IHN0YXRlKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuJCRzZXRBbGxQcm9wZXJ0aWVzKCdzdGF0ZScsIHN0YXRlKTtcbiAgICB9XG5cbiAgICBnZXQgc3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnc3RhdGUnKTtcbiAgICB9XG5cbiAgICBzZXQgdm9sdW1lKHZvbHVtZSkge1xuICAgICAgICB0aGlzLiQkc2V0QWxsUHJvcGVydGllcygndm9sdW1lJywgdm9sdW1lKTtcbiAgICB9XG5cbiAgICBnZXQgdm9sdW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ3ZvbHVtZScpO1xuICAgIH1cblxuICAgIHNldCBwbGF5YmFja1JhdGUocmF0ZSkge1xuICAgICAgICB0aGlzLiQkc2V0QWxsUHJvcGVydGllcygncGxheWJhY2tSYXRlJywgcmF0ZSk7XG4gICAgfVxuXG4gICAgZ2V0IHBsYXliYWNrUmF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdwbGF5YmFja1JhdGUnKTtcbiAgICB9XG5cbiAgICBnZXQgY2FuUGxheSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdjYW5QbGF5Jyk7XG4gICAgfVxuXG4gICAgZ2V0IGNhblBsYXlUaHJvdWdoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ2NhblBsYXlUaHJvdWdoJyk7XG4gICAgfVxuXG4gICAgZ2V0IGlzTWV0YWRhdGFMb2FkZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnaXNNZXRhZGF0YUxvYWRlZCcpO1xuICAgIH1cblxuICAgIGdldCBpc1dhaXRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnaXNXYWl0aW5nJyk7XG4gICAgfVxuXG4gICAgZ2V0IGlzQ29tcGxldGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ2lzQ29tcGxldGVkJyk7XG4gICAgfVxuXG4gICAgZ2V0IGlzTGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdpc0xpdmUnKTtcbiAgICB9XG5cbiAgICBnZXQgaXNNYXN0ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnaXNNYXN0ZXInKTtcbiAgICB9XG5cbiAgICBnZXQgdGltZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCd0aW1lJyk7XG4gICAgfVxuXG4gICAgZ2V0IGJ1ZmZlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdidWZmZXInKTtcbiAgICB9XG5cbiAgICBnZXQgYnVmZmVyZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnYnVmZmVyZWQnKTtcbiAgICB9XG5cbiAgICBnZXQgc3Vic2NyaXB0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdzdWJzY3JpcHRpb25zJyk7XG4gICAgfVxuXG4gICAgZ2V0IHRleHRUcmFja3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygndGV4dFRyYWNrcycpO1xuICAgIH1cblxuICAgIHNlZWtUaW1lKHZhbHVlOm51bWJlciwgYnlQZXJjZW50OmJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLm1lZGlhcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubWVkaWFzW2lkXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJCRzZWVrKHRoaXMubWVkaWFzWyBpZCBdLCB2YWx1ZSwgYnlQZXJjZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICQkc2VlayhtZWRpYTpJUGxheWFibGUsIHZhbHVlOm51bWJlciwgYnlQZXJjZW50OmJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgc2Vjb25kOm51bWJlcjtcbiAgICAgICAgbGV0IGR1cmF0aW9uOm51bWJlciA9IG1lZGlhLmR1cmF0aW9uO1xuXG4gICAgICAgIGlmIChieVBlcmNlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTWFzdGVyRGVmaW5lZCgpKSB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb24gPSB0aGlzLmdldE1hc3Rlck1lZGlhKCkuZHVyYXRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlY29uZCA9IHZhbHVlICogZHVyYXRpb24gLyAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWNvbmQgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lZGlhLmN1cnJlbnRUaW1lID0gc2Vjb25kO1xuICAgIH1cblxuICAgIGFkZFRleHRUcmFjayh0eXBlOnN0cmluZywgbGFiZWw/OnN0cmluZywgbGFuZ3VhZ2U/OnN0cmluZykge1xuICAgICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLm1lZGlhcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubWVkaWFzW2lkXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJCRhZGRUZXh0VHJhY2sodGhpcy5tZWRpYXNbIGlkIF0sIHR5cGUsIGxhYmVsLCBsYW5ndWFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgJCRhZGRUZXh0VHJhY2sobWVkaWE6SVBsYXlhYmxlLCB0eXBlOnN0cmluZywgbGFiZWw/OnN0cmluZywgbGFuZ3VhZ2U/OnN0cmluZykge1xuICAgICAgICBtZWRpYS5hZGRUZXh0VHJhY2sodHlwZSwgbGFiZWwsIGxhbmd1YWdlKTtcbiAgICB9XG5cbiAgICAkJGdldEFsbFByb3BlcnRpZXMocHJvcGVydHk6c3RyaW5nKXtcbiAgICAgICAgY29uc3QgbWVkaWFzID0ge307XG4gICAgICAgIGxldCByZXN1bHQ6YW55O1xuXG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubWVkaWFzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZWRpYXNbaWRdKSB7XG4gICAgICAgICAgICAgICAgbWVkaWFzWyBpZCBdID0gdGhpcy5tZWRpYXNbIGlkIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuTWVkaWFzID0gT2JqZWN0LmtleXMobWVkaWFzKS5sZW5ndGg7XG4gICAgICAgIHN3aXRjaCAobk1lZGlhcykge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIC8vIFJldHVybiBkZWZhdWx0IHZhbHVlcyB1bnRpbCB2Z01lZGlhIGlzIGluaXRpYWxpemVkXG4gICAgICAgICAgICAgICAgc3dpdGNoIChwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBWZ1N0YXRlcy5WR19QQVVTRUQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlICdwbGF5YmFja1JhdGUnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICd2b2x1bWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RpbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0ge2N1cnJlbnQ6IDAsIHRvdGFsOiAwLCBsZWZ0OiAwfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgb25seSBvbmUgbWVkaWEgZWxlbWVudCB0aGVuIHJldHVybiB0aGUgcGxhaW4gdmFsdWVcbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdE1lZGlhSWQgPSBPYmplY3Qua2V5cyhtZWRpYXMpWzBdO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG1lZGlhc1tmaXJzdE1lZGlhSWRdW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogcmV0dXJuICdtYXN0ZXInIHZhbHVlXG4gICAgICAgICAgICAgICAgbGV0IG1hc3RlciA9IHRoaXMuZ2V0TWFzdGVyTWVkaWEoKTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBtZWRpYXNbbWFzdGVyLmlkXVtwcm9wZXJ0eV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgJCRzZXRBbGxQcm9wZXJ0aWVzKHByb3BlcnR5OnN0cmluZywgdmFsdWU6YW55KXtcbiAgICAgICAgZm9yIChsZXQgaWQgaW4gdGhpcy5tZWRpYXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1lZGlhc1tpZF0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lZGlhc1sgaWQgXVsgcHJvcGVydHkgXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJFbGVtZW50KGVsZW06SFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy52aWRlb2d1bGFyRWxlbWVudCA9IGVsZW07XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJNZWRpYShtZWRpYTpJUGxheWFibGUpIHtcbiAgICAgICAgdGhpcy5tZWRpYXNbbWVkaWEuaWRdID0gbWVkaWE7XG4gICAgfVxuXG4gICAgdW5yZWdpc3Rlck1lZGlhKG1lZGlhOklQbGF5YWJsZSkge1xuICAgICAgICBkZWxldGUgdGhpcy5tZWRpYXNbbWVkaWEuaWRdO1xuICAgIH1cblxuXG59XG4iXX0=

/***/ }),

/***/ "./node_modules/videogular2/src/core/services/vg-controls-hidden.js":
/*!**************************************************************************!*\
  !*** ./node_modules/videogular2/src/core/services/vg-controls-hidden.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var VgControlsHidden = /** @class */ (function () {
    function VgControlsHidden() {
        this.isHiddenSubject = new rxjs_1.Subject();
        this.isHidden = this.isHiddenSubject.asObservable();
    }
    VgControlsHidden.prototype.state = function (hidden) {
        this.isHiddenSubject.next(hidden);
    };
    VgControlsHidden.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    VgControlsHidden.ctorParameters = function () { return []; };
    return VgControlsHidden;
}());
exports.VgControlsHidden = VgControlsHidden;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctY29udHJvbHMtaGlkZGVuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctY29udHJvbHMtaGlkZGVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQTZDO0FBQzdDLHNDQUEyQztBQUUzQztJQU1JO1FBRlEsb0JBQWUsR0FBcUIsSUFBSSxjQUFPLEVBQVcsQ0FBQztRQUcvRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEQsQ0FBQztJQUVELGdDQUFLLEdBQUwsVUFBTSxNQUFlO1FBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O2dCQVpKLGlCQUFVOzs7O0lBYVgsdUJBQUM7Q0FBQSxBQWJELElBYUM7QUFaWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0ICwgIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZnQ29udHJvbHNIaWRkZW4ge1xuICAgIGlzSGlkZGVuOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gICAgcHJpdmF0ZSBpc0hpZGRlblN1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNIaWRkZW4gPSB0aGlzLmlzSGlkZGVuU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBzdGF0ZShoaWRkZW46IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5pc0hpZGRlblN1YmplY3QubmV4dChoaWRkZW4pO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/core/services/vg-fullscreen-api.js":
/*!*************************************************************************!*\
  !*** ./node_modules/videogular2/src/core/services/vg-fullscreen-api.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_utils_1 = __webpack_require__(/*! ./vg-utils */ "./node_modules/videogular2/src/core/services/vg-utils.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var VgFullscreenAPI = /** @class */ (function () {
    function VgFullscreenAPI() {
        this.nativeFullscreen = true;
        this.isFullscreen = false;
        this.onChangeFullscreen = new core_1.EventEmitter();
    }
    VgFullscreenAPI.prototype.init = function (elem, medias) {
        var _this = this;
        this.videogularElement = elem;
        this.medias = medias;
        var APIs = {
            w3: {
                enabled: 'fullscreenEnabled',
                element: 'fullscreenElement',
                request: 'requestFullscreen',
                exit: 'exitFullscreen',
                onchange: 'fullscreenchange',
                onerror: 'fullscreenerror'
            },
            newWebkit: {
                enabled: 'webkitFullscreenEnabled',
                element: 'webkitFullscreenElement',
                request: 'webkitRequestFullscreen',
                exit: 'webkitExitFullscreen',
                onchange: 'webkitfullscreenchange',
                onerror: 'webkitfullscreenerror'
            },
            oldWebkit: {
                enabled: 'webkitIsFullScreen',
                element: 'webkitCurrentFullScreenElement',
                request: 'webkitRequestFullScreen',
                exit: 'webkitCancelFullScreen',
                onchange: 'webkitfullscreenchange',
                onerror: 'webkitfullscreenerror'
            },
            moz: {
                enabled: 'mozFullScreen',
                element: 'mozFullScreenElement',
                request: 'mozRequestFullScreen',
                exit: 'mozCancelFullScreen',
                onchange: 'mozfullscreenchange',
                onerror: 'mozfullscreenerror'
            },
            ios: {
                enabled: 'webkitFullscreenEnabled',
                element: 'webkitFullscreenElement',
                request: 'webkitEnterFullscreen',
                exit: 'webkitExitFullscreen',
                onchange: 'webkitendfullscreen',
                onerror: 'webkitfullscreenerror'
            },
            ms: {
                enabled: 'msFullscreenEnabled',
                element: 'msFullscreenElement',
                request: 'msRequestFullscreen',
                exit: 'msExitFullscreen',
                onchange: 'MSFullscreenChange',
                onerror: 'MSFullscreenError'
            }
        };
        for (var browser in APIs) {
            if (APIs[browser].enabled in document) {
                this.polyfill = APIs[browser];
                break;
            }
        }
        if (vg_utils_1.VgUtils.isiOSDevice()) {
            this.polyfill = APIs.ios;
        }
        this.isAvailable = (this.polyfill != null);
        if (this.polyfill == null) {
            return;
        }
        var fsElemDispatcher;
        switch (this.polyfill.onchange) {
            // Mozilla dispatches the fullscreen change event from document, not the element
            // See: https://bugzilla.mozilla.org/show_bug.cgi?id=724816#c3
            case 'mozfullscreenchange':
                fsElemDispatcher = document;
                break;
            // iOS dispatches the fullscreen change event from video element
            case 'webkitendfullscreen':
                fsElemDispatcher = this.medias.toArray()[0].elem;
                break;
            // HTML5 implementation dispatches the fullscreen change event from the element
            default:
                fsElemDispatcher = elem;
        }
        this.fsChangeSubscription = rxjs_1.fromEvent(fsElemDispatcher, this.polyfill.onchange).subscribe(function () {
            _this.onFullscreenChange();
        });
    };
    VgFullscreenAPI.prototype.onFullscreenChange = function () {
        this.isFullscreen = !!document[this.polyfill.element];
        this.onChangeFullscreen.emit(this.isFullscreen);
    };
    VgFullscreenAPI.prototype.toggleFullscreen = function (element) {
        if (element === void 0) { element = null; }
        if (this.isFullscreen) {
            this.exit();
        }
        else {
            this.request(element);
        }
    };
    VgFullscreenAPI.prototype.request = function (elem) {
        if (!elem) {
            elem = this.videogularElement;
        }
        this.isFullscreen = true;
        this.onChangeFullscreen.emit(true);
        // Perform native full screen support
        if (this.isAvailable && this.nativeFullscreen) {
            // Fullscreen for mobile devices
            if (vg_utils_1.VgUtils.isMobileDevice()) {
                // We should make fullscreen the video object if it doesn't have native fullscreen support
                // Fallback! We can't set vg-player on fullscreen, only video/audio objects
                if ((!this.polyfill.enabled && elem === this.videogularElement) || vg_utils_1.VgUtils.isiOSDevice()) {
                    elem = this.medias.toArray()[0].elem;
                }
                this.enterElementInFullScreen(elem);
            }
            else {
                this.enterElementInFullScreen(this.videogularElement);
            }
        }
    };
    VgFullscreenAPI.prototype.enterElementInFullScreen = function (elem) {
        elem[this.polyfill.request]();
    };
    VgFullscreenAPI.prototype.exit = function () {
        this.isFullscreen = false;
        this.onChangeFullscreen.emit(false);
        // Exit from native fullscreen
        if (this.isAvailable && this.nativeFullscreen) {
            document[this.polyfill.exit]();
        }
    };
    VgFullscreenAPI.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    VgFullscreenAPI.ctorParameters = function () { return []; };
    return VgFullscreenAPI;
}());
exports.VgFullscreenAPI = VgFullscreenAPI;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctZnVsbHNjcmVlbi1hcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1mdWxsc2NyZWVuLWFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRTtBQUNwRSx1Q0FBcUM7QUFFckMsNkJBQTZEO0FBRTdEO0lBY0k7UUFUQSxxQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFDakMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFNOUIsdUJBQWtCLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO0lBRzNELENBQUM7SUFFRCw4QkFBSSxHQUFKLFVBQUssSUFBaUIsRUFBRSxNQUEwQjtRQUFsRCxpQkE4RkM7UUE3RkcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFNLElBQUksR0FBRztZQUNULEVBQUUsRUFBRTtnQkFDQSxPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixPQUFPLEVBQUUsaUJBQWlCO2FBQzdCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLE9BQU8sRUFBRSx5QkFBeUI7Z0JBQ2xDLE9BQU8sRUFBRSx5QkFBeUI7Z0JBQ2xDLE9BQU8sRUFBRSx5QkFBeUI7Z0JBQ2xDLElBQUksRUFBRSxzQkFBc0I7Z0JBQzVCLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLE9BQU8sRUFBRSx1QkFBdUI7YUFDbkM7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLG9CQUFvQjtnQkFDN0IsT0FBTyxFQUFFLGdDQUFnQztnQkFDekMsT0FBTyxFQUFFLHlCQUF5QjtnQkFDbEMsSUFBSSxFQUFFLHdCQUF3QjtnQkFDOUIsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsT0FBTyxFQUFFLHVC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eEIsVUFBeUIsSUFBUztRQUM5QixJQUFJLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUUsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVwQyw4QkFBOEI7UUFDOUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQzVDLFFBQVEsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBRSxFQUFFLENBQUM7UUFDckMsQ0FBQztJQUNMLENBQUM7O2dCQXJLSixpQkFBVTs7OztJQXNLWCxzQkFBQztDQUFBLEFBdEtELElBc0tDO0FBcktZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZnVXRpbHMgfSBmcm9tICcuL3ZnLXV0aWxzJztcbmltcG9ydCB7IFZnTWVkaWEgfSBmcm9tICcuLi92Zy1tZWRpYS92Zy1tZWRpYSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gLCAgT2JzZXJ2YWJsZSwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZ0Z1bGxzY3JlZW5BUEkge1xuICAgIHBvbHlmaWxsOiBhbnk7XG4gICAgb25jaGFuZ2U6IHN0cmluZztcbiAgICBvbmVycm9yOiBzdHJpbmc7XG4gICAgbmF0aXZlRnVsbHNjcmVlbjogYm9vbGVhbiA9IHRydWU7XG4gICAgaXNGdWxsc2NyZWVuOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNBdmFpbGFibGU6IGJvb2xlYW47XG4gICAgdmlkZW9ndWxhckVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIG1lZGlhczogUXVlcnlMaXN0PFZnTWVkaWE+O1xuXG4gICAgZnNDaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBvbkNoYW5nZUZ1bGxzY3JlZW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgaW5pdChlbGVtOiBIVE1MRWxlbWVudCwgbWVkaWFzOiBRdWVyeUxpc3Q8VmdNZWRpYT4pIHtcbiAgICAgICAgdGhpcy52aWRlb2d1bGFyRWxlbWVudCA9IGVsZW07XG4gICAgICAgIHRoaXMubWVkaWFzID0gbWVkaWFzO1xuXG4gICAgICAgIGNvbnN0IEFQSXMgPSB7XG4gICAgICAgICAgICB3Mzoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6ICdmdWxsc2NyZWVuRW5hYmxlZCcsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogJ2Z1bGxzY3JlZW5FbGVtZW50JyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiAncmVxdWVzdEZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgICAgIGV4aXQ6ICdleGl0RnVsbHNjcmVlbicsXG4gICAgICAgICAgICAgICAgb25jaGFuZ2U6ICdmdWxsc2NyZWVuY2hhbmdlJyxcbiAgICAgICAgICAgICAgICBvbmVycm9yOiAnZnVsbHNjcmVlbmVycm9yJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5ld1dlYmtpdDoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6ICd3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCcsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogJ3dlYmtpdEZ1bGxzY3JlZW5FbGVtZW50JyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiAnd2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgICAgIGV4aXQ6ICd3ZWJraXRFeGl0RnVsbHNjcmVlbicsXG4gICAgICAgICAgICAgICAgb25jaGFuZ2U6ICd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJyxcbiAgICAgICAgICAgICAgICBvbmVycm9yOiAnd2Via2l0ZnVsbHNjcmVlbmVycm9yJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9sZFdlYmtpdDoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6ICd3ZWJraXRJc0Z1bGxTY3JlZW4nLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICd3ZWJraXRDdXJyZW50RnVsbFNjcmVlbkVsZW1lbnQnLFxuICAgICAgICAgICAgICAgIHJlcXVlc3Q6ICd3ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbicsXG4gICAgICAgICAgICAgICAgZXhpdDogJ3dlYmtpdENhbmNlbEZ1bGxTY3JlZW4nLFxuICAgICAgICAgICAgICAgIG9uY2hhbmdlOiAnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsXG4gICAgICAgICAgICAgICAgb25lcnJvcjogJ3dlYmtpdGZ1bGxzY3JlZW5lcnJvcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3o6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiAnbW96RnVsbFNjcmVlbicsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogJ21vekZ1bGxTY3JlZW5FbGVtZW50JyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiAnbW96UmVxdWVzdEZ1bGxTY3JlZW4nLFxuICAgICAgICAgICAgICAgIGV4aXQ6ICdtb3pDYW5jZWxGdWxsU2NyZWVuJyxcbiAgICAgICAgICAgICAgICBvbmNoYW5nZTogJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICAgICAgICAgICAgIG9uZXJyb3I6ICdtb3pmdWxsc2NyZWVuZXJyb3InXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW9zOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogJ3dlYmtpdEZ1bGxzY3JlZW5FbmFibGVkJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50OiAnd2Via2l0RnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICAgICAgICAgICAgIHJlcXVlc3Q6ICd3ZWJraXRFbnRlckZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgICAgIGV4aXQ6ICd3ZWJraXRFeGl0RnVsbHNjcmVlbicsXG4gICAgICAgICAgICAgICAgb25jaGFuZ2U6ICd3ZWJraXRlbmRmdWxsc2NyZWVuJywgLy8gSGFjayBmb3IgaU9TOiB3ZWJraXRmdWxsc2NyZWVuY2hhbmdlIGl0J3Mgbm90IGZpcmluZ1xuICAgICAgICAgICAgICAgIG9uZXJyb3I6ICd3ZWJraXRmdWxsc2NyZWVuZXJyb3InXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbXM6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiAnbXNGdWxsc2NyZWVuRW5hYmxlZCcsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogJ21zRnVsbHNjcmVlbkVsZW1lbnQnLFxuICAgICAgICAgICAgICAgIHJlcXVlc3Q6ICdtc1JlcXVlc3RGdWxsc2NyZWVuJyxcbiAgICAgICAgICAgICAgICBleGl0OiAnbXNFeGl0RnVsbHNjcmVlbicsXG4gICAgICAgICAgICAgICAgb25jaGFuZ2U6ICdNU0Z1bGxzY3JlZW5DaGFuZ2UnLFxuICAgICAgICAgICAgICAgIG9uZXJyb3I6ICdNU0Z1bGxzY3JlZW5FcnJvcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGxldCBicm93c2VyIGluIEFQSXMpIHtcbiAgICAgICAgICAgIGlmIChBUElzWyBicm93c2VyIF0uZW5hYmxlZCBpbiBkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9seWZpbGwgPSBBUElzWyBicm93c2VyIF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVmdVdGlscy5pc2lPU0RldmljZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnBvbHlmaWxsID0gQVBJcy5pb3NcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNBdmFpbGFibGUgPSAodGhpcy5wb2x5ZmlsbCAhPSBudWxsKTtcblxuICAgICAgICBpZiAodGhpcy5wb2x5ZmlsbCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZnNFbGVtRGlzcGF0Y2hlcjtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMucG9seWZpbGwub25jaGFuZ2UpIHtcbiAgICAgICAgICAgIC8vIE1vemlsbGEgZGlzcGF0Y2hlcyB0aGUgZnVsbHNjcmVlbiBjaGFuZ2UgZXZlbnQgZnJvbSBkb2N1bWVudCwgbm90IHRoZSBlbGVtZW50XG4gICAgICAgICAgICAvLyBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTcyNDgxNiNjM1xuICAgICAgICAgICAgY2FzZSAnbW96ZnVsbHNjcmVlbmNoYW5nZSc6XG4gICAgICAgICAgICAgICAgZnNFbGVtRGlzcGF0Y2hlciA9IGRvY3VtZW50O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAvLyBpT1MgZGlzcGF0Y2hlcyB0aGUgZnVsbHNjcmVlbiBjaGFuZ2UgZXZlbnQgZnJvbSB2aWRlbyBlbGVtZW50XG4gICAgICAgICAgICBjYXNlICd3ZWJraXRlbmRmdWxsc2NyZWVuJzpcbiAgICAgICAgICAgICAgICBmc0VsZW1EaXNwYXRjaGVyID0gdGhpcy5tZWRpYXMudG9BcnJheSgpWyAwIF0uZWxlbTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gSFRNTDUgaW1wbGVtZW50YXRpb24gZGlzcGF0Y2hlcyB0aGUgZnVsbHNjcmVlbiBjaGFuZ2UgZXZlbnQgZnJvbSB0aGUgZWxlbWVudFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBmc0VsZW1EaXNwYXRjaGVyID0gZWxlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZnNDaGFuZ2VTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQoZnNFbGVtRGlzcGF0Y2hlciwgdGhpcy5wb2x5ZmlsbC5vbmNoYW5nZSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25GdWxsc2NyZWVuQ2hhbmdlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRnVsbHNjcmVlbkNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5pc0Z1bGxzY3JlZW4gPSAhIWRvY3VtZW50WyB0aGlzLnBvbHlmaWxsLmVsZW1lbnQgXTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUZ1bGxzY3JlZW4uZW1pdCh0aGlzLmlzRnVsbHNjcmVlbik7XG4gICAgfVxuXG4gICAgdG9nZ2xlRnVsbHNjcmVlbihlbGVtZW50OiBhbnkgPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnVsbHNjcmVlbikge1xuICAgICAgICAgICAgdGhpcy5leGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXF1ZXN0KGVsZW06IGFueSkge1xuICAgICAgICBpZiAoIWVsZW0pIHtcbiAgICAgICAgICAgIGVsZW0gPSB0aGlzLnZpZGVvZ3VsYXJFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc0Z1bGxzY3JlZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlRnVsbHNjcmVlbi5lbWl0KHRydWUpO1xuXG4gICAgICAgIC8vIFBlcmZvcm0gbmF0aXZlIGZ1bGwgc2NyZWVuIHN1cHBvcnRcbiAgICAgICAgaWYgKHRoaXMuaXNBdmFpbGFibGUgJiYgdGhpcy5uYXRpdmVGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICAvLyBGdWxsc2NyZWVuIGZvciBtb2JpbGUgZGV2aWNlc1xuICAgICAgICAgICAgaWYgKFZnVXRpbHMuaXNNb2JpbGVEZXZpY2UoKSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIHNob3VsZCBtYWtlIGZ1bGxzY3JlZW4gdGhlIHZpZGVvIG9iamVjdCBpZiBpdCBkb2Vzbid0IGhhdmUgbmF0aXZlIGZ1bGxzY3JlZW4gc3VwcG9ydFxuICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrISBXZSBjYW4ndCBzZXQgdmctcGxheWVyIG9uIGZ1bGxzY3JlZW4sIG9ubHkgdmlkZW8vYXVkaW8gb2JqZWN0c1xuICAgICAgICAgICAgICAgIGlmICgoIXRoaXMucG9seWZpbGwuZW5hYmxlZCAmJiBlbGVtID09PSB0aGlzLnZpZGVvZ3VsYXJFbGVtZW50KSB8fCBWZ1V0aWxzLmlzaU9TRGV2aWNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbSA9IHRoaXMubWVkaWFzLnRvQXJyYXkoKVsgMCBdLmVsZW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5lbnRlckVsZW1lbnRJbkZ1bGxTY3JlZW4oZWxlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGVyRWxlbWVudEluRnVsbFNjcmVlbih0aGlzLnZpZGVvZ3VsYXJFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVudGVyRWxlbWVudEluRnVsbFNjcmVlbihlbGVtOiBhbnkpIHtcbiAgICAgICAgZWxlbVsgdGhpcy5wb2x5ZmlsbC5yZXF1ZXN0IF0oKTtcbiAgICB9XG5cbiAgICBleGl0KCkge1xuICAgICAgICB0aGlzLmlzRnVsbHNjcmVlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlRnVsbHNjcmVlbi5lbWl0KGZhbHNlKTtcblxuICAgICAgICAvLyBFeGl0IGZyb20gbmF0aXZlIGZ1bGxzY3JlZW5cbiAgICAgICAgaWYgKHRoaXMuaXNBdmFpbGFibGUgJiYgdGhpcy5uYXRpdmVGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICBkb2N1bWVudFsgdGhpcy5wb2x5ZmlsbC5leGl0IF0oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/core/services/vg-utils.js":
/*!****************************************************************!*\
  !*** ./node_modules/videogular2/src/core/services/vg-utils.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var VgUtils = /** @class */ (function () {
    function VgUtils() {
    }
    /**
     * Inspired by Paul Irish
     * https://gist.github.com/paulirish/211209
     * @returns {number}
     */
    VgUtils.getZIndex = function () {
        var zIndex = 1;
        var elementZIndex;
        var tags = document.getElementsByTagName('*');
        for (var i = 0, l = tags.length; i < l; i++) {
            elementZIndex = parseInt(window.getComputedStyle(tags[i])["z-index"], 10);
            if (elementZIndex > zIndex) {
                zIndex = elementZIndex + 1;
            }
        }
        return zIndex;
    };
    // Very simple mobile detection, not 100% reliable
    VgUtils.isMobileDevice = function () {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf("IEMobile") !== -1);
    };
    ;
    VgUtils.isiOSDevice = function () {
        return (navigator.userAgent.match(/ip(hone|ad|od)/i) && !navigator.userAgent.match(/(iemobile)[\/\s]?([\w\.]*)/i));
    };
    ;
    VgUtils.isCordova = function () {
        return document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
    };
    ;
    VgUtils.decorators = [
        { type: core_1.Injectable },
    ];
    return VgUtils;
}());
exports.VgUtils = VgUtils;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QztJQUFBO0lBb0NBLENBQUM7SUFsQ0c7Ozs7T0FJRztJQUNJLGlCQUFTLEdBQWhCO1FBQ0ksSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxhQUFvQixDQUFDO1FBRXpCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU5QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzFDLGFBQWEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRTFFLEVBQUUsQ0FBQyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixNQUFNLEdBQUcsYUFBYSxHQUFHLENBQUMsQ0FBQztZQUMvQixDQUFDO1FBQ0wsQ0FBQztRQUVELE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELGtEQUFrRDtJQUMzQyxzQkFBYyxHQUFyQjtRQUNJLE1BQU0sQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0csQ0FBQztJQUFBLENBQUM7SUFFSyxtQkFBVyxHQUFsQjtRQUNJLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7SUFDdkgsQ0FBQztJQUFBLENBQUM7SUFFSyxpQkFBUyxHQUFoQjtRQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBQUEsQ0FBQzs7Z0JBbkNMLGlCQUFVOztJQW9DWCxjQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7QUFuQ1ksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmdVdGlscyB7XG4gICAgLyoqXG4gICAgICogSW5zcGlyZWQgYnkgUGF1bCBJcmlzaFxuICAgICAqIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhdWxpcmlzaC8yMTEyMDlcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRaSW5kZXgoKTpudW1iZXIge1xuICAgICAgICBsZXQgekluZGV4ID0gMTtcbiAgICAgICAgbGV0IGVsZW1lbnRaSW5kZXg6bnVtYmVyO1xuXG4gICAgICAgIGxldCB0YWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRhZ3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBlbGVtZW50WkluZGV4ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFnc1tpXSlbXCJ6LWluZGV4XCJdLCAxMCk7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50WkluZGV4ID4gekluZGV4KSB7XG4gICAgICAgICAgICAgICAgekluZGV4ID0gZWxlbWVudFpJbmRleCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gekluZGV4O1xuICAgIH1cblxuICAgIC8vIFZlcnkgc2ltcGxlIG1vYmlsZSBkZXRlY3Rpb24sIG5vdCAxMDAlIHJlbGlhYmxlXG4gICAgc3RhdGljIGlzTW9iaWxlRGV2aWNlKCkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiB3aW5kb3cub3JpZW50YXRpb24gIT09IFwidW5kZWZpbmVkXCIpIHx8IChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJJRU1vYmlsZVwiKSAhPT0gLTEpO1xuICAgIH07XG5cbiAgICBzdGF0aWMgaXNpT1NEZXZpY2UoKSB7XG4gICAgICAgIHJldHVybiAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaXAoaG9uZXxhZHxvZCkvaSkgJiYgIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpZW1vYmlsZSlbXFwvXFxzXT8oW1xcd1xcLl0qKS9pKSk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBpc0NvcmRvdmEoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5VUkwuaW5kZXhPZignaHR0cDovLycpID09PSAtMSAmJiBkb2N1bWVudC5VUkwuaW5kZXhPZignaHR0cHM6Ly8nKSA9PT0gLTE7XG4gICAgfTtcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/core/states/vg-states.js":
/*!***************************************************************!*\
  !*** ./node_modules/videogular2/src/core/states/vg-states.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var VgStates = /** @class */ (function () {
    function VgStates() {
    }
    VgStates.VG_ENDED = 'ended';
    VgStates.VG_PAUSED = 'paused';
    VgStates.VG_PLAYING = 'playing';
    VgStates.VG_LOADING = 'waiting';
    VgStates.decorators = [
        { type: core_1.Injectable },
    ];
    return VgStates;
}());
exports.VgStates = VgStates;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctc3RhdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctc3RhdGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDO0lBQUE7SUFNQSxDQUFDO0lBSlUsaUJBQVEsR0FBVyxPQUFPLENBQUM7SUFDM0Isa0JBQVMsR0FBVyxRQUFRLENBQUM7SUFDN0IsbUJBQVUsR0FBVyxTQUFTLENBQUM7SUFDL0IsbUJBQVUsR0FBVyxTQUFTLENBQUM7O2dCQUx6QyxpQkFBVTs7SUFNWCxlQUFDO0NBQUEsQUFORCxJQU1DO0FBTFksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmdTdGF0ZXMge1xuICAgIHN0YXRpYyBWR19FTkRFRDogc3RyaW5nID0gJ2VuZGVkJztcbiAgICBzdGF0aWMgVkdfUEFVU0VEOiBzdHJpbmcgPSAncGF1c2VkJztcbiAgICBzdGF0aWMgVkdfUExBWUlORzogc3RyaW5nID0gJ3BsYXlpbmcnO1xuICAgIHN0YXRpYyBWR19MT0FESU5HOiBzdHJpbmcgPSAnd2FpdGluZyc7XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/videogular2/src/core/vg-cue-points/vg-cue-points.js":
/*!**************************************************************************!*\
  !*** ./node_modules/videogular2/src/core/vg-cue-points/vg-cue-points.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_events_1 = __webpack_require__(/*! ../events/vg-events */ "./node_modules/videogular2/src/core/events/vg-events.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var VgCuePoints = /** @class */ (function () {
    function VgCuePoints(ref) {
        this.ref = ref;
        this.onEnterCuePoint = new core_1.EventEmitter();
        this.onUpdateCuePoint = new core_1.EventEmitter();
        this.onExitCuePoint = new core_1.EventEmitter();
        this.onCompleteCuePoint = new core_1.EventEmitter();
        this.subscriptions = [];
        this.cuesSubscriptions = [];
        this.totalCues = 0;
    }
    VgCuePoints.prototype.ngOnInit = function () {
        this.onLoad$ = rxjs_1.fromEvent(this.ref.nativeElement, vg_events_1.VgEvents.VG_LOAD);
        this.subscriptions.push(this.onLoad$.subscribe(this.onLoad.bind(this)));
    };
    VgCuePoints.prototype.onLoad = function (event) {
        var cues = event.target.track.cues;
        this.ref.nativeElement.cues = cues;
        this.updateCuePoints(cues);
    };
    VgCuePoints.prototype.updateCuePoints = function (cues) {
        this.cuesSubscriptions.forEach(function (s) { return s.unsubscribe(); });
        for (var i = 0, l = cues.length; i < l; i++) {
            this.onEnter$ = rxjs_1.fromEvent(cues[i], vg_events_1.VgEvents.VG_ENTER);
            this.cuesSubscriptions.push(this.onEnter$.subscribe(this.onEnter.bind(this)));
            this.onExit$ = rxjs_1.fromEvent(cues[i], vg_events_1.VgEvents.VG_EXIT);
            this.cuesSubscriptions.push(this.onExit$.subscribe(this.onExit.bind(this)));
        }
    };
    VgCuePoints.prototype.onEnter = function (event) {
        this.onEnterCuePoint.emit(event.target);
    };
    VgCuePoints.prototype.onExit = function (event) {
        this.onExitCuePoint.emit(event.target);
    };
    VgCuePoints.prototype.ngDoCheck = function () {
        if (this.ref.nativeElement.cues) {
            var changes = this.totalCues !== this.ref.nativeElement.track.cues.length;
            if (changes) {
                this.totalCues = this.ref.nativeElement.track.cues.length;
                this.ref.nativeElement.cues = this.ref.nativeElement.track.cues;
                this.updateCuePoints(this.ref.nativeElement.track.cues);
            }
        }
    };
    VgCuePoints.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgCuePoints.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[vgCuePoints]'
                },] },
    ];
    /** @nocollapse */
    VgCuePoints.ctorParameters = function () { return [
        { type: core_1.ElementRef }
    ]; };
    VgCuePoints.propDecorators = {
        onEnterCuePoint: [{ type: core_1.Output, args: ['onEnterCuePoint',] }],
        onUpdateCuePoint: [{ type: core_1.Output, args: ['onUpdateCuePoint',] }],
        onExitCuePoint: [{ type: core_1.Output, args: ['onExitCuePoint',] }],
        onCompleteCuePoint: [{ type: core_1.Output, args: ['onCompleteCuePoint',] }]
    };
    return VgCuePoints;
}());
exports.VgCuePoints = VgCuePoints;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctY3VlLXBvaW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLWN1ZS1wb2ludHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Y7QUFDL0YsaURBQStDO0FBQy9DLDZCQUE2RDtBQUU3RDtJQWtCSSxxQkFBbUIsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFkUCxvQkFBZSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUN2RCxxQkFBZ0IsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDM0QsbUJBQWMsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDbkQsdUJBQWtCLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBRXpGLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUNuQyxzQkFBaUIsR0FBbUIsRUFBRSxDQUFDO1FBTXZDLGNBQVMsR0FBRyxDQUFDLENBQUM7SUFHZCxDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsZ0JBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxvQkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFPLEtBQVU7UUFDYixJQUFJLElBQUksR0FBbUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBRW5ELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQscUNBQWUsR0FBZixVQUFnQixJQUFvQjtRQUNoQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO1FBRXJELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBUyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUUsRUFBRSxvQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTlFLElBQUksQ0FBQyxPQUFPLEdBQUcsZ0JBQVMsQ0FBQyxJQUFJLENBQUUsQ0FBQyxDQUFFLEVBQUUsb0JBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRixDQUFDO0lBQ0wsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxLQUFVO1FBQ2QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sS0FBVTtRQUNiLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsK0JBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUU1RSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzFELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNoRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1RCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFRCxpQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBcEVKLGdCQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7aUJBQzVCOzs7O2dCQU5tQixpQkFBVTs7O2tDQVF6QixhQUFNLFNBQUMsaUJBQWlCO21DQUN4QixhQUFNLFNBQUMsa0JBQWtCO2lDQUN6QixhQUFNLFNBQUMsZ0JBQWdCO3FDQUN2QixhQUFNLFNBQUMsb0JBQW9COztJQThEaEMsa0JBQUM7Q0FBQSxBQXJFRCxJQXFFQztBQWxFWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZ0V2ZW50cyB9IGZyb20gJy4uL2V2ZW50cy92Zy1ldmVudHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBTdWJzY3JpcHRpb24sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t2Z0N1ZVBvaW50c10nXG59KVxuZXhwb3J0IGNsYXNzIFZnQ3VlUG9pbnRzIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBPdXRwdXQoJ29uRW50ZXJDdWVQb2ludCcpIG9uRW50ZXJDdWVQb2ludDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgnb25VcGRhdGVDdWVQb2ludCcpIG9uVXBkYXRlQ3VlUG9pbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoJ29uRXhpdEN1ZVBvaW50Jykgb25FeGl0Q3VlUG9pbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoJ29uQ29tcGxldGVDdWVQb2ludCcpIG9uQ29tcGxldGVDdWVQb2ludDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICAgIGN1ZXNTdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgb25Mb2FkJDogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIG9uRW50ZXIkOiBPYnNlcnZhYmxlPGFueT47XG4gICAgb25FeGl0JDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gICAgdG90YWxDdWVzID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5vbkxvYWQkID0gZnJvbUV2ZW50KHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQsIFZnRXZlbnRzLlZHX0xPQUQpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLm9uTG9hZCQuc3Vic2NyaWJlKHRoaXMub25Mb2FkLmJpbmQodGhpcykpKTtcbiAgICB9XG5cbiAgICBvbkxvYWQoZXZlbnQ6IGFueSkge1xuICAgICAgICBsZXQgY3VlczogVGV4dFRyYWNrQ3VlW10gPSBldmVudC50YXJnZXQudHJhY2suY3VlcztcblxuICAgICAgICB0aGlzLnJlZi5uYXRpdmVFbGVtZW50LmN1ZXMgPSBjdWVzO1xuXG4gICAgICAgIHRoaXMudXBkYXRlQ3VlUG9pbnRzKGN1ZXMpO1xuICAgIH1cblxuICAgIHVwZGF0ZUN1ZVBvaW50cyhjdWVzOiBUZXh0VHJhY2tDdWVbXSkge1xuICAgICAgICB0aGlzLmN1ZXNTdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gY3Vlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMub25FbnRlciQgPSBmcm9tRXZlbnQoY3Vlc1sgaSBdLCBWZ0V2ZW50cy5WR19FTlRFUik7XG4gICAgICAgICAgICB0aGlzLmN1ZXNTdWJzY3JpcHRpb25zLnB1c2godGhpcy5vbkVudGVyJC5zdWJzY3JpYmUodGhpcy5vbkVudGVyLmJpbmQodGhpcykpKTtcblxuICAgICAgICAgICAgdGhpcy5vbkV4aXQkID0gZnJvbUV2ZW50KGN1ZXNbIGkgXSwgVmdFdmVudHMuVkdfRVhJVCk7XG4gICAgICAgICAgICB0aGlzLmN1ZXNTdWJzY3JpcHRpb25zLnB1c2godGhpcy5vbkV4aXQkLnN1YnNjcmliZSh0aGlzLm9uRXhpdC5iaW5kKHRoaXMpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkVudGVyKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5vbkVudGVyQ3VlUG9pbnQuZW1pdChldmVudC50YXJnZXQpO1xuICAgIH1cblxuICAgIG9uRXhpdChldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMub25FeGl0Q3VlUG9pbnQuZW1pdChldmVudC50YXJnZXQpO1xuICAgIH1cblxuICAgIG5nRG9DaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQuY3Vlcykge1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlcyA9IHRoaXMudG90YWxDdWVzICE9PSB0aGlzLnJlZi5uYXRpdmVFbGVtZW50LnRyYWNrLmN1ZXMubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAoY2hhbmdlcykge1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWxDdWVzID0gdGhpcy5yZWYubmF0aXZlRWxlbWVudC50cmFjay5jdWVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZi5uYXRpdmVFbGVtZW50LmN1ZXMgPSB0aGlzLnJlZi5uYXRpdmVFbGVtZW50LnRyYWNrLmN1ZXM7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDdWVQb2ludHModGhpcy5yZWYubmF0aXZlRWxlbWVudC50cmFjay5jdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/videogular2/src/core/vg-media/vg-media-element.js":
/*!************************************************************************!*\
  !*** ./node_modules/videogular2/src/core/vg-media/vg-media-element.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var VgMediaElement = /** @class */ (function () {
    function VgMediaElement() {
    }
    Object.defineProperty(VgMediaElement.prototype, "audioTracks", {
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    ;
    VgMediaElement.prototype.addTextTrack = function (kind, label, language) {
        return null;
    };
    VgMediaElement.prototype.canPlayType = function (type) {
        return null;
    };
    VgMediaElement.prototype.load = function () {
    };
    VgMediaElement.prototype.msClearEffects = function () {
    };
    VgMediaElement.prototype.msGetAsCastingSource = function () {
        return null;
    };
    VgMediaElement.prototype.msInsertAudioEffect = function (activatableClassId, effectRequired, config) {
    };
    VgMediaElement.prototype.msSetMediaKeys = function (mediaKeys) {
    };
    VgMediaElement.prototype.msSetMediaProtectionManager = function (mediaProtectionManager) {
    };
    VgMediaElement.prototype.pause = function () {
    };
    VgMediaElement.prototype.play = function () {
        return null;
    };
    VgMediaElement.prototype.setMediaKeys = function (mediaKeys) {
        return null;
    };
    VgMediaElement.prototype.addEventListener = function (type, listener, useCapture) {
    };
    return VgMediaElement;
}());
exports.VgMediaElement = VgMediaElement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctbWVkaWEtZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLW1lZGlhLWVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUFBO0lBNEZBLENBQUM7SUF6Rkcsc0JBQUksdUNBQVc7YUFBZixjQUFvQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFBQSxDQUFDO0lBaURuRCxxQ0FBWSxHQUFaLFVBQWEsSUFBWSxFQUFFLEtBQWMsRUFBRSxRQUFpQjtRQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksSUFBWTtRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCw2QkFBSSxHQUFKO0lBQ0EsQ0FBQztJQUVELHVDQUFjLEdBQWQ7SUFDQSxDQUFDO0lBRUQsNkNBQW9CLEdBQXBCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsNENBQW1CLEdBQW5CLFVBQW9CLGtCQUEwQixFQUFFLGNBQXVCLEVBQUUsTUFBWTtJQUNyRixDQUFDO0lBRUQsdUNBQWMsR0FBZCxVQUFlLFNBQXNCO0lBQ3JDLENBQUM7SUFFRCxvREFBMkIsR0FBM0IsVUFBNEIsc0JBQTRCO0lBQ3hELENBQUM7SUFFRCw4QkFBSyxHQUFMO0lBQ0EsQ0FBQztJQUVELDZCQUFJLEdBQUo7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxxQ0FBWSxHQUFaLFVBQWEsU0FBMEI7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQseUNBQWdCLEdBQWhCLFVBQWlCLElBQVksRUFBRSxRQUE0QyxFQUFFLFVBQW9CO0lBQ2pHLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUE1RkQsSUE0RkM7QUE1Rlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTWVkaWFFbGVtZW50IH0gZnJvbSAnLi9pLW1lZGlhLWVsZW1lbnQnO1xuXG5leHBvcnQgY2xhc3MgVmdNZWRpYUVsZW1lbnQgaW1wbGVtZW50cyBJTWVkaWFFbGVtZW50IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGVsZW06IGFueTtcbiAgICBnZXQgYXVkaW9UcmFja3MoKTogQXVkaW9UcmFja0xpc3QgeyByZXR1cm4gbnVsbDsgfTtcbiAgICBhdXRvcGxheTogYm9vbGVhbjtcbiAgICBidWZmZXJlZDogVGltZVJhbmdlcztcbiAgICBjb250cm9sczogYm9vbGVhbjtcbiAgICBjcm9zc09yaWdpbjogc3RyaW5nIHwgYW55O1xuICAgIGN1cnJlbnRTcmM6IHN0cmluZztcbiAgICBjdXJyZW50VGltZTogbnVtYmVyO1xuICAgIGRlZmF1bHRNdXRlZDogYm9vbGVhbjtcbiAgICBkZWZhdWx0UGxheWJhY2tSYXRlOiBudW1iZXI7XG4gICAgZHVyYXRpb246IG51bWJlcjtcbiAgICBlbmRlZDogYm9vbGVhbjtcbiAgICBlcnJvcjogTWVkaWFFcnJvcjtcbiAgICBsb29wOiBib29sZWFuO1xuICAgIG1lZGlhS2V5czogTWVkaWFLZXlzIHwgYW55O1xuICAgIG1zQXVkaW9DYXRlZ29yeTogc3RyaW5nO1xuICAgIG1zQXVkaW9EZXZpY2VUeXBlOiBzdHJpbmc7XG4gICAgbXNHcmFwaGljc1RydXN0U3RhdHVzOiBNU0dyYXBoaWNzVHJ1c3Q7XG4gICAgbXNLZXlzOiBNU01lZGlhS2V5cztcbiAgICBtc1BsYXlUb0Rpc2FibGVkOiBib29sZWFuO1xuICAgIG1zUGxheVRvUHJlZmVycmVkU291cmNlVXJpOiBzdHJpbmc7XG4gICAgbXNQbGF5VG9QcmltYXJ5OiBib29sZWFuO1xuICAgIG1zUGxheVRvU291cmNlOiBhbnk7XG4gICAgbXNSZWFsVGltZTogYm9vbGVhbjtcbiAgICBtdXRlZDogYm9vbGVhbjtcbiAgICBuZXR3b3JrU3RhdGU6IG51bWJlcjtcbiAgICBvbmVuY3J5cHRlZDogKGV2OiBNZWRpYUVuY3J5cHRlZEV2ZW50KSA9PiBhbnk7XG4gICAgb25tc25lZWRrZXk6IChldjogTVNNZWRpYUtleU5lZWRlZEV2ZW50KSA9PiBhbnk7XG4gICAgcGF1c2VkOiBib29sZWFuO1xuICAgIHBsYXliYWNrUmF0ZTogbnVtYmVyO1xuICAgIHBsYXllZDogVGltZVJhbmdlcztcbiAgICBwcmVsb2FkOiBzdHJpbmc7XG4gICAgcmVhZHlTdGF0ZTogbnVtYmVyO1xuICAgIHNlZWthYmxlOiBUaW1lUmFuZ2VzO1xuICAgIHNlZWtpbmc6IGJvb2xlYW47XG4gICAgc3JjOiBzdHJpbmc7XG4gICAgc3JjT2JqZWN0OiBNZWRpYVN0cmVhbSB8IGFueTtcbiAgICB0ZXh0VHJhY2tzOiBUZXh0VHJhY2tMaXN0O1xuICAgIHZpZGVvVHJhY2tzOiBWaWRlb1RyYWNrTGlzdDtcbiAgICB2b2x1bWU6IG51bWJlcjtcbiAgICBIQVZFX0NVUlJFTlRfREFUQTogbnVtYmVyO1xuICAgIEhBVkVfRU5PVUdIX0RBVEE6IG51bWJlcjtcbiAgICBIQVZFX0ZVVFVSRV9EQVRBOiBudW1iZXI7XG4gICAgSEFWRV9NRVRBREFUQTogbnVtYmVyO1xuICAgIEhBVkVfTk9USElORzogbnVtYmVyO1xuICAgIE5FVFdPUktfRU1QVFk6IG51bWJlcjtcbiAgICBORVRXT1JLX0lETEU6IG51bWJlcjtcbiAgICBORVRXT1JLX0xPQURJTkc6IG51bWJlcjtcbiAgICBORVRXT1JLX05PX1NPVVJDRTogbnVtYmVyO1xuXG4gICAgYWRkVGV4dFRyYWNrKGtpbmQ6IHN0cmluZywgbGFiZWw/OiBzdHJpbmcsIGxhbmd1YWdlPzogc3RyaW5nKTogVGV4dFRyYWNrIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY2FuUGxheVR5cGUodHlwZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbG9hZCgpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBtc0NsZWFyRWZmZWN0cygpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBtc0dldEFzQ2FzdGluZ1NvdXJjZSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBtc0luc2VydEF1ZGlvRWZmZWN0KGFjdGl2YXRhYmxlQ2xhc3NJZDogc3RyaW5nLCBlZmZlY3RSZXF1aXJlZDogYm9vbGVhbiwgY29uZmlnPzogYW55KTogdm9pZCB7XG4gICAgfVxuXG4gICAgbXNTZXRNZWRpYUtleXMobWVkaWFLZXlzOiBNU01lZGlhS2V5cyk6IHZvaWQge1xuICAgIH1cblxuICAgIG1zU2V0TWVkaWFQcm90ZWN0aW9uTWFuYWdlcihtZWRpYVByb3RlY3Rpb25NYW5hZ2VyPzogYW55KTogdm9pZCB7XG4gICAgfVxuXG4gICAgcGF1c2UoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgcGxheSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzZXRNZWRpYUtleXMobWVkaWFLZXlzOiBNZWRpYUtleXMgfCBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcih0eXBlOiBzdHJpbmcsIGxpc3RlbmVyOiBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LCB1c2VDYXB0dXJlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/core/vg-media/vg-media.js":
/*!****************************************************************!*\
  !*** ./node_modules/videogular2/src/core/vg-media/vg-media.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var vg_states_1 = __webpack_require__(/*! ../states/vg-states */ "./node_modules/videogular2/src/core/states/vg-states.js");
var vg_api_1 = __webpack_require__(/*! ../services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var vg_events_1 = __webpack_require__(/*! ../events/vg-events */ "./node_modules/videogular2/src/core/events/vg-events.js");
var rxjs_2 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var VgMedia = /** @class */ (function () {
    function VgMedia(api, ref) {
        this.api = api;
        this.ref = ref;
        this.state = vg_states_1.VgStates.VG_PAUSED;
        this.time = { current: 0, total: 0, left: 0 };
        this.buffer = { end: 0 };
        this.canPlay = false;
        this.canPlayThrough = false;
        this.isMetadataLoaded = false;
        this.isWaiting = false;
        this.isCompleted = false;
        this.isLive = false;
        this.isBufferDetected = false;
        this.checkInterval = 200;
        this.currentPlayPos = 0;
        this.lastPlayPos = 0;
        this.playAtferSync = false;
        this.bufferDetected = new rxjs_1.Subject();
    }
    VgMedia.prototype.ngOnInit = function () {
        var _this = this;
        if (this.vgMedia.nodeName) {
            // It's a native element
            this.elem = this.vgMedia;
        }
        else {
            // It's an Angular Class
            this.elem = this.vgMedia.elem;
        }
        // Just in case we're creating this vgMedia dynamically register again into API
        this.api.registerMedia(this);
        this.subscriptions = {
            // Native events
            abort: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_ABORT),
            canPlay: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_CAN_PLAY),
            canPlayThrough: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_CAN_PLAY_THROUGH),
            durationChange: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_DURATION_CHANGE),
            emptied: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_EMPTIED),
            encrypted: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_ENCRYPTED),
            ended: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_ENDED),
            error: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_ERROR),
            loadedData: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_LOADED_DATA),
            loadedMetadata: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_LOADED_METADATA),
            loadStart: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_LOAD_START),
            pause: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_PAUSE),
            play: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_PLAY),
            playing: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_PLAYING),
            progress: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_PROGRESS),
            rateChange: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_RATE_CHANGE),
            seeked: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_SEEKED),
            seeking: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_SEEKING),
            stalled: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_STALLED),
            suspend: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_SUSPEND),
            timeUpdate: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_TIME_UPDATE),
            volumeChange: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_VOLUME_CHANGE),
            waiting: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_WAITING),
            // Advertisement only events
            startAds: rxjs_1.fromEvent(window, vg_events_1.VgEvents.VG_START_ADS),
            endAds: rxjs_1.fromEvent(window, vg_events_1.VgEvents.VG_END_ADS),
            // See changes on <source> child elements to reload the video file
            mutation: rxjs_1.Observable.create(function (observer) {
                var domObs = new MutationObserver(function (mutations) {
                    observer.next(mutations);
                });
                domObs.observe(_this.elem, { childList: true, attributes: true });
                return function () {
                    domObs.disconnect();
                };
            }),
            // Custom buffering detection
            bufferDetected: this.bufferDetected
        };
        this.mutationObs = this.subscriptions.mutation.subscribe(this.onMutation.bind(this));
        this.canPlayObs = this.subscriptions.canPlay.subscribe(this.onCanPlay.bind(this));
        this.canPlayThroughObs = this.subscriptions.canPlayThrough.subscribe(this.onCanPlayThrough.bind(this));
        this.loadedMetadataObs = this.subscriptions.loadedMetadata.subscribe(this.onLoadMetadata.bind(this));
        this.waitingObs = this.subscriptions.waiting.subscribe(this.onWait.bind(this));
        this.progressObs = this.subscriptions.progress.subscribe(this.onProgress.bind(this));
        this.endedObs = this.subscriptions.ended.subscribe(this.onComplete.bind(this));
        this.playingObs = this.subscriptions.playing.subscribe(this.onStartPlaying.bind(this));
        this.playObs = this.subscriptions.play.subscribe(this.onPlay.bind(this));
        this.pauseObs = this.subscriptions.pause.subscribe(this.onPause.bind(this));
        this.timeUpdateObs = this.subscriptions.timeUpdate.subscribe(this.onTimeUpdate.bind(this));
        this.volumeChangeObs = this.subscriptions.volumeChange.subscribe(this.onVolumeChange.bind(this));
        this.errorObs = this.subscriptions.error.subscribe(this.onError.bind(this));
        if (this.vgMaster) {
            this.api.playerReadyEvent.subscribe(function () {
                _this.prepareSync();
            });
        }
    };
    VgMedia.prototype.prepareSync = function () {
        var _this = this;
        var canPlayAll = [];
        for (var media in this.api.medias) {
            if (this.api.medias[media]) {
                canPlayAll.push(this.api.medias[media].subscriptions.canPlay);
            }
        }
        this.canPlayAllSubscription = rxjs_2.combineLatest(canPlayAll, function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            var allReady = params.some(function (event) { return event.target.readyState === 4; });
            if (allReady && !_this.syncSubscription) {
                _this.startSync();
                _this.syncSubscription.unsubscribe();
            }
        }).subscribe();
    };
    VgMedia.prototype.startSync = function () {
        var _this = this;
        this.syncSubscription = rxjs_2.timer(0, 1000).subscribe(function () {
            for (var media in _this.api.medias) {
                if (_this.api.medias[media] !== _this) {
                    var diff = _this.api.medias[media].currentTime - _this.currentTime;
                    if (diff < -0.3 || diff > 0.3) {
                        _this.playAtferSync = (_this.state === vg_states_1.VgStates.VG_PLAYING);
                        _this.pause();
                        _this.api.medias[media].pause();
                        _this.api.medias[media].currentTime = _this.currentTime;
                    }
                    else {
                        if (_this.playAtferSync) {
                            _this.play();
                            _this.api.medias[media].play();
                            _this.playAtferSync = false;
                        }
                    }
                }
            }
        });
    };
    VgMedia.prototype.onMutation = function (mutations) {
        // Detect changes only for source elements or src attribute
        for (var i = 0, l = mutations.length; i < l; i++) {
            var mut = mutations[i];
            if (mut.type === 'attributes' && mut.attributeName === 'src') {
                // Only load src file if it's not a blob (for DASH / HLS sources)
                if (mut.target['src'] && mut.target['src'].length > 0 && mut.target['src'].indexOf('blob:') < 0) {
                    this.loadMedia();
                    break;
                }
            }
            else if (mut.type === 'childList' && mut.removedNodes.length && mut.removedNodes[0].nodeName.toLowerCase() === 'source') {
                this.loadMedia();
                break;
            }
        }
    };
    VgMedia.prototype.loadMedia = function () {
        var _this = this;
        this.vgMedia.pause();
        this.vgMedia.currentTime = 0;
        // Start buffering until we can play the media file
        this.stopBufferCheck();
        this.isBufferDetected = true;
        this.bufferDetected.next(this.isBufferDetected);
        // TODO: This is ugly, we should find something cleaner. For some reason a TimerObservable doesn't works.
        setTimeout(function () { return _this.vgMedia.load(); }, 10);
    };
    VgMedia.prototype.play = function () {
        var _this = this;
        // short-circuit if already playing
        if (this.playPromise || (this.state !== vg_states_1.VgStates.VG_PAUSED && this.state !== vg_states_1.VgStates.VG_ENDED)) {
            return;
        }
        this.playPromise = this.vgMedia.play();
        // browser has async play promise
        if (this.playPromise && this.playPromise.then && this.playPromise.catch) {
            this.playPromise
                .then(function () {
                _this.playPromise = null;
            })
                .catch(function () {
                _this.playPromise = null;
                // deliberately empty for the sake of eating console noise
            });
        }
        return this.playPromise;
    };
    VgMedia.prototype.pause = function () {
        var _this = this;
        // browser has async play promise
        if (this.playPromise) {
            this.playPromise
                .then(function () {
                _this.vgMedia.pause();
            });
        }
        else {
            this.vgMedia.pause();
        }
    };
    Object.defineProperty(VgMedia.prototype, "id", {
        get: function () {
            // We should return undefined if vgMedia still doesn't exist
            var result = undefined;
            if (this.vgMedia) {
                result = this.vgMedia.id;
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "duration", {
        get: function () {
            return this.vgMedia.duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "currentTime", {
        get: function () {
            return this.vgMedia.currentTime;
        },
        set: function (seconds) {
            this.vgMedia.currentTime = seconds;
            // this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_SEEK));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "volume", {
        get: function () {
            return this.vgMedia.volume;
        },
        set: function (volume) {
            this.vgMedia.volume = volume;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "playbackRate", {
        get: function () {
            return this.vgMedia.playbackRate;
        },
        set: function (rate) {
            this.vgMedia.playbackRate = rate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "buffered", {
        get: function () {
            return this.vgMedia.buffered;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "textTracks", {
        get: function () {
            return this.vgMedia.textTracks;
        },
        enumerable: true,
        configurable: true
    });
    VgMedia.prototype.onCanPlay = function (event) {
        this.isBufferDetected = false;
        this.bufferDetected.next(this.isBufferDetected);
        this.canPlay = true;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onCanPlayThrough = function (event) {
        this.isBufferDetected = false;
        this.bufferDetected.next(this.isBufferDetected);
        this.canPlayThrough = true;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onLoadMetadata = function (event) {
        this.isMetadataLoaded = true;
        this.time = {
            current: 0,
            left: 0,
            total: this.duration * 1000
        };
        this.state = vg_states_1.VgStates.VG_PAUSED;
        // Live streaming check
        var t = Math.round(this.time.total);
        this.isLive = (t === Infinity);
        this.ref.detectChanges();
    };
    VgMedia.prototype.onWait = function (event) {
        this.isWaiting = true;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onComplete = function (event) {
        this.isCompleted = true;
        this.state = vg_states_1.VgStates.VG_ENDED;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onStartPlaying = function (event) {
        this.state = vg_states_1.VgStates.VG_PLAYING;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onPlay = function (event) {
        this.state = vg_states_1.VgStates.VG_PLAYING;
        if (this.vgMaster) {
            if (!this.syncSubscription || this.syncSubscription.closed) {
                this.startSync();
            }
        }
        this.startBufferCheck();
        this.ref.detectChanges();
    };
    VgMedia.prototype.onPause = function (event) {
        this.state = vg_states_1.VgStates.VG_PAUSED;
        if (this.vgMaster) {
            if (!this.playAtferSync) {
                this.syncSubscription.unsubscribe();
            }
        }
        this.stopBufferCheck();
        this.ref.detectChanges();
    };
    VgMedia.prototype.onTimeUpdate = function (event) {
        var end = this.buffered.length - 1;
        this.time = {
            current: this.currentTime * 1000,
            total: this.time.total,
            left: (this.duration - this.currentTime) * 1000
        };
        if (end >= 0) {
            this.buffer = { end: this.buffered.end(end) * 1000 };
        }
        this.ref.detectChanges();
    };
    VgMedia.prototype.onProgress = function (event) {
        var end = this.buffered.length - 1;
        if (end >= 0) {
            this.buffer = { end: this.buffered.end(end) * 1000 };
        }
        this.ref.detectChanges();
    };
    VgMedia.prototype.onVolumeChange = function (event) {
        // TODO: Save to localstorage the current volume
        this.ref.detectChanges();
    };
    VgMedia.prototype.onError = function (event) {
        // TODO: Handle error messages
        this.ref.detectChanges();
    };
    // http://stackoverflow.com/a/23828241/779529
    VgMedia.prototype.bufferCheck = function () {
        var offset = 1 / this.checkInterval;
        this.currentPlayPos = this.currentTime;
        if (!this.isBufferDetected && this.currentPlayPos < (this.lastPlayPos + offset)) {
            this.isBufferDetected = true;
        }
        if (this.isBufferDetected && this.currentPlayPos > (this.lastPlayPos + offset)) {
            this.isBufferDetected = false;
        }
        // Prevent calls to bufferCheck after ngOnDestroy have been called
        if (!this.bufferDetected.closed) {
            this.bufferDetected.next(this.isBufferDetected);
        }
        this.lastPlayPos = this.currentPlayPos;
    };
    VgMedia.prototype.startBufferCheck = function () {
        var _this = this;
        this.checkBufferSubscription = rxjs_2.timer(0, this.checkInterval).subscribe(function () {
            _this.bufferCheck();
        });
    };
    VgMedia.prototype.stopBufferCheck = function () {
        if (this.checkBufferSubscription) {
            this.checkBufferSubscription.unsubscribe();
        }
        this.isBufferDetected = false;
        this.bufferDetected.next(this.isBufferDetected);
    };
    VgMedia.prototype.seekTime = function (value, byPercent) {
        if (byPercent === void 0) { byPercent = false; }
        var second;
        var duration = this.duration;
        if (byPercent) {
            second = value * duration / 100;
        }
        else {
            second = value;
        }
        this.currentTime = second;
    };
    VgMedia.prototype.addTextTrack = function (type, label, language, mode) {
        var newTrack = this.vgMedia.addTextTrack(type, label, language);
        if (mode) {
            newTrack.mode = mode;
        }
        return newTrack;
    };
    VgMedia.prototype.ngOnDestroy = function () {
        this.vgMedia.src = '';
        this.mutationObs.unsubscribe();
        this.canPlayObs.unsubscribe();
        this.canPlayThroughObs.unsubscribe();
        this.loadedMetadataObs.unsubscribe();
        this.waitingObs.unsubscribe();
        this.progressObs.unsubscribe();
        this.endedObs.unsubscribe();
        this.playingObs.unsubscribe();
        this.playObs.unsubscribe();
        this.pauseObs.unsubscribe();
        this.timeUpdateObs.unsubscribe();
        this.volumeChangeObs.unsubscribe();
        this.errorObs.unsubscribe();
        if (this.checkBufferSubscription) {
            this.checkBufferSubscription.unsubscribe();
        }
        if (this.syncSubscription) {
            this.syncSubscription.unsubscribe();
        }
        this.bufferDetected.complete();
        this.bufferDetected.unsubscribe();
        this.api.unregisterMedia(this);
    };
    VgMedia.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[vgMedia]'
                },] },
    ];
    /** @nocollapse */
    VgMedia.ctorParameters = function () { return [
        { type: vg_api_1.VgAPI },
        { type: core_1.ChangeDetectorRef }
    ]; };
    VgMedia.propDecorators = {
        vgMedia: [{ type: core_1.Input }],
        vgMaster: [{ type: core_1.Input }]
    };
    return VgMedia;
}());
exports.VgMedia = VgMedia;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctbWVkaWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1tZWRpYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRztBQUVuRyw2QkFBb0Y7QUFFcEYsaURBQStDO0FBQy9DLDZDQUEyQztBQUMzQyxpREFBK0M7QUFFL0MsNkJBQTBDO0FBTTFDO0lBb0RJLGlCQUFvQixHQUFVLEVBQVUsR0FBc0I7UUFBMUMsUUFBRyxHQUFILEdBQUcsQ0FBTztRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBM0M5RCxVQUFLLEdBQVcsb0JBQVEsQ0FBQyxTQUFTLENBQUM7UUFFbkMsU0FBSSxHQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM5QyxXQUFNLEdBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFJekIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFDbEMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixXQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUVsQyxrQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUM1QixtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUMzQixnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUt4QixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQWdCL0IsbUJBQWMsR0FBcUIsSUFBSSxjQUFPLEVBQUUsQ0FBQztJQU1qRCxDQUFDO0lBRUQsMEJBQVEsR0FBUjtRQUFBLGlCQW1GQztRQWxGRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDeEIsd0JBQXdCO1lBQ3hCLElBQUksQ0FBQyxJ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O2dCQUxMLHdCQUFpQjs7OzBCQW9CckIsWUFBSzsyQkFDTCxZQUFLOztJQStlVixjQUFDO0NBQUEsQUF0ZkQsSUFzZkM7QUFuZlksMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRWxlbWVudFJlZiwgT25Jbml0LCBEaXJlY3RpdmUsIElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSVBsYXlhYmxlLCBJTWVkaWFTdWJzY3JpcHRpb25zIH0gZnJvbSBcIi4vaS1wbGF5YWJsZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBTdWJzY3JpcHRpb24gLCAgT2JzZXJ2ZXIgLCAgU3ViamVjdCwgZnJvbUV2ZW50IH0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHsgVmdTdGF0ZXMgfSBmcm9tICcuLi9zdGF0ZXMvdmctc3RhdGVzJztcbmltcG9ydCB7IFZnQVBJIH0gZnJvbSAnLi4vc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7IFZnRXZlbnRzIH0gZnJvbSAnLi4vZXZlbnRzL3ZnLWV2ZW50cyc7XG5pbXBvcnQgeyBJTWVkaWFFbGVtZW50IH0gZnJvbSAnLi9pLW1lZGlhLWVsZW1lbnQnO1xuaW1wb3J0IHt0aW1lciwgY29tYmluZUxhdGVzdH0gZnJvbSAncnhqcyc7XG5cblxuXG5cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbdmdNZWRpYV0nXG59KVxuZXhwb3J0IGNsYXNzIFZnTWVkaWEgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgSVBsYXlhYmxlIHtcbiAgICBlbGVtOiBhbnk7XG5cbiAgICBASW5wdXQoKSB2Z01lZGlhOiBJTWVkaWFFbGVtZW50O1xuICAgIEBJbnB1dCgpIHZnTWFzdGVyOiBib29sZWFuO1xuXG4gICAgc3RhdGU6IHN0cmluZyA9IFZnU3RhdGVzLlZHX1BBVVNFRDtcblxuICAgIHRpbWU6IGFueSA9IHsgY3VycmVudDogMCwgdG90YWw6IDAsIGxlZnQ6IDAgfTtcbiAgICBidWZmZXI6IGFueSA9IHsgZW5kOiAwIH07XG4gICAgdHJhY2s6IGFueTtcbiAgICBzdWJzY3JpcHRpb25zOiBJTWVkaWFTdWJzY3JpcHRpb25zIHwgYW55O1xuXG4gICAgY2FuUGxheTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGNhblBsYXlUaHJvdWdoOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNNZXRhZGF0YUxvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzV2FpdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQ29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNMaXZlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBpc0J1ZmZlckRldGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjaGVja0ludGVydmFsOiBudW1iZXIgPSAyMDA7XG4gICAgY3VycmVudFBsYXlQb3M6IG51bWJlciA9IDA7XG4gICAgbGFzdFBsYXlQb3M6IG51bWJlciA9IDA7XG5cbiAgICBjaGVja0J1ZmZlclN1YnNjcmlwdGlvbjogYW55O1xuICAgIHN5bmNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBjYW5QbGF5QWxsU3Vic2NyaXB0aW9uOiBhbnk7XG4gICAgcGxheUF0ZmVyU3luYzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgbXV0YXRpb25PYnM6IFN1YnNjcmlwdGlvbjtcbiAgICBjYW5QbGF5T2JzOiBTdWJzY3JpcHRpb247XG4gICAgY2FuUGxheVRocm91Z2hPYnM6IFN1YnNjcmlwdGlvbjtcbiAgICBsb2FkZWRNZXRhZGF0YU9iczogU3Vic2NyaXB0aW9uO1xuICAgIHdhaXRpbmdPYnM6IFN1YnNjcmlwdGlvbjtcbiAgICBwcm9ncmVzc09iczogU3Vic2NyaXB0aW9uO1xuICAgIGVuZGVkT2JzOiBTdWJzY3JpcHRpb247XG4gICAgcGxheWluZ09iczogU3Vic2NyaXB0aW9uO1xuICAgIHBsYXlPYnM6IFN1YnNjcmlwdGlvbjtcbiAgICBwYXVzZU9iczogU3Vic2NyaXB0aW9uO1xuICAgIHRpbWVVcGRhdGVPYnM6IFN1YnNjcmlwdGlvbjtcbiAgICB2b2x1bWVDaGFuZ2VPYnM6IFN1YnNjcmlwdGlvbjtcbiAgICBlcnJvck9iczogU3Vic2NyaXB0aW9uO1xuXG4gICAgYnVmZmVyRGV0ZWN0ZWQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgcGxheVByb21pc2U6IFByb21pc2U8YW55PjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpOiBWZ0FQSSwgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMudmdNZWRpYS5ub2RlTmFtZSkge1xuICAgICAgICAgICAgLy8gSXQncyBhIG5hdGl2ZSBlbGVtZW50XG4gICAgICAgICAgICB0aGlzLmVsZW0gPSB0aGlzLnZnTWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdCdzIGFuIEFuZ3VsYXIgQ2xhc3NcbiAgICAgICAgICAgIHRoaXMuZWxlbSA9IHRoaXMudmdNZWRpYS5lbGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSnVzdCBpbiBjYXNlIHdlJ3JlIGNyZWF0aW5nIHRoaXMgdmdNZWRpYSBkeW5hbWljYWxseSByZWdpc3RlciBhZ2FpbiBpbnRvIEFQSVxuICAgICAgICB0aGlzLmFwaS5yZWdpc3Rlck1lZGlhKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IHtcbiAgICAgICAgICAgIC8vIE5hdGl2ZSBldmVudHNcbiAgICAgICAgICAgIGFib3J0OiBmcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX0FCT1JUKSxcbiAgICAgICAgICAgIGNhblBsYXk6IGZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfQ0FOX1BMQVkpLFxuICAgICAgICAgICAgY2FuUGxheVRocm91Z2g6IGZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfQ0FOX1BMQVlfVEhST1VHSCksXG4gICAgICAgICAgICBkdXJhdGlvbkNoYW5nZTogZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19EVVJBVElPTl9DSEFOR0UpLFxuICAgICAgICAgICAgZW1wdGllZDogZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19FTVBUSUVEKSxcbiAgICAgICAgICAgIGVuY3J5cHRlZDogZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19FTkNSWVBURUQpLFxuICAgICAgICAgICAgZW5kZWQ6IGZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfRU5ERUQpLFxuICAgICAgICAgICAgZXJyb3I6IGZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfRVJST1IpLFxuICAgICAgICAgICAgbG9hZGVkRGF0YTogZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19MT0FERURfREFUQSksXG4gICAgICAgICAgICBsb2FkZWRNZXRhZGF0YTogZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19MT0FERURfTUVUQURBVEEpLFxuICAgICAgICAgICAgbG9hZFN0YXJ0OiBmcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX0xPQURfU1RBUlQpLFxuICAgICAgICAgICAgcGF1c2U6IGZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfUEFVU0UpLFxuICAgICAgICAgICAgcGxheTogZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19QTEFZKSxcbiAgICAgICAgICAgIHBsYXlpbmc6IGZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfUExBWUlORyksXG4gICAgICAgICAgICBwcm9ncmVzczogZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19QUk9HUkVTUyksXG4gICAgICAgICAgICByYXRlQ2hhbmdlOiBmcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX1JBVEVfQ0hBTkdFKSxcbiAgICAgICAgICAgIHNlZWtlZDogZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19TRUVLRUQpLFxuICAgICAgICAgICAgc2Vla2luZzogZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19TRUVLSU5HKSxcbiAgICAgICAgICAgIHN0YWxsZWQ6IGZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfU1RBTExFRCksXG4gICAgICAgICAgICBzdXNwZW5kOiBmcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX1NVU1BFTkQpLFxuICAgICAgICAgICAgdGltZVVwZGF0ZTogZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19USU1FX1VQREFURSksXG4gICAgICAgICAgICB2b2x1bWVDaGFuZ2U6IGZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfVk9MVU1FX0NIQU5HRSksXG4gICAgICAgICAgICB3YWl0aW5nOiBmcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX1dBSVRJTkcpLFxuXG4gICAgICAgICAgICAvLyBBZHZlcnRpc2VtZW50IG9ubHkgZXZlbnRzXG4gICAgICAgICAgICBzdGFydEFkczogZnJvbUV2ZW50KDxhbnk+d2luZG93LCBWZ0V2ZW50cy5WR19TVEFSVF9BRFMpLFxuICAgICAgICAgICAgZW5kQWRzOiBmcm9tRXZlbnQoPGFueT53aW5kb3csIFZnRXZlbnRzLlZHX0VORF9BRFMpLFxuXG4gICAgICAgICAgICAvLyBTZWUgY2hhbmdlcyBvbiA8c291cmNlPiBjaGlsZCBlbGVtZW50cyB0byByZWxvYWQgdGhlIHZpZGVvIGZpbGVcbiAgICAgICAgICAgIG11dGF0aW9uOiBPYnNlcnZhYmxlLmNyZWF0ZShcbiAgICAgICAgICAgICAgICAob2JzZXJ2ZXI6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBkb21PYnMgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KG11dGF0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGRvbU9icy5vYnNlcnZlKDxhbnk+dGhpcy5lbGVtLCB7IGNoaWxkTGlzdDogdHJ1ZSwgYXR0cmlidXRlczogdHJ1ZSB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tT2JzLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApLFxuXG4gICAgICAgICAgICAvLyBDdXN0b20gYnVmZmVyaW5nIGRldGVjdGlvblxuICAgICAgICAgICAgYnVmZmVyRGV0ZWN0ZWQ6IHRoaXMuYnVmZmVyRGV0ZWN0ZWRcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm11dGF0aW9uT2JzID0gdGhpcy5zdWJzY3JpcHRpb25zLm11dGF0aW9uLnN1YnNjcmliZSh0aGlzLm9uTXV0YXRpb24uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuY2FuUGxheU9icyA9IHRoaXMuc3Vic2NyaXB0aW9ucy5jYW5QbGF5LnN1YnNjcmliZSh0aGlzLm9uQ2FuUGxheS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5jYW5QbGF5VGhyb3VnaE9icyA9IHRoaXMuc3Vic2NyaXB0aW9ucy5jYW5QbGF5VGhyb3VnaC5zdWJzY3JpYmUodGhpcy5vbkNhblBsYXlUaHJvdWdoLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmxvYWRlZE1ldGFkYXRhT2JzID0gdGhpcy5zdWJzY3JpcHRpb25zLmxvYWRlZE1ldGFkYXRhLnN1YnNjcmliZSh0aGlzLm9uTG9hZE1ldGFkYXRhLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLndhaXRpbmdPYnMgPSB0aGlzLnN1YnNjcmlwdGlvbnMud2FpdGluZy5zdWJzY3JpYmUodGhpcy5vbldhaXQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NPYnMgPSB0aGlzLnN1YnNjcmlwdGlvbnMucHJvZ3Jlc3Muc3Vic2NyaWJlKHRoaXMub25Qcm9ncmVzcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5lbmRlZE9icyA9IHRoaXMuc3Vic2NyaXB0aW9ucy5lbmRlZC5zdWJzY3JpYmUodGhpcy5vbkNvbXBsZXRlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnBsYXlpbmdPYnMgPSB0aGlzLnN1YnNjcmlwdGlvbnMucGxheWluZy5zdWJzY3JpYmUodGhpcy5vblN0YXJ0UGxheWluZy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5wbGF5T2JzID0gdGhpcy5zdWJzY3JpcHRpb25zLnBsYXkuc3Vic2NyaWJlKHRoaXMub25QbGF5LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnBhdXNlT2JzID0gdGhpcy5zdWJzY3JpcHRpb25zLnBhdXNlLnN1YnNjcmliZSh0aGlzLm9uUGF1c2UuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudGltZVVwZGF0ZU9icyA9IHRoaXMuc3Vic2NyaXB0aW9ucy50aW1lVXBkYXRlLnN1YnNjcmliZSh0aGlzLm9uVGltZVVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy52b2x1bWVDaGFuZ2VPYnMgPSB0aGlzLnN1YnNjcmlwdGlvbnMudm9sdW1lQ2hhbmdlLnN1YnNjcmliZSh0aGlzLm9uVm9sdW1lQ2hhbmdlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmVycm9yT2JzID0gdGhpcy5zdWJzY3JpcHRpb25zLmVycm9yLnN1YnNjcmliZSh0aGlzLm9uRXJyb3IuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgaWYgKHRoaXMudmdNYXN0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYXBpLnBsYXllclJlYWR5RXZlbnQuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVwYXJlU3luYygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmVwYXJlU3luYygpIHtcbiAgICAgICAgbGV0IGNhblBsYXlBbGw6IEFycmF5PE9ic2VydmFibGU8YW55Pj4gPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBtZWRpYSBpbiB0aGlzLmFwaS5tZWRpYXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFwaS5tZWRpYXNbIG1lZGlhIF0pIHtcbiAgICAgICAgICAgICAgICBjYW5QbGF5QWxsLnB1c2godGhpcy5hcGkubWVkaWFzWyBtZWRpYSBdLnN1YnNjcmlwdGlvbnMuY2FuUGxheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhblBsYXlBbGxTdWJzY3JpcHRpb24gPSBjb21iaW5lTGF0ZXN0KGNhblBsYXlBbGwsXG4gICAgICAgICAgICAoLi4ucGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGFsbFJlYWR5OiBib29sZWFuID0gcGFyYW1zLnNvbWUoZXZlbnQgPT4gZXZlbnQudGFyZ2V0LnJlYWR5U3RhdGUgPT09IDQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFsbFJlYWR5ICYmICF0aGlzLnN5bmNTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydFN5bmMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zeW5jU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHN0YXJ0U3luYygpIHtcbiAgICAgICAgdGhpcy5zeW5jU3Vic2NyaXB0aW9uID0gdGltZXIoMCwgMTAwMCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IG1lZGlhIGluIHRoaXMuYXBpLm1lZGlhcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hcGkubWVkaWFzWyBtZWRpYSBdICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGlmZjogbnVtYmVyID0gdGhpcy5hcGkubWVkaWFzWyBtZWRpYSBdLmN1cnJlbnRUaW1lIC0gdGhpcy5jdXJyZW50VGltZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpZmYgPCAtMC4zIHx8IGRpZmYgPiAwLjMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlBdGZlclN5bmMgPSAodGhpcy5zdGF0ZSA9PT0gVmdTdGF0ZXMuVkdfUExBWUlORyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGkubWVkaWFzWyBtZWRpYSBdLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGkubWVkaWFzWyBtZWRpYSBdLmN1cnJlbnRUaW1lID0gdGhpcy5jdXJyZW50VGltZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYXlBdGZlclN5bmMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpLm1lZGlhc1sgbWVkaWEgXS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUF0ZmVyU3luYyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbk11dGF0aW9uKG11dGF0aW9uczogQXJyYXk8TXV0YXRpb25SZWNvcmQ+KSB7XG4gICAgICAgIC8vIERldGVjdCBjaGFuZ2VzIG9ubHkgZm9yIHNvdXJjZSBlbGVtZW50cyBvciBzcmMgYXR0cmlidXRlXG4gICAgICAgIGZvciAobGV0IGk9MCwgbD1tdXRhdGlvbnMubGVuZ3RoOyBpPGw7IGkrKykge1xuICAgICAgICAgICAgbGV0IG11dDogTXV0YXRpb25SZWNvcmQgPSBtdXRhdGlvbnNbaV07XG5cbiAgICAgICAgICAgIGlmIChtdXQudHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIG11dC5hdHRyaWJ1dGVOYW1lID09PSAnc3JjJykge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgbG9hZCBzcmMgZmlsZSBpZiBpdCdzIG5vdCBhIGJsb2IgKGZvciBEQVNIIC8gSExTIHNvdXJjZXMpXG4gICAgICAgICAgICAgICAgaWYgKG11dC50YXJnZXRbJ3NyYyddICYmIG11dC50YXJnZXRbJ3NyYyddLmxlbmd0aCA+IDAgJiYgbXV0LnRhcmdldFsnc3JjJ10uaW5kZXhPZignYmxvYjonKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkTWVkaWEoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtdXQudHlwZSA9PT0gJ2NoaWxkTGlzdCcgJiYgbXV0LnJlbW92ZWROb2Rlcy5sZW5ndGggJiYgbXV0LnJlbW92ZWROb2Rlc1swXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc291cmNlJykge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZE1lZGlhKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkTWVkaWEoKSB7XG4gICAgICAgIHRoaXMudmdNZWRpYS5wYXVzZSgpO1xuICAgICAgICB0aGlzLnZnTWVkaWEuY3VycmVudFRpbWUgPSAwO1xuXG4gICAgICAgIC8vIFN0YXJ0IGJ1ZmZlcmluZyB1bnRpbCB3ZSBjYW4gcGxheSB0aGUgbWVkaWEgZmlsZVxuICAgICAgICB0aGlzLnN0b3BCdWZmZXJDaGVjaygpO1xuICAgICAgICB0aGlzLmlzQnVmZmVyRGV0ZWN0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmJ1ZmZlckRldGVjdGVkLm5leHQodGhpcy5pc0J1ZmZlckRldGVjdGVkKTtcblxuICAgICAgICAvLyBUT0RPOiBUaGlzIGlzIHVnbHksIHdlIHNob3VsZCBmaW5kIHNvbWV0aGluZyBjbGVhbmVyLiBGb3Igc29tZSByZWFzb24gYSBUaW1lck9ic2VydmFibGUgZG9lc24ndCB3b3Jrcy5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnZnTWVkaWEubG9hZCgpLCAxMCk7XG4gICAgfVxuXG4gICAgcGxheSgpIHtcbiAgICAgICAgLy8gc2hvcnQtY2lyY3VpdCBpZiBhbHJlYWR5IHBsYXlpbmdcbiAgICAgICAgaWYgKHRoaXMucGxheVByb21pc2UgfHwgKHRoaXMuc3RhdGUgIT09IFZnU3RhdGVzLlZHX1BBVVNFRCAmJiB0aGlzLnN0YXRlICE9PSBWZ1N0YXRlcy5WR19FTkRFRCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGxheVByb21pc2UgPSB0aGlzLnZnTWVkaWEucGxheSgpO1xuXG4gICAgICAgIC8vIGJyb3dzZXIgaGFzIGFzeW5jIHBsYXkgcHJvbWlzZVxuICAgICAgICBpZiAodGhpcy5wbGF5UHJvbWlzZSAmJiB0aGlzLnBsYXlQcm9taXNlLnRoZW4gJiYgdGhpcy5wbGF5UHJvbWlzZS5jYXRjaCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5UHJvbWlzZVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5UHJvbWlzZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlQcm9taXNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVsaWJlcmF0ZWx5IGVtcHR5IGZvciB0aGUgc2FrZSBvZiBlYXRpbmcgY29uc29sZSBub2lzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucGxheVByb21pc2U7XG4gICAgfVxuXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIC8vIGJyb3dzZXIgaGFzIGFzeW5jIHBsYXkgcHJvbWlzZVxuICAgICAgICBpZiAodGhpcy5wbGF5UHJvbWlzZSkge1xuICAgICAgICAgICAgdGhpcy5wbGF5UHJvbWlzZVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52Z01lZGlhLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZnTWVkaWEucGF1c2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBpZCgpIHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIHJldHVybiB1bmRlZmluZWQgaWYgdmdNZWRpYSBzdGlsbCBkb2Vzbid0IGV4aXN0XG4gICAgICAgIGxldCByZXN1bHQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMudmdNZWRpYSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy52Z01lZGlhLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBnZXQgZHVyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZnTWVkaWEuZHVyYXRpb247XG4gICAgfVxuXG4gICAgc2V0IGN1cnJlbnRUaW1lKHNlY29uZHMpIHtcbiAgICAgICAgdGhpcy52Z01lZGlhLmN1cnJlbnRUaW1lID0gc2Vjb25kcztcbiAgICAgICAgLy8gdGhpcy5lbGVtLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFZnRXZlbnRzLlZHX1NFRUspKTtcbiAgICB9XG5cbiAgICBnZXQgY3VycmVudFRpbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZnTWVkaWEuY3VycmVudFRpbWU7XG4gICAgfVxuXG4gICAgc2V0IHZvbHVtZSh2b2x1bWUpIHtcbiAgICAgICAgdGhpcy52Z01lZGlhLnZvbHVtZSA9IHZvbHVtZTtcbiAgICB9XG5cbiAgICBnZXQgdm9sdW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52Z01lZGlhLnZvbHVtZTtcbiAgICB9XG5cbiAgICBzZXQgcGxheWJhY2tSYXRlKHJhdGUpIHtcbiAgICAgICAgdGhpcy52Z01lZGlhLnBsYXliYWNrUmF0ZSA9IHJhdGU7XG4gICAgfVxuXG4gICAgZ2V0IHBsYXliYWNrUmF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmdNZWRpYS5wbGF5YmFja1JhdGU7XG4gICAgfVxuXG4gICAgZ2V0IGJ1ZmZlcmVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52Z01lZGlhLmJ1ZmZlcmVkO1xuICAgIH1cblxuICAgIGdldCB0ZXh0VHJhY2tzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52Z01lZGlhLnRleHRUcmFja3M7XG4gICAgfVxuXG4gICAgb25DYW5QbGF5KGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5pc0J1ZmZlckRldGVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnVmZmVyRGV0ZWN0ZWQubmV4dCh0aGlzLmlzQnVmZmVyRGV0ZWN0ZWQpO1xuICAgICAgICB0aGlzLmNhblBsYXkgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgb25DYW5QbGF5VGhyb3VnaChldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuaXNCdWZmZXJEZXRlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ1ZmZlckRldGVjdGVkLm5leHQodGhpcy5pc0J1ZmZlckRldGVjdGVkKTtcbiAgICAgICAgdGhpcy5jYW5QbGF5VGhyb3VnaCA9IHRydWU7XG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBvbkxvYWRNZXRhZGF0YShldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuaXNNZXRhZGF0YUxvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy50aW1lID0ge1xuICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3RhbDogdGhpcy5kdXJhdGlvbiAqIDEwMDBcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gVmdTdGF0ZXMuVkdfUEFVU0VEO1xuXG4gICAgICAgIC8vIExpdmUgc3RyZWFtaW5nIGNoZWNrXG4gICAgICAgIGxldCB0Om51bWJlciA9IE1hdGgucm91bmQodGhpcy50aW1lLnRvdGFsKTtcbiAgICAgICAgdGhpcy5pc0xpdmUgPSAodCA9PT0gSW5maW5pdHkpO1xuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgb25XYWl0KGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5pc1dhaXRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgb25Db21wbGV0ZShldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXRlID0gVmdTdGF0ZXMuVkdfRU5ERUQ7XG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBvblN0YXJ0UGxheWluZyhldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBWZ1N0YXRlcy5WR19QTEFZSU5HO1xuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgb25QbGF5KGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFZnU3RhdGVzLlZHX1BMQVlJTkc7XG5cbiAgICAgICAgaWYgKHRoaXMudmdNYXN0ZXIpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zeW5jU3Vic2NyaXB0aW9uIHx8IHRoaXMuc3luY1N1YnNjcmlwdGlvbi5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0U3luYygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGFydEJ1ZmZlckNoZWNrKCk7XG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBvblBhdXNlKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFZnU3RhdGVzLlZHX1BBVVNFRDtcblxuICAgICAgICBpZiAodGhpcy52Z01hc3Rlcikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBsYXlBdGZlclN5bmMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN5bmNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RvcEJ1ZmZlckNoZWNrKCk7XG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBvblRpbWVVcGRhdGUoZXZlbnQ6IGFueSkge1xuICAgICAgICBsZXQgZW5kID0gdGhpcy5idWZmZXJlZC5sZW5ndGggLSAxO1xuXG4gICAgICAgIHRoaXMudGltZSA9IHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IHRoaXMuY3VycmVudFRpbWUgKiAxMDAwLFxuICAgICAgICAgICAgdG90YWw6IHRoaXMudGltZS50b3RhbCxcbiAgICAgICAgICAgIGxlZnQ6ICh0aGlzLmR1cmF0aW9uIC0gdGhpcy5jdXJyZW50VGltZSkgKiAxMDAwXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGVuZCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IHsgZW5kOiB0aGlzLmJ1ZmZlcmVkLmVuZChlbmQpICogMTAwMCB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBvblByb2dyZXNzKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgbGV0IGVuZCA9IHRoaXMuYnVmZmVyZWQubGVuZ3RoIC0gMTtcblxuICAgICAgICBpZiAoZW5kID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyID0geyBlbmQ6IHRoaXMuYnVmZmVyZWQuZW5kKGVuZCkgKiAxMDAwIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIG9uVm9sdW1lQ2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgLy8gVE9ETzogU2F2ZSB0byBsb2NhbHN0b3JhZ2UgdGhlIGN1cnJlbnQgdm9sdW1lXG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBvbkVycm9yKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgLy8gVE9ETzogSGFuZGxlIGVycm9yIG1lc3NhZ2VzXG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMzgyODI0MS83Nzk1MjlcbiAgICBidWZmZXJDaGVjaygpIHtcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gMSAvIHRoaXMuY2hlY2tJbnRlcnZhbDtcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheVBvcyA9IHRoaXMuY3VycmVudFRpbWU7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzQnVmZmVyRGV0ZWN0ZWQgJiYgdGhpcy5jdXJyZW50UGxheVBvcyA8ICh0aGlzLmxhc3RQbGF5UG9zICsgb2Zmc2V0KSkge1xuICAgICAgICAgICAgdGhpcy5pc0J1ZmZlckRldGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzQnVmZmVyRGV0ZWN0ZWQgJiYgdGhpcy5jdXJyZW50UGxheVBvcyA+ICh0aGlzLmxhc3RQbGF5UG9zICsgb2Zmc2V0KSkge1xuICAgICAgICAgICAgdGhpcy5pc0J1ZmZlckRldGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcmV2ZW50IGNhbGxzIHRvIGJ1ZmZlckNoZWNrIGFmdGVyIG5nT25EZXN0cm95IGhhdmUgYmVlbiBjYWxsZWRcbiAgICAgICAgaWYgKCF0aGlzLmJ1ZmZlckRldGVjdGVkLmNsb3NlZCkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJEZXRlY3RlZC5uZXh0KHRoaXMuaXNCdWZmZXJEZXRlY3RlZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxhc3RQbGF5UG9zID0gdGhpcy5jdXJyZW50UGxheVBvcztcbiAgICB9XG5cbiAgICBzdGFydEJ1ZmZlckNoZWNrKCkge1xuICAgICAgICB0aGlzLmNoZWNrQnVmZmVyU3Vic2NyaXB0aW9uID0gdGltZXIoMCwgdGhpcy5jaGVja0ludGVydmFsKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWZmZXJDaGVjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0b3BCdWZmZXJDaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tCdWZmZXJTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tCdWZmZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNCdWZmZXJEZXRlY3RlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYnVmZmVyRGV0ZWN0ZWQubmV4dCh0aGlzLmlzQnVmZmVyRGV0ZWN0ZWQpO1xuICAgIH1cblxuICAgIHNlZWtUaW1lKHZhbHVlOm51bWJlciwgYnlQZXJjZW50OmJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgc2Vjb25kOm51bWJlcjtcbiAgICAgICAgbGV0IGR1cmF0aW9uOm51bWJlciA9IHRoaXMuZHVyYXRpb247XG5cbiAgICAgICAgaWYgKGJ5UGVyY2VudCkge1xuICAgICAgICAgICAgc2Vjb25kID0gdmFsdWUgKiBkdXJhdGlvbiAvIDEwMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlY29uZCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IHNlY29uZDtcbiAgICB9XG5cbiAgICBhZGRUZXh0VHJhY2sodHlwZTpzdHJpbmcsIGxhYmVsPzpzdHJpbmcsIGxhbmd1YWdlPzpzdHJpbmcsIG1vZGU/OidkaXNhYmxlZCcgfCAnaGlkZGVuJyB8ICdzaG93aW5nJyk6IFRleHRUcmFjayB7XG4gICAgICAgIGNvbnN0IG5ld1RyYWNrOlRleHRUcmFjayA9IHRoaXMudmdNZWRpYS5hZGRUZXh0VHJhY2sodHlwZSwgbGFiZWwsIGxhbmd1YWdlKTtcblxuICAgICAgICBpZiAobW9kZSkge1xuICAgICAgICAgICAgbmV3VHJhY2subW9kZSA9IG1vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld1RyYWNrO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnZnTWVkaWEuc3JjID0gJyc7XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5jYW5QbGF5T2JzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuY2FuUGxheVRocm91Z2hPYnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5sb2FkZWRNZXRhZGF0YU9icy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLndhaXRpbmdPYnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc09icy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLmVuZGVkT2JzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMucGxheWluZ09icy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnBsYXlPYnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5wYXVzZU9icy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnRpbWVVcGRhdGVPYnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy52b2x1bWVDaGFuZ2VPYnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5lcnJvck9icy51bnN1YnNjcmliZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLmNoZWNrQnVmZmVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQnVmZmVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnN5bmNTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc3luY1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5idWZmZXJEZXRlY3RlZC5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLmJ1ZmZlckRldGVjdGVkLnVuc3Vic2NyaWJlKCk7XG5cbiAgICAgICAgdGhpcy5hcGkudW5yZWdpc3Rlck1lZGlhKHRoaXMpO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/core/vg-player/vg-player.js":
/*!******************************************************************!*\
  !*** ./node_modules/videogular2/src/core/vg-player/vg-player.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var vg_fullscreen_api_1 = __webpack_require__(/*! ../services/vg-fullscreen-api */ "./node_modules/videogular2/src/core/services/vg-fullscreen-api.js");
var vg_utils_1 = __webpack_require__(/*! ../services/vg-utils */ "./node_modules/videogular2/src/core/services/vg-utils.js");
var vg_media_1 = __webpack_require__(/*! ../vg-media/vg-media */ "./node_modules/videogular2/src/core/vg-media/vg-media.js");
var vg_controls_hidden_1 = __webpack_require__(/*! ../services/vg-controls-hidden */ "./node_modules/videogular2/src/core/services/vg-controls-hidden.js");
var VgPlayer = /** @class */ (function () {
    function VgPlayer(ref, api, fsAPI, controlsHidden) {
        this.api = api;
        this.fsAPI = fsAPI;
        this.controlsHidden = controlsHidden;
        this.isFullscreen = false;
        this.isNativeFullscreen = false;
        this.areControlsHidden = false;
        this.onPlayerReady = new core_1.EventEmitter();
        this.onMediaReady = new core_1.EventEmitter();
        this.subscriptions = [];
        this.elem = ref.nativeElement;
        this.api.registerElement(this.elem);
    }
    VgPlayer.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.medias.toArray().forEach(function (media) {
            _this.api.registerMedia(media);
        });
        this.fsAPI.init(this.elem, this.medias);
        this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
        this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this)));
        this.api.onPlayerReady(this.fsAPI);
        this.onPlayerReady.emit(this.api);
    };
    VgPlayer.prototype.onChangeFullscreen = function (fsState) {
        if (!this.fsAPI.nativeFullscreen) {
            this.isFullscreen = fsState;
            this.zIndex = fsState ? vg_utils_1.VgUtils.getZIndex().toString() : 'auto';
        }
        else {
            this.isNativeFullscreen = fsState;
        }
    };
    VgPlayer.prototype.onHideControls = function (hidden) {
        this.areControlsHidden = hidden;
    };
    VgPlayer.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgPlayer.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-player',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<ng-content></ng-content>",
                    styles: ["\n        vg-player {\n            font-family: 'videogular';\n            position: relative;\n            display: flex;\n            width: 100%;\n            height: 100%;\n            overflow: hidden;\n            background-color: black;\n        }\n\n        vg-player.fullscreen {\n            position: fixed;\n            left: 0;\n            top: 0;\n        }\n\n        vg-player.native-fullscreen.controls-hidden {\n            cursor: none;\n        }\n    "],
                    providers: [vg_api_1.VgAPI, vg_fullscreen_api_1.VgFullscreenAPI, vg_controls_hidden_1.VgControlsHidden]
                },] },
    ];
    /** @nocollapse */
    VgPlayer.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: vg_api_1.VgAPI },
        { type: vg_fullscreen_api_1.VgFullscreenAPI },
        { type: vg_controls_hidden_1.VgControlsHidden }
    ]; };
    VgPlayer.propDecorators = {
        isFullscreen: [{ type: core_1.HostBinding, args: ['class.fullscreen',] }],
        isNativeFullscreen: [{ type: core_1.HostBinding, args: ['class.native-fullscreen',] }],
        areControlsHidden: [{ type: core_1.HostBinding, args: ['class.controls-hidden',] }],
        zIndex: [{ type: core_1.HostBinding, args: ['style.z-index',] }],
        onPlayerReady: [{ type: core_1.Output }],
        onMediaReady: [{ type: core_1.Output }],
        medias: [{ type: core_1.ContentChildren, args: [vg_media_1.VgMedia,] }]
    };
    return VgPlayer;
}());
exports.VgPlayer = VgPlayer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctcGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctcGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBU3VCO0FBQ3ZCLDZDQUEyQztBQUMzQyxtRUFBZ0U7QUFDaEUsaURBQStDO0FBQy9DLGlEQUErQztBQUUvQyxxRUFBa0U7QUFFbEU7SUE4Q0ksa0JBQVksR0FBZSxFQUFTLEdBQVUsRUFBUyxLQUFzQixFQUFVLGNBQWdDO1FBQW5GLFFBQUcsR0FBSCxHQUFHLENBQU87UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQWhCdEYsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDdkIsdUJBQWtCLEdBQVksS0FBSyxDQUFDO1FBQ3RDLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUl6RSxrQkFBYSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUd0RCxpQkFBWSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUtyRCxrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFHL0IsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBRTlCLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQscUNBQWtCLEdBQWxCO1FBQUEsaUJBWUM7UUFYRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7WUFDaEMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELHFDQUFrQixHQUFsQixVQUFtQixPQUFnQjtRQUMvQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO1lBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxrQkFBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDcEUsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztRQUN0QyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlDQUFjLEdBQWQsVUFBZSxNQUFlO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUM7SUFDcEMsQ0FBQztJQUVELDhCQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUNyRCxDQUFDOztnQkFqRkosZ0JBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDckIsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLE1BQU0sRUFBRSxDQUFFLDRkQW9CVCxDQUFFO29CQUNILFNBQVMsRUFBRSxDQUFFLGNBQUssRUFBRSxtQ0FBZSxFQUFFLHFDQUFnQixDQUFFO2lCQUMxRDs7OztnQkF2Q0csaUJBQVU7Z0JBTUwsY0FBSztnQkFDTCxtQ0FBZTtnQkFJZixxQ0FBZ0I7OzsrQkFnQ3BCLGtCQUFXLFNBQUMsa0JBQWtCO3FDQUM5QixrQkFBVyxTQUFDLHlCQUF5QjtvQ0FDckMsa0JBQVcsU0FBQyx1QkFBdUI7eUJBQ25DLGtCQUFXLFNBQUMsZUFBZTtnQ0FFM0IsYUFBTTsrQkFHTixhQUFNO3lCQUdOLHNCQUFlLFNBQUMsa0JBQU87O0lBeUM1QixlQUFDO0NBQUEsQUFsRkQsSUFrRkM7QUF2RFksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIE91dHB1dCxcbiAgICBDb21wb25lbnQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgUXVlcnlMaXN0LFxuICAgIEFmdGVyQ29udGVudEluaXQsXG4gICAgQ29udGVudENoaWxkcmVuLCBWaWV3RW5jYXBzdWxhdGlvbiwgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICcuLi9zZXJ2aWNlcy92Zy1hcGknO1xuaW1wb3J0IHsgVmdGdWxsc2NyZWVuQVBJIH0gZnJvbSAnLi4vc2VydmljZXMvdmctZnVsbHNjcmVlbi1hcGknO1xuaW1wb3J0IHsgVmdVdGlscyB9IGZyb20gJy4uL3NlcnZpY2VzL3ZnLXV0aWxzJztcbmltcG9ydCB7IFZnTWVkaWEgfSBmcm9tICcuLi92Zy1tZWRpYS92Zy1tZWRpYSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFZnQ29udHJvbHNIaWRkZW4gfSBmcm9tICcuLi9zZXJ2aWNlcy92Zy1jb250cm9scy1oaWRkZW4nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLXBsYXllcicsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLXBsYXllciB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3ZpZGVvZ3VsYXInO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctcGxheWVyLmZ1bGxzY3JlZW4ge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLXBsYXllci5uYXRpdmUtZnVsbHNjcmVlbi5jb250cm9scy1oaWRkZW4ge1xuICAgICAgICAgICAgY3Vyc29yOiBub25lO1xuICAgICAgICB9XG4gICAgYCBdLFxuICAgIHByb3ZpZGVyczogWyBWZ0FQSSwgVmdGdWxsc2NyZWVuQVBJLCBWZ0NvbnRyb2xzSGlkZGVuIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdQbGF5ZXIgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICAgIGVsZW06IEhUTUxFbGVtZW50O1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mdWxsc2NyZWVuJykgaXNGdWxsc2NyZWVuOiBib29sZWFuID0gZmFsc2U7XG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5uYXRpdmUtZnVsbHNjcmVlbicpIGlzTmF0aXZlRnVsbHNjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuY29udHJvbHMtaGlkZGVuJykgYXJlQ29udHJvbHNIaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLnotaW5kZXgnKSB6SW5kZXg6IHN0cmluZztcblxuICAgIEBPdXRwdXQoKVxuICAgIG9uUGxheWVyUmVhZHk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgb25NZWRpYVJlYWR5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oVmdNZWRpYSlcbiAgICBtZWRpYXM6IFF1ZXJ5TGlzdDxWZ01lZGlhPjtcblxuICAgIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBhcGk6IFZnQVBJLCBwdWJsaWMgZnNBUEk6IFZnRnVsbHNjcmVlbkFQSSwgcHJpdmF0ZSBjb250cm9sc0hpZGRlbjogVmdDb250cm9sc0hpZGRlbikge1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcblxuICAgICAgICB0aGlzLmFwaS5yZWdpc3RlckVsZW1lbnQodGhpcy5lbGVtKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMubWVkaWFzLnRvQXJyYXkoKS5mb3JFYWNoKChtZWRpYSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcGkucmVnaXN0ZXJNZWRpYShtZWRpYSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZnNBUEkuaW5pdCh0aGlzLmVsZW0sIHRoaXMubWVkaWFzKTtcblxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmZzQVBJLm9uQ2hhbmdlRnVsbHNjcmVlbi5zdWJzY3JpYmUodGhpcy5vbkNoYW5nZUZ1bGxzY3JlZW4uYmluZCh0aGlzKSkpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmNvbnRyb2xzSGlkZGVuLmlzSGlkZGVuLnN1YnNjcmliZSh0aGlzLm9uSGlkZUNvbnRyb2xzLmJpbmQodGhpcykpKTtcblxuICAgICAgICB0aGlzLmFwaS5vblBsYXllclJlYWR5KHRoaXMuZnNBUEkpO1xuICAgICAgICB0aGlzLm9uUGxheWVyUmVhZHkuZW1pdCh0aGlzLmFwaSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VGdWxsc2NyZWVuKGZzU3RhdGU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCF0aGlzLmZzQVBJLm5hdGl2ZUZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIHRoaXMuaXNGdWxsc2NyZWVuID0gZnNTdGF0ZTtcbiAgICAgICAgICAgIHRoaXMuekluZGV4ID0gZnNTdGF0ZSA/IFZnVXRpbHMuZ2V0WkluZGV4KCkudG9TdHJpbmcoKSA6ICdhdXRvJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNOYXRpdmVGdWxsc2NyZWVuID0gZnNTdGF0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSGlkZUNvbnRyb2xzKGhpZGRlbjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmFyZUNvbnRyb2xzSGlkZGVuID0gaGlkZGVuO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/videogular2/src/overlay-play/overlay-play.js":
/*!*******************************************************************!*\
  !*** ./node_modules/videogular2/src/overlay-play/overlay-play.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var vg_overlay_play_1 = __webpack_require__(/*! ./vg-overlay-play */ "./node_modules/videogular2/src/overlay-play/vg-overlay-play.js");
var VgOverlayPlayModule = /** @class */ (function () {
    function VgOverlayPlayModule() {
    }
    VgOverlayPlayModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [
                        vg_overlay_play_1.VgOverlayPlay
                    ],
                    exports: [
                        vg_overlay_play_1.VgOverlayPlay
                    ]
                },] },
    ];
    return VgOverlayPlayModule;
}());
exports.VgOverlayPlayModule = VgOverlayPlayModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1wbGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3ZlcmxheS1wbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQThDO0FBQzlDLDBDQUErQztBQUUvQyxxREFBZ0Q7QUFFaEQ7SUFBQTtJQVNrQyxDQUFDOztnQkFUbEMsZUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFFLHFCQUFZLENBQUU7b0JBQ3pCLFlBQVksRUFBRTt3QkFDViwrQkFBYTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLCtCQUFhO3FCQUNoQjtpQkFDSjs7SUFDaUMsMEJBQUM7Q0FBQSxBQVRuQyxJQVNtQztBQUF0QixrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1ZnT3ZlcmxheVBsYXl9IGZyb20gJy4vdmctb3ZlcmxheS1wbGF5JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbIENvbW1vbk1vZHVsZSBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBWZ092ZXJsYXlQbGF5XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFZnT3ZlcmxheVBsYXlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFZnT3ZlcmxheVBsYXlNb2R1bGUge31cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/overlay-play/vg-overlay-play.js":
/*!**********************************************************************!*\
  !*** ./node_modules/videogular2/src/overlay-play/vg-overlay-play.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var vg_states_1 = __webpack_require__(/*! ../core/states/vg-states */ "./node_modules/videogular2/src/core/states/vg-states.js");
var vg_fullscreen_api_1 = __webpack_require__(/*! ../core/services/vg-fullscreen-api */ "./node_modules/videogular2/src/core/services/vg-fullscreen-api.js");
var vg_controls_hidden_1 = __webpack_require__(/*! ../core/services/vg-controls-hidden */ "./node_modules/videogular2/src/core/services/vg-controls-hidden.js");
var VgOverlayPlay = /** @class */ (function () {
    function VgOverlayPlay(ref, API, fsAPI, controlsHidden) {
        this.API = API;
        this.fsAPI = fsAPI;
        this.controlsHidden = controlsHidden;
        this.isNativeFullscreen = false;
        this.areControlsHidden = false;
        this.subscriptions = [];
        this.isBuffering = false;
        this.elem = ref.nativeElement;
    }
    VgOverlayPlay.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgOverlayPlay.prototype.onPlayerReady = function () {
        var _this = this;
        this.target = this.API.getMediaById(this.vgFor);
        this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
        this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this)));
        this.subscriptions.push(this.target.subscriptions.bufferDetected.subscribe(function (isBuffering) { return _this.onUpdateBuffer(isBuffering); }));
    };
    VgOverlayPlay.prototype.onUpdateBuffer = function (isBuffering) {
        this.isBuffering = isBuffering;
    };
    VgOverlayPlay.prototype.onChangeFullscreen = function (fsState) {
        if (this.fsAPI.nativeFullscreen) {
            this.isNativeFullscreen = fsState;
        }
    };
    VgOverlayPlay.prototype.onHideControls = function (hidden) {
        this.areControlsHidden = hidden;
    };
    VgOverlayPlay.prototype.onClick = function () {
        var state = this.getState();
        switch (state) {
            case vg_states_1.VgStates.VG_PLAYING:
                this.target.pause();
                break;
            case vg_states_1.VgStates.VG_PAUSED:
            case vg_states_1.VgStates.VG_ENDED:
                this.target.play();
                break;
        }
    };
    VgOverlayPlay.prototype.getState = function () {
        var state = vg_states_1.VgStates.VG_PAUSED;
        if (this.target) {
            if (this.target.state instanceof Array) {
                for (var i = 0, l = this.target.state.length; i < l; i++) {
                    if (this.target.state[i] === vg_states_1.VgStates.VG_PLAYING) {
                        state = vg_states_1.VgStates.VG_PLAYING;
                        break;
                    }
                }
            }
            else {
                state = this.target.state;
            }
        }
        return state;
    };
    VgOverlayPlay.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgOverlayPlay.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-overlay-play',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<div class=\"vg-overlay-play\"\n                    [class.native-fullscreen]=\"isNativeFullscreen\"\n                    [class.controls-hidden]=\"areControlsHidden\">\n                   <div class=\"overlay-play-container\"\n                        [class.vg-icon-play_arrow]=\"getState() !== 'playing'\">\n                   </div>\n               </div>",
                    styles: ["\n        vg-overlay-play {\n            z-index: 200;\n        }\n\n        vg-overlay-play.is-buffering {\n            display: none;\n        }\n\n        vg-overlay-play .vg-overlay-play {\n            transition: all 0.5s;\n            cursor: pointer;\n            position: absolute;\n            display: block;\n            color: white;\n            width: 100%;\n            height: 100%;\n            font-size: 80px;\n            filter: alpha(opacity=60);\n            opacity: 0.6;\n        }\n\n        vg-overlay-play .vg-overlay-play.native-fullscreen.controls-hidden {\n            cursor: none;\n        }\n\n        vg-overlay-play .vg-overlay-play .overlay-play-container.vg-icon-play_arrow {\n            pointer-events: none;\n            width: 100%;\n            height: 100%;\n            position: absolute;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            font-size: 80px;\n        }\n\n        vg-overlay-play .vg-overlay-play:hover {\n            filter: alpha(opacity=100);\n            opacity: 1;\n        }\n\n        vg-overlay-play .vg-overlay-play:hover .overlay-play-container.vg-icon-play_arrow:before {\n            transform: scale(1.2);\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgOverlayPlay.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: vg_api_1.VgAPI },
        { type: vg_fullscreen_api_1.VgFullscreenAPI },
        { type: vg_controls_hidden_1.VgControlsHidden }
    ]; };
    VgOverlayPlay.propDecorators = {
        vgFor: [{ type: core_1.Input }],
        isBuffering: [{ type: core_1.HostBinding, args: ['class.is-buffering',] }],
        onClick: [{ type: core_1.HostListener, args: ['click',] }]
    };
    return VgOverlayPlay;
}());
exports.VgOverlayPlay = VgOverlayPlay;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctb3ZlcmxheS1wbGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctb3ZlcmxheS1wbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBR3VCO0FBQ3ZCLGtEQUFnRDtBQUNoRCxzREFBb0Q7QUFFcEQsd0VBQXFFO0FBQ3JFLDBFQUF1RTtBQUV2RTtJQXFFSSx1QkFBWSxHQUFlLEVBQVMsR0FBVSxFQUFTLEtBQXNCLEVBQVUsY0FBZ0M7UUFBbkYsUUFBRyxHQUFILEdBQUcsQ0FBTztRQUFTLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBUHZILHVCQUFrQixHQUFZLEtBQUssQ0FBQztRQUNwQyxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFFbkMsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBRUEsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFHNUQsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQzdGLENBQUM7SUFDTCxDQUFDO0lBRUQscUNBQWEsR0FBYjtRQUFBLGlCQVNDO1FBUkcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsSUFB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Qzs7Z0JBakpKLGdCQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSx3V0FNUTtvQkFDbEIsTUFBTSxFQUFFLENBQUUsOHVDQTZDVCxDQUFFO2lCQUNOOzs7O2dCQWpFNkIsaUJBQVU7Z0JBRy9CLGNBQUs7Z0JBR0wsbUNBQWU7Z0JBQ2YscUNBQWdCOzs7d0JBNERwQixZQUFLOzhCQVNMLGtCQUFXLFNBQUMsb0JBQW9COzBCQXdDaEMsbUJBQVksU0FBQyxPQUFPOztJQXVDekIsb0JBQUM7Q0FBQSxBQWxKRCxJQWtKQztBQXpGWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkRlc3Ryb3ksXG4gICAgSG9zdEJpbmRpbmdcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7IFZnU3RhdGVzIH0gZnJvbSAnLi4vY29yZS9zdGF0ZXMvdmctc3RhdGVzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVmdGdWxsc2NyZWVuQVBJIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy92Zy1mdWxsc2NyZWVuLWFwaSc7XG5pbXBvcnQgeyBWZ0NvbnRyb2xzSGlkZGVuIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy92Zy1jb250cm9scy1oaWRkZW4nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLW92ZXJsYXktcGxheScsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ2Zy1vdmVybGF5LXBsYXlcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MubmF0aXZlLWZ1bGxzY3JlZW5dPVwiaXNOYXRpdmVGdWxsc2NyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLmNvbnRyb2xzLWhpZGRlbl09XCJhcmVDb250cm9sc0hpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5LXBsYXktY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy52Zy1pY29uLXBsYXlfYXJyb3ddPVwiZ2V0U3RhdGUoKSAhPT0gJ3BsYXlpbmcnXCI+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5gLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLW92ZXJsYXktcGxheSB7XG4gICAgICAgICAgICB6LWluZGV4OiAyMDA7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1vdmVybGF5LXBsYXkuaXMtYnVmZmVyaW5nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1vdmVybGF5LXBsYXkgLnZnLW92ZXJsYXktcGxheSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgICAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NjApO1xuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG5cbiAgICAgICAgdmctb3ZlcmxheS1wbGF5IC52Zy1vdmVybGF5LXBsYXkubmF0aXZlLWZ1bGxzY3JlZW4uY29udHJvbHMtaGlkZGVuIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLW92ZXJsYXktcGxheSAudmctb3ZlcmxheS1wbGF5IC5vdmVybGF5LXBsYXktY29udGFpbmVyLnZnLWljb24tcGxheV9hcnJvdyB7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLW92ZXJsYXktcGxheSAudmctb3ZlcmxheS1wbGF5OmhvdmVyIHtcbiAgICAgICAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0xMDApO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLW92ZXJsYXktcGxheSAudmctb3ZlcmxheS1wbGF5OmhvdmVyIC5vdmVybGF5LXBsYXktY29udGFpbmVyLnZnLWljb24tcGxheV9hcnJvdzpiZWZvcmUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICB9XG4gICAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIFZnT3ZlcmxheVBsYXkgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgdmdGb3I6IHN0cmluZztcbiAgICBlbGVtOiBIVE1MRWxlbWVudDtcbiAgICB0YXJnZXQ6IGFueTtcblxuICAgIGlzTmF0aXZlRnVsbHNjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGFyZUNvbnRyb2xzSGlkZGVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1idWZmZXJpbmcnKSBpc0J1ZmZlcmluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgQVBJOiBWZ0FQSSwgcHVibGljIGZzQVBJOiBWZ0Z1bGxzY3JlZW5BUEksIHByaXZhdGUgY29udHJvbHNIaWRkZW46IFZnQ29udHJvbHNIaWRkZW4pIHtcbiAgICAgICAgdGhpcy5lbGVtID0gcmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLkFQSS5pc1BsYXllclJlYWR5KSB7XG4gICAgICAgICAgICB0aGlzLm9uUGxheWVyUmVhZHkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuQVBJLnBsYXllclJlYWR5RXZlbnQuc3Vic2NyaWJlKCgpID0+IHRoaXMub25QbGF5ZXJSZWFkeSgpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBsYXllclJlYWR5KCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMuQVBJLmdldE1lZGlhQnlJZCh0aGlzLnZnRm9yKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5mc0FQSS5vbkNoYW5nZUZ1bGxzY3JlZW4uc3Vic2NyaWJlKHRoaXMub25DaGFuZ2VGdWxsc2NyZWVuLmJpbmQodGhpcykpKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5jb250cm9sc0hpZGRlbi5pc0hpZGRlbi5zdWJzY3JpYmUodGhpcy5vbkhpZGVDb250cm9scy5iaW5kKHRoaXMpKSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgICAgICAgdGhpcy50YXJnZXQuc3Vic2NyaXB0aW9ucy5idWZmZXJEZXRlY3RlZC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgaXNCdWZmZXJpbmcgPT4gdGhpcy5vblVwZGF0ZUJ1ZmZlcihpc0J1ZmZlcmluZylcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZUJ1ZmZlcihpc0J1ZmZlcmluZykge1xuICAgICAgICB0aGlzLmlzQnVmZmVyaW5nID0gaXNCdWZmZXJpbmc7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VGdWxsc2NyZWVuKGZzU3RhdGU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuZnNBUEkubmF0aXZlRnVsbHNjcmVlbikge1xuICAgICAgICAgICAgdGhpcy5pc05hdGl2ZUZ1bGxzY3JlZW4gPSBmc1N0YXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25IaWRlQ29udHJvbHMoaGlkZGVuOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuYXJlQ29udHJvbHNIaWRkZW4gPSBoaWRkZW47XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIFZnU3RhdGVzLlZHX1BMQVlJTkc6XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQucGF1c2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBWZ1N0YXRlcy5WR19QQVVTRUQ6XG4gICAgICAgICAgICBjYXNlIFZnU3RhdGVzLlZHX0VOREVEOlxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnBsYXkoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFN0YXRlKCkge1xuICAgICAgICBsZXQgc3RhdGUgPSBWZ1N0YXRlcy5WR19QQVVTRUQ7XG5cbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXQuc3RhdGUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy50YXJnZXQuc3RhdGUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldC5zdGF0ZVsgaSBdID09PSBWZ1N0YXRlcy5WR19QTEFZSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IFZnU3RhdGVzLlZHX1BMQVlJTkc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpcy50YXJnZXQuc3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/videogular2/src/streaming/streaming.js":
/*!*************************************************************!*\
  !*** ./node_modules/videogular2/src/streaming/streaming.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var vg_dash_1 = __webpack_require__(/*! ./vg-dash/vg-dash */ "./node_modules/videogular2/src/streaming/vg-dash/vg-dash.js");
var vg_hls_1 = __webpack_require__(/*! ./vg-hls/vg-hls */ "./node_modules/videogular2/src/streaming/vg-hls/vg-hls.js");
var VgStreamingModule = /** @class */ (function () {
    function VgStreamingModule() {
    }
    VgStreamingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [
                        vg_dash_1.VgDASH, vg_hls_1.VgHLS
                    ],
                    exports: [
                        vg_dash_1.VgDASH, vg_hls_1.VgHLS
                    ]
                },] },
    ];
    return VgStreamingModule;
}());
exports.VgStreamingModule = VgStreamingModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RyZWFtaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQThDO0FBQzlDLDBDQUErQztBQUMvQyw2Q0FBMkM7QUFDM0MsMENBQXdDO0FBUXhDO0lBQUE7SUFTZ0MsQ0FBQzs7Z0JBVGhDLGVBQVEsU0FBQztvQkFDTixPQUFPLEVBQUUsQ0FBRSxxQkFBWSxDQUFFO29CQUN6QixZQUFZLEVBQUU7d0JBQ1YsZ0JBQU0sRUFBRSxjQUFLO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsZ0JBQU0sRUFBRSxjQUFLO3FCQUNoQjtpQkFDSjs7SUFDK0Isd0JBQUM7Q0FBQSxBQVRqQyxJQVNpQztBQUFwQiw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVmdEQVNIIH0gZnJvbSBcIi4vdmctZGFzaC92Zy1kYXNoXCI7XG5pbXBvcnQgeyBWZ0hMUyB9IGZyb20gXCIuL3ZnLWhscy92Zy1obHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJRFJNTGljZW5zZVNlcnZlciB7XG4gICAgW2luZGV4OiBzdHJpbmddOiB7XG4gICAgICAgIHNlcnZlclVSTDogc3RyaW5nO1xuICAgIH1cbn1cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbIENvbW1vbk1vZHVsZSBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBWZ0RBU0gsIFZnSExTXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFZnREFTSCwgVmdITFNcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFZnU3RyZWFtaW5nTW9kdWxlIHt9XG4iXX0=

/***/ }),

/***/ "./node_modules/videogular2/src/streaming/vg-dash/vg-dash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/videogular2/src/streaming/vg-dash/vg-dash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var VgDASH = /** @class */ (function () {
    function VgDASH(ref, API) {
        this.ref = ref;
        this.API = API;
        this.onGetBitrates = new core_1.EventEmitter();
        this.subscriptions = [];
    }
    VgDASH.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgDASH.prototype.onPlayerReady = function () {
        this.vgFor = this.ref.nativeElement.getAttribute('vgFor');
        this.target = this.API.getMediaById(this.vgFor);
        this.createPlayer();
    };
    VgDASH.prototype.ngOnChanges = function (changes) {
        if (changes['vgDash'] && changes['vgDash'].currentValue) {
            this.createPlayer();
        }
        else {
            this.destroyPlayer();
        }
    };
    VgDASH.prototype.createPlayer = function () {
        var _this = this;
        if (this.dash) {
            this.destroyPlayer();
        }
        // It's a DASH source
        if (this.vgDash && ((this.vgDash.indexOf('.mpd') > -1) ||
            (this.vgDash.indexOf('mpd-time-csf') > -1))) {
            var drmOptions = void 0;
            if (this.vgDRMLicenseServer) {
                drmOptions = this.vgDRMLicenseServer;
                if (this.vgDRMToken) {
                    for (var drmServer in drmOptions) {
                        drmOptions[drmServer].httpRequestHeaders = { Authorization: this.vgDRMToken };
                    }
                }
            }
            this.dash = dashjs.MediaPlayer().create();
            this.dash.getDebug().setLogToBrowserConsole(false);
            this.dash.initialize(this.ref.nativeElement);
            this.dash.setAutoPlay(false);
            this.dash.on(dashjs.MediaPlayer.events.STREAM_INITIALIZED, function () {
                var audioList = _this.dash.getBitrateInfoListFor('audio');
                var videoList = _this.dash.getBitrateInfoListFor('video');
                if (audioList.length > 1) {
                    audioList.forEach(function (item) { return item.qualityIndex = ++item.qualityIndex; });
                    audioList.unshift({
                        qualityIndex: 0,
                        width: 0,
                        height: 0,
                        bitrate: 0,
                        mediaType: 'video',
                        label: 'AUTO'
                    });
                    _this.onGetBitrates.emit(audioList);
                }
                if (videoList.length > 1) {
                    videoList.forEach(function (item) { return item.qualityIndex = ++item.qualityIndex; });
                    videoList.unshift({
                        qualityIndex: 0,
                        width: 0,
                        height: 0,
                        bitrate: 0,
                        mediaType: 'video',
                        label: 'AUTO'
                    });
                    _this.onGetBitrates.emit(videoList);
                }
            });
            if (drmOptions) {
                this.dash.setProtectionData(drmOptions);
            }
            this.dash.attachSource(this.vgDash);
        }
        else {
            if (this.target) {
                this.target.pause();
                this.target.seekTime(0);
                this.ref.nativeElement.src = this.vgDash;
            }
        }
    };
    VgDASH.prototype.setBitrate = function (bitrate) {
        if (this.dash) {
            if (bitrate.qualityIndex > 0) {
                if (this.dash.getAutoSwitchQualityFor(bitrate.mediaType)) {
                    this.dash.setAutoSwitchQualityFor(bitrate.mediaType, false);
                }
                var nextIndex = bitrate.qualityIndex - 1;
                this.dash.setQualityFor(bitrate.mediaType, nextIndex);
            }
            else {
                this.dash.setAutoSwitchQualityFor(bitrate.mediaType, true);
            }
        }
    };
    VgDASH.prototype.destroyPlayer = function () {
        if (this.dash) {
            this.dash.reset();
            this.dash = null;
        }
    };
    VgDASH.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
        this.destroyPlayer();
    };
    VgDASH.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[vgDash]',
                    exportAs: 'vgDash'
                },] },
    ];
    /** @nocollapse */
    VgDASH.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: vg_api_1.VgAPI }
    ]; };
    VgDASH.propDecorators = {
        vgDash: [{ type: core_1.Input }],
        vgDRMToken: [{ type: core_1.Input }],
        vgDRMLicenseServer: [{ type: core_1.Input }],
        onGetBitrates: [{ type: core_1.Output }]
    };
    return VgDASH;
}());
exports.VgDASH = VgDASH;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctZGFzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLWRhc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FVdUI7QUFDdkIscURBQW1EO0FBT25EO0lBaUJJLGdCQUFvQixHQUFjLEVBQVMsR0FBUztRQUFoQyxRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQVMsUUFBRyxHQUFILEdBQUcsQ0FBTTtRQVIxQyxrQkFBYSxHQUFrQyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQU01RSxrQkFBYSxHQUFtQixFQUFFLENBQUM7SUFFb0IsQ0FBQztJQUV4RCx5QkFBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQzdGLENBQUM7SUFDTCxDQUFDO0lBRUQsOEJBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsNEJBQVcsR0FBWCxVQUFZLE9BQXFCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxPQUFPLENBQUMsUUFBUSxD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LEFBaEpELElBZ0pDO0FBNUlZLHdCQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBEaXJlY3RpdmUsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbnB1dCxcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIE9uQ2hhbmdlcyxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25Jbml0LFxuICAgIE91dHB1dCxcbiAgICBFdmVudEVtaXR0ZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFZnQVBJIH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy92Zy1hcGknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJRFJNTGljZW5zZVNlcnZlciB9IGZyb20gJy4uL3N0cmVhbWluZyc7XG5pbXBvcnQgeyBCaXRyYXRlT3B0aW9uIH0gZnJvbSAnLi4vLi4vY29yZS9jb3JlJztcblxuZGVjbGFyZSBsZXQgZGFzaGpzO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t2Z0Rhc2hdJyxcbiAgICBleHBvcnRBczogJ3ZnRGFzaCdcbn0pXG5leHBvcnQgY2xhc3MgVmdEQVNIIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgdmdEYXNoOnN0cmluZztcbiAgICBASW5wdXQoKSB2Z0RSTVRva2VuOnN0cmluZztcbiAgICBASW5wdXQoKSB2Z0RSTUxpY2Vuc2VTZXJ2ZXI6SURSTUxpY2Vuc2VTZXJ2ZXI7XG5cbiAgICBAT3V0cHV0KCkgb25HZXRCaXRyYXRlczogRXZlbnRFbWl0dGVyPEJpdHJhdGVPcHRpb25bXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICB2Z0Zvcjogc3RyaW5nO1xuICAgIHRhcmdldDogYW55O1xuICAgIGRhc2g6YW55O1xuXG4gICAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVmOkVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6VmdBUEkpIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuQVBJLmlzUGxheWVyUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMub25QbGF5ZXJSZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5BUEkucGxheWVyUmVhZHlFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vblBsYXllclJlYWR5KCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoKSB7XG4gICAgICAgIHRoaXMudmdGb3IgPSB0aGlzLnJlZi5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgndmdGb3InKTtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG4gICAgICAgIHRoaXMuY3JlYXRlUGxheWVyKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczpTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzWyd2Z0Rhc2gnXSAmJiBjaGFuZ2VzWyd2Z0Rhc2gnXS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGxheWVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lQbGF5ZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZVBsYXllcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZGFzaCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95UGxheWVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJdCdzIGEgREFTSCBzb3VyY2VcbiAgICAgICAgaWYgKHRoaXMudmdEYXNoICYmIChcbiAgICAgICAgICAgICh0aGlzLnZnRGFzaC5pbmRleE9mKCcubXBkJykgPiAtMSkgfHxcbiAgICAgICAgICAgICh0aGlzLnZnRGFzaC5pbmRleE9mKCdtcGQtdGltZS1jc2YnKSA+IC0xKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBsZXQgZHJtT3B0aW9ucztcblxuICAgICAgICAgICAgaWYgKHRoaXMudmdEUk1MaWNlbnNlU2VydmVyKSB7XG4gICAgICAgICAgICAgICAgZHJtT3B0aW9ucyA9IHRoaXMudmdEUk1MaWNlbnNlU2VydmVyO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmdEUk1Ub2tlbikge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBkcm1TZXJ2ZXIgaW4gZHJtT3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJtT3B0aW9uc1tkcm1TZXJ2ZXJdLmh0dHBSZXF1ZXN0SGVhZGVycyA9IHsgQXV0aG9yaXphdGlvbjogdGhpcy52Z0RSTVRva2VuIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZGFzaCA9IGRhc2hqcy5NZWRpYVBsYXllcigpLmNyZWF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5kYXNoLmdldERlYnVnKCkuc2V0TG9nVG9Ccm93c2VyQ29uc29sZShmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmRhc2guaW5pdGlhbGl6ZSh0aGlzLnJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuZGFzaC5zZXRBdXRvUGxheShmYWxzZSk7XG5cbiAgICAgICAgICAgIHRoaXMuZGFzaC5vbihkYXNoanMuTWVkaWFQbGF5ZXIuZXZlbnRzLlNUUkVBTV9JTklUSUFMSVpFRCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvTGlzdCA9IHRoaXMuZGFzaC5nZXRCaXRyYXRlSW5mb0xpc3RGb3IoJ2F1ZGlvJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmlkZW9MaXN0ID0gdGhpcy5kYXNoLmdldEJpdHJhdGVJbmZvTGlzdEZvcigndmlkZW8nKTtcblxuICAgICAgICAgICAgICAgIGlmIChhdWRpb0xpc3QubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBhdWRpb0xpc3QuZm9yRWFjaChpdGVtID0+IGl0ZW0ucXVhbGl0eUluZGV4ID0gKytpdGVtLnF1YWxpdHlJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvTGlzdC51bnNoaWZ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1YWxpdHlJbmRleDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYml0cmF0ZTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhVHlwZTogJ3ZpZGVvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQVVUTydcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkdldEJpdHJhdGVzLmVtaXQoYXVkaW9MaXN0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodmlkZW9MaXN0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmlkZW9MaXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLnF1YWxpdHlJbmRleCA9ICsraXRlbS5xdWFsaXR5SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB2aWRlb0xpc3QudW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFsaXR5SW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpdHJhdGU6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYVR5cGU6ICd2aWRlbycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0FVVE8nXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25HZXRCaXRyYXRlcy5lbWl0KHZpZGVvTGlzdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChkcm1PcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXNoLnNldFByb3RlY3Rpb25EYXRhKGRybU9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRhc2guYXR0YWNoU291cmNlKHRoaXMudmdEYXNoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuc2Vla1RpbWUoMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWYubmF0aXZlRWxlbWVudC5zcmMgPSB0aGlzLnZnRGFzaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEJpdHJhdGUoYml0cmF0ZTogQml0cmF0ZU9wdGlvbikge1xuICAgICAgICBpZiAodGhpcy5kYXNoKSB7XG4gICAgICAgICAgICBpZiAoYml0cmF0ZS5xdWFsaXR5SW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGFzaC5nZXRBdXRvU3dpdGNoUXVhbGl0eUZvcihiaXRyYXRlLm1lZGlhVHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXNoLnNldEF1dG9Td2l0Y2hRdWFsaXR5Rm9yKGJpdHJhdGUubWVkaWFUeXBlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gYml0cmF0ZS5xdWFsaXR5SW5kZXggLSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuZGFzaC5zZXRRdWFsaXR5Rm9yKGJpdHJhdGUubWVkaWFUeXBlLCBuZXh0SW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhc2guc2V0QXV0b1N3aXRjaFF1YWxpdHlGb3IoYml0cmF0ZS5tZWRpYVR5cGUsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveVBsYXllcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZGFzaCkge1xuICAgICAgICAgICAgdGhpcy5kYXNoLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLmRhc2ggPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICAgICAgdGhpcy5kZXN0cm95UGxheWVyKCk7XG4gICAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/videogular2/src/streaming/vg-hls/vg-hls.js":
/*!*****************************************************************!*\
  !*** ./node_modules/videogular2/src/streaming/vg-hls/vg-hls.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var VgHLS = /** @class */ (function () {
    function VgHLS(ref, API) {
        this.ref = ref;
        this.API = API;
        this.vgHlsHeaders = {};
        this.onGetBitrates = new core_1.EventEmitter();
        this.subscriptions = [];
    }
    VgHLS.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgHLS.prototype.onPlayerReady = function () {
        var _this = this;
        this.crossorigin = this.ref.nativeElement.getAttribute('crossorigin');
        this.preload = this.ref.nativeElement.getAttribute('preload') !== 'none';
        this.vgFor = this.ref.nativeElement.getAttribute('vgFor');
        this.target = this.API.getMediaById(this.vgFor);
        this.config = {
            autoStartLoad: this.preload
        };
        this.config.xhrSetup = function (xhr, url) {
            // Send cookies
            if (_this.crossorigin === 'use-credentials') {
                xhr.withCredentials = true;
            }
            for (var _i = 0, _a = Object.keys(_this.vgHlsHeaders); _i < _a.length; _i++) {
                var key = _a[_i];
                xhr.setRequestHeader(key, _this.vgHlsHeaders[key]);
            }
        };
        this.createPlayer();
        if (!this.preload) {
            this.subscriptions.push(this.API.subscriptions.play.subscribe(function () {
                if (_this.hls) {
                    _this.hls.startLoad(0);
                }
            }));
        }
    };
    VgHLS.prototype.ngOnChanges = function (changes) {
        if (changes['vgHls'] && changes['vgHls'].currentValue) {
            this.createPlayer();
        }
        else if (changes['vgHlsHeaders'] && changes['vgHlsHeaders'].currentValue) {
            // Do nothing. We don't want to create a or destroy a player if the headers change.
        }
        else {
            this.destroyPlayer();
        }
    };
    VgHLS.prototype.createPlayer = function () {
        var _this = this;
        if (this.hls) {
            this.destroyPlayer();
        }
        // It's a HLS source
        if (this.vgHls && this.vgHls.indexOf('m3u8') > -1 && Hls.isSupported() && this.API.isPlayerReady) {
            var video = this.ref.nativeElement;
            this.hls = new Hls(this.config);
            this.hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
                var videoList = [];
                videoList.push({
                    qualityIndex: 0,
                    width: 0,
                    height: 0,
                    bitrate: 0,
                    mediaType: 'video',
                    label: 'AUTO'
                });
                data.levels.forEach(function (item, index) {
                    videoList.push({
                        qualityIndex: ++index,
                        width: item.width,
                        height: item.height,
                        bitrate: item.bitrate,
                        mediaType: 'video',
                        label: item.name
                    });
                });
                _this.onGetBitrates.emit(videoList);
            });
            this.hls.loadSource(this.vgHls);
            this.hls.attachMedia(video);
        }
        else {
            if (this.target && !!this.target.pause) {
                this.target.pause();
                this.target.seekTime(0);
                this.ref.nativeElement.src = this.vgHls;
            }
        }
    };
    VgHLS.prototype.setBitrate = function (bitrate) {
        if (this.hls) {
            this.hls.nextLevel = bitrate.qualityIndex - 1;
        }
    };
    VgHLS.prototype.destroyPlayer = function () {
        if (this.hls) {
            this.hls.destroy();
            this.hls = null;
        }
    };
    VgHLS.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
        this.destroyPlayer();
    };
    VgHLS.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[vgHls]',
                    exportAs: 'vgHls'
                },] },
    ];
    /** @nocollapse */
    VgHLS.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: vg_api_1.VgAPI }
    ]; };
    VgHLS.propDecorators = {
        vgHls: [{ type: core_1.Input }],
        vgHlsHeaders: [{ type: core_1.Input }],
        onGetBitrates: [{ type: core_1.Output }]
    };
    return VgHLS;
}());
exports.VgHLS = VgHLS;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctaGxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctaGxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBVXVCO0FBQ3ZCLHFEQUFtRDtBQU9uRDtJQW1CSSxlQUFvQixHQUFjLEVBQVMsR0FBUztRQUFoQyxRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQVMsUUFBRyxHQUFILEdBQUcsQ0FBTTtRQWIzQyxpQkFBWSxHQUE0QixFQUFFLENBQUM7UUFFMUMsa0JBQWEsR0FBa0MsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFTNUUsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO0lBRW9CLENBQUM7SUFFeEQsd0JBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUMsQ0FBQztRQUM3RixDQUFDO0lBQ0wsQ0FBQztJQUVELDZCQUFhLEdBQWI7UUFBQSxpQkFpQ0M7UUFoQ0csSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssTUFBTSxDQUFDO1FBQ3pFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FB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WUFDNUMsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBRUQsMEJBQVUsR0FBVixVQUFXLE9BQXNCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDbEQsQ0FBQztJQUNMLENBQUM7SUFFRCw2QkFBYSxHQUFiO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUM7SUFDTCxDQUFDO0lBRUQsMkJBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkEvSUosZ0JBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLE9BQU87aUJBQ3BCOzs7O2dCQW5CRyxpQkFBVTtnQkFTTCxjQUFLOzs7d0JBWVQsWUFBSzsrQkFDTCxZQUFLO2dDQUVMLGFBQU07O0lBd0lYLFlBQUM7Q0FBQSxBQWhKRCxJQWdKQztBQTVJWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRGlyZWN0aXZlLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSW5wdXQsXG4gICAgU2ltcGxlQ2hhbmdlcyxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBPdXRwdXQsXG4gICAgRXZlbnRFbWl0dGVyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gXCIuLi8uLi9jb3JlL3NlcnZpY2VzL3ZnLWFwaVwiO1xuaW1wb3J0IHsgSUhMU0NvbmZpZyB9IGZyb20gJy4vaGxzLWNvbmZpZyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEJpdHJhdGVPcHRpb24gfSBmcm9tICcuLi8uLi9jb3JlL2NvcmUnO1xuXG5kZWNsYXJlIGxldCBIbHM7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3ZnSGxzXScsXG4gICAgZXhwb3J0QXM6ICd2Z0hscydcbn0pXG5leHBvcnQgY2xhc3MgVmdITFMgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSB2Z0hsczpzdHJpbmc7XG4gICAgQElucHV0KCkgdmdIbHNIZWFkZXJzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuXG4gICAgQE91dHB1dCgpIG9uR2V0Qml0cmF0ZXM6IEV2ZW50RW1pdHRlcjxCaXRyYXRlT3B0aW9uW10+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgdmdGb3I6IHN0cmluZztcbiAgICB0YXJnZXQ6IGFueTtcbiAgICBobHM6IGFueTtcbiAgICBwcmVsb2FkOiBib29sZWFuO1xuICAgIGNyb3Nzb3JpZ2luOiBzdHJpbmc7XG4gICAgY29uZmlnOiBJSExTQ29uZmlnO1xuXG4gICAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVmOkVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6VmdBUEkpIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuQVBJLmlzUGxheWVyUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMub25QbGF5ZXJSZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5BUEkucGxheWVyUmVhZHlFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vblBsYXllclJlYWR5KCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuY3Jvc3NvcmlnaW4gPSB0aGlzLnJlZi5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnY3Jvc3NvcmlnaW4nKTtcbiAgICAgICAgdGhpcy5wcmVsb2FkID0gdGhpcy5yZWYubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ByZWxvYWQnKSAhPT0gJ25vbmUnO1xuICAgICAgICB0aGlzLnZnRm9yID0gdGhpcy5yZWYubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZnRm9yJyk7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5BUEkuZ2V0TWVkaWFCeUlkKHRoaXMudmdGb3IpO1xuXG4gICAgICAgIHRoaXMuY29uZmlnID0gPElITFNDb25maWc+e1xuICAgICAgICAgICAgYXV0b1N0YXJ0TG9hZDogdGhpcy5wcmVsb2FkXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5jb25maWcueGhyU2V0dXAgPSAoeGhyLCB1cmwpID0+IHtcbiAgICAgICAgICAgIC8vIFNlbmQgY29va2llc1xuICAgICAgICAgICAgaWYgKHRoaXMuY3Jvc3NvcmlnaW4gPT09ICd1c2UtY3JlZGVudGlhbHMnKSB7XG4gICAgICAgICAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLnZnSGxzSGVhZGVycykpIHtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIHRoaXMudmdIbHNIZWFkZXJzW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY3JlYXRlUGxheWVyKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnByZWxvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgIHRoaXMuQVBJLnN1YnNjcmlwdGlvbnMucGxheS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGxzLnN0YXJ0TG9hZCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOlNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGNoYW5nZXNbJ3ZnSGxzJ10gJiYgY2hhbmdlc1sndmdIbHMnXS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGxheWVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hhbmdlc1sndmdIbHNIZWFkZXJzJ10gJiYgY2hhbmdlc1sndmdIbHNIZWFkZXJzJ10uY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nLiBXZSBkb24ndCB3YW50IHRvIGNyZWF0ZSBhIG9yIGRlc3Ryb3kgYSBwbGF5ZXIgaWYgdGhlIGhlYWRlcnMgY2hhbmdlLlxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95UGxheWVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVQbGF5ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmhscykge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95UGxheWVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJdCdzIGEgSExTIHNvdXJjZVxuICAgICAgICBpZiAodGhpcy52Z0hscyAmJiB0aGlzLnZnSGxzLmluZGV4T2YoJ20zdTgnKSA+IC0xICYmIEhscy5pc1N1cHBvcnRlZCgpICYmIHRoaXMuQVBJLmlzUGxheWVyUmVhZHkpIHtcbiAgICAgICAgICAgIGxldCB2aWRlbzpIVE1MVmlkZW9FbGVtZW50ID0gdGhpcy5yZWYubmF0aXZlRWxlbWVudDtcblxuICAgICAgICAgICAgdGhpcy5obHMgPSBuZXcgSGxzKHRoaXMuY29uZmlnKTtcbiAgICAgICAgICAgIHRoaXMuaGxzLm9uKFxuICAgICAgICAgICAgICAgIEhscy5FdmVudHMuTUFOSUZFU1RfUEFSU0VELFxuICAgICAgICAgICAgICAgIChldmVudCwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWRlb0xpc3QgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICB2aWRlb0xpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWFsaXR5SW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpdHJhdGU6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYVR5cGU6ICd2aWRlbycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0FVVE8nXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubGV2ZWxzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb0xpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eUluZGV4OiArK2luZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpdGVtLndpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaXRlbS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYml0cmF0ZTogaXRlbS5iaXRyYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhVHlwZTogJ3ZpZGVvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogaXRlbS5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkdldEJpdHJhdGVzLmVtaXQodmlkZW9MaXN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5obHMubG9hZFNvdXJjZSh0aGlzLnZnSGxzKTtcbiAgICAgICAgICAgIHRoaXMuaGxzLmF0dGFjaE1lZGlhKHZpZGVvKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldCAmJiAhIXRoaXMudGFyZ2V0LnBhdXNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQucGF1c2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5zZWVrVGltZSgwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZi5uYXRpdmVFbGVtZW50LnNyYyA9IHRoaXMudmdIbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRCaXRyYXRlKGJpdHJhdGU6IEJpdHJhdGVPcHRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuaGxzKSB7XG4gICAgICAgICAgICB0aGlzLmhscy5uZXh0TGV2ZWwgPSBiaXRyYXRlLnF1YWxpdHlJbmRleCAtIDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95UGxheWVyKCkge1xuICAgICAgICBpZiAodGhpcy5obHMpIHtcbiAgICAgICAgICAgIHRoaXMuaGxzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuaGxzID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgICAgIHRoaXMuZGVzdHJveVBsYXllcigpO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/streaming.js":
/*!***********************************************!*\
  !*** ./node_modules/videogular2/streaming.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./src/streaming/streaming */ "./node_modules/videogular2/src/streaming/streaming.js"));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RyZWFtaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9zcmMvc3RyZWFtaW5nL3N0cmVhbWluZyc7XG4iXX0=

/***/ }),

/***/ "./src/app/video-player/video-player.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/video-player/video-player.module.ts ***!
  \*****************************************************/
/*! exports provided: VideoPlayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerModule", function() { return VideoPlayerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./video-player/video-player.component */ "./src/app/video-player/video-player/video-player.component.ts");
/* harmony import */ var _video_player_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video-player.routing */ "./src/app/video-player/video-player.routing.ts");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! videogular2/core */ "./node_modules/videogular2/core.js");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(videogular2_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! videogular2/controls */ "./node_modules/videogular2/controls.js");
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(videogular2_controls__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! videogular2/overlay-play */ "./node_modules/videogular2/overlay-play.js");
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! videogular2/buffering */ "./node_modules/videogular2/buffering.js");
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(videogular2_buffering__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var videogular2_streaming__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! videogular2/streaming */ "./node_modules/videogular2/streaming.js");
/* harmony import */ var videogular2_streaming__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(videogular2_streaming__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var VideoPlayerModule = /** @class */ (function () {
    function VideoPlayerModule() {
    }
    VideoPlayerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_4__["VideoPlayerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_video_player_routing__WEBPACK_IMPORTED_MODULE_5__["VideoPlayerRoutes"]),
                videogular2_core__WEBPACK_IMPORTED_MODULE_6__["VgCoreModule"],
                videogular2_controls__WEBPACK_IMPORTED_MODULE_7__["VgControlsModule"],
                videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_8__["VgOverlayPlayModule"],
                videogular2_buffering__WEBPACK_IMPORTED_MODULE_9__["VgBufferingModule"],
                videogular2_streaming__WEBPACK_IMPORTED_MODULE_10__["VgStreamingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"]
            ]
        })
    ], VideoPlayerModule);
    return VideoPlayerModule;
}());



/***/ }),

/***/ "./src/app/video-player/video-player.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/video-player/video-player.routing.ts ***!
  \******************************************************/
/*! exports provided: VideoPlayerRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerRoutes", function() { return VideoPlayerRoutes; });
/* harmony import */ var _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video-player/video-player.component */ "./src/app/video-player/video-player/video-player.component.ts");

var VideoPlayerRoutes = [
    {
        path: '',
        component: _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_0__["VideoPlayerComponent"]
    }
];


/***/ }),

/***/ "./src/app/video-player/video-player/video-player.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/video-player/video-player/video-player.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"video-player-wrap\">\n   <mat-card>\n      <div>\n         <h3 class=\"mrgn-b-none\">Simple Player</h3>\n      </div>   \n   </mat-card>\n   <vg-player class=\"video-pl mrgn-all-md mrgn-b-lg\">\n      <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" controls>\n         <source src=\"http://vjs.zencdn.net/v/oceans.mp4\" type=\"video/mp4\">\n      </video>\n   </vg-player>\n</div>\n\n<div class=\"video-player-wrap\">\n   <mat-card>\n      <div>\n         <h3 class=\"mrgn-b-none\">Bound Player</h3>\n      </div>   \n   </mat-card>\n   <vg-player class=\"video-pl mrgn-all-md mrgn-b-lg\">\n      <vg-overlay-play></vg-overlay-play>\n      <vg-buffering></vg-buffering>\n         <vg-scrub-bar [vgSlider]=\"true\">\n         <vg-scrub-bar-current-time [vgSlider]=\"true\"></vg-scrub-bar-current-time>\n         <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\n      </vg-scrub-bar>\n      <vg-controls >\n         <vg-play-pause></vg-play-pause>\n         <vg-playback-button></vg-playback-button>\n\n         <vg-time-display vgProperty=\"current\" vgFormat=\"mm:ss\"></vg-time-display>\n\n         <vg-scrub-bar style=\"pointer-events: none;\"></vg-scrub-bar>\n\n         <vg-time-display vgProperty=\"left\" vgFormat=\"mm:ss\"></vg-time-display>\n         <vg-time-display vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display>\n\n         <vg-track-selector></vg-track-selector>\n         <vg-mute></vg-mute>\n         <vg-volume></vg-volume>\n\n         <vg-fullscreen></vg-fullscreen>\n\n      </vg-controls>\n\n      <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" crossorigin >\n         <source src=\"http://vjs.zencdn.net/v/oceans.mp4\" type=\"video/mp4\">\n   \n         <track kind=\"subtitles\" label=\"English\" src=\"http://static.videogular.com/assets/subs/pale-blue-dot.vtt\" srclang=\"en\" default>\n         <track kind=\"subtitles\" label=\"Español\" src=\"http://static.videogular.com/assets/subs/pale-blue-dot-es.vtt\" srclang=\"es\">\n      </video>\n   </vg-player>   \n</div>\n"

/***/ }),

/***/ "./src/app/video-player/video-player/video-player.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/video-player/video-player/video-player.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-player-wrap .video-pl {\n  display: flex;\n  justify-content: center;\n  border-radius: 4px;\n  width: auto; }\n  .video-player-wrap .video-pl video {\n    width: 100%;\n    cursor: pointer; }\n  .video-player-wrap .audio-pl {\n  height: 50px; }\n  .video-player-wrap vg-controls {\n  left: 0;\n  right: 0; }\n  .video-player-wrap vg-scrub-bar {\n  left: 2rem;\n  width: calc(100% - 4rem); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL3ZpZGVvLXBsYXllci92aWRlby1wbGF5ZXIvdmlkZW8tcGxheWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRU0sYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0VBTGpCO0lBT1MsV0FBVztJQUNYLGVBQWUsRUFBQTtFQVJ4QjtFQVlNLFlBQVksRUFBQTtFQVpsQjtFQWVNLE9BQU87RUFDUCxRQUFRLEVBQUE7RUFoQmQ7RUFtQk0sVUFBVTtFQUNWLHdCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlkZW8tcGxheWVyL3ZpZGVvLXBsYXllci92aWRlby1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW8tcGxheWVyLXdyYXB7XG4gICAudmlkZW8tcGx7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIHZpZGVve1xuICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICB9XG4gICAuYXVkaW8tcGx7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICB9XG4gICB2Zy1jb250cm9scyB7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICB9XG4gICB2Zy1zY3J1Yi1iYXJ7XG4gICAgICBsZWZ0OiAycmVtO1xuICAgICAgd2lkdGg6Y2FsYygxMDAlIC0gNHJlbSk7XG4gICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/video-player/video-player/video-player.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/video-player/video-player/video-player.component.ts ***!
  \*********************************************************************/
/*! exports provided: VideoPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerComponent", function() { return VideoPlayerComponent; });
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


var VideoPlayerComponent = /** @class */ (function () {
    function VideoPlayerComponent(pageTitle) {
        this.pageTitle = pageTitle;
        this.sources = [
            {
                src: "assets/audio/SampleAudio_0.4mb.mp3",
                type: "audio/mp3"
            }
        ];
    }
    VideoPlayerComponent.prototype.ngOnInit = function () {
        this.pageTitle.setTitle("Video Player");
    };
    VideoPlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-video-player',
            template: __webpack_require__(/*! ./video-player.component.html */ "./src/app/video-player/video-player/video-player.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./video-player.component.scss */ "./src/app/video-player/video-player/video-player.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"]])
    ], VideoPlayerComponent);
    return VideoPlayerComponent;
}());



/***/ })

}]);
//# sourceMappingURL=video-player-video-player-module.js.map