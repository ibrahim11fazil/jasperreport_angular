package qa.gov.customs.fileupload.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import qa.gov.customs.fileupload.entity.EmployeeCertificate;
import qa.gov.customs.fileupload.entity.EmployeeUpload;
import qa.gov.customs.fileupload.models.CertificateRequest;
import qa.gov.customs.fileupload.repository.EmployeeCertificateRepository;
import qa.gov.customs.fileupload.repository.EmployeeUploadsRepository;
import qa.gov.customs.fileupload.service.FileService;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class FileServiceImpl implements FileService {


    @Autowired
    EmployeeCertificateRepository employeeCertificateRepository;

    @Autowired
    EmployeeUploadsRepository employeeUploadsRepository;


    @Override
    public List<CertificateRequest> getEmployeeCertificates(String jobId) {
        List<EmployeeCertificate> items =  employeeCertificateRepository.findByJobIdEquals(jobId);
        if(items!=null && items.size()>0){
            List<CertificateRequest> certificates = new ArrayList<>();
            for (EmployeeCertificate item:
            items) {
                CertificateRequest certificate = new CertificateRequest();
                certificate.setCertificateId(item.getCertificateId());
                certificate.setCertificateUrl(item.getCertificateUrl());
                certificates.add(certificate);
            }
            return certificates;
        }
        else return  null;
    }

    @Override
    public CertificateRequest saveCertificates(CertificateRequest certificateRequest) {
        EmployeeCertificate certificate = new EmployeeCertificate();
        certificate.setCertificateUrl(certificateRequest.getCertificateUrl());
        certificate.setJobId(certificateRequest.getJobId());
        certificate.setqId(certificateRequest.getqId()!=null?certificateRequest.getqId():"");
        EmployeeCertificate certificateInserted =  employeeCertificateRepository.save(certificate);
        if(certificateInserted!=null){
            CertificateRequest certificateIns = new CertificateRequest();
            certificateIns.setCertificateId(certificateInserted.getCertificateId());
            certificateIns.setCertificateUrl(certificateInserted.getCertificateUrl());
            return certificateIns;
        }else return null;

    }

    @Override
    public CertificateRequest verifyCertificate(BigDecimal certificateId) {
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
