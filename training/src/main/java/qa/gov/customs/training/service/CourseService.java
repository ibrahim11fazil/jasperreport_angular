package qa.gov.customs.training.service;


import qa.gov.customs.training.entity.*;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.data.domain.Pageable;
import qa.gov.customs.training.models.Course;

public interface CourseService {
    TacCourseMaster createAndUpdateCourse(TacCourseMaster course);

    BigDecimal enableOrDisableCourse(BigDecimal courseId, BigDecimal flag);
    TacCourseMaster linkCourseWithActivity(TacCourseMaster linkCourse);
    TacCourseMaster activateCourse(TacCourseMaster course);
    List<Course> listCourses();
    //List<TacCourseMaster> listCourses(Pageable firstPageWithElements);  
    //List<TacCourseMaster> searchCourses(TacCourseMaster searchCriteria,Pageable firstPageWithElements);
    List<Course> searchCourses(TacCourseMaster searchCriteria, Pageable firstPageWithElements);
    long countCourses(); 
    BigInteger disableCountCourses();
    TacCourseMaster findById(BigDecimal id);
    BigInteger enabledCountCourses();
    Optional<TacCourseMaster> getCourseById(TacCourseMaster courses);
    Set<TacCourseDate> getCourseDatesByIdAndActivity(TacCourseMaster courses);
    Set<TacCourseDate> findAllDatesByCourseIdAndActivityId(BigDecimal courseId, BigDecimal activityId);
    List<TacCourseMaster> getCourseByCourseName(TacCourseMaster course);
    List<TacCourseCategory> findCourseCategories();
    List<TacCourseTargetGroup> findCourseTargetGroups();
    TacCourseGuidelines createGuideline(TacCourseGuidelines guideline);
    void createOutcome(TacCourseOutcome outcome);
    void createAudience(TacCourseAudience audience);
    List<TacCoursePrerequisites>   getAllCoursePrerequisites();
    List<TacCourseLocation>    getAllCourseLocation();

    TacCourseActivation saveCourseActivation(TacCourseActivation courseActivation);
    List<TacCourseRoom> getCourseRoom(TacCourseLocation location);
    List<Course> getAllMainCourse();

    List<TacCommSubjects> getAllSubjects();
    List<TacCommQualifications> getAllQualifications();
    TacCourseActivation getCourseActivationByCourseId(TacCourseMaster courseMaster);
    List<TacCourseActivation>  listactivations(String name, int page, int limit);
    TacCourseLocation getCourseroom(BigDecimal locationId);
    TacCourseDate getCourseDate(BigDecimal courseId);

 TacCourseActivation getCourseActivationByActivationId(TacCourseActivation courseActivation);
}
