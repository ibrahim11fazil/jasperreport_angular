package qa.gov.customs.training.service;


import qa.gov.customs.training.entity.TacCourseMaster;
import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Pageable;

public interface CourseService {
    TacCourseMaster createAndUpdateCourse(TacCourseMaster course);
    TacCourseMaster disableCourse(TacCourseMaster activity);
    TacCourseMaster linkCourseWithActivity(TacCourseMaster linkCourse);

    TacCourseMaster activateCourse(TacCourseMaster course);
    List<TacCourseMaster> listCourses();
   // List<TacCourseMaster> listCourses(Pageable firstPageWithElements);  
    List<TacCourseMaster> searchCourses(TacCourseMaster searchCriteria,Pageable firstPageWithElements);
    long countCourses(); 
    BigInteger disableCountCourses();
    TacCourseMaster findById(TacCourseMaster course);
    BigInteger enabledCountCourses();
   Optional<TacCourseMaster> getCourseById(TacCourseMaster courses);
   List<TacCourseMaster> getCourseByCourseName(TacCourseMaster course);


}
