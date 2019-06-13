package qa.gov.customs.training.models;

import qa.gov.customs.training.entity.TacCourseCategory;

import java.math.BigDecimal;

public class Course {

    private BigDecimal courseId;
    private String courseName;


    public BigDecimal getCourseId() {
        return courseId;
    }

    public void setCourseId(BigDecimal courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }
}
