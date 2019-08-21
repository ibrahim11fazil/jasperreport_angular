package qa.gov.customs.training.proxy;


import feign.Headers;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import qa.gov.customs.training.models.UserRequestModel;
import qa.gov.customs.training.security.CustomPrincipal;
import qa.gov.customs.training.utils.models.ResponseType;

@FeignClient(name="workflow", configuration = FeignClientConfiguration.class)
public interface WorkFlowProxyService {

    @PostMapping(value="/workflow-start-request", consumes= MediaType.APPLICATION_JSON_VALUE)
    @Headers("Content-Type: application/json")
    ResponseType startProcessInstance(@RequestBody UserRequestModel request, @RequestHeader(name="Authorization") String token);

}
