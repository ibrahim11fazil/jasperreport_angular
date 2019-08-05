package qa.gov.customs.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import qa.gov.customs.training.entity.MawaredMaster;
import java.math.BigDecimal;
import java.util.List;

@Repository
public interface MawaredRepository  extends JpaRepository<MawaredMaster,Long> {

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

    @Query(value="select a.LEGACYCODE,a.CNAME_AR,a.ORGUNIT_DESC_AR,a.position_DESC_AR,a.MOBILE,a.run_date,b.attendees_Id" +
            " from USER1_SAP_WS_MINI a join TAC_COURSE_ATTENDEES b on a.LEGACYCODE in" +
            "(select job_id from TAC_COURSE_ATTENDEES where activation_id=:activationId)" +
            "and a.run_date=(select max(run_date) from USER1_SAP_WS_MINI where legacycode=a.legacycode)"+
            " and b.job_id=a.legacycode and b.activation_id=:activationId",nativeQuery = true)
    List<Object[]> getEmpData(BigDecimal activationId);


}

