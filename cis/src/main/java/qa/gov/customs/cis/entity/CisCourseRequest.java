package qa.gov.customs.cis.entity;

import javax.persistence.*;
import java.math.BigInteger;
import java.util.Date;

@Entity
@Table(name = "CIS_COURSE_REQUESTS")
public class CisCourseRequest {

    @Id
    @Column(name = "REQUEST_ID")
    Long requestId;
    @Column(name = "FROM_USER")
    String fromUser;
    @Column(name = "TO_USER")
    String toUser;
    @Column(name = "STATUS_FLAG")
    BigInteger statusFlag;
    @Column(name = "INVESTIAGTION_ID")
    BigInteger investigationId;

    @Temporal(TemporalType.DATE)
    @Column(name = "CREATED_DATE")
    Date createdDate;
    @Column(name = "COURSE_NUMBER")
    BigInteger courseNumber;
    @Column(name = "REMARK")
    String remark;


    @Column(name = "WORKFLOW_UID")
    String workFlowUid;

    @Column(name = "WORKFLOW_REMARK")
    String workFlowRemark;

    @Column(name = "FROM_USER_CNAME")
    String fromUserCname;

    @Column(name = "TO_USER_CNAME")
    String toUserCname;
    @Transient
    int start;
    @Transient
    int limit;

    public String getWorkFlowUid() {
        return workFlowUid;
    }

    public void setWorkFlowUid(String workFlowUid) {
        this.workFlowUid = workFlowUid;
    }

    public String getWorkFlowRemark() {
        return workFlowRemark;
    }

    public void setWorkFlowRemark(String workFlowRemark) {
        this.workFlowRemark = workFlowRemark;
    }

    public String getFromUserCname() {
        return fromUserCname;
    }

    public void setFromUserCname(String fromUserCname) {
        this.fromUserCname = fromUserCname;
    }

    public String getToUserCname() {
        return toUserCname;
    }

    public void setToUserCname(String toUserCname) {
        this.toUserCname = toUserCname;
    }

    public Long getRequestId() {
        return requestId;
    }

    public void setRequestId(Long requestId) {
        this.requestId = requestId;
    }

    public String getFromUser() {
        return fromUser;
    }

    public void setFromUser(String fromUser) {
        this.fromUser = fromUser;
    }

    public String getToUser() {
        return toUser;
    }

    public void setToUser(String toUser) {
        this.toUser = toUser;
    }

    public BigInteger getStatusFlag() {
        return statusFlag;
    }

    public void setStatusFlag(BigInteger statusFlag) {
        this.statusFlag = statusFlag;
    }

    public BigInteger getInvestigationId() {
        return investigationId;
    }

    public void setInvestigationId(BigInteger investigationId) {
        this.investigationId = investigationId;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public BigInteger getCourseNumber() {
        return courseNumber;
    }

    public void setCourseNumber(BigInteger courseNumber) {
        this.courseNumber = courseNumber;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public int getStart() {
        return start;
    }

    public void setStart(int start) {
        this.start = start;
    }

    public int getLimit() {
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }


}
