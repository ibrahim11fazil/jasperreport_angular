package qa.gov.customs.training.service;

import qa.gov.customs.training.entity.TacCourseActivation;
import qa.gov.customs.training.entity.TacCourseAttendence;
import qa.gov.customs.training.models.EmployeeData;
import qa.gov.customs.training.models.FindAttendance;

import java.util.Date;
import java.util.List;
import java.util.Set;

public interface AttendanceService {

   Set<EmployeeData> getEmployeeDataForAttendance(TacCourseActivation activation);
   TacCourseAttendence checkIfAlreadyMarked( TacCourseAttendence attendance,Date date);
   TacCourseAttendence markAttendance(TacCourseAttendence attendance);
   Set<EmployeeData>  getCourseCompletionAttendance(FindAttendance getAttendance);
   int getWorkingDays(FindAttendance getAttendance);
}
