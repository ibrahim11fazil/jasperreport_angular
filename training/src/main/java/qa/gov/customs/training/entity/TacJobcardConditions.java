package qa.gov.customs.training.entity;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name ="TAC_JOBCARD_CONDITIONS", schema = "CUST_TAC")

public class TacJobcardConditions 

{

	public TacJobcardConditions(BigDecimal jOBCARD_NO, String jOB_CONDITIONS) {
		super();
		JOBCARD_NO = jOBCARD_NO;
		JOB_CONDITIONS = jOB_CONDITIONS;
	}
	
	private BigDecimal JOBCARD_NO; 
	public BigDecimal getJOBCARD_NO() {
		return JOBCARD_NO;
	}
	public void setJOBCARD_NO(BigDecimal jOBCARD_NO) {
		JOBCARD_NO = jOBCARD_NO;
	}
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "JOBCARD_NO", nullable = false, insertable = false, updatable = false)
	public String getJOB_CONDITIONS() {
		return JOB_CONDITIONS;
	}
	public void setJOB_CONDITIONS(String jOB_CONDITIONS) {
		JOB_CONDITIONS = jOB_CONDITIONS;
	}

	private String JOB_CONDITIONS;
	

	
	
}
