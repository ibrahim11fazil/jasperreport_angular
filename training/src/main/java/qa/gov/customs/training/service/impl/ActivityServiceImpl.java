package qa.gov.customs.training.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qa.gov.customs.training.entity.TacActivity;
import qa.gov.customs.training.entity.TacCourseMaster;
import qa.gov.customs.training.repository.ActivityRepository;
import qa.gov.customs.training.repository.CourseRepository;
import qa.gov.customs.training.service.ActivityService;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;


@Service
public class ActivityServiceImpl implements ActivityService {

    @Autowired
    ActivityRepository activityRepository;
    @Autowired
    CourseRepository courseRepository;

    @Override
    public TacActivity createActivity(TacActivity tacActivity) {
        TacActivity activity = activityRepository.save(tacActivity);
        return activity;
    }

    @Override
    public Optional<TacActivity> findActivityById(BigDecimal activityId) {
        return activityRepository.findById(activityId);
    }

    @Override
    public List<TacCourseMaster> searchActivity(TacActivity activity) {
        //List<TacActivity> activity1=activityRepository.searchActivity(activity.getActivityId());
        List<TacCourseMaster> activity1 = courseRepository.findByActivityId(activity.getActivityId());
        return activity1;
    }

    @Override
    public void deleteActivity(TacActivity activity) {

        activityRepository.deleteById(activity.getActivityId());
        ;
    }

    @Override
    public List<TacActivity> listActivity() {
        return activityRepository.findAll();
    }

    @Override
    public List<TacActivity> searchActivityList(TacActivity activity) {
        if (activity.getActivityName() != null) {
            List<TacActivity> activityList = activityRepository.findByActivityName(activity.getActivityName());
            return activityList;
        } else {
            List<TacActivity> activityList = activityRepository.findAll();
            return activityList;
        }
    }


}
