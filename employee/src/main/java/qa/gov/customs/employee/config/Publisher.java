package qa.gov.customs.employee.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import qa.gov.customs.employee.models.NotificationModel;


@Component
public class Publisher {
    private static final Logger logger = LoggerFactory.getLogger(Publisher.class);
    @Autowired
    private AmqpTemplate amqpTemplate;


    public void sendNotification(NotificationModel model){
        amqpTemplate.convertAndSend("notification_exchange", "notification_routingkey", model);
    }







}