package qa.gov.customs.training.controller;

import java.math.BigDecimal;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import qa.gov.customs.training.entity.TacActivity;
import qa.gov.customs.training.service.ActivityCourseService;
import qa.gov.customs.utils.models.ResponseType;

@RestController
public class ActivityCourseController {

	@Autowired
	ActivityCourseService activityCourseService;

	@PostMapping("/createActivity")
	public ResponseType createActivity(@RequestBody TacActivity activity) {
		TacActivity submitActivity=null;
		Date date=new Date();

			activity.setUserCreated("Jayasree");
			activity.setDateCreated(date);
    
			submitActivity=activityCourseService.createActivity(activity);
			
		
		ResponseType response = new ResponseType(201, "created", true, submitActivity);
		return response;
	}
	@PostMapping("/deleteActivity")
	public ResponseType deleteActivity(@RequestBody TacActivity activity)
	{

		if (activity.getActivityId() != new BigDecimal(0)) {
			
			
	}
		return null;
}
}
