package qa.gov.customs.training.repository;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
<<<<<<< HEAD
import org.springframework.stereotype.Repository;

=======
import org.springframework.data.jpa.repository.Query;
>>>>>>> 617b9c73600ee57a5bdbb895e3ba4d69ad0ccf53
import org.springframework.stereotype.Repository;


import qa.gov.customs.training.entity.TacActivity;

@Repository
public interface ActivityRepository extends JpaRepository<TacActivity,BigDecimal>{
	//void save(Optional<TacActivity> activity);
}
