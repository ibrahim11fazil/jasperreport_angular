package qa.gov.customs.employee.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qa.gov.customs.employee.entity.MawaredMaster;
import qa.gov.customs.employee.repository.MawaredRepository;
import qa.gov.customs.employee.service.MawaredService;
import qa.gov.customs.employee.utils.models.MawaredGrades;
import qa.gov.customs.employee.utils.models.MawaredJobs;
import qa.gov.customs.employee.utils.models.mawaredJobFamily;

import java.util.ArrayList;
import java.util.List;

@Service
public class MawaredServiceImpl implements MawaredService {

    @Autowired
    MawaredRepository mawaredRepository;

    @Override
    public List<MawaredMaster> findByLegacyCode(String jobCode) {
        return mawaredRepository.findByLegacyCode(jobCode);
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
//			//System.out.println(activationRepo.findAll());
//			List<MawaredMaster> pages = mawaredRepository.listFullJobs();
//			pages.forEach(item ->jobs.add(item));
//			return jobs;
//	}
    
    
    public List<MawaredJobs> listJobs()
    
    {
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

    public List<MawaredGrades> listGrades()
    
    {
		List<Object[]> objects = mawaredRepository.listFullGrades();
		List<MawaredGrades> grades = new ArrayList<>();
		for (Object[] o : objects) {
			MawaredGrades grade = new MawaredGrades();
			grade.setPsLevel((String) o[0]);
			grades.add(grade);
		}
		return grades;
	}
    
    public List<mawaredJobFamily> listJobFamily()
    
    {
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
    
    

}
