package qa.gov.customs.employee.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import qa.gov.customs.employee.entity.MawaredMaster;

import java.util.List;

@Repository
public interface MawaredRepository  extends JpaRepository<MawaredMaster,Long> {

    //List<MiniUserMaward> findBylegacyCode(String legacyCode);

    @Query(value="SELECT * FROM USER_SAP_WS_MINI a WHERE a.run_DATE = ( SELECT MAX(run_DATE) FROM USER_SAP_WS_MINI where legacycode=:jobCode) and  legacycode=:jobCode",nativeQuery = true)
    List<MawaredMaster> findByLegacyCode(@Param("jobCode") String jobCode);

    @Query(value="SELECT * FROM USER_SAP_WS_MINI a WHERE a.run_DATE = ( SELECT MAX(run_DATE) FROM USER_SAP_WS_MINI where email=:email)  and  legacycode=:jobCode",nativeQuery = true)
    List<MawaredMaster> findByEmail(@Param("email") String email);

    @Query(value="SELECT DISTINCT JOB, Case when case when JOB_DESC_AR is null then JOB_DESC else JOB_DESC_AR END is null then JOB else  case when JOB_DESC_AR is null then JOB_DESC else JOB_DESC_AR END end AS JOB_DESC_AR ,Case when case when JOB_DESC is null then JOB_DESC_AR else JOB_DESC END is null then JOB else  case when JOB_DESC is null then JOB_DESC_AR else JOB_DESC END end AS JOB_DESC FROM USER_SAP_WS_MINI",nativeQuery = true)
    List<Object[]> listFullJobs();
    
    @Query(value="SELECT distinct PSLEVEL FROM USER_SAP_WS_MINI  where PSLEVEL is not null order by PSLEVEL",nativeQuery = true)
    List<Object[]> listFullGrades();
    
}
