package qa.gov.customs.training.repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import qa.gov.customs.training.entity.TacInstructorMaster;

@Repository
public interface InstructorRepository extends JpaRepository<TacInstructorMaster,BigDecimal>{
	
	// need to check the query later
	//@Query(value="select * from TAC_INSTRUCTOR_MASTER where lower(NAME) LIKE '%:Name%' order by instructor_id",nativeQuery=true)
	
	List<TacInstructorMaster> findByName(String Name);

}







