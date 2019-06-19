package qa.gov.custom.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qa.gov.custom.user.entity.Role;
import qa.gov.custom.user.entity.UserMaster;
import qa.gov.custom.user.repository.RoleRepository;
import qa.gov.custom.user.repository.UserRepository;

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
    UserRepository userRepository;

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
    public UserMaster createOrUpdateUser(UserMaster user) {
        Optional<UserMaster> userExistCheck =  findUserById(user.getId());
        if(userExistCheck.isPresent()){
            if(user.getPassword().equals("") || user.getPassword()!=null) {
                userExistCheck.get().setPassword(user.getPassword());
            }
            if(user.getRoles()!=null && user.getRoles().get(0).getId()!=null) {
               Optional<Role> role =  roleRepository.findById(user.getRoles().get(0).getId());
               if(role.isPresent()){
                   List<Role> roles = new ArrayList<>();
                   roles.add(role.get());
                   userExistCheck.get().setRoles(roles);
               }
            }
            if(user.getEnabled()!=null){
                userExistCheck.get().setEnabled(user.getEnabled());
            }
            return userRepository.save(userExistCheck.get());
        }
        else {
            // Get the Details from From Employee
            //
        }
        return userRepository.save(user);
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
