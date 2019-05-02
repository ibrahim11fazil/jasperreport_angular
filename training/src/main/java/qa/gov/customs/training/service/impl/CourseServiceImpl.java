package qa.gov.customs.training.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import qa.gov.customs.training.entity.TacCourseMaster;
import qa.gov.customs.training.repository.CourseRepository;

import qa.gov.customs.training.service.CourseService;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

@Service
public class CourseServiceImpl  implements CourseService {
	
	@Autowired
	CourseRepository courseRepository;

    @Override
    public TacCourseMaster createAndUpdateCourse(TacCourseMaster activity) {
    	TacCourseMaster course=courseRepository.save(activity);
        return course;
    }

    @Override
    public TacCourseMaster disableCourse(TacCourseMaster activity) {
        return null;
    }

    @Override
    public TacCourseMaster linkCourseWithActivity(TacCourseMaster course) {
        TacCourseMaster courses= courseRepository.save(course);
        return courses;
    }
 

    @Override
    public long countCourses() {
     long countcourse= courseRepository.count();
    return countcourse;
    }

  


    @Override
    public BigInteger enabledCountCourses() {
        return null;
    }

    @Override
    public Optional<TacCourseMaster> getCourseById(TacCourseMaster course) {
    	Optional<TacCourseMaster> getCourse=null;
    	getCourse=courseRepository.findById(course.getCourseId());
        return getCourse;
    }

	@Override
	public TacCourseMaster activateCourse(TacCourseMaster course) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<TacCourseMaster> searchCourses(TacCourseMaster searchCriteria, Pageable firstPageWithElements) {
		List<TacCourseMaster> courses=null;
		courses=courseRepository.findByCourseName(searchCriteria.getCourseName(), firstPageWithElements);
				return courses;
	}

	@Override
	public BigInteger disableCountCourses() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Optional<TacCourseMaster> findById(TacCourseMaster course) {
		Optional<TacCourseMaster> courses=null;
		courses=courseRepository.findById(course.getCourseId());
		return courses;
	}
	
	@Override
	public List<TacCourseMaster> listCourses() {
		List<TacCourseMaster> courseslist=null;
		courseslist= (List<TacCourseMaster>) courseRepository.findAll();
				return courseslist;
	}

	

}
