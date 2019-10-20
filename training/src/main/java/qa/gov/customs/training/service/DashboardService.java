package qa.gov.customs.training.service;

import qa.gov.customs.training.models.CourseManagement;

import java.util.List;

public interface DashboardService {

    List<CourseManagement> getPreviousCourse(String jobId);

    List<CourseManagement> getCurrentAttendingCourse(String jobId);

    List<CourseManagement> getApprovedCourse(String jobId);
}
