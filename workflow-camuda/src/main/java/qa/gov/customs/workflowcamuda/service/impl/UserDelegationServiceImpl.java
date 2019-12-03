package qa.gov.customs.workflowcamuda.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qa.gov.customs.workflowcamuda.entity.UserDelegation;
import qa.gov.customs.workflowcamuda.repository.UserDelegationRepository;
import qa.gov.customs.workflowcamuda.service.UserDelegationService;
import qa.gov.customs.workflowcamuda.service.workflow.WorkflowImpl;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;


@Service
public class UserDelegationServiceImpl implements UserDelegationService {



    private static final Logger logger = LoggerFactory.getLogger(UserDelegationServiceImpl.class);


    @Autowired
    UserDelegationRepository userDelegationRepository;

    @Override
    public List<UserDelegation> findUserByAssignedUser(String jobId) {
        return userDelegationRepository.findByFromUser(jobId);
    }

    @Override
    public UserDelegation saveDelegationFromUser(UserDelegation delegation) {
        return userDelegationRepository.save(delegation);
    }

    @Override
    public Boolean deleteDelegation(BigDecimal delegationId) {
        try {
             userDelegationRepository.deleteById(delegationId);
             return true;
        }catch (Exception e){
            e.printStackTrace();
            logger.error("Error in deletion" + delegationId );
            return false;
        }
    }

    @Override
    public UserDelegation findById(BigDecimal delegationId) {
        Optional<UserDelegation> item =  userDelegationRepository.findById(delegationId);
        if(item.isPresent())
            return item.get();
        else return null;
    }
}
