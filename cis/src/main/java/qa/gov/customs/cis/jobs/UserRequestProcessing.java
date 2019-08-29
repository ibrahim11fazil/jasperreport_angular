//package qa.gov.customs.cis.jobs;
//
//import org.quartz.DisallowConcurrentExecution;
//import org.quartz.Job;
//import org.quartz.JobExecutionContext;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//import qa.gov.customs.cis.service.CisService;
//
//
//
//@Component
//@DisallowConcurrentExecution
//public class UserRequestProcessing implements Job {
//
//    private static final Logger logger = LoggerFactory.getLogger(UserRequestProcessing.class);
//
//    @Autowired
//    private CisService cisService;
//
//    @Override
//    public void execute(JobExecutionContext context) {
//        logger.info("Job ** {} ** starting @ {}", context.getJobDetail().getKey().getName(), context.getFireTime());
//         //TODO here is the action
//        logger.info("Job ** {} ** completed.  Next job scheduled @ {}", context.getJobDetail().getKey().getName(), context.getNextFireTime());
//    }
//
//}
