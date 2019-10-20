package qa.gov.customs.training.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.training.entity.TacActivity;
import qa.gov.customs.training.entity.TacCourseMaster;
import qa.gov.customs.training.service.ActivityService;
import qa.gov.customs.training.utils.Constants;
import qa.gov.customs.training.utils.MessageUtil;
import qa.gov.customs.training.utils.models.ResponseType;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.util.List;

@RestController
public class ActivityController {

    @Autowired
    ActivityService activityService;

    @PreAuthorize("hasAnyAuthority('ac')")
    @PostMapping("/create-activity")
    public ResponseType createActivity(@Valid @RequestBody TacActivity activity) {
        TacActivity submitActivity = null;
        if (activity.getActivityId() != new BigDecimal(0)) {
            ResponseType searchResponse = searchActivity(activity);
            if (searchResponse.getData() == null) {
                submitActivity = activityService.createActivity(activity);
                if (submitActivity != null) {
                    ResponseType response = new ResponseType(201, MessageUtil.ACTIVITY_CREATED, true, submitActivity);
                    return response;
                } else {
                    ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.BAD_REQUEST, false, null);
                    return response;
                }
            }
        }

        ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.BAD_REQUEST, false, null);
        return response;

    }


    //@PreAuthorize("hasAnyAuthority('train_admin','role_user')")
    //if course is not linked with activity, it can be deleted
    @PreAuthorize("hasAnyAuthority('ar')")
    @PostMapping("/remove-activity")
    public ResponseType removeActivity(@RequestBody TacActivity activity) {
        List<TacCourseMaster> activityList = null;
        if (activity == null || activity.getActivityId() == null) {
            ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.ACTIVITY_DELETED_FAILED, false, null);
            return response;
        }
        if (activity.getActivityId() != new BigDecimal(0)) {
            activityList = activityService.searchActivity(activity);
            // search activity will check whether the activity is linked with course or not
            // if the activity is not linked with course it will return '0' and can be deleted
            if (activityList.size() == 0) {
                try {
                    activityService.deleteActivity(activity);
                } catch (Exception e) {
                    ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.ACTIVITY_DELETED_FAILED, false, null);
                    return response;
                }
            }
        }
        ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.ACTIVITY_DELETED, true, null);
        return response;
    }

    // @PreAuthorize("hasAnyAuthority('train_admin','role_user')")
    //  list all the activities
    @PreAuthorize("hasAnyAuthority('al')")
    @GetMapping("/list-activity")
    public ResponseType listActivity() {
        List<TacActivity> activityList = null;
        activityList = activityService.listActivity();
        if (activityList != null) {
            ResponseType response = new ResponseType(Constants.SUCCESS, "", true, activityList);
            return response;
        } else {
            ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.NOT_FOUND, false, null);
            return response;
        }
    }

    @PreAuthorize("hasAnyAuthority('as')")
    @PostMapping("/search-activity")
    public ResponseType searchActivity(@RequestBody TacActivity activity) {
        List<TacActivity> activityList = null;
        activityList = activityService.searchActivityList(activity);
        if (activityList != null && !activityList.isEmpty()) {

            ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true, activityList);
            return response;
        } else {
            ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.NOT_FOUND, false, null);
            return response;
        }


    }


}
