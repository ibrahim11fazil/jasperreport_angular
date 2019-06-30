package qa.gov.customs.training.service;

import java.util.List;

import qa.gov.customs.training.entity.TacActivity;
import qa.gov.customs.training.entity.TacCourseMaster;
import qa.gov.customs.training.entity.TacJobcard;

public interface JobcardService {
	 TacJobcard createJobcard(TacJobcard jobcard);
	 List<TacJobcard> searchJobcard(TacJobcard jobcard);
}
