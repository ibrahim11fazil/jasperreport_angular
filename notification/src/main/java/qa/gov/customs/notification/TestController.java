package qa.gov.customs.notification;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

	//Issue with the role ...
	@PreAuthorize("#hasAnyAuthority('role_admin','role_user')")
	@RequestMapping(method = RequestMethod.POST ,path="/foo")
	public String createUser() {
		return "success";
	}

	//Working
	@RequestMapping(method = RequestMethod.POST,path="/foo1" )
	public String createUser1() {
		return "success";
	}
	

}
