package qa.gov.custom.user.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import qa.gov.custom.user.config.Publisher;
import qa.gov.custom.user.entity.Role;
import qa.gov.custom.user.entity.UserMaster;
import qa.gov.custom.user.models.NotificationModel;
import qa.gov.custom.user.models.PasswordRequestModel;
import qa.gov.custom.user.proxy.UserProxyService;
import qa.gov.custom.user.repository.UserRepository;
import qa.gov.custom.user.security.CustomPrincipal;
import qa.gov.custom.user.service.UserService;
import qa.gov.custom.user.utils.Constants;
import qa.gov.custom.user.utils.MessageUtil;
import qa.gov.custom.user.utils.SystemUtil;
import qa.gov.custom.user.utils.UserUtils;
import qa.gov.custom.user.utils.models.ResponseType;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static qa.gov.custom.user.utils.MessageUtil.*;

@RestController
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    private final UserProxyService userProxyService;
    @Autowired
    UserRepository userRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private Publisher publisher;

    @Autowired
    public UserController(UserProxyService userProxyService) {
        this.userProxyService = userProxyService;
    }


    @RequestMapping(value = "/current1", method = RequestMethod.GET)
    public Principal getUser(Principal principal) {
        return principal;
    }

    @RequestMapping(value = "/current", method = RequestMethod.GET)
    public CustomPrincipal getUser(@AuthenticationPrincipal CustomPrincipal principal) {
        return principal;
    }

    @PreAuthorize("hasAnyAuthority('create_system_user')")
    @RequestMapping(method = RequestMethod.POST, value = "create-system-user")
    public ResponseType createUser(@Valid @RequestBody UserMaster user, @RequestHeader(name = "Authorization") String token) {
        ResponseType userdata = userProxyService.getUserById(user.getId().toString(), token);
        if (userdata != null && userdata.isStatus()) {
            UserMaster userMaster = userService.createOrUpdateUser(user, userdata.getData());
            ResponseType response = new ResponseType(Constants.CREATED, MessageUtil.SYSTEM_USER_CREATED, true,
                    userMaster);
            return response;
        } else {
            ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                    null);
            return response;
        }
    }

//					NotificationModel mode = SystemUtil.createNotification(
//							"sraj@custom.gov.qa",
//							"Password updated",
//							"Training application password updated : " + password,
//							"50105223");



    @PreAuthorize("hasAnyAuthority('emp_profile')")
    @RequestMapping(method = RequestMethod.POST, value = "update-password")
    public ResponseType updateAllUserPassword(@RequestBody PasswordRequestModel passwordRequestModel, @AuthenticationPrincipal CustomPrincipal principal) {
        if(passwordRequestModel!=null && passwordRequestModel.getPassword()!=null){
            String password =  passwordRequestModel.getPassword();
            if(password.length()>=8){
                String encryptPassword = "{bcrypt}" + UserUtils.getPasswordBCrypt(password);
                userRepository.updatePassword(new BigInteger(principal.getJid()), encryptPassword);
                UserMaster item =  userRepository.findUserMasterByUsername(principal.getQid());
                if(item!=null) {
                    String message = PASSWORD_UPDATE + password + " " + USERNAME_DETAILS + principal.getJid();
                    String phone = item.getMobile() != null ? item.getMobile() : null;
                    NotificationModel object = SystemUtil.createNotification(
                            null,
                            null,
                            message,
                            phone
                    );
                    publisher.sendNotification(object);
                }
                ResponseType response = new ResponseType(Constants.CREATED, MessageUtil.SUCCESS, true,
                        null);
                return response;

            }else{
                ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.FAILED_PASSWORD_LENGTH, false,
                        null);
                return response;
            }
        }else{
            ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.FAILED, false,
                    null);
            return response;
        }

    }

    @PreAuthorize("hasAnyAuthority('create_system_user')")
    @RequestMapping(method = RequestMethod.POST, value = "update-password-all")
    public ResponseType updateAllUserPassword() {
        userRepository.findAllUsersInList().forEach(item -> {
            try {
                if (item.getJobId() != null) {
                    logger.error("######");
                    String password = UserUtils.generateRandomPassword();
                    String encryptPassword = "{bcrypt}" + UserUtils.getPasswordBCrypt(password);
                    userRepository.updatePassword(new BigInteger(item.getJobId()), encryptPassword);
                    logger.info("######" + item.getJobId() + "##" + password);
                    String email = item.getEmail() != null ? item.getEmail() : null;
                    String emailSubject = PASSWORD_SUBJECT_EMAIL;
                    String message = PASSWORD_UPDATE + password + " " + USERNAME_DETAILS + item.getQid();
                    String phone = item.getMobile() != null ? item.getMobile() : null;
                    NotificationModel object = SystemUtil.createNotification(
                            null,
                            null,
                            message,
                            phone
                    );
                    //String message = PASSWORD_UPDATE + password + " " + USERNAME_DETAILS + item.getQid();
                    publisher.sendNotification(object);
                } else {
                    logger.error("###### ERROR NO JOB ID FOR PASSWORD RESET: " + item.getId());
                }
            } catch (Exception e) {
                logger.error("######");
                logger.error(item.getJobId() != null ? item.getJobId() : "## " + item.getId().toString());
                logger.error("######");
            }
        });
        ResponseType response = new ResponseType(Constants.CREATED, MessageUtil.SUCCESS, true,
                null);
        return response;
    }


    //1) TODO find all roles
    @RequestMapping(method = RequestMethod.POST, value = "all-system-roles")
    public ResponseType findAllRoles() {
        ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                userService.findAllRoles());
        return response;
    }


    //2) TODO find all permissions
    @PreAuthorize("hasAnyAuthority('find_all_permissions')")
    @RequestMapping(method = RequestMethod.POST, value = "find-all-system-permissions")
    public ResponseType getAllPermissions() {
        ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                userService.findAllPermissions());
        return response;
    }

    //3) TODO find all permissions for role
    @PreAuthorize("hasAnyAuthority('find_all_permissions')")
    @RequestMapping(method = RequestMethod.POST, value = "find-all-system-permissions-for-role")
    public ResponseType getAllPermissionForRole(@RequestBody UserMaster user) {
        ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                userService.findAllPermissionForRole(user.getRoleId()));
        return response;
    }

    //4) TODO update role and permissions
    @PreAuthorize("hasAnyAuthority('update_role_and_permission')")
    @RequestMapping(method = RequestMethod.POST, value = "update-role-and-permission")
    public ResponseType updateRoleAndPermission(@RequestBody Role role) {
        ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                userService.updateRoleAndPermission(role));
        return response;
    }


    //TODO need to add pagination
    @PreAuthorize("hasAnyAuthority('find_all_system_users')")
    @RequestMapping(method = RequestMethod.POST, value = "find-all-system-users")
    public ResponseType findAllSystemUsers(@RequestBody UserMaster user) {
        if (user.getJobId() == null)
            user.setJobId("");
        List<UserMaster> users = userService.findAllByIdOrQID(user.getJobId(), user.getJobId(), user.getStart(), user.getLimit());
        ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                users);
        return response;
    }

    @PreAuthorize("hasAnyAuthority('find_all_system_users_by_role_id')")
    @RequestMapping(method = RequestMethod.POST, value = "find-all-system-users-by-role-role-id")
    public ResponseType findAllSystemUsersByRole(@RequestBody UserMaster user) {
        if (user.getRoleId() != null) {
            Optional<Role> role = userService.findRoleById(user.getRoleId());
            if (role.isPresent()) {
                List<Role> roles = new ArrayList<>();
                roles.add(role.get());
                List<UserMaster> users = userService.findAllByRoles(roles);
                if (users != null && users.size() > 0) {
                    ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                            users);
                    return response;
                } else {
                    ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                            null);
                    return response;
                }
            } else {
                ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                        null);
                return response;
            }
        } else {
            ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                    null);
            return response;
        }
    }

