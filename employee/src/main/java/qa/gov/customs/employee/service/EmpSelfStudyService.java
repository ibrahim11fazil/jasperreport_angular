package qa.gov.customs.employee.service;

import java.util.List;

import qa.gov.customs.employee.entity.EmpSelfstudyMaster;
import qa.gov.customs.employee.entity.EmpUniverstity;
import qa.gov.customs.employee.models.empSelfStudyRecord;
import qa.gov.customs.employee.entity.EmpEducationLevel;
import qa.gov.customs.employee.entity.EmpMajor;

public interface EmpSelfStudyService 
{ 
    List<empSelfStudyRecord>listAllEmpSelfStudyRecords();

    List<EmpSelfstudyMaster>createSelfstudy(EmpSelfstudyMaster empSelfstudy);
    

}
