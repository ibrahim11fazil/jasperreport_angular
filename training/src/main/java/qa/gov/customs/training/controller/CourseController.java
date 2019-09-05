package qa.gov.customs.training.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.training.entity.*;
import qa.gov.customs.training.models.Course;
import qa.gov.customs.training.models.ActivationList;
import qa.gov.customs.training.models.CourseManagement;
import qa.gov.customs.training.security.CustomPrincipal;
import qa.gov.customs.training.service.ActivityService;
import qa.gov.customs.training.service.CourseService;
import qa.gov.customs.training.utils.Constants;
import qa.gov.customs.training.utils.MessageUtil;
import qa.gov.customs.training.utils.models.ResponseType;
import qa.gov.customs.training.entity.ActivationData;
import qa.gov.customs.training.models.LocationData;
import java.math.BigDecimal;
import java.util.*;

@RestController
public class CourseController {

	private static final Logger logger = LoggerFactory.getLogger(CourseController.class);

	@Autowired
	CourseService courseService;
	@Autowired
	ActivityService activityService;

	// for creating and updating courses
	@PreAuthorize("hasAnyAuthority('create_update_course')")
	@PostMapping("/create-course")
	public ResponseType createUpdateCourse(@RequestBody TacCourseMaster course) {
		logger.info("Create course starting ");
		if (course.getCourseId().equals(new BigDecimal(0))) {
			course.setActiveFlag(new BigDecimal(1));
			TacCourseMaster courseInserted = courseService.createAndUpdateCourse(course);
			//course.getTacCourseAudiences().forEach(i -> i.courseInserted);
			ResponseType response = new ResponseType(Constants.CREATED, MessageUtil.COURSE_CREATED, true,
					courseInserted);
			return response;
		} else {
			TacCourseMaster courseExisting = courseService.findById(course.getCourseId());
			course.setActiveFlag(courseExisting.getActiveFlag());
			course.setDateCreated(courseExisting.getDateCreated());
			course.setUserCreated(courseExisting.getUserCreated());
			TacCourseMaster courseInserted = courseService.createAndUpdateCourse(course);
			ResponseType response = new ResponseType(Constants.CREATED, MessageUtil.COURSE_CREATED, true,
					courseInserted);
			return response;
		}

	}

