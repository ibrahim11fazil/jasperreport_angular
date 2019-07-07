package qa.gov.customs.training.controller;

import java.math.BigDecimal;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import qa.gov.customs.training.entity.TacActivity;
import qa.gov.customs.training.entity.TacInstructorMaster;
import qa.gov.customs.training.entity.TacJobcard;
import qa.gov.customs.training.entity.TacJobcardConditions;
import qa.gov.customs.training.entity.TacJobcardDuties;
import qa.gov.customs.training.entity.TacJobcardSkills;
import qa.gov.customs.training.service.CourseService;
import qa.gov.customs.training.service.JobcardService;
import qa.gov.customs.training.service.impl.JobcardServiceImpl;
import qa.gov.customs.utils.Constants;
import qa.gov.customs.utils.MessageUtil;
import qa.gov.customs.utils.models.ResponseType;


@RestController

public class JobCardController
{
	@Autowired
	JobcardService jobcardService;

	//Create
	
	@PreAuthorize("hasAnyAuthority('create_jobcard')")
	@PostMapping("/create-jobCard")
	
	public ResponseType createJobCard(@Valid @RequestBody TacJobcard jobcard)
	{
    	System.out.println("create jobcard");
        TacJobcard newJobcard = null;
        ResponseType response=null;
        if(jobcard!=null)
        {
        	      	
        		newJobcard = jobcardService.createJobcard(jobcard);
        			if(newJobcard!=null)
        			{
        					 response = new ResponseType(201, MessageUtil.JOBCARD_CREATED, true, newJobcard);
        
				//	return response;
        			}
        			else
        			{
        				 response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.BAD_REQUEST, false, null);
        			//	return response;	
        			}
        	}
//    	ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.BAD_REQUEST, false, null);
		return response;
	}

	
	//Add 
