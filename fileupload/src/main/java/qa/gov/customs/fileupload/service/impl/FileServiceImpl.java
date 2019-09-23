package qa.gov.customs.fileupload.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import qa.gov.customs.fileupload.entity.EmployeeCertificate;
import qa.gov.customs.fileupload.entity.EmployeeUpload;
import qa.gov.customs.fileupload.models.CertificateRequest;
import qa.gov.customs.fileupload.models.EmployeeUploadRequest;
import qa.gov.customs.fileupload.repository.EmployeeCertificateRepository;
import qa.gov.customs.fileupload.repository.EmployeeUploadsRepository;
import qa.gov.customs.fileupload.service.FileService;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

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
        Optional<EmployeeCertificate> certificate =  employeeCertificateRepository.findById(certificateId);
        if(certificate.isPresent())
        {
            CertificateRequest response = new CertificateRequest();
            response.setCertificateId(certificateId);
            response.setCertificateUrl(certificate.get().getCertificateUrl());
            return response;
        }
        return null;
    }

    @Override
    public List<EmployeeUploadRequest> getUserFiles(String jobId)
    {
        List<EmployeeUpload> items= employeeUploadsRepository.findByUserCreatedEquals(jobId);
        if(items!=null && items.size()>0){
            List<EmployeeUploadRequest> certificates = new ArrayList<>();
            for (EmployeeUpload item:
                    items) {
                EmployeeUploadRequest certificate = new EmployeeUploadRequest();
                certificate.setFileId(item.getFileId());
                certificate.setFileName(item.getFileName());
                certificates.add(certificate);
            }
            return certificates;
        }
        else return  null;
    }

    @Override
    public EmployeeUploadRequest saveEmployeeUpload(EmployeeUpload certificateRequest)
    {
        EmployeeUpload certificate = new EmployeeUpload();
        certificate.setFileName(certificateRequest.getFileName());
        EmployeeUpload fileInserted =  employeeUploadsRepository.save(certificate);
        if(fileInserted!=null){
            EmployeeUploadRequest fileIns = new EmployeeUploadRequest();
            fileIns.setFileId(fileInserted.getFileId());
            fileIns.setFileName(fileInserted.getFileName());
            return fileIns;
        }else return null;
    }
}
