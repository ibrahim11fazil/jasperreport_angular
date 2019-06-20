package qa.gov.custom.user.repository;

import org.hibernate.annotations.SQLInsert;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import qa.gov.custom.user.entity.UserMaster;


import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.List;

@Repository
@Transactional
public interface UserRepository extends PagingAndSortingRepository<UserMaster, BigInteger> {

    UserMaster findUserMasterByUsername(String userName);

    @Modifying
    @Query(value="update USER_MASTER  set ACCOUNT_LOCKED=:flag   where ID=:userId",nativeQuery=true)
    void enableOrDisableCourse(BigInteger userId , BigDecimal flag);




    List<UserMaster> findAllByUsernameContainingOrJobIdContaining(String username,String jobId,Pageable pageable);
}
