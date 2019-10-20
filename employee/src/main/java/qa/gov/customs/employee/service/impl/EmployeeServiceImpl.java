package qa.gov.customs.employee.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import qa.gov.customs.employee.entity.EmpEducationLevel;
import qa.gov.customs.employee.entity.EmpMajor;
import qa.gov.customs.employee.entity.EmpUniverstity;
import qa.gov.customs.employee.repository.EducatiuonLevelRepository;
import qa.gov.customs.employee.repository.MajorRepository;
import qa.gov.customs.employee.repository.UniversityRepository;

import java.util.ArrayList;
import java.util.List;

public class EmployeeServiceImpl {
    @Autowired
    UniversityRepository universityRepository;

    @Autowired
    EducatiuonLevelRepository educatiuonLevelRepository;

    @Autowired
    MajorRepository majorRepository;

    public List<EmpUniverstity> findAlluniversity() {

        List<EmpUniverstity> universityList = new ArrayList<>();
        return universityRepository.findAll();

    }


    public List<EmpMajor> findAllMajor() {
        List<EmpMajor> majorList = new ArrayList<>();
        return majorRepository.findAll();
    }


    public List<EmpEducationLevel> findAllEducatiuonLevel() {
        List<EmpEducationLevel> educatiuonLevelList = new ArrayList<>();
        return educatiuonLevelRepository.findAll();
    }

}
