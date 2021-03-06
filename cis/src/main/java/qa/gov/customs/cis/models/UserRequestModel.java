package qa.gov.customs.cis.models;

import java.io.Serializable;
import java.util.Date;

public class UserRequestModel implements Serializable {

    String workflowType;
    String fullName;
    String userId;
    String email;
    String mobile;
    String department;
    String departmentId;
    String courseId;
    String courseName;
    String processId;
    String processKey;
    String createdOn;
    String trainingRequestId;


    private String jobId;
    private String jobTitle;
    private String pernr;
    private String cnameAr;
    private String cnameEn;
    private String qid;
    private String activeFlag;
    private String positionId;
    private String secionCode;
    private String gender;
    private Date dateofbirth;
    private String passport;
    private String iban;

    private String courseActivationId;

    private String forUserJobId;
    private String forUserjobTitle;
    private String forUsercnameAr;
    private String forUserQid;

    private String fromUserJobId;
    private String fromUserCnameAr;

    private String investigationId;

    public String getInvestigationId() {
        return investigationId;
    }

    public void setInvestigationId(String investigationId) {
        this.investigationId = investigationId;
    }

    public String getFromUserJobId() {
        return fromUserJobId;
    }

    public void setFromUserJobId(String fromUserJobId) {
        this.fromUserJobId = fromUserJobId;
    }

    public String getFromUserCnameAr() {
        return fromUserCnameAr;
    }

    public void setFromUserCnameAr(String fromUserCnameAr) {
        this.fromUserCnameAr = fromUserCnameAr;
    }

    public String getForUserJobId() {
        return forUserJobId;
    }

    public void setForUserJobId(String forUserJobId) {
        this.forUserJobId = forUserJobId;
    }

    public String getForUserjobTitle() {
        return forUserjobTitle;
    }

    public void setForUserjobTitle(String forUserjobTitle) {
        this.forUserjobTitle = forUserjobTitle;
    }

    public String getForUsercnameAr() {
        return forUsercnameAr;
    }

    public void setForUsercnameAr(String forUsercnameAr) {
        this.forUsercnameAr = forUsercnameAr;
    }

    public String getForUserQid() {
        return forUserQid;
    }

    public void setForUserQid(String forUserQid) {
        this.forUserQid = forUserQid;
    }

    public String getCourseActivationId() {
        return courseActivationId;
    }

    public void setCourseActivationId(String courseActivationId) {
        this.courseActivationId = courseActivationId;
    }

    public String getJobId() {
        return jobId;
    }

    public void setJobId(String jobId) {
        this.jobId = jobId;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getPernr() {
        return pernr;
    }

    public void setPernr(String pernr) {
        this.pernr = pernr;
    }

    public String getCnameAr() {
        return cnameAr;
    }

    public void setCnameAr(String cnameAr) {
        this.cnameAr = cnameAr;
    }

    public String getCnameEn() {
        return cnameEn;
    }

    public void setCnameEn(String cnameEn) {
        this.cnameEn = cnameEn;
    }

    public String getQid() {
        return qid;
    }

    public void setQid(String qid) {
        this.qid = qid;
    }

    public String getActiveFlag() {
        return activeFlag;
    }

    public void setActiveFlag(String activeFlag) {
        this.activeFlag = activeFlag;
    }

    public String getPositionId() {
        return positionId;
    }

    public void setPositionId(String positionId) {
        this.positionId = positionId;
    }

    public String getSecionCode() {
        return secionCode;
    }

    public void setSecionCode(String secionCode) {
        this.secionCode = secionCode;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getDateofbirth() {
        return dateofbirth;
    }

    public void setDateofbirth(Date dateofbirth) {
        this.dateofbirth = dateofbirth;
    }

    public String getPassport() {
        return passport;
    }

    public void setPassport(String passport) {
        this.passport = passport;
    }

    public String getIban() {
        return iban;
    }

    public void setIban(String iban) {
        this.iban = iban;
    }

    public String getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(String departmentId) {
        this.departmentId = departmentId;
    }

    public String getWorkflowType() {
        return workflowType;
    }

    public void setWorkflowType(String workflowType) {
        this.workflowType = workflowType;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String courseId) {
        this.courseId = courseId;
    }

    public String getProcessId() {
        return processId;
    }

    public void setProcessId(String processId) {
        this.processId = processId;
    }

    public String getProcessKey() {
        return processKey;
    }

    public void setProcessKey(String processKey) {
        this.processKey = processKey;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(String createdOn) {
        this.createdOn = new Date().toString();
    }

    public String getTrainingRequestId() {
        return trainingRequestId;
    }

    public void setTrainingRequestId(String trainingRequestId) {
        this.trainingRequestId = trainingRequestId;
    }
}
