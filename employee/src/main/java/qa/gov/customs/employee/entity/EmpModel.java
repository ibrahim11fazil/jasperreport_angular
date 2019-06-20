package qa.gov.customs.employee.entity;

import java.util.Date;

public class EmpModel {

    private String jobId;
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
}
