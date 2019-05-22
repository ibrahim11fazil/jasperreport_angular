package qa.gov.customs.training.service;

import java.util.List;


import qa.gov.customs.training.entity.TacInstructorMaster;

public interface InstructorService {

	 TacInstructorMaster createInstructor(TacInstructorMaster instructor);
	 long countInstructors();
	 List<TacInstructorMaster> searchinstructorName(TacInstructorMaster instructor);
}
