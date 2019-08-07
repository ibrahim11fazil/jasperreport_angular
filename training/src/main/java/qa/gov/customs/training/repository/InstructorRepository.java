package qa.gov.customs.training.repository;

import java.math.BigDecimal;
import java.util.List;
import java.util.Objects;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import qa.gov.customs.training.entity.TacCourseMaster;
import qa.gov.customs.training.entity.TacInstructorMaster;

@Repository
public interface InstructorRepository extends PagingAndSortingRepository<TacInstructorMaster,BigDecimal> {

	// need to check the query later
	//@Query(value="select * from TAC_INSTRUCTOR_MASTER where lower(NAME) LIKE '%:Name%' order by instructor_id",nativeQuery=true)
	
	//List<TacInstructorMaster> findByName(String Name);
	List<TacInstructorMaster> findAllByNameContaining(String name, Pageable pageable);

	@Query(value="select * from TAC_INSTRUCTOR_MASTER a join " +
			"TAC_COURSE_INSTRUCTOR b on a.instructor_id=b. instructor_id and b.activation_id=:activation_id",nativeQuery=true)
	List<TacInstructorMaster> listInstructorForActivation(BigDecimal activation_id);

}







