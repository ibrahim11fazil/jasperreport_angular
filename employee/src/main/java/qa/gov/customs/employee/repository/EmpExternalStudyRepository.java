package qa.gov.customs.employee.repository;

import org.springframework.data.jpa.repository.Query;
import qa.gov.customs.employee.models.empExternalStudyRecord;

import java.util.List;

public interface EmpExternalStudyRepository {

    @Query(value = "Select * from EMP_EXTERNALSTUDY_MASTER M,EMP_EXTERNALSTUDY_DETAILS D where D.END_DATE>sysdate and M.SRL_NO=D.SRL_NO", nativeQuery = true)
    List<empExternalStudyRecord> listAllExternalstudy();


}
