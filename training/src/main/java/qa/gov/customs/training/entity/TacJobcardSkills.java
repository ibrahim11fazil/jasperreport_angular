package qa.gov.customs.training.entity;

import java.math.BigDecimal;

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
@Table(name ="TAC_JOBCARD_SKILLS", schema = "CUST_TAC")
public class TacJobcardSkills {
	
	public TacJobcardSkills(BigDecimal skillsId, String jobSkills,TacJobcard tacJobcard)
	{
		//super();
		this.jobSkills = jobSkills;
		this.skillsID=skillsId;
		this.tacJobcard=tacJobcard;
		   
	}
	private BigDecimal skillsID;
	private String jobSkills;
	private TacJobcard tacJobcard;

		public TacJobcardSkills() {
			
		}

		@Id
		@Column(name = "SKILLS_ID", unique = true, nullable = false, precision = 22, scale = 0)
		@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "skillsId_Sequence")
	    @SequenceGenerator(name = "skillsId_Sequence", sequenceName = "TAC_SKILLS_ID_SEQ",allocationSize = 1)
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
		

		@JsonBackReference(value="skills")
		@ManyToOne(fetch = FetchType.LAZY)
		@JoinColumn(name = "JOBCARD_NO")
		public TacJobcard getTacJobcard() {
			return tacJobcard;
		}

		public void setTacJobcard(TacJobcard tacJobcard) {
			this.tacJobcard = tacJobcard;
		}


}
