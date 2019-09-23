package qa.gov.customs.fileupload.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import qa.gov.customs.fileupload.entity.EmployeeUpload;
import qa.gov.customs.fileupload.models.CertificateRequest;
import qa.gov.customs.fileupload.repository.EmployeeCertificateRepository;
import qa.gov.customs.fileupload.repository.EmployeeUploadsRepository;
import qa.gov.customs.fileupload.service.FileService;

import java.math.BigDecimal;
import java.util.List;

public class FileServiceImpl implements FileService {


    @Autowired
    EmployeeCertificateRepository employeeCertificateRepository;

    @Autowired
    EmployeeUploadsRepository employeeUploadsRepository;


    @Override
    public List<CertificateRequest> getEmployeeCertificates(String jobId) {
        return null;
    }

    @Override
    public CertificateRequest saveCertificates(CertificateRequest certificateRequest) {
        return null;
    }

    @Override
    public CertificateRequest vertifyCertificate(BigDecimal certificateId) {
        return null;
    }

    @Override
    public List<EmployeeUpload> getUserFiles(String jobId) {
        return null;
    }

    @Override
    public EmployeeUpload saveEmployeeUpload(EmployeeUpload certificateRequest) {
        return null;
    }
}
