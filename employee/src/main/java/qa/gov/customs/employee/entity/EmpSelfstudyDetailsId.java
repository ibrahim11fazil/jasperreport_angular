package qa.gov.customs.employee.entity;
// Generated Apr 23, 2019 12:58:10 PM by Hibernate Tools 4.3.1.Final

import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Embeddable;

/**
 * EmpSelfstudyDetailsId generated by hbm2java
 */
@Embeddable
public class EmpSelfstudyDetailsId implements java.io.Serializable {

	private BigDecimal srlNo;
	private String subjectName;
	private BigDecimal noOfHours;
	private Date endDate;
	private String evaluation;
	private String grade;
	private BigDecimal remainingHours;
	private String remarks;

	public EmpSelfstudyDetailsId() {
	}

	public EmpSelfstudyDetailsId(BigDecimal srlNo) {
		this.srlNo = srlNo;
	}

	public EmpSelfstudyDetailsId(BigDecimal srlNo, String subjectName, BigDecimal noOfHours, Date endDate,
			String evaluation, String grade, BigDecimal remainingHours, String remarks) {
		this.srlNo = srlNo;
		this.subjectName = subjectName;
		this.noOfHours = noOfHours;
		this.endDate = endDate;
		this.evaluation = evaluation;
		this.grade = grade;
		this.remainingHours = remainingHours;
		this.remarks = remarks;
	}

	@Column(name = "SRL_NO", nullable = false, precision = 22, scale = 0)
	public BigDecimal getSrlNo() {
		return this.srlNo;
	}

	public void setSrlNo(BigDecimal srlNo) {
		this.srlNo = srlNo;
	}

	@Column(name = "SUBJECT_NAME", length = 200)
	public String getSubjectName() {
		return this.subjectName;
	}

	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}

	@Column(name = "NO_OF_HOURS", precision = 22, scale = 0)
	public BigDecimal getNoOfHours() {
		return this.noOfHours;
	}

	public void setNoOfHours(BigDecimal noOfHours) {
		this.noOfHours = noOfHours;
	}

	@Column(name = "END_DATE", length = 7)
	public Date getEndDate() {
		return this.endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	@Column(name = "EVALUATION", length = 200)
	public String getEvaluation() {
		return this.evaluation;
	}

	public void setEvaluation(String evaluation) {
		this.evaluation = evaluation;
	}

	@Column(name = "GRADE", length = 200)
	public String getGrade() {
		return this.grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	@Column(name = "REMAINING_HOURS", precision = 22, scale = 0)
	public BigDecimal getRemainingHours() {
		return this.remainingHours;
	}

	public void setRemainingHours(BigDecimal remainingHours) {
		this.remainingHours = remainingHours;
	}

	@Column(name = "REMARKS", length = 20)
	public String getRemarks() {
		return this.remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof EmpSelfstudyDetailsId))
			return false;
		EmpSelfstudyDetailsId castOther = (EmpSelfstudyDetailsId) other;

		return ((this.getSrlNo() == castOther.getSrlNo()) || (this.getSrlNo() != null && castOther.getSrlNo() != null
				&& this.getSrlNo().equals(castOther.getSrlNo())))
				&& ((this.getSubjectName() == castOther.getSubjectName())
						|| (this.getSubjectName() != null && castOther.getSubjectName() != null
								&& this.getSubjectName().equals(castOther.getSubjectName())))
				&& ((this.getNoOfHours() == castOther.getNoOfHours()) || (this.getNoOfHours() != null
						&& castOther.getNoOfHours() != null && this.getNoOfHours().equals(castOther.getNoOfHours())))
				&& ((this.getEndDate() == castOther.getEndDate()) || (this.getEndDate() != null
						&& castOther.getEndDate() != null && this.getEndDate().equals(castOther.getEndDate())))
				&& ((this.getEvaluation() == castOther.getEvaluation()) || (this.getEvaluation() != null
						&& castOther.getEvaluation() != null && this.getEvaluation().equals(castOther.getEvaluation())))
				&& ((this.getGrade() == castOther.getGrade()) || (this.getGrade() != null
						&& castOther.getGrade() != null && this.getGrade().equals(castOther.getGrade())))
				&& ((this.getRemainingHours() == castOther.getRemainingHours())
						|| (this.getRemainingHours() != null && castOther.getRemainingHours() != null
								&& this.getRemainingHours().equals(castOther.getRemainingHours())))
				&& ((this.getRemarks() == castOther.getRemarks()) || (this.getRemarks() != null
						&& castOther.getRemarks() != null && this.getRemarks().equals(castOther.getRemarks())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result + (getSrlNo() == null ? 0 : this.getSrlNo().hashCode());
		result = 37 * result + (getSubjectName() == null ? 0 : this.getSubjectName().hashCode());
		result = 37 * result + (getNoOfHours() == null ? 0 : this.getNoOfHours().hashCode());
		result = 37 * result + (getEndDate() == null ? 0 : this.getEndDate().hashCode());
		result = 37 * result + (getEvaluation() == null ? 0 : this.getEvaluation().hashCode());
		result = 37 * result + (getGrade() == null ? 0 : this.getGrade().hashCode());
		result = 37 * result + (getRemainingHours() == null ? 0 : this.getRemainingHours().hashCode());
		result = 37 * result + (getRemarks() == null ? 0 : this.getRemarks().hashCode());
		return result;
	}

}
