package qa.gov.customs.training.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import qa.gov.customs.training.entity.*;
import qa.gov.customs.training.models.*;
import qa.gov.customs.training.repository.*;
import qa.gov.customs.training.security.CustomPrincipal;
import qa.gov.customs.training.service.CourseService;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.sql.Clob;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class CourseServiceImpl implements CourseService {

    private static final Logger logger = LoggerFactory.getLogger(CourseServiceImpl.class);
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
    @Autowired
    CourseAttendeesRepository courseAttendeesRepository;
    @Autowired
    ActivationRepository activationRepository;
    @Autowired
    EmployeeRequestRepository requestRepository;

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
        return findAllDatesByCourseIdAndActivityId(course.getCourseId(), course.getActivityId());
    }


    @Override
    public Set<TacCourseDate> findAllDatesByCourseIdAndActivityId(BigDecimal courseId, BigDecimal activityId) {
        List<Object[]> objects = tacCourseDateRepository.findAllDatesByCourseIdAndActivityId(courseId, activityId);
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
        //activity and course name not present
        if ((searchCriteria.getCourseName() == null || searchCriteria.getCourseName().equals(""))
                && (searchCriteria.getTacActivities() == null || searchCriteria.getTacActivities().size() == 0)) {
            return listCourses();
        }
        //only course name present
        else if ((searchCriteria.getCourseName() != null)
                && (searchCriteria.getTacActivities() == null || searchCriteria.getTacActivities().size() == 0)) {
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
        } else if (searchCriteria.getTacActivities() == null || searchCriteria.getTacActivities().size() > 0) {
            for (TacActivity activity : searchCriteria.getTacActivities()) {

                //only activity name present
                if ((searchCriteria.getCourseName() == null || searchCriteria.getCourseName().equals(""))
                        && (activity.getActivityName() != null)) {

                    List<Object[]> objects = courseRepository.findCourseUnderActivity(activity.getActivityName(), firstPageWithElements);
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

                //activity and course name present
                else {
                    List<Object[]> objects = courseRepository.findIdAndNameByCourseNameAndActivityName(searchCriteria.getCourseName(), activity.getActivityName(), firstPageWithElements);
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
        }
        return null;

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
    public List<TacCourseMaster> findByCourseName(String courseName)
    {
        List<TacCourseMaster> courses = null;
        courses = courseRepository.findByCourseName(courseName);
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
            if ((BigDecimal) o[3] != null) {
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
            LocationData location = new LocationData();
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
    public TacCourseActivation getCourseActivationByCourseId(TacCourseMaster courseMaster) {
        TacCourseActivation course = activationRepo.findByCourseId(courseMaster.getCourseId());

        BigDecimal date_id = activationRepo.findDateId(courseMaster.getCourseId());
        BigDecimal roomID = activationRepo.findRoomId(courseMaster.getCourseId());
        TacCourseRoom courseRoom = courseRoomRepo.findByRoomId(roomID);
        TacCourseDate tacCourseDate = tacCourseDateRepository.findByDateId(date_id);
        if (courseRoom != null) {

            course.setTacCourseRoom(courseRoom);
        }
        if (tacCourseDate != null) {
            course.setTacCourseDate(tacCourseDate);
        }

        return course;
    }

    @Override
    public ActivationData getCourseActivationByActivationId(TacCourseActivation activation) {

        List<TacInstructorMaster> instructorMasterList = new ArrayList<>();
        ActivationData activationData = activationDataRepo.findByActivationId(activation.getActivationId());

        instructorMasterList = instructorRepo.listInstructorForActivation(activation.getActivationId());

        activationData.setInstructors(instructorMasterList);

        return activationData;
    }

    @Override
    public TacCourseLocation getCourseroom(BigDecimal locationId) {
        TacCourseLocation location = locationRepo.findByLocationId(locationId);

        return location;
    }

    @Override
    public TacCourseDate getCourseDate(BigDecimal courseId) {
        BigDecimal date_id = activationRepo.findDateId(courseId);
        TacCourseDate tacCourseDate = tacCourseDateRepository.findByDateId(date_id);
        return tacCourseDate;
    }

    @Override
    public List<TacCourseActivation> listactivations(String name, int page, int limit) {


        List<TacCourseActivation> activationList = null;
        List<Object[]> objects = null;
        List<TacCourseActivation> activations = new ArrayList<>();
        Pageable pageable =
                PageRequest.of(
                        page, limit, Sort.by("activationId"));
        if (name == null || name.equals("")) {
            //logger.info(activationRepo.findAll());
            Page<TacCourseActivation> pages = activationRepo.findAll(pageable);
            pages.forEach(item -> activations.add(item));
            return activations;
        } else {
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
    public List<CourseManagement> getAllCurrentCourses() {
//		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

        //Date endDate=null;
        int page = 0;
        int limit = 20;
        Pageable pageable =
                PageRequest.of(
                        page, limit, Sort.by("course_Id"));

        List<Object[]> objects = courseRepository.getAllCurrentCourses(pageable);
        List<CourseManagement> courseList = new ArrayList<>();
        for (Object[] o : objects) {
            CourseManagement course = new CourseManagement();
            course.setCourseName((String) o[0]);
            Date courseDate = ((Date) o[1]);
            Date endDate = ((Date) o[2]);
            course.setActivation_id((BigDecimal) o[3]);
            course.setCourse_date(new SimpleDateFormat("MM-dd-yyyy").format(courseDate));
            course.setEnd_date(new SimpleDateFormat("MM-dd-yyyy").format(endDate));
            courseList.add(course);

        }
        return courseList;
    }

    @Override
    public List<CourseManagement> getAllFutureCourses() {
        int page = 0;
        int limit = 20;
        Pageable pageable =
                PageRequest.of(
                        page, limit, Sort.by("course_Id"));
        List<Object[]> objects = courseRepository.getAllFutureCourses(pageable);
        List<CourseManagement> courseList = new ArrayList<>();
        for (Object[] o : objects) {
            CourseManagement course = new CourseManagement();
            course.setCourseName((String) o[0]);
            Date courseDate = ((Date) o[1]);
            Date endDate = ((Date) o[2]);
            course.setActivation_id((BigDecimal) o[3]);
            course.setCourse_date(new SimpleDateFormat("MM-dd-yyyy").format(courseDate));
            course.setEnd_date(new SimpleDateFormat("MM-dd-yyyy").format(endDate));
            courseList.add(course);
        }
        return courseList;
    }

    @Override
    public List<CourseManagement> getAllPreviousCourses() {
        int page = 0;
        int limit = 20;
        Pageable pageable =
                PageRequest.of(
                        page, limit, Sort.by("course_Id"));
        List<Object[]> objects = courseRepository.getAllPreviousCourses(pageable);
        List<CourseManagement> courseList = new ArrayList<>();
        for (Object[] o : objects) {
            CourseManagement course = new CourseManagement();
            course.setCourseName((String) o[0]);
            Date courseDate = ((Date) o[1]);
            Date endDate = ((Date) o[2]);
            course.setActivation_id((BigDecimal) o[3]);
            course.setCourse_date(new SimpleDateFormat("dd-MM-yyyy").format(courseDate));
            course.setEnd_date(new SimpleDateFormat("dd-MM-yyyy").format(endDate));
            courseList.add(course);
        }
        return courseList;
    }

    @Override
    public List<CourseManagement> searchAllFutureCourses(TacCourseMaster courseMaster, CustomPrincipal principal) {
        try {
            int page = 0;
            String LegacyCode="";
            String courseName="";
            if(courseMaster.getLegacyCode()!=null) {
                 LegacyCode = courseMaster.getLegacyCode();
            }
            if(courseMaster.getCourseName()!=null) {
                 courseName = courseMaster.getCourseName();
            }
            List<Object[] >objects=null;
            int limit = 20;
            Pageable pageable =
                    PageRequest.of(
                            page, limit, Sort.by("course_Id"));
            if((courseMaster.getLegacyCode()==null || LegacyCode.equalsIgnoreCase("")) &&
                    (courseMaster.getCourseName()==null || courseName.equalsIgnoreCase("")))
            {
                objects = courseRepository.searchAllFutureCourses(principal.getJid(), pageable);
            }
            else if((courseMaster.getLegacyCode()!=null || !LegacyCode.equalsIgnoreCase("")) &&
                    (courseMaster.getCourseName()!=null || !courseName.equalsIgnoreCase("")))
            {
                objects = courseRepository.searchAllFutureCoursesWithCourseNameAndJid(courseMaster.getCourseName(),courseMaster.getLegacyCode(), pageable);
            }
            else if((courseMaster.getLegacyCode()!=null || !LegacyCode.equalsIgnoreCase("")) &&
                    (courseMaster.getCourseName()==null || courseName.equalsIgnoreCase("")))
            {
              objects = courseRepository.searchAllFutureCourses(courseMaster.getLegacyCode(), pageable);
            }


            else if((courseMaster.getLegacyCode()==null || LegacyCode.equalsIgnoreCase("")) &&
                    (courseMaster.getCourseName()!=null || !courseName.equalsIgnoreCase("")))
            {
                objects = courseRepository.searchAllFutureCoursesWithCourseNameAndJid(courseMaster.getCourseName(),principal.getJid(), pageable);
            }

            List<CourseManagement> courseList = new ArrayList<>();
            for (Object[] o : objects) {
                CourseManagement course = new CourseManagement();
                course.setCourseName((String) o[0]);
                Date courseDate = ((Date) o[1]);
                Date endDate = ((Date) o[2]);
                course.setActivation_id((BigDecimal) o[3]);
                course.setCourse_date(new SimpleDateFormat("dd-MM-yyyy").format(courseDate));
                course.setEnd_date(new SimpleDateFormat("dd-MM-yyyy").format(endDate));
                courseList.add(course);
            }
            return courseList;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.toString());
            return null;
        }
    }

    @Override
    public void setStatusOfDate(TacCourseDate courseDate) {

        tacCourseDateRepository.save(courseDate);
    }

    @Override
    public ActivationDate getDatesForActivation(BigDecimal activationId) {
        List<Object[]> objects = courseRepository.getDatesForActivation(activationId);

        if (objects == null || objects.size() == 0) {
            return null;
        } else {
            ActivationDate dates = new ActivationDate();
            for (Object[] o : objects) {
                dates.setActivationId(activationId);
                dates.setStartDate((Date) o[0]);
                dates.setStartDate((Date) o[1]);
            }
            return dates;
        }
    }

    @Override
    public TacCourseAttendees insertAttendeesFromWorkflow(BigInteger activationId, String jobId, String remark) {
        try {
            TacCourseAttendees item = new TacCourseAttendees();
            item.setAttendeesId(new BigDecimal("0"));
            item.setJobId(jobId);
            TacCourseActivation activation = activationRepository.findByCourseId(new BigDecimal(activationId));
            if (activation == null) {
                activation = new TacCourseActivation();
                activation.setActivationId(new BigDecimal(activationId));
            }
            item.setTacCourseActivation(activation);
            //Clob myClob = new javax.sql.rowset.serial.SerialClob(remark.toCharArray());
            item.setRemark(remark);
            return courseAttendeesRepository.save(item);
            //courseAttendeesRepository.insertAttendeesFromWorkflow(activationId, jobId, remark);
            //return 1;
        } catch (Exception e) {
            e.printStackTrace();
            //TODO log error
            logger.info("Error while enrolling workflowId:" + remark + " activationId: " + activationId + " jobid: " + jobId);
            logger.error(e.toString());
            return null;
        }
    }

    @Override
    public List<AttendeesDetails> findAttendeesWithJobIdAndActionId(BigInteger activationId, String jobId) {
        try {
            List<Object[]> objects = courseAttendeesRepository.nativefindAttendeesWithJobIdAndActionId(activationId, jobId);
            if (objects == null || objects.size() == 0) {
                return null;
            } else {
                List<AttendeesDetails> dates = new ArrayList<>();
                for (Object[] o : objects) {
                    AttendeesDetails obj = new AttendeesDetails();
                    BigDecimal item  =  (BigDecimal)o[0];
                    obj.setActivationId( item.toBigInteger());
                    obj.setJobId((String) o[1]);
                    obj.setRemark((String) o[2]);
                    dates.add(obj);
                }
                return dates;
            }
        } catch (Exception e) {
            e.printStackTrace();
            //TODO log error
            logger.error("ERROR---> ");
            logger.error(e.toString());
            return null;
        }
    }

    @Override
    public List<CourseManagement> getCoordinatorCourses(String jobId) {
        try {
            int page = 0;
            int limit = 20;
            List<CourseManagement> courseList = new ArrayList<>();
            Pageable pageable =
                    PageRequest.of(
                            page, limit, Sort.by("course_Id"));
            List<Object[]> object = courseRepository.getCoursesForCoordinator(jobId, pageable);
            for (Object[] o : object) {
                CourseManagement course = new CourseManagement();
                course.setCourseName((String) o[0]);
                Date courseDate = ((Date) o[1]);
                Date endDate = ((Date) o[2]);
                course.setActivation_id((BigDecimal) o[3]);
                course.setCourse_date(new SimpleDateFormat("dd-MM-yyyy").format(courseDate));
                course.setEnd_date(new SimpleDateFormat("dd-MM-yyyy").format(endDate));
                courseList.add(course);

            }
            return courseList;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.toString());
            return null;
        }
    }

    @Override
    public List<CourseManagement> getInstructorCourses(String jobId) {
        try {
            int page = 0;
            int limit = 20;
            List<CourseManagement> courseList = new ArrayList<>();
            Pageable pageable =
                    PageRequest.of(
                            page, limit, Sort.by("course_Id"));
            List<Object[]> object = courseRepository.getInstructorCourses(jobId, pageable);
            for (Object[] o : object) {
                CourseManagement course = new CourseManagement();
                course.setCourseName((String) o[0]);
                Date courseDate = ((Date) o[1]);
                Date endDate = ((Date) o[2]);
                course.setActivation_id((BigDecimal) o[3]);
                course.setCourse_date(new SimpleDateFormat("dd-MM-yyyy").format(courseDate));
                course.setEnd_date(new SimpleDateFormat("dd-MM-yyyy").format(endDate));
                courseList.add(course);

            }
            return courseList;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.toString());
            return null;
        }
    }
    @Override
    public void updateCourseActivityLink(BigDecimal activityId,BigDecimal courseId)
    {
        courseRepository.updateCourseLinkTable(activityId,courseId);
    }
    @Override

    public SeatCapacity getSeatCapacity(SeatCapacity capacity)
    {  SeatCapacity seatCapacity=new SeatCapacity();
        BigDecimal seatCount =requestRepository.getSeatCapacity(capacity.getActivationId());
//        for (Object[] o : object) {
//
//            seatCapacity.setActivationId((BigDecimal)o[0]);
//            seatCapacity.setCourseId((BigDecimal)o[1]);
//            seatCapacity.setSeatCapacity((BigDecimal)o[3]);
//        }
        seatCapacity.setActivationId(capacity.getActivationId());
        seatCapacity.setSeatCapacity(seatCount);
        return seatCapacity;
    }

    @Override
    public TacCourseDate cancelCourse(TacCourseActivation activation)
    {
        TacCourseDate course=new TacCourseDate();
        BigDecimal activationData=activationRepo.getDateByActivationId(activation.getActivationId());
        if(activationData!=null)
        {
            TacCourseDate date=new TacCourseDate();
            date.setDateId(activationData);
            date.setStatus(new BigDecimal(0));
             course=tacCourseDateRepository.save(date);
        }

return course;
    }


}



