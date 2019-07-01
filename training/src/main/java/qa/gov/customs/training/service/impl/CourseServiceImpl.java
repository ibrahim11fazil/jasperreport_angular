package qa.gov.customs.training.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import qa.gov.customs.training.entity.*;
import qa.gov.customs.training.models.Course;
import qa.gov.customs.training.repository.*;
import qa.gov.customs.training.service.CourseService;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.*;

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
	CourseRoomRepository courseRoomRepo;
	@Autowired
	TacCommSubjectsRepository subjectsRepository;
	@Autowired
	TacCommQualificationsRepository qualificationsRepository;

	@Autowired
	TacCourseDateRepository tacCourseDateRepository;

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
	public List<TacCourseLocation> getAllCourseLocation() {
		List<TacCourseLocation> locationList = locationRepo.findAll();
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
	public TacCourseRoom getCourseroom(BigDecimal courseId)
	{
		BigDecimal roomID=activationRepo.findRoomId(courseId);
		TacCourseRoom courseRoom=courseRoomRepo.findByRoomId(roomID);
		return courseRoom;
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
		System.out.println(page);
		System.out.println(limit);
		List<TacCourseActivation> activations =  new ArrayList<>();
		Pageable pageable =
				PageRequest.of(
						page, limit, Sort.by("activationId"));
		if(name==null &&  name.equals("")){
			//System.out.println(activationRepo.findAll());
			Page<TacCourseActivation> pages = activationRepo.findAll(pageable);
			pages.forEach(item ->activations.add(item));
			return activations;
		}
		else {
			//return activationRepo.findAllByNameContaining(name, pageable);
			return null;
		}
	}
}
