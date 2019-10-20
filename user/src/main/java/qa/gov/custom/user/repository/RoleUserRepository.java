package qa.gov.custom.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import qa.gov.custom.user.entity.RoleUser;

import javax.transaction.Transactional;
import java.math.BigInteger;
import java.util.List;

@Repository
@Transactional
public interface RoleUserRepository extends JpaRepository<RoleUser, BigInteger> {

    @Modifying
    @Transactional
    @Query(value = "insert into ROLE_USER(ROLE_ID,USER_ID) values(:roleId,:userId)", nativeQuery = true)
    void insertUserRole(@Param("roleId") BigInteger roleId, @Param("userId") BigInteger userId);

    @Modifying
    @Transactional
    @Query(value = "update  ROLE_USER SET ROLE_ID=:roleId where USER_ID=:userId", nativeQuery = true)
    void updateUserRole(@Param("userId") BigInteger userId, @Param("roleId") BigInteger roleId);

    @Query(value = "select ID,USER_ID,ROLE_ID from ROLE_USER  where USER_ID=:userId", nativeQuery = true)
    List<Object[]> findRoleUserByUserId(@Param("userId") BigInteger userId);
}
