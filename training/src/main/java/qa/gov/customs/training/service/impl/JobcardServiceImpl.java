package qa.gov.customs.training.service.impl;

import java.util.List;

import qa.gov.customs.training.entity.TacActivity;
import qa.gov.customs.training.entity.TacCourseMaster;
import qa.gov.customs.training.entity.TacJobcard;
import qa.gov.customs.training.service.JobcardService;

public class JobcardServiceImpl implements JobcardService{
	
	@Override
	public TacJobcard createJobcard(TacJobcard jobcard)
	{
		TacJobcard jobcard=activityRepository.save(TacJobcard);
		return jobcard;
	}
	
	
	public List<TacJobcard> searchJobcard(TacJobcard jobcard)
	{
		List<TacJobcard> jobcard=courseRepository.findByActivityId(activity.getActivityId());
		return jobcard;
		
	}

}
