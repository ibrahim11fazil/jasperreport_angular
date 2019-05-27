package qa.gov.customs.training.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import qa.gov.customs.training.entity.TacActivity;
import qa.gov.customs.training.entity.TacCourseAudience;
import qa.gov.customs.training.entity.TacCourseGuidelines;
import qa.gov.customs.training.entity.TacCourseMaster;
import qa.gov.customs.training.entity.TacCourseOutcome;
import qa.gov.customs.training.security.CustomPrincipal;
import qa.gov.customs.training.service.ActivityService;
import qa.gov.customs.training.service.CourseService;
import qa.gov.customs.utils.Constants;
import qa.gov.customs.utils.MessageUtil;
import qa.gov.customs.utils.models.ResponseType;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@RestController
public class CourseController {

	@Autowired
	CourseService courseService;
	@Autowired
	ActivityService activityService;

	// for creating and updating courses
	@PreAuthorize("hasAnyAuthority('create_update_course')")
	@PostMapping("/create-course")
	public ResponseType createUpdateCourse(@RequestBody TacCourseMaster course) {
		System.out.println("inside controller");
		
		
		TacCourseMaster courses = null;
		TacCourseGuidelines guideline=null;
		if (course.getCourseId() != new BigDecimal(0)) {
			ResponseType searchResponse = getCourseByName(course);
			if (searchResponse.getData() == null) {
				courses = courseService.createAndUpdateCourse(course);
				if (courses != null) {				
						if(courses.getTacCourseGuidelineses()!=null)
						{
							for(TacCourseGuidelines guidelines:course.getTacCourseGuidelineses())
							{
								System.out.println(guidelines.getDescription());
						guidelines.setTacCourseMaster(courses);
						guideline=courseService.createGuideline(guidelines);
					
						}
					}
						if(course.getTacCourseOutcomes()!=null)
						{

							for(TacCourseOutcome outcomes:course.getTacCourseOutcomes())
							{
								
								outcomes.setTacCourseMaster(courses);
						courseService.createOutcome(outcomes);
						
						}
						}
						if(course.getTacCourseAudiences()!=null)
						{

							for(TacCourseAudience audience:course.getTacCourseAudiences())
							{
								
								audience.setTacCourseMaster(courses);
						courseService.createAudience(audience);
						
						}
						}
						
					ResponseType response = new ResponseType(Constants.CREATED, MessageUtil.COURSE_CREATED, true,
							courses);
					return response;
				} else {
					ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.FAILED_COURSE, false,
							null);
					return response;
				}
			}
		}
		ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.FAILED_COURSE, false, null);
		return response;

	}

	// for creating and updating courses
	@PreAuthorize("hasAnyAuthority('disable_course')")
	@PostMapping("/disable-course")
	public ResponseType disableCourse(@RequestBody TacCourseMaster course) {
		System.out.println(course.getCourseName());
		Optional<TacCourseMaster> courses = null;
		TacCourseMaster courseDelete = null;
		if (course.getCourseId() != new BigDecimal(0)) {
			courses = courseService.getCourseById(course);
			System.out.println(courses);
			
			
			if (courses.isPresent()) {
				System.out.println("course present");
				courses.get().setActiveFlag(new BigDecimal(0));
				courseDelete = courseService.createAndUpdateCourse(courses.get());
				ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.COURSE_DISABLED, true,
						courseDelete);
				return response;
			}
			System.out.println("course not present");
			ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED_DISABLE, true,
					null);
			return response;
		}
		ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED_DISABLE, true, null);
		return response;

	}

	@PreAuthorize("hasAnyAuthority('get_course_by_id')")
	@PostMapping("/get-courses-by-id")
	public ResponseType getCourseById(@RequestBody TacCourseMaster course, CustomPrincipal principal) {
		Optional<TacCourseMaster> courseList = null;
		if (course.getCourseId() != new BigDecimal(0)) {
			courseList = courseService.getCourseById(course);
			ResponseType response = new ResponseType(Constants.SUCCESS, "", true, courseList);
			return response;
		}
		ResponseType response = new ResponseType(Constants.BAD_REQUEST, "", false, null);
		return response;
	}

	@PreAuthorize("hasAnyAuthority('link_course_with_activity')")
	@PostMapping("/link-course-with-activity")
	public ResponseType linkCourseWithActivity(@RequestBody TacCourseMaster course) {
		System.out.println(course.getCourseId());
		System.out.println(course.getTacActivities());
		TacCourseMaster linkCourse = null;
		TacCourseMaster courselink = null;
		Set<TacActivity> activities = new HashSet<TacActivity>();
		if (course.getCourseId() != new BigDecimal(0)) {
			linkCourse = courseService.findById(course);
			if (linkCourse != null) {
				System.out.println("inside link course not null");
				if (course.getTacActivities() != null) {

					for (TacActivity activity : course.getTacActivities()) {
						System.out.println("inside for loop");
						if (activityService.findActivityById(activity.getActivityId()) != null) {

							activities.add(activity);
						}
					}
					if (activities.size() > 0) {
						linkCourse.setTacActivities(activities);
						courselink = courseService.linkCourseWithActivity(linkCourse);
						ResponseType response = new ResponseType(Constants.SUCCESS, "", true, courselink);
						return response;

					}
					ResponseType response = new ResponseType(Constants.BAD_REQUEST, "", false, null);
					return response;

				}
				ResponseType response = new ResponseType(Constants.BAD_REQUEST, "", false, null);
				return response;

			}
			ResponseType response = new ResponseType(Constants.BAD_REQUEST, "", false, null);
			return response;

		}
		ResponseType response = new ResponseType(Constants.BAD_REQUEST, "", false, null);
		return response;

	}

	@PreAuthorize("hasAnyAuthority('search_course')")
	@PostMapping("/search-course")
	public ResponseType searchCourse(@RequestBody TacCourseMaster course) {
		System.out.println("search activity");
		//Pageable firstPageWithElements = PageRequest.of(course.offset, course.limit);
		Pageable firstPageWithElements = PageRequest.of(0, 5);
		List<TacCourseMaster> courses = null;
		if (course.getCourseName() != null) {
			courses = courseService.searchCourses(course, firstPageWithElements);
			if (courses != null && !courses.isEmpty()) {

				ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true, courses);
				return response;
			} else {
				ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.NOT_FOUND, false, null);
				return response;
			}
		}

		ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.NOT_FOUND, false, null);
		return response;
	}

	/*
	 * @GetMapping("/count-course") public long countCourse() { long countcourse=
	 * courseService.countCourses(); return countcourse;
	 * 
	 * }
	 */

	@PreAuthorize("hasAnyAuthority('count_course')")
	@GetMapping("/count-course")
	public ResponseType countCourse() {
		System.out.println("Inside count courses");
		long countcourse = courseService.countCourses();
		ResponseType response = new ResponseType(Constants.SUCCESS, "", true, countcourse);
		return response;

	}

	@PreAuthorize("hasAnyAuthority('list_courses')")
	@GetMapping("/list-courses")
	public ResponseType listCourses() {
		Slice<TacCourseMaster> coursesList = null;
		coursesList = courseService.listCourses();
		if(coursesList!=null)
		{
		ResponseType response = new ResponseType(Constants.SUCCESS, "", true, coursesList);
		return response;
		}
		else
		{
			ResponseType response = new ResponseType(Constants.SUCCESS, "", false, null);
			return response;
		}
	}

	@PreAuthorize("hasAnyAuthority('get_course_by_name')")
	@PostMapping("/get_course_by_name")
	public ResponseType getCourseByName(@RequestBody TacCourseMaster course) {

		List<TacCourseMaster> courseList = null;
		if (course.getCourseName() != null) {
			courseList = courseService.getCourseByCourseName(course);
			if (courseList != null && !courseList.isEmpty()) {

				ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true, courseList);
				return response;
			} else {
				ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.NOT_FOUND, false, null);
				return response;
			}

		}
		ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.BAD_REQUEST, false, null);
		return response;

	}

}
