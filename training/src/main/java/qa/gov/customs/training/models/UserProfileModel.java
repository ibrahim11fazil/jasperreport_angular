package qa.gov.customs.training.models;

import qa.gov.customs.training.entity.TacJobcardConditions;
import qa.gov.customs.training.entity.TacJobcardCourseLink;
import qa.gov.customs.training.entity.TacJobcardDuties;
import qa.gov.customs.training.entity.TacJobcardSkills;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

public class UserProfileModel {


    BigDecimal jobCardNo;
    String jobGrade;
    BigDecimal admin_hours;
    BigDecimal specialised_hours;
    BigDecimal workshop_hours;
    BigDecimal courseId;
    String courseName;
    BigDecimal noOfHours;
    String category;
    BigDecimal statusFlag;
    BigDecimal mandatoryFlag;
//     Set<TacJobcardConditions> tacJobcardConditions = new HashSet<TacJobcardConditions>(0);
//     Set<TacJobcardDuties> tacJobcardDuties = new HashSet<TacJobcardDuties>(0);
//     Set<TacJobcardSkills> tacJobcardSkills = new HashSet<TacJobcardSkills>(0);
//     String job_desc_Ar;
//
//    public String getJob_desc_Ar() {
//        return job_desc_Ar;
//    }
//
//    public void setJob_desc_Ar(String job_desc_Ar) {
//        this.job_desc_Ar = job_desc_Ar;
//    }
//
//    public Set<TacJobcardConditions> getTacJobcardConditions() {
//        return tacJobcardConditions;
//    }
//
//    public void setTacJobcardConditions(Set<TacJobcardConditions> tacJobcardConditions) {
//        this.tacJobcardConditions = tacJobcardConditions;
//    }
//
//    public Set<TacJobcardDuties> getTacJobcardDuties() {
//        return tacJobcardDuties;
//    }
//
//    public void setTacJobcardDuties(Set<TacJobcardDuties> tacJobcardDuties) {
//        this.tacJobcardDuties = tacJobcardDuties;
//    }
//
//    public Set<TacJobcardSkills> getTacJobcardSkills() {
//        return tacJobcardSkills;
//    }
//
//    public void setTacJobcardSkills(Set<TacJobcardSkills> tacJobcardSkills) {
//        this.tacJobcardSkills = tacJobcardSkills;
//    }

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
