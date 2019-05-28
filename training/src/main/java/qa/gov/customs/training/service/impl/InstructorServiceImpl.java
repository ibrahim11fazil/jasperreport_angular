package qa.gov.customs.training.service.impl;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import qa.gov.customs.training.entity.TacActivity;
import qa.gov.customs.training.entity.TacCourseInstructor;
import qa.gov.customs.training.entity.TacCourseMaster;
import qa.gov.customs.training.entity.TacInstructorMaster;
import qa.gov.customs.training.repository.InstructorCourseRepository;
import qa.gov.customs.training.repository.InstructorRepository;
import qa.gov.customs.training.service.InstructorService;

@Service
public class InstructorServiceImpl  implements InstructorService {
	@Autowired
	InstructorRepository instructorRepository;
	InstructorCourseRepository instructorCourserepository;
	
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
	
	/*@Override
	public List<TacCourseInstructor> searchinstructor(TacInstructorMaster instructor) {
		//List<TacActivity> activity1=activityRepository.searchActivity(activity.getActivityId());
		//List<TacCourseInstructor> instructor1=instructorCourseRepository.findById(instructor.getInstructorId());
		Optional<TacCourseInstructor> instructor1=instructorCourseRepository.findById(instructor.getInstructorId());
		return instructor1;
	}*/

	@Override
	public void deleteinstructor(TacInstructorMaster instructor) {
	
	instructorRepository.deleteById(instructor.getInstructorId());
	}
	

	@Override
	public long countInstructors() {
		// TODO Auto-generated method stub
	 long countinstructors=instructorRepository.count();
		return countinstructors;
	}

	@Override
	public List<TacCourseInstructor> searchinstructor(TacInstructorMaster instructor) {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public List<TacInstructorMaster> listinstructors() {
		return instructorRepository.findAll();
	}
}


