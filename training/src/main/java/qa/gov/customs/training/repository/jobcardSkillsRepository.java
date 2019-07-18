package qa.gov.customs.training.repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import qa.gov.customs.training.entity.TacJobcardSkills;

public interface jobcardSkillsRepository extends JpaRepository<TacJobcardSkills,BigDecimal> {
	
	
	//skills
	@Query(value="select * from TAC_JOBCARDSKILLS where TAC_JOBCARDSKILLS.JOBCARD_NO Like :jobcardNo order by TAC_JOBCARDSKILLS.JOBCARD_NO",nativeQuery=true)
	List<TacJobcardSkills> findSkills(BigDecimal jobcardNo);
	

}
