package qa.gov.customs.workflowcamuda.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;

@Entity
@Table(name = "TAC_DELEGATE_USER")
public class UserDelegation {


    @Id
    @Column(name = "ID", unique = true, nullable = false, precision = 22, scale = 0)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_Sequence")
    @SequenceGenerator(name = "id_Sequence", sequenceName = "TAC_DELEGATE_SEQ", allocationSize = 1)
    BigDecimal id;

    @Column(name = "FROM_USER_JOBID")
    String fromUser;

    @Column(name = "TO_USER_JOBID")
    String toUser;

    @Column(name = "PRIORITY")
    BigInteger priority;

    @Temporal(TemporalType.DATE)
    @Column(name = "START_DATE")
    Date startDate;

    @Temporal(TemporalType.DATE)
    @Column(name = "END_DATE")
    Date endDate;

    @Temporal(TemporalType.DATE)
    @Column(name = "CREATED_ON")
    Date createdOn;

    @Temporal(TemporalType.DATE)
    @Column(name = "UPDATED_ON")
    Date updatedOn;

    @Column(name = "CREATED_BY")
    String createdBy;

    @Column(name = "UPDATED_BY")
    String updatedBy;

    @Column(name = "STATUS")
    BigInteger status;

    public BigInteger getStatus() {
        return status;
    }

    public void setStatus(BigInteger status) {
        this.status = status;
    }

    public BigDecimal getId() {
        return id;
    }

    public void setId(BigDecimal id) {
        this.id = id;
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

    public BigInteger getPriority() {
        return priority;
    }

    public void setPriority(BigInteger priority) {
        this.priority = priority;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }

    public Date getUpdatedOn() {
        return updatedOn;
    }

    public void setUpdatedOn(Date updatedOn) {
        this.updatedOn = updatedOn;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }
}
