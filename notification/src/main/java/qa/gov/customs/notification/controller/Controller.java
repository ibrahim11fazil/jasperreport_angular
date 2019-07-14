package qa.gov.customs.notification.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import qa.gov.customs.notification.model.NotificationModel;
import qa.gov.customs.notification.service.EmailService;
import qa.gov.customs.notification.service.SmsService;

@RestController
public class Controller {

    @Autowired
    EmailService emailService;

    @Autowired
    SmsService smsService;

    @PreAuthorize("hasAnyAuthority('send_notification')")
    @RequestMapping(method = RequestMethod.POST ,path="/send_notification")
    public String sendEmail(@RequestBody NotificationModel model) {
        if(model.isEmail()) {
            try {
                emailService.sendmail(model);
            } catch (Exception e) {
                e.printStackTrace();
                //TODO log it
                return "failure";
            }
            return "success";
        }
        else if(model.isSMS())
        {
            try
            {
            smsService.sendSms(model);
            }
            catch (Exception e) {
                e.printStackTrace();
                //TODO log it
                return "failure";
            }

            return "success";
        }
        return "failure";
    }
}
