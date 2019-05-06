
package qa.gov.customs.training.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.training.entity.TacInstructorMaster;
import qa.gov.customs.training.service.InstructorService;
import qa.gov.customs.utils.Constants;
import qa.gov.customs.utils.MessageUtil;
import qa.gov.customs.utils.models.ResponseType;

@RestController
public class InstructorController {
	
	@Autowired
	InstructorService instructorService;

	    @PreAuthorize("hasAnyAuthority('create_instructor')")
		@PostMapping("/create-instructor")
		public ResponseType createInstructor(@RequestBody TacInstructorMaster instructor) {
			TacInstructorMaster submitInstructor=null;
			try {
				submitInstructor = instructorService.createInstructor(instructor);
				ResponseType response = new ResponseType(201, MessageUtil.INSTRUCTOR_CREATED, true, submitInstructor);
				return response;
			}catch (Exception e){
				ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.INSTRUCTOR_CREATION_FAILED, false, null);
				return response;
			}

}
}
