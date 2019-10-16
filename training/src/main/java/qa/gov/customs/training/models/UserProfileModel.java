package qa.gov.customs.training.models;

import java.math.BigDecimal;

public class UserProfileModel {


   BigDecimal jobCardNo;
   String   jobGrade;
   BigDecimal  admin_hours;
   BigDecimal specialised_hours;
   BigDecimal  workshop_hours;
   BigDecimal courseId;
   String courseName;
   BigDecimal noOfHours;
   String category;
   BigDecimal statusFlag;
   BigDecimal mandatoryFlag;

    public BigDecimal getJobCardNo() {
        return jobCardNo;
    }

    public void setJobCardNo(BigDecimal jobCardNo) {
        this.jobCardNo = jobCardNo;
    }

    public String getJobGrade() {
        return jobGrade;
    }

    public void setJobGrade(String jobGrade) {
        this.jobGrade = jobGrade;
    }

    public BigDecimal getAdmin_hours() {
        return admin_hours;
    }

    public void setAdmin_hours(BigDecimal admin_hours) {
        this.admin_hours = admin_hours;
    }

    public BigDecimal getSpecialised_hours() {
        return specialised_hours;
    }

    public void setSpecialised_hours(BigDecimal specialised_hours) {
        this.specialised_hours = specialised_hours;
    }

    public BigDecimal getWorkshop_hours() {
        return workshop_hours;
    }

    public void setWorkshop_hours(BigDecimal workshop_hours) {
        this.workshop_hours = workshop_hours;
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

    public BigDecimal getNoOfHours() {
        return noOfHours;
    }

    public void setNoOfHours(BigDecimal noOfHours) {
        this.noOfHours = noOfHours;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public BigDecimal getStatusFlag() {
        return statusFlag;
    }

    public void setStatusFlag(BigDecimal statusFlag) {
        this.statusFlag = statusFlag;
    }

    public BigDecimal getMandatoryFlag() {
        return mandatoryFlag;
    }

    public void setMandatoryFlag(BigDecimal mandatoryFlag) {
        this.mandatoryFlag = mandatoryFlag;
    }
}
