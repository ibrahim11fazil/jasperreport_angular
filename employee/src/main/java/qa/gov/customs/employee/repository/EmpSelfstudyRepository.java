package qa.gov.customs.employee.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import qa.gov.customs.employee.entity.EmpSelfstudyMaster;
import qa.gov.customs.employee.models.empSelfStudyRecord;

import java.math.BigDecimal;
import java.util.List;

public interface EmpSelfstudyRepository extends PagingAndSortingRepository<EmpSelfstudyMaster, BigDecimal> {

    @Query(value = "Select * from EMP_SELFSTUDY_MASTER M,EMP_SELFSTUDY_DETAILS D where D.END_DATE>sysdate and M.SRL_NO=D.SRL_NO", nativeQuery = true)
    List<empSelfStudyRecord> listAllSelfstudy();


}