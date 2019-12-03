package qa.gov.customs.training.models;

import java.math.BigDecimal;
import java.util.Date;

public class CancelCourse {
    BigDecimal activationId;
     String Remark;

    public BigDecimal getActivationId() {
        return activationId;
    }

    public void setActivationId(BigDecimal activationId) {
        this.activationId = activationId;
    }

    public String getRemark() {
        return Remark;
    }

    public void setRemark(String remark) {
        Remark = remark;
    }
}
