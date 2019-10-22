package qa.gov.customs.workflowcamuda.controller;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import java.util.concurrent.Executor;


//@Configuration
//@ComponentScan("qa.gov.customs.workflowcamuda.controller")
//@EnableAsync
//public class AsynchConfiguration
//{
//    @Bean(name = "asyncExecutor")
//    public Executor asyncExecutor()
//    {
//        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
//        executor.setCorePoolSize(5);
//        executor.setMaxPoolSize(20);
//        executor.setQueueCapacity(100);
//        executor.setThreadNamePrefix("AsynchThread-");
//        executor.initialize();
//        return executor;
//    }
//
//    @Bean(name = "threadPoolTaskExecutor")
//    public Executor threadPoolTaskExecutor() {
//        return new ThreadPoolTaskExecutor();
//    }
//
////    @Override
////    public Executor getAsyncExecutor() {
////        return new ThreadPoolTaskExecutor();
////    }
//
////    @Bean(name = "threadPoolTaskExecutor")
////    public Executor threadPoolTaskExecutor() {
////        return new ThreadPoolTaskExecutor();
////    }
//}


@Configuration
@ComponentScan(basePackages = "qa.gov.customs.workflowcamuda")
@EnableAsync
public class AsyncConfiguration {

    /**
     * used by  asynchronous event listener.
     *
     * @return
     */
    @Bean(name = "asynchronousListenerExecutor")
    public Executor createAsynchronousListenerExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setMaxPoolSize(100);
        executor.initialize();
        return executor;
    }
}