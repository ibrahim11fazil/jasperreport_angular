package qa.gov.customs.fileupload.security;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.oauth2.provider.token.UserAuthenticationConverter;
import org.springframework.util.StringUtils;

import java.math.BigInteger;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.Map;

public class CustomUserAuthenticationConverter implements UserAuthenticationConverter {

    private final String EMAIL = "email";
    private final String QID = "qid";
    private final String JID = "jid";
    private final String ENABLED = "enabled";
    private final String EXPIRED = "credentialsExpired";
    private String USER_NAME = "cNameAr";
    private Collection<? extends GrantedAuthority> defaultAuthorities;

    public void setDefaultAuthorities(String[] defaultAuthorities) {
        this.defaultAuthorities = AuthorityUtils.commaSeparatedStringToAuthorityList(StringUtils.arrayToCommaDelimitedString(defaultAuthorities));
    }

    @Override
    public Map<String, ?> convertUserAuthentication(Authentication authentication) {
        Map<String, Object> response = new LinkedHashMap<String, Object>();
        response.put(USERNAME, authentication.getName());
        if (authentication.getAuthorities() != null && !authentication.getAuthorities().isEmpty()) {
            response.put(AUTHORITIES, AuthorityUtils.authorityListToSet(authentication.getAuthorities()));
        }

        return response;
    }

    @Override
    public Authentication extractAuthentication(Map<String, ?> map) {
        if (map.containsKey(USERNAME)) {
            BigInteger b = map.get(ENABLED) != null ? new BigInteger(map.get(ENABLED).toString()) : new BigInteger("0");
            BigInteger b1 = map.get(EXPIRED) != null ? new BigInteger(map.get(EXPIRED).toString()) : new BigInteger("0");

            CustomPrincipal principal = new CustomPrincipal(
                    map.get(USERNAME).toString(),
                    map.get(EMAIL).toString(),
                    b,
                    b1);
            principal.setQid(map.get(QID).toString());
            principal.setJid(map.get(JID).toString());
            principal.setcNameAr(map.get(USER_NAME).toString());
            return new UsernamePasswordAuthenticationToken(principal

                    , "N/A", getAuthorities(map));
        }
        return null;
    }


    private Collection<? extends GrantedAuthority> getAuthorities(Map<String, ?> map) {
        if (!map.containsKey(AUTHORITIES))
            return defaultAuthorities;
        Object authorities = map.get(AUTHORITIES);
        if (authorities instanceof String)
            return AuthorityUtils.commaSeparatedStringToAuthorityList((String) authorities);
        if (authorities instanceof Collection)
            return AuthorityUtils.commaSeparatedStringToAuthorityList(StringUtils.collectionToCommaDelimitedString((Collection<?>) authorities));
        throw new IllegalArgumentException("Authorities must be either string or collection,check DB ");
    }
}
