package qa.gov.customs.workflowcamuda.model;

import javax.management.relation.Role;
import java.math.BigInteger;
import java.util.List;

public class UserMasterModel {

    static final long serialVersionUID = 1L;
    private BigInteger id;


    private String username;

    private String password;

    private String email;

    private BigInteger enabled;

    private BigInteger accountExpired;

    private BigInteger credentialsExpired;

    private BigInteger accountLocked;

    private List<Role> roles;

    private String jobId;

    private String qid;

    private String cNameEn;

    private String cNameAr;

    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public BigInteger getEnabled() {
        return enabled;
    }

    public void setEnabled(BigInteger enabled) {
        this.enabled = enabled;
    }

    public BigInteger getAccountExpired() {
        return accountExpired;
    }

    public void setAccountExpired(BigInteger accountExpired) {
        this.accountExpired = accountExpired;
    }

    public BigInteger getCredentialsExpired() {
        return credentialsExpired;
    }

    public void setCredentialsExpired(BigInteger credentialsExpired) {
        this.credentialsExpired = credentialsExpired;
    }

    public BigInteger getAccountLocked() {
        return accountLocked;
    }

    public void setAccountLocked(BigInteger accountLocked) {
        this.accountLocked = accountLocked;
    }

    public List<Role> getRoles() {
        return roles;
    }

    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }

    public String getJobId() {
        return jobId;
    }

    public void setJobId(String jobId) {
        this.jobId = jobId;
    }

    public String getQid() {
        return qid;
    }

    public void setQid(String qid) {
        this.qid = qid;
    }

    public String getcNameEn() {
        return cNameEn;
    }

    public void setcNameEn(String cNameEn) {
        this.cNameEn = cNameEn;
    }

    public String getcNameAr() {
        return cNameAr;
    }

    public void setcNameAr(String cNameAr) {
        this.cNameAr = cNameAr;
    }
}
