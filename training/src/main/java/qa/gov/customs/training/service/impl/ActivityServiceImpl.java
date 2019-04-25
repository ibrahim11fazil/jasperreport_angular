package qa.gov.customs.training.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import qa.gov.customs.training.entity.TacActivity;
import qa.gov.customs.training.repository.ActivityRepository;
import qa.gov.customs.training.repository.CourseRepository;
import qa.gov.customs.training.service.ActivityService;

@Service
public class ActivityServiceImpl implements ActivityService {
	@Autowired
	ActivityRepository activityRepository;
	@Autowired
	CourseRepository courseRepository;
	
	@Override
	public TacActivity createActivity(TacActivity tacActivity) {
	TacActivity activity=activityRepository.save(tacActivity);
	return activity;
	}

	@Override
	public List<TacActivity> searchActivity(TacActivity activity) {
		//List<TacActivity> activity1=activityRepository.searchActivity(activity.getActivityId());
		List<TacActivity> activity1=courseRepository.searchActivity(activity.getActivityId());
		return activity1;
	}

	@Override
	public void deleteActivity(TacActivity activity) {
	
	activityRepository.delete(activity);;
	}
	

}
