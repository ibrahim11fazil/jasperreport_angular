package qa.gov.customs.fileupload.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import qa.gov.customs.fileupload.entity.EmployeeCertificate;

import java.math.BigDecimal;
import java.util.List;

public interface EmployeeCertificateRepository extends JpaRepository<EmployeeCertificate, BigDecimal> {
    List<EmployeeCertificate> findByJobIdEquals(String jobId);

    List<EmployeeCertificate> findByJobIdAndActivationId(@Param("jobId") String jobId, @Param("activationId") BigDecimal activationId);

    List<EmployeeCertificate> findByActivationId(@Param("activationId") BigDecimal activationId);
//    List<EmployeeCertificate> findByJobIdEquals(  String jobId);
}
