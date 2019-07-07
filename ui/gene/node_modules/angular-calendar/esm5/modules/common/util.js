/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { validateEvents as validateEventsWithoutLog } from 'calendar-utils';
/** @type {?} */
export var validateEvents = function (events) {
    /** @type {?} */
    var warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.warn.apply(console, tslib_1.__spread(['angular-calendar'], args));
    };
    return validateEventsWithoutLog(events, warn);
};
/**
 * @param {?} outer
 * @param {?} inner
 * @return {?}
 */
export function isInside(outer, inner) {
    return (Math.floor(outer.left) <= Math.ceil(inner.left) &&
        Math.floor(inner.left) <= Math.ceil(outer.right) &&
        Math.floor(outer.left) <= Math.ceil(inner.right) &&
        Math.floor(inner.right) <= Math.ceil(outer.right) &&
        Math.floor(outer.top) <= Math.ceil(inner.top) &&
        Math.floor(inner.top) <= Math.ceil(outer.bottom) &&
        Math.floor(outer.top) <= Math.ceil(inner.bottom) &&
        Math.floor(inner.bottom) <= Math.ceil(outer.bottom));
}
/**
 * @param {?} amount
 * @param {?} precision
 * @return {?}
 */
export function roundToNearest(amount, precision) {
    return Math.round(amount / precision) * precision;
}
/** @type {?} */
export var trackByEventId = function (index, event) {
    return event.id ? event.id : event;
};
/** @type {?} */
export var trackByWeekDayHeaderDate = function (index, day) {
    return day.date.toISOString();
};
/** @type {?} */
export var trackByIndex = function (index) { return index; };
/** @type {?} */
export var trackByHourSegment = function (index, segment) { return segment.date.toISOString(); };
/** @type {?} */
export var trackByHour = function (index, hour) {
    return hour.segments[0].date.toISOString();
};
/** @type {?} */
export var trackByDayOrWeekEvent = function (index, weekEvent) { return (weekEvent.event.id ? weekEvent.event.id : weekEvent.event); };
/** @type {?} */
var MINUTES_IN_HOUR = 60;
/**
 * @param {?} movedY
 * @param {?} hourSegments
 * @param {?} hourSegmentHeight
 * @param {?} eventSnapSize
 * @return {?}
 */
export function getMinutesMoved(movedY, hourSegments, hourSegmentHeight, eventSnapSize) {
    /** @type {?} */
    var draggedInPixelsSnapSize = roundToNearest(movedY, eventSnapSize || hourSegmentHeight);
    /** @type {?} */
    var pixelAmountInMinutes = MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight);
    return draggedInPixelsSnapSize * pixelAmountInMinutes;
}
/**
 * @param {?} hourSegments
 * @param {?} hourSegmentHeight
 * @return {?}
 */
export function getMinimumEventHeightInMinutes(hourSegments, hourSegmentHeight) {
    return (MINUTES_IN_HOUR / (hourSegments * hourSegmentHeight)) * 30;
}
/**
 * @param {?} dateAdapter
 * @param {?} event
 * @param {?} minimumMinutes
 * @return {?}
 */
export function getDefaultEventEnd(dateAdapter, event, minimumMinutes) {
    if (event.end) {
        return event.end;
    }
    else {
        return dateAdapter.addMinutes(event.start, minimumMinutes);
    }
}
/**
 * @param {?} dateAdapter
 * @param {?} date
 * @param {?} days
 * @param {?} excluded
 * @return {?}
 */
export function addDaysWithExclusions(dateAdapter, date, days, excluded) {
    /** @type {?} */
    var daysCounter = 0;
    /** @type {?} */
    var daysToAdd = 0;
    /** @type {?} */
    var changeDays = days < 0 ? dateAdapter.subDays : dateAdapter.addDays;
    /** @type {?} */
    var result = date;
    while (daysToAdd <= Math.abs(days)) {
        result = changeDays(date, daysCounter);
        /** @type {?} */
        var day = dateAdapter.getDay(result);
        if (excluded.indexOf(day) === -1) {
            daysToAdd++;
        }
        daysCounter++;
    }
    return result;
}
/**
 * @param {?} newStart
 * @param {?} newEnd
 * @param {?} period
 * @return {?}
 */
