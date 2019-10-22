package qa.gov.customs.training.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "TAC_JOBCARD_CONDITIONS", schema = "CUST_TAC")
public class TacJobcardConditions {

    private String jobConditions;
    private BigDecimal conditionsId;
    private TacJobcard tacJobcard;

    public TacJobcardConditions(String jobConditions, BigDecimal conditionsId, TacJobcard tacJobcard) {
        //super();
        this.jobConditions = jobConditions;
        this.conditionsId = conditionsId;
        this.tacJobcard = tacJobcard;
    }

    public TacJobcardConditions() {

    }

//	@Column(name = "JOB_CONDITIONS", length = 500)

    public String getJobConditions() {
        return jobConditions;
    }


    public void setJobConditions(String jobConditions) {
        this.jobConditions = jobConditions;
    }

    @Id

    @Column(name = "CONDITIONS_ID", unique = true, nullable = false, precision = 22, scale = 0)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "Id_Sequence")
    @SequenceGenerator(name = "Id_Sequence", sequenceName = "TAC_CONDITIONS_ID_SEQ", allocationSize = 1)
    public BigDecimal getConditionsId() {
        return conditionsId;
    }

    public void setConditionsId(BigDecimal conditionsId) {
        this.conditionsId = conditionsId;
    }

    @JsonBackReference(value = "conditions")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "JOBCARD_NO")
    public TacJobcard getTacJobcard() {
        return tacJobcard;
    }

    public void setTacJobcard(TacJobcard tacJobcard) {
        this.tacJobcard = tacJobcard;
    }

    //, insertable = false, updatable = false)


}
