package qa.gov.custom.user.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import qa.gov.custom.user.repository.UserRepository;


@Service(value = "userDetailsService")
public class CustomUserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {

    @Autowired
    UserRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
//        UserMaster user = userRepository.findUserMasterByUsername(userName);
//        if(user==null)
//            throw new BadCredentialsException("Bad credentials");
//
//        new AccountStatusUserDetailsChecker().check(user);
//        return user;
        return null;
    }


}