//	
//	// Conditions
	
	@PreAuthorize("hasAnyAuthority('add_jobcardConditions')")
	@PostMapping("/add-jobcardConditions")
	public ResponseType AddjobcardConditions(@Valid @RequestBody TacJobcardConditions jobcardConditions)
	{
    	System.out.println("add jobcardConditions");
        TacJobcardConditions newjobcardConditions = null;
        ResponseType response=null;
        
        if(jobcardConditions!=null)
        {
        		newjobcardConditions = jobcardService.createJobcardConditions(jobcardConditions);
        			if(newjobcardConditions!=null)
        			{
        					 response = new ResponseType(201, MessageUtil.jobcardConditions_CREATED, true, newjobcardConditions);
        

        			}
        			else
        			{
        				 response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.BAD_REQUEST, false, null);
	
        			}
        }
		else
		{
			 response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.BAD_REQUEST, false, null);

		}
    

		return response;
		
		
	}
}	
//	
//	//Skills
//	
//	
//		@PreAuthorize("hasAnyAuthority('add_jobcardSkills')")
//		@PostMapping("/add-jobcardSkills")
//		
//		public ResponseType AddjobcardSkills(@Valid @RequestBody TacJobcardSkills jobcardSkills)
//		{
//	    	System.out.println("add jobcardSkills");
//	        TacJobcardSkills newjobcardSkills = null;
//	               	
//	        		newjobcardSkills = JobcardService.CreateJobcardSkills(jobcardSkills);
//	        			if(newjobcardSkills!=null)
//	        			{
//	        					ResponseType response = new ResponseType(201, MessageUtil.jobcardSkills_CREATED, true, newjobcardSkills);
//	        
//						return response;
//	        			}
//	        			else
//	        			{
//	        				ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.BAD_REQUEST, false, null);
//	        				return response;	
//	        			}
//	        	
//		}
//		
//	
//	
//	//Duties
//
//		
//		@PreAuthorize("hasAnyAuthority('add_jobcardDuties')")
//		@PostMapping("/add-jobcardDuties")
//		
//		public ResponseType AddjobcardDuties(@Valid @RequestBody TacJobcardDuties jobcardDuties)
//		{
//	    	System.out.println("add jobcardDuties");
//	        TacJobcardDuties newjobcardDuties = null;
//	               	
//	        		newjobcardDuties = JobcardService.createJobcardDuties(jobcardDuties);
//	        			if(newjobcardDuties!=null)
//	        			{
//	        					ResponseType response = new ResponseType(201, MessageUtil.jobcardDuties_CREATED, true, newjobcardDuties);
//	        
//						return response;
//	        			}
//	        			else
//	        			{
//	        				ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.BAD_REQUEST, false, null);
//	        				return response;	
//	        			}
//	        	
//		}
//		
//	
//	
//	//List
//	
//	//Job card
//	
//	@PreAuthorize("hasAnyAuthority('search_JobCard')")
//	@PostMapping("/search-JobCard")
//	public ResponseType searchJobcard(@RequestBody TacJobcard jobcard)
//	{
//
//		List<TacJobcard> jobcardList=null;
//		if (jobcard.getJOB()=null)
//		{
//			jobcardList=JobcardService.searchJobcard(jobcard);
//			if(jobcardList!=null && !jobcardList.isEmpty())
//			{
//				ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true, jobcardList);
//				return response;
//			}
//			else
//			{
//				ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.NO_DATA_FOUND, false, null);
//				return response;
//			}
//		}
//
//		ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.BAD_REQUEST, false, null);
//		return response;
//		
//	}
//		
//		//duties
//		
//		@PreAuthorize("hasAnyAuthority('List_jobcardDuties')")
//		@PostMapping("/List-jobcardDuties")
//		public ResponseType listJobcardDuties(@RequestBody TacJobcardDuties jobcardDuties)
//		{
//
//			List<TacJobcardDuties> jobcardDutiesList=null;
//			if (jobcardDuties.getDUTY_DESCRIPTION()=null)
//			{
//				jobcardDutiesList=JobcardService.searchJobcardDuties(jobcardDuties);
//				if(jobcardDutiesList!=null && !jobcardDutiesList.isEmpty())
//				{
//					ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true, jobcardDutiesList);
//					return response;
//				}
//				else
//				{
//					ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.NO_DATA_FOUND, false, null);
//					return response;
//				}
//			}
//
//			ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.BAD_REQUEST, false, null);
//			return response;
//		}
//			
//			//conditions
//			
//			@PreAuthorize("hasAnyAuthority('List_JobcardConditions')")
//			@PostMapping("/search-JobcardConditions")
//			public ResponseType listJobcardSkills(@RequestBody TacJobcardConditions jobcardConditions)
//			{
//
//				List<TacJobcardConditions> jobcardConditionsList=null;
//				if (jobcardConditions.getJOB_CONDITIONS()=null)
//				{
//					jobcardConditionsList=JobcardService.searchJobcardConditions(jobcardConditions);
//					if(jobcardConditionsList!=null && !jobcardConditionsList.isEmpty())
//					{
//						ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true, jobcardConditionsList);
//						return response;
//					}
//					else
//					{
//						ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.NO_DATA_FOUND, false, null);
//						return response;
//					}
//				}
//
//				ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.BAD_REQUEST, false, null);
//				return response;
//			}
//			
//			
//			
//			
//			
//		
//		//sKILLS
//			
//			
//			@PreAuthorize("hasAnyAuthority('List_jobcardSkills')")
//			@PostMapping("/search-jobcardSkills")
//			public ResponseType listJobcardSkills(@RequestBody TacJobcardSkills jobcardSkills)
//			{
//
//				List<TacJobcardSkills> jobcardSkillsList=null;
//				if (jobcardSkills.getJOB_SKILLS()=null)
//				{
//					jobcardSkillsList=JobcardService.searchJobcardSkills(jobcardSkills);
//					if(jobcardSkillsList!=null && !jobcardSkillsList.isEmpty())
//					{
//						ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true, jobcardSkillsList);
//						return response;
//					}
//					else
//					{
//						ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.NO_DATA_FOUND, false, null);
//						return response;
//					}
//				}
//
//				ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.BAD_REQUEST, false, null);
//				return response;
//			}
//		
//	}
//	
//	
//	// Remove
//
////conditions
//
//
//
//@PreAuthorize("hasAnyAuthority('remove_jobcardConditions')")
//@PostMapping("/remove-jobcardConditions")
//public ResponseType removeJobcardConditions(@RequestBody TacJobcardConditions jobcardConditions)
//{
//	System.out.println("Remove Condition");
//	//   List<TacCourseInstructor> instructorList = null;
//	if(jobcardConditions==null || jobcardConditions.getJOB_CONDITIONS()==null)
//	{
//		ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.JOBCARD_CONDITION_DELETED_FAILED, false, null);
//		return response;
//	}
//	if (jobcardConditions.getJOBCARD_NO() != new BigDecimal(0))
//	{
//		JobcardService.deleteJobcardConditions(jobcardConditions);
//		ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.JOBCARD_CONDITION_DELETED, true, null);
//		return response;
//	}
//	ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.BAD_REQUEST, false, null);
//	return response;
//}
//
////skills
//
//@PreAuthorize("hasAnyAuthority('remove_jobcardSkills')")
//@PostMapping("/remove-jobcardSkills")
//public ResponseType removejobcardSkills(@RequestBody TacJobcardSkills jobcardSkills)
//{
//	System.out.println("Remove skills");
//	//   List<TacCourseInstructor> instructorList = null;
//	if(jobcardSkills==null || jobcardSkills.getJOB_SKILLS()==null)
//	{
//		ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.JOBCARD_SKILLS_DELETED_FAILED, false, null);
//		return response;
//	}
//	if (jobcardSkills.getJOBCARD_NO() != new BigDecimal(0))
//	{
//		JobcardService.deleteJobcardSkills(jobcardSkills);
//		ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.JOBCARD_SKILLS_DELETED, true, null);
//		return response;
//	}
//	ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.BAD_REQUEST, false, null);
//	return response;
//}
//
//
////duties
//
//@PreAuthorize("hasAnyAuthority('remove_jobcardDuties')")
//@PostMapping("/remove-jobcardDuties")
//public ResponseType removejobcardDuties(@RequestBody TacJobcardDuties jobcardDuties)
//{
//	System.out.println("Remove DUTIES");
//	//   List<TacCourseInstructor> instructorList = null;
//	if(jobcardDuties==null || jobcardDuties.getDUTY_DESCRIPTION()==null)
//	{
//		ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.JOBCARD_DUTIES_DELETED_FAILED, false, null);
//		return response;
//	}
//	if (jobcardDuties.getJOBCARD_NO() != new BigDecimal(0))
//	{
//		JobcardService.deleteJobcardDuties(jobcardDuties);
//		ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.JOBCARD_DUTIES_DELETED, true, null);
//		return response;
//	}
//	ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.BAD_REQUEST, false, null);
//	return response;
//}
//
//
//
//	
//	
//	
//	
	
	

