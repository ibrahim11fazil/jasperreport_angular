package qa.gov.customs.training.service;


import qa.gov.customs.training.entity.*;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import qa.gov.customs.training.models.Course;

public interface CourseService {
    TacCourseMaster createAndUpdateCourse(TacCourseMaster course);
    TacCourseMaster disableCourse(TacCourseMaster activity);
    TacCourseMaster linkCourseWithActivity(TacCourseMaster linkCourse);
    TacCourseMaster activateCourse(TacCourseMaster course);
    Slice<TacCourseMaster> listCourses();
   // List<TacCourseMaster> listCourses(Pageable firstPageWithElements);  
    //List<TacCourseMaster> searchCourses(TacCourseMaster searchCriteria,Pageable firstPageWithElements);
    List<Course> searchCourses(TacCourseMaster searchCriteria, Pageable firstPageWithElements);
    long countCourses(); 
    BigInteger disableCountCourses();
    TacCourseMaster findById(BigDecimal id);
    BigInteger enabledCountCourses();
    Optional<TacCourseMaster> getCourseById(TacCourseMaster courses);
    List<TacCourseMaster> getCourseByCourseName(TacCourseMaster course);
    List<TacCourseCategory> findCourseCategories();
    List<TacCourseTargetGroup> findCourseTargetGroups();
    TacCourseGuidelines createGuideline(TacCourseGuidelines guideline);
    void createOutcome(TacCourseOutcome outcome);
    void createAudience(TacCourseAudience audience);
}
