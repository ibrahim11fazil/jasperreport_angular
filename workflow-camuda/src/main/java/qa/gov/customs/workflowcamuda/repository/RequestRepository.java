package qa.gov.customs.workflowcamuda.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import qa.gov.customs.workflowcamuda.entity.RequestActions;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.math.BigInteger;

@Repository
public interface RequestRepository extends JpaRepository<RequestActions, String> {

    @Modifying
    @Transactional
    @Query(value = "update  TAC_REQUESTS set CANCELLED_FLAG=1 where uid=:requestId", nativeQuery = true)
    void deleteRequest(String requestId);

}


