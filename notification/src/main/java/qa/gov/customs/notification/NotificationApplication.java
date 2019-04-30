package qa.gov.customs.notification;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
//import org.springframework.security.oauth2.config.annotation.web.configuration.EnableOAuth2Client;

@SpringBootApplication
@EnableGlobalMethodSecurity(prePostEnabled = true)
//@ComponentScan(basePackages = "qa.gov.customs.notification.security_config")
//@ComponentScan(basePackages = {"qa.gov.customs.utils.config"})
public class NotificationApplication {
    public static void main(String[] args) {
        SpringApplication.run(NotificationApplication.class, args);
    }
}