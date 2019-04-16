package qa.gov.customs.account;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;




@SpringBootApplication
//@EnableResourceServer
//@EnableDiscoveryClient
//@EnableGlobalMethodSecurity(prePostEnabled = true)
public class AccountApplication {

    public static void main(String[] args) {
        SpringApplication.run(AccountApplication.class, args);
    }

}

