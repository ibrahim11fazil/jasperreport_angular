package qa.gov.customs.notification.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import qa.gov.customs.notification.model.EmailModel;
import qa.gov.customs.notification.service.EmailService;

@RestController
public class Controller {

    @Autowired
    EmailService emailService;

    @PreAuthorize("hasAnyAuthority('send_email')")
    @RequestMapping(method = RequestMethod.POST ,path="/send-email")
    public String sendEmail(@RequestBody EmailModel model) {
        try {
            emailService.sendmail(model);
        }catch (Exception e) {
            e.printStackTrace();
            //TODO log it
            return "failure";
        }
        return "success";
    }
}
