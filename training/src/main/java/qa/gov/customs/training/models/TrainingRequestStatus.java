package qa.gov.customs.training.models;

import java.io.Serializable;

public class TrainingRequestStatus implements Serializable {

    String requestId;
    String status;

    public TrainingRequestStatus() {
    }
    public TrainingRequestStatus(String requestId, String status) {
        this.requestId = requestId;
        this.status = status;
    }

    public String getRequestId() {
        return requestId;
    }

    public void setRequestId(String requestId) {
        this.requestId = requestId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
