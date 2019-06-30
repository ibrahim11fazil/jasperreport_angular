package qa.gov.customs.cis;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;

@SpringBootApplication
@EnableGlobalMethodSecurity(prePostEnabled = true)
@EnableDiscoveryClient
public class CisApplication {
    public static void main(String... args) {
        SpringApplication.run(CisApplication.class, args);
    }


}