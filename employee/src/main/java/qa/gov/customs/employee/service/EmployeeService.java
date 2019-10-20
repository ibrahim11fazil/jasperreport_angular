package qa.gov.customs.employee.service;

import qa.gov.customs.employee.entity.EmpEducationLevel;
import qa.gov.customs.employee.entity.EmpMajor;
import qa.gov.customs.employee.entity.EmpUniverstity;

import java.util.List;

public interface EmployeeService {

    List<EmpUniverstity> findAlluniversity();

    List<EmpMajor> findAllMajor();

    List<EmpEducationLevel> findAllEducatiuonLevel();
}
