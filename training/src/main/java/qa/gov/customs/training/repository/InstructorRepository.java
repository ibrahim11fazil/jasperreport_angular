package qa.gov.customs.training.repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import qa.gov.customs.training.entity.TacInstructorMaster;

@Repository
public interface InstructorRepository extends JpaRepository<TacInstructorMaster,BigDecimal>{

	List<TacInstructorMaster> findByName(String Name);

}







