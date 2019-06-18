package qa.gov.custom.user.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.custom.user.entity.UserMaster;
import qa.gov.custom.user.repository.UserRepository;
import qa.gov.custom.user.service.CustomUserDetailsService;
import qa.gov.custom.user.service.UserService;
import qa.gov.customs.utils.Constants;
import qa.gov.customs.utils.MessageUtil;
import qa.gov.customs.utils.models.ResponseType;


import javax.validation.Valid;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.security.Principal;
import java.util.List;
import java.util.Optional;

@RestController
public class UserController {

	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	@Autowired
	private UserService userService;

	@RequestMapping(value = "/current", method = RequestMethod.GET)
	public Principal getUser(Principal principal) {
		return principal;
	}


	@PreAuthorize("hasAnyAuthority('create_system_user')")
	@RequestMapping(method = RequestMethod.POST,value = "create_system_user")
	public ResponseType createUser(@Valid @RequestBody UserMaster user) {
		logger.info("user===> "+ user.getEmail());
		ResponseType response = new ResponseType(Constants.CREATED, MessageUtil.SYSTEM_USER_CREATED, true,
				userService.createOrUpdateUser(user));
		return response;
	}


	//TODO need to add pagination
	@PreAuthorize("hasAnyAuthority('find_all_system_users')")
	@RequestMapping(method = RequestMethod.POST,value = "find_all_system_users")
	public ResponseType findAllSystemUsers() {
		ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SUCCESS, true,
				userService.findAllUsers());
		return response;
	}

	@PreAuthorize("hasAnyAuthority('find_system_user_by_id')")
	@RequestMapping(method = RequestMethod.POST,value = "find_system_user_by_id")
	public ResponseType findSystemUserById(@Valid @RequestBody UserMaster user) {
		logger.info("user===> "+ user.getEmail());
		Optional<UserMaster> userUpdated =  userService.findUserById(user.getId());
		if(userUpdated.isPresent()) {
			ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SUCCESS, true,
					userService.findAllUsers());
			return response;
		}else{
			ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
					null);
			return response;
		}

	}


	@PreAuthorize("hasAnyAuthority('disable_system_user')")
	@RequestMapping(method = RequestMethod.POST,value = "disable_system_user")
	public ResponseType disableUser(@Valid @RequestBody UserMaster user) {
		Optional<UserMaster> userSelected =  userService.findUserById(user.getId());
		if(userSelected.isPresent()) {
			BigDecimal value = userService.disable(user.getId());
			if(value.equals(new BigDecimal(1))) {
				ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SUCCESS, true,
						userSelected.get());
				return response;
			}else{
				ResponseType response = new ResponseType(Constants.SERVER_ERROR, MessageUtil.FAILED, false,
						null);
				return response;
			}
		}else{
			ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
					null);
			return response;
		}
	}

}
