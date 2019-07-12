//package qa.gov.customs.gatewaycloud;
//
//
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.cloud.gateway.filter.GatewayFilter;
//import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
//import org.springframework.cloud.gateway.support.ServerWebExchangeUtils;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.server.reactive.ServerHttpRequest;
//import org.springframework.http.server.reactive.ServerHttpResponse;
//import org.springframework.stereotype.Component;
//import org.springframework.web.server.ServerWebExchange;
//import reactor.core.publisher.Mono;
//
//import static org.springframework.cloud.gateway.support.ServerWebExchangeUtils.setResponseStatus;
//
//
////@Component
////public class GatewayFilterData extends AbstractNameValueGatewayFilterFactory {
////
////    @Override
////    public GatewayFilter apply(NameValueConfig config) {
////        return (exchange, chain) -> {
////            ServerHttpRequest request = exchange.getRequest().mutate()
////                    //.header(config.getName(), config.getValue())
////                    //.header(config.getName(), config.getValue())
////                    .header("Authorization","Basic VVNFUl9DTElFTlRfQVBQOnBhc3N3b3JkQDIwMTg=")
////                    .build();
////            return chain.filter(exchange.mutate().request(request).build());
////        };
////    }
////}
//
//
//@Component
//public class GatewayFilterData extends AbstractGatewayFilterFactory<GatewayFilterData.Config> {
//
//    private static final Logger logger = LoggerFactory.getLogger(GatewayFilterData.class);
//    public GatewayFilterData() {
//        super(Config.class);
//    }
//
//    @Override
//    public GatewayFilter apply(Config config) {
//        // grab configuration from Config object
//        logger.info("Testing ##############>>>");
//        return (exchange, chain) -> {
//            logger.info("Testing ##############1111");
//            ServerHttpRequest request = exchange.getRequest()
//                    .mutate()
//                    .header("Authorization", "Basic VVNFUl9DTElFTlRfQVBQOnBhc3N3b3JkQDIwMTg=")
//                    .build();
//            return chain.filter(exchange.mutate().request(request).build());
//        };
//    }
//
//    public static class Config {
//        //Put the configuration properties for your filter here
//    }
//}
