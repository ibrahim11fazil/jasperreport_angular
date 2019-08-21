package qa.gov.customs.workflowcamuda.model;


import java.util.List;

public class ImmediateManager {

    private String cNameAr;

    //EMPNO
    private String empNo;
    //        FNAME_EN
    private String fNameEn;
    //LNAME_EN
    private String lNameEn;
    //        JOB_FAMILY_TEXT
    private String jobFamilyText;
    //JOB_FAMILY
    private String jobFamily;
    //JOB_FAMILY_SHORT
    private String jobFamilyShort;
    //IM_EMPNO
    private String imEmpNo;
    //        IM_FNAME_EN
    private String imFnameEn;
    //IM_LNAME_EN
    private String imLnameEn;
    //        IM_LEGACYCODE
    private String imLegacyCode;
    //IM_CNAME_AR
    private String imCnameAr;

    private String legacyCode;

    private List<ImmediateManager> delegations;

    public List<ImmediateManager> getDelegations() {
        return delegations;
    }

    public void setDelegations(List<ImmediateManager> delegations) {
        this.delegations = delegations;
    }

    public String getEmpNo() {
        return empNo;
    }

    public void setEmpNo(String empNo) {
        this.empNo = empNo;
    }

    public String getfNameEn() {
        return fNameEn;
    }

    public void setfNameEn(String fNameEn) {
        this.fNameEn = fNameEn;
    }

    public String getlNameEn() {
        return lNameEn;
    }

    public void setlNameEn(String lNameEn) {
        this.lNameEn = lNameEn;
    }

    public String getJobFamilyText() {
        return jobFamilyText;
    }

    public void setJobFamilyText(String jobFamilyText) {
        this.jobFamilyText = jobFamilyText;
    }

    public String getJobFamily() {
        return jobFamily;
    }

    public void setJobFamily(String jobFamily) {
        this.jobFamily = jobFamily;
    }

    public String getJobFamilyShort() {
        return jobFamilyShort;
    }

    public void setJobFamilyShort(String jobFamilyShort) {
        this.jobFamilyShort = jobFamilyShort;
    }

    public String getImEmpNo() {
        return imEmpNo;
    }

    public void setImEmpNo(String imEmpNo) {
        this.imEmpNo = imEmpNo;
    }

    public String getImFnameEn() {
        return imFnameEn;
    }

    public void setImFnameEn(String imFnameEn) {
        this.imFnameEn = imFnameEn;
    }

    public String getImLnameEn() {
        return imLnameEn;
    }

    public void setImLnameEn(String imLnameEn) {
        this.imLnameEn = imLnameEn;
    }

    public String getImLegacyCode() {
        return imLegacyCode;
    }

    public void setImLegacyCode(String imLegacyCode) {
        this.imLegacyCode = imLegacyCode;
    }

    public String getImCnameAr() {
        return imCnameAr;
    }

    public void setImCnameAr(String imCnameAr) {
        this.imCnameAr = imCnameAr;
    }

    public String getcNameAr() {
        return cNameAr;
    }

    public void setcNameAr(String cNameAr) {
        this.cNameAr = cNameAr;
    }

    public String getLegacyCode() {
        return legacyCode;
    }

    public void setLegacyCode(String legacyCode) {
        this.legacyCode = legacyCode;
    }
}

