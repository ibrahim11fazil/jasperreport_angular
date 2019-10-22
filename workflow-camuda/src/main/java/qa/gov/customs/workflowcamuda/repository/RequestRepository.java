package qa.gov.customs.workflowcamuda.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import qa.gov.customs.workflowcamuda.entity.RequestActions;

@Repository
public interface RequestRepository extends JpaRepository<RequestActions, String> {
}