	@PreAuthorize("hasAnyAuthority('disable_course')")
	@PostMapping("/disable-course")
	public ResponseType disableCourse(@RequestBody TacCourseMaster course) {
		logger.info(course.getCourseName());
		Optional<TacCourseMaster> courses = null;
		TacCourseMaster courseDelete = null;
		if (course.getCourseId() != new BigDecimal(0)) {
			courses = courseService.getCourseById(course);
			logger.info(courses.toString());
			
			
			if (courses.isPresent()) {
				logger.info("course present");
				BigDecimal decimal = courseService.enableOrDisableCourse(courses.get().getCourseId(),new BigDecimal(0));
				ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.COURSE_DISABLED, true,
						decimal);
				return response;
			}
			logger.info("course not present");
			ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED_DISABLE, false,
					null);
			return response;
		}
		ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED_DISABLE, false, null);
		return response;
	}

	@PreAuthorize("hasAnyAuthority('enable_course')")
	@PostMapping("/enable-course")
	public ResponseType enableCourse(@RequestBody TacCourseMaster course) {
		logger.info(course.getCourseName());
		Optional<TacCourseMaster> courses = null;
		TacCourseMaster courseDelete = null;
		if (course.getCourseId() != new BigDecimal(0)) {
			courses = courseService.getCourseById(course);
			logger.info(courses.toString());
			if (courses.isPresent()) {
				logger.info("course present");
				courses.get().setActiveFlag(new BigDecimal(1));
				BigDecimal decimal = courseService.enableOrDisableCourse(courses.get().getCourseId(),new BigDecimal(1));
				ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.COURSE_DISABLED, true,
						decimal);
				return response;
			}
			logger.info("course not present");
			ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED_DISABLE, false,
					null);
			return response;
		}
		ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED_DISABLE, false, null);
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

	@PreAuthorize("hasAnyAuthority('get_course_by_id')")
	@PostMapping("/get-course-dates-by-id-and-activity-id")
	public ResponseType getCourseByIdAndActivityId(@RequestBody TacCourseMaster course, CustomPrincipal principal) {
		Set<TacCourseDate> courseList = null;
		if (course.getCourseId() != new BigDecimal(0)) {
			courseList = courseService.getCourseDatesByIdAndActivity(course);
			ResponseType response = new ResponseType(Constants.SUCCESS, "", true, courseList);
			return response;
		}
		ResponseType response = new ResponseType(Constants.BAD_REQUEST, "", false, null);
		return response;
	}

	@PreAuthorize("hasAnyAuthority('link_course_with_activity')")
	@PostMapping("/link-course-with-activity")
	public ResponseType linkCourseWithActivity(@RequestBody TacCourseMaster course) {
		logger.info(course.getCourseId().toString());
		logger.info(course.getTacActivities().toString());
		TacCourseMaster linkCourse = null;
		TacCourseMaster courselink = null;
		Set<TacActivity> activities = new HashSet<TacActivity>();
		Set<TacCourseDate> courseDate=new HashSet<TacCourseDate>();
		Set<TacCoursePrerequisites> prerequisitesList = new HashSet<TacCoursePrerequisites>();
		Set<TacCourseDate> date = new HashSet<TacCourseDate>();
		if (course.getCourseId() != new BigDecimal(0)) {
			linkCourse = courseService.findById(course.getCourseId());
			if (linkCourse != null) {
				logger.info("inside link course not null");
				//linkCourse.setPrerequisitesId(course.getPrerequisitesId());
				linkCourse.setLocationType(course.getLocationType());
				linkCourse.setSubcourseFlag(course.getSubcourseFlag());
					Set<TacCourseDate> dates=course.getTacCourseDates();
				if(linkCourse.getDurationFlag()!=null) {
					for(TacCourseDate dateOption:dates)
					{
					Calendar  cal=Calendar.getInstance();
					cal.setTime(dateOption.getCourseDate());

						if (linkCourse.getDurationFlag().equals(new BigDecimal(1))) {
							cal.add(Calendar.YEAR, Integer.valueOf(linkCourse.getDuration().intValue()));
						}
						if (linkCourse.getDurationFlag().equals(new BigDecimal(2))) {
							cal.add(Calendar.MONTH, Integer.valueOf(linkCourse.getDuration().intValue()));
						}
						if (linkCourse.getDurationFlag().equals(new BigDecimal(3))) {

							for (int i = 1; i <= Integer.valueOf(linkCourse.getDuration().intValue()) - 1; i++) {

								cal.add(Calendar.DATE, 1);
								while (cal.get(Calendar.DAY_OF_WEEK) == Calendar.SATURDAY || cal.get(Calendar.DAY_OF_WEEK) == Calendar.FRIDAY) {
									cal.add(Calendar.DATE, 1);
								}
							}

						}

						dateOption.setEndDate(cal.getTime());
						courseDate.add(dateOption);

					}
				}
					if(courseDate!=null)
					{
						linkCourse.setTacCourseDates(courseDate);
					}
				if(course.getTacCoursePrerequisiteses()!=null)
				{
					for(TacCoursePrerequisites prerequisites:course.getTacCoursePrerequisiteses())
					{
						prerequisitesList.add(prerequisites);
					}
				}
				if (course.getTacActivities() != null) {

					for (TacActivity activity : course.getTacActivities()) {
						logger.info("inside for loop");
						if (activityService.findActivityById(activity.getActivityId()) != null) {

							activities.add(activity);
						}
					}
					for(TacActivity activity:course.getTacActivities()) {
						for (TacCourseDate dates1 : linkCourse.getTacCourseDates()) {
							logger.info("inside for loop");
							dates1.setTacCourseMaster(course);
							dates1.setTacActivity(activity);
							date.add(dates1);
						}
					}
					if (date.size() > 0) {
						linkCourse.setTacCourseDates(date);
					}
					if(prerequisitesList.size()>0)
					{
						linkCourse.setTacCoursePrerequisiteses(prerequisitesList);
					}
					}
					if (activities.size() > 0) {
						linkCourse.setTacActivities(activities);

						courselink = courseService.linkCourseWithActivity(linkCourse);
						ResponseType response = new ResponseType(Constants.SUCCESS, "course linked with activity", true, courselink);

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
		logger.info("search activity");
		logger.info(course.getCourseName());
		//Pageable firstPageWithElements = PageRequest.of(course.offset, course.limit);
		Pageable firstPageWithElements = PageRequest.of(0, 20);
		List<Course> courses = null;

			courses = courseService.searchCourses(course, firstPageWithElements);
			if (courses != null && !courses.isEmpty()) {

				ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true, courses);
				return response;
			} else {
				ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.NOT_FOUND, false, null);
				return response;
			}

	}

	@PreAuthorize("hasAnyAuthority('search_course')")
	@PostMapping("/get-course-by-id")
	public ResponseType getCourseById(@RequestBody TacCourseMaster course) {
		logger.info("get activity By Id" + course.toString());
		Optional<TacCourseMaster> courses = null;
		if (course.getCourseId() != null) {
			courses = courseService.getCourseById(course);
			if (courses != null && courses.isPresent()) {
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

	@PreAuthorize("hasAnyAuthority('count_course')")
	@GetMapping("/count-course")
	public ResponseType countCourse() {
		logger.info("Inside count courses");
		long countcourse = courseService.countCourses();
		ResponseType response = new ResponseType(Constants.SUCCESS, "", true, countcourse);
		return response;

	}

	@PreAuthorize("hasAnyAuthority('list_courses')")
	@GetMapping("/list-courses")
	public ResponseType listCourses() {
		List<Course> coursesList = null;
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
	@PreAuthorize("hasAnyAuthority('list_courses')")
	@GetMapping("/list-courses-with-hour-and-category")
	public ResponseType listCoursesWithHourAndCategory() {
		List<Course> coursesList = null;
		coursesList = courseService.listCoursesWithHourAndCategory();
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

	@GetMapping("/get-all-course-categories")
	public ResponseType getAllCourseCategories() {
		List<TacCourseCategory> categories = null;
		categories = courseService.findCourseCategories();
			if (categories != null && !categories.isEmpty()) {

				ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true, categories);
				return response;
			} else {
				ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.NOT_FOUND, false, null);
				return response;
			}

	}

	@GetMapping("/get-all-course-target-groups")
	public ResponseType getAllCourseTargetGroups() {
		List<TacCourseTargetGroup> categories = null;
		categories = courseService.findCourseTargetGroups();
		if (categories != null && !categories.isEmpty()) {

			ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true, categories);
			return response;
		} else {
			ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.NOT_FOUND, false, null);
			return response;
		}
	}

	@GetMapping("/get-all-course-prerequisites")
	public ResponseType getAllCoursePrerequisites() {
		List<TacCoursePrerequisites> prerequisites = null;
		prerequisites = courseService.getAllCoursePrerequisites();
		System.out.println("outside preerquisites");
		if (prerequisites != null && !prerequisites.isEmpty()) {
			System.out.println("inside preerquisites");

			ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true, prerequisites);
			return response;
		} else {
			ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.NOT_FOUND, false, null);
			return response;
		}
	}
	@PreAuthorize("hasAnyAuthority('get_all_course_location')")
	@GetMapping("/get-all-course-location")
	public ResponseType getAllCourseLocation() {
		List<LocationData> location = null;
		location = courseService.getAllCourseLocation();

		if (location != null && !location.isEmpty()) {


			ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true, location);
			return response;
		} else {

			ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.NOT_FOUND, false, null);
			return response;
		}
	}


	@PreAuthorize("hasAnyAuthority('activate_course')")
	@PostMapping("/activate-course")
	public ResponseType activateCourse(@RequestBody TacCourseActivation courseActivation) {
		TacCourseActivation activatedCourse=null;
		TacCourseMaster courseMaster=null;

  		if(courseActivation!=null)
		{
			courseActivation.setActivationDate(new Date());

			activatedCourse=courseService.saveCourseActivation(courseActivation);
			activatedCourse.getTacCourseDate().setStatus(new BigDecimal(1));
			courseService.setStatusOfDate(activatedCourse.getTacCourseDate());
			ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.COURSE_ACTIVATE, true, activatedCourse);
			return response;
		}
		else
		{
			ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.COURSE_ACTIVATE_FAIL, false, null);
			return response;

		}

	}

	@PostMapping("/get-training-room")
	public ResponseType getTrainingRoom(@RequestBody TacCourseLocation courseLocation) {
		List<TacCourseRoom> courseRoom = null;

		if (courseLocation != null) {
			courseRoom = courseService.getCourseRoom(courseLocation);
			ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true, courseRoom);
			return response;
		} else {
			ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.NOT_FOUND, false, null);
			return response;

		}
	}

	@GetMapping("/get-all-mainCourse")
	public ResponseType getAllMainCourses() {
		List<Course> course = null;
		course = courseService.getAllMainCourse();

		if (course != null && !course.isEmpty()) {


			ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true, course);
			return response;
		} else {

			ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.NOT_FOUND, false, null);
			return response;
		}
	}
	@PreAuthorize("hasAnyAuthority('courseActivation_detail')")
	@PostMapping("/get-all-courseActivation")
	public ResponseType getCourseActivationById(@RequestBody TacCourseMaster courseMaster)
	{
		TacCourseActivation course = null;
		course = courseService.getCourseActivationByCourseId(courseMaster);

		if (course != null) {

			ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true, course);
			return response;
		} else {

			ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.NOT_FOUND, false, null);
			return response;
		}
	}
	@PreAuthorize("hasAnyAuthority('courseActivation_list')")
	@PostMapping("/get-all-activation-list")
	public ResponseType getActivationsById(@RequestBody TacCourseActivation courseActivation)
	{
		ActivationData course = null;
		course = courseService.getCourseActivationByActivationId(courseActivation);

		if (course != null) {

			ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true, course);
			return response;
		} else {

			ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.NOT_FOUND, false, null);
			return response;
		}
	}
	@PreAuthorize("hasAnyAuthority('list_activations')")
	@PostMapping("/list-activations-by-courseName")
	public ResponseType listactivations(@RequestBody  TacCourseMaster courseMaster) {
		List<TacCourseActivation> activations = null;
		Set<ActivationList> listActivity=new HashSet<>();

		activations = courseService.listactivations(courseMaster.getCourseName(),courseMaster.getStart(),courseMaster.getLimit());
		if(activations!=null) {
			for (TacCourseActivation activation : activations) {
				ActivationList activationDetail=new ActivationList();
				activationDetail.setActivationId(activation.getActivationId());
				activationDetail.setActivationDate(activation.getActivationDate());
				//activationDetail.setCourseName(courseMaster.getCourseName());
				activationDetail.setCourseName(activation.getTacCourseMaster().getCourseName());
				if(activationDetail!=null) {
					listActivity.add(activationDetail);
				}

			}

		}
			ResponseType response = new ResponseType(Constants.SUCCESS, "", true, listActivity);
			return response;

	}
	@PreAuthorize("hasAnyAuthority('course_date_detail')")
	@PostMapping("/get-course-date")
	public ResponseType getCourseDate(@RequestBody  TacCourseMaster courseMaster)
	{
		TacCourseDate courseDate=courseService.getCourseDate(courseMaster.getCourseId());
		if(courseDate!=null)
		{
			ResponseType response = new ResponseType(Constants.SUCCESS, "", true, courseDate);
			return response;
		}
		else
		{
			ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, "", false, null);
			return response;
		}
	}
	@PreAuthorize("hasAnyAuthority('get_training_room')")
	@PostMapping("/get-course-room")
	public ResponseType getCourseRoom(@RequestBody  TacCourseLocation courseLocation)
	{
		TacCourseLocation location=courseService.getCourseroom(courseLocation.getLocationId());
		if(courseLocation!=null)
		{
			ResponseType response = new ResponseType(Constants.SUCCESS, "", true, location);
			return response;
		}
		else
		{
			ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, "", false, null);
			return response;
		}
	}
	@PreAuthorize("hasAnyAuthority('get_current_courses')")
	@GetMapping("/get-current-courses")
	public ResponseType getCurrentCourses()
	{
		List<CourseManagement> courseManagement=null;
		courseManagement=courseService.getAllCurrentCourses();
		if(courseManagement!=null || !courseManagement.isEmpty()) {

			ResponseType response = new ResponseType(Constants.SUCCESS, "", true, courseManagement);
			return response;
		}
		else
		{
			ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, "", false, null);
			return response;
		}


	}
	@PreAuthorize("hasAnyAuthority('get_future_courses')")
	@GetMapping("/get-future-courses")
	public ResponseType getFutureCourses()
	{
		List<CourseManagement> courseManagement=null;
		courseManagement=courseService.getAllFutureCourses();
		if(courseManagement!=null || !courseManagement.isEmpty()) {

			ResponseType response = new ResponseType(Constants.SUCCESS, "", true, courseManagement);
			return response;
		}
		else
		{
			ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, "", false, null);
			return response;
		}

	}
	@PreAuthorize("hasAnyAuthority('get_previous_courses')")
	@GetMapping("/get-previous-courses")
	public ResponseType getPreviousCourses()
	{
		List<CourseManagement> courseManagement=null;
		courseManagement=courseService.getAllPreviousCourses();
		if(courseManagement!=null || !courseManagement.isEmpty()) {

			ResponseType response = new ResponseType(Constants.SUCCESS, "", true, courseManagement);
			return response;
		}
		else
		{
			ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, "", false, null);
			return response;
		}

	}

	// Added by Ajna for search future courses

	@PreAuthorize("hasAnyAuthority('search_future_courses')")
	@PostMapping ("/search-future-courses")
	public ResponseType searchFutureCourses()
	{
		List<CourseManagement> courseManagement=null;
		courseManagement=courseService.searchAllFutureCourses();
		if(courseManagement!=null || !courseManagement.isEmpty()) {

			ResponseType response = new ResponseType(Constants.SUCCESS, "", true, courseManagement);
			return response;
		}
		else
		{
			ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, "", false, null);
			return response;
		}

	}

	}
