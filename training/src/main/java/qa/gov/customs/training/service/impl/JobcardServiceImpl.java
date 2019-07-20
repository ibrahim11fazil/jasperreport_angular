package qa.gov.customs.training.service.impl;

import java.math.BigDecimal;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import qa.gov.customs.training.entity.*;
import qa.gov.customs.training.models.JobCardCourseLinkModel;
import qa.gov.customs.training.repository.*;
import qa.gov.customs.training.service.JobcardService;
@Service
public class JobcardServiceImpl implements JobcardService{
	@Autowired
	JobcardRepository jobcardRepository;
	@Autowired
	JobcardConditionsRepository jobcardConditionsRepository;

	@Autowired
	CourseRepository courseRepository;
	@Override
	public TacJobcard createJobcard(TacJobcard jobcard)
	{
		Optional<TacCourseMaster> master1 =courseRepository.findById(new BigDecimal(84));
		//Optional<TacCourseMaster> master2 =courseRepository.findById(new BigDecimal(84));
		TacJobcard insertedJobCardUpdated = jobcardRepository.save(jobcard);
		Optional<TacJobcard> inserted = jobcardRepository.findById(insertedJobCardUpdated.getJobcardNo());
		TacJobcardCourseLink jobCourse = new TacJobcardCourseLink();
		jobCourse.setTacJobcardTransiant(inserted.get());
		jobCourse.setTacCourseMasterTransiant(master1.get());
		jobCourse.setMandatoryFlag(new BigDecimal(1));
		Set<TacJobcardCourseLink> links = new HashSet<>();
		links.add(jobCourse);
		inserted.get().setTacJobcardCourseLink(links);
		TacJobcard insertedJobCardUpdated1 =   jobcardRepository.save(inserted.get());
		List<JobCardCourseLinkModel> list = findAllCoursesForJobCard(insertedJobCardUpdated.getJobcardNo());
		insertedJobCardUpdated1.setJobCardCourseLinkModelList(list);
		return insertedJobCardUpdated1;
	}
	
//	@Override
//	public List<TacJobcard> searchJobcard(TacJobcard jobcard) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//	
	@Override
	public List<TacJobcard> listJobcards() {
		List<TacJobcard> jobcards = new ArrayList<>();
		jobcardRepository.findAll().forEach(item -> jobcards.add(item));
		 return jobcards;
	}
	
	@Override
	public List<TacJobcard> listJobcards(String job, int page, int limit) {
		List<TacJobcard> jobcards =  new ArrayList<>();
		Pageable pageable =
				PageRequest.of(
						page, limit, Sort.by("job"));
		if(job==null ||  job.equals("")){
			Page<TacJobcard> pages = jobcardRepository.findAll(pageable);
			pages.forEach(item ->jobcards.add(item));
			return jobcards;
		}
		else {
			return jobcardRepository.findByJob(job,pageable);
		}
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

	@Override
	public List<JobCardCourseLinkModel> findAllCoursesForJobCard(BigDecimal jobCardNumber) {
		List<JobCardCourseLinkModel> list = new ArrayList<>();
		List<Object[]>  objects = jobcardRepository.findAllCoursesForJobCard(jobCardNumber);
		for (Object[] o : objects) {
			JobCardCourseLinkModel fArea = new JobCardCourseLinkModel();
			fArea.setJobCardId((BigDecimal) o[0]);
			fArea.setCourseId((BigDecimal) o[1]);
			fArea.setMandatoryFlag((BigDecimal) o[2]);
			list.add(fArea);
		}
		return list;
	}


//	@Override
//	public TacJobcardConditions createJobcardConditions(TacJobcardConditions jobcardConditions) {
//		// TODO Auto-generated method stub
//		return null;
////	}
//	@Override
//	public List<TacJobcardConditions> searchJobcardConditions(BigDecimal jobcardno) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//	@Override
//	public void deleteJobcardConditions(TacJobcardConditions jobcardConditions) {
//		// TODO Auto-generated method stub
//		
//	}
//	@Override
//	public TacJobcardDuties createJobcardDuties(TacJobcardDuties jobcardDuties) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//	@Override
//	public List<TacJobcardDuties> searchJobcardDuties(BigDecimal jobcardno) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//	@Override
//	public void deleteJobcardDuties(TacJobcardDuties jobcardDuties) {
//		// TODO Auto-generated method stub
//		
//	}
//	@Override
//	public TacJobcardSkills CreateJobcardSkills(TacJobcardSkills jobcardSkills) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//	@Override
//	public List<TacJobcardSkills> searchJobcardSkills(BigDecimal jobcardno) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//	@Override
//	public void deleteJobcardSkills(TacJobcardSkills jobcardSkills) {
//		// TODO Auto-generated method stub
//		
//	}
//	
	
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
//		TacJobcardConditions MyJobcardConditions=jobcardConditionsRepository.save(jobcardConditions);
//		return MyJobcardConditions;
//	}
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
