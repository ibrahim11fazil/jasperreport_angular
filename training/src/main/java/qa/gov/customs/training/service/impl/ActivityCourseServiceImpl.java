package qa.gov.customs.training.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import qa.gov.customs.training.entity.TacActivity;
import qa.gov.customs.training.repository.ActivityRepository;
import qa.gov.customs.training.service.ActivityCourseService;
@Service
public class ActivityCourseServiceImpl implements ActivityCourseService {
	@Autowired
	ActivityRepository activityRepository;
	
	@Override
	public TacActivity createActivity(TacActivity tacActivity) {
		
	TacActivity activity=activityRepository.save(tacActivity);
	return activity;
		
	}
	

}
