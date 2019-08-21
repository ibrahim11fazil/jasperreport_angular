package qa.gov.customs.training.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.training.entity.TacInstructorMaster;
import qa.gov.customs.training.entity.TacWorkflowReference;
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


    @PreAuthorize("hasAnyAuthority('save_request')")
    @PostMapping("/save-request")
    public ResponseType saveRequest(@Valid @RequestBody TacWorkflowReference request)
    {
        TacWorkflowReference submitrequest = null;

                submitrequest =requestService.saveRequest(request);
                if(submitrequest!=null)
                {
                    ResponseType response = new ResponseType(201, MessageUtil.REQUEST_CREATED, true, submitrequest);

                    return response;
                }
                else
                {
                    ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.REQUEST_CREATION_FAILED, false, null);
                    System.out.println(MessageUtil.REQUEST_CREATION_FAILED);
                    return response;
                }
            }


    }
