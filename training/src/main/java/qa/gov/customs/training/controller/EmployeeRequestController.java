package qa.gov.customs.training.controller;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
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
import qa.gov.customs.training.entity.TacWorkflowReference;
import qa.gov.customs.training.models.CancelRequestStatus;
import qa.gov.customs.training.models.SeatCapacity;
import qa.gov.customs.training.models.UserRequestModel;
import qa.gov.customs.training.proxy.WorkFlowProxyService;
import qa.gov.customs.training.security.CustomPrincipal;
import qa.gov.customs.training.service.CourseService;
import qa.gov.customs.training.service.EmployeeRequestService;
import qa.gov.customs.training.utils.Constants;
import qa.gov.customs.training.utils.MessageUtil;
import qa.gov.customs.training.utils.models.ResponseType;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@RestController
public class EmployeeRequestController {

    private static final Logger logger = LoggerFactory.getLogger(WorkflowController.class);
    private final WorkFlowProxyService workFlowProxyService;
    @Autowired
    Publisher publisher;
    @Autowired
    EmployeeRequestService requestService;

    @Autowired
    CourseService courseService;

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
    @PostMapping("/cancel-request-list")
    public ResponseType getCancelRequestList(
            @AuthenticationPrincipal CustomPrincipal principal) {
            List<TacWorkflowReference> listUpdated =new ArrayList<>();
            List<TacWorkflowReference> list = requestService.findByToUser(principal.getJid());
            list.forEach(item -> {
                if(item.getData()!=null){
                    try {
                        ObjectMapper objectMapper = new ObjectMapper();
                        UserRequestModel emp = objectMapper.readValue(item.getData(), UserRequestModel.class);
                        item.setData(null);
                        item.setDataProcessed(emp);

                    }catch (Exception e){
                        e.printStackTrace();
                    }
                    listUpdated.add(item);
                }
            });

            if(listUpdated!=null) {
                return get(200, MessageUtil.SUCCESS, true, listUpdated);
            }else{
                return get(200, MessageUtil.FAILED, false, list);
            }

    }


    @PreAuthorize("hasAnyAuthority('workflow_validations')")
    @PostMapping("/cancel-request")
    public ResponseType cancelRequest(
            @Valid @RequestBody CancelRequestStatus request,
            @AuthenticationPrincipal CustomPrincipal principal) {
        if (request != null) {
            request.setJobId(principal.getJid());
            CancelRequestStatus status = requestService.cancelRequest(request.getRequestId(),principal.getJid());
            if(status.getStatus()) {
                return get(200, MessageUtil.SUCCESS, true, status);
            }else{
                return get(200, MessageUtil.FAILED, false, status);
            }
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


    @PreAuthorize("hasAnyAuthority('workflow_validations')")
    @PostMapping("/check-for-seats")
    public ResponseType checkForSeats(
            @Valid @RequestBody SeatCapacity capacity,
            @AuthenticationPrincipal CustomPrincipal principal) {
        if (capacity != null && capacity.getActivationId()!=null) {
            SeatCapacity capacityOut =  courseService.remainingSeatCapacity(capacity.getActivationId());
            if(capacityOut.getSeatCapacity().intValue()>0)
                return get(200, MessageUtil.SUCCESS, true, capacityOut);
            else
                return get(200, MessageUtil.FAILED, false, capacityOut);
        } else {
            return get(Constants.BAD_REQUEST, MessageUtil.FAILED, false, null);
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


