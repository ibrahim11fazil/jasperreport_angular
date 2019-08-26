package qa.gov.customs.training.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import qa.gov.customs.training.models.TrainingRequestStatus;
import qa.gov.customs.training.models.UserRequestModel;
import qa.gov.customs.training.service.EmployeeRequestService;

@Component
public class Subscriber {
//    @RabbitListener(queues="${training.rabbitmq.queue}")
//    public void receivedMessage(String msg) {
//        System.out.println("Received Message: " + msg);
//    }

    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

     @Autowired
    EmployeeRequestService employeeRequestService;

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
        if(model!=null){
           //TODO insert data to the course attendies table
        }else{
            //TODO: Log this for future purposes
        }
    }



//    @RabbitListener(queues="${training.rabbitmq.queue}")
//    public void receivedMessage(String msg) {
//        System.out.println("Received Message: " + msg);
//    }

}