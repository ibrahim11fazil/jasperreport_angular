package qa.gov.customs.training.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qa.gov.customs.training.models.UserCoursesAttended;
import qa.gov.customs.training.models.UserProfileModel;
import qa.gov.customs.training.repository.UserProfileRepository;
import qa.gov.customs.training.service.UserProfileService;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;


@Service
public class UserProfileServiceImpl  implements UserProfileService {

    @Autowired
    UserProfileRepository userprofilerepository;

    @Override
    public List<UserProfileModel> listJobCardProfile(String id) {
        List<Object[]> userObjects= userprofilerepository.listJobCardProfile(id);
        if(userObjects!=null && userObjects.size()>0){
            return processlistJobCardProfile(userObjects);
        }else
            return null;
    }

    List<UserProfileModel> processlistJobCardProfile(List<Object[]> objects)
    {
        List<UserProfileModel> fAreas = new ArrayList<>();
        for (Object[] o : objects)
        {
            UserProfileModel fArea = new UserProfileModel();
            fArea.setJobCardNo((BigDecimal) o[0]);
            fArea.setJobGrade((String) o[1]);
            fArea.setAdmin_hours((BigDecimal) o[2]);
            fArea.setSpecialised_hours((BigDecimal) o[3]);
            fArea.setWorkshop_hours((BigDecimal) o[4]);
            fArea.setCourseId((BigDecimal) o[5]);
            fArea.setCourseName((String) o[6]);
            fArea.setNoOfHours((BigDecimal) o[7]);
            fArea.setCategory((String) o[8]);
            fArea.setStatusFlag((BigDecimal) o[9]);
            fArea.setMandatoryFlag((BigDecimal) o[10]);
            fAreas.add(fArea);
        }
        return fAreas;
    }

    @Override
    public List<UserCoursesAttended> coursesAttendedWithStatus(String id) {
        List<Object[]> userAttendance= userprofilerepository.coursesAttendedWithStatus(id);
        if(userAttendance!=null && userAttendance.size()>0){
            return processcoursesAttendedWithStatus(userAttendance);
        }else
            return null;
    }

    List<UserCoursesAttended> processcoursesAttendedWithStatus(List<Object[]> objects)
    {
        List<UserCoursesAttended> fAreas = new ArrayList<>();
        for (Object[] o : objects)
        {
            UserCoursesAttended fArea = new UserCoursesAttended();
            fArea.setJobId((String) o[0]);
            fArea.setActivationId((BigDecimal) o[1]);
            fArea.setCourseId((BigDecimal) o[2]);
            fArea.setCourseName((String) o[3]);
            fArea.setDuration((BigDecimal) o[4]);
            fArea.setCategory((String) o[5]);
            fArea.setAttendeesId((BigDecimal) o[6]);
            fArea.setCourseStatus((BigDecimal) o[7]);
            fAreas.add(fArea);
        }
        return fAreas;
    }

    }
