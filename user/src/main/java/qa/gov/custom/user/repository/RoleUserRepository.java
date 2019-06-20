package qa.gov.custom.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import qa.gov.custom.user.entity.RoleUser;
import qa.gov.custom.user.entity.UserMaster;

import javax.transaction.Transactional;
import java.math.BigInteger;
@Repository
@Transactional
public interface RoleUserRepository extends JpaRepository<RoleUser, BigInteger> {

    @Modifying
    @Transactional
    @Query(value="insert into ROLE_USER(ROLE_ID,USER_ID) values(:roleId,:userId)",nativeQuery=true)
    void insertUserRole(BigInteger userId , BigInteger roleId);

    @Modifying
    @Transactional
    @Query(value="update  ROLE_USER SET ROLE_ID=:roleId where USER_ID=:userId",nativeQuery=true)
    void updateUserRole(BigInteger userId , BigInteger roleId);
}
