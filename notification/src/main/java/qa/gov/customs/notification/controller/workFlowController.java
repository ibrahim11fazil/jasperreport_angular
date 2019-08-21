package qa.gov.customs.notification.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import qa.gov.customs.notification.model.NotificationModel;
import qa.gov.customs.notification.service.EmailService;
import qa.gov.customs.notification.service.SmsService;

@RestController
public class workFlowController {

    @Autowired
    EmailService emailService;

    @Autowired
    SmsService smsService;


    @Value("${workflowtoken}")
    private String training_token;

    @RequestMapping(method = RequestMethod.POST ,path="/send-notification-by-workflow/{token}")
    public String sendEmail(@RequestBody NotificationModel model,@PathVariable("token") String token) {
        if(token!=null && token.equals(training_token)) {
            if (model.getIsEmail() == 1 && model.getToAddress() != null && model.getEmailBody() != null) {
                try {
                    emailService.sendmail(model);
                } catch (Exception e) {
                    e.printStackTrace();
                    //TODO log it
                }
            }

            if (model.getIsSMS() == 1 && model.getPhoneNumber() != null && model.getSmsBody() != null) {
                try {
                    smsService.sendSms(model);
                } catch (Exception e) {
                    e.printStackTrace();
                    //TODO log it
                }
            }
            return "success";
        }else{
            return "failure";
        }
    }
}
