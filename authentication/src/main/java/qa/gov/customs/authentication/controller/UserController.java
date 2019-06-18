package qa.gov.customs.authentication.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.authentication.entity.UserMaster;
import qa.gov.customs.authentication.service.CustomUserDetailsService;

import javax.validation.Valid;
import java.security.Principal;

@RestController("/sso")
public class UserController {

	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	@Autowired
	private CustomUserDetailsService userService;

	@RequestMapping(value = "/current", method = RequestMethod.GET)
	public Principal getUser(Principal principal) {
		return principal;
	}

	@PreAuthorize("hasAnyAuthority('create_user_with_role')")
	@RequestMapping(method = RequestMethod.POST,value = "create_user_with_role")
	public void createUser(@Valid @RequestBody UserMaster user) {
		logger.info("user===> "+ user.getEmail());
	}
}
