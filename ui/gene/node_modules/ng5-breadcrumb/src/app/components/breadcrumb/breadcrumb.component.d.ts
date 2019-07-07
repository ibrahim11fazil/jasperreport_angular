import { OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from './breadcrumb.service';
/**
 * This component shows a breadcrumb trail for available routes the router can navigate to.
 * It subscribes to the router in order to update the breadcrumb trail as you navigate to a component.
 */
export declare class BreadcrumbComponent implements OnInit, OnChanges {
    private router;
    private breadcrumbService;
    useBootstrap: boolean;
    prefix: string;
    _urls: string[];
    _routerSubscription: any;
    constructor(router: Router, breadcrumbService: BreadcrumbService);
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    generateBreadcrumbTrail(url: string): void;
    navigateTo(url: string): void;
    friendlyName(url: string): string;
    ngOnDestroy(): void;
}
