package qa.gov.customs.training.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import qa.gov.customs.training.entity.*;
import qa.gov.customs.training.models.Course;
import qa.gov.customs.training.repository.*;
import qa.gov.customs.training.service.CourseService;
import java.text.SimpleDateFormat;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.*;
import qa.gov.customs.training.models.CourseManagement;
import qa.gov.customs.training.entity.ActivationData;
import qa.gov.customs.training.models.LocationData;

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
	@Autowired
	LocationRepository locationRepo;
	@Autowired
	PrerequisitesRepository prerequisitesRepo;
	@Autowired
	ActivationRepository activationRepo;
	@Autowired
	ActivationDataRepository activationDataRepo;

	@Autowired
	CourseRoomRepository courseRoomRepo;
	@Autowired
	TacCommSubjectsRepository subjectsRepository;
	@Autowired
	TacCommQualificationsRepository qualificationsRepository;

	@Autowired
	TacCourseDateRepository tacCourseDateRepository;
	@Autowired
	InstructorRepository instructorRepo;

	@Override
	public TacCourseMaster createAndUpdateCourse(TacCourseMaster course) {
		Set<TacCourseAudience> targetedAudiences = course.getTacCourseAudiences() != null ? course.getTacCourseAudiences() : null;
		Set<TacCourseGuidelines> tacCourseGuidelineses = course.getTacCourseGuidelineses() != null ? course.getTacCourseGuidelineses() : null;
		course.setTacCourseAudiences(null);
		course.setTacCourseGuidelineses(null);
		TacCourseMaster courseInserted = courseRepository.save(course);
		if (!courseInserted.getCourseId().equals(new BigDecimal(0)) && targetedAudiences != null) {
			targetedAudiences.forEach(item -> {
				item.setTacCourseMaster(courseInserted);
				item.setTacCourseTargetGroup(courseTargetGroupRepository.findById(item.getTargetId()).get());
				audienceRepository.save(item);
			});
			tacCourseGuidelineses.forEach(item -> {
				item.setTacCourseMaster(courseInserted);
				guidelineRepository.save(item);
			});

		}
		Set<TacCourseAudience> audiences = audienceRepository.findByCourseId(courseInserted.getCourseId());
		audiences.forEach(item -> {
			item.setTargetId(item.getTacCourseTargetGroup().getTargetId());
		});
		return getCourseById(courseInserted).get();
	}

	@Transactional
	@Override
	public BigDecimal enableOrDisableCourse(BigDecimal courseId, BigDecimal id) {
		courseRepository.enableOrDisableCourse(courseId, id);
		return new BigDecimal(1);
	}


	@Override
	public TacCourseMaster linkCourseWithActivity(TacCourseMaster course) {
		TacCourseMaster courses = courseRepository.save(course);
		return courses;
	}


	@Override
	public long countCourses() {
		long countCourses = courseRepository.count();
		return countCourses;
	}

	@Override
	public BigInteger enabledCountCourses() {
		return null;
	}

	@Override
	public Optional<TacCourseMaster> getCourseById(TacCourseMaster course) {
		Optional<TacCourseMaster> courseSelected = null;
		Set<TacCourseGuidelines> tacCourseGuidelineses = new HashSet<>();
		Set<TacCourseAudience> tacCourseAudiences = new HashSet<>();
		courseSelected = courseRepository.findById(course.getCourseId());
		List<Object[]> objects = guidelineRepository.findGuidelinesByCourseId(course.getCourseId());
		if (courseSelected.isPresent() && objects != null) {
			for (Object[] o : objects) {
				TacCourseGuidelines guideline = new TacCourseGuidelines();
				guideline.setGuidelineId((BigDecimal) o[0]);
				guideline.setDescription((String) o[1]);
				tacCourseGuidelineses.add(guideline);
			}
			courseSelected.get().setTacCourseGuidelineses(tacCourseGuidelineses);
		}

		List<Object[]> audiences = audienceRepository.findAudiencesByCourseId(course.getCourseId());
		if (courseSelected.isPresent() && audiences != null) {
			for (Object[] o : audiences) {
				TacCourseAudience audience = new TacCourseAudience();
				audience.setAudienceId((BigDecimal) o[0]);
				audience.setTargetId((BigDecimal) o[1]);
				tacCourseAudiences.add(audience);
			}
			courseSelected.get().setTacCourseAudiences(tacCourseAudiences);
		}

		return courseSelected;
	}

	@Override
	public Set<TacCourseDate> getCourseDatesByIdAndActivity(TacCourseMaster course) {
			return findAllDatesByCourseIdAndActivityId(course.getCourseId(),course.getActivityId());
	}



	@Override
	public Set<TacCourseDate> findAllDatesByCourseIdAndActivityId(BigDecimal courseId, BigDecimal activityId) {
			List<Object[]> objects = tacCourseDateRepository.findAllDatesByCourseIdAndActivityId(courseId,activityId);
		   Set<TacCourseDate> courses = new HashSet<>();
			for (Object[] o : objects) {
				TacCourseDate course = new TacCourseDate();
				course.setCourseDate((Date) o[3]);
				course.setDateId((BigDecimal) o[0]);
				courses.add(course);
			}
			return courses;
	}

	@Override
	public TacCourseMaster activateCourse(TacCourseMaster course) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Course> searchCourses(TacCourseMaster searchCriteria, Pageable firstPageWithElements) {
		//courses=courseRepository.findByCourseName(searchCriteria.getCourseName(), firstPageWithElements);
		if(searchCriteria.getCourseName()==null || searchCriteria.getCourseName().equals("") ){
			return listCourses();
		}else {
			List<Object[]> objects = courseRepository.findIdAndNameByCourseName(searchCriteria.getCourseName(), firstPageWithElements);
			List<Course> courses = new ArrayList<>();
			for (Object[] o : objects) {
				Course course = new Course();
				course.setCourseId((BigDecimal) o[0]);
				course.setCourseName((String) o[1]);
				if (o[2] != null)
					course.setStatus((BigDecimal) o[2]);
				courses.add(course);
			}
			return courses;
		}
	}

	@Override
	public BigInteger disableCountCourses() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public TacCourseMaster findById(BigDecimal id) {
		TacCourseMaster courses = null;
		courses = courseRepository.findByCourseId(id);
		return courses;
	}

	@Override
	public List<Course> listCourses() {
//		Pageable firstPageWithElements = PageRequest.of( 0,5);

		List<Object[]> objects = courseRepository.findAllCourses();
		List<Course> courses = new ArrayList<>();
		for (Object[] o : objects) {
			Course course = new Course();
			course.setCourseId((BigDecimal) o[0]);
			course.setCourseName((String) o[1]);
			courses.add(course);
		}
		return courses;
	}

	@Override
	public List<Course> listCoursesWithHourAndCategory() {
		List<Object[]> objects = courseRepository.findAllCoursesWithHoursAndCategoryId();
		List<Course> courses = new ArrayList<>();
		for (Object[] o : objects) {
			Course course = new Course();
			course.setCourseId((BigDecimal) o[0]);
			course.setCourseName((String) o[1]);
			course.setHours((BigDecimal) o[2]);
			course.setCategoryId((BigDecimal) o[3]);
			if((BigDecimal) o[3]!=null) {
				Optional<TacCourseCategory> category = courseCategoryRepository.findById((BigDecimal) o[3]);
				if (category.isPresent())
					course.setCategoryName(category.get().getDescription());
			}
			courses.add(course);
		}
		return courses;
	}

	@Override
	public List<TacCourseMaster> getCourseByCourseName(TacCourseMaster course) {
		List<TacCourseMaster> courseList = courseRepository.findByCourseName(course.getCourseName());
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
		TacCourseGuidelines guidelines = guidelineRepository.save(guideline);
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

	@Override
	public List<TacCoursePrerequisites> getAllCoursePrerequisites() {
		List<TacCoursePrerequisites> prerequisitesList = prerequisitesRepo.findAll();
		return prerequisitesList;
	}

	@Override
	public List<LocationData> getAllCourseLocation() {


		List<Object[]> objects = locationRepo.getAllLocation();
		List<LocationData> locationList = new ArrayList<>();
		for (Object[] o : objects) {
			LocationData location=new LocationData();
			location.setLocationId((BigDecimal) o[0]);
			location.setLocationName((String) o[1]);
			locationList.add(location);


		}
		return locationList;
	}

	@Override
	public TacCourseActivation saveCourseActivation(TacCourseActivation courseActivation) {
		TacCourseActivation course = activationRepo.save(courseActivation);
		return course;
	}

	@Override
	public List<TacCourseRoom> getCourseRoom(TacCourseLocation location) {
		List<TacCourseRoom> room = courseRoomRepo.findByLocationId(location.getLocationId());
		return room;
	}

	@Override
	public List<Course> getAllMainCourse() {
		List<Object[]> objects = courseRepository.findCourseBySubcourseFlag();
		List<Course> courses = new ArrayList<>();
		for (Object[] o : objects) {
			Course course = new Course();
			course.setCourseId((BigDecimal) o[0]);
			course.setCourseName((String) o[1]);
			courses.add(course);
		}
		return courses;
	}

	@Override
	public List<TacCommSubjects> getAllSubjects() {
		return subjectsRepository.findAll();
	}

	@Override
	public List<TacCommQualifications> getAllQualifications() {
		return qualificationsRepository.findAll();
	}
	@Override
	public TacCourseActivation getCourseActivationByCourseId(TacCourseMaster courseMaster)
	{
		TacCourseActivation course=activationRepo.findByCourseId(courseMaster.getCourseId());

        BigDecimal date_id=activationRepo.findDateId(courseMaster.getCourseId());
		BigDecimal roomID=activationRepo.findRoomId(courseMaster.getCourseId());
        TacCourseRoom courseRoom=courseRoomRepo.findByRoomId(roomID);
        TacCourseDate tacCourseDate =tacCourseDateRepository.findByDateId(date_id);
		if (courseRoom != null)
		 {

			course.setTacCourseRoom(courseRoom);
		}
		if(tacCourseDate !=null)
		{
			course.setTacCourseDate(tacCourseDate);
		}

		return course;
	}
	@Override
	public ActivationData getCourseActivationByActivationId(TacCourseActivation activation)
	{

       List<TacInstructorMaster> instructorMasterList= new ArrayList<>();
		ActivationData activationData = activationDataRepo.findByActivationId(activation.getActivationId());

		instructorMasterList=instructorRepo.listInstructorForActivation(activation.getActivationId());

		activationData.setInstructors(instructorMasterList);

		return activationData;
	}
	@Override
	public TacCourseLocation getCourseroom(BigDecimal locationId)
	{
		TacCourseLocation location=locationRepo.findByLocationId(locationId);

		return location;
	}
	@Override
	public TacCourseDate getCourseDate(BigDecimal courseId)
	{
		BigDecimal date_id=activationRepo.findDateId(courseId);
		TacCourseDate tacCourseDate =tacCourseDateRepository.findByDateId(date_id);
		return tacCourseDate;
	}
    @Override
	public List<TacCourseActivation> listactivations(String name, int page, int limit)
	{


		List<TacCourseActivation>activationList=null;
		List<Object[]> objects=null;
		List<TacCourseActivation> activations =  new ArrayList<>();
		Pageable pageable =
				PageRequest.of(
						page, limit, Sort.by("activationId"));
		if(name==null ||  name.equals("")){
			//System.out.println(activationRepo.findAll());
			Page<TacCourseActivation> pages = activationRepo.findAll(pageable);
			pages.forEach(item ->activations.add(item));
			return activations;
		}
		else {
			//if(page==0 && limit ==10) {
			activationList = activationRepo.findAllByCourseNameContaining(name, pageable);
			//}
		}
//			else if(page>0) {
//				page = (page * limit) + 1;
//				limit = (page + limit) - 1;
//				 objects = activationRepo.findAllByCourseNameContaining(name);
//			}
//				List<TacCourseActivation> activationsList = new ArrayList<>();
//				for (Object[] o : objects) {
//					TacCourseActivation activation = new TacCourseActivation();
//					activation.setActivationId((BigDecimal) o[0]);
//					activation.setActivationDate((Date) o[5]);
//					activation.setTacCourseMaster((TacCourseMaster) o[1]);
//
//
//					activationsList.add(activation);
//
//			}


			//activationList=activationRepo.findAllByCourseNameContaining(name);
			//List<Object[]> objects= 	activationRepo.findAllByCourseNameContaining(name, pageable);

		return activationList;

		}
//	public static Date parseDate(Date date) {
//		try {
//			return new SimpleDateFormat("yyyy-MM-dd").format(date);
//		} catch (ParseException e) {
//			return null;
//		}
//	}
	@Override
	public List<CourseManagement> getAllCurrentCourses()
	{
//		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

		//Date endDate=null;
		int page =0;
		int limit=20;
		Pageable pageable =
				PageRequest.of(
						page, limit, Sort.by("course_Id"));

		List<Object[]> objects=courseRepository.getAllCurrentCourses(pageable);
		List<CourseManagement> courseList = new ArrayList<>();
		for (Object[] o : objects) {
			CourseManagement course = new CourseManagement();
			course.setCourseName((String) o[0]);
			Date courseDate=((Date)o[1]);
			Date endDate=((Date)o[2]);
			course.setActivation_id((BigDecimal)o[3]);
			course.setCourse_date(new SimpleDateFormat("MM-dd-yyyy").format(courseDate));
			course.setEnd_date(new SimpleDateFormat("MM-dd-yyyy").format(endDate));
			courseList.add(course);

		}
		return courseList;
	}

	@Override
	public List<CourseManagement> getAllFutureCourses()
	{
		int page =0;
		int limit=20;
		Pageable pageable =
				PageRequest.of(
						page, limit, Sort.by("course_Id"));
		List<Object[]> objects=courseRepository.getAllFutureCourses(pageable);
		List<CourseManagement> courseList = new ArrayList<>();
		for (Object[] o : objects) {
			CourseManagement course = new CourseManagement();
			course.setCourseName((String) o[0]);
			Date courseDate=((Date)o[1]);
			Date endDate=((Date)o[2]);
			course.setActivation_id((BigDecimal)o[3]);
			course.setCourse_date(new SimpleDateFormat("MM-dd-yyyy").format(courseDate));
			course.setEnd_date(new SimpleDateFormat("MM-dd-yyyy").format(endDate));
			courseList.add(course);
		}
		return courseList;
	}

	@Override
	public List<CourseManagement> getAllPreviousCourses()
	{
		int page =0;
		int limit=20;
		Pageable pageable =
				PageRequest.of(
						page, limit, Sort.by("course_Id"));
		List<Object[]> objects=courseRepository.getAllPreviousCourses(pageable);
		List<CourseManagement> courseList = new ArrayList<>();
		for (Object[] o : objects) {
			CourseManagement course = new CourseManagement();
			course.setCourseName((String) o[0]);
			Date courseDate=((Date)o[1]);
			Date endDate=((Date)o[2]);
			course.setActivation_id((BigDecimal)o[3]);
			course.setCourse_date(new SimpleDateFormat("MM-dd-yyyy").format(courseDate));
			course.setEnd_date(new SimpleDateFormat("MM-dd-yyyy").format(endDate));
			courseList.add(course);
		}
		return courseList;
	}

	@Override
	public List<CourseManagement> searchAllFutureCourses(String courseName) {
		int page =0;
		int limit=20;
		Pageable pageable =
				PageRequest.of(
						page, limit, Sort.by("course_Id"));
		List<Object[]> objects=courseRepository.searchAllFutureCourses(courseName,pageable);
		List<CourseManagement> courseList = new ArrayList<>();
		for (Object[] o : objects) {
			CourseManagement course = new CourseManagement();
			course.setCourseName((String) o[0]);
			Date courseDate=((Date)o[1]);
			Date endDate=((Date)o[2]);
			course.setActivation_id((BigDecimal)o[3]);
			course.setCourse_date(new SimpleDateFormat("MM-dd-yyyy").format(courseDate));
			course.setEnd_date(new SimpleDateFormat("MM-dd-yyyy").format(endDate));
			courseList.add(course);
		}
		return courseList;
	}

	@Override
	public void setStatusOfDate(TacCourseDate courseDate)
	{

		tacCourseDateRepository.save(courseDate);
	}





	}



