package qa.gov.customs.training.service;

import qa.gov.customs.training.entity.TacJobcard;
import qa.gov.customs.training.models.UserCoursesAttended;
import qa.gov.customs.training.models.UserHistoricalData;
import qa.gov.customs.training.models.UserProfileModel;

import java.util.List;

public interface UserProfileService {

    List<UserProfileModel> listJobCardProfile(String id);
    List<TacJobcard> getJobCard(String id);

    List<UserCoursesAttended> coursesAttendedWithStatus(String id);
    List<UserHistoricalData> historicalCoursesAttended(String id);
}
