package qa.gov.customs.workflowcamuda.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import qa.gov.customs.workflowcamuda.controller.WorkFlowController;
import qa.gov.customs.workflowcamuda.model.ResponseType;
import qa.gov.customs.workflowcamuda.model.UserRequestModel;
import qa.gov.customs.workflowcamuda.utils.Constants;
import qa.gov.customs.workflowcamuda.utils.MessageUtil;

@Component
public class Subscriber {
    @RabbitListener(queues="${workflow.rabbitmq.queue}")
    public void receivedMessage(String msg) {
        System.out.println("Received Message: " + msg);
    }

    @Autowired
    WorkFlowController workFlowController;

    private static final Logger logger = LoggerFactory.getLogger(WorkFlowController.class);

    @RabbitListener(queues="${workflow.rabbitmq.queue_user_request}")
    public void receivedUserRequest(UserRequestModel request) {
        logger.info("Received Message: " + request);
        if(request!=null && request.getWorkflowType()!=null){
            workFlowController.asyncWorkflowStartAction(request);
            logger.info("TODO Success ###");
        }else{
            logger.info("Failed ###");
        }
    }


//    @RabbitListener(queues="${workflow.rabbitmq.queue_user_request}")
//    public void receivedMessage(UserRequestModel msg) {
//        System.out.println("Received Message: " + msg);
//    }
}