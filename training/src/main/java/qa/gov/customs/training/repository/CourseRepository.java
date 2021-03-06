package qa.gov.customs.training.repository;



import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import qa.gov.customs.training.entity.TacCourseMaster;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

public interface CourseRepository extends PagingAndSortingRepository<TacCourseMaster, BigDecimal> {

    List<TacCourseMaster> findByActivityId(BigDecimal activityId);

    TacCourseMaster findByCourseId(BigDecimal courseId);

    @Query(value = "select COURSE_NAME from Tac_Course_Master where course_id = " +
            "(select course_id from Tac_Course_Activation where activation_id=:activationId) ", nativeQuery = true)
    String getCourseByActivationId(BigDecimal activationId);

    @Query(value = "select COURSE_ID,COURSE_NAME,ACTIVE_FLAG from Tac_Course_Master where SUBCOURSE_FLAG=1", nativeQuery = true)
    List<Object[]> findCourseBySubcourseFlag();

    //and active_flag=1
    @Query(value = "select * from Tac_Course_Master where lower(course_name) LIKE %:courseName%  order by course_id", nativeQuery = true)
    List<TacCourseMaster> findByCourseName(String courseName, Pageable firstPageWithThreeElements);

    List<TacCourseMaster> findByCourseName(String courseName);

    //and active_flag=1
    @Query(value = "select COURSE_ID,COURSE_NAME,ACTIVE_FLAG from Tac_Course_Master where lower(course_name) LIKE %:courseName%  order by course_id", nativeQuery = true)
    List<Object[]> findIdAndNameByCourseName(String courseName);

    @Query(value = "select a.course_id,a.course_name,a.active_flag from Tac_Course_Master a join Tac_Activity_Course_Link b on a.course_Id=b.course_Id " +
            "join tac_activity c on b.activity_id=c.activity_id and c.activity_name LIKE  %:activityName% " +
            "order by a.course_Id", nativeQuery = true)
    List<Object[]> findCourseUnderActivity(String activityName);

    @Query(value = "select a.course_id,a.course_name,a.active_flag from Tac_Course_Master a join Tac_Activity_Course_Link b on a.course_Id=b.course_Id " +
            "join tac_activity c on b.activity_id=c.activity_id and c.activity_name LIKE  %:activityName% and lower(a.course_name) LIKE %:courseName% " +
            "order by a.course_Id", nativeQuery = true)
    List<Object[]> findIdAndNameByCourseNameAndActivityName(String courseName, String activityName);

    @Query(value = "select COURSE_ID,COURSE_NAME from Tac_Course_Master where active_flag=1 order by course_id", nativeQuery = true)
    List<Object[]> findAllCourses();

    @Query(value = "select COURSE_ID,COURSE_NAME,NUMBEROFHOURS,CATEGORY_ID from Tac_Course_Master where active_flag=1 order by course_id", nativeQuery = true)
    List<Object[]> findAllCoursesWithHoursAndCategoryId();

    @Modifying
    @Query(value = "update Tac_Course_Master  set active_flag=:flag   where  course_id=:courseId", nativeQuery = true)
    void enableOrDisableCourse(BigDecimal courseId, BigDecimal flag);

    @Query(value = "select a.course_name,b.course_date,b.end_date,c.activation_id,c.seat_capacity from tac_course_master a join tac_course_date b on a.course_id in " +
            "(SELECT b.course_id FROM Tac_course_date b WHERE b.course_date<=to_date(sysdate,'DD-MM-YY') and b.end_date>=to_date(sysdate,'DD-MM-YY') and b.status=1) " +
            "join tac_course_activation c on c.date_id=b.date_id and c.course_id=b.course_id " +
            "where b.course_date<=to_date(sysdate,'DD-MM-YY') and b.end_date>=to_date(sysdate,'DD-MM-YY') and b.status=1 and a.course_id=b.course_id ", nativeQuery = true)
    List<Object[]> getAllCurrentCourses();


    @Query(value = "select a.course_name,b.course_date,b.end_date,c.activation_id,c.seat_capacity from tac_course_master a join tac_course_date b on a.course_id in " +
            "(SELECT b.course_id FROM Tac_course_date b WHERE to_date(sysdate,'DD-MM-YY')<b.course_date and status=1) " +
            "join tac_course_activation c on c.date_id=b.date_id and c.course_id=b.course_id " +
            "where to_date(sysdate,'DD-MM-YY')<b.course_date and b.status=1 and a.course_id=b.course_id", nativeQuery = true)
    List<Object[]> getAllFutureCourses();

