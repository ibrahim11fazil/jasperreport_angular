package qa.gov.custom.user.utils.models;

public class ResponseType {
    private int code;
    private String message;
    private boolean status;
    private int count;
    private Object data;


    public ResponseType(int code, String message, boolean status, Object data) {
        super();
        this.code = code;
        this.message = message;
        this.status = status;
        this.data = data;
    }

    public ResponseType() {
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
}
