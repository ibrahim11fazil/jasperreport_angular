package qa.gov.customs.training.service;

import qa.gov.customs.training.entity.TacActivity;
import qa.gov.customs.training.entity.TacCourseMaster;

import java.math.BigInteger;
import java.util.List;

public interface CourseService {
    TacCourseMaster createAndUpdateCourse(TacCourseMaster activity);
    TacCourseMaster disableCourse(TacCourseMaster activity);
    TacCourseMaster linkCourseWithActivity(TacCourseMaster activity);
    List<TacCourseMaster> listCourses();
    List<TacCourseMaster> listCourses(TacCourseMaster searchCriteria);
    BigInteger countCourses();
    BigInteger disableCountCourses();
    BigInteger enabledCountCourses();
    TacCourseMaster getCourseById(BigInteger integer);
}
