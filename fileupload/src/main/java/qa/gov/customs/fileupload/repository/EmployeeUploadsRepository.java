package qa.gov.customs.fileupload.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import qa.gov.customs.fileupload.entity.EmployeeCertificate;
import qa.gov.customs.fileupload.entity.EmployeeUpload;

import java.math.BigDecimal;
import java.util.List;

public interface EmployeeUploadsRepository extends JpaRepository<EmployeeUpload, BigDecimal> {
    List<EmployeeUpload> findByUserCreatedEquals(String jobId);
}
