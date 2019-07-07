package qa.gov.customs.training.service;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.domain.Slice;

import qa.gov.customs.training.entity.TacCourseMaster;
import qa.gov.customs.training.entity.TacInstructorMaster;

public interface InstructorService {

	 TacInstructorMaster createInstructor(TacInstructorMaster instructor);
	 long countInstructors();
	 List<TacInstructorMaster> searchinstructorName(TacInstructorMaster instructor);
	// List<TacCourseMaster> searchinstructor(TacInstructorMaster instructor);
	 void deleteinstructor(TacInstructorMaster instructor);
	List<TacInstructorMaster> listinstructors();
	List<TacInstructorMaster> listinstructors(String name, int page, int limit);
	TacInstructorMaster getInstructorById(BigDecimal instructorId);
	
	 
}
