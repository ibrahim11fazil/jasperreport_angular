package qa.gov.customs.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import qa.gov.customs.training.entity.ActivationData;
import qa.gov.customs.training.entity.TacCourseActivation;

import java.math.BigDecimal;

public interface ActivationDataRepository  extends JpaRepository<ActivationData, BigDecimal> {

    @Query(value="select *  from COURSE_ACTIVATION_DETAILS where activation_id=:activationId",nativeQuery=true)
   ActivationData findByActivationId(BigDecimal activationId);
}
