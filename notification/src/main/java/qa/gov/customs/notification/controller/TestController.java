package qa.gov.customs.notification.controller;


import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.notification.security.CustomPrincipal;

import java.util.Date;

@RestController
public class TestController {

    @RequestMapping(value = "/current", method = RequestMethod.GET)
    public Object getUser(@AuthenticationPrincipal CustomPrincipal authentication) {

        return authentication;
    }

    @RequestMapping(value = "/current1", method = RequestMethod.GET)
    public Object getUser1(@AuthenticationPrincipal CustomPrincipal authentication) {
        try {
            return authentication.getScopes();
        } catch (Exception e) {
            e.printStackTrace();
            return "error";
        }
    }

    @RequestMapping(value = "/current-date", method = RequestMethod.GET)
    public Object getCurrentDate() {
        try {
            return new Date().toString();
        } catch (Exception e) {
            e.printStackTrace();
            return "error";
        }
    }
}
