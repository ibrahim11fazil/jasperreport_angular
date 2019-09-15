package qa.gov.customs.employee.service;

import java.util.List;

import qa.gov.customs.employee.entity.EmpEducationLevel;
import qa.gov.customs.employee.entity.EmpMajor;
import qa.gov.customs.employee.entity.EmpUniverstity;

public interface EmployeeService {
	
    List<EmpUniverstity>findAlluniversity();
    
    List<EmpMajor>findAllMajor();
    
    List<EmpEducationLevel>findAllEducatiuonLevel();
}
