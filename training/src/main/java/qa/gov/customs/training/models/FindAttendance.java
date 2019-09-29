package qa.gov.customs.training.models;

import java.math.BigDecimal;
import java.util.Date;

public class FindAttendance {
    private String courseName;
    private Date course_date;
    private Date end_date;
    private BigDecimal activation_id;


    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public Date getCourse_date() {
        return course_date;
    }

    public void setCourse_date(Date course_date) {
        this.course_date = course_date;
    }

    public Date getEnd_date() {
        return end_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
    }

    public BigDecimal getActivation_id() {
        return activation_id;
    }

    public void setActivation_id(BigDecimal activation_id) {
        this.activation_id = activation_id;
    }
}
