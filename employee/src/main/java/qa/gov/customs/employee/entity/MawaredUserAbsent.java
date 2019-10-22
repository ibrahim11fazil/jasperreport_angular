package qa.gov.customs.employee.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;


@Entity
@Table(name = "USER_SAP_ABCNS")
public class MawaredUserAbsent {

    @Id
    @Column(name = "PERNR")
    String pernr;

    @Column(name = "QID")
    String qid;

    @Temporal(TemporalType.DATE)
    @Column(name = "START_DATE")
    Date startDate;

    @Temporal(TemporalType.DATE)
    @Column(name = "END_DATE")
    Date endDate;

    @Column(name = "ABSENCE_TYPE")
    String absentType;

    @Column(name = "ABSENCE_DESC")
    String absentDescription;

    @Column(name = "NUMBER_DAYS")
    BigDecimal numberOfDays;

    //@Temporal(TemporalType.DATE)
    @Column(name = "RETURN_LEAVE")
    String returnLeave;

    //@Temporal(TemporalType.DATE)
    @Column(name = "PLAN_RETURN_LEAVE")
    String plannedReturnLeave;


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

//    public Date getReturnLeave() {
//        return returnLeave;
//    }
//
//    public void setReturnLeave(Date returnLeave) {
//        this.returnLeave = returnLeave;
//    }
//
//    public Date getPlannedReturnLeave() {
//        return plannedReturnLeave;
//    }
//
//    public void setPlannedReturnLeave(Date plannedReturnLeave) {
//        this.plannedReturnLeave = plannedReturnLeave;
//    }


    public String getReturnLeave() {
        return returnLeave;
    }

    public void setReturnLeave(String returnLeave) {
        this.returnLeave = returnLeave;
    }

    public String getPlannedReturnLeave() {
        return plannedReturnLeave;
    }

    public void setPlannedReturnLeave(String plannedReturnLeave) {
        this.plannedReturnLeave = plannedReturnLeave;
    }
}
