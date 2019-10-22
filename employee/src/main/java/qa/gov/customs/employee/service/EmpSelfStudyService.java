package qa.gov.customs.employee.service;

import qa.gov.customs.employee.entity.EmpSelfstudyMaster;
import qa.gov.customs.employee.models.empSelfStudyRecord;

import java.util.List;

public interface EmpSelfStudyService {
    List<empSelfStudyRecord> listAllEmpSelfStudyRecords();

    List<EmpSelfstudyMaster> createSelfstudy(EmpSelfstudyMaster empSelfstudy);


}
