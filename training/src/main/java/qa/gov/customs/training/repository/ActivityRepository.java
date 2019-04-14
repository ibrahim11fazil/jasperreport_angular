package qa.gov.customs.training.repository;

import java.math.BigDecimal;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import qa.gov.customs.training.entity.TacActivity;

public interface ActivityRepository extends JpaRepository<TacActivity,BigDecimal>{

	void save(Optional<TacActivity> activity1);

}
