package qa.gov.customs.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import qa.gov.customs.employee.entity.EmpUniverstity;

import java.math.BigDecimal;
import java.util.List;

public interface UniversityRepository extends JpaRepository<EmpUniverstity, BigDecimal> {

    List<EmpUniverstity> findAll();


}
