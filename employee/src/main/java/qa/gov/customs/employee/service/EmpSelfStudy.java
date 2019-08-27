package qa.gov.customs.employee.service;

import java.util.List;

import qa.gov.customs.employee.entity.EmpSelfstudyMaster;;

public interface EmpSelfStudy 
{
    List<EmpSelfstudyMaster> listbyEmpId (String jobCode);
    List<EmpSelfstudyMaster> listAllEmployees (String jobCode);

}
