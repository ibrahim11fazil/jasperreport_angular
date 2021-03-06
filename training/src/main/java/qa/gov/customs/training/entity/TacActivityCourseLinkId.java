//package qa.gov.customs.training.entity;
//// Generated Apr 23, 2019 7:33:17 AM by Hibernate Tools 4.3.1.Final
//
//import java.math.BigDecimal;
//import javax.persistence.Column;
//import javax.persistence.Embeddable;
//
///**
// * TacActivityCourseLinkId generated by hbm2java
// */
//@Embeddable
//public class TacActivityCourseLinkId implements java.io.Serializable {
//
//	private BigDecimal activityId;
//	private BigDecimal courseId;
//
//	public TacActivityCourseLinkId() {
//	}
//
//	public TacActivityCourseLinkId(BigDecimal activityId, BigDecimal courseId) {
//		this.activityId = activityId;
//		this.courseId = courseId;
//	}
//
//	@Column(name = "ACTIVITY_ID", nullable = false, precision = 22, scale = 0)
//	public BigDecimal getActivityId() {
//		return this.activityId;
//	}
//
//	public void setActivityId(BigDecimal activityId) {
//		this.activityId = activityId;
//	}
//
//	@Column(name = "COURSE_ID", nullable = false, precision = 22, scale = 0)
//	public BigDecimal getCourseId() {
//		return this.courseId;
//	}
//
//	public void setCourseId(BigDecimal courseId) {
//		this.courseId = courseId;
//	}
//
//	public boolean equals(Object other) {
//		if ((this == other))
//			return true;
//		if ((other == null))
//			return false;
//		if (!(other instanceof TacActivityCourseLinkId))
//			return false;
//		TacActivityCourseLinkId castOther = (TacActivityCourseLinkId) other;
//
//		return ((this.getActivityId() == castOther.getActivityId()) || (this.getActivityId() != null
//				&& castOther.getActivityId() != null && this.getActivityId().equals(castOther.getActivityId())))
//				&& ((this.getCourseId() == castOther.getCourseId()) || (this.getCourseId() != null
//						&& castOther.getCourseId() != null && this.getCourseId().equals(castOther.getCourseId())));
//	}
//
//	public int hashCode() {
//		int result = 17;
//
//		result = 37 * result + (getActivityId() == null ? 0 : this.getActivityId().hashCode());
//		result = 37 * result + (getCourseId() == null ? 0 : this.getCourseId().hashCode());
//		return result;
//	}
//
//}
