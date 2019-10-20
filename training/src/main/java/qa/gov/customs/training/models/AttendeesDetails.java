package qa.gov.customs.training.models;

import java.math.BigInteger;

public class AttendeesDetails {

    BigInteger activationId;
    String jobId;
    String remark;

    public BigInteger getActivationId() {
        return activationId;
    }

    public void setActivationId(BigInteger activationId) {
        this.activationId = activationId;
    }

    public String getJobId() {
        return jobId;
    }

    public void setJobId(String jobId) {
        this.jobId = jobId;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }
}
