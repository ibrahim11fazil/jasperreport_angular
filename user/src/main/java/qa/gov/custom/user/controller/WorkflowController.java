package qa.gov.custom.user.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import qa.gov.custom.user.entity.Role;
import qa.gov.custom.user.entity.UserMaster;
import qa.gov.custom.user.service.UserService;
import qa.gov.custom.user.utils.Constants;
import qa.gov.custom.user.utils.MessageUtil;
import qa.gov.custom.user.utils.models.ResponseType;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class WorkflowController {

    @Autowired
    private UserService userService;

    @Value("${workflowtoken}")
    private String training_token;


    @PostMapping ("/find-all-system-users-by-role-role-id-workflow/{roleId}/{token}")
    public ResponseType findAllSystemUsersByRole(@PathVariable("roleId") BigInteger roleId, @PathVariable("token") String token) {
        if(roleId!=null) {
            Optional<Role> role=  userService.findRoleById(roleId);
            if(role.isPresent()) {
                List<Role> roles = new ArrayList<>();
                roles.add(role.get());
                List<UserMaster> users = userService.findAllByRoles(roles);
                if(users!=null && users.size()>0) {
                    ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                            users);
                    return response;
                }else{
                    ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                            null);
                    return response;
                }
            }else{
                ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                        null);
                return response;
            }
        }else{
            ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                    null);
            return response;
        }
    }


    @PostMapping("/check-the-user-is-head-of-training-workflow/{id}/{wtoken}")
    ResponseType checkUserIsHeadOfTraining(@PathVariable("id") String id,@PathVariable("wtoken") String wtoken){
            Optional<Role> role=  userService.findRoleById(new BigInteger("6"));
            if(role.isPresent()) {
                List<Role> roles = new ArrayList<>();
                roles.add(role.get());
                List<UserMaster> users = userService.findAllByRoles(roles);
                if(users!=null && users.size()>0) {
                     Boolean status =false;
                    for (UserMaster user : users) {
                        if(user.getJobId().equals(id)){
                            status=true;
                        }
                    }
                    ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                            status);
                    return response;
                }else{
                    ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                            null);
                    return response;
                }
            }else{
                ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                        null);
                return response;
            }

    }

    @PostMapping(value="/get-head-of-training-and-continuing-edu-workflow/{wtoken}",consumes= MediaType.APPLICATION_JSON_VALUE)
    ResponseType getTrainingDepartmentHeads(@PathVariable("wtoken") String wtoken){
        Optional<Role> role=  userService.findRoleById(new BigInteger("6"));
        if(role.isPresent()) {
            List<Role> roles = new ArrayList<>();
            roles.add(role.get());
            List<UserMaster> users = userService.findAllByRoles(roles);
            if(users!=null && users.size()>0) {
                ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                        users);
                return response;
            }else{
                ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                        null);
                return response;
            }
        }else{
            ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                    null);
            return response;
        }
    }

    ResponseType get(int code, String message, boolean status, Object data){
        ResponseType response = new ResponseType(code,message, status,
                data);
        return response;
    }

}
