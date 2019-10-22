package qa.gov.customs.workflowcamuda.proxy;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import qa.gov.customs.workflowcamuda.model.ResponseType;

@FeignClient(name = "training", fallback = TrainingProxyServiceFallback.class)
public interface TrainingProxyService {
    @PostMapping(value = "/update-workflow/{id}/{status}/{wtoken}", consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseType updateWorkFlow(@PathVariable("id") String id, @PathVariable("status") String status, @PathVariable("wtoken") String wtoken);
}
