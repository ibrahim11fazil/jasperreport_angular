package qa.gov.customs.training.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.training.entity.TacInstructorMaster;
import qa.gov.customs.training.entity.TacWorkflowReference;
import qa.gov.customs.training.models.UserRequestModel;
import qa.gov.customs.training.proxy.WorkFlowProxyService;
import qa.gov.customs.training.security.CustomPrincipal;
import qa.gov.customs.training.service.CourseService;
import qa.gov.customs.training.service.EmployeeRequestService;
import qa.gov.customs.training.service.InstructorService;
import qa.gov.customs.training.utils.Constants;
import qa.gov.customs.training.utils.MessageUtil;
import qa.gov.customs.training.utils.models.ResponseType;

import javax.validation.Valid;
import java.math.BigDecimal;
@RestController
public class EmployeeRequestController {


    @Autowired
    EmployeeRequestService requestService;

    private final WorkFlowProxyService workFlowProxyService;
    @Autowired
    public EmployeeRequestController(WorkFlowProxyService workFlowProxyService) {
        this.workFlowProxyService = workFlowProxyService;

    }

    private static final Logger logger = LoggerFactory.getLogger(WorkflowController.class);

    @PreAuthorize("hasAnyAuthority('save_request')")
    @PostMapping("/save-request")
    public ResponseType saveRequest(@Valid @RequestBody UserRequestModel request,
                                    @RequestHeader(name="Authorization") String token,
                                    @AuthenticationPrincipal CustomPrincipal principal) {
                UserRequestModel submitedRequest = null;
                 submitedRequest =requestService.saveRequest(request);
                if(submitedRequest!=null) {
                    logger.info("Course request Created");
                    //TODO send to the workflow server --- check
                    workFlowProxyService.startProcessInstance(
                            createUserRequestForWorkflow(submitedRequest,principal),token);
                    return  get(201, MessageUtil.REQUEST_CREATED, true, submitedRequest);
                }
                else {
                    return get(Constants.BAD_REQUEST, MessageUtil.REQUEST_CREATION_FAILED, false, null);
                }
            }


    UserRequestModel createUserRequestForWorkflow(UserRequestModel reference,CustomPrincipal principal){
        reference.setJobId(principal.getJid());
        reference.setEmail(principal.getEmail());
        //TODO need to set mobile
        //model.setMobile(principal.get);
        reference.setCnameAr(principal.getcNameAr());
        reference.setQid(principal.getQid());
        return reference;
    }


    ResponseType  get(int code, String message, boolean status, Object data){
        ResponseType response = new ResponseType(code,message, status,
                data);
        return response;
    }




    }


