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
    public TacCourseMaster linkCourseWithActivity(TacCourseMaster activity) {
        return null;
    }

    @Override
    public List<TacCourseMaster> listCourses() {
        return null;
    }

   

    @Override
    public BigInteger countCourses() {
        return null;
    }

    @Override
    public BigInteger disableCountCourses() {
        return null;
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

}
