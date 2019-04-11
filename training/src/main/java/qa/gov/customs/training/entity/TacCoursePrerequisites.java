package qa.gov.customs.training.entity;
// Generated Apr 10, 2019 10:27:46 AM by Hibernate Tools 4.3.1.Final

import java.math.BigDecimal;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * TacCoursePrerequisites generated by hbm2java
 */
@Entity
@Table(name = "TAC_COURSE_PREREQUISITES", schema = "CUST_TAC")
public class TacCoursePrerequisites implements java.io.Serializable {

	private BigDecimal prerequisitesId;
	private TacCourseMaster tacCourseMaster;
	private String description;

	public TacCoursePrerequisites() {
	}

	public TacCoursePrerequisites(BigDecimal prerequisitesId) {
		this.prerequisitesId = prerequisitesId;
	}

	public TacCoursePrerequisites(BigDecimal prerequisitesId, TacCourseMaster tacCourseMaster, String description) {
		this.prerequisitesId = prerequisitesId;
		this.tacCourseMaster = tacCourseMaster;
		this.description = description;
	}

	@Id

	@Column(name = "PREREQUISITES_ID", unique = true, nullable = false, precision = 22, scale = 0)
	public BigDecimal getPrerequisitesId() {
		return this.prerequisitesId;
	}

	public void setPrerequisitesId(BigDecimal prerequisitesId) {
		this.prerequisitesId = prerequisitesId;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "COURSE_ID")
	public TacCourseMaster getTacCourseMaster() {
		return this.tacCourseMaster;
	}

	public void setTacCourseMaster(TacCourseMaster tacCourseMaster) {
		this.tacCourseMaster = tacCourseMaster;
	}

	@Column(name = "DESCRIPTION", length = 2000)
	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
