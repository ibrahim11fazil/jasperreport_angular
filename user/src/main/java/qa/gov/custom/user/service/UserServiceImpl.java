package qa.gov.custom.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qa.gov.custom.user.entity.Role;
import qa.gov.custom.user.entity.UserMaster;
import qa.gov.custom.user.repository.RoleRepository;
import qa.gov.custom.user.repository.UserRepository;

import java.math.BigDecimal;
import java.math.BigInteger;
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
        return roleRepository.findAll();
    }

    @Override
    public List<UserMaster> findAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public UserMaster createOrUpdateUser(UserMaster user) {
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
