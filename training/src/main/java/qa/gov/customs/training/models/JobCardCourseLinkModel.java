package qa.gov.customs.training.models;

import java.math.BigDecimal;

public class JobCardCourseLinkModel {

    BigDecimal courseId;
    BigDecimal jobCardId;
    BigDecimal mandatoryFlag;

    public BigDecimal getCourseId() {
        return courseId;
    }

    public void setCourseId(BigDecimal courseId) {
        this.courseId = courseId;
    }

    public BigDecimal getJobCardId() {
        return jobCardId;
    }

    public void setJobCardId(BigDecimal jobCardId) {
        this.jobCardId = jobCardId;
    }

    public BigDecimal getMandatoryFlag() {
        return mandatoryFlag;
    }

    public void setMandatoryFlag(BigDecimal mandatoryFlag) {
        this.mandatoryFlag = mandatoryFlag;
    }
}
