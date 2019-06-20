package qa.gov.custom.user.proxy;

import feign.Headers;
import feign.Param;
import feign.RequestLine;
import org.springframework.cloud.netflix.ribbon.RibbonClient;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import qa.gov.customs.utils.models.ResponseType;

@FeignClient(name="employee")
//RibbonClient(name="employee")
public interface UserProxyService {

//    @Headers("Authorization: Bearer {access_token}")
//    @PostMapping("/get-employee-by-jobid1")
//    EmpEmployeeMaster getUserById(@HeaderParam(HttpHeaders.AUTHORIZATION) String authorizationHeader, @RequestBody EmpEmployeeMaster user);


   // @GetMapping("/get-employee-by-jobid/{id}")
   // EmpEmployeeMaster getUserById(@PathVariable("id") String id, @RequestHeader("Authorization") String authHeader );

   // @GetMapping("/get-employee-by-jobid/{id}")
   // @Headers("Authorization: {token}")
   //    @PostMapping("/get-employee-by-jobid1")
    ////    EmpEmployeeMaster getUserById(@HeaderParam(HttpHeaders.AUTHORIZATION) String authorizationHeader, @RequestBody EmpEmployeeMaster user); EmpEmployeeMaster getUserById(@Param("id") String id,@Param("id") String token);


    @PostMapping(value="/get-employee-by-jobid1/{id}",consumes= MediaType.APPLICATION_JSON_VALUE)
    ResponseType getUserById(@PathVariable("id") String id, @RequestHeader(name="Authorization") String token);



}
