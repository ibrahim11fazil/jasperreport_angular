package qa.gov.customs.fileupload.entity;


import qa.gov.customs.fileupload.config.Auditable;

import javax.persistence.*;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;

@Entity
@Table(name = "EMP_CERTIFICATES")
public class EmployeeCertificate extends Auditable<String> implements java.io.Serializable {

    @Id
    @Column(name = "CERTIFICATE_ID", unique = true, nullable = false, precision = 22, scale = 0)
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "id_Sequence")
    @SequenceGenerator(name = "id_Sequence", sequenceName = "EMP_CERTIFICATES_ID_SEQ",allocationSize = 1)
    BigDecimal certificateId;
    @Column(name = "CERTIFICATE_URL", length = 1024)
    String certificateUrl;
    @Temporal(TemporalType.DATE)
    @Column(name = "COURSE_DATE")
    Date courseDate;
    @Column(name = "COURSE_NAME", length = 200)
    String courseName;
    @Column(name = "USERNAME", length = 150)
    String userName;
    @Column(name = "JOBID", length = 10)
    String jobId;
    @Column(name = "QID", length = 200)
    String qId;
    @Column(name = "DURATION", length = 20)
    String duration;
    @Column(name = "OBJECTIVE", length = 200)
    String objective;
    @Column(name = "CERTIFICATE_UUID", length = 100)
    String certificateUid;
    @Column(name = "ACTIVATION_ID")
    BigDecimal activationId;

    public BigDecimal getActivationId() {
        return activationId;
    }

    public void setActivationId(BigDecimal activationId) {
        this.activationId = activationId;
    }

    public BigDecimal getCertificateId() {
        return certificateId;
    }

    public void setCertificateId(BigDecimal certificateId) {
        this.certificateId = certificateId;
    }

    public String getCertificateUrl() {
        return certificateUrl;
    }

    public void setCertificateUrl(String certificateUrl) {
        this.certificateUrl = certificateUrl;
    }

    public Date getCourseDate() {
        return courseDate;
    }

    public void setCourseDate(Date courseDate) {
        this.courseDate = courseDate;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getJobId() {
        return jobId;
    }

    public void setJobId(String jobId) {
        this.jobId = jobId;
    }

    public String getqId() {
        return qId;
    }

    public void setqId(String qId) {
        this.qId = qId;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getObjective() {
        return objective;
    }

    public void setObjective(String objective) {
        this.objective = objective;
    }

    public String getCertificateUid() {
        return certificateUid;
    }

    public void setCertificateUid(String certificateUid) {
        this.certificateUid = certificateUid;
    }

}
