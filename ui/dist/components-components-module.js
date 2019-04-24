(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-components-module"],{

/***/ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js":
/*!********************************************************************!*\
  !*** ./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js ***!
  \********************************************************************/
/*! exports provided: Cmyk, Hsla, Hsva, Rgba, TextDirective, SliderDirective, ColorPickerComponent, ColorPickerDirective, ColorPickerModule, ColorPickerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cmyk", function() { return Cmyk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hsla", function() { return Hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hsva", function() { return Hsva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rgba", function() { return Rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextDirective", function() { return TextDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderDirective", function() { return SliderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function() { return ColorPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerDirective", function() { return ColorPickerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerModule", function() { return ColorPickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerService", function() { return ColorPickerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var ColorFormats = {
    HEX: 0,
    RGBA: 1,
    HSLA: 2,
};
ColorFormats[ColorFormats.HEX] = 'HEX';
ColorFormats[ColorFormats.RGBA] = 'RGBA';
ColorFormats[ColorFormats.HSLA] = 'HSLA';
var Cmyk = /** @class */ (function () {
    function Cmyk(c, m, y, k) {
        this.c = c;
        this.m = m;
        this.y = y;
        this.k = k;
    }
    return Cmyk;
}());
var Hsla = /** @class */ (function () {
    function Hsla(h, s, l, a) {
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
    }
    return Hsla;
}());
var Hsva = /** @class */ (function () {
    function Hsva(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return Hsva;
}());
var Rgba = /** @class */ (function () {
    function Rgba(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    return Rgba;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function detectIE() {
    /** @type {?} */
    var ua = '';
    if (typeof navigator !== 'undefined') {
        ua = navigator.userAgent.toLowerCase();
    }
    /** @type {?} */
    var msie = ua.indexOf('msie ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    // Other browser
    return false;
}
var TextDirective = /** @class */ (function () {
    function TextDirective() {
        this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    TextDirective.prototype.inputChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var value = event.target.value;
        if (this.rg === undefined) {
            this.newValue.emit(value);
        }
        else {
            /** @type {?} */
            var numeric = parseFloat(value);
            this.newValue.emit({ v: numeric, rg: this.rg });
        }
    };
    TextDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[text]'
                },] }
    ];
    TextDirective.propDecorators = {
        rg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        newValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        inputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['input', ['$event'],] }]
    };
    return TextDirective;
}());
var SliderDirective = /** @class */ (function () {
    function SliderDirective(elRef) {
        var _this = this;
        this.elRef = elRef;
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.listenerMove = function (event) { return _this.move(event); };
        this.listenerStop = function () { return _this.stop(); };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.mouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.start(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.touchStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.start(event);
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.move = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.setCursor(event);
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.start = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.setCursor(event);
        event.stopPropagation();
        document.addEventListener('mouseup', this.listenerStop);
        document.addEventListener('touchend', this.listenerStop);
        document.addEventListener('mousemove', this.listenerMove);
        document.addEventListener('touchmove', this.listenerMove);
        this.dragStart.emit();
    };
    /**
     * @private
     * @return {?}
     */
    SliderDirective.prototype.stop = /**
     * @private
     * @return {?}
     */
    function () {
        document.removeEventListener('mouseup', this.listenerStop);
        document.removeEventListener('touchend', this.listenerStop);
        document.removeEventListener('mousemove', this.listenerMove);
        document.removeEventListener('touchmove', this.listenerMove);
        this.dragEnd.emit();
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.getX = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var position = this.elRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var pageX = (event.pageX !== undefined) ? event.pageX : event.touches[0].pageX;
        return pageX - position.left - window.pageXOffset;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.getY = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var position = this.elRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var pageY = (event.pageY !== undefined) ? event.pageY : event.touches[0].pageY;
        return pageY - position.top - window.pageYOffset;
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    SliderDirective.prototype.setCursor = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var width = this.elRef.nativeElement.offsetWidth;
        /** @type {?} */
        var height = this.elRef.nativeElement.offsetHeight;
        /** @type {?} */
        var x = Math.max(0, Math.min(this.getX(event), width));
        /** @type {?} */
        var y = Math.max(0, Math.min(this.getY(event), height));
        if (this.rgX !== undefined && this.rgY !== undefined) {
            this.newValue.emit({ s: x / width, v: (1 - y / height), rgX: this.rgX, rgY: this.rgY });
        }
        else if (this.rgX === undefined && this.rgY !== undefined) {
            this.newValue.emit({ v: y / height, rgY: this.rgY });
        }
        else if (this.rgX !== undefined && this.rgY === undefined) {
            this.newValue.emit({ v: x / width, rgX: this.rgX });
        }
    };
    SliderDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[slider]'
                },] }
    ];
    /** @nocollapse */
    SliderDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    SliderDirective.propDecorators = {
        rgX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rgY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        dragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        dragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        newValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        mouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }],
        touchStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['touchstart', ['$event'],] }]
    };
    return SliderDirective;
}());
var SliderPosition = /** @class */ (function () {
    function SliderPosition(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return SliderPosition;
}());
var SliderDimension = /** @class */ (function () {
    function SliderDimension(h, s, v, a) {
        this.h = h;
        this.s = s;
        this.v = v;
        this.a = a;
    }
    return SliderDimension;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColorPickerService = /** @class */ (function () {
    function ColorPickerService() {
        this.active = null;
    }
    /**
     * @param {?} active
     * @return {?}
     */
    ColorPickerService.prototype.setActive = /**
     * @param {?} active
     * @return {?}
     */
    function (active) {
        if (this.active && this.active !== active && this.active.cpDialogDisplay !== 'inline') {
            this.active.closeDialog();
        }
        this.active = active;
    };
    /**
     * @param {?} hsva
     * @return {?}
     */
    ColorPickerService.prototype.hsva2hsla = /**
     * @param {?} hsva
     * @return {?}
     */
    function (hsva) {
        /** @type {?} */
        var h = hsva.h;
        /** @type {?} */
        var s = hsva.s;
        /** @type {?} */
        var v = hsva.v;
        /** @type {?} */
        var a = hsva.a;
        if (v === 0) {
            return new Hsla(h, 0, 0, a);
        }
        else if (s === 0 && v === 1) {
            return new Hsla(h, 1, 1, a);
        }
        else {
            /** @type {?} */
            var l = v * (2 - s) / 2;
            return new Hsla(h, v * s / (1 - Math.abs(2 * l - 1)), l, a);
        }
    };
    /**
     * @param {?} hsla
     * @return {?}
     */
    ColorPickerService.prototype.hsla2hsva = /**
     * @param {?} hsla
     * @return {?}
     */
    function (hsla) {
        /** @type {?} */
        var h = Math.min(hsla.h, 1);
        /** @type {?} */
        var s = Math.min(hsla.s, 1);
        /** @type {?} */
        var l = Math.min(hsla.l, 1);
        /** @type {?} */
        var a = Math.min(hsla.a, 1);
        if (l === 0) {
            return new Hsva(h, 0, 0, a);
        }
        else {
            /** @type {?} */
            var v = l + s * (1 - Math.abs(2 * l - 1)) / 2;
            return new Hsva(h, 2 * (v - l) / v, v, a);
        }
    };
    /**
     * @param {?} hsva
     * @return {?}
     */
    ColorPickerService.prototype.hsvaToRgba = /**
     * @param {?} hsva
     * @return {?}
     */
    function (hsva) {
        /** @type {?} */
        var r;
        /** @type {?} */
        var g;
        /** @type {?} */
        var b;
        /** @type {?} */
        var h = hsva.h;
        /** @type {?} */
        var s = hsva.s;
        /** @type {?} */
        var v = hsva.v;
        /** @type {?} */
        var a = hsva.a;
        /** @type {?} */
        var i = Math.floor(h * 6);
        /** @type {?} */
        var f = h * 6 - i;
        /** @type {?} */
        var p = v * (1 - s);
        /** @type {?} */
        var q = v * (1 - f * s);
        /** @type {?} */
        var t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0:
                r = v, g = t, b = p;
                break;
            case 1:
                r = q, g = v, b = p;
                break;
            case 2:
                r = p, g = v, b = t;
                break;
            case 3:
                r = p, g = q, b = v;
                break;
            case 4:
                r = t, g = p, b = v;
                break;
            case 5:
                r = v, g = p, b = q;
                break;
            default:
                r = 0, g = 0, b = 0;
        }
        return new Rgba(r, g, b, a);
    };
    /**
     * @param {?} rgba
     * @return {?}
     */
    ColorPickerService.prototype.rgbaToCmyk = /**
     * @param {?} rgba
     * @return {?}
     */
    function (rgba) {
        /** @type {?} */
        var k = 1 - Math.max(rgba.r, rgba.g, rgba.b);
        if (k === 1) {
            return new Cmyk(0, 0, 0, 1);
        }
        else {
            /** @type {?} */
            var c = (1 - rgba.r - k) / (1 - k);
            /** @type {?} */
            var m = (1 - rgba.g - k) / (1 - k);
            /** @type {?} */
            var y = (1 - rgba.b - k) / (1 - k);
            return new Cmyk(c, m, y, k);
        }
    };
    /**
     * @param {?} rgba
     * @return {?}
     */
    ColorPickerService.prototype.rgbaToHsva = /**
     * @param {?} rgba
     * @return {?}
     */
    function (rgba) {
        /** @type {?} */
        var h;
        /** @type {?} */
        var s;
        /** @type {?} */
        var r = Math.min(rgba.r, 1);
        /** @type {?} */
        var g = Math.min(rgba.g, 1);
        /** @type {?} */
        var b = Math.min(rgba.b, 1);
        /** @type {?} */
        var a = Math.min(rgba.a, 1);
        /** @type {?} */
        var max = Math.max(r, g, b);
        /** @type {?} */
        var min = Math.min(r, g, b);
        /** @type {?} */
        var v = max;
        /** @type {?} */
        var d = max - min;
        s = (max === 0) ? 0 : d / max;
        if (max === min) {
            h = 0;
        }
        else {
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
                default:
                    h = 0;
            }
            h /= 6;
        }
        return new Hsva(h, s, v, a);
    };
    /**
     * @param {?} rgba
     * @param {?=} allowHex8
     * @return {?}
     */
    ColorPickerService.prototype.rgbaToHex = /**
     * @param {?} rgba
     * @param {?=} allowHex8
     * @return {?}
     */
    function (rgba, allowHex8) {
        /* tslint:disable:no-bitwise */
        /** @type {?} */
        var hex = '#' + ((1 << 24) | (rgba.r << 16) | (rgba.g << 8) | rgba.b).toString(16).substr(1);
        if (allowHex8) {
            hex += ((1 << 8) | Math.round(rgba.a * 255)).toString(16).substr(1);
        }
        /* tslint:enable:no-bitwise */
        return hex;
    };
    /**
     * @param {?} rgba
     * @return {?}
     */
    ColorPickerService.prototype.denormalizeRGBA = /**
     * @param {?} rgba
     * @return {?}
     */
    function (rgba) {
        return new Rgba(Math.round(rgba.r * 255), Math.round(rgba.g * 255), Math.round(rgba.b * 255), rgba.a);
    };
    /**
     * @param {?=} colorString
     * @param {?=} allowHex8
     * @return {?}
     */
    ColorPickerService.prototype.stringToHsva = /**
     * @param {?=} colorString
     * @param {?=} allowHex8
     * @return {?}
     */
    function (colorString, allowHex8) {
        if (colorString === void 0) { colorString = ''; }
        if (allowHex8 === void 0) { allowHex8 = false; }
        /** @type {?} */
        var hsva = null;
        colorString = (colorString || '').toLowerCase();
        /** @type {?} */
        var stringParsers = [
            {
                re: /(rgb)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*%?,\s*(\d{1,3})\s*%?(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (execResult) {
                    return new Rgba(parseInt(execResult[2], 10) / 255, parseInt(execResult[3], 10) / 255, parseInt(execResult[4], 10) / 255, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                }
            }, {
                re: /(hsl)a?\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function (execResult) {
                    return new Hsla(parseInt(execResult[2], 10) / 360, parseInt(execResult[3], 10) / 100, parseInt(execResult[4], 10) / 100, isNaN(parseFloat(execResult[5])) ? 1 : parseFloat(execResult[5]));
                }
            }
        ];
        if (allowHex8) {
            stringParsers.push({
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})?$/,
                parse: function (execResult) {
                    return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, parseInt(execResult[4] || 'FF', 16) / 255);
                }
            });
        }
        else {
            stringParsers.push({
                re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
                parse: function (execResult) {
                    return new Rgba(parseInt(execResult[1], 16) / 255, parseInt(execResult[2], 16) / 255, parseInt(execResult[3], 16) / 255, 1);
                }
            });
        }
        stringParsers.push({
            re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
            parse: function (execResult) {
                return new Rgba(parseInt(execResult[1] + execResult[1], 16) / 255, parseInt(execResult[2] + execResult[2], 16) / 255, parseInt(execResult[3] + execResult[3], 16) / 255, 1);
            }
        });
        for (var key in stringParsers) {
            if (stringParsers.hasOwnProperty(key)) {
                /** @type {?} */
                var parser = stringParsers[key];
                /** @type {?} */
                var match = parser.re.exec(colorString);
                /** @type {?} */
                var color = match && parser.parse(match);
                if (color) {
                    if (color instanceof Rgba) {
                        hsva = this.rgbaToHsva(color);
                    }
                    else if (color instanceof Hsla) {
                        hsva = this.hsla2hsva(color);
                    }
                    return hsva;
                }
            }
        }
        return hsva;
    };
    /**
     * @param {?} hsva
     * @param {?} outputFormat
     * @param {?} alphaChannel
     * @return {?}
     */
    ColorPickerService.prototype.outputFormat = /**
     * @param {?} hsva
     * @param {?} outputFormat
     * @param {?} alphaChannel
     * @return {?}
     */
    function (hsva, outputFormat, alphaChannel) {
        if (outputFormat === 'auto') {
            outputFormat = hsva.a < 1 ? 'rgba' : 'hex';
        }
        switch (outputFormat) {
            case 'hsla':
                /** @type {?} */
                var hsla = this.hsva2hsla(hsva);
                /** @type {?} */
                var hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                if (hsva.a < 1 || alphaChannel === 'always') {
                    return 'hsla(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%,' +
                        hslaText.a + ')';
                }
                else {
                    return 'hsl(' + hslaText.h + ',' + hslaText.s + '%,' + hslaText.l + '%)';
                }
            case 'rgba':
                /** @type {?} */
                var rgba = this.denormalizeRGBA(this.hsvaToRgba(hsva));
                if (hsva.a < 1 || alphaChannel === 'always') {
                    return 'rgba(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ',' +
                        Math.round(rgba.a * 100) / 100 + ')';
                }
                else {
                    return 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
                }
            default:
                /** @type {?} */
                var allowHex8 = (alphaChannel === 'always' || alphaChannel === 'forced');
                return this.rgbaToHex(this.denormalizeRGBA(this.hsvaToRgba(hsva)), allowHex8);
        }
    };
    ColorPickerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    ColorPickerService.ctorParameters = function () { return []; };
    return ColorPickerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColorPickerComponent = /** @class */ (function () {
    function ColorPickerComponent(elRef, cdRef, service) {
        this.elRef = elRef;
        this.cdRef = cdRef;
        this.service = service;
        this.isIE10 = false;
        this.dialogArrowSize = 10;
        this.dialogArrowOffset = 15;
        this.dialogInputFields = [
            ColorFormats.HEX,
            ColorFormats.RGBA,
            ColorFormats.HSLA
        ];
        this.useRootViewContainer = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.handleEsc = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.show && this.cpDialogDisplay === 'popup') {
            this.onCancelColor(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.handleEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.show && this.cpDialogDisplay === 'popup') {
            this.onAcceptColor(event);
        }
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.slider = new SliderPosition(0, 0, 0, 0);
        /** @type {?} */
        var hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
        /** @type {?} */
        var alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
        this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
        if (this.cpOutputFormat === 'rgba') {
            this.format = ColorFormats.RGBA;
        }
        else if (this.cpOutputFormat === 'hsla') {
            this.format = ColorFormats.HSLA;
        }
        else {
            this.format = ColorFormats.HEX;
        }
        this.listenerMouseDown = function (event) { _this.onMouseDown(event); };
        this.listenerResize = function () { _this.onResize(); };
        this.openDialog(this.initialColor, false);
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.closeDialog();
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.cpWidth !== 230 || this.cpDialogDisplay === 'inline') {
            /** @type {?} */
            var hueWidth = this.hueSlider.nativeElement.offsetWidth || 140;
            /** @type {?} */
            var alphaWidth = this.alphaSlider.nativeElement.offsetWidth || 140;
            this.sliderDimMax = new SliderDimension(hueWidth, this.cpWidth, 130, alphaWidth);
            this.updateColorPicker(false);
            this.cdRef.detectChanges();
        }
    };
    /**
     * @param {?} color
     * @param {?=} emit
     * @return {?}
     */
    ColorPickerComponent.prototype.openDialog = /**
     * @param {?} color
     * @param {?=} emit
     * @return {?}
     */
    function (color, emit) {
        if (emit === void 0) { emit = true; }
        this.service.setActive(this);
        if (!this.width) {
            this.cpWidth = this.directiveElementRef.nativeElement.offsetWidth;
        }
        if (!this.height) {
            this.height = 320;
        }
        this.setInitialColor(color);
        this.setColorFromString(color, emit);
        this.openColorPicker();
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.closeDialog = /**
     * @return {?}
     */
    function () {
        this.closeColorPicker();
    };
    /**
     * @param {?} instance
     * @param {?} elementRef
     * @param {?} color
     * @param {?} cpWidth
     * @param {?} cpHeight
     * @param {?} cpDialogDisplay
     * @param {?} cpFallbackColor
     * @param {?} cpColorMode
     * @param {?} cpAlphaChannel
     * @param {?} cpOutputFormat
     * @param {?} cpDisableInput
     * @param {?} cpIgnoredElements
     * @param {?} cpSaveClickOutside
     * @param {?} cpCloseClickOutside
     * @param {?} cpUseRootViewContainer
     * @param {?} cpPosition
     * @param {?} cpPositionOffset
     * @param {?} cpPositionRelativeToArrow
     * @param {?} cpPresetLabel
     * @param {?} cpPresetColors
     * @param {?} cpMaxPresetColorsLength
     * @param {?} cpPresetEmptyMessage
     * @param {?} cpPresetEmptyMessageClass
     * @param {?} cpOKButton
     * @param {?} cpOKButtonClass
     * @param {?} cpOKButtonText
     * @param {?} cpCancelButton
     * @param {?} cpCancelButtonClass
     * @param {?} cpCancelButtonText
     * @param {?} cpAddColorButton
     * @param {?} cpAddColorButtonClass
     * @param {?} cpAddColorButtonText
     * @param {?} cpRemoveColorButtonClass
     * @return {?}
     */
    ColorPickerComponent.prototype.setupDialog = /**
     * @param {?} instance
     * @param {?} elementRef
     * @param {?} color
     * @param {?} cpWidth
     * @param {?} cpHeight
     * @param {?} cpDialogDisplay
     * @param {?} cpFallbackColor
     * @param {?} cpColorMode
     * @param {?} cpAlphaChannel
     * @param {?} cpOutputFormat
     * @param {?} cpDisableInput
     * @param {?} cpIgnoredElements
     * @param {?} cpSaveClickOutside
     * @param {?} cpCloseClickOutside
     * @param {?} cpUseRootViewContainer
     * @param {?} cpPosition
     * @param {?} cpPositionOffset
     * @param {?} cpPositionRelativeToArrow
     * @param {?} cpPresetLabel
     * @param {?} cpPresetColors
     * @param {?} cpMaxPresetColorsLength
     * @param {?} cpPresetEmptyMessage
     * @param {?} cpPresetEmptyMessageClass
     * @param {?} cpOKButton
     * @param {?} cpOKButtonClass
     * @param {?} cpOKButtonText
     * @param {?} cpCancelButton
     * @param {?} cpCancelButtonClass
     * @param {?} cpCancelButtonText
     * @param {?} cpAddColorButton
     * @param {?} cpAddColorButtonClass
     * @param {?} cpAddColorButtonText
     * @param {?} cpRemoveColorButtonClass
     * @return {?}
     */
    function (instance, elementRef, color, cpWidth, cpHeight, cpDialogDisplay, cpFallbackColor, cpColorMode, cpAlphaChannel, cpOutputFormat, cpDisableInput, cpIgnoredElements, cpSaveClickOutside, cpCloseClickOutside, cpUseRootViewContainer, cpPosition, cpPositionOffset, cpPositionRelativeToArrow, cpPresetLabel, cpPresetColors, cpMaxPresetColorsLength, cpPresetEmptyMessage, cpPresetEmptyMessageClass, cpOKButton, cpOKButtonClass, cpOKButtonText, cpCancelButton, cpCancelButtonClass, cpCancelButtonText, cpAddColorButton, cpAddColorButtonClass, cpAddColorButtonText, cpRemoveColorButtonClass) {
        this.setInitialColor(color);
        this.setColorMode(cpColorMode);
        this.isIE10 = (detectIE() === 10);
        this.directiveInstance = instance;
        this.directiveElementRef = elementRef;
        this.cpDisableInput = cpDisableInput;
        this.cpAlphaChannel = cpAlphaChannel;
        this.cpOutputFormat = cpOutputFormat;
        this.cpDialogDisplay = cpDialogDisplay;
        this.cpIgnoredElements = cpIgnoredElements;
        this.cpSaveClickOutside = cpSaveClickOutside;
        this.cpCloseClickOutside = cpCloseClickOutside;
        this.useRootViewContainer = cpUseRootViewContainer;
        this.width = this.cpWidth = parseInt(cpWidth, 10);
        this.height = this.cpHeight = parseInt(cpHeight, 10);
        this.cpPosition = cpPosition;
        this.cpPositionOffset = parseInt(cpPositionOffset, 10);
        this.cpOKButton = cpOKButton;
        this.cpOKButtonText = cpOKButtonText;
        this.cpOKButtonClass = cpOKButtonClass;
        this.cpCancelButton = cpCancelButton;
        this.cpCancelButtonText = cpCancelButtonText;
        this.cpCancelButtonClass = cpCancelButtonClass;
        this.fallbackColor = cpFallbackColor || '#fff';
        this.setPresetConfig(cpPresetLabel, cpPresetColors);
        this.cpMaxPresetColorsLength = cpMaxPresetColorsLength;
        this.cpPresetEmptyMessage = cpPresetEmptyMessage;
        this.cpPresetEmptyMessageClass = cpPresetEmptyMessageClass;
        this.cpAddColorButton = cpAddColorButton;
        this.cpAddColorButtonText = cpAddColorButtonText;
        this.cpAddColorButtonClass = cpAddColorButtonClass;
        this.cpRemoveColorButtonClass = cpRemoveColorButtonClass;
        if (!cpPositionRelativeToArrow) {
            this.dialogArrowOffset = 0;
        }
        if (cpDialogDisplay === 'inline') {
            this.dialogArrowSize = 0;
            this.dialogArrowOffset = 0;
        }
        if (cpOutputFormat === 'hex' &&
            cpAlphaChannel !== 'always' && cpAlphaChannel !== 'forced') {
            this.cpAlphaChannel = 'disabled';
        }
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    ColorPickerComponent.prototype.setColorMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        switch (mode.toString().toUpperCase()) {
            case '1':
            case 'C':
            case 'COLOR':
                this.cpColorMode = 1;
                break;
            case '2':
            case 'G':
            case 'GRAYSCALE':
                this.cpColorMode = 2;
                break;
            case '3':
            case 'P':
            case 'PRESETS':
                this.cpColorMode = 3;
                break;
            default:
                this.cpColorMode = 1;
        }
    };
    /**
     * @param {?} color
     * @return {?}
     */
    ColorPickerComponent.prototype.setInitialColor = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        this.initialColor = color;
    };
    /**
     * @param {?} cpPresetLabel
     * @param {?} cpPresetColors
     * @return {?}
     */
    ColorPickerComponent.prototype.setPresetConfig = /**
     * @param {?} cpPresetLabel
     * @param {?} cpPresetColors
     * @return {?}
     */
    function (cpPresetLabel, cpPresetColors) {
        this.cpPresetLabel = cpPresetLabel;
        this.cpPresetColors = cpPresetColors;
    };
    /**
     * @param {?} value
     * @param {?=} emit
     * @param {?=} update
     * @return {?}
     */
    ColorPickerComponent.prototype.setColorFromString = /**
     * @param {?} value
     * @param {?=} emit
     * @param {?=} update
     * @return {?}
     */
    function (value, emit, update) {
        if (emit === void 0) { emit = true; }
        if (update === void 0) { update = true; }
        /** @type {?} */
        var hsva;
        if (this.cpAlphaChannel === 'always' || this.cpAlphaChannel === 'forced') {
            hsva = this.service.stringToHsva(value, true);
            if (!hsva && !this.hsva) {
                hsva = this.service.stringToHsva(value, false);
            }
        }
        else {
            hsva = this.service.stringToHsva(value, false);
        }
        if (!hsva && !this.hsva) {
            hsva = this.service.stringToHsva(this.fallbackColor, false);
        }
        if (hsva) {
            this.hsva = hsva;
            this.sliderH = this.hsva.h;
            this.updateColorPicker(emit, update);
        }
    };
    /**
     * @return {?}
     */
    ColorPickerComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        if (this.position === 'fixed') {
            this.setDialogPosition();
        }
        else if (this.cpDialogDisplay !== 'inline') {
            this.closeColorPicker();
        }
    };
    /**
     * @param {?} slider
     * @return {?}
     */
    ColorPickerComponent.prototype.onDragEnd = /**
     * @param {?} slider
     * @return {?}
     */
    function (slider) {
        this.directiveInstance.sliderDragEnd({ slider: slider, color: this.outputColor });
    };
    /**
     * @param {?} slider
     * @return {?}
     */
    ColorPickerComponent.prototype.onDragStart = /**
     * @param {?} slider
     * @return {?}
     */
    function (slider) {
        this.directiveInstance.sliderDragStart({ slider: slider, color: this.outputColor });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.onMouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.isIE10 && this.cpDialogDisplay === 'popup' &&
            event.target !== this.directiveElementRef.nativeElement &&
            !this.isDescendant(this.elRef.nativeElement, event.target) &&
            !this.isDescendant(this.directiveElementRef.nativeElement, event.target) &&
            this.cpIgnoredElements.filter(function (item) { return item === event.target; }).length === 0) {
            if (this.cpSaveClickOutside) {
                this.directiveInstance.colorSelected(this.outputColor);
            }
            else {
                this.setColorFromString(this.initialColor, false);
                this.directiveInstance.colorChanged(this.initialColor);
            }
            if (this.cpCloseClickOutside) {
                this.closeColorPicker();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.onAcceptColor = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        if (this.cpDialogDisplay === 'popup') {
            this.closeColorPicker();
        }
        if (this.outputColor) {
            this.directiveInstance.colorSelected(this.outputColor);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerComponent.prototype.onCancelColor = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.setColorFromString(this.initialColor, true);
        if (this.cpDialogDisplay === 'popup') {
            this.directiveInstance.colorChanged(this.initialColor, true);
            this.closeColorPicker();
        }
        this.directiveInstance.colorCanceled();
    };
    /**
     * @param {?} change
     * @return {?}
     */
    ColorPickerComponent.prototype.onFormatToggle = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        /** @type {?} */
        var availableFormats = this.dialogInputFields.length;
        /** @type {?} */
        var nextFormat = (((this.dialogInputFields.indexOf(this.format) + change) %
            availableFormats) + availableFormats) % availableFormats;
        this.format = this.dialogInputFields[nextFormat];
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onColorChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.hsva.s = value.s / value.rgX;
        this.hsva.v = value.v / value.rgY;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'lightness',
            value: this.hsva.v,
            color: this.outputColor
        });
        this.directiveInstance.sliderChanged({
            slider: 'saturation',
            value: this.hsva.s,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onHueChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.hsva.h = value.v / value.rgX;
        this.sliderH = this.hsva.h;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'hue',
            value: this.hsva.h,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onValueChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.hsva.v = value.v / value.rgX;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'value',
            value: this.hsva.v,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onAlphaChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.hsva.a = value.v / value.rgX;
        this.updateColorPicker();
        this.directiveInstance.sliderChanged({
            slider: 'alpha',
            value: this.hsva.a,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onHexInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === null) {
            this.updateColorPicker();
        }
        else {
            if (value && value[0] !== '#') {
                value = '#' + value;
            }
            /** @type {?} */
            var validHex = /^#([a-f0-9]{3}|[a-f0-9]{6})$/gi;
            if (this.cpAlphaChannel === 'always') {
                validHex = /^#([a-f0-9]{3}|[a-f0-9]{6}|[a-f0-9]{8})$/gi;
            }
            /** @type {?} */
            var valid = validHex.test(value);
            if (valid) {
                if (value.length < 5) {
                    value = '#' + value.substring(1)
                        .split('')
                        .map(function (c) { return c + c; })
                        .join('');
                }
                if (this.cpAlphaChannel === 'forced') {
                    value += Math.round(this.hsva.a * 255).toString(16);
                }
                this.setColorFromString(value, true, false);
            }
            this.directiveInstance.inputChanged({
                input: 'hex',
                valid: valid,
                value: value,
                color: this.outputColor
            });
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onRedInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var rgba = this.service.hsvaToRgba(this.hsva);
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            rgba.r = value.v / value.rg;
            this.hsva = this.service.rgbaToHsva(rgba);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'red',
            valid: valid,
            value: rgba.r,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onBlueInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var rgba = this.service.hsvaToRgba(this.hsva);
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            rgba.b = value.v / value.rg;
            this.hsva = this.service.rgbaToHsva(rgba);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'blue',
            valid: valid,
            value: rgba.b,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onGreenInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var rgba = this.service.hsvaToRgba(this.hsva);
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            rgba.g = value.v / value.rg;
            this.hsva = this.service.rgbaToHsva(rgba);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'green',
            valid: valid,
            value: rgba.g,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onHueInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            this.hsva.h = value.v / value.rg;
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'hue',
            valid: valid,
            value: this.hsva.h,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onValueInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            this.hsva.v = value.v / value.rg;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'value',
            valid: valid,
            value: this.hsva.v,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onAlphaInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            this.hsva.a = value.v / value.rg;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'alpha',
            valid: valid,
            value: this.hsva.a,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onLightnessInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var hsla = this.service.hsva2hsla(this.hsva);
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            hsla.l = value.v / value.rg;
            this.hsva = this.service.hsla2hsva(hsla);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'lightness',
            valid: valid,
            value: hsla.l,
            color: this.outputColor
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onSaturationInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var hsla = this.service.hsva2hsla(this.hsva);
        /** @type {?} */
        var valid = !isNaN(value.v) && value.v >= 0 && value.v <= value.rg;
        if (valid) {
            hsla.s = value.v / value.rg;
            this.hsva = this.service.hsla2hsva(hsla);
            this.sliderH = this.hsva.h;
            this.updateColorPicker();
        }
        this.directiveInstance.inputChanged({
            input: 'saturation',
            valid: valid,
            value: hsla.s,
            color: this.outputColor
        });
    };
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onAddPresetColor = /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    function (event, value) {
        event.stopPropagation();
        if (!this.cpPresetColors.filter(function (color) { return (color === value); }).length) {
            this.cpPresetColors = this.cpPresetColors.concat(value);
            this.directiveInstance.presetColorsChanged(this.cpPresetColors);
        }
    };
    /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    ColorPickerComponent.prototype.onRemovePresetColor = /**
     * @param {?} event
     * @param {?} value
     * @return {?}
     */
    function (event, value) {
        event.stopPropagation();
        this.cpPresetColors = this.cpPresetColors.filter(function (color) { return (color !== value); });
        this.directiveInstance.presetColorsChanged(this.cpPresetColors);
    };
    // Private helper functions for the color picker dialog status
    // Private helper functions for the color picker dialog status
    /**
     * @private
     * @return {?}
     */
    ColorPickerComponent.prototype.openColorPicker = 
    // Private helper functions for the color picker dialog status
    /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.show) {
            this.show = true;
            this.hidden = true;
            setTimeout(function () {
                _this.hidden = false;
                _this.setDialogPosition();
                _this.cdRef.detectChanges();
            }, 0);
            this.directiveInstance.stateChanged(true);
            if (!this.isIE10) {
                document.addEventListener('mousedown', this.listenerMouseDown);
            }
            window.addEventListener('resize', this.listenerResize);
        }
    };
    /**
     * @private
     * @return {?}
     */
    ColorPickerComponent.prototype.closeColorPicker = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.show) {
            this.show = false;
            this.directiveInstance.stateChanged(false);
            if (!this.isIE10) {
                document.removeEventListener('mousedown', this.listenerMouseDown);
            }
            window.removeEventListener('resize', this.listenerResize);
            if (!this.cdRef['destroyed']) {
                this.cdRef.detectChanges();
            }
        }
    };
    /**
     * @private
     * @param {?=} emit
     * @param {?=} update
     * @return {?}
     */
    ColorPickerComponent.prototype.updateColorPicker = /**
     * @private
     * @param {?=} emit
     * @param {?=} update
     * @return {?}
     */
    function (emit, update) {
        if (emit === void 0) { emit = true; }
        if (update === void 0) { update = true; }
        if (this.sliderDimMax) {
            if (this.cpColorMode === 2) {
                this.hsva.s = 0;
            }
            /** @type {?} */
            var lastOutput = this.outputColor;
            /** @type {?} */
            var hsla = this.service.hsva2hsla(this.hsva);
            /** @type {?} */
            var rgba = this.service.denormalizeRGBA(this.service.hsvaToRgba(this.hsva));
            /** @type {?} */
            var hue = this.service.denormalizeRGBA(this.service.hsvaToRgba(new Hsva(this.sliderH || this.hsva.h, 1, 1, 1)));
            if (update) {
                this.hslaText = new Hsla(Math.round((hsla.h) * 360), Math.round(hsla.s * 100), Math.round(hsla.l * 100), Math.round(hsla.a * 100) / 100);
                this.rgbaText = new Rgba(rgba.r, rgba.g, rgba.b, Math.round(rgba.a * 100) / 100);
                /** @type {?} */
                var allowHex8 = this.cpAlphaChannel === 'always';
                this.hexText = this.service.rgbaToHex(rgba, allowHex8);
                this.hexAlpha = this.rgbaText.a;
            }
            if (this.cpOutputFormat === 'auto') {
                if (this.hsva.a < 1) {
                    this.format = this.hsva.a < 1 ? ColorFormats.RGBA : ColorFormats.HEX;
                }
            }
            this.hueSliderColor = 'rgb(' + hue.r + ',' + hue.g + ',' + hue.b + ')';
            this.alphaSliderColor = 'rgb(' + rgba.r + ',' + rgba.g + ',' + rgba.b + ')';
            this.outputColor = this.service.outputFormat(this.hsva, this.cpOutputFormat, this.cpAlphaChannel);
            this.selectedColor = this.service.outputFormat(this.hsva, 'rgba', null);
            this.slider = new SliderPosition((this.sliderH || this.hsva.h) * this.sliderDimMax.h - 8, this.hsva.s * this.sliderDimMax.s - 8, (1 - this.hsva.v) * this.sliderDimMax.v - 8, this.hsva.a * this.sliderDimMax.a - 8);
            if (emit && lastOutput !== this.outputColor) {
                this.directiveInstance.colorChanged(this.outputColor);
            }
        }
    };
    // Private helper functions for the color picker dialog positioning
    // Private helper functions for the color picker dialog positioning
    /**
     * @private
     * @return {?}
     */
    ColorPickerComponent.prototype.setDialogPosition = 
    // Private helper functions for the color picker dialog positioning
    /**
     * @private
     * @return {?}
     */
    function () {
        if (this.cpDialogDisplay === 'inline') {
            this.position = 'relative';
        }
        else {
            /** @type {?} */
            var position = 'static';
            /** @type {?} */
            var transform = '';
            /** @type {?} */
            var style = void 0;
            /** @type {?} */
            var parentNode = null;
            /** @type {?} */
            var transformNode = null;
            /** @type {?} */
            var node = this.directiveElementRef.nativeElement.parentNode;
            /** @type {?} */
            var dialogHeight = this.dialogElement.nativeElement.offsetHeight;
            while (node !== null && node.tagName !== 'HTML') {
                style = window.getComputedStyle(node);
                position = style.getPropertyValue('position');
                transform = style.getPropertyValue('transform');
                if (position !== 'static' && parentNode === null) {
                    parentNode = node;
                }
                if (transform && transform !== 'none' && transformNode === null) {
                    transformNode = node;
                }
                if (position === 'fixed') {
                    parentNode = transformNode;
                    break;
                }
                node = node.parentNode;
            }
            /** @type {?} */
            var boxDirective = this.createDialogBox(this.directiveElementRef.nativeElement, (position !== 'fixed'));
            if (this.useRootViewContainer || (position === 'fixed' &&
                (!parentNode || parentNode instanceof HTMLUnknownElement))) {
                this.top = boxDirective.top;
                this.left = boxDirective.left;
            }
            else {
                if (parentNode === null) {
                    parentNode = node;
                }
                /** @type {?} */
                var boxParent = this.createDialogBox(parentNode, (position !== 'fixed'));
                this.top = boxDirective.top - boxParent.top;
                this.left = boxDirective.left - boxParent.left;
            }
            if (position === 'fixed') {
                this.position = 'fixed';
            }
            if (this.cpPosition === 'left') {
                this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
                this.left -= this.cpWidth + this.dialogArrowSize - 2;
            }
            else if (this.cpPosition === 'top') {
                this.arrowTop = dialogHeight - 1;
                this.top -= dialogHeight + this.dialogArrowSize;
                this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
            }
            else if (this.cpPosition === 'bottom') {
                this.top += boxDirective.height + this.dialogArrowSize;
                this.left += this.cpPositionOffset / 100 * boxDirective.width - this.dialogArrowOffset;
            }
            else {
                this.top += boxDirective.height * this.cpPositionOffset / 100 - this.dialogArrowOffset;
                this.left += boxDirective.width + this.dialogArrowSize - 2;
            }
        }
    };
    // Private helper functions for the color picker dialog positioning and opening
    // Private helper functions for the color picker dialog positioning and opening
    /**
     * @private
     * @param {?} parent
     * @param {?} child
     * @return {?}
     */
    ColorPickerComponent.prototype.isDescendant = 
    // Private helper functions for the color picker dialog positioning and opening
    /**
     * @private
     * @param {?} parent
     * @param {?} child
     * @return {?}
     */
    function (parent, child) {
        /** @type {?} */
        var node = child.parentNode;
        while (node !== null) {
            if (node === parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
    /**
     * @private
     * @param {?} element
     * @param {?} offset
     * @return {?}
     */
    ColorPickerComponent.prototype.createDialogBox = /**
     * @private
     * @param {?} element
     * @param {?} offset
     * @return {?}
     */
    function (element, offset) {
        return {
            top: element.getBoundingClientRect().top + (offset ? window.pageYOffset : 0),
            left: element.getBoundingClientRect().left + (offset ? window.pageXOffset : 0),
            width: element.offsetWidth,
            height: element.offsetHeight
        };
    };
    ColorPickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'color-picker',
                    template: "<div #dialogPopup class=\"color-picker\" [style.visibility]=\"hidden || !show ? 'hidden' : 'visible'\" [style.top.px]=\"top\" [style.left.px]=\"left\" [style.position]=\"position\" [style.height.px]=\"cpHeight\" [style.width.px]=\"cpWidth\" (click)=\"$event.stopPropagation()\">\n  <div *ngIf=\"cpDialogDisplay=='popup'\" class=\"arrow arrow-{{cpPosition}}\" [style.top.px]=\"arrowTop\"></div>\n\n  <div *ngIf=\"(cpColorMode ||\u00A01) === 1\" class=\"saturation-lightness\" [slider] [rgX]=\"1\" [rgY]=\"1\" [style.background-color]=\"hueSliderColor\" (newValue)=\"onColorChange($event)\" (dragStart)=\"onDragStart('saturation-lightness')\" (dragEnd)=\"onDragEnd('saturation-lightness')\">\n    <div class=\"cursor\" [style.top.px]=\"slider?.v\" [style.left.px]=\"slider?.s\"></div>\n  </div>\n\n  <div class=\"hue-alpha box\">\n    <div class=\"left\">\n      <div class=\"selected-color-background\"></div>\n\n      <div class=\"selected-color\" [style.background-color]=\"selectedColor\"></div>\n\n      <button *ngIf=\"cpAddColorButton\" type=\"button\" class=\"{{cpAddColorButtonClass}}\" [disabled]=\"cpPresetColors && cpPresetColors.length >= cpMaxPresetColorsLength\" (click)=\"onAddPresetColor($event, selectedColor)\">\n        {{cpAddColorButtonText}}\n      </button>\n    </div>\n\n    <div class=\"right\">\n      <div *ngIf=\"cpAlphaChannel==='disabled'\" style=\"height: 16px;\"></div>\n\n      <div #hueSlider class=\"hue\" [slider] [rgX]=\"1\" [style.display]=\"(cpColorMode ||\u00A01) === 1 ? 'block' : 'none'\" (newValue)=\"onHueChange($event)\" (dragStart)=\"onDragStart('hue')\" (dragEnd)=\"onDragEnd('hue')\">\n        <div class=\"cursor\" [style.left.px]=\"slider?.h\"></div>\n      </div>\n\n      <div #valueSlider class=\"value\" [slider] [rgX]=\"1\" [style.display]=\"(cpColorMode ||\u00A01) === 2 ? 'block': 'none'\" (newValue)=\"onValueChange($event)\" (dragStart)=\"onDragStart('value')\" (dragEnd)=\"onDragEnd('value')\">\n        <div class=\"cursor\" [style.right.px]=\"slider?.v\"></div>\n      </div>\n\n      <div #alphaSlider class=\"alpha\" [slider] [rgX]=\"1\" [style.display]=\"cpAlphaChannel === 'disabled' ? 'none' : 'block'\" [style.background-color]=\"alphaSliderColor\" (newValue)=\"onAlphaChange($event)\" (dragStart)=\"onDragStart('alpha')\" (dragEnd)=\"onDragEnd('alpha')\">\n        <div class=\"cursor\" [style.left.px]=\"slider?.a\"></div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 1 \" class=\"hsla-text\" [style.display]=\"format !== 2 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"360\" [text] [rg]=\"360\" [value]=\"hslaText?.h\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onHueInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.s\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onSaturationInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.l\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onLightnessInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"hslaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>H</div><div>S</div><div>L</div><div *ngIf=\"cpAlphaChannel!=='disabled'\">A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 1 \" [style.display]=\"format !== 1 ? 'none' : 'block'\" class=\"rgba-text\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.r\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onRedInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.g\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onGreenInput($event)\" />\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"255\" [text] [rg]=\"255\" [value]=\"rgbaText?.b\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onBlueInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"rgbaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>R</div><div>G</div><div>B</div><div *ngIf=\"cpAlphaChannel!=='disabled'\" >A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 1\" class=\"hex-text\" [class.hex-alpha]=\"cpAlphaChannel==='forced'\"\n    [style.display]=\"format !== 0 ? 'none' : 'block'\">\n    <div class=\"box\">\n      <input [text] [value]=\"hexText\" (blur)=\"onHexInput(null)\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onHexInput($event)\"/>\n      <input *ngIf=\"cpAlphaChannel==='forced'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\" [text] [rg]=\"1\" [value]=\"hexAlpha\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\"/>\n    </div>\n\n    <div class=\"box\">\n      <div>Hex</div>\n      <div *ngIf=\"cpAlphaChannel==='forced'\">A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 2\" class=\"value-text\">\n    <div class=\"box\">\n      <input type=\"number\" pattern=\"[0-9]*\" min=\"0\" max=\"100\" [text] [rg]=\"100\" [value]=\"hslaText?.l\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onValueInput($event)\" />\n      <input *ngIf=\"cpAlphaChannel!=='disabled'\" type=\"number\" pattern=\"[0-9]+([\\.,][0-9]{1,2})?\" min=\"0\" max=\"1\" step=\"0.1\"  [text] [rg]=\"1\" [value]=\"hslaText?.a\" (keyup.enter)=\"onAcceptColor($event)\" (newValue)=\"onAlphaInput($event)\" />\n    </div>\n\n    <div class=\"box\">\n      <div>V</div><div>A</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!cpDisableInput && (cpColorMode ||\u00A01) === 1\" class=\"type-policy\">\n    <span class=\"type-policy-arrow\" (click)=\"onFormatToggle(1)\"></span>\n    <span class=\"type-policy-arrow\" (click)=\"onFormatToggle(-1)\"></span>\n  </div>\n\n  <div *ngIf=\"cpPresetColors?.length || cpAddColorButton\" class=\"preset-area\">\n    <hr>\n\n    <div class=\"preset-label\">{{cpPresetLabel}}</div>\n\n    <div *ngIf=\"cpPresetColors?.length\">\n      <div *ngFor=\"let color of cpPresetColors\" class=\"preset-color\" [style.backgroundColor]=\"color\" (click)=\"setColorFromString(color)\">\n        <span *ngIf=\"cpAddColorButton\" class=\"{{cpRemoveColorButtonClass}}\" (click)=\"onRemovePresetColor($event, color)\"></span>\n      </div>\n    </div>\n\n    <div *ngIf=\"!cpPresetColors?.length && cpAddColorButton\" class=\"{{cpPresetEmptyMessageClass}}\">{{cpPresetEmptyMessage}}</div>\n  </div>\n\n  <div *ngIf=\"cpOKButton || cpCancelButton\" class=\"button-area\">\n    <button *ngIf=\"cpCancelButton\" type=\"button\" class=\"{{cpCancelButtonClass}}\" (click)=\"onCancelColor($event)\">{{cpCancelButtonText}}</button>\n\n    <button *ngIf=\"cpOKButton\" type=\"button\" class=\"{{cpOKButtonClass}}\" (click)=\"onAcceptColor($event)\">{{cpOKButtonText}}</button>\n  </div>\n</div>\n",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    styles: [".color-picker {\n  position: absolute;\n  z-index: 100000;\n\n  width: 230px;\n  height: auto;\n  border: #777 solid 1px;\n\n  cursor: default;\n\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n\n  user-select: none;\n  background-color: #fff;\n}\n\n.color-picker * {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n\n  box-sizing: border-box;\n  margin: 0;\n\n  font-size: 11px;\n}\n\n.color-picker input {\n  width: 0;\n  height: 26px;\n  min-width: 0;\n\n  font-size: 13px;\n  text-align: center;\n  color: #000;\n}\n\n.color-picker input:invalid,\n.color-picker input:-moz-ui-invalid,\n.color-picker input:-moz-submit-invalid {\n  box-shadow: none;\n}\n\n.color-picker input::-webkit-inner-spin-button,\n.color-picker input::-webkit-outer-spin-button {\n  margin: 0;\n\n  -webkit-appearance: none;\n}\n\n.color-picker .arrow {\n  position: absolute;\n  z-index: 999999;\n\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n\n.color-picker .arrow.arrow-top {\n  left: 8px;\n\n  border-width: 10px 5px;\n  border-color: #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);\n}\n\n.color-picker .arrow.arrow-left {\n  top: 8px;\n  left: 100%;\n\n  border-width: 5px 10px;\n  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777;\n}\n\n.color-picker .arrow.arrow-right {\n  top: 8px;\n  left: -20px;\n\n  border-width: 5px 10px;\n  border-color: rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);\n}\n\n.color-picker .arrow.arrow-bottom {\n  top: -20px;\n  left: 8px;\n\n  border-width: 10px 5px;\n  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #777 rgba(0, 0, 0, 0);\n}\n\n.color-picker .cursor {\n  position: relative;\n\n  width: 16px;\n  height: 16px;\n  border: #222 solid 2px;\n  border-radius: 50%;\n\n  cursor: default;\n}\n\n.color-picker .box {\n  display: flex;\n  padding: 4px 8px;\n}\n\n.color-picker .left {\n  position: relative;\n\n  padding: 16px 8px;\n}\n\n.color-picker .right {\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n\n  padding: 12px 8px;\n}\n\n.color-picker .button-area {\n  padding: 0 16px 16px;\n\n  text-align: right;\n}\n\n.color-picker .preset-area {\n  padding: 4px 15px;\n}\n\n.color-picker .preset-area .preset-label {\n  overflow: hidden;\n  width: 100%;\n  padding: 4px;\n\n  font-size: 11px;\n  white-space: nowrap;\n  text-align: left;\n  text-overflow: ellipsis;\n  color: #555;\n}\n\n.color-picker .preset-area .preset-color {\n  position: relative;\n\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  margin: 4px 6px 8px;\n  border: #a9a9a9 solid 1px;\n  border-radius: 25%;\n\n  cursor: pointer;\n}\n\n.color-picker .preset-area .preset-empty-message {\n  min-height: 18px;\n  margin-top: 4px;\n  margin-bottom: 8px;\n\n  font-style: italic;\n  text-align: center;\n}\n\n.color-picker .hex-text {\n  width: 100%;\n  padding: 4px 8px;\n\n  font-size: 11px;\n}\n\n.color-picker .hex-text .box {\n  padding: 0 24px 8px 8px;\n}\n\n.color-picker .hex-text .box div {\n  float: left;\n\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n\n  text-align: center;\n  color: #555;\n  clear: left;\n}\n\n.color-picker .hex-text .box input {\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  padding: 1px;\n  border: #a9a9a9 solid 1px;\n}\n\n.color-picker .hex-alpha .box div:first-child,\n.color-picker .hex-alpha .box input:first-child {\n  flex-grow: 3;\n  margin-right: 8px;\n}\n\n.color-picker .hsla-text,\n.color-picker .rgba-text,\n.color-picker .value-text {\n  width: 100%;\n  padding: 4px 8px;\n\n  font-size: 11px;\n}\n\n.color-picker .hsla-text .box,\n.color-picker .rgba-text .box {\n  padding: 0 24px 8px 8px;\n}\n\n.color-picker .value-text .box {\n  padding: 0 8px 8px;\n}\n\n.color-picker .hsla-text .box div,\n.color-picker .rgba-text .box div,\n.color-picker .value-text .box div {\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n\n  flex: 1 1 auto;\n  margin-right: 8px;\n\n  text-align: center;\n  color: #555;\n}\n\n.color-picker .hsla-text .box div:last-child,\n.color-picker .rgba-text .box div:last-child,\n.color-picker .value-text .box div:last-child {\n  margin-right: 0;\n}\n\n.color-picker .hsla-text .box input,\n.color-picker .rgba-text .box input,\n.color-picker .value-text .box input {\n  float: left;\n\n  -webkit-flex: 1;\n  -ms-flex: 1;\n\n  flex: 1;\n  padding: 1px;\n  margin: 0 8px 0 0;\n  border: #a9a9a9 solid 1px;\n}\n\n.color-picker .hsla-text .box input:last-child,\n.color-picker .rgba-text .box input:last-child,\n.color-picker .value-text .box input:last-child {\n  margin-right: 0;\n}\n\n.color-picker .hue-alpha {\n  align-items: center;\n  margin-bottom: 3px;\n}\n\n.color-picker .hue {\n  direction: ltr;\n\n  width: 100%;\n  height: 16px;\n  margin-bottom: 16px;\n  border: none;\n\n  cursor: pointer;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwkUFWbCCAAAAFxJREFUaN7t0kEKg0AQAME2x83/n2qu5qCgD1iDhCoYdpnbQC9bbY1qVO/jvc6k3ad91s7/7F1/csgPrujuQ17BDYSFsBAWwgJhISyEBcJCWAgLhIWwEBYIi2f7Ar/1TCgFH2X9AAAAAElFTkSuQmCC');\n}\n\n.color-picker .value {\n  direction: rtl;\n\n  width: 100%;\n  height: 16px;\n  margin-bottom: 16px;\n  border: none;\n\n  cursor: pointer;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAACTklEQVR42u3SYUcrABhA4U2SkmRJMmWSJklKJiWZZpKUJJskKUmaTFImKZOUzMySpGRmliRNJilJSpKSJEtmSpIpmWmSdO736/6D+x7OP3gUCoWCv1cqlSQlJZGcnExKSgqpqamkpaWRnp5ORkYGmZmZqFQqsrKyyM7OJicnh9zcXNRqNXl5eeTn56PRaCgoKKCwsJCioiK0Wi3FxcWUlJRQWlpKWVkZ5eXlVFRUUFlZiU6no6qqiurqampqaqitraWurg69Xk99fT0GgwGj0UhDQwONjY00NTXR3NxMS0sLra2ttLW10d7ejslkwmw209HRQWdnJ11dXXR3d9PT00Nvby99fX309/czMDDA4OAgFouFoaEhrFYrw8PDjIyMMDo6ytjYGDabjfHxcSYmJpicnGRqagq73c709DQzMzPMzs4yNzfH/Pw8DocDp9OJy+XC7XazsLDA4uIiS0tLLC8vs7KywurqKmtra3g8HrxeLz6fD7/fz/r6OhsbG2xubrK1tcX29jaBQICdnR2CwSC7u7vs7e2xv7/PwcEBh4eHHB0dcXx8zMnJCaenp5ydnXF+fs7FxQWXl5dcXV1xfX3Nzc0Nt7e33N3dEQqFuL+/5+HhgXA4TCQS4fHxkaenJ56fn3l5eeH19ZVoNMrb2xvv7+98fHwQi8WIx+N8fn6SSCT4+vri+/ubn58ffn9/+VcKgSWwBJbAElgCS2AJLIElsASWwBJYAktgCSyBJbAElsASWAJLYAksgSWwBJbAElgCS2AJLIElsP4/WH8AmJ5Z6jHS4h8AAAAASUVORK5CYII=');\n}\n\n.color-picker .alpha {\n  direction: ltr;\n\n  width: 100%;\n  height: 16px;\n  border: none;\n\n  cursor: pointer;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAQCAYAAAD06IYnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AIWDwYQlZMa3gAAAWVJREFUaN7tmEGO6jAQRCsOArHgBpyAJYGjcGocxAm4A2IHpmoWE0eBH+ezmFlNvU06shJ3W6VEelWMUQAIIF9f6qZpimsA1LYtS2uF51/u27YVAFZVRUkEoGHdPV/sIcbIEIIkUdI/9Xa7neyv61+SWFUVAVCSct00TWn2fv6u3+Ecfd3tXzy/0+nEUu+SPjo/kqzrmiQpScN6v98XewfA8/lMkiLJ2WxGSUopcT6fM6U0NX9/frfbjev1WtfrlZfLhYfDQQHG/AIOlnGwjINlHCxjHCzjYJm/TJWdCwquJXseFFzGwDNNeiKMOJTO8xQdDQaeB29+K9efeLaBo9J7vdvtJj1RjFFjfiv7qv95tjx/7leSQgh93e1ffMeIp6O+YQjho/N791t1XVOSSI7N//K+4/GoxWLBx+PB5/Op5XLJ+/3OlJJWqxU3m83ovv5iGf8KjYNlHCxjHCzjYBkHy5gf5gusvQU7U37jTAAAAABJRU5ErkJggg==');\n}\n\n.color-picker .type-policy {\n  position: absolute;\n  top: 218px;\n  right: 12px;\n\n  width: 16px;\n  height: 24px;\n\n  background-size: 8px 16px;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACewAAAnsB01CO3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIASURBVEiJ7ZY9axRRFIafsxMStrLQJpAgpBFhi+C9w1YSo00I6RZ/g9vZpBf/QOr4GyRgkSKNSrAadsZqQGwCkuAWyRZJsySwvhZ7N/vhzrgbLH3Ld8597jlzz50zJokyxXH8DqDVar0qi6v8BbItqSGpEcfxdlmsFWXkvX8AfAVWg3UKPEnT9GKujMzsAFgZsVaCN1VTQd77XUnrgE1kv+6935268WRpzrnHZvYRWC7YvC3pRZZl3wozqtVqiyH9IgjAspkd1Gq1xUJQtVrdB9ZKIAOthdg/Qc65LUk7wNIMoCVJO865rYFhkqjX6/d7vV4GPJwBMqofURS5JEk6FYBer/eeYb/Mo9WwFnPOvQbeAvfuAAK4BN4sAJtAG/gJIElmNuiJyba3EGNmZiPeZuEVmVell/Y/6N+CzDn3AXhEOOo7Hv/3BeAz8IzQkMPnJbuPx1wC+yYJ7/0nYIP5S/0FHKdp+rwCEEXRS/rf5Hl1Gtb2M0iSpCOpCZzPATmX1EySpHMLAsiy7MjMDoHrGSDXZnaYZdnRwBh7J91utwmczAA6CbG3GgPleX4jqUH/a1CktqRGnuc3hSCAMB32gKspkCtgb3KCQMmkjeP4WNJThrNNZval1WptTIsv7JtQ4tmIdRa8qSoEpWl6YWZNoAN0zKxZNPehpLSBZv2t+Q0CJ9lLnARQLAAAAABJRU5ErkJggg==');\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.color-picker .type-policy .type-policy-arrow {\n  display: block;\n\n  width: 100%;\n  height: 50%;\n}\n\n.color-picker .selected-color {\n  position: absolute;\n  top: 16px;\n  left: 8px;\n\n  width: 40px;\n  height: 40px;\n  border: 1px solid #a9a9a9;\n  border-radius: 50%;\n}\n\n.color-picker .selected-color-background {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAh0lEQVRYR+2W0QlAMQgD60zdfwOdqa8TmI/wQMr5K0I5bZLIzLOa2nt37VVVbd+dDx5obgCC3KBLwJ2ff4PnVidkf+ucIhw80HQaCLo3DMH3CRK3iFsmAWVl6hPNDwt8EvNE5q+YuEXcMgkonVM6SdyCoEvAnZ8v1Hjx817MilmxSUB5rdLJDycZgUAZUch/AAAAAElFTkSuQmCC');\n}\n\n.color-picker .saturation-lightness {\n  direction: ltr;\n\n  width: 100%;\n  height: 130px;\n  border: none;\n\n  cursor: pointer;\n  touch-action: manipulation;\n  background-size: 100% 100%;\n  background-image: url('data:image/png;base64,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');\n}\n\n.color-picker .cp-add-color-button-class {\n  position: absolute;\n\n  display: inline;\n  padding: 0;\n  margin: 3px -3px;\n  border: 0;\n\n  cursor: pointer;\n  background: transparent;\n}\n\n.color-picker .cp-add-color-button-class:hover {\n  text-decoration: underline;\n}\n\n.color-picker .cp-add-color-button-class:disabled {\n  cursor: not-allowed;\n  color: #999;\n}\n\n.color-picker .cp-add-color-button-class:disabled:hover {\n  text-decoration: none;\n}\n\n.color-picker .cp-remove-color-button-class {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n\n  cursor: pointer;\n  text-align: center;\n  background: #fff;\n\n  box-shadow: 1px 1px 5px #333;\n}\n\n.color-picker .cp-remove-color-button-class::before {\n  content: 'x';\n\n  position: relative;\n  bottom: 3.5px;\n\n  display: inline-block;\n\n  font-size: 10px;\n}\n"]
                }] }
    ];
    /** @nocollapse */
    ColorPickerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: ColorPickerService }
    ]; };
    ColorPickerComponent.propDecorators = {
        dialogElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['dialogPopup',] }],
        hueSlider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['hueSlider',] }],
        alphaSlider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['alphaSlider',] }],
        handleEsc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:keyup.esc', ['$event'],] }],
        handleEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:keyup.enter', ['$event'],] }]
    };
    return ColorPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColorPickerDirective = /** @class */ (function () {
    function ColorPickerDirective(injector, cfr, appRef, vcRef, elRef, _service) {
        this.injector = injector;
        this.cfr = cfr;
        this.appRef = appRef;
        this.vcRef = vcRef;
        this.elRef = elRef;
        this._service = _service;
        this.dialogCreated = false;
        this.ignoreChanges = false;
        this.cpWidth = '230px';
        this.cpHeight = 'auto';
        this.cpToggle = false;
        this.cpDisabled = false;
        this.cpIgnoredElements = [];
        this.cpFallbackColor = '';
        this.cpColorMode = 'color';
        this.cpOutputFormat = 'auto';
        this.cpAlphaChannel = 'enabled';
        this.cpDisableInput = false;
        this.cpDialogDisplay = 'popup';
        this.cpSaveClickOutside = true;
        this.cpCloseClickOutside = true;
        this.cpUseRootViewContainer = false;
        this.cpPosition = 'right';
        this.cpPositionOffset = '0%';
        this.cpPositionRelativeToArrow = false;
        this.cpOKButton = false;
        this.cpOKButtonText = 'OK';
        this.cpOKButtonClass = 'cp-ok-button-class';
        this.cpCancelButton = false;
        this.cpCancelButtonText = 'Cancel';
        this.cpCancelButtonClass = 'cp-cancel-button-class';
        this.cpPresetLabel = 'Preset colors';
        this.cpMaxPresetColorsLength = 6;
        this.cpPresetEmptyMessage = 'No colors added';
        this.cpPresetEmptyMessageClass = 'preset-empty-message';
        this.cpAddColorButton = false;
        this.cpAddColorButtonText = 'Add color';
        this.cpAddColorButtonClass = 'cp-add-color-button-class';
        this.cpRemoveColorButtonClass = 'cp-remove-color-button-class';
        this.cpInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpToggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpSliderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpSliderDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.cpSliderDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.colorPickerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.cpPresetColorsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
    }
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.handleClick = /**
     * @return {?}
     */
    function () {
        this.inputFocus();
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.handleFocus = /**
     * @return {?}
     */
    function () {
        this.inputFocus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.handleInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.inputChange(event);
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.cmpRef !== undefined) {
            this.cmpRef.destroy();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ColorPickerDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.cpToggle && !this.cpDisabled) {
            if (changes.cpToggle.currentValue) {
                this.openDialog();
            }
            else if (!changes.cpToggle.currentValue) {
                this.closeDialog();
            }
        }
        if (changes.colorPicker) {
            if (this.dialog && !this.ignoreChanges) {
                if (this.cpDialogDisplay === 'inline') {
                    this.dialog.setInitialColor(changes.colorPicker.currentValue);
                }
                this.dialog.setColorFromString(changes.colorPicker.currentValue, false);
                if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
                    this.cmpRef.changeDetectorRef.detectChanges();
                }
            }
            this.ignoreChanges = false;
        }
        if (changes.cpPresetLabel || changes.cpPresetColors) {
            if (this.dialog) {
                this.dialog.setPresetConfig(this.cpPresetLabel, this.cpPresetColors);
            }
        }
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.openDialog = /**
     * @return {?}
     */
    function () {
        if (!this.dialogCreated) {
            /** @type {?} */
            var vcRef = this.vcRef;
            this.dialogCreated = true;
            if (this.cpUseRootViewContainer && this.cpDialogDisplay !== 'inline') {
                /** @type {?} */
                var classOfRootComponent = this.appRef.componentTypes[0];
                /** @type {?} */
                var appInstance = this.injector.get(classOfRootComponent);
                vcRef = appInstance.vcRef || appInstance.viewContainerRef || this.vcRef;
                if (vcRef === this.vcRef) {
                    console.warn('You are using cpUseRootViewContainer, ' +
                        'but the root component is not exposing viewContainerRef!' +
                        'Please expose it by adding \'public vcRef: ViewContainerRef\' to the constructor.');
                }
            }
            /** @type {?} */
            var compFactory = this.cfr.resolveComponentFactory(ColorPickerComponent);
            /** @type {?} */
            var injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ReflectiveInjector"].fromResolvedProviders([], vcRef.parentInjector);
            this.cmpRef = vcRef.createComponent(compFactory, 0, injector, []);
            this.cmpRef.instance.setupDialog(this, this.elRef, this.colorPicker, this.cpWidth, this.cpHeight, this.cpDialogDisplay, this.cpFallbackColor, this.cpColorMode, this.cpAlphaChannel, this.cpOutputFormat, this.cpDisableInput, this.cpIgnoredElements, this.cpSaveClickOutside, this.cpCloseClickOutside, this.cpUseRootViewContainer, this.cpPosition, this.cpPositionOffset, this.cpPositionRelativeToArrow, this.cpPresetLabel, this.cpPresetColors, this.cpMaxPresetColorsLength, this.cpPresetEmptyMessage, this.cpPresetEmptyMessageClass, this.cpOKButton, this.cpOKButtonClass, this.cpOKButtonText, this.cpCancelButton, this.cpCancelButtonClass, this.cpCancelButtonText, this.cpAddColorButton, this.cpAddColorButtonClass, this.cpAddColorButtonText, this.cpRemoveColorButtonClass);
            this.dialog = this.cmpRef.instance;
            if (this.vcRef !== vcRef) {
                this.cmpRef.changeDetectorRef.detectChanges();
            }
        }
        else if (this.dialog) {
            this.dialog.openDialog(this.colorPicker);
        }
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.closeDialog = /**
     * @return {?}
     */
    function () {
        if (this.dialog && this.cpDialogDisplay === 'popup') {
            this.dialog.closeDialog();
        }
    };
    /**
     * @param {?} state
     * @return {?}
     */
    ColorPickerDirective.prototype.stateChanged = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.cpToggleChange.emit(state);
        if (state) {
            this.colorPickerOpen.emit(this.colorPicker);
        }
        else {
            this.colorPickerClose.emit(this.colorPicker);
        }
    };
    /**
     * @param {?} value
     * @param {?=} ignore
     * @return {?}
     */
    ColorPickerDirective.prototype.colorChanged = /**
     * @param {?} value
     * @param {?=} ignore
     * @return {?}
     */
    function (value, ignore) {
        if (ignore === void 0) { ignore = true; }
        this.ignoreChanges = ignore;
        this.colorPickerChange.emit(value);
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.colorCanceled = /**
     * @return {?}
     */
    function () {
        this.colorPickerCancel.emit();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerDirective.prototype.colorSelected = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.colorPickerSelect.emit(value);
    };
    /**
     * @return {?}
     */
    ColorPickerDirective.prototype.inputFocus = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.elRef.nativeElement;
        /** @type {?} */
        var ignored = this.cpIgnoredElements.filter(function (item) { return item === element; });
        if (!this.cpDisabled && !ignored.length) {
            if (typeof document !== 'undefined' && element === document.activeElement) {
                this.openDialog();
            }
            else if (!this.dialog || !this.dialog.show) {
                this.openDialog();
            }
            else {
                this.closeDialog();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.inputChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.dialog) {
            this.dialog.setColorFromString(event.target.value, true);
        }
        else {
            this.colorPicker = event.target.value;
            this.colorPickerChange.emit(this.colorPicker);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.inputChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cpInputChange.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.sliderChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cpSliderChange.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.sliderDragEnd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cpSliderDragEnd.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ColorPickerDirective.prototype.sliderDragStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.cpSliderDragStart.emit(event);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorPickerDirective.prototype.presetColorsChanged = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.cpPresetColorsChange.emit(value);
    };
    ColorPickerDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[colorPicker]',
                    exportAs: 'ngxColorPicker'
                },] }
    ];
    /** @nocollapse */
    ColorPickerDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: ColorPickerService }
    ]; };
    ColorPickerDirective.propDecorators = {
        colorPicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpIgnoredElements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpFallbackColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpColorMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpOutputFormat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpAlphaChannel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpDisableInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpDialogDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpSaveClickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpCloseClickOutside: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpUseRootViewContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPositionOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPositionRelativeToArrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpOKButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpOKButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpOKButtonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpCancelButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpCancelButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpCancelButtonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPresetLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPresetColors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpMaxPresetColorsLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPresetEmptyMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpPresetEmptyMessageClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpAddColorButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpAddColorButtonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpAddColorButtonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpRemoveColorButtonClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cpInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cpToggleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cpSliderChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cpSliderDragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cpSliderDragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        colorPickerOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        colorPickerClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        colorPickerCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        colorPickerSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        colorPickerChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        cpPresetColorsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        handleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }],
        handleFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focus',] }],
        handleInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['input', ['$event'],] }]
    };
    return ColorPickerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColorPickerModule = /** @class */ (function () {
    function ColorPickerModule() {
    }
    ColorPickerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    exports: [ColorPickerDirective],
                    providers: [ColorPickerService],
                    declarations: [ColorPickerComponent, ColorPickerDirective, TextDirective, SliderDirective],
                    entryComponents: [ColorPickerComponent]
                },] }
    ];
    return ColorPickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-color-picker.es5.js.map


