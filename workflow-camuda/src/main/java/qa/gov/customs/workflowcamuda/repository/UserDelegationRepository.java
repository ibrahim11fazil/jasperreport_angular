package qa.gov.customs.workflowcamuda.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import qa.gov.customs.workflowcamuda.entity.RoleUser;
import qa.gov.customs.workflowcamuda.entity.UserDelegation;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.List;

@Repository
public interface UserDelegationRepository  extends PagingAndSortingRepository<UserDelegation, BigDecimal> {

    List<UserDelegation> findByFromUser(String  fromUser);

    @Modifying
    @Transactional
    void deleteById(BigDecimal id);


}

