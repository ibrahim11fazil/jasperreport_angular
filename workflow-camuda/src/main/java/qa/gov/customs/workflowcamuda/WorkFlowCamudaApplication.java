package qa.gov.customs.workflowcamuda;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;

@SpringBootApplication
@EnableGlobalMethodSecurity(prePostEnabled = true)
//@EnableSpringDataWebSupport
@EnableDiscoveryClient
@EnableFeignClients
@EnableCircuitBreaker
//@EnableProcessApplication
public class WorkFlowCamudaApplication {
    public static void main(String... args) {
        SpringApplication.run(WorkFlowCamudaApplication.class, args);
    }
}