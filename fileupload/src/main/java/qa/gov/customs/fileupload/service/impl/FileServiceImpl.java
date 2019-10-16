package qa.gov.customs.fileupload.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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

import static qa.gov.customs.fileupload.utils.FileUploadUtil.stringToDateForCertifiate;

@Service
public class FileServiceImpl implements FileService {


    @Autowired
    EmployeeCertificateRepository employeeCertificateRepository;

    @Autowired
    EmployeeUploadsRepository employeeUploadsRepository;


    @Override
    public List<CertificateRequest> getEmployeeCertificates(String jobId) {
        List<EmployeeCertificate> items =  employeeCertificateRepository.findByJobIdEquals(jobId);
        if(items!=null && items.size()>0){
            return generateCertificateList(items);
        }
        else return null;
    }

    @Override
    public CertificateRequest saveCertificates(CertificateRequest certificateRequest)   {
        Date converted = null;
        try {
            converted = stringToDateForCertifiate(certificateRequest.getCourseDate());
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
        EmployeeCertificate certificate = new EmployeeCertificate();
        certificate.setCertificateUrl(certificateRequest.getCertificateUrl());
        certificate.setJobId(certificateRequest.getJobId());
        certificate.setqId(certificateRequest.getqId()!=null?certificateRequest.getqId():"");
        certificate.setUserName(certificateRequest.getUserName());
        certificate.setJobId(certificateRequest.getJobId());
        certificate.setCourseDate(converted);
        certificate.setActivationId(certificateRequest.getActivationId());
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
    public List<CertificateRequest> findByJobIdAndActivationId(String jobId, BigDecimal activationId) {
        List<EmployeeCertificate> certificates =  employeeCertificateRepository.findByJobIdAndActivationId(jobId,activationId);
        if(certificates!=null &&  !certificates.isEmpty()) {
            return generateCertificateList(certificates);
        }
        return null;
    }

    @Override
    public List<CertificateRequest> findAllByactivationId(BigDecimal activationId) {
        List<EmployeeCertificate> certificates =  employeeCertificateRepository.findByActivationId(activationId);
        if(certificates!=null &&  !certificates.isEmpty()) {
            return generateCertificateList(certificates);
        }
        return null;
    }

    @Override
    public List<CertificateRequest> findAllByjobId(String jobId) {
        List<EmployeeCertificate> certificates =  employeeCertificateRepository.findByJobIdEquals(jobId);
        if(certificates!=null &&  !certificates.isEmpty()) {
            return generateCertificateList(certificates);
        }
        return null;
    }


    List<CertificateRequest> generateCertificateList(List<EmployeeCertificate> certificates){
        List<CertificateRequest> certis = new ArrayList<>();
        for (EmployeeCertificate item:
                certificates) {
            CertificateRequest response = new CertificateRequest();
            response.setCertificateId(item.getCertificateId());
            response.setCertificateUrl(item.getCertificateUrl());
            response.setActivationId(item.getActivationId());
            response.setJobId((item.getJobId()));
            certis.add(response);
        }
        return certis;
    }


    @Override
    public List<EmployeeUploadRequest> getUserFiles(String jobId) {
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
    public EmployeeUploadRequest saveEmployeeUpload(EmployeeUpload certificateRequest) {
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
