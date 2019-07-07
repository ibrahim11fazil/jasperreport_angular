/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Renderer2, ElementRef, Output, EventEmitter, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
/** @type {?} */
const clickElements = new Set();
export class ClickDirective {
    /**
     * @param {?} renderer
     * @param {?} elm
     * @param {?} document
     */
    constructor(renderer, elm, document) {
        this.renderer = renderer;
        this.elm = elm;
        this.document = document;
        this.click = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.setAttribute(this.elm.nativeElement, 'data-calendar-clickable', 'true');
        clickElements.add(this.elm.nativeElement);
        /** @type {?} */
        const eventName = typeof window !== 'undefined' && typeof window['Hammer'] !== 'undefined'
            ? 'tap'
            : 'click';
        this.removeListener = this.renderer.listen(this.elm.nativeElement, eventName, event => {
            /** @type {?} */
            let nearestClickableParent = event.target;
            while (!clickElements.has(nearestClickableParent) &&
                nearestClickableParent !== this.document.body) {
                nearestClickableParent = nearestClickableParent.parentElement;
            }
            /** @type {?} */
            const isThisClickableElement = this.elm.nativeElement === nearestClickableParent;
            if (isThisClickableElement) {
                this.click.next(event);
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeListener();
        clickElements.delete(this.elm.nativeElement);
    }
}
ClickDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mwlClick]'
            },] }
];
/** @nocollapse */
ClickDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
ClickDirective.propDecorators = {
    click: [{ type: Output, args: ['mwlClick',] }]
};
if (false) {
    /** @type {?} */
    ClickDirective.prototype.click;
    /** @type {?} */
    ClickDirective.prototype.removeListener;
    /** @type {?} */
    ClickDirective.prototype.renderer;
    /** @type {?} */
    ClickDirective.prototype.elm;
    /** @type {?} */
    ClickDirective.prototype.document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2suZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tbW9uL2NsaWNrLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUdWLE1BQU0sRUFDTixZQUFZLEVBQ1osTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFM0MsTUFBTSxhQUFhLEdBQUcsSUFBSSxHQUFHLEVBQWUsQ0FBQztBQUs3QyxNQUFNOzs7Ozs7SUFLSixZQUNVLFVBQ0EsS0FDa0IsUUFBUTtRQUYxQixhQUFRLEdBQVIsUUFBUTtRQUNSLFFBQUcsR0FBSCxHQUFHO1FBQ2UsYUFBUSxHQUFSLFFBQVEsQ0FBQTtxQkFQUixJQUFJLFlBQVksRUFBYztLQVF0RDs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQ3RCLHlCQUF5QixFQUN6QixNQUFNLENBQ1AsQ0FBQztRQUNGLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7UUFDMUMsTUFBTSxTQUFTLEdBQ2IsT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFdBQVc7WUFDdEUsQ0FBQyxDQUFDLEtBQUs7WUFDUCxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQ3RCLFNBQVMsRUFDVCxLQUFLLENBQUMsRUFBRTs7WUFFTixJQUFJLHNCQUFzQixHQUFnQixLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3ZELE9BQ0UsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDO2dCQUMxQyxzQkFBc0IsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFDN0M7Z0JBQ0Esc0JBQXNCLEdBQUcsc0JBQXNCLENBQUMsYUFBYSxDQUFDO2FBQy9EOztZQUNELE1BQU0sc0JBQXNCLEdBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxLQUFLLHNCQUFzQixDQUFDO1lBQ3BELElBQUksc0JBQXNCLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hCO1NBQ0YsQ0FDRixDQUFDO0tBQ0g7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUM5Qzs7O1lBakRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTthQUN2Qjs7OztZQWRDLFNBQVM7WUFDVCxVQUFVOzRDQXNCUCxNQUFNLFNBQUMsUUFBUTs7O29CQVBqQixNQUFNLFNBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuY29uc3QgY2xpY2tFbGVtZW50cyA9IG5ldyBTZXQ8SFRNTEVsZW1lbnQ+KCk7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xDbGlja10nXG59KVxuZXhwb3J0IGNsYXNzIENsaWNrRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAT3V0cHV0KCdtd2xDbGljaycpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbiAgcHJpdmF0ZSByZW1vdmVMaXN0ZW5lcjogKCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbG06IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnRcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKFxuICAgICAgdGhpcy5lbG0ubmF0aXZlRWxlbWVudCxcbiAgICAgICdkYXRhLWNhbGVuZGFyLWNsaWNrYWJsZScsXG4gICAgICAndHJ1ZSdcbiAgICApO1xuICAgIGNsaWNrRWxlbWVudHMuYWRkKHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQpO1xuICAgIGNvbnN0IGV2ZW50TmFtZTogc3RyaW5nID1cbiAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3dbJ0hhbW1lciddICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/ICd0YXAnXG4gICAgICAgIDogJ2NsaWNrJztcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oXG4gICAgICB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LFxuICAgICAgZXZlbnROYW1lLFxuICAgICAgZXZlbnQgPT4ge1xuICAgICAgICAvLyBwcmV2ZW50IGNoaWxkIGNsaWNrIGV2ZW50cyBmcm9tIGZpcmluZyBvbiBwYXJlbnQgZWxlbWVudHMgdGhhdCBhbHNvIGhhdmUgY2xpY2sgZXZlbnRzXG4gICAgICAgIGxldCBuZWFyZXN0Q2xpY2thYmxlUGFyZW50OiBIVE1MRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgd2hpbGUgKFxuICAgICAgICAgICFjbGlja0VsZW1lbnRzLmhhcyhuZWFyZXN0Q2xpY2thYmxlUGFyZW50KSAmJlxuICAgICAgICAgIG5lYXJlc3RDbGlja2FibGVQYXJlbnQgIT09IHRoaXMuZG9jdW1lbnQuYm9keVxuICAgICAgICApIHtcbiAgICAgICAgICBuZWFyZXN0Q2xpY2thYmxlUGFyZW50ID0gbmVhcmVzdENsaWNrYWJsZVBhcmVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzVGhpc0NsaWNrYWJsZUVsZW1lbnQgPVxuICAgICAgICAgIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQgPT09IG5lYXJlc3RDbGlja2FibGVQYXJlbnQ7XG4gICAgICAgIGlmIChpc1RoaXNDbGlja2FibGVFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5jbGljay5uZXh0KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCk7XG4gICAgY2xpY2tFbGVtZW50cy5kZWxldGUodGhpcy5lbG0ubmF0aXZlRWxlbWVudCk7XG4gIH1cbn1cbiJdfQ==