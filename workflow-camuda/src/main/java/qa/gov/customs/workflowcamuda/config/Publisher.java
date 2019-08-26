package qa.gov.customs.workflowcamuda.config;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import qa.gov.customs.workflowcamuda.model.NotificationModel;
import qa.gov.customs.workflowcamuda.model.TrainingRequestStatus;

@Component
public class Publisher {
    @Autowired
    private AmqpTemplate amqpTemplate;

    @Value("${workflow.rabbitmq.exchange}")
    private String exchange;

    @Value("${workflow.rabbitmq.routingkey}")
    private String routingKey;

    public void produceMsg(String msg){
        amqpTemplate.convertAndSend(exchange, routingKey, msg);
        System.out.println("Send msg = " + msg);
    }

    public void sendNotification(NotificationModel model){
        amqpTemplate.convertAndSend("notification_exchange", "notification_routingkey", model);
    }

    public void updateTrainingRequest(TrainingRequestStatus model){
        //amqpTemplate.convertAndSend("training_exchange", "training_routingkey_workflow_status", model);
        amqpTemplate.convertAndSend("training_queue_workflow_status",model);
    }


}