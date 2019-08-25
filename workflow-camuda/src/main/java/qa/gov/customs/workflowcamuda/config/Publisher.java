package qa.gov.customs.training.config;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
@Component
public class Publisher {
    @Autowired
    private AmqpTemplate amqpTemplate;

    @Value("${training.rabbitmq.exchange}")
    private String exchange;

    @Value("${training.rabbitmq.routingkey}")
    private String routingKey;

    public void produceMsg(String msg){
        amqpTemplate.convertAndSend(exchange, routingKey, msg);
        System.out.println("Send msg = " + msg);
    }
}