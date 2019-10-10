package qa.gov.customs.training.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import qa.gov.customs.training.models.CourseManagement;
import qa.gov.customs.training.repository.CourseRepository;
import qa.gov.customs.training.service.DashboardService;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.*;


@Service
public class DashboardServiceImpl implements DashboardService {

    @Autowired
    CourseRepository courseRepository;

    @Override
    public List<CourseManagement> getPreviousCourse(String jobId)
    {
        int page =0;
        int limit=20;
        List<CourseManagement>courseList=new ArrayList<>();
        Pageable pageable =
                PageRequest.of(
                        page, limit, Sort.by("course_Id"));
       List<Object[]> object=courseRepository.getPreviousAttendedCourses(jobId,pageable);
        for (Object[] o:object) {
            CourseManagement course=new CourseManagement();
            course.setCourseName((String) o[0]);
            Date courseDate=((Date)o[1]);
            Date endDate=((Date)o[2]);
            course.setActivation_id((BigDecimal)o[3]);
            course.setCourse_date(new SimpleDateFormat("MM-dd-yyyy").format(courseDate));
            course.setEnd_date(new SimpleDateFormat("MM-dd-yyyy").format(endDate));
            course.setCourseStatus((BigDecimal) o[4]);
            courseList.add(course);

        }


            return courseList;
    }


    @Override
    public List<CourseManagement> getCurrentAttendingCourse(String jobId)
    {
        int page =0;
        int limit=20;
        List<CourseManagement>courseList=new ArrayList<>();
        Pageable pageable =
                PageRequest.of(
                        page, limit, Sort.by("course_Id"));
        List<Object[]> object=courseRepository.getCurrentlyAttendingCourses(jobId,pageable);
        for (Object[] o:object) {
            CourseManagement course=new CourseManagement();
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
    public List<CourseManagement> getApprovedCourse(String jobId)
    {
        int page =0;
        int limit=20;
        List<CourseManagement>courseList=new ArrayList<>();
        Pageable pageable =
                PageRequest.of(
                        page, limit, Sort.by("course_Id"));
        List<Object[]> object=courseRepository.getApprovedCourse(jobId,pageable);
        for (Object[] o:object) {
            CourseManagement course=new CourseManagement();
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
}