    @Query(value = "select a.course_name,b.course_date,b.end_date,c.activation_id,c.seat_capacity from tac_course_master a join tac_course_date b on a.course_id in " +
            "(SELECT b.course_id FROM Tac_course_date b WHERE b.course_date>:nextYear and status=1) " +
            "join tac_course_activation c on c.date_id=b.date_id and c.course_id=b.course_id " +
            "where b.course_date>:nextYear and b.status=1 and a.course_id=b.course_id", nativeQuery = true)
    List<Object[]> getCourseForNextYear(Date nextYear);

    @Query(value = "select a.course_name,b.course_date,b.end_date,c.activation_id,c.seat_capacity from tac_course_master a join tac_course_date b on a.course_id in " +
            "(SELECT b.course_id FROM Tac_course_date b WHERE b.course_date>=:nextMonth and b.course_date<:lastMnth and status=1) " +
            "join tac_course_activation c on c.date_id=b.date_id and c.course_id=b.course_id " +
            "where b.course_date>=:nextMonth and b.course_date<:lastMnth and b.status=1 and a.course_id=b.course_id", nativeQuery = true)
    List<Object[]> getCourseForMonth(Date nextMonth, Date lastMnth);

    @Query(value = "select a.course_name,b.course_date,b.end_date,c.activation_id,c.seat_capacity from tac_course_master a join tac_course_date b on a.course_id in " +
            "(SELECT b.course_id FROM Tac_course_date b WHERE b.course_date>:weekend and b.course_date<=:nextWeek and status=1) " +
            "join tac_course_activation c on c.date_id=b.date_id and c.course_id=b.course_id " +
            "where b.course_date>:weekend and b.course_date<=:nextWeek and b.status=1 and a.course_id=b.course_id", nativeQuery = true)
    List<Object[]> getCourseForNextWeek(Date weekend, Date nextWeek);


    @Query(value = "select a.course_name,b.course_date,b.end_date,c.activation_id,c.seat_capacity  from tac_course_master a join tac_course_date b on a.course_id in " +
            "(SELECT b.course_id FROM Tac_course_date b WHERE to_date(sysdate,'DD-MM-YY')>b.end_date and status=1) " +
            "join tac_course_activation c on c.date_id=b.date_id and c.course_id=b.course_id " +
            "where to_date(sysdate,'DD-MM-YY')>b.end_date and b.status=1 and a.course_id=b.course_id", nativeQuery = true)
    List<Object[]> getAllPreviousCourses();

//    @Query(value = "select a.course_name,b.course_date,b.end_date,c.activation_id from tac_course_master a join tac_course_date b on a.course_id in " +
//            " (SELECT b.course_id FROM Tac_course_date b WHERE to_date(sysdate,'DD-MM-YY')<b.course_date and status=1) " +
//            " join tac_course_activation c on c.date_id=b.date_id and c.course_id=b.course_id " +
//            " where to_date(sysdate,'DD-MM-YY')<b.course_date and b.status=1 and a.course_id=b.course_id " +
//            " and lower(a.course_name) LIKE %:courseName%", nativeQuery = true)

    @Query(value = "select a.course_name,c.course_date,c.end_date,b.activation_id "+
            "from tac_course_master a,tac_course_activation b, tac_course_date c "+
            "where a.course_id=b.course_id "+
            "and b.course_id=c.course_id "+
            "and b.date_id=c.date_id "+
            "and c.status=1 "+
            "and c.course_date>to_date(sysdate,'DD-MM-YY') "+
            "and a.course_id in (select course_id from tac_jobcard tjob,tac_jobcard_course_link jlink where tjob.jobcard_no=jlink.jobcard_no "+
            "and jlink.course_id=a.course_id "+
            "and job_grade=(select pslevel from user_sap_ws_mini where legacycode=:jobId "+
            "and run_date=(select max(run_date) from USER1_SAP_WS_MINI where legacycode=:jobId)) "+
            "and job_title =(select job from USER1_SAP_WS_MINI  where legacycode=:jobId "+
            "and run_date=(select max(run_date) from USER1_SAP_WS_MINI where legacycode=:jobId))) ", nativeQuery = true)
    List<Object[]> searchAllFutureCourses(String jobId);

    @Query(value = "select a.course_name,c.course_date,c.end_date,b.activation_id "+
            "from tac_course_master a,tac_course_activation b, tac_course_date c "+
            "where a.course_id=b.course_id "+
            "and b.course_id=c.course_id "+
            "and b.date_id=c.date_id "+
            "and c.status=1 "+
            "and c.course_date>to_date(sysdate,'DD-MM-YY') "+
            " and a.course_name like %:courseName% " +
            "and a.course_id in (select course_id from tac_jobcard tjob,tac_jobcard_course_link jlink where tjob.jobcard_no=jlink.jobcard_no "+
            "and jlink.course_id=a.course_id "+
            "and job_grade=(select pslevel from user_sap_ws_mini where legacycode=:jobId "+
            "and run_date=(select max(run_date) from USER1_SAP_WS_MINI where legacycode=:jobId)) "+
            "and job_title =(select job from USER1_SAP_WS_MINI  where legacycode=:jobId "+
            "and run_date=(select max(run_date) from USER1_SAP_WS_MINI where legacycode=:jobId))) ", nativeQuery = true)
    List<Object[]>  searchAllFutureCoursesWithCourseNameAndJid(String courseName,String jobId);


