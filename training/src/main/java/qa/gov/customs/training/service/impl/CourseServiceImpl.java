package qa.gov.customs.training.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;

import qa.gov.customs.training.entity.*;
import qa.gov.customs.training.models.Course;
import qa.gov.customs.training.repository.*;
import qa.gov.customs.training.service.CourseService;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

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

	@Autowired
	CourseCategoryRepository courseCategoryRepository;

	@Autowired
	CourseTargetGroupRepository courseTargetGroupRepository;

	 @Override
	 public TacCourseMaster createAndUpdateCourse(TacCourseMaster course) {
	  	    Set<TacCourseAudience> targetedAudiences= course.getTacCourseAudiences()!=null?course.getTacCourseAudiences():null;
		    course.setTacCourseAudiences(null);
	    	TacCourseMaster courseInserted=courseRepository.save(course);
	    	if(!courseInserted.getCourseId().equals(new BigDecimal(0)) && targetedAudiences!=null){
				targetedAudiences.forEach( item -> {
					item.setTacCourseMaster(courseInserted);
					item.setTacCourseTargetGroup(courseTargetGroupRepository.findById(item.getTargetId()).get());
					audienceRepository.save(item);
				});
			}
		     Set<TacCourseAudience>  audiences =  audienceRepository.findByCourseId(courseInserted.getCourseId());
		     audiences.forEach(item -> {
		     	item.setTargetId(item.getTacCourseTargetGroup().getTargetId());
			 });
	         TacCourseMaster courseCreated= courseRepository.findByCourseId(courseInserted.getCourseId());
	         courseCreated.setTacCourseAudiences(audiences);
	         return courseCreated;
	 }

	@Override
	public BigDecimal disableCourseById(BigDecimal id) {
		return null;
	}

	@Override
	public BigDecimal enableCourseById(BigDecimal id) {
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
	public List<Course> searchCourses(TacCourseMaster searchCriteria, Pageable firstPageWithElements) {
		//courses=courseRepository.findByCourseName(searchCriteria.getCourseName(), firstPageWithElements);
		List<Object[]> objects =   courseRepository.findIdAndNameByCourseName(searchCriteria.getCourseName(), firstPageWithElements);
		List<Course> courses=new ArrayList<>();
		for (Object[] o :objects) {
			Course course = new Course();
			course.setCourseId((BigDecimal)o[0]);
			course.setCourseName((String)o[1]);
			if(o[2]!=null)
			course.setStatus((BigDecimal)o[2]);
			courses.add(course);
		}
		return courses;
	}

	@Override
	public BigInteger disableCountCourses() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public TacCourseMaster findById(BigDecimal id) {
		TacCourseMaster courses=null;
		courses=courseRepository.findByCourseId(id);
		return courses;
	}
	
	@Override
	public List<Course> listCourses() {
//		Pageable firstPageWithElements = PageRequest.of( 0,5);
		
		List<Object[]> objects=  courseRepository.findAllCourses();
		List<Course> courses=new ArrayList<>();
		for (Object[] o :objects) {
			Course course = new Course();
			course.setCourseId((BigDecimal)o[0]);
			course.setCourseName((String)o[1]);
			courses.add(course);
		}
		return courses;
	}

	@Override
	public List<TacCourseMaster> getCourseByCourseName(TacCourseMaster course) {
		List<TacCourseMaster> courseList=courseRepository.findByCourseName(course.getCourseName());
		return courseList;
	}

	@Override
	public List<TacCourseCategory> findCourseCategories() {
		return courseCategoryRepository.findAll();
	}

	@Override
	public List<TacCourseTargetGroup> findCourseTargetGroups() {
		return courseTargetGroupRepository.findAll();
	}

	@Override
	public TacCourseGuidelines createGuideline(TacCourseGuidelines guideline) {
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
