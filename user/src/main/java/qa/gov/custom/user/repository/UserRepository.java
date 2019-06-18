package qa.gov.custom.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import qa.gov.custom.user.entity.UserMaster;


import javax.transaction.Transactional;
import java.math.BigInteger;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<UserMaster, BigInteger> {

    UserMaster findUserMasterByUsername(String userName);
}
