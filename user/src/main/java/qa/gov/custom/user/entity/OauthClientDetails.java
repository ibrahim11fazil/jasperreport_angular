package qa.gov.custom.user.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigInteger;
import java.util.Objects;

@Entity
@Table(name = "OAUTH_CLIENT_DETAILS")
public class OauthClientDetails {
    static final long serialVersionUID = 1L;
    @Id
    @Column(name = "CLIENT_ID")
    private String clientId;
    @Column(name = "CLIENT_SECRET")
    private String clientSecret;
    @Column(name = "RESOURCE_IDS")
    private String resourceIds;
    @Column(name = "SCOPE")
    private String scope;
    @Column(name = "AUTHORIZED_GRANT_TYPES")
    private String authorizedGrantTypes;
    @Column(name = "WEB_SERVER_REDIRECT_URI")
    private String webServerRedirectUri;
    @Column(name = "AUTHORITIES")
    private String authorities;
    @Column(name = "ACCESS_TOKEN_VALIDITY")
    private BigInteger accessTokenValidity;
    @Column(name = "REFRESH_TOKEN_VALIDITY")
    private BigInteger refreshTokenValidity;
    @Column(name = "ADDITIONAL_INFORMATION")
    private String additionalInformation;
    @Column(name = "AUTOAPPROVE")
    private String autoapprove;


    public String getClientId() {
        return clientId;
    }

    public void setClientId(String clientId) {
        this.clientId = clientId;
    }



    public String getClientSecret() {
        return clientSecret;
    }

    public void setClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
    }


    public String getResourceIds() {
        return resourceIds;
    }

    public void setResourceIds(String resourceIds) {
        this.resourceIds = resourceIds;
    }


    public String getScope() {
        return scope;
    }

    public void setScope(String scope) {
        this.scope = scope;
    }


    public String getAuthorizedGrantTypes() {
        return authorizedGrantTypes;
    }

    public void setAuthorizedGrantTypes(String authorizedGrantTypes) {
        this.authorizedGrantTypes = authorizedGrantTypes;
    }


    public String getWebServerRedirectUri() {
        return webServerRedirectUri;
    }

    public void setWebServerRedirectUri(String webServerRedirectUri) {
        this.webServerRedirectUri = webServerRedirectUri;
    }


    public String getAuthorities() {
        return authorities;
    }

    public void setAuthorities(String authorities) {
        this.authorities = authorities;
    }


    public BigInteger getAccessTokenValidity() {
        return accessTokenValidity;
    }

    public void setAccessTokenValidity(BigInteger accessTokenValidity) {
        this.accessTokenValidity = accessTokenValidity;
    }


    public BigInteger getRefreshTokenValidity() {
        return refreshTokenValidity;
    }

    public void setRefreshTokenValidity(BigInteger refreshTokenValidity) {
        this.refreshTokenValidity = refreshTokenValidity;
    }


    public String getAdditionalInformation() {
        return additionalInformation;
    }

    public void setAdditionalInformation(String additionalInformation) {
        this.additionalInformation = additionalInformation;
    }

    public String getAutoapprove() {
        return autoapprove;
    }

    public void setAutoapprove(String autoapprove) {
        this.autoapprove = autoapprove;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        OauthClientDetails that = (OauthClientDetails) o;
        return Objects.equals(clientId, that.clientId) &&
                Objects.equals(clientSecret, that.clientSecret) &&
                Objects.equals(resourceIds, that.resourceIds) &&
                Objects.equals(scope, that.scope) &&
                Objects.equals(authorizedGrantTypes, that.authorizedGrantTypes) &&
                Objects.equals(webServerRedirectUri, that.webServerRedirectUri) &&
                Objects.equals(authorities, that.authorities) &&
                Objects.equals(accessTokenValidity, that.accessTokenValidity) &&
                Objects.equals(refreshTokenValidity, that.refreshTokenValidity) &&
                Objects.equals(additionalInformation, that.additionalInformation) &&
                Objects.equals(autoapprove, that.autoapprove);
    }

    @Override
    public int hashCode() {
        return Objects.hash(clientId, clientSecret, resourceIds, scope, authorizedGrantTypes, webServerRedirectUri, authorities, accessTokenValidity, refreshTokenValidity, additionalInformation, autoapprove);
    }
}
