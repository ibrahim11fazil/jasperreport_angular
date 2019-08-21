package qa.gov.customs.workflowcamuda.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "TAC_REQUESTS")
public class RequestActions implements java.io.Serializable {

    @Id
    @Column(name = "R_UID")
    String uid;
    @Lob
    @Column(name = "R_DATA")
    String rData;
    @Column(name = "R_TYPE")
    String rType;
    @Column(name = "R_STATUS")
    String rStatus;
    @Temporal(TemporalType.DATE)
    @Column(name = "R_CREATED_ON")
    Date rCreatedOn;
    @Temporal(TemporalType.DATE)
    @Column(name = "R_UPDATED_ON")
    Date rUpdatedOn;

    public void setrUpdatedOn(Date rUpdatedOn) {
        this.rUpdatedOn = rUpdatedOn;
    }

    public Date getrUpdatedOn() {
        return rUpdatedOn;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getrData() {
        return rData;
    }

    public void setrData(String rData) {
        this.rData = rData;
    }

    public String getrType() {
        return rType;
    }

    public void setrType(String rType) {
        this.rType = rType;
    }

    public String getrStatus() {
        return rStatus;
    }

    public void setrStatus(String rStatus) {
        this.rStatus = rStatus;
    }

    public Date getrCreatedOn() {
        return rCreatedOn;
    }

    public void setrCreatedOn(Date rCreatedOn) {
        this.rCreatedOn = rCreatedOn;
    }
}
