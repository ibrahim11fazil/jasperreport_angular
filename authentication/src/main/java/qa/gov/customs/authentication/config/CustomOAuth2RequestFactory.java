package qa.gov.customs.authentication.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.oauth2.provider.*;
import org.springframework.security.oauth2.provider.request.DefaultOAuth2RequestFactory;
import org.springframework.security.oauth2.provider.token.TokenStore;

import java.util.Map;

public class CustomOAuth2RequestFactory extends DefaultOAuth2RequestFactory {

    @Autowired
    private TokenStore tokenStore;

    @Autowired
    UserDetailsService userDetailsService;


    public CustomOAuth2RequestFactory(ClientDetailsService clientDetailsService) {
        super(clientDetailsService);
    }


    @Override
    public TokenRequest createTokenRequest
    (Map<String,String> requestParameters, ClientDetails authenticatedClient) {
          if(requestParameters.get("grant_type")!=null &&  requestParameters.get("grant_type").equals("refresh_token")){
              OAuth2Authentication authentication = tokenStore.readAuthenticationForRefreshToken(
                      tokenStore.readRefreshToken(requestParameters.get("refresh_token"))
              );
          SecurityContextHolder.getContext().setAuthentication(
                  new UsernamePasswordAuthenticationToken(authentication.getName(),null,
                          userDetailsService.loadUserByUsername(authentication.getName()).getAuthorities()));
          }

        return super.createTokenRequest(requestParameters, authenticatedClient);
    }
}
