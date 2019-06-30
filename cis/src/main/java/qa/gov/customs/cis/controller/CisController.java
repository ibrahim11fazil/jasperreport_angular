package qa.gov.customs.cis.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import qa.gov.customs.cis.entity.CisCourseRequest;
import qa.gov.customs.cis.entity.EmployeeCaseDetails;
import qa.gov.customs.cis.security.CustomPrincipal;
import qa.gov.customs.cis.service.CisService;
import qa.gov.customs.utils.Constants;
import qa.gov.customs.utils.MessageUtil;
import qa.gov.customs.utils.models.ResponseType;

import java.util.List;

@ControllerAdvice
@RestController
public class CisController {

    @Autowired
    CisService  cisService;

    @PreAuthorize("hasAnyAuthority('find_all_users_cases_for_cis')")
    @RequestMapping(method = RequestMethod.POST,value = "find-all-users-cases-for-cis")
    public ResponseType findAllSystemUsers(@RequestBody EmployeeCaseDetails user ) {
        if(user.getId()==null)
            user.setId(0L);
        if(user.getJobCode()==null)
            user.setJobCode("");
        List<EmployeeCaseDetails> users = cisService.findAllByIdContainingOrJobCodeContaining(user.getId(),user.getJobCode(),user.getStart(),user.getLimit());
        ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                users);
        return response;
    }


    @PreAuthorize("hasAnyAuthority('find_all_courses_i_requested')")
    @RequestMapping(method = RequestMethod.POST,value = "find-all-courses-i-requested")
    public ResponseType findAllCoursesIRequestedForOthers(@RequestBody CisCourseRequest user ,@AuthenticationPrincipal CustomPrincipal principal ) {
        List<CisCourseRequest> users = cisService.findAllByFromUserContaining(principal.getJid(),user.getToUser(),user.getStart(),user.getLimit());
        ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                users);
        return response;
    }
}
