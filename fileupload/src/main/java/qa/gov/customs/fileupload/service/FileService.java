package qa.gov.customs.fileupload.service;


import qa.gov.customs.fileupload.entity.EmployeeUpload;
import qa.gov.customs.fileupload.models.CertificateRequest;
import qa.gov.customs.fileupload.models.EmployeeUploadRequest;

import java.math.BigDecimal;
import java.util.List;

public interface FileService {

    List<CertificateRequest> getEmployeeCertificates(String jobId);

    CertificateRequest saveCertificates(CertificateRequest certificateRequest);

    CertificateRequest verifyCertificate(BigDecimal certificateId);

    List<CertificateRequest> findByJobIdAndActivationId(String jobId, BigDecimal activationId);

    List<EmployeeUploadRequest> getUserFiles(String jobId);

    EmployeeUploadRequest saveEmployeeUpload(EmployeeUpload certificateRequest);

    List<CertificateRequest> findAllByactivationId(BigDecimal activationId);

    List<CertificateRequest> findAllByjobId(String jobId);
}
