package qa.gov.customs.training.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import qa.gov.customs.training.models.CancelRequestStatus;
import qa.gov.customs.training.models.NotificationModel;
import qa.gov.customs.training.models.UserRequestModel;

@Component
public class Publisher {
    private static final Logger logger = LoggerFactory.getLogger(Publisher.class);

    @Autowired
    private AmqpTemplate amqpTemplate;

    @Value("${training.rabbitmq.exchange}")
    private String exchange;

    @Value("${training.rabbitmq.routingkey}")
    private String routingKey;

    @Value("${training.rabbitmq.queue_user_request}")
    private String queueUserRequest;


    @Value("${training.rabbitmq.notification_exchange}")
    private String notificationExchange;

    @Value("${training.rabbitmq.notification_routingkey}")
    private String notificationRoutingkey;


    @Value("${training.rabbitmq.req_cancellation_exchange}")
    private String cancelRequestExchange;
    @Value("${training.rabbitmq.req_cancellation_routingkey}")
    private String cancelRequestRoutingKey;


    public void produceMsg(String msg) {
        amqpTemplate.convertAndSend(exchange, routingKey, msg);
        logger.info("Send msg = " + msg);
    }

    public void produceWorkFlowRequest(UserRequestModel model) {
        try {
            //amqpTemplate.convertAndSend("training_exchange", "training_routingkey_workflow_status", model);
            amqpTemplate.convertAndSend(queueUserRequest, model);
        }catch (Exception e){
            logger.info("Error workflow user request send" + e);
        }
    }

    public void sendNotification(NotificationModel notificationModel) {
        if (notificationModel.getToAddress() != null) {
            notificationModel.setIsEmail(1);
        } else {
            notificationModel.setIsEmail(0);
        }
        if (notificationModel.getPhoneNumber() != null) {
            notificationModel.setIsSMS(1);
        } else {
            notificationModel.setIsSMS(0);
        }
        amqpTemplate.convertAndSend(notificationExchange, notificationRoutingkey, notificationModel);
    }


    public void sendCancelRequest(CancelRequestStatus requestStatus) {
        amqpTemplate.convertAndSend(cancelRequestExchange, cancelRequestRoutingKey, requestStatus);
    }
}