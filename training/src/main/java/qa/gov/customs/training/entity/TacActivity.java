package qa.gov.customs.training.entity;
// Generated Apr 23, 2019 7:33:17 AM by Hibernate Tools 4.3.1.Final


import qa.gov.customs.training.config.Auditable;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

/**
 * TacActivity generated by hbm2java
 */
@Entity
@Table(name = "TAC_ACTIVITY", schema = "CUST_TAC")
public class TacActivity extends Auditable<String> implements java.io.Serializable {

	private BigDecimal activityId;
//	private String userCreated;
//	private Date dateCreated;
//	private String userModified;
//	private Date dateModified;
	private String activityName;
	private BigDecimal activeFlag;
	//private Set<TacActivityCourseLink> tacActivityCourseLinks = new HashSet<TacActivityCourseLink>(0);
	//private Set<TacCourseMaster> tacCourseMasters =  new HashSet<TacCourseMaster>(0);
	private Set<TacCourseActivation> tacCourseActivations = new HashSet<TacCourseActivation>(0);

	public TacActivity() {
	}

	public TacActivity(BigDecimal activityId, String userCreated, Date dateCreated) {
		this.activityId = activityId;
		this.userCreated = userCreated;
		this.dateCreated = dateCreated;
	}

	public TacActivity(BigDecimal activityId, String userCreated, Date dateCreated, String userModified,
			Date dateModified, String activityName, BigDecimal activeFlag,
			Set<TacCourseMaster> tacCourseMasters , Set<TacCourseActivation> tacCourseActivations) {
		//Set<TacActivityCourseLink> tacActivityCourseLinks,
		this.activityId = activityId;
		this.userCreated = userCreated;
		this.dateCreated = dateCreated;
		this.userModified = userModified;
		this.dateModified = dateModified;
		this.activityName = activityName;
		this.activeFlag = activeFlag;
		//this.tacActivityCourseLinks = tacActivityCourseLinks;
		//this.tacCourseMasters = tacCourseMasters;
		this.tacCourseActivations = tacCourseActivations;
	}

	@Id
	@Column(name = "ACTIVITY_ID", unique = true, nullable = false, precision = 22, scale = 0)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "id_Sequence")
    @SequenceGenerator(name = "id_Sequence", sequenceName = "TAC_ACTIVITY_SEQ", allocationSize = 1)
	public BigDecimal getActivityId() {
		return this.activityId;
	}

	public void setActivityId(BigDecimal activityId) {
		this.activityId = activityId;
	}

//	@Column(name = "USER_CREATED", nullable = false, length = 20)
//	public String getUserCreated() {
//		return this.userCreated;
//	}
//
//	public void setUserCreated(String userCreated) {
//		this.userCreated = userCreated;
//	}
//
//	@Temporal(TemporalType.DATE)
//	@Column(name = "DATE_CREATED", nullable = false, length = 7)
//	public Date getDateCreated() {
//		return this.dateCreated;
//	}
//
//	public void setDateCreated(Date dateCreated) {
//		this.dateCreated = dateCreated;
//	}
//
//	@Column(name = "USER_MODIFIED", length = 20)
//	public String getUserModified() {
//		return this.userModified;
//	}
//
//	public void setUserModified(String userModified) {
//		this.userModified = userModified;
//	}
//
//	@Temporal(TemporalType.DATE)
//	@Column(name = "DATE_MODIFIED", length = 7)
//	public Date getDateModified() {
//		return this.dateModified;
//	}
//
//	public void setDateModified(Date dateModified) {
//		this.dateModified = dateModified;
//	}

	//@NotBlank(message = "Name is mandatory")
	@NotNull(message = "Name is mandatory")
	@Column(name = "ACTIVITY_NAME", length = 1000)
	public String getActivityName() {
		return this.activityName;
	}

	public void setActivityName(String activityName) {
		this.activityName = activityName;
	}

	@Column(name = "ACTIVE_FLAG", precision = 22, scale = 0)
	public BigDecimal getActiveFlag() {
		return this.activeFlag;
	}

	public void setActiveFlag(BigDecimal activeFlag) {
		this.activeFlag = activeFlag;
	}

//	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tacActivity")
//	public Set<TacActivityCourseLink> getTacActivityCourseLinks() {
//		return this.tacActivityCourseLinks;
//	}
//
//	public void setTacActivityCourseLinks(Set<TacActivityCourseLink> tacActivityCourseLinks) {
//		this.tacActivityCourseLinks = tacActivityCourseLinks;
//	}

//
//	@ManyToMany(mappedBy = "tacActivities",fetch =FetchType.EAGER)
//	public Set<TacCourseMaster> getTacCourseMasters() {
//		return tacCourseMasters;
//	}
//
//	public void setTacCourseMasters(Set<TacCourseMaster> tacCourseMasters) {
//		this.tacCourseMasters = tacCourseMasters;
//	}

//	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tacActivity")
//	public Set<TacCourseActivation> getTacCourseActivations() {
//		return this.tacCourseActivations;
//	}
//
//	public void setTacCourseActivations(Set<TacCourseActivation> tacCourseActivations) {
//		this.tacCourseActivations = tacCourseActivations;
//	}

}
