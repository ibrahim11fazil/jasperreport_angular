package qa.gov.customs.training.service;

import qa.gov.customs.training.entity.TacCourseActivation;
import qa.gov.customs.training.entity.TacCourseAttendence;
import qa.gov.customs.training.models.EmployeeData;

import java.util.List;
import java.util.Set;

public interface AttendanceService {

   Set<EmployeeData> getEmployeeDataForAttendance(TacCourseActivation activation);
   List<TacCourseAttendence> markInitialAttendance(List<TacCourseAttendence> attendance);
}
