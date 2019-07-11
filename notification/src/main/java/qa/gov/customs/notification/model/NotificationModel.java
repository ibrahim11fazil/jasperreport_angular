package qa.gov.customs.notification.model;

public class NotificationModel {
    String toAddress;
    String emailBody;
    String emailSubject;
    String smsBody;
    String phoneNumber;
    boolean isSMS;
    boolean isEmail;


    public String getEmailBody() {
        return emailBody;
    }

    public void setEmailBody(String emailBody) {
        this.emailBody = emailBody;
    }

    public String getSmsBody() {
        return smsBody;
    }

    public void setSmsBody(String smsBody) {
        this.smsBody = smsBody;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public boolean isSMS() {
        return isSMS;
    }

    public void setSMS(boolean SMS) {
        isSMS = SMS;
    }

    public boolean isEmail() {
        return isEmail;
    }

    public void setEmail(boolean email) {
        isEmail = email;
    }

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