/***/ }),

/***/ "./src/app/components/buttons/buttons-material.html":
/*!**********************************************************!*\
  !*** ./src/app/components/buttons/buttons-material.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"gene-btn-wrapper\">\n   <div class=\"gene-card-title\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n         <div fxLayout=\"column\">\n            <h3>{{'Buttons'|translate}}</h3>\n         </div>\n         <span fxFlex></span>\n      </div>\n      <mat-divider></mat-divider>\n   </div>\n   <div class=\"gene-card-content\">\n      <p><code>mat-button</code> is an HTML button or a tag enhanced with styling and animation to match the Material Design button spec</p>\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h5 class=\"mrgn-b-md\">{{'Flat buttons'|translate}}</h5>\n         <button class=\"mrgn-all-xs\" mat-icon-button>\n            <mat-icon>favorite</mat-icon>\n         </button>\n         <button class=\"mrgn-all-xs\" mat-button>Default</button>\n         <button class=\"mrgn-all-xs\" mat-button color=\"primary\">Primary</button>\n         <button class=\"mrgn-all-xs\" mat-button color=\"accent\">Accent</button>\n         <button class=\"mrgn-all-xs\" mat-button color=\"warn\">Warn</button>\n         <button class=\"mrgn-all-xs\" mat-button disabled>Disabled</button>\n      </div>\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h5 class=\"mrgn-b-md\">{{'Raised buttons'|translate}}</h5>\n         <button class=\"mrgn-all-xs\" mat-raised-button mat-icon-button>\n            <mat-icon>favorite</mat-icon>\n         </button>\n         <button class=\"mrgn-all-xs\" mat-raised-button>Default</button>\n         <button class=\"mrgn-all-xs\" mat-raised-button color=\"primary\">Primary</button>\n         <button class=\"mrgn-all-xs\" mat-raised-button color=\"accent\">Accent</button>\n         <button class=\"mrgn-all-xs\" mat-raised-button color=\"warn\">Warn</button>\n         <button class=\"mrgn-all-xs\" mat-raised-button disabled>Disabled</button>\n      </div>\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h5 class=\"mrgn-b-md\">{{'Small buttons'|translate}}</h5>\n         <button class=\"mrgn-all-xs\" mat-raised-button mat-icon-button mat-button-sm>\n            <mat-icon>favorite</mat-icon>\n         </button>\n         <button class=\"mrgn-all-xs\" mat-raised-button mat-button-sm>Default</button>\n         <button class=\"mrgn-all-xs\" mat-raised-button mat-button-sm color=\"primary\">Primary</button>\n         <button class=\"mrgn-all-xs\" mat-raised-button mat-button-sm color=\"accent\">Accent</button>\n         <button class=\"mrgn-all-xs\" mat-raised-button mat-button-sm color=\"warn\">Warn</button>\n         <button class=\"mrgn-all-xs\" mat-raised-button mat-button-sm disabled>Disabled</button>\n      </div>\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h5 class=\"mrgn-b-md\">{{'Fab buttons'|translate}}</h5>\n         <button class=\"mrgn-all-xs\" mat-fab>\n            <mat-icon>add</mat-icon>\n         </button>\n         <button class=\"mrgn-all-xs\" mat-fab disabled=\"\">\n            <mat-icon>add</mat-icon>\n         </button>\n         <button class=\"mrgn-all-xs\" mat-mini-fab>\n            <mat-icon>add</mat-icon>\n         </button>\n         <button class=\"mrgn-all-xs\" mat-mini-fab disabled>\n            <mat-icon>add</mat-icon>\n         </button>\n      </div>\n      <div class=\"box-inset pad-all-md \">\n         <h5 class=\"mrgn-b-md\">{{'Button toggles'|translate}}</h5>\n         <mat-button-toggle-group #group=\"matButtonToggleGroup\">\n            <mat-button-toggle value=\"left\">\n               <mat-icon>format_align_left</mat-icon>\n            </mat-button-toggle>\n            <mat-button-toggle value=\"center\">\n               <mat-icon>format_align_center</mat-icon>\n            </mat-button-toggle>\n            <mat-button-toggle value=\"right\">\n               <mat-icon>format_align_right</mat-icon>\n            </mat-button-toggle>\n            <mat-button-toggle value=\"justify\" disabled>\n               <mat-icon>format_align_justify</mat-icon>\n            </mat-button-toggle>\n         </mat-button-toggle-group>\n         <div class=\"example-selected-value\">Selected value: {{group.value}}</div>\n      </div>\n   </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/buttons/buttons-material.scss":
/*!**********************************************************!*\
  !*** ./src/app/components/buttons/buttons-material.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body .gene-btn-wrapper .mat-icon-button,\nbody .gene-btn-wrapper .mat-mini-fab {\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL2NvbXBvbmVudHMvYnV0dG9ucy9idXR0b25zLW1hdGVyaWFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksU0FBUyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9idXR0b25zL2J1dHRvbnMtbWF0ZXJpYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkgLmdlbmUtYnRuLXdyYXBwZXIgLm1hdC1pY29uLWJ1dHRvbixcbmJvZHkgLmdlbmUtYnRuLXdyYXBwZXIgLm1hdC1taW5pLWZhYiB7XG4gICAgbWFyZ2luOiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/buttons/buttons.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/buttons/buttons.component.ts ***!
  \*********************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
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




var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent(pageTitleService, translate) {
        this.pageTitleService = pageTitleService;
        this.translate = translate;
    }
    ButtonsComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Buttons");
    };
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-buttons',
            template: __webpack_require__(/*! ./buttons-material.html */ "./src/app/components/buttons/buttons-material.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./buttons-material.scss */ "./src/app/components/buttons/buttons-material.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/components/cards/cards-material.html":
