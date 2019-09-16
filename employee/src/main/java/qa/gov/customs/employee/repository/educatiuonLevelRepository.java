package qa.gov.customs.employee.repository;

import java.math.BigDecimal;
import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;

import qa.gov.customs.employee.entity.EmpEducationLevel;


public interface educatiuonLevelRepository  extends JpaRepository<EmpEducationLevel, BigDecimal> {

	ArrayList<EmpEducationLevel> findAll();

}
