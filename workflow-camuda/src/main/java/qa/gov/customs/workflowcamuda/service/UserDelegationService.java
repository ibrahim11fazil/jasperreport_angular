package qa.gov.customs.workflowcamuda.service;

import qa.gov.customs.workflowcamuda.entity.UserDelegation;

import java.math.BigDecimal;
import java.util.List;

public interface UserDelegationService {

    List<UserDelegation> findUserByAssignedUser(String jobId);
    UserDelegation saveDelegationFromUser(UserDelegation delegation);
    Boolean deleteDelegation(BigDecimal delegationId);
    UserDelegation findById(BigDecimal delegationId);
}
