package qa.gov.customs.employee.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;


@Entity
@Table(name="USER_SAP_ABCNS")
public class MawaredUserAbsent {

    @Id
    @Column(name = "PERNR")
    String pernr;

    @Column(name = "QID")
    String qid;

    @Column(name = "START_DATE")
    Date startDate;

    @Column(name = "END_DATE")
    Date endDate;

    @Column(name = "ABSENCE_TYPE")
    String absentType;

    @Column(name = "ABSENCE_DESC")
    String absentDescription;

    @Column(name = "NUMBER_DAYS")
    BigDecimal numberOfDays;

    @Column(name = "RETURN_LEAVE")
    Date returnLeave;

    @Column(name = "PLAN_RETURN_LEAVE")
    Date plannedReturnLeave;


    public String getPernr() {
        return pernr;
    }

    public void setPernr(String pernr) {
        this.pernr = pernr;
    }

    public String getQid() {
        return qid;
    }

    public void setQid(String qid) {
        this.qid = qid;
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

    public String getAbsentType() {
        return absentType;
    }

    public void setAbsentType(String absentType) {
        this.absentType = absentType;
    }

    public String getAbsentDescription() {
        return absentDescription;
    }

    public void setAbsentDescription(String absentDescription) {
        this.absentDescription = absentDescription;
    }

    public BigDecimal getNumberOfDays() {
        return numberOfDays;
    }

    public void setNumberOfDays(BigDecimal numberOfDays) {
        this.numberOfDays = numberOfDays;
    }

    public Date getReturnLeave() {
        return returnLeave;
    }

    public void setReturnLeave(Date returnLeave) {
        this.returnLeave = returnLeave;
    }

    public Date getPlannedReturnLeave() {
        return plannedReturnLeave;
    }

    public void setPlannedReturnLeave(Date plannedReturnLeave) {
        this.plannedReturnLeave = plannedReturnLeave;
    }
}
