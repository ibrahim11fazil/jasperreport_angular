package qa.gov.customs.training.entity;


import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Objects;


@Entity
@Table(name = "TAC_JOBCARD_COURSE_LINK")
@AssociationOverrides({
        @AssociationOverride(name = "primaryKey.tacJobcard",
                joinColumns = @JoinColumn(name = "JOBCARD_NO")),
        @AssociationOverride(name = "primaryKey.tacCourseMaster",
                joinColumns = @JoinColumn(name = "COURSE_ID"))})
public class TacJobcardCourseLink implements Serializable {

    private TacJobcardCourseLinkId primaryKey = new TacJobcardCourseLinkId();


//    public TacJobcardCourseLink(String mandatoryFlag) {
//       // this.tacCourseMaster = courseMaster;
//        this.mandatoryFlag = mandatoryFlag;
//        //this.tacJobcard=tacJobcard;
//    }
    private BigDecimal mandatoryFlag;
    private TacJobcard tacJobcardTransiant;
    private TacCourseMaster tacCourseMasterTransiant;
    public TacJobcardCourseLink() {
    }

    @Transient
    public TacJobcard getTacJobcardTransiant() {
        return tacJobcardTransiant;
    }

    public void setTacJobcardTransiant(TacJobcard tacJobcardTransiant) {
        this.primaryKey.setTacJobcard(tacJobcardTransiant);
    }

    @Transient
    public TacCourseMaster getTacCourseMasterTransiant() {
        return tacCourseMasterTransiant;
    }

    public void setTacCourseMasterTransiant(TacCourseMaster tacCourseMasterTransiant) {
        this.primaryKey.setTacCourseMaster(tacCourseMasterTransiant);
    }

    //@JsonBackReference(value="pkey")
    @EmbeddedId
    public TacJobcardCourseLinkId getPrimaryKey() {
        return primaryKey;
    }

    public void setPrimaryKey(TacJobcardCourseLinkId primaryKey) {
        this.primaryKey = primaryKey;
    }

    @Column(name = "MANDATORY_FLAG")
    public BigDecimal getMandatoryFlag() {
        return mandatoryFlag;
    }

    public void setMandatoryFlag(BigDecimal mandatoryFlag) {
        this.mandatoryFlag = mandatoryFlag;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;

        if (o == null || getClass() != o.getClass())
            return false;

        TacJobcardCourseLink that = (TacJobcardCourseLink) o;
        return Objects.equals(primaryKey, that.primaryKey);
    }

    @Override
    public int hashCode() {
        return Objects.hash(primaryKey);
    }
}
