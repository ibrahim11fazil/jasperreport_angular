package qa.gov.customs.training.service;

import java.util.List;

import qa.gov.customs.training.entity.TacActivity;
import qa.gov.customs.training.entity.TacCourseMaster;

public interface ActivityService {
	 TacActivity createActivity(TacActivity activity);
	 List<TacCourseMaster> searchActivity(TacActivity activity);
	 void deleteActivity(TacActivity activity);
	 List<TacActivity> listActivity();
}
