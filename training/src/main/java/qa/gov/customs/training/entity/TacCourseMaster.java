package qa.gov.customs.training.entity;
// Generated Apr 23, 2019 7:33:17 AM by Hibernate Tools 4.3.1.Final

import java.math.BigDecimal;
import java.sql.Clob;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import qa.gov.customs.training.config.Auditable;

/**
 * TacCourseMaster generated by hbm2java
 */
@Entity
@Table(name = "TAC_COURSE_MASTER", schema = "CUST_TAC")
public class TacCourseMaster extends Auditable<String> implements java.io.Serializable {

	private BigDecimal courseId;
	private TacCourseCategory tacCourseCategory;
	private String courseName;
	private BigDecimal duration;
	private BigDecimal durationFlag;
	private String objective;
	private BigDecimal numberofhours;
	private BigDecimal activityId;
	private BigDecimal prerequisitesId;
	private BigDecimal subcourseFlag;
	private BigDecimal locationType;
	private String courseStatus;
	//private String userCreated;
	//private Date dateCreated;
	//private String userModified;
	private BigDecimal activeFlag;
	public int offset;
	public int limit;
	//private Date dateModified;
	private String coordinatorJobId;

	private Set<TacCoursePrerequisites> tacCoursePrerequisiteses = new HashSet<TacCoursePrerequisites>(0);
	private Set<TacCourseGuidelines> tacCourseGuidelineses = new HashSet<TacCourseGuidelines>(0);
	private Set<TacCourseActivation> tacCourseActivations = new HashSet<TacCourseActivation>(0);
	private Set<TacCourseAudience> tacCourseAudiences = new HashSet<TacCourseAudience>(0);
	//Many to many
	//private Set<TacActivityCourseLink> tacActivityCourseLinks = new HashSet<TacActivityCourseLink>(0);

	private Set<TacActivity> tacActivities =new HashSet<TacActivity>(0);

	private Set<TacCourseOutcome> tacCourseOutcomes = new HashSet<TacCourseOutcome>(0);
	private Set<TacCourseDate> tacCourseDates = new HashSet<TacCourseDate>(0);

	public TacCourseMaster() {
	}

	public TacCourseMaster(BigDecimal courseId) {
		this.courseId = courseId;
	
	}

	public TacCourseMaster(BigDecimal courseId, TacCourseCategory tacCourseCategory, String courseName,
			BigDecimal duration, BigDecimal durationFlag, String objective, BigDecimal numberofhours,
			BigDecimal activityId, BigDecimal prerequisitesId, BigDecimal subcourseFlag, BigDecimal locationType,
			String courseStatus, String userCreated, Date dateCreated, String userModified, Date dateModified,
			String coordinatorJobId, Set<TacCoursePrerequisites> tacCoursePrerequisiteses,
			Set<TacCourseGuidelines> tacCourseGuidelineses, Set<TacCourseActivation> tacCourseActivations,
			Set<TacCourseAudience> tacCourseAudiences,Set<TacActivity> tacActivities ,
			Set<TacCourseOutcome> tacCourseOutcomes, Set<TacCourseDate> tacCourseDates) {
		// Set<TacActivityCourseLink> tacActivityCourseLinks
		this.courseId = courseId;
		this.tacCourseCategory = tacCourseCategory;
		this.courseName = courseName;
		this.duration = duration;
		this.durationFlag = durationFlag;
		this.objective = objective;
		this.numberofhours = numberofhours;
		this.activityId = activityId;
		this.prerequisitesId = prerequisitesId;
		this.subcourseFlag = subcourseFlag;
		this.locationType = locationType;
		this.courseStatus = courseStatus;
		this.userCreated = userCreated;
		this.dateCreated = dateCreated;
		this.userModified = userModified;
		this.dateModified = dateModified;
		this.coordinatorJobId = coordinatorJobId;
		this.tacCoursePrerequisiteses = tacCoursePrerequisiteses;
		this.tacCourseGuidelineses = tacCourseGuidelineses;
		this.tacCourseActivations = tacCourseActivations;
		this.tacCourseAudiences = tacCourseAudiences;
		//this.tacActivityCourseLinks = tacActivityCourseLinks;
		this.tacActivities=tacActivities;
		this.tacCourseOutcomes = tacCourseOutcomes;
		this.tacCourseDates = tacCourseDates;
	}

