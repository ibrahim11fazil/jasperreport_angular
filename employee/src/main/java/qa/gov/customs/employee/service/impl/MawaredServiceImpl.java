package qa.gov.customs.employee.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qa.gov.customs.employee.entity.MawaredMaster;
import qa.gov.customs.employee.repository.MawaredRepository;
import qa.gov.customs.employee.service.MawaredService;
import qa.gov.customs.employee.utils.models.MawaredJobs;


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

    
}
