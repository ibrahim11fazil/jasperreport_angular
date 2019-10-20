package qa.gov.customs.notification.entities;


import javax.persistence.*;
import java.math.BigInteger;
import java.util.Date;

@Entity
@Table(name = "NOTIFICATION_LOGS", schema = "CUST_EMPLOYEE")
public class NotificationEntity {


    @Id
    @Column(name = "ID", unique = true, nullable = false, precision = 22, scale = 0)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "Id_Sequence")
    @SequenceGenerator(name = "Id_Sequence", sequenceName = "TAC_NOTIFICATION_SEQ", allocationSize = 1)
    BigInteger id;

    @Column(name = "DATA_SMS")
    String dataSms;

    @Column(name = "IS_SMS")
    BigInteger isSMS;

    @Column(name = "IS_EMAIL")
    BigInteger isEmail;

    @Temporal(TemporalType.DATE)
    @Column(name = "CREATED_ON")
    Date createdOn;

    @Column(name = "EMAIL")
    String email;

    @Column(name = "MOBILE")
    String mobile;

    @Column(name = "SMS_ERROR")
    BigInteger smsError;

    @Column(name = "EMAIL_ERROR")
    BigInteger emailError;

    @Column(name = "DATA_EMAIL")
    String dataEmail;

    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
        this.id = id;
    }

    public String getDataSms() {
        return dataSms;
    }

    public void setDataSms(String dataSms) {
        this.dataSms = dataSms;
    }

    public BigInteger getIsSMS() {
        return isSMS;
    }

    public void setIsSMS(BigInteger isSMS) {
        this.isSMS = isSMS;
    }

    public BigInteger getIsEmail() {
        return isEmail;
    }

    public void setIsEmail(BigInteger isEmail) {
        this.isEmail = isEmail;
    }

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public BigInteger getSmsError() {
        return smsError;
    }

    public void setSmsError(BigInteger smsError) {
        this.smsError = smsError;
    }

    public BigInteger getEmailError() {
        return emailError;
    }

    public void setEmailError(BigInteger emailError) {
        this.emailError = emailError;
    }

    public String getDataEmail() {
        return dataEmail;
    }

    public void setDataEmail(String dataEmail) {
        this.dataEmail = dataEmail;
    }
}

