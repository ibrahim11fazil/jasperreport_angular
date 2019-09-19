//package qa.gov.customs.notification.controller;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.ComponentScan;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.scheduling.annotation.EnableAsync;
//import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
//
//import java.util.concurrent.Executor;
//
//@Configuration
//@ComponentScan(basePackages="qa.gov.customs.notification")
//@EnableAsync
//public class AsyncConfiguration {
//
//    /**
//     *  used by  asynchronous event listener.
//     * @return
//     */
//    @Bean(name = "asynchronousListenerExecutor")
//    public Executor createAsynchronousListenerExecutor() {
//        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
//        executor.setMaxPoolSize(100);
//        executor.initialize();
//        return executor;
//    }
//}