/*!******************************************************!*\
  !*** ./src/app/components/cards/cards-material.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\n   <div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n      <mat-card class=\"pad-t-none\">\n         <div class=\"gene-thumb no-gutter\"><img src=\"assets/img/post1.jpg\" width=\"1200\" height=\"800\"></div>\n         <div class=\"gene-card-content\">\n            <h3>5 Code editor that are awesome</h3>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit est tempore sed vero nostrum ullam id\n               quos suscipit repudiandae, alias consectetur dignissimos esse officia distinctio et hic consequuntur,\n               fugit eaque itaque cumque perspiciatis, nemo totam. Inventore corporis ut magni, exercitationem fugiat\n               perspiciatis, suscipit consequatur non nulla repellendus quis, quasi velit.\n            </p>\n            <span class=\"meta-post\">By:\n            Admin, March 7</span>\n         </div>\n      </mat-card>\n   </div>\n   <div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n      <mat-card class=\"pad-t-none\">\n         <div class=\"gene-thumb no-gutter\"><img src=\"assets/img/post2.jpg\" width=\"1200\" height=\"800\"></div>\n         <div class=\"gene-card-content\">\n            <h3>Tips for update your themes</h3>\n            <p>Odit est tempore sed vero nostrum ullam id quos suscipit repudiandae, alias consectetur dignissimos esse\n               officia distinctio et hic consequuntur, fugit eaque itaque cumque perspiciatis, nemo totam. Inventore\n               corporis ut magni, exercitationem fugiat perspiciatis, suscipit consequatur non nulla repellendus quis,\n               quasi velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n            </p>\n            <span class=\"meta-post\">By:\n            Admin, March 9</span>\n         </div>\n      </mat-card>\n   </div>\n</div>\n<div fxLayout=\"row wrap\">\n   <div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n      <mat-card class=\"pad-t-none\">\n         <div class=\"gene-thumb no-gutter\"><img src=\"assets/img/post3.jpg\" width=\"1200\" height=\"800\"></div>\n         <div class=\"gene-card-content\">\n            <h3>Latest angular themes</h3>\n            <p>vero eaque illo consequuntur reprehenderit, quaerat provident sed pariatur quia inventore necessitatibus\n               sapiente a rerum, ipsum accusantium veniam rem! Sunt deserunt soluta ea neque adipisci ut magnam nostrum\n               repellat minus cum maxime excepturi inventore nulla consectetur, eum voluptates harum corrupti dolorum\n               ipsa praesentium, Accusamus quaerat excepturi.\n            </p>\n            <span class=\"meta-post\">By: John, March 10</span>\n         </div>\n         <div class=\"gene-card-footer\">\n            <mat-divider></mat-divider>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div>\n                  <button mat-icon-button>\n                     <mat-icon>share</mat-icon>\n                  </button>\n                  <button mat-icon-button>\n                     <mat-icon>favorite</mat-icon>\n                  </button>\n               </div>\n               <span fxFlex></span>\n               <button mat-icon-button [matMenuTriggerFor]=\"menuopt\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n         </div>\n      </mat-card>\n   </div>\n   <div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n      <mat-card class=\"pad-t-none\">\n         <div class=\"gene-thumb no-gutter\"><img src=\"assets/img/post4.jpg\" width=\"1200\" height=\"800\"></div>\n         <div class=\"gene-card-content\">\n            <h3>How to install Angular Theme</h3>\n            <p>Illum rerum quo in, similique, accusamus debitis veritatis asperiores porro fugiat sint, quidem eveniet\n               facilis est sequi praesentium quaerat vitae id cumque. Cupiditate deserunt, eius assumenda aliquam\n               delectus corporis. Voluptates, natus. Facere ipsam quibusdam, alias sequi nobis sed. Aut nulla ipsum,\n               illum ea soluta incidunt, vel facere nobis facilis.\n            </p>\n            <span class=\"meta-post\">By: Help Desk, March 14</span>\n         </div>\n         <div class=\"gene-card-footer\">\n            <mat-divider></mat-divider>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div>\n                  <button mat-icon-button>\n                     <mat-icon>share</mat-icon>\n                  </button>\n                  <button mat-icon-button>\n                     <mat-icon>favorite</mat-icon>\n                  </button>\n               </div>\n               <span fxFlex></span>\n               <button mat-icon-button [matMenuTriggerFor]=\"menuopt\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n         </div>\n      </mat-card>\n   </div>\n</div>\n<div fxLayout=\"row wrap\">\n   <div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n      <mat-card>\n         <div class=\"gene-card-content\">\n            <h3>5 things that you need to think before shopping</h3>\n            <p>Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur\n               eveniet iste iusto veritatis magni eum, sunt eius laudantium adipisci repudiandae numquam, incidunt\n               suscipit. Veritatis ea autem, beatae quae quia cum tempora, voluptatum dignissimos. Reiciendis animi,\n               quos sint. Vero maxime molestiae.\n            </p>\n            <span class=\"meta-post\">By: Criag, March 2</span>\n         </div>\n         <div class=\"gene-card-footer\">\n            <mat-divider></mat-divider>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div>\n                  <button mat-icon-button>\n                     <mat-icon>share</mat-icon>\n                  </button>\n                  <button mat-icon-button>\n                     <mat-icon>favorite</mat-icon>\n                  </button>\n               </div>\n               <span fxFlex></span>\n               <button mat-icon-button [matMenuTriggerFor]=\"menuopt\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n         </div>\n      </mat-card>\n   </div>\n   <div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n      <mat-card>\n         <div class=\"gene-card-content\">\n            <h3>Meditation can cure depression</h3>\n            <p>Accusamus ex doloremque, temporibus dignissimos officiis, quisquam totam tenetur harum eligendi\n               molestias soluta numquam ipsam sapiente culpa voluptas illo voluptatum fuga quibusdam. Vitae officia\n               modi quod enim. Excepturi praesentium expedita, officiis. Quam iusto iste, quas repudiandae in\n               assumenda, vel totam minus inventore. \n            </p>\n            <span class=\"meta-post\">By: Dr.Mills, March 18</span>\n         </div>\n         <div class=\"gene-card-footer\">\n            <mat-divider></mat-divider>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div>\n                  <button mat-icon-button>\n                     <mat-icon>share</mat-icon>\n                  </button>\n                  <button mat-icon-button>\n                     <mat-icon>favorite</mat-icon>\n                  </button>\n               </div>\n               <span fxFlex></span>\n               <button mat-icon-button [matMenuTriggerFor]=\"menuopt\">\n                  <mat-icon>more_horiz</mat-icon>\n               </button>\n            </div>\n         </div>\n      </mat-card>\n   </div>\n</div>\n<div fxLayout=\"row wrap\">\n   <div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n      <mat-card>\n         <div class=\"gene-card-content\">\n            <h3>Global Warming is big threat</h3>\n            <p>repellendus! Doloremque unde veritatis, quos minus facere, vero illum aut quibusdam non, provident\n               laborum mollitia, ullam id dolor perferendis? Aut et, veritatis excepturi exercitationem, tenetur, ipsam\n               dolorem quasi vitae laudantium officiis error vero fuga doloribus sint id aliquid quo minus temporibus\n               ducimus odit accusamus expedita modi nam, recusandae, sed animi accusamus\n            </p>\n            <span class=\"meta-post\">By:\n            Jeff, March 22</span>\n         </div>\n      </mat-card>\n   </div>\n   <div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n      <mat-card>\n         <div class=\"gene-card-content\">\n            <h3>How to focus in any situation</h3>\n            <p>Dolor sit amet, consectetur adipisicing elit. Odit est tempore sed vero nostrum ullam id quos suscipit\n               repudiandae, alias consectetur dignissimos esse officia distinctio et hic consequuntur, fugit eaque\n               itaque cumque perspiciatis, nemo totam. Inventore corporis ut magni, exercitationem fugiat perspiciatis,\n               suscipit consequatur non nulla repellendus quis, quasi velit.\n            </p>\n            <span class=\"meta-post\">By: Genny, May\n            2</span>\n         </div>\n      </mat-card>\n   </div>\n</div>\n<mat-menu #menuopt=\"matMenu\" x-position=\"before\">\n   <button mat-menu-item>\n      <mat-icon>settings</mat-icon>\n      Settings\n   </button>\n   <button mat-menu-item>\n      <mat-icon>more</mat-icon>\n      View More\n   </button>\n   <button mat-menu-item>\n      <mat-icon>notifications_off</mat-icon>\n      Disable notifications\n   </button>\n   <button mat-menu-item>\n      <mat-icon>exit_to_app</mat-icon>\n      Remove Panel\n   </button>\n</mat-menu>"

/***/ }),

