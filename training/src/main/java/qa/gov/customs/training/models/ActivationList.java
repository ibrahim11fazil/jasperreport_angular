package qa.gov.customs.training.models;

import java.math.BigDecimal;
import java.util.Date;

public class ActivationList {

    private BigDecimal activationId ;

    public BigDecimal getActivationId() {
        return activationId;
    }

    public void setActivationId(BigDecimal activationId) {
        this.activationId = activationId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public Date getActivationDate() {
        return activationDate;
    }

    public void setActivationDate(Date activationDate) {
        this.activationDate = activationDate;
    }

    private String courseName;
    private Date activationDate;
}
