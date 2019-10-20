package qa.gov.customs.cis.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import qa.gov.customs.cis.models.UserRequestModel;


@Component
public class Publisher {
    private static final Logger logger = LoggerFactory.getLogger(Publisher.class);


    @Autowired
    private AmqpTemplate amqpTemplate;

    @Value("${cis.rabbitmq.exchange}")
    private String exchange;

    @Value("${cis.rabbitmq.routingkey}")
    private String routingKey;

    public void produceMsg(String msg){
        amqpTemplate.convertAndSend(exchange, routingKey, msg);
        logger.info("Send msg = " + msg);
    }

    public void produceWorkFlowRequest(UserRequestModel model){
        //amqpTemplate.convertAndSend("training_exchange", "training_routingkey_workflow_status", model);
        amqpTemplate.convertAndSend("workflow_queue_userrequest",model);
    }
}