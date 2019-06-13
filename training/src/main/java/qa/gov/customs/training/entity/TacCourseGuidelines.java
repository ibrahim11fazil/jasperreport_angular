package qa.gov.customs.training.entity;
// Generated Apr 23, 2019 7:33:17 AM by Hibernate Tools 4.3.1.Final

import java.math.BigDecimal;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

/**
 * TacCourseGuidelines generated by hbm2java
 */
@Entity
@Table(name = "TAC_COURSE_GUIDELINES", schema = "CUST_TAC")
public class TacCourseGuidelines implements java.io.Serializable {

	private BigDecimal guidelineId;
	private TacCourseMaster tacCourseMaster;
	private String description;

	public TacCourseGuidelines() {
	}

	public TacCourseGuidelines(BigDecimal guidelineId) {
		this.guidelineId = guidelineId;
	}

	public TacCourseGuidelines(BigDecimal guidelineId, TacCourseMaster tacCourseMaster, String description) {
		this.guidelineId = guidelineId;
		this.tacCourseMaster = tacCourseMaster;
		this.description = description;
	}

	@Id
	@Column(name = "GUIDELINE_ID", unique = true, nullable = false, precision = 22, scale = 0)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "id_Sequence")
    @SequenceGenerator(name = "id_Sequence", sequenceName = "TAC_GUIDELINES_SEQ",allocationSize = 1)
	public BigDecimal getGuidelineId() {
		return this.guidelineId;
	}

	public void setGuidelineId(BigDecimal guidelineId) {
		this.guidelineId = guidelineId;
	}
	@JsonBackReference
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
