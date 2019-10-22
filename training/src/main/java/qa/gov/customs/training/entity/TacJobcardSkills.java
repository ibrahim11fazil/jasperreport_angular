package qa.gov.customs.training.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "TAC_JOBCARD_SKILLS", schema = "CUST_TAC")
public class TacJobcardSkills {

    private BigDecimal skillsID;
    private String jobSkills;
    private TacJobcard tacJobcard;
    public TacJobcardSkills(BigDecimal skillsId, String jobSkills, TacJobcard tacJobcard) {
        //super();
        this.jobSkills = jobSkills;
        this.skillsID = skillsId;
        this.tacJobcard = tacJobcard;

    }

    public TacJobcardSkills() {

    }

    @Id
    @Column(name = "SKILLS_ID", unique = true, nullable = false, precision = 22, scale = 0)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "skillsId_Sequence")
    @SequenceGenerator(name = "skillsId_Sequence", sequenceName = "TAC_SKILLS_ID_SEQ", allocationSize = 1)
    public BigDecimal getSkillsID() {
        return skillsID;
    }

    public void setSkillsID(BigDecimal skillsID) {
        this.skillsID = skillsID;
    }

    public String getJobSkills() {
        return jobSkills;
    }

    public void setJobSkills(String jobSkills) {
        this.jobSkills = jobSkills;
    }


    @JsonBackReference(value = "skills")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "JOBCARD_NO")
    public TacJobcard getTacJobcard() {
        return tacJobcard;
    }

    public void setTacJobcard(TacJobcard tacJobcard) {
        this.tacJobcard = tacJobcard;
    }


}
