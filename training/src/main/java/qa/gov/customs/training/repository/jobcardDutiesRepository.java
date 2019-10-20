package qa.gov.customs.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import qa.gov.customs.training.entity.TacJobcardDuties;

import java.math.BigDecimal;
import java.util.List;

public interface jobcardDutiesRepository extends JpaRepository<TacJobcardDuties, BigDecimal> {

    //duties
    @Query(value = "select * from TAC_JOBCARDDUTIES where TAC_JOBCARDDUTIES.JOBCARD_NO Like :jobcardNo order by TAC_JOBCARDDUTIES.JOBCARD_NO", nativeQuery = true)
    List<TacJobcardDuties> findDuties(BigDecimal jobcardNo);

}
