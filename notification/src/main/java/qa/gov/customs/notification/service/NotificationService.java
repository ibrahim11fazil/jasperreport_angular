package qa.gov.customs.notification.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import qa.gov.customs.notification.model.NotificationModel;

import java.util.Date;

@Service
public class NotificationService {

    @Autowired
    EmailService emailService;

    @Autowired
    SmsService smsService;




    public void sendNotification(NotificationModel model){
        int emailError=0;
        int smsError=0;
        if (model.getIsEmail() == 1 && model.getToAddress() != null && model.getEmailBody() != null) {
            try {
                emailService.sendmail(model);
            } catch (Exception e) {
                e.printStackTrace();
                //TODO log it
                emailError=1;
            }
        }

        if (model.getIsSMS() == 1 && model.getPhoneNumber() != null && model.getSmsBody() != null) {
            try {
                smsService.sendSms(model);
            } catch (Exception e) {
                e.printStackTrace();
                smsError=1;
                //TODO log it
            }
        }

        //TODO save to DB
        // save with current time
        //TODO Date createdOn = new Date();

    }



}
