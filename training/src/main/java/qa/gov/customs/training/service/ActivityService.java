package qa.gov.customs.training.service;

import java.util.List;

import qa.gov.customs.training.entity.TacActivity;

public interface ActivityService {
	 TacActivity createActivity(TacActivity activity);
	 List<TacActivity> searchActivity(TacActivity activity);
	 void deleteActivity(TacActivity activity);
	 List<TacActivity> listActivity();
}
