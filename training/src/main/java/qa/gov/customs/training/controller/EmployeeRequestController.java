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
import qa.gov.customs.training.config.Publisher;
import qa.gov.customs.training.models.UserRequestModel;
import qa.gov.customs.training.proxy.WorkFlowProxyService;
import qa.gov.customs.training.security.CustomPrincipal;
import qa.gov.customs.training.service.EmployeeRequestService;
import qa.gov.customs.training.utils.Constants;
import qa.gov.customs.training.utils.MessageUtil;
import qa.gov.customs.training.utils.models.ResponseType;

import javax.validation.Valid;

@RestController
public class EmployeeRequestController {

    private static final Logger logger = LoggerFactory.getLogger(WorkflowController.class);
    private final WorkFlowProxyService workFlowProxyService;
    @Autowired
    Publisher publisher;
    @Autowired
    EmployeeRequestService requestService;

    @Autowired
    public EmployeeRequestController(WorkFlowProxyService workFlowProxyService) {
        this.workFlowProxyService = workFlowProxyService;

    }

    @PreAuthorize("hasAnyAuthority('save_request')")
    @PostMapping("/save-request")
    public ResponseType saveRequest(@Valid @RequestBody UserRequestModel request,
                                    @RequestHeader(name = "Authorization") String token,
                                    @AuthenticationPrincipal CustomPrincipal principal) {
        UserRequestModel submitedRequest = null;
        submitedRequest = requestService.saveRequest(request);
        if (submitedRequest != null) {
            logger.info("Course request Created");
            //TODO send to the workflow server --- check
            submitedRequest.setJobId(principal.getJid());
            publisher.produceWorkFlowRequest(submitedRequest);
//                    workFlowProxyService.startProcessInstance(
//                            createUserRequestForWorkflow(submitedRequest,principal),token);
            return get(201, MessageUtil.REQUEST_CREATED, true, submitedRequest);
        } else {
            return get(Constants.BAD_REQUEST, MessageUtil.REQUEST_CREATION_FAILED, false, null);
        }
    }


    @PreAuthorize("hasAnyAuthority('workflow_validations')")
    @PostMapping("/check-the-user-is-already-applied-with-activation-id")
    public ResponseType checkTheUserIsAlreadyAppliedWithActivationId(
            @Valid @RequestBody UserRequestModel request,
            @AuthenticationPrincipal CustomPrincipal principal) {
        if (request != null) {
            request.setJobId(principal.getJid());
            Boolean status = requestService.checkTheEmployeeAlreadyAppliedWithActivationId(request);
            return get(201, MessageUtil.REQUEST_CREATED, true, status);
        } else {
            return get(Constants.BAD_REQUEST, MessageUtil.REQUEST_CREATION_FAILED, false, null);
        }
    }


    @PreAuthorize("hasAnyAuthority('workflow_validations')")
    @PostMapping("/check-the-request-is-overriding")
    public ResponseType checkTheRequestIsOverriding(
            @Valid @RequestBody UserRequestModel request,
            @AuthenticationPrincipal CustomPrincipal principal) {
        if (request != null) {
            request.setJobId(principal.getJid());
            // Boolean status = requestService.checkTheEmployeeAlreadyAppliedWithActivationId(request);
            //TODO need to update this code when sql is ready
            return get(201, MessageUtil.REQUEST_CREATED, true, false);
        } else {
            return get(Constants.BAD_REQUEST, MessageUtil.REQUEST_CREATION_FAILED, false, null);
        }
    }


    UserRequestModel createUserRequestForWorkflow(UserRequestModel reference, CustomPrincipal principal) {
        reference.setJobId(principal.getJid());
        reference.setEmail(principal.getEmail());
        //TODO need to set mobile
        //model.setMobile(principal.get);
        reference.setCnameAr(principal.getcNameAr());
        reference.setQid(principal.getQid());
        return reference;
    }


    ResponseType get(int code, String message, boolean status, Object data) {
        ResponseType response = new ResponseType(code, message, status,
                data);
        return response;
    }


}


