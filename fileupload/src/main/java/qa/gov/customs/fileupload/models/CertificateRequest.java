package qa.gov.customs.fileupload.models;

import java.math.BigDecimal;

public class CertificateRequest {


    BigDecimal certificateId;
    String certificateUrl;
    String courseDate;
    String courseName;
    String userName;
    String jobId;
    String qId;
    String duration;
    String objective;
    String certificateUid;
    BigDecimal activationId;

    public BigDecimal getActivationId() {
        return activationId;
    }

    public void setActivationId(BigDecimal activationId) {
        this.activationId = activationId;
    }

    public String getCertificateUid() {
        return certificateUid;
    }

    public void setCertificateUid(String certificateUid) {
        this.certificateUid = certificateUid;
    }

    public String getCourseDate() {
        return courseDate;
    }

    public void setCourseDate(String courseDate) {
        this.courseDate = courseDate;
    }


    public BigDecimal getCertificateId() {
        return certificateId;
    }

    public void setCertificateId(BigDecimal certificateId) {
        this.certificateId = certificateId;
    }

    public String getCertificateUrl() {
        return certificateUrl;
    }

    public void setCertificateUrl(String certificateUrl) {
        this.certificateUrl = certificateUrl;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getJobId() {
        return jobId;
    }

    public void setJobId(String jobId) {
        this.jobId = jobId;
    }

    public String getqId() {
        return qId;
    }

    public void setqId(String qId) {
        this.qId = qId;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getObjective() {
        return objective;
    }

    public void setObjective(String objective) {
        this.objective = objective;
    }
}
