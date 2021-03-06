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
// * TacCourseInstructor generated by hbm2java
// */
//@Entity
//@Table(name = "TAC_COURSE_INSTRUCTOR", schema = "CUST_TAC")
//public class TacCourseInstructor implements java.io.Serializable {
//
//	private TacCourseInstructorId id;
//	private TacCourseActivation tacCourseActivation;
//	private TacInstructorMaster tacInstructorMaster;
//
//	public TacCourseInstructor() {
//	}
//
//	public TacCourseInstructor(TacCourseInstructorId id) {
//		this.id = id;
//	}
//
//	public TacCourseInstructor(TacCourseInstructorId id, TacCourseActivation tacCourseActivation,
//			TacInstructorMaster tacInstructorMaster) {
//		this.id = id;
//		this.tacCourseActivation = tacCourseActivation;
//		this.tacInstructorMaster = tacInstructorMaster;
//	}
//
//	@EmbeddedId
//
//	@AttributeOverrides({
//			@AttributeOverride(name = "activationId", column = @Column(name = "ACTIVATION_ID", precision = 22, scale = 0)),
//			@AttributeOverride(name = "instructorId", column = @Column(name = "INSTRUCTOR_ID", precision = 22, scale = 0)),
//			@AttributeOverride(name = "priority", column = @Column(name = "PRIORITY", precision = 22, scale = 0)) })
//	public TacCourseInstructorId getId() {
//		return this.id;
//	}
//
//	public void setId(TacCourseInstructorId id) {
//		this.id = id;
//	}
//
//	@ManyToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name = "ACTIVATION_ID", insertable = false, updatable = false)
//	public TacCourseActivation getTacCourseActivation() {
//		return this.tacCourseActivation;
//	}
//
//	public void setTacCourseActivation(TacCourseActivation tacCourseActivation) {
//		this.tacCourseActivation = tacCourseActivation;
//	}
//
//	@ManyToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name = "INSTRUCTOR_ID", insertable = false, updatable = false)
//	public TacInstructorMaster getTacInstructorMaster() {
//		return this.tacInstructorMaster;
//	}
//
//	public void setTacInstructorMaster(TacInstructorMaster tacInstructorMaster) {
//		this.tacInstructorMaster = tacInstructorMaster;
//	}
//
//}
