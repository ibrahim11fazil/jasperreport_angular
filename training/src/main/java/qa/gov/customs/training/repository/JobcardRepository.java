package qa.gov.customs.training.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import qa.gov.customs.training.entity.TacJobcard;

import java.math.BigDecimal;
import java.util.List;

public interface JobcardRepository extends PagingAndSortingRepository<TacJobcard, BigDecimal> {


    //@Query(value="from TacJobcard where job = :job")
    List<TacJobcard> findByJob(String job, Pageable pageable);
    List<TacJobcard> findByJobGrade(String jobGrade,Pageable pageable);
    List<TacJobcard> findByJobTitle(String jobTitle,Pageable pageable);

    List<TacJobcard>findByJobGradeAndJobTitle(String jobGrade,String jobTitle);

    TacJobcard findByJobcardNo(BigDecimal jobcardNo);


    @Query(value = "select * from TAC_JOBCARD where TAC_JOBCARD.JOB_GRADE Like :JOB_GRADE order by TAC_JOBCARD.JOB", nativeQuery = true)
    List<TacJobcard> findByGrade(String JOB_GRADE);

    @Query(value = "select * from TAC_JOBCARD_COURSE_LINK where JOBCARD_NO=:jobCardNumber ", nativeQuery = true)
    List<Object[]> findAllCoursesForJobCard(BigDecimal jobCardNumber);

    @Query(value = "select JOB_DESC_AR from MAWARED_JOB_TITLES where JOB=:jobTitle ", nativeQuery = true)
    List<Object> findJobTitleForJobCard(String jobTitle);


    @Modifying
    @Query(value = "delete from TAC_JOBCARD_COURSE_LINK where JOBCARD_NO=:jobCardNumber AND COURSE_ID=:courseId", nativeQuery = true)
    void deleteJobCardByJobCardNumberAndCourseId(BigDecimal jobCardNumber, BigDecimal courseId);

    @Query(value = "select * from tac_jobcard where "+
            "job_grade=(select pslevel from user_sap_ws_mini where legacycode=:jobId "+
            "and run_date=(select max(run_date) from USER1_SAP_WS_MINI where legacycode=:jobId)) "+
            "and job_title =(select job from USER1_SAP_WS_MINI  where legacycode=:jobId "+
            "and run_date=(select max(run_date) from USER1_SAP_WS_MINI where legacycode=:jobId))",nativeQuery = true)
    List<TacJobcard> findFullJobCard(@Param("jobId") String jobId);

}
