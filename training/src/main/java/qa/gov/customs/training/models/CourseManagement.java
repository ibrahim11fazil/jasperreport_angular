package qa.gov.customs.training.models;

import java.math.BigDecimal;
import java.util.Date;

public class CourseManagement {

    private String courseName;
    private String course_date;
    private String end_date;
    private BigDecimal activation_id;
    private BigDecimal courseStatus;

    public BigDecimal getActivation_id() {
        return activation_id;
    }

    public void setActivation_id(BigDecimal activation_id) {
        this.activation_id = activation_id;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCourse_date() {
        return course_date;
    }

    public void setCourse_date(String course_date) {
        this.course_date = course_date;
    }

    public String getEnd_date() {
        return end_date;
    }

    public void setEnd_date(String end_date) {
        this.end_date = end_date;
    }

    public BigDecimal getCourseStatus() {
        return courseStatus;
    }

    public void setCourseStatus(BigDecimal courseStatus) {
        this.courseStatus = courseStatus;
    }
}
