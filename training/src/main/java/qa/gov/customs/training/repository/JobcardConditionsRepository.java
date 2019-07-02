package qa.gov.customs.training.repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import qa.gov.customs.training.entity.TacJobcardConditions;

public interface JobcardConditionsRepository extends JpaRepository<TacJobcardConditions,BigDecimal> {
	
	//conditions
	@Query(value="select * from TAC_JOBCARDCONDITIONS where TAC_JOBCARDCONDITIONS.JOBCARD_NO Like :JOBCARDNO order by TAC_JOBCARDCONDITIONS.JOBCARD_NO",nativeQuery=true)
	List<TacJobcardConditions> findConditions(BigDecimal jobcardNo);
//	@Query(value="delete from TAC_JOBCARDCONDITIONS where JOB_CONDITIONS LIKE :JOB_CONDITIONS")
	
	
}
