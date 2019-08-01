package qa.gov.customs.training.service;

import qa.gov.customs.training.entity.TacCourseActivation;
import qa.gov.customs.training.models.EmployeeData;

import java.util.Set;

public interface AttendanceService {

   Set<EmployeeData> getEmployeeDataForAttendance(TacCourseActivation activation);
}
