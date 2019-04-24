package qa.gov.customs.notification.security_config;

import java.io.Serializable;
import java.math.BigInteger;

public class CustomPrincipal implements Serializable {
    private static final long serialVersionUID = 1L;
    private String username;
    private String email;
    private BigInteger enabled;
    private BigInteger credentialsExpired;

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
