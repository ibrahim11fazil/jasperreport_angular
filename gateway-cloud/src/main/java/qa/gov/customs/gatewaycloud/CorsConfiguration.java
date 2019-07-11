package qa.gov.customs.gatewaycloud;

//public class CorsConfiguration {
//}


import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.config.CorsRegistry;
import org.springframework.web.reactive.config.EnableWebFlux;
import org.springframework.web.reactive.config.WebFluxConfigurer;

@Configuration
@EnableWebFlux
class CorsConfiguration implements WebFluxConfigurer
        {

            @Override
            public void addCorsMappings(CorsRegistry registry)
            {
                registry.addMapping("/**")
                        .allowedOrigins("*") // any host or put domain(s) here
                        .allowedMethods("GET, POST") // put the http verbs you want allow
                        .allowedHeaders("Authorization"); // put the http headers you want allow
            }



        }
