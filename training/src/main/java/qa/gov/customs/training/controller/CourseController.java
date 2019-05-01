package qa.gov.customs.training.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.training.entity.TacCourseMaster;
import qa.gov.customs.training.security.CustomPrincipal;
import qa.gov.customs.training.service.CourseService;
import qa.gov.customs.utils.Constants;
import qa.gov.customs.utils.MessageUtil;
import qa.gov.customs.utils.models.ResponseType;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@RestController
public class CourseController {

	@Autowired
	CourseService courseService;
	


	//	@PreAuthorize("hasAnyAuthority('train_admin','role_user')")
	//for creating and updating courses
	@PostMapping("/create-course")
	public ResponseType createUpdateCourse(@RequestBody TacCourseMaster course) {
		TacCourseMaster courses=null;
		courses=courseService.createAndUpdateCourse(course);
		ResponseType response = new ResponseType(Constants.CREATED, MessageUtil.COURSE_CREATED, true,courses);
		return response;
	}

	//	@PreAuthorize("hasAnyAuthority('train_admin','role_user')")
	//for creating and updating courses
	@PostMapping("/disable-course")
	public ResponseType deleteCourse(@RequestBody TacCourseMaster course) {
		Optional<TacCourseMaster> courses=null;
		TacCourseMaster courseDelete=null;
		courses=courseService.getCourseById(course);
		if(courses!=null) {
			courses.get().setActiveFlag(new BigDecimal(0));
			courseDelete=courseService.createAndUpdateCourse(course);
		}
		ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.COURSE_DISABLED, true,courseDelete);
		return response;
	}

	@PostMapping("/get-courses-by-id")
	public ResponseType getCourseById(@RequestBody TacCourseMaster course,CustomPrincipal principal) {
		Optional<TacCourseMaster> courseList=null;
		courseList=courseService.getCourseById(course);
		ResponseType response = new ResponseType(Constants.SUCCESS, "", true,courseList);
		return response;
	}
	
	@PostMapping("/link-course-with-activity")
	public ResponseType linkCourseWithActivity() {
		return null;
		
	}
	
	@PostMapping("/search-course")
	public ResponseType searchCourse(@RequestBody TacCourseMaster course)
	{
		Pageable firstPageWithElements = PageRequest.of(course.offset,course.limit);
		List<TacCourseMaster> courses=null;
		courses=courseService.searchCourses(course,firstPageWithElements);
		
		ResponseType response = new ResponseType(Constants.SUCCESS, "", true,courses);
		return response;
		
	}
	
	@PostMapping("/count-course")
	public ResponseType countCourse() {
		return null;
		
	}

}
