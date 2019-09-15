package qa.gov.customs.employee.repository;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import qa.gov.customs.employee.entity.EmpUniverstity;
import qa.gov.customs.employee.models.empSelfStudyRecord;

public interface universityRepository extends JpaRepository<EmpUniverstity, BigDecimal> {

	List<EmpUniverstity> findAll();



}
