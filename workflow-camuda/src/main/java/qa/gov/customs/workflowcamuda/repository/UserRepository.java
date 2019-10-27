package qa.gov.customs.workflowcamuda.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import qa.gov.customs.workflowcamuda.entity.UserMaster;


import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.List;

@Repository
@Transactional
public interface UserRepository extends PagingAndSortingRepository<UserMaster, BigInteger> {

    List<UserMaster> findAllByRole(BigInteger role);

}
