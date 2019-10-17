package qa.gov.custom.user.repository;

import org.hibernate.annotations.SQLInsert;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import qa.gov.custom.user.entity.Role;
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
    @Query(value="update USER_MASTER  set ENABLED=:flag   where ID=:userId",nativeQuery=true)
    void enableOrDisableCourse(BigInteger userId , BigInteger flag);

    @Modifying
    @Query(value="update USER_MASTER  set PASSWORD=:password   where ID=:userId",nativeQuery=true)
    void updatePassword(@Param("userId") BigInteger userId ,@Param("password") String password);

    List<UserMaster> findAllByUsernameContainingOrJobIdContaining(String username,String jobId,Pageable pageable);

    List<UserMaster> findAllByRoles(List<Role> roles);

    @Query(value = "select new UserMaster(i.id, i.username, i.email, i.jobId, i.mobile) from UserMaster i",nativeQuery = false)
    List<UserMaster> findAllUsersInList();
}
