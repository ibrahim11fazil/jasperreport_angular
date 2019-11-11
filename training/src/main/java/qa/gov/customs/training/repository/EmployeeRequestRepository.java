package qa.gov.customs.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import qa.gov.customs.training.entity.TacWorkflowReference;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.List;

@Repository
public interface EmployeeRequestRepository extends JpaRepository<TacWorkflowReference, String> {
    List<TacWorkflowReference> findByToUserAndActivationId(String toUser, BigInteger activationId);

    @Query(value = "select  count(*) from count_tac_workflow_reference WHERE activation_id=:activationId", nativeQuery = true)
    BigDecimal getSeatCapacity(BigDecimal activationId);
}