    @Query(value = "select b.course_date,b.end_date from tac_course_activation a  RIGHT JOIN tac_course_date b on a.date_id=b.date_id where a.activation_id=:activationId", nativeQuery = true)
    List<Object[]> getDatesForActivation(BigDecimal activationId);

    @Query(value = "select a.course_name,b.course_date,b.end_date,c.activation_id,d.course_status from tac_course_master a " +
            "      join tac_course_date b on a.course_id in " +
            "      (SELECT b.course_id FROM Tac_course_date b WHERE to_date(sysdate,'DD-MM-YY')>b.end_date and status=1) " +
            "      join tac_course_activation c on c.date_id=b.date_id and c.course_id=b.course_id " +
            "      join tac_course_attendees d on  c.activation_id=d.activation_id and d.job_id=:jobId and d.course_status is not null " +
            "      where to_date(sysdate,'DD-MM-YY')>b.end_date and b.status=1 and a.course_id=b.course_id " +
            "       and d.status=1", nativeQuery = true)
    List<Object[]> getPreviousAttendedCourses(String jobId);

    @Query(value = "select a.course_name,b.course_date,b.end_date,c.activation_id from tac_course_master a join tac_course_date b on a.course_id in " +
            "(SELECT b.course_id FROM Tac_course_date b WHERE b.course_date<=to_date(sysdate,'DD-MM-YY') and b.end_date>=to_date(sysdate,'DD-MM-YY') and b.status=1) " +
            "join tac_course_activation c on c.date_id=b.date_id and c.course_id=b.course_id " +
            "join tac_course_attendees d on  c.activation_id=d.activation_id and d.job_id=:jobId and d.course_status is  null " +
            "where b.course_date<=to_date(sysdate,'DD-MM-YY') and b.end_date>=to_date(sysdate,'DD-MM-YY') and b.status=1 and a.course_id=b.course_id " +
            "and d.status=1", nativeQuery = true)
    List<Object[]> getCurrentlyAttendingCourses(String jobId);


    @Query(value = "select a.course_name,b.course_date,b.end_date,c.activation_id from tac_course_master a join tac_course_date b on a.course_id in " +
            "(SELECT b.course_id FROM Tac_course_date b WHERE to_date(sysdate,'DD-MM-YY')<b.course_date and status=1) " +
            "join tac_course_activation c on c.date_id=b.date_id and c.course_id=b.course_id " +
            "join tac_course_attendees d on  c.activation_id=d.activation_id and d.job_id=:jobId and d.course_status is  null " +
            "where to_date(sysdate,'DD-MM-YY')<b.course_date and b.status=1 and a.course_id=b.course_id " +
            "and d.status=1", nativeQuery = true)
    List<Object[]> getApprovedCourse(String jobId);

    @Query(value = "select a.course_name,b.course_date,b.end_date,c.activation_id from tac_course_master a join tac_course_date b on a.course_id in" +
            "            (SELECT b.course_id FROM Tac_course_date b WHERE to_date(sysdate,'DD-MM-YY')<b.course_date and status=1)" +
            "            join tac_course_activation c on c.date_id=b.date_id and c.course_id=b.course_id" +
            "            where to_date(sysdate,'DD-MM-YY')<b.course_date and b.status=1 and a.course_id=b.course_id and c.coordinator_id=:jobId", nativeQuery = true)
    List<Object[]> getCoursesForCoordinator(String jobId);

    @Query(value = "select a.course_name,b.course_date,b.end_date,c.activation_id from tac_course_master a join tac_course_date b on a.course_id in " +
            "(SELECT b.course_id FROM Tac_course_date b WHERE to_date(sysdate,'DD-MM-YY')<b.course_date and status=1)" +
            "join tac_course_activation c on c.date_id=b.date_id and c.course_id=b.course_id " +
            "join tac_course_instructor d on c.activation_id=d.activation_id " +
            "join tac_instructor_master e on d.instructor_id=e.instructor_id and e.job_id=:jobId " +
            "where to_date(sysdate,'DD-MM-YY')<b.course_date and b.status=1 and a.course_id=b.course_id", nativeQuery = true)
    List<Object[]> getInstructorCourses(String jobId);

    @Modifying
    @Transactional
    @Query(value = "insert into  Tac_Activity_Course_Link(ACTIVITY_ID,COURSE_ID) values(:activityId,:courseId)", nativeQuery = true)
    void updateCourseLinkTable(BigDecimal activityId,BigDecimal courseId);


}


