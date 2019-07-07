package qa.gov.customs.training.entity;

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

import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

	
	@Entity
	@Table(name = "TAC_JOBCARD", schema = "CUST_TAC")
	public class TacJobcard  implements java.io.Serializable
	{
		
		
		private String job; 
	//	@Column(name = "JOB", length = 20)
		public String getJob() {
			return job;
		}

		public void setJob(String job) {
			this.job = job;
		}

	//	@Column(name = "JOB_TITLE", length = 500)
		public String getJobTitle() {
			return jobTitle;
		}

		public void setJobTitle(String jobTitle) {
			this.jobTitle = jobTitle;
		}
		
	//	@Column(name = "JOB_GRADE", length = 20)
		public String getJobGrade() {
			return jobGrade;
		}

		public void setJobGrade(String jobGrade) {
			this.jobGrade = jobGrade;
		}

	//	@Column(name = "JOB_GROUP", length = 200)
		public String getJobGroup() {
			return jobGroup;
		}

		public void setJobGroup(String jobGroup) {
			this.jobGroup = jobGroup;
		}

		
	//	@Column(name = "SPECIAL_GROUP", length = 200)
		public String getSpecialGroup() {
			return specialGroup;
		}

		public void setSpecialGroup(String specialGroup) {
			this.specialGroup = specialGroup;
		}
		
		@Id
		
		@Column(name = "JOBCARD_NO", unique = true, nullable = false, precision = 22, scale = 0)
		@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "id_Sequence")
	    @SequenceGenerator(name = "id_Sequence", sequenceName = "TAC_JOBCARD_NO_SEQ",allocationSize = 1)
		public BigDecimal getJobcardNo() {
			return jobcardNo;
			//return this.jobcardNo;
		}

		public void setJobcardNo(BigDecimal jobcardNo) {
			this.jobcardNo = jobcardNo;
		}

		private String jobTitle; 
		private String jobGrade; 
		private String jobGroup;
		private String specialGroup; 
		private BigDecimal jobcardNo;
		
		private Set<TacJobcardConditions> tacJobcardConditions = new HashSet<TacJobcardConditions>(0);
//		private Set<TacJobcardDuties> tacJobcardDuties = new HashSet<TacJobcardDuties>(0);
		private Set<TacJobcardSkills> tacJobcardSkills = new HashSet<TacJobcardSkills>(0);
		
		
		public TacJobcard(){
			
		}
		
	

		public TacJobcard(String job, String jobTitle, String jobGrade, String jobGroup,String specialGroup,BigDecimal jobcardNo,Set<TacJobcardConditions> tacJobcardConditions,Set<TacJobcardSkills> tacJobcardSkills)//,Set<TacJobcardDuties> tacJobcardDuties,)
		{
			
			this.job=job;
			this.jobGrade=jobGrade;
			this.jobGroup=jobGroup;
			this.jobTitle=jobTitle;
			this.specialGroup=specialGroup;
			this.jobcardNo=jobcardNo;
			this.tacJobcardConditions=tacJobcardConditions;
//			this.tacJobcardDuties=tacJobcardDuties;
			this.tacJobcardSkills=tacJobcardSkills;
			
		}
		
		@JsonManagedReference(value="conditions")
		@OneToMany(fetch = FetchType.LAZY, mappedBy = "tacJobcard",cascade = CascadeType.ALL)
		public Set<TacJobcardConditions> getTacJobcardConditions() {
			return tacJobcardConditions;
		}

		public void setTacJobcardConditions(Set<TacJobcardConditions> tacJobcardConditions) {
			this.tacJobcardConditions = tacJobcardConditions;
		}
		
		@JsonManagedReference(value="skills")
		@OneToMany(fetch = FetchType.LAZY, mappedBy = "tacJobcard",cascade = CascadeType.ALL)
		public Set<TacJobcardSkills> getTacJobcardSkills() {
			return tacJobcardSkills;
		}

		public void setTacJobcardSkills(Set<TacJobcardSkills> tacJobcardSkills) {
			this.tacJobcardSkills = tacJobcardSkills;
		}
		
		

//
//		@JsonManagedReference(value="duties")
//		@OneToMany(fetch = FetchType.LAZY, mappedBy = "tacJobcard",cascade = CascadeType.ALL)
//		public Set<TacJobcardDuties> getTacJobcardDuties() {
//			return tacJobcardDuties;
//		}
//
//		public void setTacJobcardDuties(Set<TacJobcardDuties> tacJobcardDuties) {
//			this.tacJobcardDuties = tacJobcardDuties;
//		}
//		
		
		
		
		}