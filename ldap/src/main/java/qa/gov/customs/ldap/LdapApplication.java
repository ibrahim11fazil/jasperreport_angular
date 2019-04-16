package qa.gov.customs.ldap;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
//@EnableResourceServer
//@EnableDiscoveryClient
//@EnableGlobalMethodSecurity(prePostEnabled = true)
public class LdapApplication {

    public static void main(String[] args) {
        SpringApplication.run(LdapApplication.class, args);
    }

}
