package qa.gov.customs.fileupload.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import qa.gov.customs.fileupload.entity.EmployeeCertificate;

import java.math.BigDecimal;
import java.util.List;

public interface EmployeeCertificateRepository extends JpaRepository<EmployeeCertificate, BigDecimal> {
    List<EmployeeCertificate> findByJobIdEquals(String jobId);
}
