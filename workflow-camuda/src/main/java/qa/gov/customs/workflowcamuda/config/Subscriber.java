package qa.gov.customs.workflowcamuda.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import qa.gov.customs.workflowcamuda.controller.WorkFlowController;
import qa.gov.customs.workflowcamuda.model.UserRequestModel;

@Component
public class Subscriber {


    private static final Logger logger = LoggerFactory.getLogger(Subscriber.class);
    @Autowired
    WorkFlowController workFlowController;

    @RabbitListener(queues = "${workflow.rabbitmq.queue}")
    public void receivedMessage(String msg) {
        logger.info("Received Message: " + msg);
    }

    @RabbitListener(queues = "${workflow.rabbitmq.queue_user_request}")
    public void receivedUserRequest(UserRequestModel request) {
        logger.info("Received Message: " + request);
        if (request != null && request.getWorkflowType() != null) {
            workFlowController.asyncWorkflowStartAction(request);
            logger.info("TODO Success ###");
        } else {
            logger.info("Failed ###");
        }
    }


//    @RabbitListener(queues="${workflow.rabbitmq.queue_user_request}")
//    public void receivedMessage(UserRequestModel msg) {
//        logger.info("Received Message: " + msg);
//    }
}