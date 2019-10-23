package qa.gov.customs.workflowcamuda.proxy;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.workflowcamuda.entity.Role;
import qa.gov.customs.workflowcamuda.entity.UserMaster;
import qa.gov.customs.workflowcamuda.repository.UserRepository;
import qa.gov.customs.workflowcamuda.utils.Constants;
import qa.gov.customs.workflowcamuda.utils.MessageUtil;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class WorkflowProxyOverridenController {

    @Autowired
    private UserRepository userService;


   // @PostMapping("/check-the-user-is-head-of-training-workflow/{id}/{wtoken}")
    public Boolean checkUserIsHeadOfTraining(String id) {
            List<UserMaster> users = userService.findAllByRole(new BigDecimal("6"));
            if (users != null && users.size() > 0) {
                Boolean status = false;
                for (UserMaster user : users) {
                    if (user.getJobId().equals(id)) {
                        status = true;
                    }
                }
                return status;
            } else {
               return false;
            }
    }

    //@PostMapping(value = "/get-head-of-training-and-continuing-edu-workflow/{wtoken}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public List<UserMaster> getTrainingDepartmentHeads() {
        List<UserMaster> updatedUser = new ArrayList<>();
        List<UserMaster> users = userService.findAllByRole(new BigDecimal("6"));
        if (users != null && users.size() > 0) {
            users.forEach(item -> {
                UserMaster user = new UserMaster();
                user.setJobId(item.getJobId());
                user.setQid(item.getQid());
                user.setcNameAr(item.getcNameAr());
                user.setEmail(item.getEmail());
                updatedUser.add(user);
            });
            return updatedUser;
        } else {
            return null;
        }
    }


}
