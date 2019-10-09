package qa.gov.customs.training.service;

import qa.gov.customs.training.models.UserCoursesAttended;
import qa.gov.customs.training.models.UserProfileModel;

import java.util.List;

public interface UserProfileService {

     List<UserProfileModel> listJobCardProfile(String id);
     List<UserCoursesAttended> coursesAttendedWithStatus(String id);
}
