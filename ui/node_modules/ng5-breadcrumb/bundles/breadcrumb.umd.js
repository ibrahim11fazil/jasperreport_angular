(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/router'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.breadcrumb = {}),global.ng.core,global.common,global.router));
}(this, (function (exports,core,common,router) { 'use strict';

var BreadcrumbService = (function () {
    function BreadcrumbService() {
        this.routesFriendlyNames = new Map();
        this.routesFriendlyNamesRegex = new Map();
        this.routesWithCallback = new Map();
        this.routesWithCallbackRegex = new Map();
        this.hideRoutes = new Array();
        this.hideRoutesRegex = new Array();
    }
    /**
     * Specify a friendly name for the corresponding route.
     *
     * @param route
     * @param name
     */
    /**
         * Specify a friendly name for the corresponding route.
         *
         * @param route
         * @param name
         */
    BreadcrumbService.prototype.addFriendlyNameForRoute = /**
         * Specify a friendly name for the corresponding route.
         *
         * @param route
         * @param name
         */
    function (route, name) {
        this.routesFriendlyNames.set(route, name);
    };
    /**
     * Specify a friendly name for the corresponding route matching a regular expression.
     *
     * @param route
     * @param name
     */
    /**
         * Specify a friendly name for the corresponding route matching a regular expression.
         *
         * @param route
         * @param name
         */
    BreadcrumbService.prototype.addFriendlyNameForRouteRegex = /**
         * Specify a friendly name for the corresponding route matching a regular expression.
         *
         * @param route
         * @param name
         */
    function (routeRegex, name) {
        this.routesFriendlyNamesRegex.set(routeRegex, name);
    };
    /**
     * Specify a callback for the corresponding route.
     * When a mathing url is navigatedd to, the callback function is invoked to get the name to be displayed in the breadcrumb.
     */
    /**
         * Specify a callback for the corresponding route.
         * When a mathing url is navigatedd to, the callback function is invoked to get the name to be displayed in the breadcrumb.
         */
    BreadcrumbService.prototype.addCallbackForRoute = /**
         * Specify a callback for the corresponding route.
         * When a mathing url is navigatedd to, the callback function is invoked to get the name to be displayed in the breadcrumb.
         */
    function (route, callback) {
        this.routesWithCallback.set(route, callback);
    };
    /**
     * Specify a callback for the corresponding route matching a regular expression.
     * When a mathing url is navigatedd to, the callback function is invoked to get the name to be displayed in the breadcrumb.
     */
    /**
         * Specify a callback for the corresponding route matching a regular expression.
         * When a mathing url is navigatedd to, the callback function is invoked to get the name to be displayed in the breadcrumb.
         */
    BreadcrumbService.prototype.addCallbackForRouteRegex = /**
         * Specify a callback for the corresponding route matching a regular expression.
         * When a mathing url is navigatedd to, the callback function is invoked to get the name to be displayed in the breadcrumb.
         */
    function (routeRegex, callback) {
        this.routesWithCallbackRegex.set(routeRegex, callback);
    };
    /**
     * Show the friendly name for a given route (url). If no match is found the url (without the leading '/') is shown.
     *
     * @param route
     * @returns {*}
     */
    /**
         * Show the friendly name for a given route (url). If no match is found the url (without the leading '/') is shown.
         *
         * @param route
         * @returns {*}
         */
    BreadcrumbService.prototype.getFriendlyNameForRoute = /**
         * Show the friendly name for a given route (url). If no match is found the url (without the leading '/') is shown.
         *
         * @param route
         * @returns {*}
         */
    function (route) {
        var routeEnd = route.substr(route.lastIndexOf('/') + 1, route.length);
        var name = routeEnd;
        this.routesFriendlyNames.forEach(function (value, key, map) {
            if (key === route) {
                name = value;
            }
        });
        this.routesFriendlyNamesRegex.forEach(function (value, key, map) {
            if (new RegExp(key).exec(route)) {
                name = value;
            }
        });
        this.routesWithCallback.forEach(function (value, key, map) {
            if (key === route) {
                name = value(routeEnd);
            }
        });
        this.routesWithCallbackRegex.forEach(function (value, key, map) {
            if (new RegExp(key).exec(route)) {
                name = value(routeEnd);
            }
        });
        return name;
    };
    /**
     * Specify a route (url) that should not be shown in the breadcrumb.
     */
    /**
         * Specify a route (url) that should not be shown in the breadcrumb.
         */
    BreadcrumbService.prototype.hideRoute = /**
         * Specify a route (url) that should not be shown in the breadcrumb.
         */
    function (route) {
        if (this.hideRoutes.indexOf(route) === -1) {
            this.hideRoutes.push(route);
        }
    };
    /**
     * Specify a route (url) regular expression that should not be shown in the breadcrumb.
     */
    /**
         * Specify a route (url) regular expression that should not be shown in the breadcrumb.
         */
    BreadcrumbService.prototype.hideRouteRegex = /**
         * Specify a route (url) regular expression that should not be shown in the breadcrumb.
         */
    function (routeRegex) {
        if (this.hideRoutesRegex.indexOf(routeRegex) === -1) {
            this.hideRoutesRegex.push(routeRegex);
        }
    };
    /**
     * Returns true if a route should be hidden.
     */
    /**
         * Returns true if a route should be hidden.
         */
    BreadcrumbService.prototype.isRouteHidden = /**
         * Returns true if a route should be hidden.
         */
    function (route) {
        var hide = this.hideRoutes.indexOf(route) > -1;
        this.hideRoutesRegex.forEach(function (value) {
            if (new RegExp(value).exec(route)) {
                hide = true;
            }
        });
        return hide;
    };
    BreadcrumbService.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    BreadcrumbService.ctorParameters = function () { return []; };
    return BreadcrumbService;
}());

/**
 * This component shows a breadcrumb trail for available routes the router can navigate to.
 * It subscribes to the router in order to update the breadcrumb trail as you navigate to a component.
 */
var BreadcrumbComponent = (function () {
    function BreadcrumbComponent(router$$1, breadcrumbService) {
        this.router = router$$1;
        this.breadcrumbService = breadcrumbService;
        this.useBootstrap = true;
        this.prefix = '';
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._urls = new Array();
        if (this.prefix.length > 0) {
            this._urls.unshift(this.prefix);
        }
        this._routerSubscription = this.router.events.subscribe(function (navigationEnd) {
            if (navigationEnd instanceof router.NavigationEnd) {
                _this._urls.length = 0; //Fastest way to clear out array
                _this.generateBreadcrumbTrail(navigationEnd.urlAfterRedirects ? navigationEnd.urlAfterRedirects : navigationEnd.url);
            }
        });
    };
    BreadcrumbComponent.prototype.ngOnChanges = function (changes) {
        if (!this._urls) {
            return;
        }
        this._urls.length = 0;
        this.generateBreadcrumbTrail(this.router.url);
    };
    BreadcrumbComponent.prototype.generateBreadcrumbTrail = function (url) {
        if (!this.breadcrumbService.isRouteHidden(url)) {
            //Add url to beginning of array (since the url is being recursively broken down from full url to its parent)
            this._urls.unshift(url);
        }
        if (url.lastIndexOf('/') > 0) {
            this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/'))); //Find last '/' and add everything before it as a parent route
        }
        else if (this.prefix.length > 0) {
            this._urls.unshift(this.prefix);
        }
    };
    BreadcrumbComponent.prototype.navigateTo = function (url) {
        this.router.navigateByUrl(url);
    };
    BreadcrumbComponent.prototype.friendlyName = function (url) {
        return !url ? '' : this.breadcrumbService.getFriendlyNameForRoute(url);
    };
    BreadcrumbComponent.prototype.ngOnDestroy = function () {
        this._routerSubscription.unsubscribe();
    };
    BreadcrumbComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'breadcrumb',
                    template: "\n        <ul [class.breadcrumb]=\"useBootstrap\">\n            <li *ngFor=\"let url of _urls; let last = last\" [ngClass]=\"{'breadcrumb-item': useBootstrap, 'active': last}\"> <!-- disable link of last item -->\n                <a role=\"button\" *ngIf=\"!last && url == prefix\" (click)=\"navigateTo('/')\">{{url}}</a>\n                <a role=\"button\" *ngIf=\"!last && url != prefix\" (click)=\"navigateTo(url)\">{{friendlyName(url)}}</a>\n                <span *ngIf=\"last\">{{friendlyName(url)}}</span>\n                <span *ngIf=\"last && url == prefix\">{{friendlyName('/')}}</span>\n            </li>\n        </ul>\n    "
                },] },
    ];
    /** @nocollapse */
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: router.Router, },
        { type: BreadcrumbService, },
    ]; };
    BreadcrumbComponent.propDecorators = {
        "useBootstrap": [{ type: core.Input },],
        "prefix": [{ type: core.Input },],
    };
    return BreadcrumbComponent;
}());

var Ng5BreadcrumbModule = (function () {
    function Ng5BreadcrumbModule() {
    }
    Ng5BreadcrumbModule.forRoot = function () {
        return {
            ngModule: Ng5BreadcrumbModule,
            providers: [BreadcrumbService]
        };
    };
    Ng5BreadcrumbModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    exports: [BreadcrumbComponent],
                    declarations: [BreadcrumbComponent]
                },] },
    ];
    /** @nocollapse */
    Ng5BreadcrumbModule.ctorParameters = function () { return []; };
    return Ng5BreadcrumbModule;
}());

/** Exporting the public API **/

exports.Ng5BreadcrumbModule = Ng5BreadcrumbModule;
exports.BreadcrumbComponent = BreadcrumbComponent;
exports.BreadcrumbService = BreadcrumbService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
