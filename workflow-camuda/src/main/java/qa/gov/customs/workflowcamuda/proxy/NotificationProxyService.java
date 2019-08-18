package qa.gov.customs.workflowcamuda.proxy;

import feign.Headers;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import qa.gov.customs.workflowcamuda.model.NotificationModel;
import qa.gov.customs.workflowcamuda.model.ResponseType;

@FeignClient(name="notification", configuration = NotificationClientConfiguration.class)
public interface NotificationProxyService {


    @PostMapping(value="/send-notification",consumes= MediaType.APPLICATION_JSON_VALUE)
    @Headers("Content-Type: application/json")
    void getUserById(@RequestBody NotificationModel model, @RequestHeader(name = "Authorization") String token);
}
