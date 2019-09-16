package qa.gov.customs.employee.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import qa.gov.customs.employee.entity.EmpExternalStudyMaster;
import qa.gov.customs.employee.models.empExternalStudyRecord;
import qa.gov.customs.employee.service.EmpExternalStudyService;
import qa.gov.customs.employee.utils.Constants;
import qa.gov.customs.employee.utils.MessageUtil;
import qa.gov.customs.employee.utils.models.ResponseType;

public class EmpExternalStudyController {
	@Autowired
	  EmpExternalStudyService empExternalStudyService;
		MessageUtil messageUtil;
	@GetMapping("/list-ExternalStudyRecords")
	public ResponseType listExternalStudyRecords() 
	{
		List<empExternalStudyRecord> empExternalStudyList = null;
		empExternalStudyList = empExternalStudyService.listAllEmpExternalStudyRecords();
		if(empExternalStudyList!=null)
		{
			ResponseType response = new ResponseType(Constants.SUCCESS, "", true, empExternalStudyList);
			return response;
		}
		else
		{
			ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, "", false, null);
			return response;
		}
	}
	
	
	    @PreAuthorize("hasAnyAuthority('create_ExternalStudy')")
	    @PostMapping("/create-External-study")
	    public ResponseType createExternalStudy(@Valid @RequestBody EmpExternalStudyMaster empExternalStudy) {
	    	List<EmpExternalStudyMaster> newExternalStudy = null;
	        ResponseType response = null;
	        if (empExternalStudy != null) {
	        	newExternalStudy = empExternalStudyService.createExternalStudy(empExternalStudy);
	            if (newExternalStudy != null) {
	                response = new ResponseType(201, messageUtil.ExternalStudy_CREATED, true, newExternalStudy);
	            } else {
	                response = new ResponseType(Constants.BAD_REQUEST, messageUtil.BAD_REQUEST, false, null);
	            }
	        }
	        return response;
	    }
	    

}
