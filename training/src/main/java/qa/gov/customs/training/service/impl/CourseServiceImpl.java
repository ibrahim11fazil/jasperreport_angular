package qa.gov.customs.training.service.impl;

import org.springframework.stereotype.Service;
import qa.gov.customs.training.entity.TacCourseMaster;
import qa.gov.customs.training.service.ActivityService;
import qa.gov.customs.training.service.CourseService;

import java.math.BigInteger;
import java.util.List;

@Service
public class CourseServiceImpl  implements CourseService {

    @Override
    public TacCourseMaster createAndUpdateCourse(TacCourseMaster activity) {
        return null;
    }

    @Override
    public TacCourseMaster disableCourse(TacCourseMaster activity) {
        return null;
    }

    @Override
    public TacCourseMaster linkCourseWithActivity(TacCourseMaster activity) {
        return null;
    }

    @Override
    public List<TacCourseMaster> listCourses() {
        return null;
    }

    @Override
    public List<TacCourseMaster> listCourses(TacCourseMaster searchCriteria) {
        return null;
    }

    @Override
    public BigInteger countCourses() {
        return null;
    }

    @Override
    public BigInteger disableCountCourses() {
        return null;
    }

    @Override
    public BigInteger enabledCountCourses() {
        return null;
    }

    @Override
    public TacCourseMaster getCourseById(BigInteger integer) {
        return null;
    }
}
