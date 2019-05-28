package qa.gov.customs.training.service;

import java.util.List;

import org.springframework.data.domain.Slice;

import qa.gov.customs.training.entity.TacCourseInstructor;
import qa.gov.customs.training.entity.TacCourseMaster;
import qa.gov.customs.training.entity.TacInstructorMaster;

public interface InstructorService {

	 TacInstructorMaster createInstructor(TacInstructorMaster instructor);
	 long countInstructors();
	 List<TacInstructorMaster> searchinstructorName(TacInstructorMaster instructor);
	 List<TacCourseInstructor> searchinstructor(TacInstructorMaster instructor);
	 void deleteinstructor(TacInstructorMaster instructor);
	List<TacInstructorMaster> listinstructors();
	
	 
}
