package qa.gov.customs.cis.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import qa.gov.customs.cis.entity.CisCourseRequest;

import java.math.BigInteger;
import java.util.List;

@Repository
public interface CisCourseRequestRepository extends PagingAndSortingRepository<CisCourseRequest, Long> {
        List<CisCourseRequest> findAllByFromUserEqualsAndToUserContaining(String fromUser,String toUser, Pageable pageable);
        List<CisCourseRequest> findAllByFromUserContaining(String fromUser, Pageable pageable);
        List<CisCourseRequest> findAllByStatusFlagEquals(BigInteger statusFlag, Pageable pageable);
        List<CisCourseRequest> findAllByWorkFlowUidEquals(String workFlowUid);
}