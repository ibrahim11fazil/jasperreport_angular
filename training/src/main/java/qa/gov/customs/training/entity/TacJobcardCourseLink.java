//package qa.gov.customs.training.entity;
//
//import java.math.BigDecimal;
//
//import javax.persistence.Entity;
//import javax.persistence.FetchType;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//import javax.persistence.Table;
//
//@Entity
//@Table(name ="TAC_JOBCARD_COURSE_LINK", schema = "CUST_TAC")
//public class TacJobcardCourseLink {
//	public TacJobcardCourseLink(BigDecimal jOBCARD_NO, BigDecimal cOURSE_ID, String mANDATORY_FLAG) {
//		super();
//		JOBCARD_NO = jOBCARD_NO;
//		COURSE_ID = cOURSE_ID;
//		MANDATORY_FLAG = mANDATORY_FLAG;
//	}
//	@Id
//	private BigDecimal JOBCARD_NO;
//	//@ManyToOne(fetch = FetchType.LAZY)
////	@JoinColumn(name = "JOBCARD_NO", nullable = false, insertable = false, updatable = false)
//	public BigDecimal getJOBCARD_NO() {
//		return JOBCARD_NO;
//	}
//	public void setJOBCARD_NO(BigDecimal jOBCARD_NO) {
//		JOBCARD_NO = jOBCARD_NO;
//	}
//	
//	public BigDecimal getCOURSE_ID() {
//		return COURSE_ID;
//	}
//	//@ManyToOne(fetch = FetchType.LAZY)
//	//@JoinColumn(name = "COURSE_ID", nullable = false, insertable = false, updatable = false)
//	public void setCOURSE_ID(BigDecimal cOURSE_ID) {
//		COURSE_ID = cOURSE_ID;
//	}
//	public String getMANDATORY_FLAG() {
//		return MANDATORY_FLAG;
//	}
//	public void setMANDATORY_FLAG(String mANDATORY_FLAG) {
//		MANDATORY_FLAG = mANDATORY_FLAG;
//	}
//	private BigDecimal COURSE_ID;
//	private String MANDATORY_FLAG;
//	
//
//}