//	@PreAuthorize("hasAnyAuthority('find_all_system_users')")
//	@RequestMapping(method = RequestMethod.POST,value = "find-all-system-users")
//	public ResponseType findAllSystemUsersByUserNameOrQID() {
//		ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SUCCESS, true,
//				userService.findAllUsers());
//		return response;
//	}

    @PreAuthorize("hasAnyAuthority('find_system_user_by_id')")
    @RequestMapping(method = RequestMethod.POST, value = "find-system-user-by-id")
    public ResponseType findSystemUserById(@Valid @RequestBody UserMaster user) {
        logger.info("user===> " + user.getEmail());
        Optional<UserMaster> userUpdated = userService.findUserById(user.getId());
        if (userUpdated.isPresent()) {
            ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                    userUpdated.get());
            return response;
        } else {
            ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                    null);
            return response;
        }
    }


    @PreAuthorize("hasAnyAuthority('disable_system_user')")
    @RequestMapping(method = RequestMethod.POST, value = "disable-system-user")
    public ResponseType disableUser(@Valid @RequestBody UserMaster user) {
        Optional<UserMaster> userSelected = userService.findUserById(user.getId());
        if (userSelected.isPresent()) {
            BigDecimal value = userService.disable(user.getId());
            if (value.equals(new BigDecimal(1))) {
                ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                        userSelected.get());
                return response;
            } else {
                ResponseType response = new ResponseType(Constants.SERVER_ERROR, MessageUtil.FAILED, false,
                        null);
                return response;
            }
        } else {
            ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                    null);
            return response;
        }
    }

    @PreAuthorize("hasAnyAuthority('enable_system_user')")
    @RequestMapping(method = RequestMethod.POST, value = "enable-system-user")
    public ResponseType enableUser(@Valid @RequestBody UserMaster user) {
        Optional<UserMaster> userSelected = userService.findUserById(user.getId());
        if (userSelected.isPresent()) {
            BigDecimal value = userService.enable(user.getId());
            if (value.equals(new BigDecimal(1))) {
                ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                        userSelected.get());
                return response;
            } else {
                ResponseType response = new ResponseType(Constants.SERVER_ERROR, MessageUtil.FAILED, false,
                        null);
                return response;
            }
        } else {
            ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                    null);
            return response;
        }
    }

//	@RequestMapping(value = "/testuser", method = RequestMethod.GET)
//	public void getUserTest(@RequestHeader(name="Authorization") String token) {
//		EmpEmployeeMaster user = new EmpEmployeeMaster();
//		user.setJobId("4077");
//		logger.info("Testing "+ token);
//
//		EmpEmployeeMaster userdata = userProxyService.getUserById(user.getJobId(),token);
//		logger.info(token);
//		logger.info(userdata.getEmail());
//
//	}

}
