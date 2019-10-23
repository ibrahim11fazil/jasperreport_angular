package qa.gov.customs.workflowcamuda.service;



import qa.gov.customs.workflowcamuda.entity.MawaredMaster;
import qa.gov.customs.workflowcamuda.model.*;

import java.util.Date;
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

    List<ImmediateManager> getDepartmentManager(String departmentId, String jobFamilyShort);

    Boolean findByQidInDateIn(String qid, Date date);

    Boolean findByQidInDateInBetween(String qid, Date startDate, Date endDate);

    List<EmployeeUnderSupervisor> employeesUnderSupervisor(String id);

    int getCountOfHead(String jobId);

}
