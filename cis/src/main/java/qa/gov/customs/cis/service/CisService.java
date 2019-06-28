package qa.gov.customs.cis.service;




import qa.gov.customs.cis.entity.EmployeeCaseDetails;

import java.util.List;

public interface CisService {

    List<EmployeeCaseDetails> findAllByIdContainingOrJobCodeContaining(Long id, String jobCode, int page, int limit);
}
