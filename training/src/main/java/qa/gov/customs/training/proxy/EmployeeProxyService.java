package qa.gov.customs.training.proxy;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import qa.gov.customs.training.utils.models.ResponseType;


@FeignClient(name="employee",fallback = EmployeeProxyFallback.class)
//RibbonClient(name="employee")
public interface EmployeeProxyService {

    @PostMapping("/employees_under_supervisor_check/{requestedUser}")
    ResponseType employeesUnderSupervisorCheck(@PathVariable("requestedUser") String requestedUser, @RequestHeader(name="Authorization") String token);

//
//    @PostMapping(value="/get-employee-by-jobid-workflow/{id}/{wtoken}",consumes= MediaType.APPLICATION_JSON_VALUE)
//    ResponseType getUserById(@PathVariable("id") String id, @PathVariable("wtoken") String wtoken);
//
//
//    @PostMapping(value="/get-employee-head/{id}/{wtoken}",consumes= MediaType.APPLICATION_JSON_VALUE)
//    ResponseType getEmployeeHead(@PathVariable("id") String id, @PathVariable("wtoken") String wtoken);
//
//
//    @PostMapping(value="/get-employee-manager/{id}/{wtoken}",consumes= MediaType.APPLICATION_JSON_VALUE)
//    ResponseType getEmployeeManager(@PathVariable("id") String id, @PathVariable("wtoken") String wtoken);
//
//
//    @PostMapping(value="/get-head-of-training-and-continuing-edu/{wtoken}",consumes= MediaType.APPLICATION_JSON_VALUE)
//    ResponseType getTrainingDepartmentHead(@PathVariable("wtoken") String wtoken);
//
//    @PostMapping("/get-head-of-training-center-manager/{wtoken}")
//    public ResponseType getHeadOfTrainingCenterManager(@PathVariable("wtoken") String wtoken);
//
//    @PostMapping(value="/get-legal-head/{wtoken}",consumes= MediaType.APPLICATION_JSON_VALUE)
//    ResponseType getLegalManager(@PathVariable("wtoken") String wtoken);
//
//    @PostMapping("/check-the-user-is-head-of-training/{id}/{wtoken}")
//    ResponseType checkUserIsHeadOfTraining(@PathVariable("id") String id, @PathVariable("wtoken") String wtoken);
//
//    @PostMapping("/check-the-user-is-manager/{id}/{did}/{wtoken}")
//    ResponseType checkUserIsManager(@PathVariable("id") String id, @PathVariable("did") String did, @PathVariable("wtoken") String wtoken);
//
//
//    @PostMapping("/check-the-user-is-absent/{id}/{wtoken}")
//    public ResponseType checkTheUserIsAbsent(@PathVariable("id") String id, @PathVariable("wtoken") String wtoken);
//
//
//    @PostMapping("/get-delegation-for-employee/{id}/{wtoken}")
//    ResponseType getDelegationForEmployee(@PathVariable("id") String id, @PathVariable("wtoken") String wtoken);
//
//
//    @PostMapping("/get-general-manager/{wtoken}")
//    public ResponseType getAssistantGeneralManager(@PathVariable("wtoken") String wtoken);

}
