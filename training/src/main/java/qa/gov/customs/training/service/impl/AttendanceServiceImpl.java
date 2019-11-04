package qa.gov.customs.training.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import qa.gov.customs.training.entity.TacCourseActivation;
import qa.gov.customs.training.entity.TacCourseAttendence;
import qa.gov.customs.training.models.CourseManagement;
import qa.gov.customs.training.models.EmployeeData;
import qa.gov.customs.training.models.FindAttendance;
import qa.gov.customs.training.repository.CourseAttendeesRepository;
import qa.gov.customs.training.repository.CourseRepository;
import qa.gov.customs.training.repository.MawaredRepository;
import qa.gov.customs.training.repository.TacAttendanceRepository;
import qa.gov.customs.training.service.AttendanceService;

import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;


@Service
public class AttendanceServiceImpl implements AttendanceService {

    private static final Logger logger = LoggerFactory.getLogger(AttendanceServiceImpl.class);

    @Autowired
    MawaredRepository mawaredRepo;
    @Autowired
    TacAttendanceRepository attendanceRepo;
    @Autowired
    CourseRepository courseRepository;
    @Autowired
    CourseAttendeesRepository attendeesRepo;

    @Override
    public Set<EmployeeData> getEmployeeDataForAttendance(TacCourseActivation activation) {
        List<Object[]> objects = mawaredRepo.getEmpData(activation.getActivationId());
        Set<EmployeeData> empdata = new HashSet<EmployeeData>();

        for (Object[] o : objects) {
            EmployeeData emp = new EmployeeData();
            emp.setJobId((String) o[0]);
            emp.setCnameAr((String) o[1]);
            emp.setDepartment((String) o[2]);
            emp.setJobTitle((String) o[3]);
            emp.setMobile((String) o[4]);
            emp.setAttendeesId((BigDecimal) o[6]);

            empdata.add(emp);
        }
        return empdata;
    }

    @Override
    public TacCourseAttendence markAttendance(TacCourseAttendence attendance) {
        TacCourseAttendence attendanceData = attendanceRepo.save(attendance);
        return attendanceData;
    }

    // public List<TacCourseAttendence>  markInitialAttendance(List<TacCourseAttendence> attendance) {
//        List<TacCourseAttendence> attendanceDetails= new ArrayList<>();
//
//        for(TacCourseAttendence  attend :attendance)
//        {
//           BigDecimal attendeesId= attend.getTacCourseAttendees().getAttendeesId();
//           // TacCourseAttendence attendanceDataExists=attendanceRepo.findAttendanceForToday(attendeesId);
//            if(attendanceDataExists==null)
//            {
//                TacCourseAttendence saveInitialAttendance=attendanceRepo.save(attend);
//                attendanceDetails.add(saveInitialAttendance);
//            }
//
//        }
//
//
//
//        List<TacCourseAttendence> attendanceData=attendanceRepo.saveAll(attendance);
//        return  attendanceDetails;


    @Override
    public TacCourseAttendence checkIfAlreadyMarked(TacCourseAttendence attendance, Date date) {
//        SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd");
//        String inActiveDate = null;
//
//            inActiveDate = format1.format(date);
        TacCourseAttendence attendancePresent = attendanceRepo.findAttendance(attendance.getTacCourseAttendees().getAttendeesId(), date);
        return attendancePresent;
    }

    @Override
    public int getWorkingDays(FindAttendance getAttendance) {
        int workDays = 0;
        Calendar startCal = Calendar.getInstance();
        startCal.setTime(getAttendance.getCourse_date());

        Calendar endCal = Calendar.getInstance();
        endCal.setTime(getAttendance.getEnd_date());

        do {
            if (startCal.get(Calendar.DAY_OF_WEEK) != Calendar.FRIDAY && startCal.get(Calendar.DAY_OF_WEEK) != Calendar.SATURDAY) {
                ++workDays;
            }
            startCal.add(Calendar.DAY_OF_MONTH, 1);
        } while (startCal.getTimeInMillis() <= endCal.getTimeInMillis());


//        ResponseType response = new ResponseType(Constants.CREATED, MessageUtil.FOUND, true,
//                workDays);
        return workDays;
    }

