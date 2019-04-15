package qa.gov.customs.training.entity;
// Generated Apr 10, 2019 10:27:46 AM by Hibernate Tools 4.3.1.Final

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
	private Set<TacCourseAudience> tacCourseAudiences = new HashSet<TacCourseAudience>(0);

	public TacCourseTargetGroup() {
	}

	public TacCourseTargetGroup(BigDecimal targetId) {
		this.targetId = targetId;
	}

	public TacCourseTargetGroup(BigDecimal targetId, String targentName, Set<TacCourseAudience> tacCourseAudiences) {
		this.targetId = targetId;
		this.targentName = targentName;
		this.tacCourseAudiences = tacCourseAudiences;
	}

	@Id

	@Column(name = "TARGET_ID", unique = true, nullable = false, precision = 22, scale = 0)
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

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tacCourseTargetGroup")
	public Set<TacCourseAudience> getTacCourseAudiences() {
		return this.tacCourseAudiences;
	}

	public void setTacCourseAudiences(Set<TacCourseAudience> tacCourseAudiences) {
		this.tacCourseAudiences = tacCourseAudiences;
	}

}
