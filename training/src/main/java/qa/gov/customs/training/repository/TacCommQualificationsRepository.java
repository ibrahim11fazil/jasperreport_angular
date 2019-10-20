package qa.gov.customs.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import qa.gov.customs.training.entity.TacCommQualifications;

import java.math.BigDecimal;

public interface TacCommQualificationsRepository extends JpaRepository<TacCommQualifications, BigDecimal> {
}

