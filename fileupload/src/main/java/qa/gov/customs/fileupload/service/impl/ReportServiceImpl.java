package qa.gov.customs.fileupload.service.impl;


import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.engine.design.JasperDesign;
import net.sf.jasperreports.engine.xml.JRXmlLoader;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import qa.gov.customs.fileupload.models.CertificateRequest;
import qa.gov.customs.fileupload.service.ReportService;

import java.io.IOException;
import java.io.InputStream;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import static qa.gov.customs.fileupload.utils.FileUploadUtil.getDateInString;


@Service
public class ReportServiceImpl implements ReportService {

    private static final Logger logger = LoggerFactory.getLogger(ReportServiceImpl.class);
    private static final String logo_path = "/images/logo-sign.png";
    private static final String cert_path = "/images/certificate.png";
    private final String certificateTemplateUrl = "/reports/Blank_A4_Landscape_certificate_v1.jrxml";
    @Value("${file.upload-dir}")
    private String pdfFolderLocation;

    @Override
    public String generateCertificate(CertificateRequest certificateRequest) throws IOException {
        try {
            String fileNameSelected = certificateRequest.getJobId() + "_" +
                    certificateRequest.getActivationId() + "_" +
                    getDateInString() + ".pdf";
            String fileName = pdfFolderLocation + "/" + fileNameSelected;
            // Load the invoice jrxml template.
            final JasperReport jReport = loadCertificateTemplate();
            // Create parameters map.
            final Map<String, Object> parameters = parameters(certificateRequest);
            if (parameters != null) {
                // Create an empty datasource.
                final JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(Collections.singletonList("Certificate"));
                JasperPrint jPrint = JasperFillManager.fillReport(jReport, parameters, dataSource);
                JasperExportManager.exportReportToPdfFile(jPrint, fileName);
                return fileNameSelected;
            } else {
                return null;
            }

        } catch (final Exception e) {
            e.printStackTrace();
            logger.error(String.format("An error occured during PDF creation: %s", e));
            return null;
        }
    }

    // Load invoice jrxml template
    private JasperReport loadCertificateTemplate() throws JRException {
        logger.info(String.format("certificate template path : %s", certificateTemplateUrl));
        final InputStream reportInputStream = getClass().getResourceAsStream(certificateTemplateUrl);
        final JasperDesign jasperDesign = JRXmlLoader.load(reportInputStream);
        return JasperCompileManager.compileReport(jasperDesign);
    }

    // Fill template order parametres
    private Map<String, Object> parameters(CertificateRequest certificateRequest) {
        final Map<String, Object> parameters = new HashMap<>();
        try {
//            String name = new String(certificateRequest.getUserName().getBytes("UTF-8"), "ISO-8859-1");
            //parameters.put("logo", getClass().getResourceAsStream(logo_path));
            //parameters.put("certificate", getClass().getResourceAsStream(cert_path));

            String name =   "بأن السيد  "  +" / " + certificateRequest.getUserName();
            String courseName=    "قد شارك في دورة  " + " / " + certificateRequest.getCourseName()  ;
            //String courseDate= certificateRequest.getEndDate() + " إلى " + certificateRequest.getCourseDate() + " المنعقدة خلال الفترة من ";
            String courseDate=   " المنعقدة خلال الفترة من " + certificateRequest.getCourseDate()  + " إلى " + certificateRequest.getEndDate();
            parameters.put("nameField", name);
            parameters.put("courseName", courseName);
            parameters.put("currentDate",getDateInString());
            parameters.put("courseDate", courseDate);

           // parameters.put("certificateId", certificateRequest.getCertificateUid());
            return parameters;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

}
