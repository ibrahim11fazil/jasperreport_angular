package qa.gov.customs.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import qa.gov.customs.employee.entity.EmpMajor;

import java.math.BigDecimal;
import java.util.ArrayList;

public interface MajorRepository extends JpaRepository<EmpMajor, BigDecimal> {


    ArrayList<EmpMajor> findAll();
}
