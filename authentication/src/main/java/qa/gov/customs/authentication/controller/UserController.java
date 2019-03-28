package qa.gov.customs.authentication.controller;


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

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private CustomUserDetailsService userService;

	@RequestMapping(value = "/current", method = RequestMethod.GET)
	public Principal getUser(Principal principal) {
		return principal;
	}

//	@PreAuthorize("#oauth2.hasScope('role_admin')")
//	@RequestMapping(method = RequestMethod.POST)
//	public void createUser(@Valid @RequestBody UserMaster user) {
//		userService.create(user);
//	}
}
