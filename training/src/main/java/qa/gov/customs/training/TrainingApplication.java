
package qa.gov.customs.training;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.web.config.EnableSpringDataWebSupport;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import qa.gov.customs.utils.*;


@SpringBootApplication
@EnableGlobalMethodSecurity(prePostEnabled = true)

@EnableSpringDataWebSupport

@EnableDiscoveryClient

//@ComponentScan(basePackages = {"qa.gov.customs.utils.config"})
public class TrainingApplication {

    public static void main(String[] args) {
        SpringApplication.run(TrainingApplication.class, args);
    }

}