package qa.gov.customs.employee.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;


import qa.gov.customs.employee.entity.EmpSelfstudyMaster;
import qa.gov.customs.employee.models.empSelfStudyRecord;
import qa.gov.customs.employee.repository.EmpSelfstudyRepository;





public class EmpSelfstudyImpl {

	//  List<EmpSelfstudyMaster> listAllEmpSelfStudyRecords (String jobCode);
	
	@Autowired
	EmpSelfstudyRepository empSelfstudyRepository;
	

	
	  
	public List<empSelfStudyRecord> listAllEmpSelfStudyRecords()
	{
		List<empSelfStudyRecord> selfstudyRecord = new ArrayList<>();
		empSelfstudyRepository.listAllSelfstudy().forEach(item -> selfstudyRecord.add(item));
		 return selfstudyRecord;
	}
	
	
	
    
	
	
	@Transactional
	public EmpSelfstudyMaster createSelfstudy(EmpSelfstudyMaster empSelfstudy)
	{
	

			if(empSelfstudy.getSrlNo()==null || empSelfstudy.getSrlNo().equals(new BigDecimal("0")))
			{
				EmpSelfstudyMaster empSelfstudyUpdated=empSelfstudyRepository.save(empSelfstudy);
				return empSelfstudyUpdated;
			}
			else
			{
			return null;
			}
	}
	
	
	
	
	
	
	
}
