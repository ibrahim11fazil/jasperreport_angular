package qa.gov.customs.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import qa.gov.customs.employee.entity.EmpEducationLevel;

import java.math.BigDecimal;
import java.util.ArrayList;


public interface EducatiuonLevelRepository extends JpaRepository<EmpEducationLevel, BigDecimal> {

    ArrayList<EmpEducationLevel> findAll();

}
