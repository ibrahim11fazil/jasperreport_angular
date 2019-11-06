package qa.gov.customs.training.service;


import org.springframework.data.domain.Pageable;
import qa.gov.customs.training.entity.*;
import qa.gov.customs.training.models.*;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface CourseService {
    TacCourseMaster createAndUpdateCourse(TacCourseMaster course);

    BigDecimal enableOrDisableCourse(BigDecimal courseId, BigDecimal flag);

    TacCourseMaster linkCourseWithActivity(TacCourseMaster linkCourse);

    TacCourseMaster activateCourse(TacCourseMaster course);

    List<Course> listCourses();

    List<Course> listCoursesWithHourAndCategory();

    //List<TacCourseMaster> listCourses(Pageable firstPageWithElements);
    //List<TacCourseMaster> searchCourses(TacCourseMaster searchCriteria,Pageable firstPageWithElements);
    List<Course> searchCourses(TacCourseMaster searchCriteria, Pageable firstPageWithElements);

    long countCourses();

    BigInteger disableCountCourses();

    TacCourseMaster findById(BigDecimal id);
    List<TacCourseMaster> findByCourseName(String courseName);

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

    List<TacCoursePrerequisites> getAllCoursePrerequisites();

    List<LocationData> getAllCourseLocation();

    TacCourseActivation saveCourseActivation(TacCourseActivation courseActivation);

    List<TacCourseRoom> getCourseRoom(TacCourseLocation location);

    List<Course> getAllMainCourse();

    List<TacCommSubjects> getAllSubjects();

    List<TacCommQualifications> getAllQualifications();


    TacCourseActivation getCourseActivationByCourseId(TacCourseMaster courseMaster);

    List<TacCourseActivation> listactivations(String name, int page, int limit);

    TacCourseLocation getCourseroom(BigDecimal locationId);

    TacCourseDate getCourseDate(BigDecimal courseId);

    ActivationData getCourseActivationByActivationId(TacCourseActivation courseActivation);

    List<CourseManagement> getAllCurrentCourses();

    List<CourseManagement> getAllFutureCourses();

    List<CourseManagement> getAllPreviousCourses();

    List<CourseManagement> searchAllFutureCourses(String courseName);

    void setStatusOfDate(TacCourseDate courseDate);

    ActivationDate getDatesForActivation(BigDecimal activationId);

    TacCourseAttendees insertAttendeesFromWorkflow(BigInteger activationId, String jobId, String remark);

    List<AttendeesDetails> findAttendeesWithJobIdAndActionId(BigInteger activationId, String jobId);

    List<CourseManagement> getCoordinatorCourses(String jobId);

    List<CourseManagement> getInstructorCourses(String jobId);
    void updateCourseActivityLink(BigDecimal activityId,BigDecimal courseId);
    SeatCapacity getSeatCapacity(SeatCapacity capacity);
}
