package qa.gov.customs.notification.model;

public class NotificationModel {

    private static final long serialversionUID = 129348939L;
    String toAddress;
    String emailBody;
    String emailSubject;
    String smsBody;
    String phoneNumber;
    int isSMS;
    int isEmail;
    int smsError;
    int emailError;

    public NotificationModel() {
    }

    public int getSmsError() {
        return smsError;
    }

    public void setSmsError(int smsError) {
        this.smsError = smsError;
    }

    public int getEmailError() {
        return emailError;
    }

    public void setEmailError(int emailError) {
        this.emailError = emailError;
    }

    public String getToAddress() {
        return toAddress;
    }

    public void setToAddress(String toAddress) {
        this.toAddress = toAddress;
    }

    public String getEmailBody() {
        return emailBody;
    }

    public void setEmailBody(String emailBody) {
        this.emailBody = emailBody;
    }

    public String getEmailSubject() {
        return emailSubject;
    }

    public void setEmailSubject(String emailSubject) {
        this.emailSubject = emailSubject;
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

    public int getIsSMS() {
        return isSMS;
    }

    public void setIsSMS(int isSMS) {
        this.isSMS = isSMS;
    }

    public int getIsEmail() {
        return isEmail;
    }

    public void setIsEmail(int isEmail) {
        this.isEmail = isEmail;
    }
}
