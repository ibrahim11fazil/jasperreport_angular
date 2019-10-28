package qa.gov.customs.notification.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import qa.gov.customs.notification.model.NotificationModel;
import qa.gov.customs.notification.service.EmailService;
import qa.gov.customs.notification.service.NotificationService;
import qa.gov.customs.notification.service.SmsService;

@RestController
public class Controller {

    @Autowired
    EmailService emailService;

    @Autowired
    SmsService smsService;

    @Value("${workflowtoken}")
    private String training_token;

    @Autowired
    NotificationService notificationService;

    //@PreAuthorize("hasAnyAuthority('send_notification')")
    @RequestMapping(method = RequestMethod.POST ,path="/send-notification")
    public String sendEmail(@RequestBody NotificationModel model) {
        notificationService.sendNotification(model);
        return "success";
    }

    //@RequestMapping(method = RequestMethod.POST ,path="/send-notification-by-workflow/{token}")
    public String sendEmail(@RequestBody NotificationModel model,@PathVariable("token") String token) {
        if(token!=null && token.equals(training_token)) {
            notificationService.sendNotification(model);
            return "success";
        }else{
            return "failure";
        }
    }


}
