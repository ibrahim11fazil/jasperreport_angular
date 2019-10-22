package qa.gov.customs.fileupload.entity;


import qa.gov.customs.fileupload.config.Auditable;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "EMP_UPLOADS")
public class EmployeeUpload extends Auditable<String> implements java.io.Serializable {

    @Id
    @Column(name = "FILE_ID", unique = true, nullable = false, precision = 22, scale = 0)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_Sequence")
    @SequenceGenerator(name = "id_Sequence", sequenceName = "EMP_UPLOADS_ID_SEQ", allocationSize = 1)
    BigDecimal fileId;
    @Column(name = "FILE_URL", length = 500)
    String fileUrl;
    @Column(name = "FILE_NAME", length = 200)
    String fileName;


    public BigDecimal getFileId() {
        return fileId;
    }

    public void setFileId(BigDecimal fileId) {
        this.fileId = fileId;
    }

    public String getFileUrl() {
        return fileUrl;
    }

    public void setFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }


}
