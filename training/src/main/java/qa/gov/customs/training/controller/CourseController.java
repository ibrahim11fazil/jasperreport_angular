package qa.gov.customs.training.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import qa.gov.customs.training.entity.TacActivity;
import qa.gov.customs.training.entity.TacCourseMaster;
import qa.gov.customs.training.security.CustomPrincipal;
import qa.gov.customs.training.service.ActivityService;
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
	@Autowired
	ActivityService activityService;

	// @PreAuthorize("hasAnyAuthority('train_admin','role_user')")
	// for creating and updating courses
	@PreAuthorize("hasAnyAuthority('create_update_course')")
	@PostMapping("/create-course")
	public ResponseType createUpdateCourse(@RequestBody TacCourseMaster course) {
		TacCourseMaster courses = null;
		courses = courseService.createAndUpdateCourse(course);
		ResponseType response = new ResponseType(Constants.CREATED, MessageUtil.COURSE_CREATED, true, courses);
		return response;
	}

	// @PreAuthorize("hasAnyAuthority('train_admin','role_user')")
	// for creating and updating courses
	@PreAuthorize("hasAnyAuthority('disable_course')")
	@PostMapping("/disable-course")
	public ResponseType disableCourse(@RequestBody TacCourseMaster course) {
		Optional<TacCourseMaster> courses = null;
		TacCourseMaster courseDelete = null;
		courses = courseService.getCourseById(course);
		if (courses != null) {
			courses.get().setActiveFlag(new BigDecimal(0));
			courseDelete = courseService.createAndUpdateCourse(course);
		}
		ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.COURSE_DISABLED, true, courseDelete);
		return response;
	}

	@PreAuthorize("hasAnyAuthority('get_course_by_id')")
	@PostMapping("/get-courses-by-id")
	public ResponseType getCourseById(@RequestBody TacCourseMaster course, CustomPrincipal principal) {
		Optional<TacCourseMaster> courseList = null;
		courseList = courseService.getCourseById(course);
		ResponseType response = new ResponseType(Constants.SUCCESS, "", true, courseList);
		return response;
	}

	@PreAuthorize("hasAnyAuthority('link_course_with_activity')")
	@PostMapping("/link-course-with-activity")
	public ResponseType linkCourseWithActivity(@RequestBody TacCourseMaster course) {
		TacCourseMaster linkCourse = null;
		if (course.getCourseId() != new BigDecimal(0)) {
			if (courseService.findById(course) != null) {
				if (course.getTacActivities() != null) {

					for (TacActivity activity : course.getTacActivities()) {
						if (activityService.findActivityById(activity.getActivityId()) != null) {
							linkCourse = courseService.linkCourseWithActivity(course);
						}
					}
				}
			}

		}
		ResponseType response = new ResponseType(Constants.SUCCESS, "", true, linkCourse);
		return response;

	}

	@PreAuthorize("hasAnyAuthority('search_course')")
	@PostMapping("/search-course")
	public ResponseType searchCourse(@RequestBody TacCourseMaster course) {
		Pageable firstPageWithElements = PageRequest.of(course.offset, course.limit);
		List<TacCourseMaster> courses = null;
		courses = courseService.searchCourses(course, firstPageWithElements);

		ResponseType response = new ResponseType(Constants.SUCCESS, "", true, courses);
		return response;

		
	}
	
	/*@GetMapping("/count-course")
	public long countCourse() {
		long countcourse= courseService.countCourses();
		return countcourse;

	}*/

	@PreAuthorize("hasAnyAuthority('count_course')")
	@GetMapping("/count-course")
	public ResponseType countCourse() {
		long countcourse= courseService.countCourses();
		ResponseType response = new ResponseType(Constants.SUCCESS,"", true,countcourse);
		return response;

	}

	@PreAuthorize("hasAnyAuthority('list_courses')")
	@GetMapping("/list-courses")
      public ResponseType listCourses() {
        List<TacCourseMaster> coursesList = null;
        coursesList = courseService.listCourses();
        ResponseType response = new ResponseType(Constants.SUCCESS, "", true, coursesList);
        return response;
    }
	
	

}
