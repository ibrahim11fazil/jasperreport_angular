package qa.gov.customs.notification.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import qa.gov.customs.notification.model.NotificationModel;
import qa.gov.customs.notification.service.NotificationService;

@Component
public class Subscriber {


    private static final Logger logger = LoggerFactory.getLogger(Subscriber.class);

    @Autowired
    NotificationService notificationService;


//    @RabbitListener(queues="${notification.rabbitmq.queue}")
//    public void receivedMessage(String msg) {
//        System.out.println("Received Message: " + msg);
//    }

    @RabbitListener(queues = "${notification.rabbitmq.queue}")
    public void getNotification(NotificationModel notificationModel){
        logger.info("Received");
        logger.info("Received" +notificationModel.getSmsBody());
        notificationService.sendNotification(notificationModel);

    }
}