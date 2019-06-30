package qa.gov.customs.training.entity;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="TAC_JOBCARD_DUTIES", schema = "CUST_TAC")
public class TacJobcardDuties {

	public TacJobcardDuties(BigDecimal jOBCARD_NO, String dUTY_DESCRIPTION) {
		super();
		JOBCARD_NO = jOBCARD_NO;
		DUTY_DESCRIPTION = dUTY_DESCRIPTION;
	}
	private BigDecimal JOBCARD_NO;
	private String DUTY_DESCRIPTION;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "JOBCARD_NO", nullable = false, insertable = false, updatable = false)
	public BigDecimal getJOBCARD_NO() {
		return JOBCARD_NO;
	}
	public void setJOBCARD_NO(BigDecimal jOBCARD_NO) {
		JOBCARD_NO = jOBCARD_NO;
	}
	public String getDUTY_DESCRIPTION() {
		return DUTY_DESCRIPTION;
	}
	public void setDUTY_DESCRIPTION(String dUTY_DESCRIPTION) {
		DUTY_DESCRIPTION = dUTY_DESCRIPTION;
	}
}
