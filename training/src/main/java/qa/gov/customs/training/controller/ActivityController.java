package qa.gov.customs.training.controller;

<<<<<<< HEAD
import java.math.BigDecimal;
import java.util.Date;

=======
>>>>>>> 617b9c73600ee57a5bdbb895e3ba4d69ad0ccf53
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

import java.math.BigDecimal;
import java.util.List;

@RestController
public class ActivityController {

    @Autowired
    ActivityService activityService;

    //@PreAuthorize("hasAnyAuthority('sys_admin','role_user')")
    @PostMapping("/create-activity")
    public ResponseType createActivity(@RequestBody TacActivity activity, CustomPrincipal principal) {
        TacActivity submitActivity = null;
        submitActivity = activityService.createActivity(activity);
        ResponseType response = new ResponseType(201, MessageUtil.ACTIVITY_CREATED, true, submitActivity);
        return response;
    }

<<<<<<< HEAD
	@PostMapping("/create-activity")
	public ResponseType createActivity(@RequestBody TacActivity activity) {
		TacActivity submitActivity=null;

		Date date=new Date();

			activity.setUserCreated("Jayasree");
			activity.setDateCreated(date);
    
			submitActivity=activityService.createActivity(activity);
			
		
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
		if (activity.getActivityId() != new BigDecimal(0)) {
    
			submitActivity=activityService.createActivity(activity);
		}
		ResponseType response = new ResponseType(201, "created", true, submitActivity);
		return response;
	}

	@PostMapping("/remove-activity")
	public ResponseType removeActivity(@RequestBody TacActivity activity) {
		return null;
	}

=======
    //@PreAuthorize("hasAnyAuthority('train_admin','role_user')")
    //if course is not linked with activity, it can be deleted
    @PostMapping("/remove-activity")
    public ResponseType removeActivity(@RequestBody TacActivity activity) {
        List<TacCourseMaster> activityList = null;
        if (activity.getActivityId() != new BigDecimal(0)) {
            activityList = activityService.searchActivity(activity);
            if (activityList == null) {
                activityService.deleteActivity(activity);
            }
        }
        ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.ACTIVITY_DELETED, true, null);
        return response;
    }

    // @PreAuthorize("hasAnyAuthority('train_admin','role_user')")
    //  list all the activities
    @PostMapping("/list-activity")
    public ResponseType listActivity() {
        List<TacActivity> activityList = null;
        activityList = activityService.listActivity();
        ResponseType response = new ResponseType(Constants.SUCCESS, "", true, activityList);
        return response;
    }
>>>>>>> 617b9c73600ee57a5bdbb895e3ba4d69ad0ccf53
}
