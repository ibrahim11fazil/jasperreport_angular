package qa.gov.customs.training.entity;

import java.math.BigDecimal;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="TAC_JOBCARD_DUTIES", schema = "CUST_TAC")

public class TacJobcardDuties {

	public TacJobcardDuties( String dutyDescription,BigDecimal dutiesId,TacJobcard tacJobcard)
	{
		//super();
		this.dutyDescription = dutyDescription;
		this.dutiesId=dutiesId;
		this.tacJobcard=tacJobcard;
	}
	private String dutyDescription;
	private BigDecimal dutiesId;
	private TacJobcard tacJobcard;

	public TacJobcardDuties() {
		
	}
	

	public String getDutyDescription() {
		return dutyDescription;
	}

	public void setDutyDescription(String dutyDescription) {
		this.dutyDescription = dutyDescription;
	}
	
	@Id
	
	@Column(name = "DUTIES_ID", unique = true, nullable = false, precision = 22, scale = 0)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "dutiesId_Sequence")
    @SequenceGenerator(name = "dutiesId_Sequence", sequenceName = "TAC_DUTIES_ID_SEQ",allocationSize = 1)
	public BigDecimal getDutiesId() {
		return dutiesId;
	}

	public void setDutiesId(BigDecimal dutiesId) {
		this.dutiesId = dutiesId;
	}
	
	@JsonBackReference(value="duties")
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "JOBCARD_NO")
	public TacJobcard getTacJobcard() {
		return tacJobcard;
	}

	public void setTacJobcard(TacJobcard tacJobcard) {
		this.tacJobcard = tacJobcard;
	}




	
}
