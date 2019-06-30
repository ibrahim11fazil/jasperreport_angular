package qa.gov.customs.training.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import java.math.BigDecimal;

	
	@Entity
	@Table(name = "TAC_JOBCARD", schema = "CUST_TAC")
	public class TacJobcard  implements java.io.Serializable
	{
		
		
		private String JOB; 
		private String JOB_TITLE; 
		private String JOB_GRADE; 
		private String JOB_GROUP;
		private String SPECIAL_GROUP; 
		private BigDecimal JOBCARD_NO;
		
		public TacJobcard(String JOB, String JOB_TITLE, String JOB_GRADE, String JOB_GROUP,String SPECIAL_GROUP,BigDecimal JOBCARD_NO)
		{
			
			this.JOB=JOB;
			this.JOB_GRADE=JOB_GRADE;
			this.JOB_GROUP=JOB_GROUP;
			this.JOB_TITLE=JOB_TITLE;
			this.SPECIAL_GROUP=SPECIAL_GROUP;
			this.JOBCARD_NO=JOBCARD_NO;
		
		}
		
		public String getJOB() {
			return JOB;
		}

		public void setJOB(String jOB) {
			JOB = jOB;
		}

		public String getJOB_TITLE() {
			return JOB_TITLE;
		}

		public void setJOB_TITLE(String jOB_TITLE) {
			JOB_TITLE = jOB_TITLE;
		}

		public String getJOB_GRADE() {
			return JOB_GRADE;
		}

		public void setJOB_GRADE(String jOB_GRADE) {
			JOB_GRADE = jOB_GRADE;
		}

		public String getJOB_GROUP() {
			return JOB_GROUP;
		}

		public void setJOB_GROUP(String jOB_GROUP) {
			JOB_GROUP = jOB_GROUP;
		}

		public String getSPECIAL_GROUP() {
			return SPECIAL_GROUP;
		}

		public void setSPECIAL_GROUP(String sPECIAL_GROUP) {
			SPECIAL_GROUP = sPECIAL_GROUP;
		}

		@Id

		@Column(name = "JOBCARD_NO", unique = true, nullable = false, precision = 22, scale = 0)
		@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "id_Sequence")
	    @SequenceGenerator(name = "id_Sequence", sequenceName = "TAC_JOBCARD_NO_SEQ",allocationSize = 1)
		public BigDecimal getJOBCARD_NO() {
			return this.JOBCARD_NO;
		}

		public void setJOBCARD_NO(BigDecimal JOBCARD_NO) {
			this.JOBCARD_NO = JOBCARD_NO;
		}

		
		
		
		
	}

