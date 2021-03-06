//package qa.gov.customs.training.entity;
//// Generated Apr 23, 2019 7:33:17 AM by Hibernate Tools 4.3.1.Final
//
//import java.math.BigDecimal;
//import javax.persistence.Column;
//import javax.persistence.Embeddable;
//
///**
// * TacCourseInstructorId generated by hbm2java
// */
//@Embeddable
//public class TacCourseInstructorId implements java.io.Serializable {
//
//	private BigDecimal activationId;
//	private BigDecimal instructorId;
//	private BigDecimal priority;
//
//	public TacCourseInstructorId() {
//	}
//
//	public TacCourseInstructorId(BigDecimal activationId, BigDecimal instructorId, BigDecimal priority) {
//		this.activationId = activationId;
//		this.instructorId = instructorId;
//		this.priority = priority;
//	}
//
//	@Column(name = "ACTIVATION_ID", precision = 22, scale = 0)
//	public BigDecimal getActivationId() {
//		return this.activationId;
//	}
//
//	public void setActivationId(BigDecimal activationId) {
//		this.activationId = activationId;
//	}
//
//	@Column(name = "INSTRUCTOR_ID", precision = 22, scale = 0)
//	public BigDecimal getInstructorId() {
//		return this.instructorId;
//	}
//
//	public void setInstructorId(BigDecimal instructorId) {
//		this.instructorId = instructorId;
//	}
//
//	@Column(name = "PRIORITY", precision = 22, scale = 0)
//	public BigDecimal getPriority() {
//		return this.priority;
//	}
//
//	public void setPriority(BigDecimal priority) {
//		this.priority = priority;
//	}
//
//	public boolean equals(Object other) {
//		if ((this == other))
//			return true;
//		if ((other == null))
//			return false;
//		if (!(other instanceof TacCourseInstructorId))
//			return false;
//		TacCourseInstructorId castOther = (TacCourseInstructorId) other;
//
//		return ((this.getActivationId() == castOther.getActivationId()) || (this.getActivationId() != null
//				&& castOther.getActivationId() != null && this.getActivationId().equals(castOther.getActivationId())))
//				&& ((this.getInstructorId() == castOther.getInstructorId())
//						|| (this.getInstructorId() != null && castOther.getInstructorId() != null
//								&& this.getInstructorId().equals(castOther.getInstructorId())))
//				&& ((this.getPriority() == castOther.getPriority()) || (this.getPriority() != null
//						&& castOther.getPriority() != null && this.getPriority().equals(castOther.getPriority())));
//	}
//
//	public int hashCode() {
//		int result = 17;
//
//		result = 37 * result + (getActivationId() == null ? 0 : this.getActivationId().hashCode());
//		result = 37 * result + (getInstructorId() == null ? 0 : this.getInstructorId().hashCode());
//		result = 37 * result + (getPriority() == null ? 0 : this.getPriority().hashCode());
//		return result;
//	}
//
//}
