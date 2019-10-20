package qa.gov.customs.fileupload.service;

import qa.gov.customs.fileupload.models.CertificateRequest;

import java.io.IOException;

public interface ReportService {
    String generateCertificate(CertificateRequest certificateRequest) throws IOException;
}
