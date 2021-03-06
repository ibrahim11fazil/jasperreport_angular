package qa.gov.customs.training.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.training.entity.TacJobcard;
import qa.gov.customs.training.service.JobcardService;
import qa.gov.customs.training.utils.Constants;
import qa.gov.customs.training.utils.MessageUtil;
import qa.gov.customs.training.utils.models.ResponseType;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.util.List;


@RestController

public class JobCardController {
    @Autowired
    JobcardService jobcardService;

    @PreAuthorize("hasAnyAuthority('jc')")
    @PostMapping("/create-job-card")
    public ResponseType createJobCard(@Valid @RequestBody TacJobcard jobcard) {
        TacJobcard newJobcard = null;
        ResponseType response = null;

        if (jobcard != null) {
            newJobcard = jobcardService.createJobcard(jobcard);
            if (newJobcard != null) {
                response = new ResponseType(201, MessageUtil.JOBCARD_CREATED, true, newJobcard);
            } else {
                response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.DATA_ALREADY_EXISTS, false, null);
            }
        }
        return response;
    }

    @PreAuthorize("hasAnyAuthority('jl')")
    @PostMapping("/list-job-card")
    public ResponseType listJobcards() {
        List<TacJobcard> jobcardList = null;
        jobcardList = jobcardService.listJobcards();
        if (jobcardList != null) {
            ResponseType response = new ResponseType(Constants.SUCCESS, "", true, jobcardList);
            return response;
        } else {
            ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, "", false, null);
            return response;
        }
    }

    @PreAuthorize("hasAnyAuthority('jl')")
    @PostMapping("/list-job-card-by-job")
    public ResponseType listJobCards(@RequestBody TacJobcard jobcard) {
        List<TacJobcard> jobcardList = null;

        jobcardList = jobcardService.listJobcards(jobcard, jobcard.getStart(), jobcard.getLimit());

        if (jobcardList != null) {
            ResponseType response = new ResponseType(Constants.SUCCESS, "", true, jobcardList);
            return response;
        } else {
            ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, "", false, null);
            return response;
        }
    }

    @PreAuthorize("hasAnyAuthority('jgi')")
    @PostMapping("/get-job-card-byid")
    public ResponseType getJobCardById(@RequestBody TacJobcard jobcard) {
        TacJobcard jobcardList = null;
        jobcardList = jobcardService.findByJobcards(new BigDecimal(jobcard.getJob()));
        if (jobcardList != null) {
            ResponseType response = new ResponseType(Constants.SUCCESS, "", true, jobcardList);
            return response;
        } else {
            ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, "", false, null);
            return response;
        }
    }


}
//Add
//	
//	// Conditions

//	@PreAuthorize("hasAnyAuthority('jac')")
//	@PostMapping("/add-jobcardConditions")
//	public ResponseType AddjobcardConditions(@Valid @RequestBody TacJobcardConditions jobcardConditions)
//	{
//    	logger.info("add jobcardConditions");
//        TacJobcardConditions newjobcardConditions = null;
//        ResponseType response=null;
//        
//        if(jobcardConditions!=null)
//        {
//        		newjobcardConditions = jobcardService.createJobcardConditions(jobcardConditions);
//        			if(newjobcardConditions!=null)
//        			{
//        					 response = new ResponseType(201, MessageUtil.JOBCARDCONDITIONS_CREATED, true, newjobcardConditions);
//        
//
//        			}
//        			else
//        			{
//        				 response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.BAD_REQUEST, false, null);
//	
//        			}
//        }
//		else
//		{
//			 response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.BAD_REQUEST, false, null);
//
//		}
//    
//
//		return response;
//		
//		
//	}
//	
//	//Skills
//	
//	
//		@PreAuthorize("hasAnyAuthority('jas')")
//		@PostMapping("/add-jobcardSkills")
//		
//		public ResponseType AddjobcardSkills(@Valid @RequestBody TacJobcardSkills jobcardSkills)
//		{
//	    	logger.info("add jobcardSkills");
//	        TacJobcardSkills newjobcardSkills = null;
//	               	
//	        		newjobcardSkills = JobcardService.CreateJobcardSkills(jobcardSkills);
//	        			if(newjobcardSkills!=null)
//	        			{
//	        					ResponseType response = new ResponseType(201, MessageUtil.JOBCARDSKILLS_CREATED, true, newjobcardSkills);
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
//		@PreAuthorize("hasAnyAuthority('jad')")
//		@PostMapping("/add-jobcardDuties")
//		
//		public ResponseType AddjobcardDuties(@Valid @RequestBody TacJobcardDuties jobcardDuties)
//		{
//	    	logger.info("add jobcardDuties");
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
//
//		//duties
//		
//		@PreAuthorize("hasAnyAuthority('jld')")
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
//			@PreAuthorize("hasAnyAuthority('jlc')")
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
//			@PreAuthorize("hasAnyAuthority('jls')")
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
//@PreAuthorize("hasAnyAuthority('jrc')")
//@PostMapping("/remove-jobcardConditions")
//public ResponseType removeJobcardConditions(@RequestBody TacJobcardConditions jobcardConditions)
//{
//	logger.info("Remove Condition");
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
//@PreAuthorize("hasAnyAuthority('jrs')")
//@PostMapping("/remove-jobcardSkills")
//public ResponseType removejobcardSkills(@RequestBody TacJobcardSkills jobcardSkills)
//{
//	logger.info("Remove skills");
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
//@PreAuthorize("hasAnyAuthority('jrd')")
//@PostMapping("/remove-jobcardDuties")
//public ResponseType removejobcardDuties(@RequestBody TacJobcardDuties jobcardDuties)
//{
//	logger.info("Remove DUTIES");
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

	
	

