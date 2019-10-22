package qa.gov.customs.training.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import qa.gov.customs.training.entity.TacJobcard;

import java.math.BigDecimal;
import java.util.List;

public interface JobcardRepository extends PagingAndSortingRepository<TacJobcard, BigDecimal> {


    //@Query(value="from TacJobcard where job = :job")
    List<TacJobcard> findByJob(String job, Pageable pageable);

    TacJobcard findByJobcardNo(BigDecimal jobcardNo);


    @Query(value = "select * from TAC_JOBCARD where TAC_JOBCARD.JOB_GRADE Like :JOB_GRADE order by TAC_JOBCARD.JOB", nativeQuery = true)
    List<TacJobcard> findByGrade(String JOB_GRADE);

    @Query(value = "select * from TAC_JOBCARD_COURSE_LINK where JOBCARD_NO=:jobCardNumber ", nativeQuery = true)
    List<Object[]> findAllCoursesForJobCard(BigDecimal jobCardNumber);

    @Modifying
    @Query(value = "delete from TAC_JOBCARD_COURSE_LINK where JOBCARD_NO=:jobCardNumber AND COURSE_ID=:courseId", nativeQuery = true)
    void deleteJobCardByJobCardNumberAndCourseId(BigDecimal jobCardNumber, BigDecimal courseId);

}
