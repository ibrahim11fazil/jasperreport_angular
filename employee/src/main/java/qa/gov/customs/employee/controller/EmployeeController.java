package qa.gov.customs.employee.controller;

import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.employee.entity.EmpEmployeeMaster;

@RestController
public class EmployeeController {

    public EmpEmployeeMaster getEmployeeById(String jobId){
        EmpEmployeeMaster employee=  new EmpEmployeeMaster();
        employee.setEmail("srajqtr@gmail.com");
        employee.setJobId("4077");
        employee.getActiveFlag(1);
        employee.
    }

}
