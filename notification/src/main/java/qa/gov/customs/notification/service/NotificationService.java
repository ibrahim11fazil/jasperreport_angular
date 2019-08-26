package qa.gov.customs.notification.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import qa.gov.customs.notification.model.NotificationModel;

@Service
public class NotificationService {

    @Autowired
    EmailService emailService;

    @Autowired
    SmsService smsService;

    public void sendNotification(NotificationModel model){
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
    }
}
