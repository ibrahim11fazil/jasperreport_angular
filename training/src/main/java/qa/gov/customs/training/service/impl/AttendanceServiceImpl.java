package qa.gov.customs.training.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qa.gov.customs.training.entity.TacCourseActivation;
import qa.gov.customs.training.models.EmployeeData;
import qa.gov.customs.training.service.AttendanceService;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.List;
import qa.gov.customs.training.repository.MawaredRepository;



@Service
public class AttendanceServiceImpl implements AttendanceService {

    @Autowired
    MawaredRepository mawaredRepo;

    @Override
    public Set<EmployeeData> getEmployeeDataForAttendance(TacCourseActivation activation)
    {
        List<Object[]> objects =mawaredRepo.getEmpData(activation.getActivationId());
        Set<EmployeeData> empdata=new HashSet<EmployeeData>();

        for (Object[] o : objects) {
            EmployeeData emp = new EmployeeData();
            emp.setJobId((String)o[0]);
            emp.setCnameAr((String)o[1]);
            emp.setDepartment((String) o[2]);
            emp.setJobTitle((String) o[3]);
            emp.setMobile((String) o[4]);

            empdata.add(emp);
        }
        return empdata;
    }
}
