package qa.gov.customs.training.models;

import java.math.BigDecimal;

public class JobCardCourseLinkModel {

    BigDecimal courseId;
    BigDecimal jobcardNo;
    BigDecimal mandatoryFlag;

    public BigDecimal getCourseId() {
        return courseId;
    }

    public void setCourseId(BigDecimal courseId) {
        this.courseId = courseId;
    }

    public BigDecimal getJobcardNo() {
        return jobcardNo;
    }

    public void setJobcardNo(BigDecimal jobcardNo) {
        this.jobcardNo = jobcardNo;
    }

    public BigDecimal getMandatoryFlag() {
        return mandatoryFlag;
    }

    public void setMandatoryFlag(BigDecimal mandatoryFlag) {
        this.mandatoryFlag = mandatoryFlag;
    }
}
