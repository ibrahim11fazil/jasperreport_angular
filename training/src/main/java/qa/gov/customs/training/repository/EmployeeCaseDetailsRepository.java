package qa.gov.customs.training.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import qa.gov.customs.training.entity.EmployeeCaseDetails;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.List;

@Repository
public interface EmployeeCaseDetailsRepository  extends PagingAndSortingRepository<EmployeeCaseDetails, Long> {


   List<EmployeeCaseDetails>  findAllByIdOrJobCodeContaining(Long id, String jobCode, Pageable pageable);


   List<EmployeeCaseDetails>  findAllByJobCodeContaining( String jobCode, Pageable pageable);

   List<EmployeeCaseDetails>  findAllById(Long id, Pageable pageable);

}
