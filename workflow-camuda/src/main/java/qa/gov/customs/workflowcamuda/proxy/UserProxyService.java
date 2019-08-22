package qa.gov.customs.workflowcamuda.proxy;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import qa.gov.customs.workflowcamuda.model.ResponseType;
import qa.gov.customs.workflowcamuda.model.UserRequestModel;


@FeignClient(name="employee")
//RibbonClient(name="employee")
public interface UserProxyService {


    @PostMapping(value="/get-employee-by-jobid-workflow/{id}/{wtoken}",consumes= MediaType.APPLICATION_JSON_VALUE)
    ResponseType getUserById(@PathVariable("id") String id,@PathVariable("wtoken") String wtoken);


    @PostMapping(value="/get-employee-head/{id}/{wtoken}",consumes= MediaType.APPLICATION_JSON_VALUE)
    ResponseType getEmployeeHead(@PathVariable("id") String id,@PathVariable("wtoken") String wtoken);


    @PostMapping(value="/get-employee-manager/{id}/{wtoken}",consumes= MediaType.APPLICATION_JSON_VALUE)
    ResponseType getEmployeeManager(@PathVariable("id") String id,@PathVariable("wtoken") String wtoken );


    @PostMapping(value="/get-head-of-training-and-continuing-edu/{wtoken}",consumes= MediaType.APPLICATION_JSON_VALUE)
    ResponseType getTrainingDepartmentHead(@PathVariable("wtoken") String wtoken);

    @PostMapping("/check-the-user-is-head-of-training/{id}/{wtoken}")
    ResponseType checkUserIsHeadOfTraining(@PathVariable("id") String id,@PathVariable("wtoken") String wtoken);

}
