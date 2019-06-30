export declare class BreadcrumbService {
    private routesFriendlyNames;
    private routesFriendlyNamesRegex;
    private routesWithCallback;
    private routesWithCallbackRegex;
    private hideRoutes;
    private hideRoutesRegex;
    /**
     * Specify a friendly name for the corresponding route.
     *
     * @param route
     * @param name
     */
    addFriendlyNameForRoute(route: string, name: string): void;
    /**
     * Specify a friendly name for the corresponding route matching a regular expression.
     *
     * @param route
     * @param name
     */
    addFriendlyNameForRouteRegex(routeRegex: string, name: string): void;
    /**
     * Specify a callback for the corresponding route.
     * When a mathing url is navigatedd to, the callback function is invoked to get the name to be displayed in the breadcrumb.
     */
    addCallbackForRoute(route: string, callback: (id: string) => string): void;
    /**
     * Specify a callback for the corresponding route matching a regular expression.
     * When a mathing url is navigatedd to, the callback function is invoked to get the name to be displayed in the breadcrumb.
     */
    addCallbackForRouteRegex(routeRegex: string, callback: (id: string) => string): void;
    /**
     * Show the friendly name for a given route (url). If no match is found the url (without the leading '/') is shown.
     *
     * @param route
     * @returns {*}
     */
    getFriendlyNameForRoute(route: string): string;
    /**
     * Specify a route (url) that should not be shown in the breadcrumb.
     */
    hideRoute(route: string): void;
    /**
     * Specify a route (url) regular expression that should not be shown in the breadcrumb.
     */
    hideRouteRegex(routeRegex: string): void;
    /**
     * Returns true if a route should be hidden.
     */
    isRouteHidden(route: string): boolean;
}
