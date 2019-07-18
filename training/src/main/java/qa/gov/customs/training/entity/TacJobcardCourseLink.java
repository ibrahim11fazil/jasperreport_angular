package qa.gov.customs.training.entity;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name ="TAC_JOBCARD_COURSE_LINK", schema = "CUST_TAC")
public class TacJobcardCourseLink {
	public TacJobcardCourseLink(BigDecimal jobcardNo, BigDecimal courseID, String mandatoryFlag) {
		super();
		this.jobcardNo = jobcardNo;
		this.courseID = courseID;
		this.mandatoryFlag = mandatoryFlag;
	}
	public BigDecimal getJobcardNo() {
		return jobcardNo;
	}
	public void setJobcardNo(BigDecimal jobcardNo) {
		this.jobcardNo = jobcardNo;
	}
	public BigDecimal getCourseID() {
		return courseID;
	}
	public void setCourseID(BigDecimal courseID) {
		this.courseID = courseID;
	}
	public String getMandatoryFlag() {
		return mandatoryFlag;
	}
	public void setMandatoryFlag(String mandatoryFlag) {
		this.mandatoryFlag = mandatoryFlag;
	}
	@Id
	private BigDecimal jobcardNo;
	//@ManyToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name = "JOBCARD_NO", nullable = false, insertable = false, updatable = false)
	
	//}
	//@ManyToOne(fetch = FetchType.LAZY)
	//@JoinColumn(name = "COURSE_ID", nullable = false, insertable = false, updatable = false)
	
	private BigDecimal courseID;
	private String mandatoryFlag;
	

}
