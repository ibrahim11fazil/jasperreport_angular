package qa.gov.customs.notification.security;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.List;

public class CustomPrincipal implements Serializable {
    private static final long serialVersionUID = 1L;
    private String username;
    private String email;
    private BigInteger enabled;
    private BigInteger credentialsExpired;
    private String cNameAr;
    private String jid;
    private String qid;
    private List<String> scopes;

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

    public List<String> getScopes() {
        return scopes;
    }

    public void setScopes(List<String> scopes) {
        this.scopes = scopes;
    }

    public String getcNameAr() {
        return cNameAr;
    }

    public void setcNameAr(String cNameAr) {
        this.cNameAr = cNameAr;
    }

    public String getJid() {
        return jid;
    }

    public void setJid(String jid) {
        this.jid = jid;
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
