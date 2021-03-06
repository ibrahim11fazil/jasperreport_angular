package qa.gov.customs.gateway;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.commons.util.InetUtils;
import org.springframework.cloud.netflix.eureka.EurekaInstanceConfigBean;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.net.InetAddress;
import java.net.NetworkInterface;
import java.util.Enumeration;
import java.util.Optional;

//import org.springframework.cloud.netflix.hystrix.dashboard.EnableHystrixDashboard;


//@EnableResourceServer
//@EnableDiscoveryClient
//@EnableGlobalMethodSecurity(prePostEnabled = true)
@SpringBootApplication
@EnableDiscoveryClient
@EnableZuulProxy
//@EnableHystrixDashboard
public class GatewayApplication {

    private EurekaInstanceConfigBean eurekaInstanceConfig;

//    @Bean
//    public Filter filter()
//    {
//        return new Filter();
//    }
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    public static void main(String[] args) {
        SpringApplication.run(GatewayApplication.class, args);
    }

    @Bean
    public CorsFilter corsFilter() {
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        final CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("*");
        //config.setMaxAge(100000L);
        config.addAllowedOrigin("http://localhost:4200");
        //config.setAllowedOrigins(Arrays.asList("https://example.com"));
        config.addAllowedHeader("*");
        config.addAllowedMethod("OPTIONS");
        config.addAllowedMethod("HEAD");
        config.addAllowedMethod("GET");
        config.addAllowedMethod("PUT");
        config.addAllowedMethod("POST");
        config.addAllowedMethod("DELETE");
        config.addAllowedMethod("PATCH");
        source.registerCorsConfiguration("/**", config);
        config.addAllowedOrigin("*");
        return new CorsFilter(source);
    }


    @Primary
    @Autowired
//    @Profile("docker")
    public EurekaInstanceConfigBean DockerSwarm_EurekaClient(InetUtils inetUtils) {

        try {
            eurekaInstanceConfig = new EurekaInstanceConfigBean(inetUtils);

            final String HostName = System.getenv("HOSTNAME"); //container hostname x, container_id y
            logger.info("HOSTNAME : " + HostName);


            Optional<NetworkInterface> net = Optional.of(NetworkInterface.getByName("mybridge"));

            logger.info("Network instance inetaddress: " + net.get().getInetAddresses());
            logger.info("Network instance name: " + net.get().getName());

            Enumeration<InetAddress> inetAddress = net.get().getInetAddresses();

            InetAddress current = inetAddress.nextElement();

            logger.info("Get Current Address : " + current.toString());

            String address = current.toString().split("/")[1];

/*
			String address = null;

			while(inetAddress.hasMoreElements())
			{
				current = inetAddress.nextElement();
                logger.info("current address 1 : " + current.toString());
				if(!current.isLoopbackAddress())
				{
					address = current.toString();
                    logger.info("current address2: ", address);
					break;
				}
			}
*/
            logger.info(" HostName : " + HostName);
            logger.info(" Address : " + address);

            eurekaInstanceConfig.setHostname(HostName);
            eurekaInstanceConfig.setPreferIpAddress(true);
            eurekaInstanceConfig.setIpAddress(address);
            eurekaInstanceConfig.setNonSecurePort(9000);

            logger.info("Eureka Config : " + eurekaInstanceConfig.toString());

            return eurekaInstanceConfig;


        } catch (Exception e) {
            logger.info("EEEEEEEEEEEEEEERRRR");
            return null;
        }


    }
}
