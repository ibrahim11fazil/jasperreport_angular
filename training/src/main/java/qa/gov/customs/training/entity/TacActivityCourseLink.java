//package qa.gov.customs.training.entity;
//// Generated Apr 23, 2019 7:33:17 AM by Hibernate Tools 4.3.1.Final
//
//import javax.persistence.AttributeOverride;
//import javax.persistence.AttributeOverrides;
//import javax.persistence.Column;
//import javax.persistence.EmbeddedId;
//import javax.persistence.Entity;
//import javax.persistence.FetchType;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//import javax.persistence.Table;
//
///**
// * TacActivityCourseLink generated by hbm2java
// */
//@Entity
//@Table(name = "TAC_ACTIVITY_COURSE_LINK", schema = "CUST_TAC")
//public class TacActivityCourseLink implements java.io.Serializable {
//
//	private TacActivityCourseLinkId id;
//	private TacActivity tacActivity;
//	private TacCourseMaster tacCourseMaster;
//
//	public TacActivityCourseLink() {
//	}
//
//	public TacActivityCourseLink(TacActivityCourseLinkId id, TacActivity tacActivity, TacCourseMaster tacCourseMaster) {
//		this.id = id;
//		this.tacActivity = tacActivity;
//		this.tacCourseMaster = tacCourseMaster;
//	}
//
//	@EmbeddedId
//
//	@AttributeOverrides({
//			@AttributeOverride(name = "activityId", column = @Column(name = "ACTIVITY_ID", nullable = false, precision = 22, scale = 0)),
//			@AttributeOverride(name = "courseId", column = @Column(name = "COURSE_ID", nullable = false, precision = 22, scale = 0)) })
//	public TacActivityCourseLinkId getId() {
//		return this.id;
//	}
//
//	public void setId(TacActivityCourseLinkId id) {
//		this.id = id;
//	}
//
//	@ManyToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name = "ACTIVITY_ID", nullable = false, insertable = false, updatable = false)
//	public TacActivity getTacActivity() {
//		return this.tacActivity;
//	}
//
//	public void setTacActivity(TacActivity tacActivity) {
//		this.tacActivity = tacActivity;
//	}
//
//	@ManyToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name = "COURSE_ID", nullable = false, insertable = false, updatable = false)
//	public TacCourseMaster getTacCourseMaster() {
//		return this.tacCourseMaster;
//	}
//
//	public void setTacCourseMaster(TacCourseMaster tacCourseMaster) {
//		this.tacCourseMaster = tacCourseMaster;
//	}
//
//}