/***/ "./src/app/components/cards/cards-material.scss":
/*!******************************************************!*\
  !*** ./src/app/components/cards/cards-material.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZHMvY2FyZHMtbWF0ZXJpYWwuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/cards/cards.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/cards/cards.component.ts ***!
  \*****************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
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




var CardsComponent = /** @class */ (function () {
    function CardsComponent(pageTitleService, translate) {
        this.pageTitleService = pageTitleService;
        this.translate = translate;
    }
    CardsComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Cards");
    };
    CardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-cards',
            template: __webpack_require__(/*! ./cards-material.html */ "./src/app/components/cards/cards-material.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./cards-material.scss */ "./src/app/components/cards/cards-material.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/components/checkbox/checkbox-material.html":
/*!************************************************************!*\
  !*** ./src/app/components/checkbox/checkbox-material.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n   <div class=\"gene-card-title\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n         <div fxLayout=\"column\">\n            <h3>{{'Checkbox'|translate}}</h3>\n         </div>\n         <span fxFlex></span>\n      </div>\n      <mat-divider></mat-divider>\n   </div>\n   <div class=\"gene-card-content\">\n      <p>mat-checkbox is a Material Design selection control that allows users to make a binary choice for a predetermined conditioned</p>\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h5 class=\"mrgn-b-md\">{{'Checkbox configuration'|translate}}</h5>\n         <section class=\"example-section\">\n            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\n         </section>\n         <section class=\"example-section\">\n            <label class=\"example-margin\">Align:</label>\n            <mat-radio-group [(ngModel)]=\"labelPosition\">\n            <mat-radio-button class=\"example-margin\" value=\"after\">After</mat-radio-button>\n            <mat-radio-button class=\"example-margin\" value=\"before\">Before</mat-radio-button>\n            </mat-radio-group>\n         </section>\n         <section class=\"example-section\">\n            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n         </section>\n      </div>\n      <div class=\"box-inset pad-all-md\">\n         <h5 class=\"mrgn-b-md\">{{'Result'|translate}}</h5>\n         <section class=\"example-section\">\n            <mat-checkbox\n            class=\"example-margin\"\n            [(ngModel)]=\"checked\"\n            [(indeterminate)]=\"indeterminate\"\n            [labelPosition]=\"labelPosition\"\n            [disabled]=\"disabled\">\n            I'm a checkbox\n            </mat-checkbox>\n         </section>\n      </div>\n   </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/checkbox/checkbox-material.scss":
/*!************************************************************!*\
  !*** ./src/app/components/checkbox/checkbox-material.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\n  margin: 10px; }\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px; }\n\n.example-margin {\n  margin: 0 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3gtbWF0ZXJpYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFHZDtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3gtbWF0ZXJpYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWgyIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZXhhbXBsZS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5leGFtcGxlLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/checkbox/checkbox.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/checkbox/checkbox.component.ts ***!
  \***********************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
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




var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent(pageTitleService, translate) {
        this.pageTitleService = pageTitleService;
        this.translate = translate;
        this.checked = false;
        this.indeterminate = false;
        this.disabled = false;
        this.align = 'start';
        this.labelPosition = 'after';
    }
    CheckboxComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Checkbox");
    };
    CheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-checkbox',
            template: __webpack_require__(/*! ./checkbox-material.html */ "./src/app/components/checkbox/checkbox-material.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./checkbox-material.scss */ "./src/app/components/checkbox/checkbox-material.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "./src/app/components/colorpicker/colorpicker-material.html":
/*!******************************************************************!*\
  !*** ./src/app/components/colorpicker/colorpicker-material.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\n   <div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n      <mat-card>\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h3>{{'Color Picker'|translate}}</h3>\n               </div>\n               <span fxFlex></span>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content custom-height\">\n            <input [(colorPicker)]=\"color\" [style.background]=\"color\" [value]=\"color\" />\n         </div>\n      </mat-card>\n   </div>\n   <div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n      <mat-card>\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h3>{{'Color Picker'|translate}}</h3>\n               </div>\n               <span fxFlex></span>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content custom-height\">\n            <input [(colorPicker)]=\"color2\" [style.background]=\"color2\" [value]=\"color2\" />\n         </div>\n      </mat-card>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/components/colorpicker/colorpicker-material.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/colorpicker/colorpicker-material.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-height {\n  height: 400px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL2NvbXBvbmVudHMvY29sb3JwaWNrZXIvY29sb3JwaWNrZXItbWF0ZXJpYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29sb3JwaWNrZXIvY29sb3JwaWNrZXItbWF0ZXJpYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20taGVpZ2h0e1xuICAgIGhlaWdodDogNDAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/colorpicker/colorpicker.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/colorpicker/colorpicker.component.ts ***!
  \*****************************************************************/
/*! exports provided: ColorpickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorpickerComponent", function() { return ColorpickerComponent; });
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




var ColorpickerComponent = /** @class */ (function () {
    function ColorpickerComponent(pageTitleService, translate) {
        this.pageTitleService = pageTitleService;
        this.translate = translate;
        this.color = "#127bdc";
        this.color2 = "#e53935";
    }
    ColorpickerComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Color Picker");
    };
    ColorpickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-color-picker',
            template: __webpack_require__(/*! ./colorpicker-material.html */ "./src/app/components/colorpicker/colorpicker-material.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./colorpicker-material.scss */ "./src/app/components/colorpicker/colorpicker-material.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], ColorpickerComponent);
    return ColorpickerComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _components_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components.routing */ "./src/app/components/components.routing.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/components/buttons/buttons.component.ts");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "./src/app/components/checkbox/checkbox.component.ts");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cards/cards.component */ "./src/app/components/cards/cards.component.ts");
