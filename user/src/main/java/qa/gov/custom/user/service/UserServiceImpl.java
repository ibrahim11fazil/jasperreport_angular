package qa.gov.custom.user.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import qa.gov.custom.user.entity.Permission;
import qa.gov.custom.user.entity.Role;
import qa.gov.custom.user.entity.UserMaster;
import qa.gov.custom.user.proxy.EmpModel;
import qa.gov.custom.user.repository.PermissionRepository;
import qa.gov.custom.user.repository.RoleRepository;
import qa.gov.custom.user.repository.RoleUserRepository;
import qa.gov.custom.user.repository.UserRepository;
import qa.gov.custom.user.utils.UserUtils;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PermissionRepository permissionRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleUserRepository roleUserRepository;

    @Override
    public List<Role> findAllRoles() {
        List<Object[]> roleObjects = roleRepository.findallAllRolesWithIDAndName();
        List<Role> roles = new ArrayList<>();
        for (Object[] o : roleObjects) {
            Role role = new Role();
            role.setId(new BigInteger(o[0].toString()));
            role.setName((String) o[1]);
            role.setRemark((String) o[2]);
            roles.add(role);
        }
        return roles;
    }

    @Override
    public Role updateRoleAndPermission(Role role) {
        try {
            roleRepository.deletePermissionRole(Long.valueOf(role.getId().toString()));
            if (role.getNewPermissions() != null && role.getNewPermissions().size() > 0) {
                for (Permission permission : role.getNewPermissions()) {
                    roleRepository.updateRoleAndPermission(permission.getId(), role.getId());
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            //TODO log error
            return null;
        }
        return role;
    }

    @Override
    public List<Permission> findAllPermissions() {
        List<Object[]> roleObjects = permissionRepository.findAllPermissions();
        List<Permission> roles = new ArrayList<>();
        for (Object[] o : roleObjects) {
            Permission role = new Permission();
            role.setId(new BigInteger(o[0].toString()));
            role.setName((String) o[1]);
            role.setRemark((String) o[2]);
            roles.add(role);
        }
        return roles;
    }

    @Override
    public List<Permission> findAllPermissionForRole(BigInteger roleId) {
        //  ID,PERMISSION_ID,ROLE_ID,REMARK
        List<Object[]> roleObjects = roleRepository.findAllPermissionForRole(roleId);
        List<Permission> roles = new ArrayList<>();
        for (Object[] o : roleObjects) {
            Permission role = new Permission();
            role.setRpId(new BigInteger(o[0].toString()));
            role.setId(new BigInteger(o[1].toString()));
            role.setRemark((String) o[3]);
            roles.add(role);
        }
        return roles;
    }

    @Override
    public List<UserMaster> findAllUsers() {
        List<UserMaster> users = new ArrayList<>();
        userRepository.findAll().forEach(item ->
                users.add(item)
        );
        return users;
    }

    @Override
    public List<UserMaster> findAllByIdOrQID(String jobId, String qid, int page, int limit) {
        List<UserMaster> users = new ArrayList<>();
        Pageable pageable =
                PageRequest.of(
                        page, limit, Sort.by("id"));
        if (jobId == "" && qid == "") {
            Page<UserMaster> pages = userRepository.findAll(pageable);
            pages.forEach(item -> users.add(item));
            return users;
        } else {
            return userRepository.findAllByUsernameContainingOrJobIdContaining(qid, jobId, pageable);
        }
    }

    @Override
    public UserMaster createOrUpdateUser(UserMaster user, Object object) {
        Optional<UserMaster> userExistCheck = findUserById(user.getId());
        if (userExistCheck.isPresent()) {
            if (user.getPassword() != null && !user.getPassword().equals("")) {
                userExistCheck.get().setPassword("{bcrypt}" + UserUtils.getPasswordBCrypt(user.getPassword()));
            }
            if (user.getRoleId() != null) {
                Optional<Role> role = roleRepository.findById(user.getRoleId());
                if (role.isPresent()) {
                    roleUserRepository.updateUserRole(user.getId(), user.getRoleId());
                }
            }
            if (user.getEnabled() != null) {
                userExistCheck.get().setEnabled(user.getEnabled());
            }
            UserMaster userI = userRepository.save(userExistCheck.get());
            userI.setPassword("");
            return userI;
        } else {
            ObjectMapper mapper = new ObjectMapper();
            EmpModel employee = mapper.convertValue(
                    object,
                    new TypeReference<EmpModel>() {
                    });
            String userName = employee.getJobId();
            String email = employee.getEmail() != null ? employee.getEmail() : "";
            BigInteger id = new BigInteger(employee.getJobId());
            String qid = employee.getQid();
            String password = user.getPassword() != null ? "{bcrypt}" + UserUtils.getPasswordBCrypt(user.getPassword()) : "{bcrypt}" + UserUtils.getRandomPassword(employee.getJobId());
            if (employee.getQid() != null) {
                userName = employee.getQid();
            }
            user.setId(id);
            user.setJobId(id.toString());
            user.setUsername(userName);
            user.setPassword(password);
            user.setQid(qid);
            user.setcNameAr(employee.getCnameAr());
            user.setcNameEn(employee.getCnameEn());
            user.setAccountExpired(new BigInteger("0"));
            user.setAccountLocked(new BigInteger("0"));
            user.setCredentialsExpired(new BigInteger("0"));
            user.setEmail(email);
            UserMaster userInserted = userRepository.save(user);
            if (user.getRoleId() != null) {
                Optional<Role> role = roleRepository.findById(user.getRoleId());
                if (userInserted != null && role.isPresent()) {
                    roleUserRepository.insertUserRole(user.getRoleId(), user.getId());
                }
            }
            UserMaster userI = userRepository.findUserMasterByUsername(user.getUsername());
            userI.setPassword("");
            return userI;
        }
    }


    @Override
    public BigDecimal enable(BigInteger jobId) {
        try {
            userRepository.enableOrDisableCourse(jobId, new BigInteger("1"));
            return new BigDecimal(1);
        } catch (Exception e) {
            e.printStackTrace();
            //TODO log
            return new BigDecimal(0);
        }
    }

    @Override
    public BigDecimal disable(BigInteger jobId) {
        try {
            userRepository.enableOrDisableCourse(jobId, new BigInteger("0"));
            return new BigDecimal(1);
        } catch (Exception e) {
            e.printStackTrace();
            //TODO log
            return new BigDecimal(0);
        }
    }

    @Override
    public Optional<UserMaster> findUserById(BigInteger jobId) {

        Optional<UserMaster> userMaster = userRepository.findById(jobId);
        List<Object[]> objects = roleUserRepository.findRoleUserByUserId(jobId);
        for (Object[] o : objects) {
            userMaster.get().setRoleId(new BigInteger(o[2].toString()));
        }
        return userMaster;
    }

    @Override
    public List<UserMaster> findAllByRoles(List<Role> roles) {
        List<UserMaster> updatedUser = new ArrayList<>();
        List<UserMaster> users = userRepository.findAllByRoles(roles);
        if (users != null && users.size() > 0) {
            users.forEach(item -> {
                UserMaster user = new UserMaster();
                user.setJobId(item.getJobId());
                user.setQid(item.getQid());
                user.setcNameAr(item.getcNameAr());
                user.setEmail(item.getEmail());
                user.setMobile(item.getMobile());
                updatedUser.add(user);
            });
            return updatedUser;
        } else {
            return null;
        }
    }


    @Override
    public Optional<Role> findRoleById(BigInteger roleId) {
        return roleRepository.findById(roleId);
    }
}
