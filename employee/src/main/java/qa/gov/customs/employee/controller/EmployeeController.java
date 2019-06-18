package qa.gov.customs.employee.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.employee.entity.EmpEmployeeMaster;

@RestController
public class EmployeeController {

    @PreAuthorize("hasAnyAuthority('get_employee_by_jobid')")
    @PostMapping("/get-employee-by-jobid")
    public EmpEmployeeMaster getEmployeeById(EmpEmployeeMaster employeInput){
        EmpEmployeeMaster employee=  new EmpEmployeeMaster();
        employee.setEmail("srajqtr@gmail.com");
        employee.setJobId("4077");
        employee.getActiveFlag();
       return employee;
    }


    @PreAuthorize("hasAnyAuthority('get_my_profile')")
    @PostMapping("/get-my-profile")
    public EmpEmployeeMaster get_my_profile(EmpEmployeeMaster employeInput){
        EmpEmployeeMaster employee=  new EmpEmployeeMaster();
        employee.setEmail("srajqtr@gmail.com");
        employee.setJobId("4077");
        employee.getActiveFlag();
        return employee;
    }




}
