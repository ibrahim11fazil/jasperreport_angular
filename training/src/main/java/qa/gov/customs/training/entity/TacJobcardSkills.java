package qa.gov.customs.training.entity;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name ="TAC_JOBCARD_SKILLS", schema = "CUST_TAC")
public class TacJobcardSkills {
	
	public TacJobcardSkills(BigDecimal jOBCARD_NO, String jOB_SKILLS) {
		super();
		JOBCARD_NO = jOBCARD_NO;
		JOB_SKILLS = jOB_SKILLS;
	}
	private BigDecimal JOBCARD_NO;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "JOBCARD_NO", nullable = false, insertable = false, updatable = false)
	public BigDecimal getJOBCARD_NO() {
		return JOBCARD_NO;
	}
	public void setJOBCARD_NO(BigDecimal jOBCARD_NO) {
		JOBCARD_NO = jOBCARD_NO;
	}
	public String getJOB_SKILLS() {
		return JOB_SKILLS;
	}
	public void setJOB_SKILLS(String jOB_SKILLS) {
		JOB_SKILLS = jOB_SKILLS;
	}
	private String JOB_SKILLS;
	

}
