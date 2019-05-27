package qa.gov.customs.training.service.impl;

import java.math.BigInteger;
import java.util.List;

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
	public List<TacInstructorMaster> searchinstructorName(TacInstructorMaster instructor) {
		List<TacInstructorMaster> instructorList=instructorRepository.findByName(instructor.getName());
		return instructorList;
	}
	

	@Override
	public long countInstructors() {
		// TODO Auto-generated method stub
	 long countinstructors=instructorRepository.count();
		return countinstructors;
	}
}


