package qa.gov.customs.employee.controller;

import java.util.List;

import javax.validation.Valid;

//import org.aspectj.bridge.MessageUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import qa.gov.customs.employee.entity.EmpSelfstudyMaster;
import qa.gov.customs.employee.entity.EmpUniverstity;
import qa.gov.customs.employee.models.empSelfStudyRecord;
import qa.gov.customs.employee.service.EmpSelfStudyService;
import qa.gov.customs.employee.utils.Constants;
import qa.gov.customs.employee.utils.MessageUtil;
import qa.gov.customs.employee.utils.models.ResponseType;


public class EmpSelfstudyController {

	@Autowired
	  EmpSelfStudyService empSelfStudyService;
		MessageUtil messageUtil;
	@GetMapping("/list-selfstudyRecords")
	public ResponseType listJobs() 
	{
		List<empSelfStudyRecord> empSelfStudyList = null;
		empSelfStudyList = empSelfStudyService.listAllEmpSelfStudyRecords();
		if(empSelfStudyList!=null)
		{
			ResponseType response = new ResponseType(Constants.SUCCESS, "", true, empSelfStudyList);
			return response;
		}
		else
		{
			ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, "", false, null);
			return response;
		}
	}
	
	
	    @PreAuthorize("hasAnyAuthority('create_selfstudy')")
	    @PostMapping("/create-self-study")
	    public ResponseType createSelfstudy(@Valid @RequestBody EmpSelfstudyMaster empSelfstudy) {
	    	List<EmpSelfstudyMaster> newSelfstudy = null;
	        ResponseType response = null;
	        if (empSelfstudy != null) {
	        	newSelfstudy = empSelfStudyService.createSelfstudy(empSelfstudy);
	            if (newSelfstudy != null) {
	                response = new ResponseType(201, messageUtil.SELFSTUDY_CREATED, true, newSelfstudy);
	            } else {
	                response = new ResponseType(Constants.BAD_REQUEST, messageUtil.BAD_REQUEST, false, null);
	            }
	        }
	        return response;
	    }
	    
	
	
	
}
