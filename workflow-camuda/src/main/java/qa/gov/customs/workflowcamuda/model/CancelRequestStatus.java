package qa.gov.customs.workflowcamuda.model;

public class CancelRequestStatus {

    String message; // email address
    Boolean status ;  // email body
    String requestId;

    public CancelRequestStatus() {
    }

    public CancelRequestStatus(String message, Boolean status) {
        this.message = message;
        this.status = status;
    }

    public CancelRequestStatus(String message, Boolean status, String requestId) {
        this.message = message;
        this.status = status;
        this.requestId = requestId;
    }

    public String getRequestId() {
        return requestId;
    }

    public void setRequestId(String requestId) {
        this.requestId = requestId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }
}
