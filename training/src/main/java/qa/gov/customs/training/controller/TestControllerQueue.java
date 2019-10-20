package qa.gov.customs.training.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.training.config.Publisher;


@RestController
public class TestControllerQueue {

    private static final Logger logger = LoggerFactory.getLogger(TestControllerQueue.class);

    @Autowired
    Publisher publisher;

    @RequestMapping("/send-queue")
    public String sendMessage(@RequestParam("msg") String msg) {
        logger.info("*****" + msg);
        for (int i = 0; i < 25; i++) {
            publisher.produceMsg(msg);
        }
        return "Successfully Msg Sent";
    }
}