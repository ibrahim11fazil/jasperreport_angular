package qa.gov.customs.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import qa.gov.customs.training.entity.TacCourseAttendees;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.List;


@Repository
public interface CourseAttendeesRepository extends JpaRepository<TacCourseAttendees, BigDecimal> {

    @Query(value = "select ACTIVATION_ID,JOB_ID,REMARK from TAC_COURSE_ATTENDEES where ACTIVATION_ID=:activationId and  JOB_ID=:jobId " +
            "and status=1", nativeQuery = true)
    List<Object[]> nativefindAttendeesWithJobIdAndActionId(@Param("activationId") BigInteger activationId, @Param("jobId") String jobId);
//
//    @Modifying
//    @Transactional
//    @Query(value="insert into TAC_COURSE_ATTENDEES(ACTIVATION_ID,JOB_ID,REMARK) values(:activationId,:jobId,:remark)",nativeQuery=true)
//    void insertAttendeesFromWorkflow(@Param("activationId") BigInteger activationId ,@Param("jobId")  String jobId,@Param("remark")  String remark);

    @Modifying
    @Transactional
    @Query(value = "update  TAC_COURSE_ATTENDEES set course_status=:courseStatus where attendees_id=:attendeesId", nativeQuery = true)
    void updateCourseStatus(BigDecimal attendeesId, BigDecimal courseStatus);





    @Modifying
    @Query(value = "delete from TAC_COURSE_ATTENDEES where JOB_ID=:jobId AND ACTIVATION_ID=:activationId", nativeQuery = true)
    void deleteAttendeeByJobIdAndActivationId(String jobId,BigInteger activationId);


    @Query(value = "select count(*) from TAC_COURSE_ATTENDEES where activation_Id=:activationId and status=1", nativeQuery = true)
    BigDecimal getcountPartticipant(BigDecimal activationId);
    @Query(value = "select count(*) from TAC_COURSE_ATTENDEES where job_id=:jobId and activation_Id=:activationId and status=1", nativeQuery = true)
    BigDecimal getByJobIdAndActivationId(String jobId,BigDecimal activationId);

    @Modifying
    @Transactional
    @Query(value = "update  TAC_COURSE_ATTENDEES set STATUS=0,REMARK=:remark where JOB_ID=:jobId and ACTIVATION_ID=:activationId", nativeQuery = true)
    void disableAttendee(String jobId,BigDecimal activationId,String remark);

    // List<TacCourseAttendees> findByActivationId(BigDecimal activationId);

}
