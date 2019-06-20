package qa.gov.customs.employee.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import qa.gov.customs.employee.entity.*;
import qa.gov.customs.utils.Constants;
import qa.gov.customs.utils.MessageUtil;
import qa.gov.customs.utils.models.ResponseType;

@RestController
public class EmployeeController {

    private static final Logger logger = LoggerFactory.getLogger(EmployeeController.class);


    @PreAuthorize("hasAnyAuthority('get_employee_by_jobid')")
    @PostMapping("/get-employee-by-jobid")
    public EmpEmployeeMaster getEmployeeById(@RequestBody EmpEmployeeMaster employeInput){
        EmpEmployeeMaster employee=  new EmpEmployeeMaster();
        employee.setEmail("srajqtr@gmail.com");
        employee.setJobId("4077");
        employee.getActiveFlag();
       return employee;
    }


    @PreAuthorize("hasAnyAuthority('get_my_profile')")
    @PostMapping("/get-my-profile")
    public EmpEmployeeMaster get_my_profile(@RequestBody EmpEmployeeMaster employeInput){
        EmpEmployeeMaster employee=  new EmpEmployeeMaster();
        employee.setEmail("srajqtr@gmail.com");
        employee.setJobId("4077");
        employee.getActiveFlag();
        return employee;
    }

    @GetMapping("/get-employee-by-jobid/:id")
    public EmpEmployeeMaster getEmployeeById1(@Param("id") String id){
        EmpEmployeeMaster employee=  new EmpEmployeeMaster();
        employee.setEmail("srajqtr@gmail.com");
        employee.setJobId("4077");
        employee.setCnameAr(id);
        employee.getActiveFlag();
        return employee;
    }

    @PreAuthorize("hasAnyAuthority('get_employee_by_jobid')")
    @PostMapping("/get-employee-by-jobid1/{id}")
    public ResponseType getEmployeeById2(@PathVariable("id") String id){
        logger.info("Recieved ### " + id);
        //TODO here to update the service layer
        EmpModel employee=  new EmpModel();
        employee.setEmail("srajqtr@gmail.com");
        employee.setJobId("4077");
        employee.setQid("1231231312121123");
        employee.setCnameAr(id);
        employee.getActiveFlag();



        ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SYSTEM_USER_CREATED, true,
                employee);
        return response;
    }



}
