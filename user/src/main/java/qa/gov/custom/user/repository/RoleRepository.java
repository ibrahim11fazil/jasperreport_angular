package qa.gov.custom.user.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import qa.gov.custom.user.entity.Role;
import qa.gov.custom.user.entity.UserMaster;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.List;


@Repository
@Transactional
public interface RoleRepository extends JpaRepository<Role, BigInteger> {

    @Query(value="select ID,NAME,REMARK from ROLE ",nativeQuery=true)
    List<Object[]> findallAllRolesWithIDAndName();

}