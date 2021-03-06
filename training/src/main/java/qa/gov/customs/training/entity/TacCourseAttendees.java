package qa.gov.customs.training.entity;
// Generated Apr 23, 2019 7:33:17 AM by Hibernate Tools 4.3.1.Final

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Clob;
import java.util.HashSet;
import java.util.Set;

/**
 * TacCourseAttendees generated by hbm2java
 */
@Entity
@Table(name = "TAC_COURSE_ATTENDEES", schema = "CUST_TAC")
public class TacCourseAttendees implements java.io.Serializable {

    private BigDecimal attendeesId;
    private TacCourseActivation tacCourseActivation;
    private String jobId;
    private BigDecimal courseStatus;
    private BigDecimal attendancePercentage;
    private String remark;
    private BigDecimal certificateSerialNo;
    private Set<TacCourseAttendence> tacCourseAttendences = new HashSet<TacCourseAttendence>(0);
    private BigDecimal status;

    public TacCourseAttendees() {
    }

    public TacCourseAttendees(BigDecimal attendanceId, TacCourseActivation tacCourseActivation, String jobId) {
        this.attendeesId = attendanceId;
        this.tacCourseActivation = tacCourseActivation;
        this.jobId = jobId;
    }

    public TacCourseAttendees(BigDecimal attendanceId, TacCourseActivation tacCourseActivation, String jobId,
                              BigDecimal courseStatus, BigDecimal attendancePercentage, String remark, BigDecimal certificateSerialNo,
                              Set<TacCourseAttendence> tacCourseAttendences,BigDecimal status) {
        this.attendeesId = attendanceId;
        this.tacCourseActivation = tacCourseActivation;
        this.jobId = jobId;
        this.courseStatus = courseStatus;
        this.attendancePercentage = attendancePercentage;
        this.remark = remark;
        this.certificateSerialNo = certificateSerialNo;
        this.tacCourseAttendences = tacCourseAttendences;
        this.status=status;
    }

    @Id
    @Column(name = "ATTENDEES_ID", unique = true, nullable = false, precision = 22, scale = 0)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_Sequence")
    @SequenceGenerator(name = "id_Sequence", sequenceName = "TAC_ATTENDEES_SEQ", allocationSize = 1)
    public BigDecimal getAttendeesId() {
        return attendeesId;
    }



    public void setAttendeesId(BigDecimal attendeesId) {
        this.attendeesId = attendeesId;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ACTIVATION_ID", nullable = false)
    public TacCourseActivation getTacCourseActivation() {
        return this.tacCourseActivation;
    }

    public void setTacCourseActivation(TacCourseActivation tacCourseActivation) {
        this.tacCourseActivation = tacCourseActivation;
    }

    @Column(name = "JOB_ID", nullable = false, length = 20)
    public String getJobId() {
        return this.jobId;
    }

    public void setJobId(String jobId) {
        this.jobId = jobId;
    }

    @Column(name = "COURSE_STATUS", precision = 22, scale = 0)
    public BigDecimal getCourseStatus() {
        return this.courseStatus;
    }

    public void setCourseStatus(BigDecimal courseStatus) {
        this.courseStatus = courseStatus;
    }

    @Column(name = "ATTENDANCE_PERCENTAGE", precision = 22, scale = 0)
    public BigDecimal getAttendancePercentage() {
        return this.attendancePercentage;
    }

    public void setAttendancePercentage(BigDecimal attendancePercentage) {
        this.attendancePercentage = attendancePercentage;
    }

    @Column(name = "REMARK")
    public String getRemark() {
        return this.remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    @Column(name = "CERTIFICATE_SERIAL_NO", precision = 22, scale = 0)
    public BigDecimal getCertificateSerialNo() {
        return this.certificateSerialNo;
    }

    public void setCertificateSerialNo(BigDecimal certificateSerialNo) {
        this.certificateSerialNo = certificateSerialNo;
    }

    @JsonManagedReference
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "tacCourseAttendees")
    public Set<TacCourseAttendence> getTacCourseAttendences() {
        return this.tacCourseAttendences;
    }

    public void setTacCourseAttendences(Set<TacCourseAttendence> tacCourseAttendences) {
        this.tacCourseAttendences = tacCourseAttendences;
    }

    @Column(name = "STATUS",length = 20)

    public BigDecimal getStatus() {
        return status;
    }

    public void setStatus(BigDecimal status) {
        this.status = status;
    }
}
