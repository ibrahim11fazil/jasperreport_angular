package qa.gov.customs.training.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import qa.gov.customs.training.config.Publisher;
import qa.gov.customs.training.entity.TacCourseAttendees;
import qa.gov.customs.training.models.AttendeesDetails;
import qa.gov.customs.training.models.UserRequestModel;
import qa.gov.customs.training.service.CourseService;

import java.math.BigInteger;
import java.util.List;


@RestController
public class TestControllerQueue {

    private static final Logger logger = LoggerFactory.getLogger(TestControllerQueue.class);

    @Autowired
    Publisher publisher;

    @Autowired
    CourseService courseService;

    @RequestMapping("/send-queue")
    public String sendMessage(@RequestParam("msg") String msg) {
        logger.info("*****" + msg);
        for (int i = 0; i < 25; i++) {
            publisher.produceMsg(msg);
        }
        return "Successfully Msg Sent";
    }

    @PostMapping("/testattendees")
    String setCourseAttendies(@RequestBody  UserRequestModel model){

        List<AttendeesDetails> items = courseService.findAttendeesWithJobIdAndActionId(new BigInteger(model.getCourseActivationId()), model.getForUserJobId());
        if (items == null || items.size() == 0) {
            TacCourseAttendees attendees = courseService.insertAttendeesFromWorkflow(new BigInteger(model.getCourseActivationId()), model.getForUserJobId(), "User Input");
            if (attendees != null) {
                logger.info("Enrolled " + attendees.getJobId());
                return "success";
            } else {
                logger.info("Not Enrolled DB insert error " + attendees);
                return "failed";
            }
        }else{
            logger.info( "exisit");
            return "failed";
        }


    }
}