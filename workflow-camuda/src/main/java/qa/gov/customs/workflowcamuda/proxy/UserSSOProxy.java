package qa.gov.customs.workflowcamuda.proxy;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import qa.gov.customs.workflowcamuda.model.ResponseType;

import java.math.BigInteger;

@FeignClient(name = "user", fallback = UserSSOProxyFallback.class)
public interface UserSSOProxy {

    @PostMapping("/find-all-system-users-by-role-role-id-workflow/{roleId}/{token}")
    ResponseType findAllSystemUsersByRole(@PathVariable("roleId") BigInteger roleId, @PathVariable("token") String token);

    @PostMapping("/check-the-user-is-head-of-training-workflow/{id}/{wtoken}")
    ResponseType checkUserIsHeadOfTraining(@PathVariable("id") String id, @PathVariable("wtoken") String wtoken);

    @PostMapping(value = "/get-head-of-training-and-continuing-edu-workflow/{wtoken}", consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseType getTrainingDepartmentHeads(@PathVariable("wtoken") String wtoken);

}
