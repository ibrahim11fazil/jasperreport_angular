package qa.gov.customs.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import qa.gov.customs.training.entity.TacWorkflowReference;

import java.math.BigInteger;
import java.util.List;

@Repository
public interface EmployeeRequestRepository extends JpaRepository<TacWorkflowReference, String> {
    List<TacWorkflowReference> findByToUserAndActivationId(String toUser, BigInteger activationId);
}






