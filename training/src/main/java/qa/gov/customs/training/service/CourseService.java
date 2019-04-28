package qa.gov.customs.training.service;


import qa.gov.customs.training.entity.TacCourseMaster;
import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

public interface CourseService {
    TacCourseMaster createAndUpdateCourse(TacCourseMaster course);
    TacCourseMaster disableCourse(TacCourseMaster activity);
    TacCourseMaster linkCourseWithActivity(TacCourseMaster activity);
    List<TacCourseMaster> listCourses();
    List<TacCourseMaster> listCourses(TacCourseMaster searchCriteria);
    BigInteger countCourses();
    BigInteger disableCountCourses();
    BigInteger enabledCountCourses();
   Optional<TacCourseMaster> getCourseById(TacCourseMaster courses);
}
