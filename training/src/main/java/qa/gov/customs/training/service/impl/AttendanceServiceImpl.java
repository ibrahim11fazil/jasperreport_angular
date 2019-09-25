package qa.gov.customs.training.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qa.gov.customs.training.entity.TacCourseActivation;
import qa.gov.customs.training.entity.TacCourseAttendees;
import qa.gov.customs.training.entity.TacCourseAttendence;
import qa.gov.customs.training.models.EmployeeData;
import qa.gov.customs.training.repository.TacAttendanceRepository;
import qa.gov.customs.training.service.AttendanceService;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.*;

import qa.gov.customs.training.repository.MawaredRepository;



@Service
public class AttendanceServiceImpl implements AttendanceService {

    @Autowired
    MawaredRepository mawaredRepo;
    @Autowired
    TacAttendanceRepository attendanceRepo;

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
            emp.setAttendeesId((BigDecimal) o[6]);

            empdata.add(emp);
        }
        return empdata;
    }

    @Override

    public TacCourseAttendence  markAttendance(TacCourseAttendence attendance) {


        TacCourseAttendence attendanceData = attendanceRepo.save(attendance);
        return attendanceData;
    }

   // public List<TacCourseAttendence>  markInitialAttendance(List<TacCourseAttendence> attendance) {
//        List<TacCourseAttendence> attendanceDetails= new ArrayList<>();
//
//        for(TacCourseAttendence  attend :attendance)
//        {
//           BigDecimal attendeesId= attend.getTacCourseAttendees().getAttendeesId();
//           // TacCourseAttendence attendanceDataExists=attendanceRepo.findAttendanceForToday(attendeesId);
//            if(attendanceDataExists==null)
//            {
//                TacCourseAttendence saveInitialAttendance=attendanceRepo.save(attend);
//                attendanceDetails.add(saveInitialAttendance);
//            }
//
//        }
//
//
//
//        List<TacCourseAttendence> attendanceData=attendanceRepo.saveAll(attendance);
//        return  attendanceDetails;




    @Override
    public TacCourseAttendence  checkIfAlreadyMarked(TacCourseAttendence attendance,Date date)
    {
        TacCourseAttendence attendancePresent=attendanceRepo.findAttendance(attendance.getTacCourseAttendees().getAttendeesId());
                return attendancePresent;
    }
}
