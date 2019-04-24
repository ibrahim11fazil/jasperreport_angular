import { Injectable } from "@angular/core";
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
        { type: Injectable },
    ];
    /** @nocollapse */
    BreadcrumbService.ctorParameters = function () { return []; };
    return BreadcrumbService;
}());
export { BreadcrumbService };
//# sourceMappingURL=breadcrumb.service.js.map