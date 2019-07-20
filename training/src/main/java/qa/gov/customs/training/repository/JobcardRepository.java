package qa.gov.customs.training.repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import qa.gov.customs.training.entity.TacInstructorMaster;
import qa.gov.customs.training.entity.TacJobcard;

public interface JobcardRepository   extends PagingAndSortingRepository<TacJobcard,BigDecimal> 
{

	
	@Query(value="select * from TAC_JOBCARD where TAC_JOBCARD.JOB = :job",nativeQuery=true)
	List<TacJobcard> findByJob(String job, Pageable pageable);


	@Query(value="select * from TAC_JOBCARD where TAC_JOBCARD.JOB_GRADE Like :JOB_GRADE order by TAC_JOBCARD.JOB",nativeQuery=true)
	List<TacJobcard> findByGrade(String JOB_GRADE);

	@Query(value="select * from TAC_JOBCARD_COURSE_LINK where JOBCARD_NO=:jobCardNumber ",nativeQuery=true)
	List<Object[]> findAllCoursesForJobCard(BigDecimal jobCardNumber);
	
}
