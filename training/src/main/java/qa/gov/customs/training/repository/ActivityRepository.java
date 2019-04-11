package qa.gov.customs.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import qa.gov.customs.training.entity.TacActivity;

public interface ActivityRepository extends JpaRepository<TacActivity,Long>{

}
