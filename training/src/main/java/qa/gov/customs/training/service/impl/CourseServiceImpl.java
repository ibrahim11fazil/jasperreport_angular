package qa.gov.customs.training.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;

import qa.gov.customs.training.entity.TacCourseAudience;
import qa.gov.customs.training.entity.TacCourseGuidelines;
import qa.gov.customs.training.entity.TacCourseMaster;
import qa.gov.customs.training.entity.TacCourseOutcome;
import qa.gov.customs.training.repository.AudienceRepository;
import qa.gov.customs.training.repository.CourseRepository;
import qa.gov.customs.training.repository.GuidelineRepository;
import qa.gov.customs.training.repository.OutcomeRepository;
import qa.gov.customs.training.service.CourseService;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

@Service
public class CourseServiceImpl  implements CourseService {
	
	@Autowired
	CourseRepository courseRepository;
	@Autowired
	GuidelineRepository guidelineRepository;
	@Autowired
	OutcomeRepository outcomeRepository;
	@Autowired
	AudienceRepository audienceRepository;
	  @Override
	    public TacCourseMaster createAndUpdateCourse(TacCourseMaster course) {
	    	TacCourseMaster course1=courseRepository.save(course);
	        return course1;
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
	public TacCourseMaster findById(TacCourseMaster course) {
		TacCourseMaster courses=null;
		courses=courseRepository.findByCourseId(course.getCourseId());
		return courses;
	}
	
	@Override
	public Slice<TacCourseMaster> listCourses() {
		Pageable firstPageWithElements = PageRequest.of( 0,5);
		Slice<TacCourseMaster> courseslist=null;
		courseslist=  courseRepository.findAll(firstPageWithElements);
				return courseslist;
	}

	@Override
	public List<TacCourseMaster> getCourseByCourseName(TacCourseMaster course) {
		List<TacCourseMaster> courseList=courseRepository.findByCourseName(course.getCourseName());
		return courseList;
	}

	@Override
	public TacCourseGuidelines createGuideline(TacCourseGuidelines guideline) {
		// TODO Auto-generated method stub
		TacCourseGuidelines guidelines=guidelineRepository.save(guideline);
		return guidelines;
	}

	@Override
	public void createOutcome(TacCourseOutcome outcome) {
		// TODO Auto-generated method stub
		outcomeRepository.save(outcome);
	}

	@Override
	public void createAudience(TacCourseAudience audience) {
		// TODO Auto-generated method stub
		audienceRepository.save(audience);
	}

	

}
