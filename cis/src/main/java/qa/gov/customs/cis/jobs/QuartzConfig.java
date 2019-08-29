//package qa.gov.customs.cis.jobs;
//
//import org.quartz.CronTrigger;
//import org.quartz.JobDetail;
//import org.quartz.SimpleTrigger;
//import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.scheduling.quartz.CronTriggerFactoryBean;
//import org.springframework.scheduling.quartz.SimpleTriggerFactoryBean;
//
//import java.util.Calendar;
//
//@Configuration
//public class QuartzConfig {
//
//    @Bean
//    static public  CronTriggerFactoryBean createCronTrigger(JobDetail jobDetail,
//                                                     String  cronExpression,String triggerName) {
//
//        Calendar calendar = Calendar.getInstance();
//        calendar.set(Calendar.SECOND, 0);
//        calendar.set(Calendar.MILLISECOND, 0);
//        CronTriggerFactoryBean factoryBean = new CronTriggerFactoryBean();
//        factoryBean.setJobDetail(jobDetail);
//        factoryBean.setCronExpression(cronExpression);
//        factoryBean.setStartTime(calendar.getTime());
//        factoryBean.setStartDelay(0L);
//        factoryBean.setName(triggerName);
//        factoryBean.setMisfireInstruction(CronTrigger.MISFIRE_INSTRUCTION_DO_NOTHING);
//        return factoryBean;
//
//    }
//
//}
