package qa.gov.customs.training.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.training.models.UserCoursesAttended;
import qa.gov.customs.training.models.UserProfileModel;
import qa.gov.customs.training.security.CustomPrincipal;
import qa.gov.customs.training.service.UserProfileService;
import qa.gov.customs.training.service.impl.UserProfileServiceImpl;
import qa.gov.customs.training.utils.Constants;
import qa.gov.customs.training.utils.MessageUtil;
import qa.gov.customs.training.utils.models.ResponseType;

import java.util.List;

@RestController
public class UserProfileController {


    @Autowired
    UserProfileService userProfileService;

    @PreAuthorize("hasAnyAuthority('jobcard_user_profile')")
    @PostMapping("/jobcard_user_profile")
    public ResponseType jobCardUserProfile(@AuthenticationPrincipal CustomPrincipal principal) {

       // logger.info("$$$$$$------>  "+principal.getJid());


            //UserProfileService userProfileService = new UserProfileServiceImpl();
            List<UserProfileModel> submittedRequest = userProfileService.listJobCardProfile(principal.getJid());

            if (submittedRequest != null && submittedRequest.size()>0)
            {
                ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true,
                        submittedRequest);
                return response;
            }
            else
                {
                ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.FAILED, false,
                        null);
                return response;
               }
        }


    @PreAuthorize("hasAnyAuthority('user_courses_attended')")
    @PostMapping("/user_courses_attended")
    public ResponseType userCoursesAttended(@AuthenticationPrincipal CustomPrincipal principal) {

        // logger.info("$$$$$$------>  "+principal.getJid());


        //UserProfileService userProfileService = new UserProfileServiceImpl();
        List<UserCoursesAttended> submittedRequest = userProfileService.coursesAttendedWithStatus(principal.getJid());

        if (submittedRequest != null && submittedRequest.size()>0)
        {
            ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true,
                    submittedRequest);
            return response;
        }
        else
        {
            ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.FAILED, false,
                    null);
            return response;
        }
    }

    }







