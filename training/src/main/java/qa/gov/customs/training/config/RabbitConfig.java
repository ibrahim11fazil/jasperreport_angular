package qa.gov.customs.training.config;


import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitConfig {
    @Value("${training.rabbitmq.queue}")
    private String queueName;

    @Value("${training.rabbitmq.queue_workflow_status}")
    private String queueNameWorkFlowStatus;


    @Value("${training.rabbitmq.exchange}")
    private String exchange;

    @Value("${training.rabbitmq.routingkey}")
    private String routingKey;

    @Value("${training.rabbitmq.routingkey_workflowresponse}")
    private String routingKeyWorkFlow;

    @Bean
    Queue queue() {
        return new Queue(queueName, false);
    }


    @Bean
    Queue queueWorkFlowStatus() {
        return new Queue(queueNameWorkFlowStatus, false);
    }

    @Bean
    DirectExchange exchange() {
        return new DirectExchange(exchange);
    }

    @Bean
    Binding binding(Queue queue, DirectExchange exchange) {
        return BindingBuilder.bind(queue).to(exchange).with(routingKey);
    }

    @Bean
    public Binding declareBindingWorkFlowStatus(Queue queue, DirectExchange exchange) {
        return BindingBuilder.bind(queue).to(exchange).with(routingKeyWorkFlow);
    }

    @Bean
    public MessageConverter jsonMessageConverter() {
        return new Jackson2JsonMessageConverter();
    }


    @Bean
    public AmqpTemplate rabbitTemplate(ConnectionFactory connectionFactory) {
        final RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(jsonMessageConverter());
        return rabbitTemplate;
    }

}
