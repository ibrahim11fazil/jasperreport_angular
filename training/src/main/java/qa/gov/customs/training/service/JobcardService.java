package qa.gov.customs.training.service;

import java.math.BigDecimal;
import java.util.List;

import qa.gov.customs.training.entity.TacActivity;
import qa.gov.customs.training.entity.TacCourseMaster;
import qa.gov.customs.training.entity.TacInstructorMaster;
import qa.gov.customs.training.entity.TacJobcard;
import qa.gov.customs.training.entity.TacJobcardConditions;
import qa.gov.customs.training.entity.TacJobcardDuties;
import qa.gov.customs.training.entity.TacJobcardSkills;

public interface JobcardService 
{
	
	 TacJobcard createJobcard(TacJobcard jobcard);
//	 List<TacJobcard> searchJobcard(TacJobcard jobcard);
	 List<TacJobcard> listJobcards(String job, int page, int limit);
	 List<TacJobcard> listJobcards();
	 	
	 TacJobcardConditions createJobcardConditions(TacJobcardConditions jobcardConditions);
	 List<TacJobcardConditions> searchJobcardConditions(BigDecimal jobcardno);
	 void deleteJobcardConditions(TacJobcardConditions jobcardConditions);
	 
	 TacJobcardDuties createJobcardDuties(TacJobcardDuties jobcardDuties);
	 List<TacJobcardDuties> searchJobcardDuties(BigDecimal jobcardno);
	 void deleteJobcardDuties(TacJobcardDuties jobcardDuties);
	 
	 TacJobcardSkills CreateJobcardSkills(TacJobcardSkills jobcardSkills);
	 List<TacJobcardSkills> searchJobcardSkills(BigDecimal jobcardno);
	 void deleteJobcardSkills(TacJobcardSkills jobcardSkills);
}
