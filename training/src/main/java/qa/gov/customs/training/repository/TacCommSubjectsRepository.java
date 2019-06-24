package qa.gov.customs.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import qa.gov.customs.training.entity.TacCommQualifications;
import qa.gov.customs.training.entity.TacCommSubjects;

import java.math.BigDecimal;

public interface TacCommSubjectsRepository extends JpaRepository<TacCommSubjects, BigDecimal> {
}
