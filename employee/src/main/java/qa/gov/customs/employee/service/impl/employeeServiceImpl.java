package qa.gov.customs.employee.service.impl;

import java.util.ArrayList;
import java.util.List;

import qa.gov.customs.employee.entity.EmpEducationLevel;
import qa.gov.customs.employee.entity.EmpMajor;
import qa.gov.customs.employee.entity.EmpUniverstity;
import qa.gov.customs.employee.repository.educatiuonLevelRepository;
import qa.gov.customs.employee.repository.majorRepository;
import qa.gov.customs.employee.repository.universityRepository;

public class employeeServiceImpl {
	public List<EmpUniverstity> findAlluniversity()
	{
		 List<EmpUniverstity> universityList = new ArrayList<>();
			universityRepository.findAll().forEach(item -> universityList.add(item));
			 return universityList;
	}
	
	
    public List<EmpMajor> findAllMajor()
	{
		 List<EmpMajor> majorList = new ArrayList<>();
			majorRepository.findAll().forEach(item -> majorList.add(item));
			 return majorList;
	}
	

    public List<EmpEducationLevel> findAllEducatiuonLevel()
	{
		 List<EmpEducationLevel> educatiuonLevelList = new ArrayList<>();
		 educatiuonLevelRepository.findAll().forEach(item -> educatiuonLevelList.add(item));
			 return educatiuonLevelList;
	}
	
}
