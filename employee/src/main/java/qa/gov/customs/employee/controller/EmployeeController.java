package qa.gov.customs.employee.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import qa.gov.customs.employee.entity.*;
import qa.gov.customs.employee.models.AbsentInfo;
import qa.gov.customs.employee.models.EmployeeUnderSupervisor;
import qa.gov.customs.employee.security.CustomPrincipal;
import qa.gov.customs.employee.service.MawaredService;
import qa.gov.customs.employee.service.EmployeeService;
import qa.gov.customs.employee.utils.Constants;
import qa.gov.customs.employee.utils.MessageUtil;
import qa.gov.customs.employee.utils.models.MawaredGrades;
import qa.gov.customs.employee.utils.models.MawaredJobs;
import qa.gov.customs.employee.utils.models.ResponseType;
import qa.gov.customs.employee.utils.models.mawaredJobFamily;
import qa.gov.customs.employee.utils.models.mawaredOrgDetails;

import java.util.Date;
import java.util.List;

@RestController
public class EmployeeController {

    private static final Logger logger = LoggerFactory.getLogger(EmployeeController.class);

    @Autowired
    MawaredService mawaredService;
	private String training_token;
    EmployeeService employeeService;

//
//    @PreAuthorize("hasAnyAuthority('get_employee_by_jobid')")
//    @PostMapping("/get-employee-by-jobid")
//    public EmpEmployeeMaster getEmployeeById(@RequestBody EmpEmployeeMaster employeInput){
//        EmpEmployeeMaster employee=  new EmpEmployeeMaster();
//        employee.setEmail("srajqtr@gmail.com");
//        employee.setJobId("4077");
//        employee.getActiveFlag();
//       return employee;
//    }


//    @PreAuthorize("hasAnyAuthority('get_my_profile')")
//    @PostMapping("/get-my-profile")
//    public EmpEmployeeMaster get_my_profile(@RequestBody EmpEmployeeMaster employeInput){
//        EmpEmployeeMaster employee=  new EmpEmployeeMaster();
//        employee.setEmail("srajqtr@gmail.com");
//        employee.setJobId("4077");
//        employee.getActiveFlag();
//        return employee;
//    }

//    @GetMapping("/get-employee-by-jobid/:id")
//    public EmpEmployeeMaster getEmployeeById1(@Param("id") String id){
//        EmpEmployeeMaster employee=  new EmpEmployeeMaster();
//        employee.setEmail("srajqtr@gmail.com");
//        employee.setJobId("4077");
//        employee.setCnameAr(id);
//        employee.getActiveFlag();
//        return employee;
//    }

    @PreAuthorize("hasAnyAuthority('get_employee_by_jobid','user_details_course_request')")
    @PostMapping("/get-employee-by-jobid/{id}")
    public ResponseType getEmployeeById(@PathVariable("id") String id){
        logger.info("Recieved ### " + id);

        if(id!=null){
           List<MawaredMaster> masterData= mawaredService.findByLegacyCode(id);
           if(masterData!=null && masterData.size()>0){
               EmpModel employee=  new EmpModel();
               String email = masterData.get(0).getEMAIL()!=null  ?masterData.get(0).getEMAIL().replace( "MAILTO:",""):"";
               employee.setEmail(email);
               employee.setJobId(masterData.get(0).getLEGACYCODE());
               employee.setQid(masterData.get(0).getQID());
               employee.setCnameAr(masterData.get(0).getCNAME_AR());
               employee.setCnameEn(masterData.get(0).getCNAME_AR());
               employee.setMobile(masterData.get(0).getMOBILE()!=null?masterData.get(0).getMOBILE():"");
               employee.setDepartment(masterData.get(0).getORGUNIT_DESC_AR()!=null?masterData.get(0).getORGUNIT_DESC_AR():"");
               employee.setDepartmentId(masterData.get(0).getORGUNIT()!=null?masterData.get(0).getORGUNIT():"");
               employee.setJobTitle(masterData.get(0).getPOSITION_DESC_AR()!=null?masterData.get(0).getPOSITION_DESC_AR():"");
               employee.setIban(masterData.get(0).getBACNO()!=null?masterData.get(0).getBACNO():"");
               ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SYSTEM_USER_CREATED, true,
                       employee);
               return response;

           }else{
               ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                       null);
               return response;
           }

        }else{
            ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                    null);
            return response;
        }
    }
    
    
    //@PreAuthorize("hasAnyAuthority('List_Jobs')")
	@GetMapping("/list-jobs")
	public ResponseType listJobs() 
	{
		List<MawaredJobs> jobList = null;
		jobList = mawaredService.listJobs();
		if(jobList!=null)
		{
			ResponseType response = new ResponseType(Constants.SUCCESS, "", true, jobList);
			return response;
		}
		else
		{
			ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, "", false, null);
			return response;
		}
	}
	
		@GetMapping("/list-grades")
		public ResponseType listGrades() 
		{
			List<MawaredGrades> gradeList = null;
			gradeList = mawaredService.listGrades();
			if(gradeList!=null)
			{
				ResponseType response = new ResponseType(Constants.SUCCESS, "", true, gradeList);
				return response;
			}
			else
			{
				ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, "", false, null);
				return response;
			}
		}
		
		@GetMapping("/list-jobfamily")
		public ResponseType listJobFamily() {
			List<mawaredJobFamily> jobFamilyList = null;
			jobFamilyList = mawaredService.listJobFamily();
			if(jobFamilyList!=null)
			{
				ResponseType response = new ResponseType(Constants.SUCCESS, "", true, jobFamilyList);
				return response;
			}
			else
			{
				ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, "", false, null);
				return response;
			}
		}
	
	
		@GetMapping("/list-functional-area")
		public ResponseType listFunctionalArea() {
			List<mawaredOrgDetails> fAreaList = null;
			fAreaList = mawaredService.listOrgDetails();
			if(fAreaList!=null)
			{
				ResponseType response = new ResponseType(Constants.SUCCESS, "", true, fAreaList);
				return response;
			}
			else
			{
				ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, "", false, null);
				return response;
			}
		}

