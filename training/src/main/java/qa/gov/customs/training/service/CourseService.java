package qa.gov.customs.training.service;


import qa.gov.customs.training.entity.TacCourseMaster;
import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Pageable;

public interface CourseService {
    TacCourseMaster createAndUpdateCourse(TacCourseMaster course);//done
    TacCourseMaster disableCourse(TacCourseMaster activity);//done
    TacCourseMaster linkCourseWithActivity(TacCourseMaster course);

    TacCourseMaster activateCourse(TacCourseMaster course);
    List<TacCourseMaster> listCourses();//ajna
   // List<TacCourseMaster> listCourses(Pageable firstPageWithElements);  
    List<TacCourseMaster> searchCourses(TacCourseMaster searchCriteria,Pageable firstPageWithElements);
    long countCourses();//ajna 
    BigInteger disableCountCourses();
    Optional<TacCourseMaster> findById(TacCourseMaster course);
    BigInteger enabledCountCourses();
   Optional<TacCourseMaster> getCourseById(TacCourseMaster courses);//done

}
