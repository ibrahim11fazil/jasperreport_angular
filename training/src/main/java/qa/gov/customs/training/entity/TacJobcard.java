package qa.gov.customs.training.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import qa.gov.customs.training.models.JobCardCourseLinkModel;

import java.math.BigDecimal;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;


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
		private BigDecimal adminHours;
		private BigDecimal specialisedHours;
		private BigDecimal workshopHours;
		private BigDecimal hourFlag;
		private BigDecimal jobCardyear;
		private BigDecimal jobCardStatus;

		
		private Set<TacJobcardConditions> tacJobcardConditions = new HashSet<TacJobcardConditions>(0);
		private Set<TacJobcardDuties> tacJobcardDuties = new HashSet<TacJobcardDuties>(0);
		private Set<TacJobcardSkills> tacJobcardSkills = new HashSet<TacJobcardSkills>(0);
		

//		
		
		

		public TacJobcard(){
			
		}
		
	

		public TacJobcard(String job, String jobTitle, String jobGrade, String jobGroup,String specialGroup,BigDecimal jobcardNo,Set<TacJobcardConditions> tacJobcardConditions,Set<TacJobcardSkills> tacJobcardSkills,Set<TacJobcardDuties> tacJobcardDuties)// ,Set<TacJobcardCourseLink> tacJobcardCourseLink)
		{
			
			this.job=job;
			this.jobGrade=jobGrade;
			this.jobGroup=jobGroup;
			this.jobTitle=jobTitle;
			this.specialGroup=specialGroup;
			this.jobcardNo=jobcardNo;
			this.tacJobcardConditions=tacJobcardConditions;
			this.tacJobcardDuties=tacJobcardDuties;
			this.tacJobcardSkills=tacJobcardSkills;
//			this.tacJobcardCourseLink=tacJobcardCourseLink;
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
		

		@JsonManagedReference(value="duties")
		@OneToMany(fetch = FetchType.LAZY, mappedBy = "tacJobcard",cascade = CascadeType.ALL)
		public Set<TacJobcardDuties> getTacJobcardDuties() {
			return tacJobcardDuties;
		}

		public void setTacJobcardDuties(Set<TacJobcardDuties> tacJobcardDuties) {
			this.tacJobcardDuties = tacJobcardDuties;
		}

		@Column(name = "ADMIN_HOURS")
		public BigDecimal getAdminHours() {
			return adminHours;
		}

		public void setAdminHours(BigDecimal adminHours) {
			this.adminHours = adminHours;
		}

		@Column(name = "SPECIALISED_HOURS")
		public BigDecimal getSpecialisedHours() {
			return specialisedHours;
		}

		public void setSpecialisedHours(BigDecimal specialisedHours) {
			this.specialisedHours = specialisedHours;
		}

		@Column(name = "WORKSHOP_HOURS")
		public BigDecimal getWorkshopHours() {
			return workshopHours;
		}

		public void setWorkshopHours(BigDecimal workshopHours) {
			this.workshopHours = workshopHours;
		}

		@Column(name = "HOUR_ERROR_FLAG")
		public BigDecimal getHourFlag() {
			return hourFlag;
		}

		public void setHourFlag(BigDecimal hourFlag) {
			this.hourFlag = hourFlag;
		}

		@Column(name = "JOB_CARD_YEAR")
		public BigDecimal getJobCardyear() {
			return jobCardyear;
		}

		public void setJobCardyear(BigDecimal jobCardyear) {
			this.jobCardyear = jobCardyear;
		}

		@Column(name = "JOB_CARD_STATUS")
		public BigDecimal getJobCardStatus() {
			return jobCardStatus;
		}

		public void setJobCardStatus(BigDecimal jobCardStatus) {
			this.jobCardStatus = jobCardStatus;
		}

		//		@ManyToMany(fetch = FetchType.LAZY)
//		@JoinTable(name = "TAC_JOBCARD_COURSE_LINK",
//				joinColumns = { @JoinColumn(name = "JOBCARD_NO") },
//				inverseJoinColumns = { @JoinColumn(name = "COURSE_ID") })
		
//		@JsonManagedReference(value="courseLink")
//		@OneToMany(fetch = FetchType.LAZY, mappedBy = "tacJobcard",cascade = CascadeType.ALL)
//		public Set<TacJobcardCourseLink> getTacJobcardCourseLink() {
//			return tacJobcardCourseLink;
//		}
//
//		public void setTacJobcardCourseLink(Set<TacJobcardCourseLink> tacJobcardCourseLink) {
//			this.tacJobcardCourseLink = tacJobcardCourseLink;
//		}
//		


		private Set<TacJobcardCourseLink> tacJobcardCourseLink = new HashSet<TacJobcardCourseLink>(0);

		//@JsonManagedReference(value="tacJobcard")
		@OneToMany(
				mappedBy = "primaryKey.tacJobcard",
				cascade = CascadeType.ALL
		)
		public Set<TacJobcardCourseLink> getTacJobcardCourseLink() {
			return tacJobcardCourseLink;
		}

		public void setTacJobcardCourseLink(Set<TacJobcardCourseLink> tacJobcardCourseLink) {
			this.tacJobcardCourseLink = tacJobcardCourseLink;
		}


		public void addCourse(TacJobcardCourseLink... courseMasters) {
			for(TacJobcardCourseLink link: courseMasters) {
				link.setTacJobcardTransiant(this);
				this.tacJobcardCourseLink = Stream.of(link).collect(Collectors.toSet());
			}


		}



//		public void removeCourse(TacCourseMaster courseMaster) {
//			for (Iterator<TacJobcardCourseLink> iterator = tacJobcardCourseLink.iterator();
//				 iterator.hasNext(); ) {
//				 TacJobcardCourseLink jobcardCourseLink = iterator.next();
//
//				if (jobcardCourseLink.getPrimaryKey().equals(this) &&
//						jobcardCourseLink.getPrimaryKey().equals(courseMaster)) {
//					iterator.remove();
//					jobcardCourseLink.setTacCourseMaster(null);
//					jobcardCourseLink.setTacJobcard(null);
//				}
//			}
//		}


		List<JobCardCourseLinkModel> jobCardCourseLinkModelList = new ArrayList<>();

		@Transient
		public List<JobCardCourseLinkModel> getJobCardCourseLinkModelList() {
			return jobCardCourseLinkModelList;
		}

		public void setJobCardCourseLinkModelList(List<JobCardCourseLinkModel> jobCardCourseLinkModelList) {
			this.jobCardCourseLinkModelList = jobCardCourseLinkModelList;
		}

		@Transient
		int start;

		@Transient
		int limit;

		@Transient
		public int getStart() {
			return start;
		}

		public void setStart(int start) {
			this.start = start;
		}
		@Transient
		public int getLimit() {
			return limit;
		}

		public void setLimit(int limit) {
			this.limit = limit;
		}
		
		}