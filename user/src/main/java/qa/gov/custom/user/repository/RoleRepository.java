package qa.gov.custom.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import qa.gov.custom.user.entity.Role;

import javax.transaction.Transactional;
import java.math.BigInteger;
import java.util.List;


@Repository
@Transactional
public interface RoleRepository extends JpaRepository<Role, BigInteger> {

    @Query(value = "select ID,NAME,REMARK from ROLE where PROJECT_ID=1 ", nativeQuery = true)
    List<Object[]> findallAllRolesWithIDAndName();

    @Query(value = "select ID,PERMISSION_ID,ROLE_ID,REMARK from PERMISSION_ROLE where ROLE_ID=:roleId ", nativeQuery = true)
    List<Object[]> findAllPermissionForRole(BigInteger roleId);


    @Modifying
    @Query(value = "delete from PERMISSION_ROLE where ROLE_ID=:roleId", nativeQuery = true)
    void deletePermissionRole(Long roleId);


    @Modifying
    @Transactional
    @Query(value = "insert into PERMISSION_ROLE(PERMISSION_ID,ROLE_ID) values (:permissionId,:roleId)", nativeQuery = true)
    void updateRoleAndPermission(@Param("permissionId") BigInteger permissionId, @Param("roleId") BigInteger roleId);

}