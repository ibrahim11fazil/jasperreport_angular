package qa.gov.customs.workflowcamuda;



import org.camunda.bpm.engine.IdentityService;
import org.camunda.bpm.engine.identity.Group;
import org.camunda.bpm.engine.identity.User;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;

@SpringBootApplication
@EnableGlobalMethodSecurity(prePostEnabled = true)
//@EnableSpringDataWebSupport
@EnableDiscoveryClient
public class WorkFlowCamudaApplication {
    public static void main(String... args) {
        SpringApplication.run(WorkFlowCamudaApplication.class, args);
    }
}