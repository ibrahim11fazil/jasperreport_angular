package qa.gov.customs.training.models;

import java.math.BigDecimal;
import java.util.Date;

public class EmployeeData {


    private BigDecimal attendeesId;
    private String jobId;
    private String jobTitle;
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
    private String department;
    private String departmentId;
    private String passport;
    private String iban;
    private BigDecimal count;
    private int percentage;
    private BigDecimal attendanceFlag;
    private boolean isChecked;
    private Date attendanceDate;
    private String psLevel;
    private BigDecimal activationId;
    private BigDecimal seatCapacity;
    private String remark;
    private String courseDate;
    private String endDate;

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getCourseDate() {
        return courseDate;
    }

    public void setCourseDate(String courseDate) {
        this.courseDate = courseDate;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    private boolean notInJobCard;

    public boolean isNotInJobCard() {
        return notInJobCard;
    }

    public void setNotInJobCard(boolean notInJobCard) {
        this.notInJobCard = notInJobCard;
    }

    public BigDecimal getActivationId() {
        return activationId;
    }

    public void setActivationId(BigDecimal activationId) {
        this.activationId = activationId;
    }

    public BigDecimal getSeatCapacity() {
        return seatCapacity;
    }

    public void setSeatCapacity(BigDecimal seatCapacity) {
        this.seatCapacity = seatCapacity;
    }

    public String getPsLevel() {
        return psLevel;
    }

    public void setPsLevel(String psLevel) {
        this.psLevel = psLevel;
    }

    public boolean isChecked() {
        return isChecked;
    }

    public void setChecked(boolean checked) {
        isChecked = checked;
    }

    public String getJobId() {
        return jobId;
    }

    public void setJobId(String jobId) {
        this.jobId = jobId;
    }

    public String getPernr() {
        return pernr;
    }

    public void setPernr(String pernr) {
        this.pernr = pernr;
    }

    public String getCnameAr() {
        return cnameAr;
    }

    public void setCnameAr(String cnameAr) {
        this.cnameAr = cnameAr;
    }

    public String getCnameEn() {
        return cnameEn;
    }

    public void setCnameEn(String cnameEn) {
        this.cnameEn = cnameEn;
    }

    public String getQid() {
        return qid;
    }

    public void setQid(String qid) {
        this.qid = qid;
    }

    public int getPercentage() {
        return percentage;
    }

    public void setPercentage(int percentage) {
        this.percentage = percentage;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getActiveFlag() {
        return activeFlag;
    }

    public void setActiveFlag(String activeFlag) {
        this.activeFlag = activeFlag;
    }

    public String getPositionId() {
        return positionId;
    }

    public void setPositionId(String positionId) {
        this.positionId = positionId;
    }

    public String getSecionCode() {
        return secionCode;
    }

    public void setSecionCode(String secionCode) {
        this.secionCode = secionCode;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getDateofbirth() {
        return dateofbirth;
    }

    public void setDateofbirth(Date dateofbirth) {
        this.dateofbirth = dateofbirth;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(String departmentId) {
        this.departmentId = departmentId;
    }

    public String getPassport() {
        return passport;
    }

    public void setPassport(String passport) {
        this.passport = passport;
    }

    public String getIban() {
        return iban;
    }

    public void setIban(String iban) {
        this.iban = iban;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public BigDecimal getAttendeesId() {
        return attendeesId;
    }

    public void setAttendeesId(BigDecimal attendeesId) {
        this.attendeesId = attendeesId;
    }

    public BigDecimal getCount() {
        return count;
    }

    public void setCount(BigDecimal count) {
        this.count = count;
    }

    public BigDecimal getAttendanceFlag() {
        return attendanceFlag;
    }

    public void setAttendanceFlag(BigDecimal attendanceFlag) {
        this.attendanceFlag = attendanceFlag;
    }

    public Date getAttendanceDate() {
        return attendanceDate;
    }

    public void setAttendanceDate(Date attendanceDate) {
        this.attendanceDate = attendanceDate;
    }
}
