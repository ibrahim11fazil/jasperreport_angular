package qa.gov.customs.employee.service;

import java.util.List;

import qa.gov.customs.employee.entity.EmpExternalStudyMaster;
import qa.gov.customs.employee.entity.EmpSelfstudyMaster;
import qa.gov.customs.employee.models.empExternalStudyRecord;
import qa.gov.customs.employee.models.empSelfStudyRecord;

public interface EmpExternalStudyService {

    List<empExternalStudyRecord>listAllEmpExternalStudyRecords();

    List<EmpExternalStudyMaster>createExternalStudy(EmpExternalStudyMaster empExternalStudy);
	
}
