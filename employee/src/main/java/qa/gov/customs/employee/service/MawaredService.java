package qa.gov.customs.employee.service;

import qa.gov.customs.employee.entity.MawaredMaster;
import qa.gov.customs.employee.models.Department;
import qa.gov.customs.employee.models.EmployeeUnderSupervisor;
import qa.gov.customs.employee.models.ImmediateManager;
import qa.gov.customs.employee.utils.models.MawaredGrades;
import qa.gov.customs.employee.utils.models.MawaredJobs;
import qa.gov.customs.employee.utils.models.mawaredJobFamily;
import qa.gov.customs.employee.utils.models.mawaredOrgDetails;

import java.util.Date;
import java.util.List;

public interface MawaredService {

    List<MawaredMaster> findByLegacyCode(String jobCode);

    List<MawaredMaster> findByQid(String qid);

    List<MawaredMaster> findByName(String name);

//    List<MawaredMaster> getLegacyCodeWithGrade(String jobCode);


    List<MawaredMaster> findByEmail(String email);

    List<MawaredJobs> listJobs();

    List<MawaredGrades> listGrades();

    List<mawaredJobFamily> listJobFamily();

    List<mawaredOrgDetails> listOrgDetails();

    List<ImmediateManager> getImmediateManager(String jobId);

    List<Department> getDepartments(String jobId);

    List<ImmediateManager> getDepartmentManager(String departmentId, String jobFamilyShort);

    Boolean findByQidInDateIn(String qid, Date date);

    Boolean findByQidInDateInBetween(String qid, Date startDate, Date endDate);

    List<EmployeeUnderSupervisor> employeesUnderSupervisor(String id);

    int getCountOfHead(String jobId);

}