/* harmony import */ var _colorpicker_colorpicker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./colorpicker/colorpicker.component */ "./src/app/components/colorpicker/colorpicker.component.ts");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/components/datepicker/datepicker.component.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/components/dialog/dialog.component.ts");
/* harmony import */ var _grid_list_gridlist_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./grid-list/gridlist.component */ "./src/app/components/grid-list/gridlist.component.ts");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./input/input.component */ "./src/app/components/input/input.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/components/progress/progress.component.ts");
/* harmony import */ var _radio_radio_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./radio/radio.component */ "./src/app/components/radio/radio.component.ts");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./select/select.component */ "./src/app/components/select/select.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/components/slider/slider.component.ts");
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./snackbar/snackbar.component */ "./src/app/components/snackbar/snackbar.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/components/tabs/tabs.component.ts");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "./src/app/components/tooltip/tooltip.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_9__["ButtonsComponent"],
                _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_10__["CheckboxComponent"],
                _cards_cards_component__WEBPACK_IMPORTED_MODULE_11__["CardsComponent"],
                _colorpicker_colorpicker_component__WEBPACK_IMPORTED_MODULE_12__["ColorpickerComponent"],
                _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_13__["DatepickerComponent"],
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__["DialogOverviewComponent"],
                _input_input_component__WEBPACK_IMPORTED_MODULE_16__["InputComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_17__["ListOverviewComponent"],
                _select_select_component__WEBPACK_IMPORTED_MODULE_21__["SelectComponent"],
                _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_25__["TooltipOverviewComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_26__["ToolbarComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_24__["TabsComponent"],
                _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_23__["SnackbarOverviewComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_24__["TabsComponent"],
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_22__["SliderOverviewComponent"],
                _radio_radio_component__WEBPACK_IMPORTED_MODULE_20__["RadioComponent"],
                _progress_progress_component__WEBPACK_IMPORTED_MODULE_19__["ProgressComponent"],
                _grid_list_gridlist_component__WEBPACK_IMPORTED_MODULE_15__["GridListComponent"],
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__["DemoDialog"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_18__["MenuOverviewComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_components_routing__WEBPACK_IMPORTED_MODULE_8__["ComponentsRoutes"]),
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_7__["ColorPickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]
            ],
            entryComponents: [
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__["DemoDialog"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/components.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/components/components.routing.ts ***!
  \**************************************************/
/*! exports provided: ComponentsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsRoutes", function() { return ComponentsRoutes; });
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/components/buttons/buttons.component.ts");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox/checkbox.component */ "./src/app/components/checkbox/checkbox.component.ts");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards/cards.component */ "./src/app/components/cards/cards.component.ts");
/* harmony import */ var _colorpicker_colorpicker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colorpicker/colorpicker.component */ "./src/app/components/colorpicker/colorpicker.component.ts");
/* harmony import */ var _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datepicker/datepicker.component */ "./src/app/components/datepicker/datepicker.component.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/components/dialog/dialog.component.ts");
/* harmony import */ var _grid_list_gridlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grid-list/gridlist.component */ "./src/app/components/grid-list/gridlist.component.ts");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input/input.component */ "./src/app/components/input/input.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list/list.component */ "./src/app/components/list/list.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/components/progress/progress.component.ts");
/* harmony import */ var _radio_radio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./radio/radio.component */ "./src/app/components/radio/radio.component.ts");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./select/select.component */ "./src/app/components/select/select.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/components/slider/slider.component.ts");
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./snackbar/snackbar.component */ "./src/app/components/snackbar/snackbar.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/components/tabs/tabs.component.ts");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "./src/app/components/tooltip/tooltip.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");


















