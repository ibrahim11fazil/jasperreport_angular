package qa.gov.custom.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import qa.gov.custom.user.entity.Permission;

import javax.transaction.Transactional;
import java.math.BigInteger;
import java.util.List;


@Repository
@Transactional
public interface PermissionRepository extends JpaRepository<Permission, BigInteger> {

    @Query(value = "select ID,NAME,REMARKS from Permission ", nativeQuery = true)
    List<Object[]> findAllPermissions();

}