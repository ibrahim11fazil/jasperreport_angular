package qa.gov.custom.user.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import qa.gov.custom.user.models.NotificationModel;


@Component
public class Publisher {
    private static final Logger logger = LoggerFactory.getLogger(Publisher.class);
    @Autowired
    private AmqpTemplate amqpTemplate;


    @Value("${workflow.rabbitmq.notification_exchange}")
    private String notificationExchange;

    @Value("${workflow.rabbitmq.notification_routingkey}")
    private String notificationRoutingkey;


    public void sendNotification(NotificationModel model) {
        amqpTemplate.convertAndSend(notificationExchange, notificationRoutingkey, model);
    }


}