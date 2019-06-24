package qa.gov.customs.training.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import qa.gov.customs.training.entity.*;
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
		//List<TacInstructorMaster> instructorList=instructorRepository.findByName(instructor.getName());
		return null;
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
		List<TacInstructorMaster> instructorMasters = new ArrayList<>();
		 instructorRepository.findAll().forEach(item -> instructorMasters.add(item));
		 return instructorMasters;
	}

	@Override
	public List<TacInstructorMaster> listinstructors(String name, int page, int limit) {
		List<TacInstructorMaster> users =  new ArrayList<>();
		Pageable pageable =
				PageRequest.of(
						page, limit, Sort.by("instructorId"));
		if(name==null &&  name.equals("")){
			Page<TacInstructorMaster> pages = instructorRepository.findAll(pageable);
			pages.forEach(item ->users.add(item));
			return users;
		}
		else {
			return instructorRepository.findAllByNameContaining(name, pageable);
		}
	}

	@Override
	public TacInstructorMaster getInstructorById(BigDecimal instructorId) {
		Optional<TacInstructorMaster> instructor=  instructorRepository.findById(instructorId);
		if(instructor.isPresent())
			return instructor.get();
		else return null;
	}
}


