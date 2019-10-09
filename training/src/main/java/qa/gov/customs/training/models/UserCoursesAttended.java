package qa.gov.customs.training.models;

import java.math.BigDecimal;

public class UserCoursesAttended {


    String   jobId;
    BigDecimal  activationId;
    BigDecimal courseId;
    String courseName;
    BigDecimal duration;
    String category;
    BigDecimal attendeesId;
    BigDecimal courseStatus;

    public String getJobId() {
        return jobId;
    }

    public void setJobId(String jobId) {
        this.jobId = jobId;
    }

    public BigDecimal getActivationId() {
        return activationId;
    }

    public void setActivationId(BigDecimal activationId) {
        this.activationId = activationId;
    }

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

    public BigDecimal getDuration() {
        return duration;
    }

    public void setDuration(BigDecimal duration) {
        this.duration = duration;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public BigDecimal getAttendeesId() {
        return attendeesId;
    }

    public void setAttendeesId(BigDecimal attendeesId) {
        this.attendeesId = attendeesId;
    }

    public BigDecimal getCourseStatus() {
        return courseStatus;
    }

    public void setCourseStatus(BigDecimal courseStatus) {
        this.courseStatus = courseStatus;
    }
}
