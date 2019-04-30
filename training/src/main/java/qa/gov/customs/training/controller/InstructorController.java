import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import qa.gov.customs.training.entity.TacInstructorMaster;
import qa.gov.customs.training.service.InstructorService;
import qa.gov.customs.utils.MessageUtil;
import qa.gov.customs.utils.models.ResponseType;

public class InstructorController {
	
	@Autowired
	InstructorService instructorService;
//	@PreAuthorize("hasAnyAuthority('sys_admin','role_user')")
/*	@PostMapping("/create-activity")
	public ResponseType createActivity(@RequestBody TacActivity activity) {
		TacActivity submitActivity=null;
		
    
			submitActivity=activityService.createActivity(activity);
		
		ResponseType response = new ResponseType(201, MessageUtil.ACTIVITY_CREATED, true, submitActivity);
		return response;*/
		
//		@PreAuthorize("hasAnyAuthority('sys_admin','role_user')")
		@PostMapping("/create-instructor")
		public ResponseType createInstructor(@RequestBody TacInstructorMaster instructor) {
			TacInstructorMaster submitInstructor=null;
			
	    
			submitInstructor=instructorService.createInstructor(instructor);
			
			ResponseType response = new ResponseType(201, MessageUtil.INSTRUCTOR_CREATED, true, submitInstructor);
			return response;

}
