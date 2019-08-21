package qa.gov.customs.employee.service;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import qa.gov.customs.employee.entity.MawaredMaster;
import qa.gov.customs.employee.models.Department;
import qa.gov.customs.employee.models.ImmediateManager;
import qa.gov.customs.employee.utils.models.MawaredGrades;
import qa.gov.customs.employee.utils.models.MawaredJobs;
import qa.gov.customs.employee.utils.models.mawaredJobFamily;
import qa.gov.customs.employee.utils.models.mawaredOrgDetails;

import java.util.List;

public interface MawaredService {

    List<MawaredMaster> findByLegacyCode(String jobCode);
    List<MawaredMaster> findByEmail(String email);
    List<MawaredJobs> listJobs();
    List<MawaredGrades> listGrades();
    List<mawaredJobFamily> listJobFamily();
    List<mawaredOrgDetails> listOrgDetails();
    List<ImmediateManager> getImmediateManager(String jobId);
    List<Department> getDepartments(String jobId);
    List<ImmediateManager> getDepartmentManager(String departmentId,String jobFamilyShort);

    
}
