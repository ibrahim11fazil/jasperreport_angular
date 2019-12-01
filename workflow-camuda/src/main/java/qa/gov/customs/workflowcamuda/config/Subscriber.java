package qa.gov.customs.workflowcamuda.config;

import org.camunda.bpm.engine.ProcessEngine;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.Exchange;
import org.springframework.amqp.rabbit.annotation.Queue;
import org.springframework.amqp.rabbit.annotation.QueueBinding;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import qa.gov.customs.workflowcamuda.controller.WorkFlowController;
import qa.gov.customs.workflowcamuda.model.CancelRequestStatus;
import qa.gov.customs.workflowcamuda.model.UserRequestModel;
import org.springframework.transaction.annotation.Transactional;
import qa.gov.customs.workflowcamuda.service.RequestService;
import qa.gov.customs.workflowcamuda.service.workflow.WorkflowConstants;

@Component
public class Subscriber {


    private static final Logger logger = LoggerFactory.getLogger(Subscriber.class);
    @Autowired
    WorkFlowController workFlowController;

    @Autowired
    RequestService requestService;


    @Autowired
    private ProcessEngine camunda;

    public Subscriber() {
    }

    public Subscriber(ProcessEngine camunda) {
        this.camunda = camunda;
    }

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




    @RabbitListener(queues = "${workflow.rabbitmq.seat_check_response_queue}")
    @Transactional
    public void seatCheckResponse(UserRequestModel request) {
        if(request.getTrainingRequestId()!=null){
            seatCheckResponseEvent(request);
        }
        else{
            logger.error("getTrainingRequestId Not found: ");
        }
    }

    public void seatCheckResponseEvent(UserRequestModel requestModel) {
        camunda.getRuntimeService().createMessageCorrelation(WorkflowConstants.MSG_NAME_SeatsAvailable) //
                .processInstanceVariableEquals(WorkflowConstants.WORKFLOW_REQUEST_UUID, requestModel.getTrainingRequestId()) //
                .setVariable(WorkflowConstants.MSG_VARIABLE_SeatsAvailable, requestModel.getActiveFlag()) //
                .correlateWithResult();
    }


    @RabbitListener(queues = "${workflow.rabbitmq.req_cancellation_queue}")
    public void receivedCancelRequest(CancelRequestStatus request) {
         logger.info("Received Message: " + request);
        if(request!=null && request.getRequestId()!=null) {
            requestService.deleteRequest(request.getRequestId());
        }else{
            logger.error("receivedCancelRequest error null value ");
        }


    }




//    @RabbitListener(queues="${workflow.rabbitmq.queue_user_request}")
//    public void receivedMessage(UserRequestModel msg) {
//        logger.info("Received Message: " + msg);
//    }
}