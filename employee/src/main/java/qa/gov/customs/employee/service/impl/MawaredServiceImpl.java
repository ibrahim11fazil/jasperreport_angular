package qa.gov.customs.employee.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qa.gov.customs.employee.entity.MawaredMaster;
import qa.gov.customs.employee.entity.MawaredUserAbsent;
import qa.gov.customs.employee.models.Department;
import qa.gov.customs.employee.models.EmployeeUnderSupervisor;
import qa.gov.customs.employee.models.ImmediateManager;
import qa.gov.customs.employee.repository.MawaredAbsentRepository;
import qa.gov.customs.employee.repository.MawaredRepository;
import qa.gov.customs.employee.service.MawaredService;
import qa.gov.customs.employee.utils.models.MawaredGrades;
import qa.gov.customs.employee.utils.models.MawaredJobs;
import qa.gov.customs.employee.utils.models.mawaredJobFamily;
import qa.gov.customs.employee.utils.models.mawaredOrgDetails;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class MawaredServiceImpl implements MawaredService {

    @Autowired
    MawaredRepository mawaredRepository;

    @Autowired
    MawaredAbsentRepository mawaredAbsentRepository;

    @Override
    public List<MawaredMaster> findByLegacyCode(String jobCode) {
        List<MawaredMaster> masterDetails=mawaredRepository.findByLegacyCode(jobCode);

        List<Object[]> objects=mawaredRepository.LegacyCodeWithGradeDate(jobCode);
        for(Object[] obj:objects)
        {
            for(MawaredMaster master:masterDetails)
            {
                if(master.getLEGACYCODE().equalsIgnoreCase((String)obj[2]))
                {
                master.setCurrentGradeDate((Date)obj[0]);
                master.setNextGradeDate((Date)obj[1]);
                }
            }

        }


        return masterDetails;
    }

    @Override
    public List<MawaredMaster> findByQid(String qid) {
        return mawaredRepository.findByQid(qid);
    }

    @Override
    public List<MawaredMaster> findByName(String name) {
        return mawaredRepository.findByNameIn(name);
    }

    @Override
    public List<MawaredMaster> findByEmail(String email) {
        return mawaredRepository.findByEmail(email);
    }

//    @Override
//    public List<MawaredMaster> listJobs() {
//        return mawaredRepository.listFullJobs();
//    }


//    public List<MawaredMaster> listJobs()
//	{
//		//List<MawaredMaster>jobList=null;
//		List<MawaredMaster> jobs =  new ArrayList<>();
//			//logger.info(activationRepo.findAll());
//			List<MawaredMaster> pages = mawaredRepository.listFullJobs();
//			pages.forEach(item ->jobs.add(item));
//			return jobs;
//	}


    public List<MawaredJobs> listJobs() {
        List<Object[]> objects = mawaredRepository.listFullJobs();
        List<MawaredJobs> jobs = new ArrayList<>();
        for (Object[] o : objects) {
            MawaredJobs job = new MawaredJobs();
            job.setJob((String) o[0]);
            job.setJobDescAr((String) o[1]);
            job.setJobDesc((String) o[2]);
            jobs.add(job);
        }
        return jobs;
    }

    public List<MawaredGrades> listGrades() {
        List<Object[]> objects = mawaredRepository.listFullGrades();
        List<MawaredGrades> grades = new ArrayList<>();
        for (Object[] o : objects) {
            MawaredGrades grade = new MawaredGrades();
            grade.setPsLevel((String) o[0]);
            grades.add(grade);
        }
        return grades;
    }

    public List<mawaredJobFamily> listJobFamily() {
        List<Object[]> objects = mawaredRepository.listFullJobFamily();
        List<mawaredJobFamily> jobFamilies = new ArrayList<>();
        for (Object[] o : objects) {
            mawaredJobFamily jobFamily = new mawaredJobFamily();
            jobFamily.setJobFamily((String) o[0]);
            jobFamily.setJobFamilyShort((String) o[1]);
            jobFamily.setJobFamilyText((String) o[2]);
            jobFamilies.add(jobFamily);
        }
        return jobFamilies;
    }


    public List<mawaredOrgDetails> listOrgDetails() {
        List<Object[]> objects = mawaredRepository.listFunctionalArea();
        List<mawaredOrgDetails> fAreas = new ArrayList<>();
        for (Object[] o : objects) {
            mawaredOrgDetails fArea = new mawaredOrgDetails();
            fArea.setOtype((String) o[0]);
            fArea.setObjid((String) o[1]);
            fArea.setObjectText((String) o[2]);
            fArea.setLang((String) o[3]);
            fAreas.add(fArea);
        }
        return fAreas;
    }

    @Override
    public List<ImmediateManager> getImmediateManager(String jobId) {
        List<Object[]> objects = mawaredRepository.getImmediateManager(jobId);
        return processManagers(objects);
    }

    @Override
    public List<Department> getDepartments(String jobId) {
        List<Object[]> objects = mawaredRepository.listAllDepartments();
        List<Department> fAreas = new ArrayList<>();
        for (Object[] o : objects) {
            Department fArea = new Department();
            fArea.setOrgunit((String) o[0]);
            fArea.setOrgunitDescAr((String) o[1]);
            fArea.setOrgunitDesc((String) o[2]);
            fAreas.add(fArea);
        }
        return fAreas;
    }

    @Override
    public List<ImmediateManager> getDepartmentManager(String departmentId, String jobFamilyShort) {
        List<Object[]> objects = mawaredRepository.getDepartmentHead(departmentId, jobFamilyShort);
        return processManagers(objects);
    }


    List<ImmediateManager> processManagers(List<Object[]> objects) {
        List<ImmediateManager> fAreas = new ArrayList<>();
        for (Object[] o : objects) {
            ImmediateManager fArea = new ImmediateManager();
            fArea.setEmpNo((String) o[0]);
            fArea.setfNameEn((String) o[1]);
            fArea.setlNameEn((String) o[2]);
            fArea.setJobFamilyText((String) o[3]);
            fArea.setJobFamily((String) o[4]);
            fArea.setJobFamilyShort((String) o[5]);
            fArea.setImEmpNo((String) o[6]);
            fArea.setImFnameEn((String) o[7]);
            fArea.setImLnameEn((String) o[8]);
            fArea.setImLegacyCode((String) o[9]);
            fArea.setImCnameAr((String) o[10]);
            fArea.setcNameAr((String) o[11]);
            fArea.setLegacyCode((String) o[12]);
            fAreas.add(fArea);
        }
        return fAreas;
    }


    @Override
    public Boolean findByQidInDateIn(String qid, Date date) {
        Boolean status = false;
        List<MawaredUserAbsent> absentRepositories = mawaredAbsentRepository.findAllByQidEquals(qid);
        for (MawaredUserAbsent absent : absentRepositories) {
            if (date.after(absent.getStartDate()) && date.before(absent.getEndDate())) {
                status = true;
            }
        }
        return status;
    }

    @Override
    public Boolean findByQidInDateInBetween(String qid, Date startDate, Date endDate) {
        Boolean status = false;
        List<MawaredUserAbsent> absentRepositories = mawaredAbsentRepository.findAllByQidEquals(qid);
        for (MawaredUserAbsent absent : absentRepositories) {
            if ((startDate.before(absent.getStartDate()) &&
                    endDate.before(absent.getStartDate())) ||
                    (startDate.after(absent.getEndDate()) &&
                            endDate.after(absent.getEndDate()))
            ) {
                status = true;
            }
        }
        return status;
    }

    @Override
    public List<EmployeeUnderSupervisor> employeesUnderSupervisor(String id) {
        List<Object[]> employeeObjects = mawaredRepository.employeesUnderSupervisor(id);
        if (employeeObjects != null && employeeObjects.size() > 0) {
            return processEmployeesUnderSupervisor(employeeObjects);
        } else
            return null;
    }

    List<EmployeeUnderSupervisor> processEmployeesUnderSupervisor(List<Object[]> objects) {
        List<EmployeeUnderSupervisor> fAreas = new ArrayList<>();
        for (Object[] o : objects) {
            EmployeeUnderSupervisor fArea = new EmployeeUnderSupervisor();
            fArea.setEmpNo((String) o[0]);
            fArea.setLegacyCode((String) o[1]);
            fArea.setcNameAr((String) o[2]);
            fArea.setQid((String) o[3]);
            fArea.setPositionAr((String) o[4]);
            fArea.setQualification((String) o[5]);
            fArea.setGrade((String) o[6]);
            fAreas.add(fArea);
        }
        return fAreas;
    }

    @Override
    public int getCountOfHead(String jobId) {
        int num = mawaredRepository.getCountOfHead(jobId);
        if (num > 0) {
            return num;
        } else
            return 0;

    }

}
