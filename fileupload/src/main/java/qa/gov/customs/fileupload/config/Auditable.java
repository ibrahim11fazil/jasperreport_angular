package qa.gov.customs.fileupload.config;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import java.util.Date;

import static javax.persistence.TemporalType.TIMESTAMP;

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class Auditable<U> {

    @CreatedBy
    protected U userCreated;

    @CreatedDate
    @Temporal(TIMESTAMP)
    protected Date dateCreated;

    @LastModifiedBy
    protected U userModified;

    @LastModifiedDate
    @Temporal(TIMESTAMP)
    protected Date dateModified;

    public U getUserCreated() {
        return userCreated;
    }

    public void setUserCreated(U userCreated) {
        this.userCreated = userCreated;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    public U getUserModified() {
        return userModified;
    }

    public void setUserModified(U userModified) {
        this.userModified = userModified;
    }

    public Date getDateModified() {
        return dateModified;
    }

    public void setDateModified(Date dateModified) {
        this.dateModified = dateModified;
    }
}