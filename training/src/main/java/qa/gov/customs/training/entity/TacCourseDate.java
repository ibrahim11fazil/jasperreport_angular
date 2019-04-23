package qa.gov.customs.training.entity;
// Generated Apr 23, 2019 7:33:17 AM by Hibernate Tools 4.3.1.Final

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
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
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * TacCourseDate generated by hbm2java
 */
@Entity
@Table(name = "TAC_COURSE_DATE", schema = "CUST_TAC")
public class TacCourseDate implements java.io.Serializable {

	private BigDecimal dateId;
	private TacCourseMaster tacCourseMaster;
	private Date courseDate;
	private BigDecimal status;
	private Set<TacCourseActivation> tacCourseActivations = new HashSet<TacCourseActivation>(0);

	public TacCourseDate() {
	}

	public TacCourseDate(BigDecimal dateId) {
		this.dateId = dateId;
	}

	public TacCourseDate(BigDecimal dateId, TacCourseMaster tacCourseMaster, Date courseDate, BigDecimal status,
			Set<TacCourseActivation> tacCourseActivations) {
		this.dateId = dateId;
		this.tacCourseMaster = tacCourseMaster;
		this.courseDate = courseDate;
		this.status = status;
		this.tacCourseActivations = tacCourseActivations;
	}

	@Id

	@Column(name = "DATE_ID", unique = true, nullable = false, precision = 22, scale = 0)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "id_Sequence")
    @SequenceGenerator(name = "id_Sequence", sequenceName = "TAC_DATE_SEQ")
	public BigDecimal getDateId() {
		return this.dateId;
	}

	public void setDateId(BigDecimal dateId) {
		this.dateId = dateId;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "COURSE_ID")
	public TacCourseMaster getTacCourseMaster() {
		return this.tacCourseMaster;
	}

	public void setTacCourseMaster(TacCourseMaster tacCourseMaster) {
		this.tacCourseMaster = tacCourseMaster;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "COURSE_DATE", length = 7)
	public Date getCourseDate() {
		return this.courseDate;
	}

	public void setCourseDate(Date courseDate) {
		this.courseDate = courseDate;
	}

	@Column(name = "STATUS", precision = 22, scale = 0)
	public BigDecimal getStatus() {
		return this.status;
	}

	public void setStatus(BigDecimal status) {
		this.status = status;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tacCourseDate")
	public Set<TacCourseActivation> getTacCourseActivations() {
		return this.tacCourseActivations;
	}

	public void setTacCourseActivations(Set<TacCourseActivation> tacCourseActivations) {
		this.tacCourseActivations = tacCourseActivations;
	}

}
