package qa.gov.customs.training.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.training.models.CourseManagement;
import qa.gov.customs.training.security.CustomPrincipal;
import qa.gov.customs.training.service.DashboardService;
import qa.gov.customs.training.utils.Constants;
import qa.gov.customs.training.utils.MessageUtil;
import qa.gov.customs.training.utils.models.ResponseType;

import java.util.List;
@RestController
public class DashboardController {

    @Autowired
    DashboardService dashboardService;

    @PreAuthorize("hasAnyAuthority('get_attended_courses')")
    @PostMapping("/get-attended-courses")
    public ResponseType attendedCourses(@AuthenticationPrincipal CustomPrincipal principal) {

        List<CourseManagement> previousCourse=dashboardService.getPreviousCourse(principal.getJid());
        if(previousCourse!=null && previousCourse.size()>0) {

             ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true, previousCourse);
            return response;
        }
        else
        {
            ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.FAILED, false,
                    null);
            return response;
        }
    }
    @PreAuthorize("hasAnyAuthority('currently_attending_courses')")
    @PostMapping("/currently-attending-courses")
    public ResponseType currentlyAttendingCourses(@AuthenticationPrincipal CustomPrincipal principal) {

        List<CourseManagement> currentCourse=dashboardService.getCurrentAttendingCourse(principal.getJid());
        if(currentCourse!=null && currentCourse.size()>0) {

            ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true, currentCourse);
            return response;
        }
        else
        {
            ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.FAILED, false,
                    null);
            return response;
        }
    }


    @PreAuthorize("hasAnyAuthority('get_approved_courses')")
    @PostMapping("/get-approved-courses")
    public ResponseType getApprovedCourses(@AuthenticationPrincipal CustomPrincipal principal) {

        List<CourseManagement> approvedCourses=dashboardService.getApprovedCourse(principal.getJid());
        if(approvedCourses!=null && approvedCourses.size()>0) {

            ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true, approvedCourses);
            return response;
        }
        else
        {
            ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.FAILED, false,
                    null);
            return response;
        }
    }
}
