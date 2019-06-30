import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbService } from './breadcrumb.service';
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    exports: [BreadcrumbComponent],
                    declarations: [BreadcrumbComponent]
                },] },
    ];
    /** @nocollapse */
    Ng5BreadcrumbModule.ctorParameters = function () { return []; };
    return Ng5BreadcrumbModule;
}());
export { Ng5BreadcrumbModule };
//# sourceMappingURL=breadcrumb.module.js.map