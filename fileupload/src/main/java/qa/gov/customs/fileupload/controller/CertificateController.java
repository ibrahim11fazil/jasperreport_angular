package qa.gov.customs.fileupload.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.fileupload.models.CertificateRequest;
import qa.gov.customs.fileupload.models.ResponseType;
import qa.gov.customs.fileupload.service.FileService;
import qa.gov.customs.fileupload.service.ReportService;
import qa.gov.customs.fileupload.utils.FileUploadUtil;
import qa.gov.customs.fileupload.utils.MessageUtil;

import java.util.List;

@RestController
public class CertificateController {

    @Autowired
    ReportService reportService;

    @Autowired
    FileService fileService;

    //@PreAuthorize("hasAnyAuthority('generate_certificate')")
    @PostMapping("/generate-certificate")
    ResponseType generateCertificate(@RequestBody CertificateRequest certificateRequest) {
        try {
            if (certificateRequest.getActivationId() != null &&
                    certificateRequest.getJobId() != null &&
                    certificateRequest.getCourseDate() != null &&
                    certificateRequest.getCourseName() != null &&
                    certificateRequest.getUserName() != null) {
                // check the certificate is already generated
                List<CertificateRequest> requestList = fileService.findByJobIdAndActivationId(certificateRequest.getJobId(),
                        certificateRequest.getActivationId());
                if (requestList != null && requestList.size() > 0) {
                    return get(500, MessageUtil.DATA_ALREADY_EXISTS, false, "");
                } else {
                    certificateRequest.setCertificateUid(FileUploadUtil.getUUID());
                    String fileName = reportService.generateCertificate(certificateRequest);
                    if (fileName != null) {
                        certificateRequest.setCertificateUrl(fileName);

                        CertificateRequest certificateRequestInserted = fileService.saveCertificates(certificateRequest);
                        if (certificateRequestInserted != null) {
                            return get(200, MessageUtil.SUCCESS, true, certificateRequest);
                        } else {
                            return get(500, MessageUtil.FAILED, false, "");
                        }
                    } else {
                        return get(500, MessageUtil.FAILED, false, "");
                    }
                }

            } else {
                return get(500, MessageUtil.FAILED, false, "");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return get(500, MessageUtil.FAILED, false, "");
        }
    }


    @PreAuthorize("hasAnyAuthority('list_certificates')")
    @PostMapping("/list-certificates")
    ResponseType getListOfCertificatesBasedOnActivationId(@RequestBody CertificateRequest certificateRequest) {
        try {
            if (certificateRequest.getActivationId() != null) {
                List<CertificateRequest> requestList = fileService.
                        findAllByactivationId(
                                certificateRequest.getActivationId());
                if (requestList != null && requestList.size() > 0) {
                    return get(200, MessageUtil.SUCCESS, true, requestList);
                } else {
                    return get(500, MessageUtil.FAILED, false, "");
                }
            } else {
                return get(500, MessageUtil.FAILED, false, "");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return get(500, MessageUtil.FAILED, false, "");
        }
    }

    @PreAuthorize("hasAnyAuthority('user_certificates')")
    @PostMapping("/list-certificates-byjobid")
    ResponseType getListOfCertificatesBasedOnJobId(@RequestBody CertificateRequest certificateRequest) {
        try {
            if (certificateRequest.getActivationId() != null) {
                List<CertificateRequest> requestList = fileService.
                        findAllByjobId(
                                certificateRequest.getJobId());
                if (requestList != null && requestList.size() > 0) {
                    return get(200, MessageUtil.SUCCESS, true, requestList);
                } else {
                    return get(500, MessageUtil.FAILED, false, "");
                }
            } else {
                return get(500, MessageUtil.FAILED, false, "");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return get(500, MessageUtil.FAILED, false, "");
        }
    }


    ResponseType get(int code, String message, boolean status, Object data) {
        ResponseType response = new ResponseType(code, message, status,
                data);
        return response;
    }
}
