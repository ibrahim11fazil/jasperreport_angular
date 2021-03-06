package qa.gov.customs.workflowcamuda.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import qa.gov.customs.workflowcamuda.entity.MawaredUserAbsent;


import java.util.List;

@Repository
public interface MawaredAbsentRepository extends JpaRepository<MawaredUserAbsent, Long> {
    List<MawaredUserAbsent> findAllByQidEquals(String qid);
}
