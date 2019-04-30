package qa.gov.customs.training.service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import qa.gov.customs.training.entity.TacActivity;
import qa.gov.customs.training.entity.TacCourseMaster;

public interface ActivityService {
	 TacActivity createActivity(TacActivity activity);
	 Optional<TacActivity> findActivityById(BigDecimal activityId);
	 List<TacCourseMaster> searchActivity(TacActivity activity);
	 void deleteActivity(TacActivity activity);
	 List<TacActivity> listActivity();
}
