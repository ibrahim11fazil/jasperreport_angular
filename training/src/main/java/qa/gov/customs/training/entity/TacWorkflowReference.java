package qa.gov.customs.training.entity;


import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name="TAC_WORKFLOW_REFERENCE")

public class TacWorkflowReference {

    @Id
    @Column(name = "WORKFLOW_ID")
    String workflowId;
    @Column(name="WORKFLOW_TYPE")
    String type;
    @Lob
    @Column(name="JSON_DATA")
    String  data;

    @Column(name="RESPONSE_STATUS")
    String  responseStatus;


    @Column(name="COURSE_STATUS")
    String  courseStatus;

    @Temporal(TemporalType.DATE)
    @Column(name="CREATED_ON")
    Date createdOn;

    @Temporal(TemporalType.DATE)
    @Column(name="CREATED_ON")
    Date updatedOn;


    public Date getUpdatedOn() {
        return updatedOn;
    }

    public void setUpdatedOn(Date updatedOn) {
        this.updatedOn = updatedOn;
    }

    public String getWorkflowId() {
        return workflowId;
    }

    public void setWorkflowId(String workflowId) {
        this.workflowId = workflowId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getResponseStatus() {
        return responseStatus;
    }

    public void setResponseStatus(String responseStatus) {
        this.responseStatus = responseStatus;
    }

    public String getCourseStatus() {
        return courseStatus;
    }

    public void setCourseStatus(String courseStatus) {
        this.courseStatus = courseStatus;
    }

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }
}