var ComponentsRoutes = [
    {
        path: '',
        redirectTo: 'buttons',
        pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'buttons',
                component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_0__["ButtonsComponent"]
            },
            {
                path: 'checkbox',
                component: _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_1__["CheckboxComponent"]
            },
            {
                path: 'cards',
                component: _cards_cards_component__WEBPACK_IMPORTED_MODULE_2__["CardsComponent"]
            },
            {
                path: 'colorpicker',
                component: _colorpicker_colorpicker_component__WEBPACK_IMPORTED_MODULE_3__["ColorpickerComponent"]
            },
            {
                path: 'datepicker',
                component: _datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_4__["DatepickerComponent"]
            },
            {
                path: 'dialog',
                component: _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogOverviewComponent"]
            },
            {
                path: 'grid',
                component: _grid_list_gridlist_component__WEBPACK_IMPORTED_MODULE_6__["GridListComponent"]
            },
            {
                path: 'input',
                component: _input_input_component__WEBPACK_IMPORTED_MODULE_7__["InputComponent"]
            },
            {
                path: 'list',
                component: _list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListOverviewComponent"]
            },
            {
                path: 'menu',
                component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuOverviewComponent"]
            },
            {
                path: 'progress',
                component: _progress_progress_component__WEBPACK_IMPORTED_MODULE_10__["ProgressComponent"]
            },
            {
                path: 'radio',
                component: _radio_radio_component__WEBPACK_IMPORTED_MODULE_11__["RadioComponent"]
            },
            {
                path: 'select',
                component: _select_select_component__WEBPACK_IMPORTED_MODULE_12__["SelectComponent"]
            },
            {
                path: 'slider',
                component: _slider_slider_component__WEBPACK_IMPORTED_MODULE_13__["SliderOverviewComponent"]
            },
            {
                path: 'snackbar',
                component: _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_14__["SnackbarOverviewComponent"]
            },
            {
                path: 'tabs',
                component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_15__["TabsComponent"]
            },
            {
                path: 'toolbar',
                component: _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_17__["ToolbarComponent"]
            },
            {
                path: 'tooltip',
                component: _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_16__["TooltipOverviewComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/components/datepicker/datepicker-material.html":
/*!****************************************************************!*\
  !*** ./src/app/components/datepicker/datepicker-material.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\n   <div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n      <mat-card>\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h3>{{'Date Picker'|translate}}</h3>\n               </div>\n               <span fxFlex></span>  \n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content custom-height\">\n            <mat-form-field>\n               <input matInput [matDatepicker]=\"myDatepicker\" placeholder=\"Choose a date\">\n               <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n               <mat-datepicker #myDatepicker></mat-datepicker>\n            </mat-form-field>\n         </div>\n      </mat-card>\n   </div>\n   <div fxFlex.gt-sm=\"50\" fxFlex=\"100\">\n      <mat-card>\n         <div class=\"gene-card-title\">\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n               <div fxLayout=\"column\">\n                  <h3>{{'Date Picker'|translate}}</h3>\n               </div>\n               <span fxFlex></span>\n            </div>\n            <mat-divider></mat-divider>\n         </div>\n         <div class=\"gene-card-content custom-height\">\n            <mat-form-field>\n               <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose a date\">\n               <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n               <mat-datepicker #picker2></mat-datepicker>\n            </mat-form-field>\n         </div>\n      </mat-card>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/components/datepicker/datepicker-material.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/datepicker/datepicker-material.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-height {\n  height: 400px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLW1hdGVyaWFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1tYXRlcmlhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1oZWlnaHR7XG4gICBoZWlnaHQ6IDQwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/datepicker/datepicker.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/datepicker/datepicker.component.ts ***!
  \***************************************************************/
/*! exports provided: DatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function() { return DatepickerComponent; });
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




var DatepickerComponent = /** @class */ (function () {
    function DatepickerComponent(pageTitleService, translate) {
        this.pageTitleService = pageTitleService;
        this.translate = translate;
    }
    DatepickerComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Date Picker");
    };
    DatepickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-date-picker',
            template: __webpack_require__(/*! ./datepicker-material.html */ "./src/app/components/datepicker/datepicker-material.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./datepicker-material.scss */ "./src/app/components/datepicker/datepicker-material.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], DatepickerComponent);
    return DatepickerComponent;
}());



/***/ }),

/***/ "./src/app/components/dialog/dialog-material.html":
/*!********************************************************!*\
  !*** ./src/app/components/dialog/dialog-material.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n   <div class=\"gene-card-title\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n         <div fxLayout=\"column\">\n            <h3>{{'Dialog'|translate}}</h3>\n         </div>\n         <span fxFlex></span>\n      </div>\n      <mat-divider></mat-divider>\n   </div>\n   <div class=\"gene-card-content\">\n      <p class=\"mrgn-b-lg\">MatDialog is a service, which opens dialogs components in the view.</p>\n      <div>\n         <button mat-raised-button type=\"button\" (click)=\"openDialog()\" color=\"primary\">Open Dialog</button>\n      </div>\n      <p *ngIf=\"result\" class=\"primary-text\">You chose: {{ result }}</p>\n   </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/dialog/dialog-material.scss":
/*!********************************************************!*\
  !*** ./src/app/components/dialog/dialog-material.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy1tYXRlcmlhbC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dialog/dialog.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/dialog/dialog.component.ts ***!
  \*******************************************************/
/*! exports provided: DialogOverviewComponent, DemoDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewComponent", function() { return DialogOverviewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoDialog", function() { return DemoDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
/* harmony import */ var _core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/route-animation/route.animation */ "./src/app/core/route-animation/route.animation.ts");
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





var DialogOverviewComponent = /** @class */ (function () {
    function DialogOverviewComponent(dialog, pageTitleService, translate) {
        this.dialog = dialog;
        this.pageTitleService = pageTitleService;
        this.translate = translate;
        this.dialogHTML = "\n      <button mat-raised-button type=\"button\" (click)=\"openDialog()\" color=\"primary\">Open Dialog</button>\n      <p *ngIf=\"result\">You chose: {{ result }}</p>";
    }
    DialogOverviewComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Dialog");
    };
    /**
      * OpenDialog method is used to open a dialog.
      */
    DialogOverviewComponent.prototype.openDialog = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(DemoDialog, {
            disableClose: false
        });
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.result = result;
            _this.dialogRef = null;
        });
    };
    DialogOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-dialogs',
            template: __webpack_require__(/*! ./dialog-material.html */ "./src/app/components/dialog/dialog-material.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./dialog-material.scss */ "./src/app/components/dialog/dialog-material.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], DialogOverviewComponent);
    return DialogOverviewComponent;
}());

var DemoDialog = /** @class */ (function () {
    function DemoDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DemoDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-demo-dialog',
            template: "\n     \t<h1>Would you like to order pizza?</h1>\n\n     \t<mat-dialog-actions align=\"end\">\n   \t \t<button mat-button (click)=\"dialogRef.close('No!')\">No</button>\n   \t \t<button mat-button color=\"primary\" (click)=\"dialogRef.close('Yes!')\">Yes</button>\n     \t</mat-dialog-actions>"
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], DemoDialog);
    return DemoDialog;
}());



/***/ }),

/***/ "./src/app/components/grid-list/gridlist-material.html":
/*!*************************************************************!*\
  !*** ./src/app/components/grid-list/gridlist-material.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n   <div class=\"gene-card-title\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n         <div fxLayout=\"column\">\n            <h3>{{'Grid List'|translate}}</h3>\n         </div>\n         <span fxFlex></span>\n      </div>\n      <mat-divider></mat-divider>\n   </div>\n   <div class=\"gene-card-content\">\n      <p><code>mat-grid-list</code> is an alternative list view that arranges cells into grid-based layout.</p>\n      <mat-tab-group>\n         <mat-tab>\n            <ng-template mat-tab-label>Fixed height</ng-template>\n            <mat-card-content class=\"mrgn-b-none\">\n               <mat-grid-list [cols]=\"fixedCols\" [rowHeight]=\"fixedRowHeight\">\n               <mat-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" [style.background]=\"tile.color\">\n               {{tile.text}}\n               </mat-grid-tile>\n               </mat-grid-list>\n            </mat-card-content>\n         </mat-tab>\n         <mat-tab>\n            <ng-template mat-tab-label>Ratio height</ng-template>\n            <mat-card-content class=\"mrgn-b-none\">\n               <mat-grid-list cols=\"2\" [rowHeight]=\"ratio\" gutterSize=\"4px\">\n                  <mat-grid-tile *ngFor=\"let tile of tiles\" [style.background]=\"'#1565c0'\">\n                  {{tile.text}}\n                  </mat-grid-tile>\n               </mat-grid-list>\n            </mat-card-content>\n         </mat-tab>\n      </mat-tab-group>\n   </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/grid-list/gridlist-material.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/grid-list/gridlist-material.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-grid-tile .mat-figure {\n  color: #fff; }\n\n.mat-tab-label-container {\n  margin-bottom: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL2NvbXBvbmVudHMvZ3JpZC1saXN0L2dyaWRsaXN0LW1hdGVyaWFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JpZC1saXN0L2dyaWRsaXN0LW1hdGVyaWFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWdyaWQtdGlsZSAubWF0LWZpZ3VyZSB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5tYXQtdGFiLWxhYmVsLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/grid-list/gridlist.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/grid-list/gridlist.component.ts ***!
  \************************************************************/
/*! exports provided: GridListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridListComponent", function() { return GridListComponent; });
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




var GridListComponent = /** @class */ (function () {
    function GridListComponent(pageTitleService, translate) {
        this.pageTitleService = pageTitleService;
        this.translate = translate;
        this.fixedCols = 4;
        this.fixedRowHeight = 200;
        this.ratio = '4:1';
        this.tiles = [{
                text: 'One',
                cols: 3,
                rows: 1,
                color: '#1565c0'
            }, {
                text: 'Two',
                cols: 1,
                rows: 2,
                color: '#e53935'
            }, {
                text: 'Three',
                cols: 1,
                rows: 1,
                color: '#0097a7'
            }, {
                text: 'Four',
                cols: 2,
                rows: 1,
                color: '#4caf50'
            }];
    }
    GridListComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Grid");
    };
    GridListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-grid',
            template: __webpack_require__(/*! ./gridlist-material.html */ "./src/app/components/grid-list/gridlist-material.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./gridlist-material.scss */ "./src/app/components/grid-list/gridlist-material.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], GridListComponent);
    return GridListComponent;
}());



/***/ }),

