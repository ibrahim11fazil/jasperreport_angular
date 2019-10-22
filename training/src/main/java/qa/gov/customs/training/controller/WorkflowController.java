package qa.gov.customs.training.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.training.entity.TacWorkflowReference;
import qa.gov.customs.training.service.EmployeeRequestService;
import qa.gov.customs.training.utils.Constants;
import qa.gov.customs.training.utils.MessageUtil;
import qa.gov.customs.training.utils.models.ResponseType;

import java.util.Date;

@RestController
public class WorkflowController {

    private static final Logger logger = LoggerFactory.getLogger(WorkflowController.class);
    @Autowired
    EmployeeRequestService requestService;
    @Value("${workflowtoken}")
    private String workflowToken;

    @PostMapping(value = "/update-workflow/{id}/{status}/{token}")
    ResponseType updateWorkFlow(@PathVariable("id") String id,
                                @PathVariable("status") String status,
                                @PathVariable("token") String token) {
        if (token != null && token.equals(workflowToken)) {
            logger.info("Recieved ### request received");
            TacWorkflowReference reference = requestService.findById(id);
            if (reference != null) {
                reference.setUpdatedOn(new Date());
                reference.setResponseStatus(status);
                reference = requestService.updateRequest(reference);
                //TODO here all ok set the user to the course attendees table

                return get(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                        reference);
            } else {
                return get(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                        null);
            }
        } else {
            return get(Constants.UNAUTHORIZED, MessageUtil.FAILED, false,
                    null);
        }

    }

    ResponseType get(int code, String message, boolean status, Object data) {
        ResponseType response = new ResponseType(code, message, status,
                data);
        return response;
    }


}

