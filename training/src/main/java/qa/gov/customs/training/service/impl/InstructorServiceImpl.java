package qa.gov.customs.training.service.impl;

import java.math.BigInteger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import qa.gov.customs.training.entity.TacInstructorMaster;
import qa.gov.customs.training.repository.InstructorRepository;
import qa.gov.customs.training.service.InstructorService;

@Service
public class InstructorServiceImpl  implements InstructorService {
	@Autowired
	InstructorRepository instructorRepository;
	
	@Override
	public TacInstructorMaster createInstructor (TacInstructorMaster tacInstructorMaster) {
	TacInstructorMaster instructor=instructorRepository.save(tacInstructorMaster);
	return instructor;

}

	@Override
	public BigInteger countInstructors() {
		// TODO Auto-generated method stub
		return null;
	}
}


