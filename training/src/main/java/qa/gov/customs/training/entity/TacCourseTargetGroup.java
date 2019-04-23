package qa.gov.customs.training.entity;
// Generated Apr 23, 2019 7:33:17 AM by Hibernate Tools 4.3.1.Final

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 * TacCourseTargetGroup generated by hbm2java
 */
@Entity
@Table(name = "TAC_COURSE_TARGET_GROUP", schema = "CUST_TAC")
public class TacCourseTargetGroup implements java.io.Serializable {

	private BigDecimal targetId;
	private String targentName;
	private String jobCode;
	private String positionCode;
	private String orgUnitCode;
	private String empGroupCode;
	private Set<TacCourseAudience> tacCourseAudiences = new HashSet<TacCourseAudience>(0);

	public TacCourseTargetGroup() {
	}

	public TacCourseTargetGroup(BigDecimal targetId) {
		this.targetId = targetId;
	}

	public TacCourseTargetGroup(BigDecimal targetId, String targentName, String jobCode, String positionCode,
			String orgUnitCode, String empGroupCode, Set<TacCourseAudience> tacCourseAudiences) {
		this.targetId = targetId;
		this.targentName = targentName;
		this.jobCode = jobCode;
		this.positionCode = positionCode;
		this.orgUnitCode = orgUnitCode;
		this.empGroupCode = empGroupCode;
		this.tacCourseAudiences = tacCourseAudiences;
	}

	@Id

	@Column(name = "TARGET_ID", unique = true, nullable = false, precision = 22, scale = 0)
	@GeneratedValue(strategy=GenerationType.SEQUENCE,  generator = "id_Sequence")
    @SequenceGenerator(name = "id_Sequence", sequenceName = "TAC_TARGET_SEQ")
	public BigDecimal getTargetId() {
		return this.targetId;
	}

	public void setTargetId(BigDecimal targetId) {
		this.targetId = targetId;
	}

	@Column(name = "TARGENT_NAME", length = 1000)
	public String getTargentName() {
		return this.targentName;
	}

	public void setTargentName(String targentName) {
		this.targentName = targentName;
	}

	@Column(name = "JOB_CODE", length = 20)
	public String getJobCode() {
		return this.jobCode;
	}

	public void setJobCode(String jobCode) {
		this.jobCode = jobCode;
	}

	@Column(name = "POSITION_CODE", length = 20)
	public String getPositionCode() {
		return this.positionCode;
	}

	public void setPositionCode(String positionCode) {
		this.positionCode = positionCode;
	}

	@Column(name = "ORG_UNIT_CODE", length = 20)
	public String getOrgUnitCode() {
		return this.orgUnitCode;
	}

	public void setOrgUnitCode(String orgUnitCode) {
		this.orgUnitCode = orgUnitCode;
	}

	@Column(name = "EMP_GROUP_CODE", length = 20)
	public String getEmpGroupCode() {
		return this.empGroupCode;
	}

	public void setEmpGroupCode(String empGroupCode) {
		this.empGroupCode = empGroupCode;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tacCourseTargetGroup")
	public Set<TacCourseAudience> getTacCourseAudiences() {
		return this.tacCourseAudiences;
	}

	public void setTacCourseAudiences(Set<TacCourseAudience> tacCourseAudiences) {
		this.tacCourseAudiences = tacCourseAudiences;
	}

}
