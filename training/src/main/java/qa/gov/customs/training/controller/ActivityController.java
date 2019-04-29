package qa.gov.customs.training.controller;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import qa.gov.customs.training.entity.TacActivity;
import qa.gov.customs.training.entity.TacCourseMaster;
import qa.gov.customs.training.security.CustomPrincipal;
import qa.gov.customs.training.service.ActivityService;
import qa.gov.customs.utils.Constants;
import qa.gov.customs.utils.MessageUtil;
import qa.gov.customs.utils.models.ResponseType;

@RestController
public class ActivityController {

	@Autowired
	ActivityService activityService;

	//@PreAuthorize("hasAnyAuthority('sys_admin','role_user')")
	@PostMapping("/create-activity")
	public ResponseType createActivity(@RequestBody TacActivity activity, CustomPrincipal principal) {
		TacActivity submitActivity=null;

		//TODO: make the function generic
        if(activity.getActivityId()==null){
        	activity.setDateCreated(new Date());
        	//TODO: need to update with JobId
        	activity.setUserCreated(principal.getEmail());
		}else{
			Optional<TacActivity> activitySelected= activityService.findActivityById(activity.getActivityId());
			//TODO: need to update with JobId
			if(activitySelected.isPresent()) {
				activity.setUserModified(principal.getEmail());
				activity.setDateModified(new Date());
				activity.setUserCreated(activitySelected.get().getUserCreated());
				activity.setDateCreated(activitySelected.get().getDateCreated());
			}
		}

		submitActivity=activityService.createActivity(activity);


		ResponseType response = new ResponseType(201, MessageUtil.ACTIVITY_CREATED, true, submitActivity);
		return response;
	}

     //@PreAuthorize("hasAnyAuthority('train_admin','role_user')")
	//if course is not linked with activity, it can be deleted
	@PostMapping("/remove-activity")
	public ResponseType removeActivity(@RequestBody TacActivity activity) {
		List<TacCourseMaster> activityList=null;
		if (activity.getActivityId() != new BigDecimal(0)) {
			activityList = activityService.searchActivity(activity);
			if (activityList==null)
			{ activityService.deleteActivity(activity); } }
		ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.ACTIVITY_DELETED, true,null);
		return response;
    }

     // @PreAuthorize("hasAnyAuthority('train_admin','role_user')")
	//  list all the activities
	@PostMapping("/list-activity")
	public ResponseType listActivity() {
		List< TacActivity> activityList=null;
		activityList=activityService.listActivity();
		ResponseType response = new ResponseType(Constants.SUCCESS, "", true,activityList);
		return response;
	}
}
