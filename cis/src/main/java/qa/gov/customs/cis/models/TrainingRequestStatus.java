package qa.gov.customs.cis.models;

public class TrainingRequestStatus {

    public TrainingRequestStatus() {
    }

    public TrainingRequestStatus(String requestId, String status) {
        this.requestId = requestId;
        this.status = status;
    }

    String requestId;
    String status;

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