export function isDraggedWithinPeriod(newStart, newEnd, period) {
    /** @type {?} */
    var end = newEnd || newStart;
    return ((period.start <= newStart && newStart <= period.end) ||
        (period.start <= end && end <= period.end));
}
/**
 * @param {?} dropEvent
 * @param {?} date
 * @param {?} allDay
 * @param {?} calendarId
 * @return {?}
 */
export function shouldFireDroppedEvent(dropEvent, date, allDay, calendarId) {
    return (dropEvent.dropData &&
        dropEvent.dropData.event &&
        (dropEvent.dropData.calendarId !== calendarId ||
            (dropEvent.dropData.event.allDay && !allDay) ||
            (!dropEvent.dropData.event.allDay && allDay)));
}
/**
 * @param {?} dateAdapter
 * @param {?} viewDate
 * @param {?} weekStartsOn
 * @param {?=} excluded
 * @param {?=} daysInWeek
 * @return {?}
 */
export function getWeekViewPeriod(dateAdapter, viewDate, weekStartsOn, excluded, daysInWeek) {
    if (excluded === void 0) { excluded = []; }
    /** @type {?} */
    var viewStart = daysInWeek
        ? dateAdapter.startOfDay(viewDate)
        : dateAdapter.startOfWeek(viewDate, { weekStartsOn: weekStartsOn });
    if (excluded.indexOf(dateAdapter.getDay(viewStart)) > -1) {
        viewStart = dateAdapter.subDays(addDaysWithExclusions(dateAdapter, viewStart, 1, excluded), 1);
    }
    if (daysInWeek) {
        /** @type {?} */
        var viewEnd = dateAdapter.endOfDay(addDaysWithExclusions(dateAdapter, viewStart, daysInWeek - 1, excluded));
        return { viewStart: viewStart, viewEnd: viewEnd };
    }
    else {
        /** @type {?} */
        var viewEnd = dateAdapter.endOfWeek(viewDate, { weekStartsOn: weekStartsOn });
        if (excluded.indexOf(dateAdapter.getDay(viewEnd)) > -1) {
            viewEnd = dateAdapter.addDays(addDaysWithExclusions(dateAdapter, viewEnd, -1, excluded), 1);
        }
        return { viewStart: viewStart, viewEnd: viewEnd };
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY2FsZW5kYXIvIiwic291cmNlcyI6WyJtb2R1bGVzL2NvbW1vbi91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUtMLGNBQWMsSUFBSSx3QkFBd0IsRUFJM0MsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHeEIsV0FBYSxjQUFjLEdBQUcsVUFBQyxNQUF1Qjs7SUFDcEQsSUFBTSxJQUFJLEdBQUc7UUFBQyxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLHlCQUFPOztRQUFLLE9BQUEsT0FBTyxDQUFDLElBQUksT0FBWixPQUFPLG9CQUFNLGtCQUFrQixHQUFLLElBQUk7SUFBeEMsQ0FBeUMsQ0FBQztJQUNwRSxPQUFPLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztDQUMvQyxDQUFDOzs7Ozs7QUFFRixNQUFNLG1CQUFtQixLQUFpQixFQUFFLEtBQWlCO0lBQzNELE9BQU8sQ0FDTCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxD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QUM7UUFDaEUsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUN0RCxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FDM0IscUJBQXFCLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsRUFDekQsQ0FBQyxDQUNGLENBQUM7U0FDSDtRQUNELE9BQU8sRUFBRSxTQUFTLFdBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDO0tBQy9CO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDYWxlbmRhckV2ZW50LFxuICBEYXlWaWV3RXZlbnQsXG4gIERheVZpZXdIb3VyLFxuICBEYXlWaWV3SG91clNlZ21lbnQsXG4gIHZhbGlkYXRlRXZlbnRzIGFzIHZhbGlkYXRlRXZlbnRzV2l0aG91dExvZyxcbiAgVmlld1BlcmlvZCxcbiAgV2Vla0RheSxcbiAgV2Vla1ZpZXdBbGxEYXlFdmVudFxufSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyBEYXRlQWRhcHRlciB9IGZyb20gJy4uLy4uL2RhdGUtYWRhcHRlcnMvZGF0ZS1hZGFwdGVyJztcblxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlRXZlbnRzID0gKGV2ZW50czogQ2FsZW5kYXJFdmVudFtdKSA9PiB7XG4gIGNvbnN0IHdhcm4gPSAoLi4uYXJncykgPT4gY29uc29sZS53YXJuKCdhbmd1bGFyLWNhbGVuZGFyJywgLi4uYXJncyk7XG4gIHJldHVybiB2YWxpZGF0ZUV2ZW50c1dpdGhvdXRMb2coZXZlbnRzLCB3YXJuKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0luc2lkZShvdXRlcjogQ2xpZW50UmVjdCwgaW5uZXI6IENsaWVudFJlY3QpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICBNYXRoLmZsb29yKG91dGVyLmxlZnQpIDw9IE1hdGguY2VpbChpbm5lci5sZWZ0KSAmJlxuICAgIE1hdGguZmxvb3IoaW5uZXIubGVmdCkgPD0gTWF0aC5jZWlsKG91dGVyLnJpZ2h0KSAmJlxuICAgIE1hdGguZmxvb3Iob3V0ZXIubGVmdCkgPD0gTWF0aC5jZWlsKGlubmVyLnJpZ2h0KSAmJlxuICAgIE1hdGguZmxvb3IoaW5uZXIucmlnaHQpIDw9IE1hdGguY2VpbChvdXRlci5yaWdodCkgJiZcbiAgICBNYXRoLmZsb29yKG91dGVyLnRvcCkgPD0gTWF0aC5jZWlsKGlubmVyLnRvcCkgJiZcbiAgICBNYXRoLmZsb29yKGlubmVyLnRvcCkgPD0gTWF0aC5jZWlsKG91dGVyLmJvdHRvbSkgJiZcbiAgICBNYXRoLmZsb29yKG91dGVyLnRvcCkgPD0gTWF0aC5jZWlsKGlubmVyLmJvdHRvbSkgJiZcbiAgICBNYXRoLmZsb29yKGlubmVyLmJvdHRvbSkgPD0gTWF0aC5jZWlsKG91dGVyLmJvdHRvbSlcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kVG9OZWFyZXN0KGFtb3VudDogbnVtYmVyLCBwcmVjaXNpb246IG51bWJlcikge1xuICByZXR1cm4gTWF0aC5yb3VuZChhbW91bnQgLyBwcmVjaXNpb24pICogcHJlY2lzaW9uO1xufVxuXG5leHBvcnQgY29uc3QgdHJhY2tCeUV2ZW50SWQgPSAoaW5kZXg6IG51bWJlciwgZXZlbnQ6IENhbGVuZGFyRXZlbnQpID0+XG4gIGV2ZW50LmlkID8gZXZlbnQuaWQgOiBldmVudDtcblxuZXhwb3J0IGNvbnN0IHRyYWNrQnlXZWVrRGF5SGVhZGVyRGF0ZSA9IChpbmRleDogbnVtYmVyLCBkYXk6IFdlZWtEYXkpID0+XG4gIGRheS5kYXRlLnRvSVNPU3RyaW5nKCk7XG5cbmV4cG9ydCBjb25zdCB0cmFja0J5SW5kZXggPSAoaW5kZXg6IG51bWJlcikgPT4gaW5kZXg7XG5cbmV4cG9ydCBjb25zdCB0cmFja0J5SG91clNlZ21lbnQgPSAoXG4gIGluZGV4OiBudW1iZXIsXG4gIHNlZ21lbnQ6IERheVZpZXdIb3VyU2VnbWVudFxuKSA9PiBzZWdtZW50LmRhdGUudG9JU09TdHJpbmcoKTtcblxuZXhwb3J0IGNvbnN0IHRyYWNrQnlIb3VyID0gKGluZGV4OiBudW1iZXIsIGhvdXI6IERheVZpZXdIb3VyKSA9PlxuICBob3VyLnNlZ21lbnRzWzBdLmRhdGUudG9JU09TdHJpbmcoKTtcblxuZXhwb3J0IGNvbnN0IHRyYWNrQnlEYXlPcldlZWtFdmVudCA9IChcbiAgaW5kZXg6IG51bWJlcixcbiAgd2Vla0V2ZW50OiBXZWVrVmlld0FsbERheUV2ZW50IHwgRGF5Vmlld0V2ZW50XG4pID0+ICh3ZWVrRXZlbnQuZXZlbnQuaWQgPyB3ZWVrRXZlbnQuZXZlbnQuaWQgOiB3ZWVrRXZlbnQuZXZlbnQpO1xuXG5jb25zdCBNSU5VVEVTX0lOX0hPVVIgPSA2MDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1pbnV0ZXNNb3ZlZChcbiAgbW92ZWRZOiBudW1iZXIsXG4gIGhvdXJTZWdtZW50czogbnVtYmVyLFxuICBob3VyU2VnbWVudEhlaWdodDogbnVtYmVyLFxuICBldmVudFNuYXBTaXplOiBudW1iZXJcbik6IG51bWJlciB7XG4gIGNvbnN0IGRyYWdnZWRJblBpeGVsc1NuYXBTaXplID0gcm91bmRUb05lYXJlc3QoXG4gICAgbW92ZWRZLFxuICAgIGV2ZW50U25hcFNpemUgfHwgaG91clNlZ21lbnRIZWlnaHRcbiAgKTtcbiAgY29uc3QgcGl4ZWxBbW91bnRJbk1pbnV0ZXMgPVxuICAgIE1JTlVURVNfSU5fSE9VUiAvIChob3VyU2VnbWVudHMgKiBob3VyU2VnbWVudEhlaWdodCk7XG4gIHJldHVybiBkcmFnZ2VkSW5QaXhlbHNTbmFwU2l6ZSAqIHBpeGVsQW1vdW50SW5NaW51dGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWluaW11bUV2ZW50SGVpZ2h0SW5NaW51dGVzKFxuICBob3VyU2VnbWVudHM6IG51bWJlcixcbiAgaG91clNlZ21lbnRIZWlnaHQ6IG51bWJlclxuKSB7XG4gIHJldHVybiAoTUlOVVRFU19JTl9IT1VSIC8gKGhvdXJTZWdtZW50cyAqIGhvdXJTZWdtZW50SGVpZ2h0KSkgKiAzMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRFdmVudEVuZChcbiAgZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyLFxuICBldmVudDogQ2FsZW5kYXJFdmVudCxcbiAgbWluaW11bU1pbnV0ZXM6IG51bWJlclxuKTogRGF0ZSB7XG4gIGlmIChldmVudC5lbmQpIHtcbiAgICByZXR1cm4gZXZlbnQuZW5kO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBkYXRlQWRhcHRlci5hZGRNaW51dGVzKGV2ZW50LnN0YXJ0LCBtaW5pbXVtTWludXRlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERheXNXaXRoRXhjbHVzaW9ucyhcbiAgZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyLFxuICBkYXRlOiBEYXRlLFxuICBkYXlzOiBudW1iZXIsXG4gIGV4Y2x1ZGVkOiBudW1iZXJbXVxuKTogRGF0ZSB7XG4gIGxldCBkYXlzQ291bnRlciA9IDA7XG4gIGxldCBkYXlzVG9BZGQgPSAwO1xuICBjb25zdCBjaGFuZ2VEYXlzID0gZGF5cyA8IDAgPyBkYXRlQWRhcHRlci5zdWJEYXlzIDogZGF0ZUFkYXB0ZXIuYWRkRGF5cztcbiAgbGV0IHJlc3VsdCA9IGRhdGU7XG4gIHdoaWxlIChkYXlzVG9BZGQgPD0gTWF0aC5hYnMoZGF5cykpIHtcbiAgICByZXN1bHQgPSBjaGFuZ2VEYXlzKGRhdGUsIGRheXNDb3VudGVyKTtcbiAgICBjb25zdCBkYXkgPSBkYXRlQWRhcHRlci5nZXREYXkocmVzdWx0KTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihkYXkpID09PSAtMSkge1xuICAgICAgZGF5c1RvQWRkKys7XG4gICAgfVxuICAgIGRheXNDb3VudGVyKys7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHJhZ2dlZFdpdGhpblBlcmlvZChcbiAgbmV3U3RhcnQ6IERhdGUsXG4gIG5ld0VuZDogRGF0ZSxcbiAgcGVyaW9kOiBWaWV3UGVyaW9kXG4pOiBib29sZWFuIHtcbiAgY29uc3QgZW5kID0gbmV3RW5kIHx8IG5ld1N0YXJ0O1xuICByZXR1cm4gKFxuICAgIChwZXJpb2Quc3RhcnQgPD0gbmV3U3RhcnQgJiYgbmV3U3RhcnQgPD0gcGVyaW9kLmVuZCkgfHxcbiAgICAocGVyaW9kLnN0YXJ0IDw9IGVuZCAmJiBlbmQgPD0gcGVyaW9kLmVuZClcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZEZpcmVEcm9wcGVkRXZlbnQoXG4gIGRyb3BFdmVudDogeyBkcm9wRGF0YT86IHsgZXZlbnQ/OiBDYWxlbmRhckV2ZW50OyBjYWxlbmRhcklkPzogc3ltYm9sIH0gfSxcbiAgZGF0ZTogRGF0ZSxcbiAgYWxsRGF5OiBib29sZWFuLFxuICBjYWxlbmRhcklkOiBzeW1ib2xcbikge1xuICByZXR1cm4gKFxuICAgIGRyb3BFdmVudC5kcm9wRGF0YSAmJlxuICAgIGRyb3BFdmVudC5kcm9wRGF0YS5ldmVudCAmJlxuICAgIChkcm9wRXZlbnQuZHJvcERhdGEuY2FsZW5kYXJJZCAhPT0gY2FsZW5kYXJJZCB8fFxuICAgICAgKGRyb3BFdmVudC5kcm9wRGF0YS5ldmVudC5hbGxEYXkgJiYgIWFsbERheSkgfHxcbiAgICAgICghZHJvcEV2ZW50LmRyb3BEYXRhLmV2ZW50LmFsbERheSAmJiBhbGxEYXkpKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla1ZpZXdQZXJpb2QoXG4gIGRhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcixcbiAgdmlld0RhdGU6IERhdGUsXG4gIHdlZWtTdGFydHNPbjogbnVtYmVyLFxuICBleGNsdWRlZDogbnVtYmVyW10gPSBbXSxcbiAgZGF5c0luV2Vlaz86IG51bWJlclxuKTogeyB2aWV3U3RhcnQ6IERhdGU7IHZpZXdFbmQ6IERhdGUgfSB7XG4gIGxldCB2aWV3U3RhcnQgPSBkYXlzSW5XZWVrXG4gICAgPyBkYXRlQWRhcHRlci5zdGFydE9mRGF5KHZpZXdEYXRlKVxuICAgIDogZGF0ZUFkYXB0ZXIuc3RhcnRPZldlZWsodmlld0RhdGUsIHsgd2Vla1N0YXJ0c09uIH0pO1xuICBpZiAoZXhjbHVkZWQuaW5kZXhPZihkYXRlQWRhcHRlci5nZXREYXkodmlld1N0YXJ0KSkgPiAtMSkge1xuICAgIHZpZXdTdGFydCA9IGRhdGVBZGFwdGVyLnN1YkRheXMoXG4gICAgICBhZGREYXlzV2l0aEV4Y2x1c2lvbnMoZGF0ZUFkYXB0ZXIsIHZpZXdTdGFydCwgMSwgZXhjbHVkZWQpLFxuICAgICAgMVxuICAgICk7XG4gIH1cbiAgaWYgKGRheXNJbldlZWspIHtcbiAgICBjb25zdCB2aWV3RW5kID0gZGF0ZUFkYXB0ZXIuZW5kT2ZEYXkoXG4gICAgICBhZGREYXlzV2l0aEV4Y2x1c2lvbnMoZGF0ZUFkYXB0ZXIsIHZpZXdTdGFydCwgZGF5c0luV2VlayAtIDEsIGV4Y2x1ZGVkKVxuICAgICk7XG4gICAgcmV0dXJuIHsgdmlld1N0YXJ0LCB2aWV3RW5kIH07XG4gIH0gZWxzZSB7XG4gICAgbGV0IHZpZXdFbmQgPSBkYXRlQWRhcHRlci5lbmRPZldlZWsodmlld0RhdGUsIHsgd2Vla1N0YXJ0c09uIH0pO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGRhdGVBZGFwdGVyLmdldERheSh2aWV3RW5kKSkgPiAtMSkge1xuICAgICAgdmlld0VuZCA9IGRhdGVBZGFwdGVyLmFkZERheXMoXG4gICAgICAgIGFkZERheXNXaXRoRXhjbHVzaW9ucyhkYXRlQWRhcHRlciwgdmlld0VuZCwgLTEsIGV4Y2x1ZGVkKSxcbiAgICAgICAgMVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdmlld1N0YXJ0LCB2aWV3RW5kIH07XG4gIH1cbn1cbiJdfQ==