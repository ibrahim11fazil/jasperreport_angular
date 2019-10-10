package qa.gov.customs.training.controller;


import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.training.models.JobCardProfileRequest;
import qa.gov.customs.training.models.UserCoursesAttended;
import qa.gov.customs.training.models.UserProfileModel;
import qa.gov.customs.training.proxy.EmployeeProxyService;
import qa.gov.customs.training.security.CustomPrincipal;
import qa.gov.customs.training.service.UserProfileService;
import qa.gov.customs.training.service.impl.UserProfileServiceImpl;
import qa.gov.customs.training.utils.Constants;
import qa.gov.customs.training.utils.MessageUtil;
import qa.gov.customs.training.utils.models.ResponseType;

import java.util.List;

import static qa.gov.customs.training.utils.Constants.*;

@RestController
public class UserProfileController {


    @Autowired
    UserProfileService userProfileService;

    @Autowired
    EmployeeProxyService employeeProxyService;



    @PreAuthorize("hasAnyAuthority('jobcard_user_profile')")
    @PostMapping("/jobcard_user_profile")
    public ResponseType jobCardUserProfile(@RequestBody  JobCardProfileRequest jobCardProfileRequest,
                                           @AuthenticationPrincipal CustomPrincipal principal,
                                           @RequestHeader(name="Authorization") String token) {
         String jobId=principal.getJid();
        if( principal.getScopes().contains(ROLE_EMPLOYEE)){
            List<UserProfileModel> submittedRequest = userProfileService.listJobCardProfile(jobId);
            ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true,
                    submittedRequest);
            return response;
        }else if( principal.getScopes().contains(ROLE_DEPT_HEAD) || principal.getScopes().contains(ROLE_DEPT_MGR)) {

            if(jobCardProfileRequest.getJobIdRequested()!=null){
                String jobIdRequested=jobCardProfileRequest.getJobIdRequested();
                ResponseType type = employeeProxyService.employeesUnderSupervisorCheck(jobIdRequested,token);
                if(type.isStatus()) {
                    ObjectMapper mapper = new ObjectMapper();
                    Boolean data = mapper.convertValue(
                            type.getData(),
                            new TypeReference<Boolean>() {
                            });
                    if(data){
                        List<UserProfileModel> submittedRequest = userProfileService.listJobCardProfile(jobIdRequested);
                        return genericResponse(submittedRequest);
                    }else{
                        ResponseType response = new ResponseType(UNAUTHORIZED, MessageUtil.FAILED, false,
                                null);
                        return response;
                    }
                }else{
                    ResponseType response = new ResponseType(UNAUTHORIZED, MessageUtil.FAILED, false,
                            null);
                    return response;
                }
            }else{
                List<UserProfileModel> submittedRequest = userProfileService.listJobCardProfile(jobId);
                return genericResponse(submittedRequest);
            }
        }else{
            if(jobCardProfileRequest.getJobIdRequested()!=null) {
                String jobIdRequested = jobCardProfileRequest.getJobIdRequested();
                List<UserProfileModel> submittedRequest = userProfileService.listJobCardProfile(jobIdRequested);
                return genericResponse(submittedRequest);
            }else{
                List<UserProfileModel> submittedRequest = userProfileService.listJobCardProfile(jobId);
                return genericResponse(submittedRequest);
            }
        }
        }


    public <T>  ResponseType genericResponse(List<T> submittedRequest) {
        if(submittedRequest!=null && submittedRequest.size()>0) {
            ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true,
                    submittedRequest);
            return response;
        }else{
            ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.NOT_FOUND, false,
                    false);
            return response;
        }
    }



    @PreAuthorize("hasAnyAuthority('user_courses_attended')")
    @PostMapping("/user_courses_attended")
    public ResponseType userCoursesAttended(@RequestBody  JobCardProfileRequest jobCardProfileRequest,
                                            @AuthenticationPrincipal CustomPrincipal principal,
                                            @RequestHeader(name="Authorization") String token) {

        String jobId=principal.getJid();
        if( principal.getScopes().contains(ROLE_EMPLOYEE)){
            List<UserCoursesAttended> submittedRequest = userProfileService.coursesAttendedWithStatus(principal.getJid());
            ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true,
                    submittedRequest);
            return response;
        }else if( principal.getScopes().contains(ROLE_DEPT_HEAD) ||
                principal.getScopes().contains(ROLE_DEPT_MGR)) {

            if(jobCardProfileRequest.getJobIdRequested()!=null){
                String jobIdRequested=jobCardProfileRequest.getJobIdRequested();
                ResponseType type = employeeProxyService.employeesUnderSupervisorCheck(jobIdRequested,token);
                if(type.isStatus()) {
                    ObjectMapper mapper = new ObjectMapper();
                    Boolean data = mapper.convertValue(
                            type.getData(),
                            new TypeReference<Boolean>() {
                            });
                    if(data){

                        List<UserCoursesAttended> submittedRequest = userProfileService.coursesAttendedWithStatus(jobIdRequested);
                        return genericResponse(submittedRequest);
                    }else{
                        ResponseType response = new ResponseType(UNAUTHORIZED, MessageUtil.FAILED, false,
                                null);
                        return response;
                    }
                }else{
                    ResponseType response = new ResponseType(UNAUTHORIZED, MessageUtil.FAILED, false,
                            null);
                    return response;
                }
            }else{
                List<UserCoursesAttended> submittedRequest = userProfileService.coursesAttendedWithStatus(jobId);
                return genericResponse(submittedRequest);
            }
        }else{
            if(jobCardProfileRequest.getJobIdRequested()!=null) {
                String jobIdRequested = jobCardProfileRequest.getJobIdRequested();
                List<UserCoursesAttended> submittedRequest = userProfileService.coursesAttendedWithStatus(jobIdRequested);
                return genericResponse(submittedRequest);
            }else{
                List<UserCoursesAttended> submittedRequest = userProfileService.coursesAttendedWithStatus(jobId);
                return genericResponse(submittedRequest);
            }
        }
    }

    }







