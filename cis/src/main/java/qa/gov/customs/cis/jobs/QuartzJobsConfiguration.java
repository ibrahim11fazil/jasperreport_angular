//package qa.gov.customs.cis.jobs;
//
//import org.quartz.JobDetail;
//import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.scheduling.quartz.CronTriggerFactoryBean;
//
//@Configuration
//public class QuartzJobsConfiguration {
//
//    private static final String CRON_EVERY_FIVE_MINUTES = "0 0/5 * ? * * *";
//
//    @Bean(name = "memberClassStatsTrigger")
//    public CronTriggerFactoryBean triggerMemberClassStats(@Qualifier("userRequestProcessing") JobDetail jobDetail) {
//
//        return QuartzConfig.createCronTrigger(jobDetail, CRON_EVERY_FIVE_MINUTES, "Class Statistics Trigger");
//
//    }
//}
