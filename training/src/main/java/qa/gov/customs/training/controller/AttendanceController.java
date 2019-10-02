package qa.gov.customs.training.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.training.entity.TacCourseActivation;
import qa.gov.customs.training.entity.TacCourseAttendence;
import qa.gov.customs.training.models.CourseManagement;
import qa.gov.customs.training.models.EmployeeData;
import qa.gov.customs.training.models.FindAttendance;
import qa.gov.customs.training.service.AttendanceService;
import qa.gov.customs.training.service.CourseService;
import qa.gov.customs.training.utils.Constants;
import qa.gov.customs.training.utils.MessageUtil;
import qa.gov.customs.training.utils.models.ResponseType;
import java.math.BigDecimal;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.*;

@RestController
public class AttendanceController {

    @Autowired
    AttendanceService attendanceService;


    private static final Logger logger = LoggerFactory.getLogger(AttendanceController.class);


    @PreAuthorize("hasAnyAuthority('get_employee_data_attendance')")
    @PostMapping("/get-employee-data-attendance")

    public ResponseType getEmployeeDataForAttendance(@RequestBody TacCourseActivation activation) {

        Set<EmployeeData> empData = attendanceService.getEmployeeDataForAttendance(activation);
        ResponseType response = new ResponseType(Constants.CREATED, MessageUtil.FOUND, true,
                empData);
        return response;

    }
    @PreAuthorize("hasAnyAuthority('mark_initial_attendance')")
    @PostMapping("/mark-initial-attendance")
    public ResponseType markInitialAttendance(@RequestBody List<TacCourseAttendence> attendance) {
        List<TacCourseAttendence> attendanceData=new ArrayList<>();

        for(TacCourseAttendence attendanceList:attendance) {
            TacCourseAttendence attendancePresent = attendanceService.checkIfAlreadyMarked(attendanceList, new Date());
            if (attendancePresent == null) {



                TacCourseAttendence attendanceUpdated = attendanceService.markAttendance(attendanceList);
                attendanceData.add(attendanceUpdated);

            }
        }

        ResponseType response = new ResponseType(Constants.CREATED, MessageUtil.FOUND, true,
                attendanceData);
        return response;

    }
    @PreAuthorize("hasAnyAuthority('mark_attendance')")
    @PostMapping("/mark-attendance")
    public ResponseType markAttendance(@RequestBody List<TacCourseAttendence> attendance) {
        List<TacCourseAttendence> attendanceData=new ArrayList<>();

        for(TacCourseAttendence attendanceList:attendance) {
            TacCourseAttendence attendancePresent = attendanceService.checkIfAlreadyMarked(attendanceList, new Date());
            if (attendancePresent != null) {
                attendancePresent.setAttendanceFlag(attendanceList.getAttendanceFlag());
                TacCourseAttendence attendanceUpdated = attendanceService.markAttendance(attendancePresent);
                attendanceData.add(attendanceUpdated);
            }
        }
        ResponseType response = new ResponseType(Constants.CREATED, MessageUtil.FOUND, true,
                attendanceData);
        return response;

    }
    @PreAuthorize("hasAnyAuthority('attendance_percentage')")
    @PostMapping("/attendance-percentage")
    public int attendancePercentage(@RequestBody FindAttendance getAttendance)
    {


        int workDays=attendanceService.getWorkingDays(getAttendance);

//        Calendar startCal = Calendar.getInstance();
//        startCal.setTime(getAttendance.getCourse_date());
//
//        Calendar endCal = Calendar.getInstance();
//        endCal.setTime(getAttendance.getEnd_date());
//
//        do {
//            if (startCal.get(Calendar.DAY_OF_WEEK) != Calendar.FRIDAY && startCal.get(Calendar.DAY_OF_WEEK) != Calendar.SATURDAY) {
//                ++workDays;
//            }
//            startCal.add(Calendar.DAY_OF_MONTH, 1);
//        } while (startCal.getTimeInMillis() <= endCal.getTimeInMillis());

//        ResponseType response = new ResponseType(Constants.CREATED, MessageUtil.FOUND, true,
//                workDays);
        return workDays;

    }


    @PreAuthorize("hasAnyAuthority('get_course_completion')")
    @PostMapping("/get-course-completion")

    public ResponseType getCourseCompletionAttendance(@RequestBody FindAttendance getAttendance)
    {
        Set<EmployeeData> empData = attendanceService.getCourseCompletionAttendance(getAttendance);


        ResponseType response = new ResponseType(Constants.CREATED, MessageUtil.FOUND, true,
                empData);
        return response;
    }

    @PreAuthorize("hasAnyAuthority('get_course_filter')")
    @PostMapping("/get-course-filter")
    public ResponseType getCourseNextYear(@RequestBody BigDecimal courseTime)
    {

        List<CourseManagement> courseManagement=null;

        courseManagement=attendanceService.getCourseFilter(courseTime);
        if(courseManagement!=null || !courseManagement.isEmpty()) {

            ResponseType response = new ResponseType(Constants.SUCCESS, "", true, courseManagement);
            return response;
        }
        else
        {
            ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, "", false, null);
            return response;
        }

    }


}