	@Id
	@Column(name = "COURSE_ID", unique = true, nullable = false, precision = 22, scale = 0)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "id_Sequence")
    @SequenceGenerator(name = "id_Sequence", sequenceName = "TAC_COURSE_SEQ",allocationSize = 1)
	public BigDecimal getCourseId() {
		return this.courseId;
	}

	public void setCourseId(BigDecimal courseId) {
		this.courseId = courseId;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "CATEGORY_ID")
	public TacCourseCategory getTacCourseCategory() {
		return this.tacCourseCategory;
	}

	public void setTacCourseCategory(TacCourseCategory tacCourseCategory) {
		this.tacCourseCategory = tacCourseCategory;
	}

	@Column(name = "COURSE_NAME", length = 1000)
	public String getCourseName() {
		return this.courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	@Column(name = "DURATION", precision = 22, scale = 0)
	public BigDecimal getDuration() {
		return this.duration;
	}

	public void setDuration(BigDecimal duration) {
		this.duration = duration;
	}
	@Transient
	public int getOffset() {
		return offset;
	}

	public void setOffset(int offset) {
		this.offset = offset;
	}
	@Transient
	public int getLimit() {
		return limit;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}

	@Column(name = "DURATION_FLAG", precision = 22, scale = 0)
	public BigDecimal getDurationFlag() {
		return this.durationFlag;
	}

	public void setDurationFlag(BigDecimal durationFlag) {
		this.durationFlag = durationFlag;
	}
	@Column(name = "ACTIVE_FLAG", precision = 22, scale = 0)
	public BigDecimal getActiveFlag() {
		return activeFlag;
	}

	public void setActiveFlag(BigDecimal activeFlag) {
		this.activeFlag = activeFlag;
	}
	@Column(name = "OBJECTIVE")
	@Lob
	public String getObjective() {
		return this.objective;
	}

	public void setObjective(String objective) {
		this.objective = objective;
	}

	@Column(name = "NUMBEROFHOURS", precision = 22, scale = 0)
	public BigDecimal getNumberofhours() {
		return this.numberofhours;
	}

	public void setNumberofhours(BigDecimal numberofhours) {
		this.numberofhours = numberofhours;
	}

	@Column(name = "ACTIVITY_ID", precision = 22, scale = 0)
	public BigDecimal getActivityId() {
		return this.activityId;
	}

	public void setActivityId(BigDecimal activityId) {
		this.activityId = activityId;
	}

	@Column(name = "PREREQUISITES_ID", length = 20)
	public BigDecimal getPrerequisitesId() {
		return this.prerequisitesId;
	}

	public void setPrerequisitesId(BigDecimal prerequisitesId) {
		this.prerequisitesId = prerequisitesId;
	}

	@Column(name = "SUBCOURSE_FLAG", length = 20)
	public BigDecimal getSubcourseFlag() {
		return this.subcourseFlag;
	}

	public void setSubcourseFlag(BigDecimal subcourseFlag) {
		this.subcourseFlag = subcourseFlag;
	}

	@Column(name = "LOCATION_TYPE", precision = 22, scale = 0)
	public BigDecimal getLocationType() {
		return this.locationType;
	}

	public void setLocationType(BigDecimal locationType) {
		this.locationType = locationType;
	}

	@Column(name = "COURSE_STATUS", length = 20)
	public String getCourseStatus() {
		return this.courseStatus;
	}

	public void setCourseStatus(String courseStatus) {
		this.courseStatus = courseStatus;
	}

	
	@Column(name = "COORDINATOR_JOB_ID", length = 20)
	public String getCoordinatorJobId() {
		return this.coordinatorJobId;
	}

	public void setCoordinatorJobId(String coordinatorJobId) {
		this.coordinatorJobId = coordinatorJobId;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tacCourseMaster")
	public Set<TacCoursePrerequisites> getTacCoursePrerequisiteses() {
		return this.tacCoursePrerequisiteses;
	}

	public void setTacCoursePrerequisiteses(Set<TacCoursePrerequisites> tacCoursePrerequisiteses) {
		this.tacCoursePrerequisiteses = tacCoursePrerequisiteses;
	}

	//@JsonManagedReference
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tacCourseMaster",cascade = CascadeType.ALL)
	public Set<TacCourseGuidelines> getTacCourseGuidelineses() {
		return this.tacCourseGuidelineses;
	}

	public void setTacCourseGuidelineses(Set<TacCourseGuidelines> tacCourseGuidelineses) {
		this.tacCourseGuidelineses = tacCourseGuidelineses;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tacCourseMaster",cascade = CascadeType.ALL)
	public Set<TacCourseActivation> getTacCourseActivations() {
		return this.tacCourseActivations;
	}

	public void setTacCourseActivations(Set<TacCourseActivation> tacCourseActivations) {
		this.tacCourseActivations = tacCourseActivations;
	}
	//@JsonManagedReference
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tacCourseMaster",cascade = CascadeType.ALL)
	public Set<TacCourseAudience> getTacCourseAudiences() {
		return this.tacCourseAudiences;
	}

	public void setTacCourseAudiences(Set<TacCourseAudience> tacCourseAudiences) {
		this.tacCourseAudiences = tacCourseAudiences;
	}

//	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tacCourseMaster")
//	public Set<TacActivityCourseLink> getTacActivityCourseLinks() {
//		return this.tacActivityCourseLinks;
//	}
//
//	public void setTacActivityCourseLinks(Set<TacActivityCourseLink> tacActivityCourseLinks) {
//		this.tacActivityCourseLinks = tacActivityCourseLinks;
//	}

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "TAC_ACTIVITY_COURSE_LINK",
			joinColumns = { @JoinColumn(name = "courseId") },
			inverseJoinColumns = { @JoinColumn(name = "activityId") })
	public Set<TacActivity> getTacActivities() {
		return tacActivities;
	}

	public void setTacActivities(Set<TacActivity> tacActivities) {
		this.tacActivities = tacActivities;
	}
	@JsonManagedReference
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tacCourseMaster",cascade = CascadeType.ALL)
	public Set<TacCourseOutcome> getTacCourseOutcomes() {
		return this.tacCourseOutcomes;
	}

	public void setTacCourseOutcomes(Set<TacCourseOutcome> tacCourseOutcomes) {
		this.tacCourseOutcomes = tacCourseOutcomes;
	}


	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tacCourseMaster",cascade = CascadeType.ALL)
	public Set<TacCourseDate> getTacCourseDates() {
		return this.tacCourseDates;
	}

	public void setTacCourseDates(Set<TacCourseDate> tacCourseDates) {
		this.tacCourseDates = tacCourseDates;
	}


	@Override
	public String toString() {
		return ":"+ this.courseId + "\n" + "Name"+ this.courseName + "\n" ;
	}
}
