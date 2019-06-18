package qa.gov.customs.notification.model;

public class EmailModel {
    String toAddress;
    String emailBody;
    String emailSubject;


    public String getToAddress() {
        return toAddress;
    }

    public void setToAddress(String toAddress) {
        this.toAddress = toAddress;
    }

    public String getEmailbody() {
        return emailBody;
    }

    public void setEmailbody(String emailbody) {
        this.emailBody = emailbody;
    }

    public String getEmailSubject() {
        return emailSubject;
    }

    public void setEmailSubject(String emailSubject) {
        this.emailSubject = emailSubject;
    }
}
