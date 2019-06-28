package qa.gov.customs.authentication.config;

import org.springframework.security.oauth2.common.DefaultOAuth2AccessToken;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import qa.gov.customs.authentication.entity.UserMaster;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class CustomTokenEnhancer extends JwtAccessTokenConverter {

    @Override
    public OAuth2AccessToken enhance(OAuth2AccessToken accessToken, OAuth2Authentication authentication) {
        UserMaster userMaster = (UserMaster) authentication.getPrincipal();
        Map<String,Object> info =new LinkedHashMap<String,Object>(accessToken.getAdditionalInformation());
        info.put("email",userMaster.getEmail());
        info.put("jid",userMaster.getId());
        info.put("qid",userMaster.getQid());
        List roles = new ArrayList<String>();
        List permissions = new ArrayList<String>();
        if( userMaster.getRoles()!=null) {
            userMaster.getRoles().forEach(items -> {
                roles.add(items.getName());
                if (items.getPermissions() != null) {
                    items.getPermissions().forEach(permission -> {
                        permissions.add(permission.getName());
                    });
                }
            });
        }
       // info.put("sarath",121212);
        info.put("roles",roles);
        info.put("permissions",permissions);
        //TODO need to get the User Details via proxy
       // info.put("permissions",userMaster.getRoles().get(0).getPermissions().toArray());
        DefaultOAuth2AccessToken customAccessToken = new DefaultOAuth2AccessToken(accessToken);
        customAccessToken.setAdditionalInformation(info);
        return super.enhance(customAccessToken,authentication);
    }
}
