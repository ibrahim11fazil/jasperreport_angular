package qa.gov.customs.notification;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.notification.model.TestModel;
import qa.gov.customs.notification.security_config.CustomPrincipal;

@RestController
public class TestController {

	//Issue with the role ...
	@PreAuthorize("hasAnyAuthority('role_admin','role_user')")
	@RequestMapping(method = RequestMethod.POST ,path="/foo")
	public String createUser(CustomPrincipal principal) {

		return "success " + principal.getUsername() + " "+  principal.getEmail();
	}

	//Working
	@RequestMapping(method = RequestMethod.POST,path="/foo1" )
	public String createUser1() {
		return "success";
	}



	//@PreAuthorize("hasPermission(#model,'can_create_user')")
	@PreAuthorize("hasAnyAuthority('can_create_user')")
	@RequestMapping(method = RequestMethod.POST ,path="/foo3")
	public String createUser2(@RequestBody TestModel model ) {
		return "success";
	}

}
