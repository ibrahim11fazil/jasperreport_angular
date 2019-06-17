package qa.gov.customs.training.repository;

import java.math.BigDecimal;
import qa.gov.customs.training.entity.TacCoursePrerequisites;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PrerequisitesRepository extends JpaRepository<TacCoursePrerequisites, BigDecimal>{
}
