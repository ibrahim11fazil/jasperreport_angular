package qa.gov.customs.notification.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qa.gov.customs.notification.model.NotificationModel;
import qa.gov.customs.notification.repository.SmsRepository;

import java.io.IOException;


@Service
public class SmsService {

    @Autowired
    SmsRepository repository;

    public void sendSms(NotificationModel model) throws IOException {
        repository.sendSMS(model.getPhoneNumber(), model.getSmsBody());
    }

}
