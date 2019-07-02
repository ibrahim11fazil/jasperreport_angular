package qa.gov.customs.training.service.impl;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import qa.gov.customs.training.entity.TacActivity;
import qa.gov.customs.training.entity.TacCourseMaster;
import qa.gov.customs.training.entity.TacInstructorMaster;
import qa.gov.customs.training.entity.TacJobcard;
import qa.gov.customs.training.entity.TacJobcardConditions;
import qa.gov.customs.training.entity.TacJobcardDuties;
import qa.gov.customs.training.entity.TacJobcardSkills;
import qa.gov.customs.training.repository.JobcardConditionsRepository;
import qa.gov.customs.training.repository.JobcardRepository;
import qa.gov.customs.training.repository.jobcardDutiesRepository;
import qa.gov.customs.training.repository.jobcardSkillsRepository;
import qa.gov.customs.training.service.JobcardService;
@Service
public class JobcardServiceImpl implements JobcardService{
	@Autowired
	JobcardRepository jobcardRepository;
	@Override
	public TacJobcard createJobcard(TacJobcard jobcard)
	{
		TacJobcard myjobcard=jobcardRepository.save(jobcard);
		return myjobcard;
	}
	@Override
	public List<TacJobcard> searchJobcard(TacJobcard jobcard) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public TacJobcardConditions createJobcardConditions(TacJobcardConditions jobcardConditions) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<TacJobcardConditions> searchJobcardConditions(BigDecimal jobcardno) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public void deleteJobcardConditions(TacJobcardConditions jobcardConditions) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public TacJobcardDuties createJobcardDuties(TacJobcardDuties jobcardDuties) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<TacJobcardDuties> searchJobcardDuties(BigDecimal jobcardno) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public void deleteJobcardDuties(TacJobcardDuties jobcardDuties) {
		// TODO Auto-generated method stub
		
	}
	@Override
	public TacJobcardSkills CreateJobcardSkills(TacJobcardSkills jobcardSkills) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<TacJobcardSkills> searchJobcardSkills(BigDecimal jobcardno) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public void deleteJobcardSkills(TacJobcardSkills jobcardSkills) {
		// TODO Auto-generated method stub
		
	}
	
	
//	public List<TacJobcard> searchJobcard(String JOB)
//	{
//		List<TacJobcard> myjobcard=JobcardRepository.findByJOB(JOB);
//		return myjobcard;
//		
//	}
//	
//	//job card conditions
//	
//	public List<TacJobcardConditions> searchJobcardConditions(BigDecimal jobcardNo)
//	{
//		List<TacJobcardConditions> MyjobcardConditions=JobcardConditionsRepository.findConditions(jobcardNo);
//		return MyjobcardConditions;
//		
//	}
//	
//	public TacJobcardConditions createJobcardConditions(TacJobcardConditions jobcardConditions)
//	{
//		TacJobcardConditions MyJobcardConditions=JobcardConditionsRepository.save(jobcardConditions);
//		return MyJobcardConditions;
//	}
//	
//	
//	@Override
//	public void deleteConditions(TacJobcardConditions jobcardConditions) 
//	{
//	
//	JobcardConditionsRepository.deleteById(jobcardConditions.getJOB_CONDITIONS());
//	}
//	
//	
//	
//	// job card duties
//	
//	public List<TacJobcardDuties> searchJobcardDuties(BigDecimal jobcardNo)
//	{
//		List<TacJobcardDuties> MyjobcardDuties=jobcardDutiesRepository.findDuties(jobcardNo);
//		return MyjobcardDuties;
//		
//	}
//	
//	public TacJobcardDuties createJobcardDuties(TacJobcardDuties jobcardDuties)
//	{
//		TacJobcardDuties myJobcardDuties=jobcardDutiesRepository.save(jobcardDuties);
//		return jobcardDuties;
//	}
//	
//	// job card skills
//	
//	public List<TacJobcardSkills> searchJobcardSkills(BigDecimal jobcardNo)
//	{
//		List<TacJobcardSkills> MyJobcardSkills=jobcardSkillsRepository.findSkills(jobcardNo);
//		return MyJobcardSkills;
//		
//	}
//	
//	public TacJobcardSkills CreateJobcardSkills(TacJobcardSkills JobcardSkills)
//	{
//		TacJobcardSkills myJobcardSkills=jobcardSkillsRepository.save(JobcardSkills);
//		return myJobcardSkills;
//	}
//
//
//	@Override
//	public List<TacJobcard> searchJobcard(TacJobcard jobcard) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//	
//	

}
