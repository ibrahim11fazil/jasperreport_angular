package qa.gov.customs.training.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import qa.gov.customs.training.entity.*;
import qa.gov.customs.training.models.InstructorSubjectModel;

import qa.gov.customs.training.repository.InstructorRepository;
import qa.gov.customs.training.repository.TacCommSubjectsRepository;
import qa.gov.customs.training.service.InstructorService;

@Service
public class InstructorServiceImpl  implements InstructorService {
	@Autowired
	InstructorRepository instructorRepository;
//	@Autowired
//	InstructorCourseRepository instructorCourserepository;
	@Autowired
	TacCommSubjectsRepository subjectsRepository;

	
	@Override
	public TacInstructorMaster createInstructor (TacInstructorMaster tacInstructorMaster) {

		if(tacInstructorMaster.getInstructorId()==null || tacInstructorMaster.getInstructorId().equals(new BigDecimal("0"))){
			//New Instructor
//			TacInstructorMaster instructor=instructorRepository.save(tacInstructorMaster);
//			if(tacInstructorMaster.getTacSubjectsModel()!=null & tacInstructorMaster.getTacSubjectsModel().size()>0)
//			{
//				tacInstructorMaster.getTacSubjectsModel().forEach(item -> {
//					TacInstructorSubjectsId subjectsId= new TacInstructorSubjectsId();
//					subjectsId.setInstructorId(instructor.getInstructorId());
//					subjectsId.setSubjectId(item.getSubjectId());
//					TacInstructorSubjects id= new TacInstructorSubjects();
//					id.setId(subjectsId);
//					id.setTacInstructorMaster(instructorRepository.findById(instructor.getInstructorId()).get());
//					id.setTacCommSubjects(subjectsRepository.findById(item.getSubjectId()).get());
//					tacInstructorMaster.getTacInstructorSubjects().add(id);
//					});
//
//			}
			TacInstructorMaster instructorUpdated=instructorRepository.save(tacInstructorMaster);
			return instructorUpdated;

		}else{
			//Update instructor
		}


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

//	@Override
//	public List<TacCourseInstructor> searchinstructor(TacInstructorMaster instructor) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
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
		if(name==null ||  name.equals("")){
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


