package qa.gov.customs.fileupload.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.fileupload.models.CertificateRequest;
import qa.gov.customs.fileupload.models.ResponseType;
import qa.gov.customs.fileupload.service.ReportService;

@RestController
public class CertificateController {

    @Autowired
    ReportService reportService;

    //@PreAuthorize("hasAnyAuthority('generate_certificate')")
    @PostMapping("/generate-certificate")
    ResponseType generateCertificate(@RequestBody  CertificateRequest certificateRequest){
        try {
            reportService.generateCertificate(certificateRequest);
            return get(200,"success",true,"");
        }catch (Exception e){
            e.printStackTrace();
            return get(500,"failed",false,"");
        }


    }

    ResponseType  get(int code, String message, boolean status, Object data){
        ResponseType response = new ResponseType(code,message, status,
                data);
        return response;
    }
}
