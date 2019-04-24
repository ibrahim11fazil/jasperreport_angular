import { Directive, ElementRef, EventEmitter, HostListener, Input, NgZone, Output, Renderer2 } from '@angular/core';
import { TreeDraggedElement } from '../models/tree-dragged-element.model';
var DRAG_OVER_CLASS = 'is-dragging-over';
var DRAG_DISABLED_CLASS = 'is-dragging-over-disabled';
var TreeDropDirective = /** @class */ (function () {
    function TreeDropDirective(el, renderer, treeDraggedElement, ngZone) {
        this.el = el;
        this.renderer = renderer;
        this.treeDraggedElement = treeDraggedElement;
        this.ngZone = ngZone;
        this.allowDragoverStyling = true;
        this.onDropCallback = new EventEmitter();
        this.onDragOverCallback = new EventEmitter();
        this.onDragLeaveCallback = new EventEmitter();
        this.onDragEnterCallback = new EventEmitter();
        this._allowDrop = function (element, $event) { return true; };
        this.dragOverEventHandler = this.onDragOver.bind(this);
        this.dragEnterEventHandler = this.onDragEnter.bind(this);
        this.dragLeaveEventHandler = this.onDragLeave.bind(this);
    }
    Object.defineProperty(TreeDropDirective.prototype, "treeAllowDrop", {
        set: function (allowDrop) {
            if (allowDrop instanceof Function) {
                this._allowDrop = allowDrop;
            }
            else
                this._allowDrop = function (element, $event) { return allowDrop; };
        },
        enumerable: true,
        configurable: true
    });
    TreeDropDirective.prototype.allowDrop = function ($event) {
        return this._allowDrop(this.treeDraggedElement.get(), $event);
    };
    TreeDropDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        var el = this.el.nativeElement;
        this.ngZone.runOutsideAngular(function () {
            el.addEventListener('dragover', _this.dragOverEventHandler);
            el.addEventListener('dragenter', _this.dragEnterEventHandler);
            el.addEventListener('dragleave', _this.dragLeaveEventHandler);
        });
    };
    TreeDropDirective.prototype.ngOnDestroy = function () {
        var el = this.el.nativeElement;
        el.removeEventListener('dragover', this.dragOverEventHandler);
        el.removeEventListener('dragenter', this.dragEnterEventHandler);
        el.removeEventListener('dragleave', this.dragLeaveEventHandler);
    };
    TreeDropDirective.prototype.onDragOver = function ($event) {
        if (!this.allowDrop($event)) {
            if (this.allowDragoverStyling) {
                return this.addDisabledClass();
            }
            return;
        }
        ;
        this.onDragOverCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
        $event.preventDefault();
        if (this.allowDragoverStyling) {
            this.addClass();
        }
    };
    TreeDropDirective.prototype.onDragEnter = function ($event) {
        if (!this.allowDrop($event))
            return;
        this.onDragEnterCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
    };
    TreeDropDirective.prototype.onDragLeave = function ($event) {
        if (!this.allowDrop($event)) {
            if (this.allowDragoverStyling) {
                return this.removeDisabledClass();
            }
            return;
        }
        this.onDragLeaveCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
        if (this.allowDragoverStyling) {
            this.removeClass();
        }
    };
    TreeDropDirective.prototype.onDrop = function ($event) {
        if (!this.allowDrop($event))
            return;
        $event.preventDefault();
        this.onDropCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
        if (this.allowDragoverStyling) {
            this.removeClass();
        }
        this.treeDraggedElement.set(null);
    };
    TreeDropDirective.prototype.addClass = function () {
        this.renderer.addClass(this.el.nativeElement, DRAG_OVER_CLASS);
    };
    TreeDropDirective.prototype.removeClass = function () {
        this.renderer.removeClass(this.el.nativeElement, DRAG_OVER_CLASS);
    };
    TreeDropDirective.prototype.addDisabledClass = function () {
        this.renderer.addClass(this.el.nativeElement, DRAG_DISABLED_CLASS);
    };
    TreeDropDirective.prototype.removeDisabledClass = function () {
        this.renderer.removeClass(this.el.nativeElement, DRAG_DISABLED_CLASS);
    };
    TreeDropDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[treeDrop]'
                },] },
    ];
    /** @nocollapse */
    TreeDropDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: TreeDraggedElement },
        { type: NgZone }
    ]; };
    TreeDropDirective.propDecorators = {
        allowDragoverStyling: [{ type: Input }],
        onDropCallback: [{ type: Output, args: ['treeDrop',] }],
        onDragOverCallback: [{ type: Output, args: ['treeDropDragOver',] }],
        onDragLeaveCallback: [{ type: Output, args: ['treeDropDragLeave',] }],
        onDragEnterCallback: [{ type: Output, args: ['treeDropDragEnter',] }],
        treeAllowDrop: [{ type: Input }],
        onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
    };
    return TreeDropDirective;
}());
export { TreeDropDirective };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1kcm9wLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9kaXJlY3RpdmVzL3RyZWUtZHJvcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLE1BQU0sRUFDTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFMUUsSUFBTSxlQUFlLEdBQUcsa0JBQWtCLENBQUM7QUFDM0MsSUFBTSxtQkFBbUIsR0FBRywyQkFBMkIsQ0FBQztBQUV4RDtJQTBCRSwyQkFBb0IsRUFBYyxFQUFVLFFBQW1CLEVBQVUsa0JBQXNDLEVBQVUsTUFBYztRQUFuSCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBdEI5SCx5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDakIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdkMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6Qyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSzlELGVBQVUsR0FBRyxVQUFDLE9BQU8sRUFBRSxNQUFNLElBQUssT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDO1FBYzdDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJ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QkFBbUIsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFTywrQ0FBbUIsR0FBM0I7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7O2dCQTlHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzs7O2dCQWhCQyxVQUFVO2dCQU9WLFNBQVM7Z0JBRUYsa0JBQWtCO2dCQUx6QixNQUFNOzs7dUNBY0wsS0FBSztpQ0FDTCxNQUFNLFNBQUMsVUFBVTtxQ0FDakIsTUFBTSxTQUFDLGtCQUFrQjtzQ0FDekIsTUFBTSxTQUFDLG1CQUFtQjtzQ0FDMUIsTUFBTSxTQUFDLG1CQUFtQjtnQ0FPMUIsS0FBSzt5QkFxRUwsWUFBWSxTQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUEyQmxDLHdCQUFDO0NBQUEsQUEvR0QsSUErR0M7U0E1R1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWVEcmFnZ2VkRWxlbWVudCB9IGZyb20gJy4uL21vZGVscy90cmVlLWRyYWdnZWQtZWxlbWVudC5tb2RlbCc7XG5cbmNvbnN0IERSQUdfT1ZFUl9DTEFTUyA9ICdpcy1kcmFnZ2luZy1vdmVyJztcbmNvbnN0IERSQUdfRElTQUJMRURfQ0xBU1MgPSAnaXMtZHJhZ2dpbmctb3Zlci1kaXNhYmxlZCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t0cmVlRHJvcF0nXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVEcm9wRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgYWxsb3dEcmFnb3ZlclN0eWxpbmcgPSB0cnVlO1xuICBAT3V0cHV0KCd0cmVlRHJvcCcpIG9uRHJvcENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCd0cmVlRHJvcERyYWdPdmVyJykgb25EcmFnT3ZlckNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCd0cmVlRHJvcERyYWdMZWF2ZScpIG9uRHJhZ0xlYXZlQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoJ3RyZWVEcm9wRHJhZ0VudGVyJykgb25EcmFnRW50ZXJDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHJpdmF0ZSByZWFkb25seSBkcmFnT3ZlckV2ZW50SGFuZGxlcjogKGV2OiBEcmFnRXZlbnQpID0+IHZvaWQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgZHJhZ0VudGVyRXZlbnRIYW5kbGVyOiAoZXY6IERyYWdFdmVudCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSByZWFkb25seSBkcmFnTGVhdmVFdmVudEhhbmRsZXI6IChldjogRHJhZ0V2ZW50KSA9PiB2b2lkO1xuXG4gIHByaXZhdGUgX2FsbG93RHJvcCA9IChlbGVtZW50LCAkZXZlbnQpID0+IHRydWU7XG5cbiAgQElucHV0KCkgc2V0IHRyZWVBbGxvd0Ryb3AoYWxsb3dEcm9wKSB7XG4gICAgaWYgKGFsbG93RHJvcCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICB0aGlzLl9hbGxvd0Ryb3AgPSBhbGxvd0Ryb3A7XG4gICAgfVxuICAgIGVsc2UgdGhpcy5fYWxsb3dEcm9wID0gKGVsZW1lbnQsICRldmVudCkgPT4gYWxsb3dEcm9wO1xuICB9XG5cbiAgYWxsb3dEcm9wKCRldmVudCkge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd0Ryb3AodGhpcy50cmVlRHJhZ2dlZEVsZW1lbnQuZ2V0KCksICRldmVudCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgdHJlZURyYWdnZWRFbGVtZW50OiBUcmVlRHJhZ2dlZEVsZW1lbnQsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHtcbiAgICB0aGlzLmRyYWdPdmVyRXZlbnRIYW5kbGVyID0gdGhpcy5vbkRyYWdPdmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmFnRW50ZXJFdmVudEhhbmRsZXIgPSB0aGlzLm9uRHJhZ0VudGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kcmFnTGVhdmVFdmVudEhhbmRsZXIgPSB0aGlzLm9uRHJhZ0xlYXZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgbGV0IGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuZHJhZ092ZXJFdmVudEhhbmRsZXIpO1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgdGhpcy5kcmFnRW50ZXJFdmVudEhhbmRsZXIpO1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgdGhpcy5kcmFnTGVhdmVFdmVudEhhbmRsZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgbGV0IGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuZHJhZ092ZXJFdmVudEhhbmRsZXIpO1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIHRoaXMuZHJhZ0VudGVyRXZlbnRIYW5kbGVyKTtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZUV2ZW50SGFuZGxlcik7XG4gIH1cblxuICBvbkRyYWdPdmVyKCRldmVudCkge1xuICAgIGlmICghdGhpcy5hbGxvd0Ryb3AoJGV2ZW50KSkge1xuICAgICAgaWYgKHRoaXMuYWxsb3dEcmFnb3ZlclN0eWxpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRGlzYWJsZWRDbGFzcygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH07XG5cbiAgICB0aGlzLm9uRHJhZ092ZXJDYWxsYmFjay5lbWl0KHtldmVudDogJGV2ZW50LCBlbGVtZW50OiB0aGlzLnRyZWVEcmFnZ2VkRWxlbWVudC5nZXQoKX0pO1xuXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMuYWxsb3dEcmFnb3ZlclN0eWxpbmcpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoKTtcbiAgICB9XG4gIH1cblxuICBvbkRyYWdFbnRlcigkZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuYWxsb3dEcm9wKCRldmVudCkpIHJldHVybjtcblxuICAgIHRoaXMub25EcmFnRW50ZXJDYWxsYmFjay5lbWl0KHtldmVudDogJGV2ZW50LCBlbGVtZW50OiB0aGlzLnRyZWVEcmFnZ2VkRWxlbWVudC5nZXQoKX0pO1xuICB9XG5cbiAgb25EcmFnTGVhdmUoJGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmFsbG93RHJvcCgkZXZlbnQpKSB7XG4gICAgICBpZiAodGhpcy5hbGxvd0RyYWdvdmVyU3R5bGluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmVEaXNhYmxlZENsYXNzKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub25EcmFnTGVhdmVDYWxsYmFjay5lbWl0KHtldmVudDogJGV2ZW50LCBlbGVtZW50OiB0aGlzLnRyZWVEcmFnZ2VkRWxlbWVudC5nZXQoKX0pO1xuXG4gICAgaWYgKHRoaXMuYWxsb3dEcmFnb3ZlclN0eWxpbmcpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSkgb25Ecm9wKCRldmVudCkge1xuICAgIGlmICghdGhpcy5hbGxvd0Ryb3AoJGV2ZW50KSkgcmV0dXJuO1xuXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5vbkRyb3BDYWxsYmFjay5lbWl0KHtldmVudDogJGV2ZW50LCBlbGVtZW50OiB0aGlzLnRyZWVEcmFnZ2VkRWxlbWVudC5nZXQoKX0pO1xuXG4gICAgaWYgKHRoaXMuYWxsb3dEcmFnb3ZlclN0eWxpbmcpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoKTtcbiAgICB9XG4gICAgdGhpcy50cmVlRHJhZ2dlZEVsZW1lbnQuc2V0KG51bGwpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRDbGFzcygpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgRFJBR19PVkVSX0NMQVNTKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlQ2xhc3MoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIERSQUdfT1ZFUl9DTEFTUyk7XG4gIH1cblxuICBwcml2YXRlIGFkZERpc2FibGVkQ2xhc3MoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIERSQUdfRElTQUJMRURfQ0xBU1MpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVEaXNhYmxlZENsYXNzKCkge1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBEUkFHX0RJU0FCTEVEX0NMQVNTKTtcbiAgfVxufVxuIl19