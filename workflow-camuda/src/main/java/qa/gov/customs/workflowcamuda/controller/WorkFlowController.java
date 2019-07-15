package qa.gov.customs.workflowcamuda.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.workflowcamuda.model.UserRequestModel;
import qa.gov.customs.workflowcamuda.service.HodService;
import qa.gov.customs.workflowcamuda.service.TrainingWorkflowService;
import static qa.gov.customs.workflowcamuda.utils.WorkFlowRequestConstants.TYPE_1_EMPLOYEE_REQUEST;

@RestController
public class WorkFlowController {

    private static final Logger logger = LoggerFactory.getLogger(WorkFlowController.class);

    @Autowired
    private TrainingWorkflowService workflowService;

    @RequestMapping(value="/workflow-start-request", method= RequestMethod.POST)
    public void startProcessInstance(@RequestBody UserRequestModel request) {
        if(request!=null && request.getWorkflowType()!=null){
            switch (request.getWorkflowType()){
                case TYPE_1_EMPLOYEE_REQUEST:

                    break;


                default:
                    logger.info("no action created");

            }

           // myService.startProcess(model);
        }else{
            //return "invalid";
        }




    }




}
