package qa.gov.customs.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import qa.gov.customs.training.entity.TacCourseActivation;

import java.math.BigDecimal;

public interface ActivationRepository extends JpaRepository<TacCourseActivation, BigDecimal> {


}
