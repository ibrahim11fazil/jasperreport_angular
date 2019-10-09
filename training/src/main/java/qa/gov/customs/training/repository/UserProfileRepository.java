package qa.gov.customs.training.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import qa.gov.customs.training.entity.Dummy;
import qa.gov.customs.training.entity.TacCourseDate;
import qa.gov.customs.training.models.UserProfileModel;
import qa.gov.customs.training.models.UserRequestModel;

import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;

@Repository
public interface UserProfileRepository extends JpaRepository <Dummy, String>
{

   @Query(value=" select a.jobcard_no,a.job_grade,a.admin_hours,a.specialised_hours,a.workshop_hours, " +
           " b.course_id,c.course_name,c.numberofhours,(select description from tac_course_category where category_id=c.category_id) as category, " +
            " a.status_flag,b.mandatory_flag " +
            " from tac_jobcard a, tac_jobcard_course_link b,tac_course_master c " +
            " where a.jobcard_no=b.jobcard_no " +
            " and b.course_id=c.course_id " +
            " and job_grade=(select pslevel from user_sap_ws_mini where legacycode=:jobId " +
            " and run_date=(select max(run_date) from USER1_SAP_WS_MINI where legacycode=:jobId)) ", nativeQuery = true)
    //List<UserProfileModel> listJobCardProfile(@Param("jobId") String jobId);
   List<Object[]> listJobCardProfile(@Param("jobId") String jobId);

  @Query(value=" select  b.job_id,a.activation_id,a.course_id,c.course_name, " +
          " c.duration,(select description from tac_course_category where category_id=c.category_id) as category, " +
          " b.attendees_Id,b.course_status from tac_course_activation a,TAC_COURSE_ATTENDEES b,tac_course_master c  " +
          " where a.activation_id=b.activation_id " +
          " and b.job_id=:jobId " +
          " and a.course_id=c.course_id ", nativeQuery = true)

  List<Object[]> coursesAttendedWithStatus(@Param("jobId") String jobId);




}
