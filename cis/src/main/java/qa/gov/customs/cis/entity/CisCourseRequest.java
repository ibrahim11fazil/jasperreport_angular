package qa.gov.customs.cis.entity;

import javax.persistence.*;
import java.math.BigInteger;

@Entity
@Table(name="EMP_CASE_DETAILS")
public class CisCourseRequest {

    @Id
    @Column(name="REQUEST_ID")
    Long  requestedId;
    @Column(name="FROM_USER")
    String      fromUser;
    @Column(name="TO_USER")
    String      toUser;
    @Column(name="STATUS_FLAG")
    BigInteger statusFlag;
    @Column(name="INVESTIAGTION_ID")
    BigInteger investigationId;
    @Column(name="CREATED_DATE")
    String createdDate;
    @Column(name="COURSE_NUMBER")
    BigInteger courseNumber;
    @Column(name="REMARK")
    String remark;


    public Long getRequestedId() {
        return requestedId;
    }

    public void setRequestedId(Long requestedId) {
        this.requestedId = requestedId;
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

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
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

    @Transient
    int start;

    @Transient
    int limit;

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
