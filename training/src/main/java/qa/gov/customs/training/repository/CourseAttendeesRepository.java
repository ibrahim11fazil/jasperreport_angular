package qa.gov.customs.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import qa.gov.customs.training.entity.TacCourseAttendees;
import qa.gov.customs.training.entity.TacCourseAudience;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.List;


@Repository
public interface CourseAttendeesRepository extends JpaRepository<TacCourseAttendees, BigDecimal> {

    @Query(value="select ACTIVATION_ID,JOB_ID,REMARK from TAC_COURSE_ATTENDEES where ACTIVATION_ID=:activationId and  JOB_ID=:jobId",nativeQuery=true)
    List<Object[]> findAttendeesWithJobIdAndActionId(@Param("activationId") BigInteger activationId ,@Param("jobId")  String jobId);

    @Modifying
    @Transactional
    @Query(value="insert into TAC_COURSE_ATTENDEES(ACTIVATION_ID,JOB_ID,REMARK) values(:activationId,:jobId,:remark)",nativeQuery=true)
    void insertAttendeesFromWorkflow(@Param("activationId") BigInteger activationId ,@Param("jobId")  String jobId,@Param("remark")  String remark);
}
