package qa.gov.customs.workflowcamuda.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import qa.gov.customs.workflowcamuda.model.NotificationModel;
import qa.gov.customs.workflowcamuda.model.TrainingRequestStatus;

@Component
public class Publisher {
    private static final Logger logger = LoggerFactory.getLogger(Publisher.class);
    @Autowired
    private AmqpTemplate amqpTemplate;

    @Value("${workflow.rabbitmq.exchange}")
    private String exchange;

    @Value("${workflow.rabbitmq.routingkey}")
    private String routingKey;

    @Value("${workflow.rabbitmq.notification_exchange}")
    private String notificationExchange;

    @Value("${workflow.rabbitmq.notification_routingkey}")
    private String notificationRoutingkey;

    @Value("${workflow.rabbitmq.training_queue_workflow_status}")
    private String trainingQueueWorkFlowStatus;

    @Value("${workflow.rabbitmq.cis_queue_workflow_status}")
    private String cisQueueWorkFlowStatus;

    public void produceMsg(String msg) {
        amqpTemplate.convertAndSend(exchange, routingKey, msg);
        logger.info("Send msg = " + msg);
    }

    public void sendNotification(NotificationModel model) {
        amqpTemplate.convertAndSend(notificationExchange, notificationRoutingkey, model);
    }

    public void updateTrainingRequest(TrainingRequestStatus model) {
        //amqpTemplate.convertAndSend("training_exchange", "training_routingkey_workflow_status", model);
        amqpTemplate.convertAndSend(trainingQueueWorkFlowStatus, model);
    }


    public void updateCISTrainingRequest(TrainingRequestStatus model) {
        //amqpTemplate.convertAndSend("training_exchange", "training_routingkey_workflow_status", model);
        amqpTemplate.convertAndSend(cisQueueWorkFlowStatus, model);
    }


}