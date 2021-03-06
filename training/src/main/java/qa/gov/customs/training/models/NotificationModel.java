package qa.gov.customs.training.models;

import java.io.Serializable;

public class NotificationModel implements Serializable {
    private static final long serialversionUID = 129348939L;
    String toAddress; // email address
    String emailBody;  // email body
    String emailSubject; // email subject
    String smsBody;     //sms body
    String phoneNumber; //phone
    int isSMS;
    int isEmail;

    public NotificationModel() {
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

