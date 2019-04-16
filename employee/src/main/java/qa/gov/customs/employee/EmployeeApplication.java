package qa.gov.customs.employee;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;



@SpringBootApplication
//@EnableResourceServer
//@EnableDiscoveryClient
//@EnableGlobalMethodSecurity(prePostEnabled = true)
public class EmployeeApplication {

    public static void main(String[] args) {
        SpringApplication.run(EmployeeApplication.class, args);
    }

}
