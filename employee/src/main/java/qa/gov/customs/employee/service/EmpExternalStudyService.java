package qa.gov.customs.employee.service;

import qa.gov.customs.employee.entity.EmpExternalStudyMaster;
import qa.gov.customs.employee.models.empExternalStudyRecord;

import java.util.List;

public interface EmpExternalStudyService {

    List<empExternalStudyRecord> listAllEmpExternalStudyRecords();

    List<EmpExternalStudyMaster> createExternalStudy(EmpExternalStudyMaster empExternalStudy);

}
