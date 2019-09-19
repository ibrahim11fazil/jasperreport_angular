package qa.gov.custom.user.service;

import qa.gov.custom.user.entity.Permission;
import qa.gov.custom.user.entity.Role;
import qa.gov.custom.user.entity.UserMaster;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

public interface UserService {
     List<Role> findAllRoles();
     Role updateRoleAndPermission(Role role);
     List<Permission> findAllPermissions();
     List<Permission> findAllPermissionForRole(BigInteger roleId);
     List<UserMaster> findAllUsers();
     List<UserMaster> findAllByIdOrQID(String jobid,String qid,int page,int limit);
     UserMaster createOrUpdateUser(UserMaster user,Object object);
     BigDecimal disable(BigInteger jobId);
     BigDecimal enable(BigInteger jobId);
     Optional<UserMaster> findUserById(BigInteger jobId);
     List<UserMaster> findAllByRoles(List<Role> roles);
     Optional<Role> findRoleById(BigInteger roleId);
}
