package qa.gov.customs.notification.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import qa.gov.customs.notification.entities.NotificationEntity;
import qa.gov.customs.notification.model.NotificationModel;
import qa.gov.customs.notification.repository.NotificationRepository;

import java.math.BigInteger;
import java.util.Date;

@Service
public class NotificationService {

    private static final Logger logger = LoggerFactory.getLogger(NotificationService.class);
    @Autowired
    EmailService emailService;
    @Autowired
    SmsService smsService;
    @Autowired
    NotificationRepository notificationRepository;

   // boolean isDemoEnabled=true;
    //String email="sraj@customs.gov.qa";
    //String mobile="50105223";


    @Value("${demo.email}")
    private String email;

    @Value("${demo.mobile}")
    private String mobile;

    @Value("${demo.status}")
    boolean isDemoEnabled;

//    String email="jayasree@customs.gov.qa";
//    String mobile="50683222";

//    String email="sherif@customs.gov.qa";
//    String mobile="55396980";

    public void sendNotification(NotificationModel model) {

        if(isDemoEnabled){
            model.setPhoneNumber(mobile);
            model.setToAddress(email);
        }

        if (model.getIsEmail() == 1 && model.getToAddress() != null && model.getEmailBody() != null) {
            try {
                emailService.sendmail(model);
            } catch (Exception e) {
                logger.error("####ERROR" + e.toString());
                model.setEmailError(1);
            }
        }

        if (model.getIsSMS() == 1 && model.getPhoneNumber() != null && model.getSmsBody() != null) {
            try {
                smsService.sendSms(model);
            } catch (Exception e) {
                model.setSmsError(1);
                logger.error("####ERROR" + e.toString());
            }
        }
        saveNotification(model);

    }

    public void saveNotification(NotificationModel model) {
        try {
            NotificationEntity entity = new NotificationEntity();
            entity.setId(new BigInteger("0"));
            entity.setCreatedOn(new Date());
            entity.setIsSMS(BigInteger.valueOf(model.getIsSMS()));
            entity.setIsEmail(BigInteger.valueOf(model.getIsEmail()));
            if (model.getToAddress() != null) {
                entity.setEmail(model.getToAddress());
                String subject = model.getEmailSubject() != null ? model.getEmailSubject() : "";
                entity.setDataEmail(subject + " #### " + model.getEmailBody());
            }

            if (model.getPhoneNumber() != null) {
                entity.setMobile(model.getPhoneNumber());
                entity.setDataSms(model.getSmsBody());
            }
            notificationRepository.save(entity);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}
