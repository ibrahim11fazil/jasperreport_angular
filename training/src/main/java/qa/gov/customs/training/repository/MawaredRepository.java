package qa.gov.customs.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import qa.gov.customs.training.entity.MawaredMaster;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Repository
public interface MawaredRepository extends JpaRepository<MawaredMaster, Long> {

    //List<MiniUserMaward> findBylegacyCode(String legacyCode);
//
//    @Query(value="SELECT * FROM USER_SAP_WS_MINI a WHERE a.run_DATE = ( SELECT MAX(run_DATE) FROM USER_SAP_WS_MINI where legacycode=:jobCode) and  legacycode=:jobCode",nativeQuery = true)
//    List<MawaredMaster> findByLegacyCode(@Param("jobCode") String jobCode);
//
//    @Query(value="SELECT * FROM USER_SAP_WS_MINI a WHERE a.run_DATE = ( SELECT MAX(run_DATE) FROM USER_SAP_WS_MINI where email=:email)  and  legacycode=:jobCode",nativeQuery = true)
//    List<MawaredMaster> findByEmail(@Param("email") String email);
//
//    @Query(value="SELECT DISTINCT JOB, Case when case when JOB_DESC_AR is null then JOB_DESC else JOB_DESC_AR END is null then JOB else  case when JOB_DESC_AR is null then JOB_DESC else JOB_DESC_AR END end AS JOB_DESC_AR ,Case when case when JOB_DESC is null then JOB_DESC_AR else JOB_DESC END is null then JOB else  case when JOB_DESC is null then JOB_DESC_AR else JOB_DESC END end AS JOB_DESC FROM USER_SAP_WS_MINI",nativeQuery = true)
//    List<Object[]> listFullJobs();
//
//    @Query(value="SELECT distinct PSLEVEL FROM USER_SAP_WS_MINI  where PSLEVEL is not null order by PSLEVEL",nativeQuery = true)
//    List<Object[]> listFullGrades();
//
//    @Query(value="SELECT distinct JOB_FAMILY,JOB_FAMILY_SHORT,JOB_FAMILY_TEXT FROM USER_SAP_MASTERDETAILS where JOB_FAMILY is not null order by JOB_FAMILY",nativeQuery = true)
//    List<Object[]> listFullJobFamily();
//
//    @Query(value="select * from SAP_ORG_DETAILS where OTYPE='FN' and LANG='A'",nativeQuery = true)
//    List<Object[]> listFunctionalArea();

    @Query(value = "select a.LEGACYCODE,a.CNAME_AR,a.ORGUNIT_DESC_AR,a.position_DESC_AR,a.MOBILE,a.run_date,b.attendees_Id" +
            " from USER1_SAP_WS_MINI a join TAC_COURSE_ATTENDEES b on a.LEGACYCODE in" +
            "(select job_id from TAC_COURSE_ATTENDEES where activation_id=:activationId)" +
            "and a.run_date=(select max(run_date) from USER1_SAP_WS_MINI where legacycode=a.legacycode)" +
            " and b.job_id=a.legacycode and b.activation_id=:activationId", nativeQuery = true)
    List<Object[]> getEmpData(BigDecimal activationId);

    @Query(value = "select a.LEGACYCODE,a.CNAME_AR,a.ORGUNIT_DESC_AR,a.position_DESC_AR,a.MOBILE,a.run_date,b.attendees_Id,count(case when attendance_flag=1 then 1 end)\n" +
            "             from USER1_SAP_WS_MINI a,TAC_COURSE_ATTENDEES b,tac_course_attendence c\n" +
            "            where a.legacycode=b.job_id\n" +
            "            and a.run_date=(select max(run_date) from USER1_SAP_WS_MINI where legacycode=a.legacycode)\n" +
            "           and b.activation_id=:activationId\n" +
            "           and b.attendees_id=c.attendees_id\n" +
            "           --and b.attendees_id=2\n" +
            "           group by a.LEGACYCODE,a.CNAME_AR,a.ORGUNIT_DESC_AR,a.position_DESC_AR,a.MOBILE,a.run_date,b.attendees_Id", nativeQuery = true)
    List<Object[]> getEmpDataforAttendance(BigDecimal activationId);

    @Query(value = "select a.LEGACYCODE,a.CNAME_AR,a.ORGUNIT_DESC_AR,a.position_DESC_AR,a.MOBILE,a.run_date,b.attendees_Id,c.attendance_flag,c.attendance_date " +
            " from USER1_SAP_WS_MINI a,TAC_COURSE_ATTENDEES b,tac_course_attendence c " +
            " where a.legacycode=b.job_id " +
            " and a.run_date=(select max(run_date) from USER1_SAP_WS_MINI where legacycode=a.legacycode) " +
            " and b.activation_id=:activationId " +
            " and b.attendees_id=c.attendees_id " +
            " and to_date(c.attendance_date,'dd-MM-yy')=:courseDate" +
            " group by a.LEGACYCODE,a.CNAME_AR,a.ORGUNIT_DESC_AR,a.position_DESC_AR,a.MOBILE,a.run_date,b.attendees_Id,c.attendance_flag,c.attendance_date", nativeQuery = true)
    List<Object[]> getEmpPreviousAttendance(BigDecimal activationId,Date courseDate);



    @Query(value = "select a.LEGACYCODE,a.CNAME_AR,a.ORGUNIT_DESC_AR,a.position_DESC_AR,a.MOBILE,a.run_date from USER1_SAP_WS_MINI a,Tac_jobcard b, "+
    " Tac_jobcard_course_link c,Tac_course_activation d "+
    " where d.activation_id=:act_id and c.course_id=d.course_id "+
    " and b.jobcard_no=c.jobcard_no "+
    " and a.job=b.job_title "+
    " and a.pslevel=b.job_grade "+
    " and a.run_date=(select max(run_date) from USER1_SAP_WS_MINI where legacycode=a.legacycode) ", nativeQuery = true)
    List<Object[]> getDirectEnrollEmployees(BigDecimal act_id);


}

