package qa.gov.customs.fileupload.entity;


import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "EMP_UPLOADS")
public class EmployeeUpload {

    @Id
    @Column(name = "FILE_ID", unique = true, nullable = false, precision = 22, scale = 0)
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "id_Sequence")
    @SequenceGenerator(name = "id_Sequence", sequenceName = "EMP_UPLOADS_ID_SEQ",allocationSize = 1)
    BigDecimal fileId;
    @Column(name = "FILE_URL", length = 500)
    String fileUrl;
    @Column(name = "FILE_NAME", length = 200)
    String fileName;
    @Temporal(TemporalType.DATE)
    @Column(name = "CREATED_ON")
    Date createdOn;
    @Column(name = "CREATED_BY", length = 20)
    String createdBy;

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

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }
}