    @Override
    public List<EmployeeData> getPreviousAttendance(FindAttendance previousAttendance) {

        //List<EmployeeData> empPreviousDayAttendance

        List<EmployeeData> empdata = new ArrayList<>();
        List<Object[]> objects = mawaredRepo.getEmpPreviousAttendance(previousAttendance.getActivation_id(), previousAttendance.getCourse_date());
        logger.info("CalendarDate"+ previousAttendance.getCourse_date());
        for (Object[] o : objects) {

            EmployeeData emp = new EmployeeData();
            emp.setJobId((String) o[0]);
            emp.setCnameAr((String) o[1]);
            emp.setDepartment((String) o[2]);
            emp.setJobTitle((String) o[3]);
            emp.setMobile((String) o[4]);
            emp.setAttendeesId((BigDecimal) o[6]);
            emp.setAttendanceFlag((BigDecimal) o[7]);
            emp.setAttendanceDate((Date)o[8]);
            logger.info("AttendanceDate"+emp.getAttendanceDate());
            if (emp.getAttendanceFlag().compareTo(new BigDecimal(1)) == 0) {
                emp.setChecked(true);
            } else {
                emp.setChecked(false);
            }
            empdata.add(emp);
        }
        return empdata;

    }

    @Override
    public Set<EmployeeData> getCourseCompletionAttendance(FindAttendance getAttendance) {
        List<Object[]> objects = mawaredRepo.getEmpDataforAttendance(getAttendance.getActivation_id());
        int workDays = getWorkingDays(getAttendance);

        Set<EmployeeData> empdata = new HashSet<EmployeeData>();

        for (Object[] o : objects) {

            EmployeeData emp = new EmployeeData();
            emp.setJobId((String) o[0]);
            emp.setCnameAr((String) o[1]);
            emp.setDepartment((String) o[2]);
            emp.setJobTitle((String) o[3]);
            emp.setMobile((String) o[4]);
            emp.setAttendeesId((BigDecimal) o[6]);
            emp.setCount((BigDecimal) o[7]);

            Double percentageAttendance = (emp.getCount().doubleValue() / workDays) * 100;

            emp.setPercentage(percentageAttendance.intValue());
            empdata.add(emp);
            if (percentageAttendance == 100) {
                BigDecimal courseStatus = new BigDecimal(1);
                try {
                    attendeesRepo.updateCourseStatus(emp.getAttendeesId(), courseStatus);
                } catch (Exception e) {

                }

            } else {
                BigDecimal courseStatus = new BigDecimal(0);
                try {
                    attendeesRepo.updateCourseStatus(emp.getAttendeesId(), courseStatus);
                } catch (Exception e) {

                }

            }
        }
        return empdata;
    }

    @Override
    public List<CourseManagement> getCourseFilter(BigDecimal courseTime) {
        int page = 0;
        int limit = 20;
        List<Object[]> objects = null;
        Pageable pageable =
                PageRequest.of(
                        page, limit, Sort.by("course_Id"));
        if (courseTime.compareTo(new BigDecimal(1)) == 0) {
            Calendar c = Calendar.getInstance();
            //c.add(Calendar.YEAR, 1);
            c.set(Calendar.MONTH, 11);//11 = december
            c.set(Calendar.DAY_OF_MONTH, 31);//dec 31

            Date coursePeriod = c.getTime();

            objects = courseRepository.getCourseForNextYear(coursePeriod, pageable);
        } else if (courseTime.compareTo(new BigDecimal(2)) == 0) {

            Calendar c = Calendar.getInstance();
            c.add(Calendar.MONTH, 1);
            c.set(Calendar.DAY_OF_MONTH, 1);//
            Date NextMnth = c.getTime();

            Calendar c1 = Calendar.getInstance();
            c1.add(Calendar.MONTH, 2);
            c1.set(Calendar.DAY_OF_MONTH, 1);//
            Date lastMnth = c1.getTime();
            objects = courseRepository.getCourseForMonth(NextMnth, lastMnth, pageable);

        } else if (courseTime.compareTo(new BigDecimal(3)) == 0) {
            Calendar c = Calendar.getInstance();
            c.set(Calendar.DAY_OF_WEEK, Calendar.SUNDAY);
            Date nextWeek = c.getTime();
            //logger.info();
            DateFormat df = new SimpleDateFormat("EEE dd/MM/yyyy");
            logger.info(df.format(c.getTime()));

            for (int i = 0; i < 6; i++) {
                c.add(Calendar.DATE, 1);
            }
            Date weekend = c.getTime();
            logger.info(df.format(c.getTime()));
            //logger.info();
            c.add(Calendar.DATE, 7);
            Date nextweek = c.getTime();
            logger.info(df.format(c.getTime()));
            //logger.info();
            objects = courseRepository.getCourseForNextWeek(weekend, nextweek, pageable);
        } else if (courseTime.compareTo(new BigDecimal(4)) == 0) {
            objects = courseRepository.getAllFutureCourses(pageable);
        }

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
}
