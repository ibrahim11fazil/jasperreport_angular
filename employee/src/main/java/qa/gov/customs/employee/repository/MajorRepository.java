package qa.gov.customs.employee.repository;

import java.math.BigDecimal;
import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;

import qa.gov.customs.employee.entity.EmpEducationLevel;
import qa.gov.customs.employee.entity.EmpMajor;

public interface MajorRepository  extends JpaRepository<EmpMajor, BigDecimal>  
{

	
	ArrayList<EmpMajor> findAll();
}
