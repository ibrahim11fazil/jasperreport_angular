package qa.gov.customs.training.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qa.gov.customs.training.entity.TacCourseMaster;
import qa.gov.customs.training.repository.CourseRepository;
import qa.gov.customs.training.service.ActivityService;
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
    public List<TacCourseMaster> listCourses(TacCourseMaster searchCriteria) {
        return null;
    }

    @Override
    public BigInteger countCourses() {
        return null;
    }

    @Override
    public BigInteger disabledCountCourses() {
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
}
