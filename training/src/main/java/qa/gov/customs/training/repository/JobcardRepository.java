package qa.gov.customs.training.repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import qa.gov.customs.training.entity.TacJobcard;

public interface JobcardRepository  extends JpaRepository<TacJobcard,BigDecimal>
{

	
	@Query(value="select * from TAC_JOBCARD where TAC_JOBCARD.JOB Like :JOB order by TAC_JOBCARD.JOB",nativeQuery=true)
	List<TacJobcard> findByJOB(String JOB);


	@Query(value="select * from TAC_JOBCARD where TAC_JOBCARD.JOB_GRADE Like :JOB_GRADE order by TAC_JOBCARD.JOB",nativeQuery=true)
	List<TacJobcard> findByGrade(String JOB_GRADE);
	
	
}
