package qa.gov.customs.training.service;

import java.math.BigInteger;

import qa.gov.customs.training.entity.TacInstructorMaster;

public interface InstructorService {

	 TacInstructorMaster createInstructor(TacInstructorMaster instructor);
	 BigInteger countInstructors();
}
