package qa.gov.customs.cis.service;




import org.springframework.data.domain.Pageable;
import qa.gov.customs.cis.entity.CisCourseRequest;
import qa.gov.customs.cis.entity.EmployeeCaseDetails;

import java.math.BigInteger;
import java.util.List;


public interface CisService {

    List<EmployeeCaseDetails> findAllByIdContainingOrJobCodeContaining(Long id, String jobCode, int page, int limit);
    List<CisCourseRequest> findAllByFromUserContaining(String fromUser,String toUser, int page, int limit);
    List<CisCourseRequest> findAllByStatusFlagEquals(BigInteger statusFlag);
    CisCourseRequest saveAndUpdate(CisCourseRequest courseRequest);
    List<CisCourseRequest> findAllByWorkFlowUidEquals(String workFlowUid);


}
