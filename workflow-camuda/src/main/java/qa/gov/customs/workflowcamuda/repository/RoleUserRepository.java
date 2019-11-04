package qa.gov.customs.workflowcamuda.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import qa.gov.customs.workflowcamuda.entity.RoleUser;
import qa.gov.customs.workflowcamuda.entity.UserMaster;

import java.math.BigInteger;
import java.util.List;

@Repository
public interface RoleUserRepository  extends PagingAndSortingRepository<RoleUser, BigInteger> {

    List<RoleUser> findAllByRoleId(BigInteger roleId);

}