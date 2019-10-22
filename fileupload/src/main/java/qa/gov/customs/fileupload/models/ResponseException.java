package qa.gov.customs.fileupload.models;

import java.util.Date;

public class ResponseException {

    public Date timestamp;
    public String message;
    public String details;
    public boolean status;


    public ResponseException(Date timestamp, String message, String details, boolean status) {
        super();
        this.timestamp = timestamp;
        this.message = message;
        this.details = details;
        this.status = status;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public String getMessage() {
        return message;
    }

    public String getDetails() {
        return details;
    }

    public boolean isStatus() {
        return status;
    }


}
