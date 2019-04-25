package qa.gov.customs.training.controller;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import qa.gov.customs.training.entity.TacActivity;
import qa.gov.customs.training.service.ActivityService;
import qa.gov.customs.utils.Constants;
import qa.gov.customs.utils.MessageUtil;
import qa.gov.customs.utils.models.ResponseType;

@RestController
public class ActivityController {

	@Autowired
	ActivityService activityService;

	//	@PreAuthorize("hasAnyAuthority('train_admin','role_user')")
	@PostMapping("/create-activity")
	public ResponseType createActivity(@RequestBody TacActivity activity) {
		TacActivity submitActivity=null;
		
    
			submitActivity=activityService.createActivity(activity);
		
		ResponseType response = new ResponseType(201, MessageUtil.ACTIVITY_CREATED, true, submitActivity);
		return response;
	}
//	@PreAuthorize("hasAnyAuthority('train_admin','role_user')")
	//if course is not linked with activity, it can be deleted
	@PostMapping("/remove-activity")
	public ResponseType removeActivity(@RequestBody TacActivity activity) {
		List<TacActivity> activityList=null;
		
		if (activity.getActivityId() != new BigDecimal(0)) {
			activityList=activityService.searchActivity(activity);
			if (activityList==null)
			{
				activityService.deleteActivity(activity);
				
			}
	
	}
		ResponseType response = new ResponseType(Constants.CREATED, MessageUtil.ACTIVITY_DELETED, true,null);
		return response;
}
}
