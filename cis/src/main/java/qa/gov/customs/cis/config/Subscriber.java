package qa.gov.customs.cis.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import qa.gov.customs.cis.entity.CisCourseRequest;
import qa.gov.customs.cis.models.TrainingRequestStatus;
import qa.gov.customs.cis.service.CisService;

import java.math.BigInteger;
import java.util.List;


@Component
public class Subscriber {
    private static final Logger logger = LoggerFactory.getLogger(Subscriber.class);

    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

    @Autowired
    CisService cisService;

    @RabbitListener(queues = "${cis.rabbitmq.queue}")
    public void receivedMessage(Message msg) {
        logger.info("Received Message: ####" + msg.toString());
        logger.info("Received Message: ####" + msg.getBody());

        // employeeRequestService.UpdateCourseRequest(msg);
    }

    @RabbitListener(queues = "${cis.rabbitmq.queue_workflow_status}")
    public void receivedMessageWorkFlowStatus(TrainingRequestStatus msg) {
        logger.info("Received Message: " + msg);
        if (msg.getRequestId() != null) {
            List<CisCourseRequest> courseRequestList = cisService.findAllByWorkFlowUidEquals(msg.getRequestId());
            if (courseRequestList != null && courseRequestList.size() > 0) {
                CisCourseRequest request = courseRequestList.get(0);
                request.setStatusFlag(new BigInteger(msg.getStatus().toString()));
                cisService.saveAndUpdate(request);
            } else {
            }
            //TODO: Log this for future purposes
        } else {
            //TODO: Log this for future purposes
        }
    }


}