package qa.gov.customs.training.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import qa.gov.customs.training.controller.CourseController;
import qa.gov.customs.training.models.AttendeesDetails;
import qa.gov.customs.training.models.TrainingRequestStatus;
import qa.gov.customs.training.models.UserRequestModel;
import qa.gov.customs.training.service.CourseService;
import qa.gov.customs.training.service.EmployeeRequestService;

import java.math.BigInteger;
import java.util.List;

import static qa.gov.customs.training.utils.Constants.APPROVED_WORKFLOW;

@Component
public class Subscriber {
//    @RabbitListener(queues="${training.rabbitmq.queue}")
//    public void receivedMessage(String msg) {
//        System.out.println("Received Message: " + msg);
//    }

    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

     @Autowired
    EmployeeRequestService employeeRequestService;

     @Autowired
     CourseService courseService;
    private static final Logger logger = LoggerFactory.getLogger(Subscriber.class);

    @RabbitListener(queues="${training.rabbitmq.queue}")
    public void receivedMessage(Message msg) {
        System.out.println("Received Message: ####" + msg.toString());
        System.out.println("Received Message: ####" + msg.getBody());

       // employeeRequestService.UpdateCourseRequest(msg);
    }

    @RabbitListener(queues="${training.rabbitmq.queue_workflow_status}")
    public void receivedMessageWorkFlowStatus(TrainingRequestStatus msg) {
        System.out.println("Received Message: " + msg);
        UserRequestModel model =  employeeRequestService.UpdateCourseRequest(msg);
        if(model!=null && msg.getStatus().equals(APPROVED_WORKFLOW)){
            //Request Id , status .

            if(model.getCourseId()!=null && model.getCourseActivationId()!=null && model.getForUserJobId()!=null){
               List<AttendeesDetails> items =  courseService.findAttendeesWithJobIdAndActionId(new BigInteger(model.getCourseActivationId()),model.getForUserJobId());
               if(items==null || items.size()==0){
                   courseService.insertAttendeesFromWorkflow(new BigInteger(model.getCourseActivationId()),model.getForUserJobId(),msg.getRequestId());
                   logger.info("Enrolled "+ msg.getRequestId());
               }else{
                   logger.info("Not Enrolled already entered "+ msg.getRequestId());
               }
            }else {
                logger.info("Not Enrolled already entered input error " + msg.getRequestId());
            }
        }else{
             logger.info("Not Enrolled already entered, rejected " + msg.getRequestId());
        }
    }



//    @RabbitListener(queues="${training.rabbitmq.queue}")
//    public void receivedMessage(String msg) {
//        System.out.println("Received Message: " + msg);
//    }

}