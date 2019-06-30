package qa.gov.customs.training.controller;

import java.math.BigDecimal;

import javax.validation.Valid;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import qa.gov.customs.training.entity.TacActivity;
import qa.gov.customs.training.entity.TacJobcard;
import qa.gov.customs.training.service.JobcardService;
import qa.gov.customs.utils.Constants;
import qa.gov.customs.utils.MessageUtil;
import qa.gov.customs.utils.models.ResponseType;

public class JobCardController
{
	
	@PreAuthorize("hasAnyAuthority('create_jobcard')")
	@PostMapping("/create-jobCard")
	
	public ResponseType createJobCard(@Valid @RequestBody TacJobcard jobcard)
	{
    	System.out.println("create jobcard");
        TacJobcard newJobcard = null;
        if(TacJobcard.getJOBCARD_NO()!=new BigDecimal(0))
        {
        	ResponseType searchResponse=search(jobcard);
        	if(searchResponse.getData()==null)
        	{        	
        		newJobcard = JobcardService.createJobcard(jobcard);
        			if(createJobcard!=null)
        			{
        					ResponseType response = new ResponseType(201, MessageUtil.JOBCARD_CREATED, true, createJobcard);
        
					return response;
        			}
        			else
        			{
        				ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.BAD_REQUEST, false, null);
        				return response;	
        			}
        	}
        }
        
        	ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.BAD_REQUEST, false, null);
            return response;
	}
}
