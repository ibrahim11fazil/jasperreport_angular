package qa.gov.customs.workflowcamuda.config;


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

    @Value("${workflow.rabbitmq.queue}")
    private String queueName;

    @Value("${workflow.rabbitmq.queue_user_request}")
    private String queueUserRequest;

    @Value("${workflow.rabbitmq.seat_check_response_queue}")
    private String seatCheckResponse;

    @Value("${workflow.rabbitmq.exchange}")
    private String exchange;

    @Value("${workflow.rabbitmq.routingkey}")
    private String routingKey;

    @Value("${workflow.rabbitmq.req_cancellation_queue}")
    private String queueCancelRequest;


    @Bean
    Queue queue() {
        return new Queue(queueName, false);
    }

    @Bean
    Queue queueUserRequest() {
        return new Queue(queueUserRequest, false);
    }

    @Bean
    Queue queueCancelRequest() {
        return new Queue(queueCancelRequest, false);
    }


    @Bean
    Queue queueSeatCheckResponse() {
        return new Queue(seatCheckResponse, false);
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
