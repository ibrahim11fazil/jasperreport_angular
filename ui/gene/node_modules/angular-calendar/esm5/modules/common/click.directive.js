/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Renderer2, ElementRef, Output, EventEmitter, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
/** @type {?} */
var clickElements = new Set();
var ClickDirective = /** @class */ (function () {
    function ClickDirective(renderer, elm, document) {
        this.renderer = renderer;
        this.elm = elm;
        this.document = document;
        this.click = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ClickDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.setAttribute(this.elm.nativeElement, 'data-calendar-clickable', 'true');
        clickElements.add(this.elm.nativeElement);
        /** @type {?} */
        var eventName = typeof window !== 'undefined' && typeof window['Hammer'] !== 'undefined'
            ? 'tap'
            : 'click';
        this.removeListener = this.renderer.listen(this.elm.nativeElement, eventName, function (event) {
            /** @type {?} */
            var nearestClickableParent = event.target;
            while (!clickElements.has(nearestClickableParent) &&
                nearestClickableParent !== _this.document.body) {
                nearestClickableParent = nearestClickableParent.parentElement;
            }
            /** @type {?} */
            var isThisClickableElement = _this.elm.nativeElement === nearestClickableParent;
            if (isThisClickableElement) {
                _this.click.next(event);
            }
        });
    };
    /**
     * @return {?}
     */
    ClickDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeListener();
        clickElements.delete(this.elm.nativeElement);
    };
    ClickDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mwlClick]'
                },] }
    ];
    /** @nocollapse */
    ClickDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    ClickDirective.propDecorators = {
        click: [{ type: Output, args: ['mwlClick',] }]
    };
    return ClickDirective;
}());
export { ClickDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2suZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tbW9uL2NsaWNrLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUdWLE1BQU0sRUFDTixZQUFZLEVBQ1osTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFM0MsSUFBTSxhQUFhLEdBQUcsSUFBSSxHQUFHLEVBQWUsQ0FBQzs7SUFVM0Msd0JBQ1UsVUFDQSxLQUNrQixRQUFRO1FBRjFCLGFBQVEsR0FBUixRQUFRO1FBQ1IsUUFBRyxHQUFILEdBQUc7UUFDZSxhQUFRLEdBQVIsUUFBUSxDQUFBO3FCQVBSLElBQUksWUFBWSxFQUFjO0tBUXREOzs7O0lBRUosaUNBQVE7OztJQUFSO1FBQUEsaUJBOEJDO1FBN0JDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFDdEIseUJBQXlCLEVBQ3pCLE1BQU0sQ0FDUCxDQUFDO1FBQ0YsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDOztRQUMxQyxJQUFNLFNBQVMsR0FDYixPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssV0FBVztZQUN0RSxDQUFDLENBQUMsS0FBSztZQUNQLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDZCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFDdEIsU0FBUyxFQUNULFVBQUEsS0FBSzs7WUFFSCxJQUFJLHNCQUFzQixHQUFnQixLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3ZELE9BQ0UsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDO2dCQUMxQyxzQkFBc0IsS0FBSyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFDN0M7Z0JBQ0Esc0JBQXNCLEdBQUcsc0JBQXNCLENBQUMsYUFBYSxDQUFDO2FBQy9EOztZQUNELElBQU0sc0JBQXNCLEdBQzFCLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxLQUFLLHNCQUFzQixDQUFDO1lBQ3BELElBQUksc0JBQXNCLEVBQUU7Z0JBQzFCLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hCO1NBQ0YsQ0FDRixDQUFDO0tBQ0g7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQzlDOztnQkFqREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjs7OztnQkFkQyxTQUFTO2dCQUNULFVBQVU7Z0RBc0JQLE1BQU0sU0FBQyxRQUFROzs7d0JBUGpCLE1BQU0sU0FBQyxVQUFVOzt5QkFsQnBCOztTQWlCYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5jb25zdCBjbGlja0VsZW1lbnRzID0gbmV3IFNldDxIVE1MRWxlbWVudD4oKTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bENsaWNrXSdcbn0pXG5leHBvcnQgY2xhc3MgQ2xpY2tEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBPdXRwdXQoJ213bENsaWNrJykgY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcblxuICBwcml2YXRlIHJlbW92ZUxpc3RlbmVyOiAoKSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsbTogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoXG4gICAgICB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LFxuICAgICAgJ2RhdGEtY2FsZW5kYXItY2xpY2thYmxlJyxcbiAgICAgICd0cnVlJ1xuICAgICk7XG4gICAgY2xpY2tFbGVtZW50cy5hZGQodGhpcy5lbG0ubmF0aXZlRWxlbWVudCk7XG4gICAgY29uc3QgZXZlbnROYW1lOiBzdHJpbmcgPVxuICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvd1snSGFtbWVyJ10gIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gJ3RhcCdcbiAgICAgICAgOiAnY2xpY2snO1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihcbiAgICAgIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBldmVudE5hbWUsXG4gICAgICBldmVudCA9PiB7XG4gICAgICAgIC8vIHByZXZlbnQgY2hpbGQgY2xpY2sgZXZlbnRzIGZyb20gZmlyaW5nIG9uIHBhcmVudCBlbGVtZW50cyB0aGF0IGFsc28gaGF2ZSBjbGljayBldmVudHNcbiAgICAgICAgbGV0IG5lYXJlc3RDbGlja2FibGVQYXJlbnQ6IEhUTUxFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB3aGlsZSAoXG4gICAgICAgICAgIWNsaWNrRWxlbWVudHMuaGFzKG5lYXJlc3RDbGlja2FibGVQYXJlbnQpICYmXG4gICAgICAgICAgbmVhcmVzdENsaWNrYWJsZVBhcmVudCAhPT0gdGhpcy5kb2N1bWVudC5ib2R5XG4gICAgICAgICkge1xuICAgICAgICAgIG5lYXJlc3RDbGlja2FibGVQYXJlbnQgPSBuZWFyZXN0Q2xpY2thYmxlUGFyZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNUaGlzQ2xpY2thYmxlRWxlbWVudCA9XG4gICAgICAgICAgdGhpcy5lbG0ubmF0aXZlRWxlbWVudCA9PT0gbmVhcmVzdENsaWNrYWJsZVBhcmVudDtcbiAgICAgICAgaWYgKGlzVGhpc0NsaWNrYWJsZUVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLmNsaWNrLm5leHQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoKTtcbiAgICBjbGlja0VsZW1lbnRzLmRlbGV0ZSh0aGlzLmVsbS5uYXRpdmVFbGVtZW50KTtcbiAgfVxufVxuIl19