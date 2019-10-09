package qa.gov.customs.notification.controller;


import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.notification.security.CustomPrincipal;

import java.security.Principal;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

@RestController
public class TestController {

    @RequestMapping(value = "/current", method = RequestMethod.GET)
    public Object getUser(@AuthenticationPrincipal  CustomPrincipal authentication) {

        return authentication;
    }

    @RequestMapping(value = "/current1", method = RequestMethod.GET)
    public Object getUser1(@AuthenticationPrincipal  CustomPrincipal authentication) {
        try {
            return   authentication.getScopes();
        }catch (Exception e) {
            e.printStackTrace();
            return "error";
        }
    }
}
