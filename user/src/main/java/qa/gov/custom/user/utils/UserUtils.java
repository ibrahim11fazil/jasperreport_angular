package qa.gov.custom.user.utils;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class UserUtils {

    public static String getRandomPassword(String jobId){
        BCryptPasswordEncoder coder = new BCryptPasswordEncoder();
        String password = coder.encode("password@2019@"+jobId);
        return password;
    }

    public static String getPasswordBCrypt(String passwordInput){
        BCryptPasswordEncoder coder = new BCryptPasswordEncoder();
        String password = coder.encode(passwordInput);
        return password;
    }
}
