package qa.gov.customs.authentication;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import qa.gov.customs.authentication.entity.UserMaster;
import qa.gov.customs.authentication.repository.UserRepository;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserMasterJpaTest {


    @Autowired
    UserRepository userRepository;
//    @Autowired
//    private MockMvc mockMvc;

    //TODO setting a user with roles


    //TODO getting user based on name
    @Test
    public void jpaTestForUserGetting() {
        UserMaster userMaster = userRepository.findUserMasterByUsername("user");
        assertThat(userMaster != null).isEqualTo(true);
    }

    //TODO getting a user via controller
//    @Test
//    public void testUserToken() throws  Exception{
//
//
//        mockMvc.perform( MockMvcRequestBuilders
//                .post("/oauth/token")
//                .header("Authorization","Basic VVNFUl9DTElFTlRfQVBQOnBhc3N3b3JkQDIwMTg=")
//                .contentType("application/x-www-form-urlencoded")
//                .content(EntityUtils.toString(new UrlEncodedFormEntity(Arrays.asList(
//                new BasicNameValuePair("username", "user"),
//                new BasicNameValuePair("password", "password@2018"),
//                new BasicNameValuePair("grant_type", "password")
//
//        ))))
//                .accept(MediaType.APPLICATION_JSON))
//                .andDo(print())
//                .andExpect(status().isOk())
//                .andExpect(MockMvcResultMatchers.jsonPath("$.email").value("user@gmail.com"));
//
//    }

}
