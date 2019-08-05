package qa.gov.customs.training.repository;

import java.math.BigDecimal;

import org.springframework.stereotype.Repository;
import qa.gov.customs.training.entity.TacCoursePrerequisites;
import org.springframework.data.jpa.repository.JpaRepository;
@Repository
public interface PrerequisitesRepository extends JpaRepository<TacCoursePrerequisites, BigDecimal>{
}
