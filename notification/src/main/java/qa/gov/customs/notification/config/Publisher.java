package qa.gov.customs.notification.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Publisher {

    private static final Logger logger = LoggerFactory.getLogger(Publisher.class);

    @Autowired
    private AmqpTemplate amqpTemplate;

    @Value("${notification.rabbitmq.exchange}")
    private String exchange;

    @Value("${notification.rabbitmq.routingkey}")
    private String routingKey;

    public void produceMsg(String msg){
        amqpTemplate.convertAndSend(exchange, routingKey, msg);
        logger.info("Send msg = " + msg);
    }
}