package qa.gov.customs.training.service;


import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import qa.gov.customs.training.entity.EmployeeCaseDetails;

import java.math.BigInteger;
import java.util.List;

public interface CisService {

    List<EmployeeCaseDetails> findAllByIdContainingOrJobCodeContaining(BigInteger id, String jobCode, int page, int limit);
}
