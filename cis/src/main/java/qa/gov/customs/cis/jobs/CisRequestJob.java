package qa.gov.customs.cis.jobs;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import qa.gov.customs.cis.config.Publisher;
import qa.gov.customs.cis.entity.CisCourseRequest;
import qa.gov.customs.cis.models.UserRequestModel;
import qa.gov.customs.cis.service.CisService;
import qa.gov.customs.cis.utils.SystemUtil;
import qa.gov.customs.cis.utils.WorkFlowRequestConstants;

import java.math.BigInteger;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Component
public class CisRequestJob {
    private static final Logger logger = LoggerFactory.getLogger(CisRequestJob.class);
    @Autowired
    CisService cisService;

    @Autowired
    Publisher publisher;

    //@Scheduled(cron = "0 * 9 * * ?")
    //@Scheduled(fixedRate = 5000)
    @Scheduled(fixedDelay = 10000, initialDelay = 3000)
    public void cronJob() {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
        Date now = new Date();
        String strDate = sdf.format(now);
        logger.info("cron job expression started: " + strDate);
        List<CisCourseRequest> courseRequestList = cisService.findAllByStatusFlagEquals(new BigInteger(
                WorkFlowRequestConstants.REQUESTED_CIS));
        courseRequestList.forEach(item -> {
            UserRequestModel model = new UserRequestModel();
            model.setCourseId(item.getCourseNumber().toString());
            model.setCourseName(item.getRemark());
            model.setCnameAr(item.getToUserCname());
            model.setJobId(item.getToUser());
            model.setFromUserJobId(item.getFromUser());
            model.setFromUserCnameAr(item.getFromUserCname());
            model.setInvestigationId(item.getInvestigationId().toString());
            model.setWorkflowType(WorkFlowRequestConstants.TYPE_4_CIS_COURSE_REQUEST);
            String idGenerated = SystemUtil.getUUID();
            model.setTrainingRequestId(idGenerated);
            publisher.produceWorkFlowRequest(model);
            item.setWorkFlowUid(idGenerated);
            item.setStatusFlag(new BigInteger(WorkFlowRequestConstants.PROCESSED_CIS));
            cisService.saveAndUpdate(item);
        });
    }
}
