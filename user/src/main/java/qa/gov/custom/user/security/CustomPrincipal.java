package qa.gov.custom.user.security;

import java.io.Serializable;
import java.math.BigInteger;

public class CustomPrincipal implements Serializable {
    private static final long serialVersionUID = 1L;
    private String username;
    private String email;
    private String cNameAr;
    private BigInteger enabled;
    private BigInteger credentialsExpired;
    private String jid;
    private String qid;

    public CustomPrincipal() {
    }

    public CustomPrincipal(String username, String email) {
        this.username = username;
        this.email = email;
    }

    public CustomPrincipal(String username, String email, BigInteger enabled, BigInteger credentialsExpired) {
        this.username = username;
        this.email = email;
        this.enabled = enabled;
        this.credentialsExpired = credentialsExpired;
    }

    public String getJid() {
        return jid;
    }

    public void setJid(String jid) {
        this.jid = jid;
    }


    public String getcNameAr() {
        return cNameAr;
    }

    public void setcNameAr(String cNameAr) {
        this.cNameAr = cNameAr;
    }

    public String getQid() {
        return qid;
    }

    public void setQid(String qid) {
        this.qid = qid;
    }

    public BigInteger getCredentialsExpired() {
        return credentialsExpired;
    }

    public void setCredentialsExpired(BigInteger credentialsExpired) {
        this.credentialsExpired = credentialsExpired;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
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




}
