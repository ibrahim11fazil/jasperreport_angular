package qa.gov.custom.user.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qa.gov.custom.user.entity.Role;
import qa.gov.custom.user.entity.UserMaster;
import qa.gov.custom.user.proxy.EmpEmployeeMaster;
import qa.gov.custom.user.proxy.EmpModel;
import qa.gov.custom.user.repository.RoleRepository;
import qa.gov.custom.user.repository.RoleUserRepository;
import qa.gov.custom.user.repository.UserRepository;
import qa.gov.custom.user.utils.UserUtils;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleUserRepository roleUserRepository;

    @Override
    public List<Role> findAllRoles() {
        List<Object[]> roleObjects = roleRepository.findallAllRolesWithIDAndName();
        List<Role> roles=new ArrayList<>();
        for (Object[] o :roleObjects) {
            Role role = new Role();
            role.setId(new BigInteger(o[0].toString()));
            role.setName((String)o[1]);
            role.setRemark((String)o[2]);
            roles.add(role);
        }
        return roles;
    }

    @Override
    public List<UserMaster> findAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public UserMaster createOrUpdateUser(UserMaster user,Object object) {
        Optional<UserMaster> userExistCheck =  findUserById(user.getId());
        if(userExistCheck.isPresent()){
            if(!user.getPassword().equals("") && user.getPassword()!=null) {
                userExistCheck.get().setPassword("{bcrypt}"+UserUtils.getPasswordBCrypt(user.getPassword()));
            }
            if(user.getRoleId()!=null) {
               Optional<Role> role =  roleRepository.findById(user.getRoleId());
               if(role.isPresent())
                roleUserRepository.updateUserRole(user.getId(),user.getRoleId());
            }
            if(user.getEnabled()!=null){
                userExistCheck.get().setEnabled(user.getEnabled());
            }
            UserMaster userI=  userRepository.save(userExistCheck.get());
            userI.setPassword("");
            return userI;
        }
        else {
            ObjectMapper mapper = new ObjectMapper();
            EmpModel employee = mapper.convertValue(
                    object,
                    new TypeReference<EmpModel>() { });
            String userName = employee.getJobId();
            String email = employee.getEmail()!=null?employee.getEmail():"";
            BigInteger id = new BigInteger(employee.getJobId());
            String password =user.getPassword()!=null?UserUtils.getPasswordBCrypt(user.getPassword()):UserUtils.getRandomPassword(employee.getJobId());
            if(employee.getQid()!=null){
                userName=  employee.getQid();
            }
            user.setId(id);
            user.setJobId(id.toString());
            user.setUsername(userName);
            user.setPassword(password);
            user.setAccountExpired(new BigInteger("0"));
            user.setAccountLocked(new BigInteger("0"));
            user.setCredentialsExpired(new BigInteger("0"));
            user.setEmail(email);
            UserMaster userInserted =  userRepository.save(user);
            if(user.getRoleId()!=null) {
                Optional<Role> role =  roleRepository.findById(user.getRoleId());
                if(userInserted!=null && role.isPresent()){
                    roleUserRepository.insertUserRole(user.getId(),user.getRoleId());
                }
            }
            UserMaster userI=  userRepository.findUserMasterByUsername(user.getUsername());
            userI.setPassword("");
            return userI;
        }
    }

    @Override
    public BigDecimal disable(BigInteger jobId) {
        try {
            userRepository.enableOrDisableCourse(jobId, new BigDecimal(1));
            return new BigDecimal(1);
        }catch (Exception e){
            e.printStackTrace();
            //TODO log
            return new BigDecimal(0);
        }
    }

    @Override
    public BigDecimal enable(BigInteger jobId) {
        try {
            userRepository.enableOrDisableCourse(jobId, new BigDecimal(0));
            return new BigDecimal(1);
        }catch (Exception e){
            e.printStackTrace();
            //TODO log
            return new BigDecimal(0);
        }
    }

    @Override
    public Optional<UserMaster> findUserById(BigInteger jobId) {
        return userRepository.findById(jobId);
    }
}
