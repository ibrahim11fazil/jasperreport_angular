package qa.gov.customs.employee.entity;
// Generated Apr 23, 2019 12:58:10 PM by Hibernate Tools 4.3.1.Final

import javax.persistence.*;
import java.util.Date;

/**
 * EmpEmployeeMaster generated by hbm2java
 */
@Entity
@Table(name = "EMP_EMPLOYEE_MASTER", schema = "CUST_EMPLOYEE")
public class EmpEmployeeMaster implements java.io.Serializable {


    private String jobId;
    private EmpEmployeeMasterId id;
    private EmpPosition empPosition;
    private EmpJob empJob;
    private EmpOrgUnit empOrgUnit;
    private EmpGroup empGroup;
    private EmpSubGroup empSubGroup;
    private EmpNationality empNationality;
    private String pernr;
    private String cnameAr;
    private String cnameEn;
    private String qid;
    private String mobile;
    private String email;
    private String activeFlag;
    private String positionId;
    private String secionCode;
    private String gender;
    private Date dateofbirth;

    public EmpEmployeeMaster() {
    }

    public EmpEmployeeMaster(EmpEmployeeMasterId id, EmpPosition empPosition) {
        this.id = id;
        this.empPosition = empPosition;
    }

    public EmpEmployeeMaster(EmpEmployeeMasterId id, EmpPosition empPosition, EmpJob empJob, EmpOrgUnit empOrgUnit,
                             EmpGroup empGroup, EmpSubGroup empSubGroup, EmpNationality empNationality, String pernr, String cnameAr,
                             String cnameEn, String qid, String mobile, String email, String activeFlag, String positionId,
                             String secionCode, String gender, Date dateofbirth) {
        this.id = id;
        this.empPosition = empPosition;
        this.empJob = empJob;
        this.empOrgUnit = empOrgUnit;
        this.empGroup = empGroup;
        this.empSubGroup = empSubGroup;
        this.empNationality = empNationality;
        this.pernr = pernr;
        this.cnameAr = cnameAr;
        this.cnameEn = cnameEn;
        this.qid = qid;
        this.mobile = mobile;
        this.email = email;
        this.activeFlag = activeFlag;
        this.positionId = positionId;
        this.secionCode = secionCode;
        this.gender = gender;
        this.dateofbirth = dateofbirth;
    }

    @Transient
    public String getJobId() {
        return jobId;
    }

    public void setJobId(String jobId) {
        this.jobId = jobId;
    }

    @EmbeddedId
    @AttributeOverrides({
            @AttributeOverride(name = "jobId", column = @Column(name = "JOB_ID", nullable = false, length = 20)),
            @AttributeOverride(name = "verNo", column = @Column(name = "VER_NO", nullable = false, precision = 22, scale = 0))})
    public EmpEmployeeMasterId getId() {
        return this.id;
    }

    public void setId(EmpEmployeeMasterId id) {
        this.id = id;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "POSITION_CODE", nullable = false)
    public EmpPosition getEmpPosition() {
        return this.empPosition;
    }

    public void setEmpPosition(EmpPosition empPosition) {
        this.empPosition = empPosition;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "JOB_CODE")
    public EmpJob getEmpJob() {
        return this.empJob;
    }

    public void setEmpJob(EmpJob empJob) {
        this.empJob = empJob;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ORG_UNIT_CODE")
    public EmpOrgUnit getEmpOrgUnit() {
        return this.empOrgUnit;
    }

    public void setEmpOrgUnit(EmpOrgUnit empOrgUnit) {
        this.empOrgUnit = empOrgUnit;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "EMP_GROUP_CODE")
    public EmpGroup getEmpGroup() {
        return this.empGroup;
    }

    public void setEmpGroup(EmpGroup empGroup) {
        this.empGroup = empGroup;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "EMP_SUB_GROUP_CODE")
    public EmpSubGroup getEmpSubGroup() {
        return this.empSubGroup;
    }

    public void setEmpSubGroup(EmpSubGroup empSubGroup) {
        this.empSubGroup = empSubGroup;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "NATIONALITY_CODE")
    public EmpNationality getEmpNationality() {
        return this.empNationality;
    }

    public void setEmpNationality(EmpNationality empNationality) {
        this.empNationality = empNationality;
    }

    @Column(name = "PERNR", length = 20)
    public String getPernr() {
        return this.pernr;
    }

    public void setPernr(String pernr) {
        this.pernr = pernr;
    }

    @Column(name = "CNAME_AR", length = 200)
    public String getCnameAr() {
        return this.cnameAr;
    }

    public void setCnameAr(String cnameAr) {
        this.cnameAr = cnameAr;
    }

    @Column(name = "CNAME_EN", length = 200)
    public String getCnameEn() {
        return this.cnameEn;
    }

    public void setCnameEn(String cnameEn) {
        this.cnameEn = cnameEn;
    }

    @Column(name = "QID", length = 20)
    public String getQid() {
        return this.qid;
    }

    public void setQid(String qid) {
        this.qid = qid;
    }

    @Column(name = "MOBILE", length = 20)
    public String getMobile() {
        return this.mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    @Column(name = "EMAIL", length = 20)
    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Column(name = "ACTIVE_FLAG", length = 20)
    public String getActiveFlag() {
        return this.activeFlag;
    }

    public void setActiveFlag(String activeFlag) {
        this.activeFlag = activeFlag;
    }

    @Column(name = "POSITION_ID", length = 20)
    public String getPositionId() {
        return this.positionId;
    }

    public void setPositionId(String positionId) {
        this.positionId = positionId;
    }

    @Column(name = "SECION_CODE", length = 20)
    public String getSecionCode() {
        return this.secionCode;
    }

    public void setSecionCode(String secionCode) {
        this.secionCode = secionCode;
    }

    @Column(name = "GENDER", length = 20)
    public String getGender() {
        return this.gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    @Temporal(TemporalType.DATE)
    @Column(name = "DATEOFBIRTH", length = 7)
    public Date getDateofbirth() {
        return this.dateofbirth;
    }

    public void setDateofbirth(Date dateofbirth) {
        this.dateofbirth = dateofbirth;
    }

}