//	@PreAuthorize("hasAnyAuthority('employees_under_supervisor')")
//	@PostMapping("/employees_under_supervisor/{id}")
//	public ResponseType employeesUnderSupervisor(@PathVariable("id") String id)
//	{
//		List<EmployeeUnderSupervisor> submittedRequest  = mawaredService.employeesUnderSupervisor(id);
//		if(submittedRequest!=null)
//		{
//			ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true,
//					submittedRequest);
//			return response;
//		}
//		else {
//			ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.FAILED, false,
//					null);
//			return response;
//		}
//	}

		
	    @GetMapping("/list-university")
		public ResponseType listuniversity() {
			List<EmpUniverstity> university = null;
			university = employeeService.findAlluniversity();
			if(university!=null && university.size()>0)
			{
				ResponseType response = new ResponseType(Constants.SUCCESS, "", true, university);
				return response;
			}
			else
			{
				ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, "", false, null);
				return response;
			}
		}
	        
	    @GetMapping("/list-major")
		public ResponseType listmajor() {
			List<EmpMajor> major = null;
			major = employeeService.findAllMajor();
			if(major!=null && major.size()>0)
			{
				ResponseType response = new ResponseType(Constants.SUCCESS, "", true, major);
				return response;
			}
			else
			{
				ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, "", false, null);
				return response;
			}
		}
	    

//	@PreAuthorize("hasAnyAuthority('employees_under_supervisor')")
//	@PostMapping("/employees_under_supervisor/{id}")
//	public ResponseType employeesUnderSupervisor(@PathVariable("id") String id)
//	{
//		List<EmployeeUnderSupervisor> submittedRequest  = mawaredService.employeesUnderSupervisor(id);
//		if(submittedRequest!=null)
//		{
//			ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true,
//					submittedRequest);
//			return response;
//		}
//		else {
//			ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.FAILED, false,
//					null);
//			return response;
//		}
//	}



	@PreAuthorize("hasAnyAuthority('employees_under_supervisor')")
	@PostMapping("/employees_under_supervisor")
	public ResponseType employeesUnderSupervisor(@AuthenticationPrincipal CustomPrincipal principal) {

    	   logger.info("$$$$$$------>  "+principal.getJid());
           int cnt= mawaredService.getCountOfHead(principal.getJid());
           if (cnt>0) {
			   List<EmployeeUnderSupervisor> submittedRequest = mawaredService.employeesUnderSupervisor(principal.getJid());
			   if (submittedRequest != null && submittedRequest.size()>0) {
				   ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true,
						   submittedRequest);
				   return response;
			   } else {
				   ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.FAILED, false,
						   null);
				   return response;
			   }
		   }
           else
		   {
			   ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.NO_DATA_FOUND, false,
					   null);
			   return response;
		   }

	}


	@PreAuthorize("hasAnyAuthority('workflow_validations')")
	@PostMapping("/check-the-user-is-absent-between-dates")
	public ResponseType checkTheUserIsAbsentBetweenDates(@RequestBody AbsentInfo absentInfo){
			logger.info("Received ### request received");
			Boolean status = mawaredService.findByQidInDateInBetween(absentInfo.getQid()
					,absentInfo.getStartDate(),absentInfo.getEndDate());
			return get(Constants.SUCCESS, MessageUtil.SUCCESS, status,
					status);

	}

	ResponseType  get(int code, String message, boolean status, Object data){
		ResponseType response = new ResponseType(code,message, status,
				data);
		return response;
	}


}
