package qa.gov.customs.training.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import qa.gov.customs.training.entity.EmployeeCaseDetails;
import qa.gov.customs.training.service.CisService;
import qa.gov.customs.utils.Constants;
import qa.gov.customs.utils.MessageUtil;
import qa.gov.customs.utils.models.ResponseType;

import java.math.BigDecimal;
import java.math.BigInteger;
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
}