/***/ "./src/app/components/input/input-material.html":
/*!******************************************************!*\
  !*** ./src/app/components/input/input-material.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n   <div class=\"gene-card-title\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n         <div fxLayout=\"column\">\n            <h3>{{'Input'|translate}}</h3>\n         </div>\n         <span fxFlex></span>\n      </div>\n      <mat-divider></mat-divider>\n   </div>\n   <div class=\"gene-card-content\">\n      <p>Inputs are the basic input component of Material 2</p>\n      <form>\n         <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n            <div fxFlex.gt-sm=\"49\" fxFlex.gt-xs=\"49\" fxFlex=\"100\" fxFlex.gt-md=\"49\">\n               <mat-form-field class=\"full-wid\">\n                  <input matInput placeholder=\"Company (disabled)\" disabled value=\"Google\">\n               </mat-form-field>\n            </div>\n            <div fxFlex.gt-sm=\"49\" fxFlex.gt-xs=\"49\" fxFlex=\"100\" fxFlex.gt-md=\"49\">\n               <mat-form-field class=\"full-wid\">\n                  <input matInput placeholder=\"First name\">\n               </mat-form-field>\n            </div>\n         </div>\n         <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n            <div fxFlex.gt-sm=\"49\" fxFlex.gt-xs=\"49\" fxFlex=\"100\" fxFlex.gt-md=\"49\">\n               <mat-form-field class=\"full-wid\">\n                  <input matInput placeholder=\"Long Last Name That Will Be Truncated\">\n               </mat-form-field>\n            </div>\n            <div fxFlex.gt-sm=\"49\" fxFlex.gt-xs=\"49\" fxFlex=\"100\" fxFlex.gt-md=\"49\">\n               <mat-form-field class=\"full-wid\">\n                  <textarea matInput placeholder=\"Address\">1600 Amphitheatre Pkwy</textarea>\n               </mat-form-field>\n            </div>\n         </div>\n         <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n            <div fxFlex.gt-sm=\"49\" fxFlex.gt-xs=\"49\" fxFlex=\"100\" fxFlex.gt-md=\"49\">\n               <mat-form-field class=\"full-wid\">\n                  <textarea matInput placeholder=\"Address 2\"></textarea>\n               </mat-form-field>\n            </div>\n            <div fxFlex.gt-sm=\"49\" fxFlex.gt-xs=\"49\" fxFlex=\"100\" fxFlex.gt-md=\"49\">\n               <mat-form-field class=\"full-wid\">\n                  <input matInput placeholder=\"City\">\n               </mat-form-field>\n            </div>\n         </div>\n         <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\n            <div fxFlex.gt-sm=\"49\" fxFlex.gt-xs=\"49\" fxFlex=\"100\" fxFlex.gt-md=\"49\">\n               <mat-form-field class=\"full-wid\">\n                  <input matInput placeholder=\"State\">\n               </mat-form-field>\n            </div>\n            <div fxFlex.gt-sm=\"49\" fxFlex.gt-xs=\"49\" fxFlex=\"100\" fxFlex.gt-md=\"49\">\n               <mat-form-field class=\"full-wid\">\n                  <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\">\n                  <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n               </mat-form-field>\n            </div>\n         </div>\n      </form>\n   </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/input/input-material.scss":
/*!******************************************************!*\
  !*** ./src/app/components/input/input-material.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtbWF0ZXJpYWwuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/input/input.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/input/input.component.ts ***!
  \*****************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
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




var InputComponent = /** @class */ (function () {
    function InputComponent(pageTitleService, translate) {
        this.pageTitleService = pageTitleService;
        this.translate = translate;
    }
    InputComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Input");
    };
    InputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-input',
            template: __webpack_require__(/*! ./input-material.html */ "./src/app/components/input/input-material.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./input-material.scss */ "./src/app/components/input/input-material.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/components/list/list-material.html":
/*!****************************************************!*\
  !*** ./src/app/components/list/list-material.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n   <div class=\"gene-card-title\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n         <div fxLayout=\"column\">\n            <h3>{{'List'|translate}}</h3>\n         </div>\n         <span fxFlex></span>\n      </div>\n      <mat-divider></mat-divider>\n   </div>\n   <div class=\"gene-card-content\">\n      <p><code>mat-list</code> is a container component that wraps and formats a series of line items</p>\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h5 class=\"mrgn-b-md\">{{'Basic List'|translate}}</h5>\n         <mat-list>\n            <h3 mat-subheader>Items</h3>\n            <mat-list-item *ngFor=\"let item of items\">\n               {{item}}\n            </mat-list-item>\n         </mat-list>\n      </div>\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h5 class=\"mrgn-b-md\">{{'Two-Line List with Thumb Images'|translate}}</h5>\n         <mat-list>\n            <mat-list-item *ngFor=\"let message of messages\">\n               <img mat-list-avatar [src]=\"message.image\" alt=\"Image of {{message.from}}\">\n               <h3 mat-line>{{message.from}}</h3>\n               <p mat-line>\n                  <span>{{message.subject}} -- </span>\n                  <span class=\"subline\">{{message.message}}</span>\n               </p>\n            </mat-list-item>\n         </mat-list>\n      </div>\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h5 class=\"mrgn-b-md\">{{'Three-Line List with Thumb Images'|translate}}</h5>\n         <mat-list>\n            <mat-list-item *ngFor=\"let message of messages\">\n               <img mat-list-avatar [src]=\"message.image\" alt=\"Image of {{message.from}}\">\n               <h3 mat-line>{{message.from}}</h3>\n               <p mat-line>{{message.subject}} -- </p>\n               <p mat-line class=\"subline\">{{message.message}}</p>\n            </mat-list-item>\n         </mat-list>\n      </div>\n      <div class=\"box-inset pad-all-md\">\n         <h5 class=\"mrgn-b-md\">{{'Three-Line List'|translate}}</h5>\n         <mat-list *ngFor=\"let message of messages\">\n            <mat-list-item>\n               <h3 mat-line>{{message.from}}</h3>\n               <p mat-line>{{message.subject}}</p>\n               <p mat-line class=\"subline\">{{message.message}}</p>\n            </mat-list-item>\n         </mat-list>\n      </div>\n   </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/list/list-material.scss":
/*!****************************************************!*\
  !*** ./src/app/components/list/list-material.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlzdC9saXN0LW1hdGVyaWFsLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/list/list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: ListOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOverviewComponent", function() { return ListOverviewComponent; });
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




var ListOverviewComponent = /** @class */ (function () {
    function ListOverviewComponent(pageTitleService, translate) {
        this.pageTitleService = pageTitleService;
        this.translate = translate;
        this.items = ['Item 1', 'Item 2', 'Item 3'];
        this.messages = [{
                from: 'Susan',
                subject: 'Sturday Plan',
                message: 'As we discussed yesterday.Are you ready for going?',
                image: 'assets/img/user-9.jpg'
            }, {
                from: 'Rose',
                subject: 'Sure',
                message: 'Yes,I packed my bag.I am very Excited.',
                image: 'assets/img/user-8.jpg'
            }, {
                from: 'Katy',
                subject: 'Fun Day',
                message: 'Lets do some exciting things on sturday.Come on!',
                image: 'assets/img/user-11.jpg'
            }];
    }
    ListOverviewComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("List");
    };
    ListOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-list',
            template: __webpack_require__(/*! ./list-material.html */ "./src/app/components/list/list-material.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./list-material.scss */ "./src/app/components/list/list-material.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], ListOverviewComponent);
    return ListOverviewComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu-material.html":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu-material.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n   <div class=\"gene-card-title\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n         <div fxLayout=\"column\">\n            <h3>{{'Menus (dropdowns)'|translate}}</h3>\n         </div>\n         <span fxFlex></span>\n      </div>\n      <mat-divider></mat-divider>\n   </div>\n   <div class=\"gene-card-content\">\n      <mat-card-subtitle><code>mat-menu</code> is a list of options that displays when triggered.</mat-card-subtitle>\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h5 class=\"mrgn-b-md\">{{'Menu without Icons'|translate}}</h5>\n         <mat-toolbar>\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Open basic menu\">\n               <mat-icon>more_vert</mat-icon>\n            </button>\n         </mat-toolbar>\n         <mat-menu #menu=\"matMenu\">\n            <button mat-menu-item *ngFor=\"let item of items\">\n            {{ item.text }}\n            </button>\n         </mat-menu>\n      </div>\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h5 class=\"mrgn-b-md\">{{'Menu with Icons'|translate}}</h5>\n         <mat-toolbar>\n            <button mat-icon-button [matMenuTriggerFor]=\"menuicon\" aria-label=\"Open icon menu\">\n               <mat-icon>grade</mat-icon>\n            </button>\n         </mat-toolbar>\n         <mat-menu #menuicon=\"matMenu\">\n            <button mat-menu-item *ngFor=\"let item of iconItems\" [disabled]=\"item.disabled\">\n            <mat-icon>{{ item.icon }}</mat-icon>\n            {{ item.text }}\n            </button>\n         </mat-menu>\n      </div>\n      <div class=\"box-inset pad-all-md\">\n         <h5 class=\"mrgn-b-md\">{{'Clicking these will navigate'|translate}}</h5>\n         <mat-toolbar>\n            <button mat-icon-button [matMenuTriggerFor]=\"anchorMenu\" aria-label=\"Open anchor menu\">\n               <mat-icon>more_vert</mat-icon>\n            </button>\n         </mat-toolbar>\n         <mat-menu #anchorMenu=\"matMenu\">\n            <a mat-menu-item *ngFor=\"let item of items\" href=\"javascript:;\" [disabled]=\"item.disabled\">\n            {{ item.text }}\n            </a>\n         </mat-menu>\n      </div>\n   </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/menu/menu-material.scss":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu-material.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LW1hdGVyaWFsLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuOverviewComponent", function() { return MenuOverviewComponent; });
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




var MenuOverviewComponent = /** @class */ (function () {
    function MenuOverviewComponent(pageTitleService, translate) {
        this.pageTitleService = pageTitleService;
        this.translate = translate;
        this.items = [{
                text: 'Refresh'
            }, {
                text: 'Settings'
            }, {
                text: 'Help',
                disabled: true
            }, {
                text: 'Sign Out'
            }];
        this.iconItems = [{
                text: 'Redial',
                icon: 'dialpad'
            }, {
                text: 'Check voicemail',
                icon: 'voicemail',
                disabled: true
            }, {
                text: 'Disable alerts',
                icon: 'notifications_off'
            }];
    }
    MenuOverviewComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Menu");
    };
    MenuOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-menu',
            template: __webpack_require__(/*! ./menu-material.html */ "./src/app/components/menu/menu-material.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./menu-material.scss */ "./src/app/components/menu/menu-material.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], MenuOverviewComponent);
    return MenuOverviewComponent;
}());



/***/ }),

/***/ "./src/app/components/progress/progress-material.html":
/*!************************************************************!*\
  !*** ./src/app/components/progress/progress-material.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n   <div class=\"gene-card-title\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n         <div fxLayout=\"column\">\n            <h3>{{'Progress Elements'|translate}}</h3>\n         </div>\n         <span fxFlex></span>\n      </div>\n      <mat-divider></mat-divider>\n   </div>\n   <div class=\"gene-card-content\">\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h2 class=\"mrgn-b-md\">{{'Progress circle'|translate}}</h2>\n         <p>mat-progress-spinner is a component for indicating progress and activity, matching the spec of Material Design Progress & Activity.</p>\n         <h5>{{'Determinate'|translate}}</h5>\n         <div class=\"mrgn-b-lg\">\n            <div fxLayout=\"row\">\n               <mat-progress-spinner mode=\"determinate\" [value]=\"value\" class=\"primary\"></mat-progress-spinner>\n               <mat-progress-spinner mode=\"determinate\" [value]=\"value\" color=\"accent\"></mat-progress-spinner>\n               <mat-progress-spinner mode=\"determinate\" [value]=\"value\" color=\"warn\"></mat-progress-spinner>\n            </div>\n         </div>\n         <button mat-raised-button (click)=\"step(10)\">Increase</button>\n         <button class=\"mrgn-all-xs\" mat-raised-button (click)=\"step(-10)\">Decrease</button>\n         <div class=\"mrgn-b-lg\"></div>\n         <h5>{{'Indeterminate'|translate}}</h5>\n         <div>\n            <div fxLayout=\"row\">\n               <mat-progress-spinner mode=\"indeterminate\" class=\"primary\"></mat-progress-spinner>\n               <mat-progress-spinner mode=\"indeterminate\" color=\"accent\"></mat-progress-spinner>\n               <mat-progress-spinner mode=\"indeterminate\" color=\"warn\"></mat-progress-spinner>\n            </div>\n         </div>\n      </div>\n      <div class=\"box-inset pad-all-md\">\n         <h2 class=\"mrgn-b-md\">{{'Progress bar'|translate}}</h2>\n         <p class=\"mrgn-b-lg\">mat-progress-bar is a component for indicating progress and activity, matching the spec of Material Design Progress & Activity</p>\n         <h5>{{'Determinate'|translate}}</h5>\n         <mat-progress-bar mode=\"determinate\" [value]=\"determinateValue\" color=\"primary\" class=\"mrgn-b-md\">\n         </mat-progress-bar>\n         <button class=\"mrgn-all-xs\" mat-raised-button (click)=\"stepDeterminateVal(10)\">Increase</button>\n         <button class=\"mrgn-all-xs\" mat-raised-button (click)=\"stepDeterminateVal(-10)\">Decrease</button>\n         <div class=\"mrgn-b-lg\"></div>\n         <h5>{{'Buffer'|translate}}</h5>\n         <mat-progress-bar [value]=\"bufferValue\" [bufferValue]=\"bufferBufferValue\" mode=\"buffer\" color=\"warn\" class=\"mrgn-b-md\">\n         </mat-progress-bar>\n         <div fxLayout=\"row wrap\" class=\"mrgn-b-lg\">\n            <button class=\"mrgn-all-xs\" mat-raised-button (click)=\"stepBufferVal(10)\">Increase</button>\n            <button class=\"mrgn-all-xs\" mat-raised-button (click)=\"stepBufferVal(-10)\">Decrease</button>\n            <span fxFlex></span>\n            <button class=\"mrgn-all-xs\" mat-raised-button (click)=\"stepBufferBufferVal(10)\">Increase</button>\n            <button class=\"mrgn-all-xs\" mat-raised-button (click)=\"stepBufferBufferVal(-10)\">Decrease</button>\n         </div>\n         <h5>{{'Indeterminate'|translate}}</h5>\n         <mat-progress-bar mode=\"indeterminate\" class=\"mrgn-b-md\"></mat-progress-bar>\n         <h5>{{'Query'|translate}}</h5>\n         <mat-progress-bar mode=\"query\" class=\"mrgn-b-md\"></mat-progress-bar>\n         <h5>{{'Colors'|translate}}</h5>\n         <mat-progress-bar mode=\"indeterminate\" color=\"primary\"></mat-progress-bar>\n         <mat-progress-bar mode=\"indeterminate\" color=\"accent\"></mat-progress-bar>\n         <mat-progress-bar mode=\"indeterminate\" color=\"warn\"></mat-progress-bar>\n      </div>\n   </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/progress/progress-material.scss":
/*!************************************************************!*\
  !*** ./src/app/components/progress/progress-material.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gene-spacer {\n  flex: 1 1 auto; }\n\n@media (max-width: 599px) {\n  .mat-progress-spinner svg {\n    width: 60px !important;\n    height: 60px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL2NvbXBvbmVudHMvcHJvZ3Jlc3MvcHJvZ3Jlc3MtbWF0ZXJpYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLGNBQWMsRUFBQTs7QUFFakI7RUFDRztJQUNHLHNCQUFzQjtJQUN0Qix1QkFBdUIsRUFBQSxFQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZ3Jlc3MvcHJvZ3Jlc3MtbWF0ZXJpYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nZW5lLXNwYWNlciB7XG4gICBmbGV4OiAxIDEgYXV0bztcbn1cbkBtZWRpYShtYXgtd2lkdGg6NTk5cHgpe1xuICAgLm1hdC1wcm9ncmVzcy1zcGlubmVyIHN2Z3tcbiAgICAgIHdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/progress/progress.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/progress/progress.component.ts ***!
  \***********************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
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




var ProgressComponent = /** @class */ (function () {
    function ProgressComponent(pageTitleService, translate) {
        this.pageTitleService = pageTitleService;
        this.translate = translate;
        this.value = 40;
        this.determinateValue = 30;
        this.bufferValue = 30;
        this.bufferBufferValue = 40;
    }
    ProgressComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Progress");
    };
    /**
      * step method is used to check the step of progress circle.
      */
    ProgressComponent.prototype.step = function (val) {
        this.value += val;
    };
    /**
      * stepDeterminateVal method is used to check the step of Determinate progress-bar.
      */
    ProgressComponent.prototype.stepDeterminateVal = function (val) {
        this.determinateValue += val;
    };
    /**
      * stepBufferVal method is used to check the step of Buffer Progress.
      */
    ProgressComponent.prototype.stepBufferVal = function (val) {
        this.bufferValue += val;
    };
    /**
      * stepBufferBufferVal method is used to check the step of Buffer.
      */
    ProgressComponent.prototype.stepBufferBufferVal = function (val) {
        this.bufferBufferValue += val;
    };
    ProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-progress',
            template: __webpack_require__(/*! ./progress-material.html */ "./src/app/components/progress/progress-material.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./progress-material.scss */ "./src/app/components/progress/progress-material.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/components/radio/radio-material.html":
/*!******************************************************!*\
  !*** ./src/app/components/radio/radio-material.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n   <div class=\"gene-card-title\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n         <div fxLayout=\"column\">\n            <h3>{{'Radio Card'|translate}}</h3>\n         </div>\n         <span fxFlex></span>\n      </div>\n      <mat-divider></mat-divider>\n   </div>\n   <div class=\"gene-card-content\">\n      <p>Radio buttons allow the user to select one option from a set</p>\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h5 class=\"mrgn-b-md\">{{'Basic Example'|translate}}</h5>\n         <mat-radio-group class=\"radio-group\">\n            <mat-radio-button value=\"1\" class=\"radio-button\">Option 1</mat-radio-button>\n            <mat-radio-button value=\"2\" class=\"radio-button\">Option 2</mat-radio-button>\n         </mat-radio-group>\n      </div>\n      <div class=\"box-inset pad-all-md\">\n         <h5 class=\"mrgn-b-md\">{{'Dynamic Example'|translate}}</h5>\n         <mat-radio-group class=\"radio-group\" [(ngModel)]=\"favoriteSeason\">\n         <mat-radio-button class=\"radio-button\" *ngFor=\"let season of seasons\" [value]=\"season\">\n         {{season}}\n         </mat-radio-button>\n         </mat-radio-group>\n         <div class=\"selected-value\">Your favorite season is: {{favoriteSeason}}</div>\n      </div>\n   </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/radio/radio-material.scss":
/*!******************************************************!*\
  !*** ./src/app/components/radio/radio-material.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".radio-group {\n  display: inline-flex;\n  flex-direction: column; }\n\n.radio-button {\n  margin: 5px; }\n\n.selected-value {\n  margin: 15px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL2NvbXBvbmVudHMvcmFkaW8vcmFkaW8tbWF0ZXJpYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFvQjtFQUNwQixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JhZGlvL3JhZGlvLW1hdGVyaWFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmFkaW8tZ3JvdXAge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yYWRpby1idXR0b24ge1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG4uc2VsZWN0ZWQtdmFsdWUge1xuICAgIG1hcmdpbjogMTVweCAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/radio/radio.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/radio/radio.component.ts ***!
  \*****************************************************/
/*! exports provided: RadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioComponent", function() { return RadioComponent; });
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




var RadioComponent = /** @class */ (function () {
    function RadioComponent(pageTitleService, translate) {
        this.pageTitleService = pageTitleService;
        this.translate = translate;
        this.seasons = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn'
        ];
    }
    RadioComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Radio Buttons");
    };
    RadioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-radio',
            template: __webpack_require__(/*! ./radio-material.html */ "./src/app/components/radio/radio-material.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./radio-material.scss */ "./src/app/components/radio/radio-material.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], RadioComponent);
    return RadioComponent;
}());



/***/ }),

