package qa.gov.customs.workflowcamuda.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import qa.gov.customs.workflowcamuda.entity.MawaredMaster;


import java.util.List;

@Repository
public interface MawaredRepository extends JpaRepository<MawaredMaster, Long> {

    //List<MiniUserMaward> findBylegacyCode(String legacyCode);

    @Query(value = "SELECT * FROM USER_SAP_WS_MINI a WHERE a.run_DATE = ( SELECT MAX(run_DATE) FROM USER_SAP_WS_MINI where legacycode=:jobCode) and  legacycode=:jobCode", nativeQuery = true)
    List<MawaredMaster> findByLegacyCode(@Param("jobCode") String jobCode);

    @Query(value = "SELECT * FROM USER_SAP_WS_MINI a WHERE a.run_DATE = ( SELECT MAX(run_DATE) FROM USER_SAP_WS_MINI where email=:email)  and  legacycode=:jobCode", nativeQuery = true)
    List<MawaredMaster> findByEmail(@Param("email") String email);

    @Query(value = "SELECT DISTINCT JOB, Case when case when JOB_DESC_AR is null then JOB_DESC else JOB_DESC_AR END is null then JOB else  case when JOB_DESC_AR is null then JOB_DESC else JOB_DESC_AR END end AS JOB_DESC_AR ,Case when case when JOB_DESC is null then JOB_DESC_AR else JOB_DESC END is null then JOB else  case when JOB_DESC is null then JOB_DESC_AR else JOB_DESC END end AS JOB_DESC FROM USER_SAP_WS_MINI", nativeQuery = true)
    List<Object[]> listFullJobs();

    @Query(value = "SELECT distinct PSLEVEL FROM USER_SAP_WS_MINI  where PSLEVEL is not null order by PSLEVEL", nativeQuery = true)
    List<Object[]> listFullGrades();

    @Query(value = "SELECT distinct JOB_FAMILY,JOB_FAMILY_SHORT,JOB_FAMILY_TEXT FROM USER_SAP_MASTERDETAILS where JOB_FAMILY is not null order by JOB_FAMILY", nativeQuery = true)
    List<Object[]> listFullJobFamily();

    @Query(value = "select * from SAP_ORG_DETAILS where OTYPE='FN' and LANG='A'", nativeQuery = true)
    List<Object[]> listFunctionalArea();


    @Query(value = "SELECT DISTINCT ORGUNIT, CASE WHEN case WHEN orgunit_desc_ar IS NULL THEN orgunit_desc ELSE orgunit_desc_ar END IS NULL THEN ORGUNIT ELSE CASE WHEN  orgunit_desc_ar IS NULL THEN orgunit_desc ELSE orgunit_desc_ar END END AS  orgunit_desc_ar, CASE WHEN CASE WHEN orgunit_desc IS NULL THEN orgunit_desc_ar ELSE orgunit_desc END IS NULL THEN ORGUNIT ELSE case when orgunit_desc is null then orgunit_desc_ar else orgunit_desc END end AS orgunit_desc  from USER_SAP_WS_MINI ", nativeQuery = true)
    List<Object[]> listAllDepartments();


    @Query(value = "select DISTINCT M1.empno as EMPNO,  M1.FNAME_EN as  FNAME_EN ,M1.LNAME_EN as LNAME_EN, " +
            "D1.JOB_FAMILY_TEXT as JOB_FAMILY_TEXT ,D1.JOB_FAMILY as JOB_FAMILY ,D1.JOB_FAMILY_SHORT as JOB_FAMILY_SHORT, " +
            "m2.empno as IM_EMPNO,M2.FNAME_EN IM_FNAME_EN,m2.LNAME_EN IM_LNAME_EN,m2.LEGACYCODE as IM_LEGACYCODE " +
            ",m2.cname_ar as IM_CNAME_AR , M1.cname_ar as CNAME_AR ,m1.LEGACYCODE as LEGACYCODE " +
            "from XXGDC_SAP_WS_MINI M1,XXGDC_SAP_MASTERDETAILS D1 ,XXGDC_SAP_WS_MINI m2 " +
            "where m1.LEGACYCODE=:jobId " +
            "and D1.PERNR=M1.EMPNO " +
            "and D1.SUPERVISOR=M2.EMPNO "+
            " and m1.run_date=(select max(run_date) from XXGDC_SAP_WS_MINI where legacycode=m1.legacycode) " +
            " and d1.run_date=(select max(run_date) from XXGDC_SAP_MASTERDETAILS where pernr=m1.empno) ", nativeQuery = true)
    List<Object[]> getImmediateManager(@Param("jobId") String jobId);


    @Query(value = "select DISTINCT M1.empno as EMPNO,  M1.FNAME_EN as  FNAME_EN ,M1.LNAME_EN as LNAME_EN, " +
            "D1.JOB_FAMILY_TEXT as JOB_FAMILY_TEXT ,D1.JOB_FAMILY as JOB_FAMILY ,D1.JOB_FAMILY_SHORT as JOB_FAMILY_SHORT, " +
            "m2.empno as IM_EMPNO,M2.FNAME_EN IM_FNAME_EN,m2.LNAME_EN IM_LNAME_EN,m2.LEGACYCODE as IM_LEGACYCODE " +
            ",m2.cname_ar as IM_CNAME_AR , M1.cname_ar as CNAME_AR , m1.LEGACYCODE as LEGACYCODE " +
            "from XXGDC_SAP_WS_MINI M1,XXGDC_SAP_MASTERDETAILS D1 ,XXGDC_SAP_WS_MINI m2 " +
            "where m1.orgunit=:departmentId and  JOB_FAMILY_SHORT=:jobFamilyShort " +
            "and D1.PERNR=M1.EMPNO " +
            "and D1.SUPERVISOR=M2.EMPNO ", nativeQuery = true)
    List<Object[]> getDepartmentHead(@Param("departmentId") String departmentId, @Param("jobFamilyShort") String jobFamilyShort);

    @Query(value = "select m.empno,m.legacycode,m.cname_ar,m.qid,m.position_desc_ar,m.certf_t_a,pslevel " +
            "from xxgdc_sap_ws_mini m, xxgdc_sap_masterdetails d where m.empno=d.pernr " +
            "and m.run_date=(select max(run_date)from user_sap_ws_mini where empno=m.empno) " +
            "and d.run_date=(select max(run_date) from xxgdc_sap_masterdetails where pernr=d.pernr) " +
            "and d.supervisor=(select empno  from xxgdc_sap_ws_mini emp where emp.legacycode=:jobId " +
            "and emp.run_date=(select max(run_date)from user_sap_ws_mini where legacycode=emp.legacycode)) " +
            "and m.emp_stat='Active' ", nativeQuery = true)
    List<Object[]> employeesUnderSupervisor(@Param("jobId") String jobId);


    @Query(value = "select count(*) from supervisor_list where legacycode=:jobId ", nativeQuery = true)
    int getCountOfHead(@Param("jobId") String jobId);


}
