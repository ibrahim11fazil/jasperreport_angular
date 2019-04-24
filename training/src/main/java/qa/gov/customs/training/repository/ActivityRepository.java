package qa.gov.customs.training.repository;

import java.math.BigDecimal;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import qa.gov.customs.training.entity.TacActivity;
@Repository
public interface ActivityRepository extends JpaRepository<TacActivity,BigDecimal>{

	void save(Optional<TacActivity> activity1);

}