/***/ "./src/app/components/select/select-material.html":
/*!********************************************************!*\
  !*** ./src/app/components/select/select-material.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n   <div class=\"gene-card-title\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n         <div fxLayout=\"column\">\n            <h3>{{'Select'|translate}}</h3>\n         </div>\n         <span fxFlex></span>\n      </div>\n      <mat-divider></mat-divider>\n   </div>\n   <div class=\"gene-card-content\">\n      <p class=\"mrgn-b-lg\">Select buttons allow the user to select one option from a set</p>\n      <form>\n         <mat-form-field>\n            <mat-select placeholder=\"Favorite food\" [(ngModel)]=\"selectedValue\" name=\"food\">\n            <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n            {{food.viewValue}}\n            </mat-option>\n            </mat-select>\n         </mat-form-field>\n         <p class=\"mrgn-b-none\"> Selected value: {{selectedValue}} </p>\n      </form>\n   </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/select/select-material.scss":
/*!********************************************************!*\
  !*** ./src/app/components/select/select-material.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VsZWN0L3NlbGVjdC1tYXRlcmlhbC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/select/select.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/select/select.component.ts ***!
  \*******************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
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




var SelectComponent = /** @class */ (function () {
    function SelectComponent(pageTitleService, translate) {
        this.pageTitleService = pageTitleService;
        this.translate = translate;
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
    SelectComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Select");
    };
    SelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-select',
            template: __webpack_require__(/*! ./select-material.html */ "./src/app/components/select/select-material.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./select-material.scss */ "./src/app/components/select/select-material.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "./src/app/components/slider/slider-material.html":
/*!********************************************************!*\
  !*** ./src/app/components/slider/slider-material.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"gene-sliders-wrap\">\n   <div class=\"gene-card-title\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n         <div fxLayout=\"column\">\n            <h3>{{'Slider'|translate}}</h3>\n         </div>\n         <span fxFlex></span>\n      </div>\n      <mat-divider></mat-divider>\n   </div>\n   <div class=\"gene-card-content\">\n      <p><code>mat-slider</code> is a component that allows users to select from a range of values by moving the slider thumb</p>\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h5 class=\"mrgn-b-md\">{{'Default Slider'|translate}}</h5>\n         Label\n         <mat-slider #slidey></mat-slider>\n         {{slidey.value}}\n      </div>\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h5 class=\"mrgn-b-md\">{{'Disable Slider'|translate}}</h5>\n         Label\n         <mat-slider #slidey2 disabled></mat-slider>\n         {{slidey2.value}}\n      </div>\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h5 class=\"mrgn-b-md\">{{'Slider with set value'|translate}}</h5>\n         <mat-slider value=\"43\"></mat-slider>\n      </div>\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h5 class=\"mrgn-b-md\">{{'Slider with set tick interval'|translate}}</h5>\n         <mat-slider tick-interval=\"auto\"></mat-slider>\n         <mat-slider tick-interval=\"9\"></mat-slider>\n      </div>\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h5 class=\"mrgn-b-md\">{{'Inverted slider'|translate}}</h5>\n         <mat-slider invert value=\"50\" tick-interval=\"5\"></mat-slider>\n      </div>\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h5 class=\"mrgn-b-md\">{{'Vertical slide'|translate}}</h5>\n         <mat-slider vertical thumb-label tick-interval=\"auto\" value=\"50\"></mat-slider>\n      </div>\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h5 class=\"mrgn-b-md\">{{'Inverted vertical slider'|translate}}</h5>\n         <p>Inverted vertical slider</p>\n         <mat-slider vertical invert thumb-label tick-interval=\"auto\" value=\"50\"></mat-slider>\n      </div>\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h5 class=\"mrgn-b-md\">{{'Slider with Thumb Label'|translate}}</h5>\n         <mat-slider thumb-label></mat-slider>\n      </div>\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h5 class=\"mrgn-b-md\">{{'Slider with one-way binding'|translate}}</h5>\n         <mat-slider [value]=\"val\" step=\"40\"></mat-slider>\n         <mat-form-field>\n            <input matInput [(ngModel)]=\"val\">\n         </mat-form-field>\n      </div>\n      <div class=\"box-inset pad-all-md\">\n         <h5 class=\"mrgn-b-md\">{{'Slider with two-way binding'|translate}}</h5>\n         <mat-slider [(ngModel)]=\"demo\" step=\"40\"></mat-slider>\n         <mat-form-field>\n            <input matInput [(ngModel)]=\"demo\">\n         </mat-form-field>\n      </div>\n   </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/slider/slider-material.scss":
/*!********************************************************!*\
  !*** ./src/app/components/slider/slider-material.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/** No CSS for this example */\n.gene-sliders-wrap mat-slider {\n  width: 270px; }\n@media (max-width: 599px) {\n  .gene-sliders-wrap .mat-form-field {\n    width: 80px; }\n  .gene-sliders-wrap mat-slider {\n    width: calc(100% - 30px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci1tYXRlcmlhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUFBO0FBQ0E7RUFDRSxZQUFZLEVBQUE7QUFFZDtFQUNHO0lBRU0sV0FBVyxFQUFBO0VBRmpCO0lBS00sd0JBQXdCLEVBQUEsRUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NsaWRlci9zbGlkZXItbWF0ZXJpYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBObyBDU1MgZm9yIHRoaXMgZXhhbXBsZSAqL1xuLmdlbmUtc2xpZGVycy13cmFwIG1hdC1zbGlkZXIge1xuICB3aWR0aDogMjcwcHg7XG59XG5AbWVkaWEobWF4LXdpZHRoOjU5OXB4KXtcbiAgIC5nZW5lLXNsaWRlcnMtd3JhcHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZHtcbiAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgfSBcbiAgICAgIG1hdC1zbGlkZXIge1xuICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpOyAgXG4gICAgICB9XG4gICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/slider/slider.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/slider/slider.component.ts ***!
  \*******************************************************/
/*! exports provided: SliderOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderOverviewComponent", function() { return SliderOverviewComponent; });
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




var SliderOverviewComponent = /** @class */ (function () {
    function SliderOverviewComponent(pageTitleService, translate) {
        this.pageTitleService = pageTitleService;
        this.translate = translate;
        this.val = 50;
        this.min = 0;
        this.max = 100;
    }
    SliderOverviewComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Slider");
    };
    SliderOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-slider',
            template: __webpack_require__(/*! ./slider-material.html */ "./src/app/components/slider/slider-material.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./slider-material.scss */ "./src/app/components/slider/slider-material.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], SliderOverviewComponent);
    return SliderOverviewComponent;
}());



/***/ }),

/***/ "./src/app/components/snackbar/snackbar-material.html":
/*!************************************************************!*\
  !*** ./src/app/components/snackbar/snackbar-material.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n   <div class=\"gene-card-title\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n         <div fxLayout=\"column\">\n            <h3>{{'Snack Bar'|translate}}</h3>\n         </div>\n         <span fxFlex></span>\n      </div>\n      <mat-divider></mat-divider>\n   </div>\n   <div class=\"gene-card-content\">\n      <p class=\"mrgn-b-lg\"><code>MatSnackBar</code> is a service, which opens snack bar notifications in the view.</p>\n      <button mat-raised-button (click)=\"openSnackBar()\">Trigger Snackbar</button>\n   </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/snackbar/snackbar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/snackbar/snackbar.component.ts ***!
  \***********************************************************/
/*! exports provided: SnackbarOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarOverviewComponent", function() { return SnackbarOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/page-title/page-title.service */ "./src/app/core/page-title/page-title.service.ts");
/* harmony import */ var _core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/route-animation/route.animation */ "./src/app/core/route-animation/route.animation.ts");
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





var SnackbarOverviewComponent = /** @class */ (function () {
    function SnackbarOverviewComponent(snackBar, pageTitleService, translate) {
        this.snackBar = snackBar;
        this.pageTitleService = pageTitleService;
        this.translate = translate;
    }
    SnackbarOverviewComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Snackbar");
    };
    /**
      * openSnackBar method is used to open a snack bar.
      */
    SnackbarOverviewComponent.prototype.openSnackBar = function () {
        this.snackBar.open("Showing Snack", "Close");
    };
    SnackbarOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // moduleId: module.id,
            selector: 'snackbar-material',
            template: __webpack_require__(/*! ./snackbar-material.html */ "./src/app/components/snackbar/snackbar-material.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_3__["fadeInAnimation"]],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], SnackbarOverviewComponent);
    return SnackbarOverviewComponent;
}());



/***/ }),

/***/ "./src/app/components/tabs/tabs-material.html":
/*!****************************************************!*\
  !*** ./src/app/components/tabs/tabs-material.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n   <div class=\"gene-card-title\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n         <div fxLayout=\"column\">\n            <h3>{{'Tabs'|translate}}</h3>\n         </div>\n         <span fxFlex></span>\n      </div>\n      <mat-divider></mat-divider>\n   </div>\n   <div class=\"gene-card-content\">\n      <p>Radio buttons allow the user to select one option from a set</p>\n      <mat-tab-group>\n         <mat-tab label=\"Tab 1\">\n            <div class=\"pad-t-md pad-b-md\">\n               <p>Consectetur adipisicing elit. Dolore atque dolorem nemo ipsa est vero aspernatur sed consectetur officiis, minus error ut exercitationem, sint eaque quidem labore beatae nulla, explicabo esse veritatis! Qui, corrupti vel! Voluptatibus reprehenderit veritatis alias necessitatibus ipsa nesciunt facere, possimus, aliquid deserunt sed eveniet non debitis repudiandae laboriosam quae, placeat cumque esse porro iste! Distinctio tenetur eius, iusto similique unde. Ea debitis vero, perferendis reiciendis ducimus facilis culpa nisi modi temporibus repudiandae placeat veritatis minima iusto sint voluptatibus ratione provident quam autem excepturi! In animi totam nulla aliquam fugiat soluta omnis quia autem iusto modi quisquam unde, perferendis ducimus sint, assumenda nam cumque ex magni fugit? Impedit officia error expedita, voluptatibus nam doloremque omnis perspiciatis possimus alias autem, porro commodi minima deserunt natus dolor quasi sequi fugit perferendis fuga, ab praesentium provident vitae? Eaque possimus animi totam, natus dolorem sit atque dolore sapiente similique sunt at maxime incidunt fuga delectus, consectetur, expedita cum reprehenderit non cupiditate aliquid repellendus facilis numquam explicabo iste. Mollitia iure error illo animi molestiae minima delectus incidunt, quia saepe molestias ratione quibusdam perferendis cumque repellat in porro eveniet et perspiciatis laudantium. Inventore fugiat dicta ea, velit suscipit error harum quibusdam ratione? Aspernatur ut fugiat, distinctio ducimus alias atque illum praesentium molestias ea ad facere provident possimus sunt soluta quibusdam at impedit in nisi temporibus sapiente dolor, repellat sed.</p>\n            </div>\n         </mat-tab>\n         <mat-tab label=\"Tab 2\">\n            <div class=\"pad-t-md pad-b-md\">\n               <p>corporis eum, cumque architecto adipisci nesciunt reprehenderit eveniet repellat dolore iste at quisquam facere deserunt? Optio cumque placeat explicabo totam ad minus modi. Illum accusamus, impedit inventore cum quos enim, ab atque veritatis voluptatem excepturi repudiandae commodi non possimus repellat cupiditate fugit minus, modi quod? Voluptates mollitia officia nesciunt earum autem nostrum debitis, eaque, iusto vitae impedit possimus atque asperiores quidem reiciendis! Optio aut perferendis repudiandae, at facilis distinctio quia aspernatur reprehenderit? Harum, optio, corrupti. Commodi incidunt quibusdam vitae placeat officia! Aut doloremque quasi, eos consequatur possimus. Ut exercitationem repellendus temporibus eveniet laboriosam provident accusamus aspernatur. Officiis totam corrupti dolorum ab, debitis nihil explicabo! Animi, numquam nostrum adipisci quae dicta reprehenderit, sunt corporis id laborum aliquid fugiat asperiores error nihil harum ipsam assumenda, laudantium veniam itaque minus voluptates labore laboriosam quod? Nostrum alias nemo, explicabo voluptates asperiores, est aliquid magnam. Officiis ex accusamus, blanditiis nihil fugiat quia hic maxime natus nulla magnam accusantium libero enim, veniam ea repellat quis, fugit sit. Tenetur harum assumenda a. Laudantium soluta et dolorem quidem, sunt explicabo vel, recusandae dignissimos maxime natus aliquam eveniet labore ut. Quaerat error voluptas natus, sequi provident, asperiores. Sint, temporibus, hic! Deleniti molestias nesciunt maxime. Praesentium cupiditate consectetur ullam commodi quas labore culpa voluptate, laudantium dolor veniam sunt unde excepturi. </p>\n            </div>\n         </mat-tab>\n      </mat-tab-group>\n   </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/tabs/tabs-material.scss":
/*!****************************************************!*\
  !*** ./src/app/components/tabs/tabs-material.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".prtm-radio-group {\n  display: inline-flex;\n  flex-direction: column; }\n\n.prtm-radio-button {\n  margin: 5px; }\n\n.prtm-selected-value {\n  margin: 15px 0; }\n\n.mat-tab-label-container {\n  margin-bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL2NvbXBvbmVudHMvdGFicy90YWJzLW1hdGVyaWFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjtFQUNHLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YWJzL3RhYnMtbWF0ZXJpYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcnRtLXJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wcnRtLXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4ucHJ0bS1zZWxlY3RlZC12YWx1ZSB7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuLm1hdC10YWItbGFiZWwtY29udGFpbmVye1xuICAgbWFyZ2luLWJvdHRvbTogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/tabs/tabs.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/tabs/tabs.component.ts ***!
  \***************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
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




var TabsComponent = /** @class */ (function () {
    function TabsComponent(pageTitleService, translate) {
        this.pageTitleService = pageTitleService;
        this.translate = translate;
    }
    TabsComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Tabs");
    };
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-tabs',
            template: __webpack_require__(/*! ./tabs-material.html */ "./src/app/components/tabs/tabs-material.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./tabs-material.scss */ "./src/app/components/tabs/tabs-material.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/components/toolbar/toolbar-material.html":
/*!**********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar-material.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n   <div class=\"gene-card-title\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n         <div fxLayout=\"column\">\n            <h3>{{'Toolbar'|translate}}</h3>\n         </div>\n         <span fxFlex></span>\n         <button mat-icon-button>\n            <mat-icon>sync</mat-icon>\n         </button>\n         <button mat-icon-button>\n            <mat-icon>more_horiz</mat-icon>\n         </button>\n      </div>\n      <mat-divider></mat-divider>\n   </div>\n   <div class=\"gene-card-content\">\n      <p> <code>MatToolbar</code> is a vertical aligned bar, which can hold the application title or actions.</p>\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h5 class=\"mrgn-b-md\">{{'The default color toolbar'|translate}}</h5>\n         <mat-toolbar class=\"make-toolbar-responsive\">\n            <button mat-button href=\"#\" mat-icon-button>\n               <mat-icon>menu</mat-icon>\n            </button>\n            <span>Default Toolbar</span>\n            <span class=\"gene-spacer\"></span>\n            <button mat-button  mat-icon-button>\n               <mat-icon>search</mat-icon>\n            </button>\n            <button mat-button  mat-icon-button>\n               <mat-icon>more_vert</mat-icon>\n            </button>\n         </mat-toolbar>\n      </div>\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h5 class=\"mrgn-b-md\">{{'The primary color toolbar'|translate}}</h5>\n         <mat-toolbar color=\"primary\" class=\"make-toolbar-responsive\">\n            <button mat-button href=\"#\" mat-icon-button>\n               <mat-icon>menu</mat-icon>\n            </button>\n            <span>Primary Toolbar</span>\n            <span class=\"gene-spacer\"></span>\n            <button mat-button mat-icon-button>\n               <mat-icon>search</mat-icon>\n            </button>\n            <button mat-button mat-icon-button>\n               <mat-icon>more_vert</mat-icon>\n            </button>\n         </mat-toolbar>\n      </div>\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h5 class=\"mrgn-b-md\">The accent color toolbar'|translate}}</h5>\n         <mat-toolbar color=\"accent\" class=\"make-toolbar-responsive\">\n            <button mat-button href=\"#\" mat-icon-button>\n               <mat-icon>menu</mat-icon>\n            </button>\n            <span>Accent Toolbar</span>\n            <span class=\"gene-spacer\"></span>\n            <button mat-button mat-icon-button>\n               <mat-icon>search</mat-icon>\n            </button>\n            <button mat-button mat-icon-button>\n               <mat-icon>more_vert</mat-icon>\n            </button>\n         </mat-toolbar>\n      </div>\n      <div class=\"box-inset pad-all-md mrgn-b-md\">\n         <h5 class=\"mrgn-b-md\">{{'An accent toolbar using the second toolbar row'|translate}}</h5>\n         <mat-toolbar color=\"accent\" class=\"make-toolbar-responsive\">\n            <mat-toolbar-row></mat-toolbar-row>\n            <mat-toolbar-row>\n               <span>Second Line Toolbar</span>\n            </mat-toolbar-row>\n         </mat-toolbar>\n      </div>\n      <div class=\"box-inset pad-all-md\">\n         <h5 class=\"mrgn-b-md\">{{'A primary toolbar using the third toolbar row:'|translate}}</h5>\n         <mat-toolbar color=\"primary\" class=\"make-toolbar-responsive\">\n            <mat-toolbar-row></mat-toolbar-row>\n            <mat-toolbar-row></mat-toolbar-row>\n            <mat-toolbar-row>\n               <span class=\"gene-spacer\">Third Line Toolbar</span>\n               <mat-icon>favorite</mat-icon>\n               <mat-icon>delete</mat-icon>\n            </mat-toolbar-row>\n         </mat-toolbar>\n      </div>\n   </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/toolbar/toolbar-material.scss":
/*!**********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar-material.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gene-spacer {\n  flex: 1 1 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zcmFqL0RvY3VtZW50cy9kZW1vYXBwL2FwcC91aS9zcmMvYXBwL2NvbXBvbmVudHMvdG9vbGJhci90b29sYmFyLW1hdGVyaWFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci1tYXRlcmlhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdlbmUtc3BhY2VyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
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




var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(pageTitleService, translate) {
        this.pageTitleService = pageTitleService;
        this.translate = translate;
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Toolbar");
    };
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-toolbar',
            template: __webpack_require__(/*! ./toolbar-material.html */ "./src/app/components/toolbar/toolbar-material.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./toolbar-material.scss */ "./src/app/components/toolbar/toolbar-material.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/components/tooltip/tooltip-material.html":
/*!**********************************************************!*\
  !*** ./src/app/components/tooltip/tooltip-material.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n   <div class=\"gene-card-title\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n         <div fxLayout=\"column\">\n            <h3>{{'Tooltips'|translate}}</h3>\n         </div>\n         <span fxFlex></span>\n      </div>\n      <mat-divider></mat-divider>\n   </div>\n   <div class=\"gene-card-content\">\n      <p class=\"mrgn-b-lg\"> Tooltip allows the user to specify text to be displayed when the mouse hovers over an element.</p>\n      <button #tooltip=\"matTooltip\" mat-raised-button color=\"primary\" matTooltip=\"to see a tooltip\" matTooltipPosition=\"below\">\n      Mouse over to see the tooltip\n      </button>\n   </div>\n</mat-card>"

/***/ }),

/***/ "./src/app/components/tooltip/tooltip-material.scss":
/*!**********************************************************!*\
  !*** ./src/app/components/tooltip/tooltip-material.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9vbHRpcC90b29sdGlwLW1hdGVyaWFsLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/tooltip/tooltip.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/tooltip/tooltip.component.ts ***!
  \*********************************************************/
/*! exports provided: TooltipOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipOverviewComponent", function() { return TooltipOverviewComponent; });
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




var TooltipOverviewComponent = /** @class */ (function () {
    function TooltipOverviewComponent(pageTitleService, translate) {
        this.pageTitleService = pageTitleService;
        this.translate = translate;
    }
    TooltipOverviewComponent.prototype.ngOnInit = function () {
        this.pageTitleService.setTitle("Tooltip");
    };
    TooltipOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ms-tooltip',
            template: __webpack_require__(/*! ./tooltip-material.html */ "./src/app/components/tooltip/tooltip-material.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            host: {
                "[@fadeInAnimation]": 'true'
            },
            animations: [_core_route_animation_route_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInAnimation"]],
            styles: [__webpack_require__(/*! ./tooltip-material.scss */ "./src/app/components/tooltip/tooltip-material.scss")]
        }),
        __metadata("design:paramtypes", [_core_page_title_page_title_service__WEBPACK_IMPORTED_MODULE_1__["PageTitleService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], TooltipOverviewComponent);
    return TooltipOverviewComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-components-module.js.map