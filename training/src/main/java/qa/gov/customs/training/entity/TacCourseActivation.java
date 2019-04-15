package qa.gov.customs.training.entity;
// Generated Apr 10, 2019 10:27:46 AM by Hibernate Tools 4.3.1.Final

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
 * TacCourseActivation generated by hbm2java
 */
@Entity
@Table(name = "TAC_COURSE_ACTIVATION", schema = "CUST_TAC")
public class TacCourseActivation implements java.io.Serializable {

	private BigDecimal activationId;
	private TacActivity tacActivity;
	private TacCourseMaster tacCourseMaster;
	private TacCourseRoom tacCourseRoom;
	private TacCourseDate tacCourseDate;
	private BigDecimal dependentId;
	private Date activationDate;
	private String coordinatorId;
	private BigDecimal costInstructor;
	private BigDecimal costFood;
	private BigDecimal costTransport;
	private BigDecimal costAirticket;
	private BigDecimal costHospitality;
	private BigDecimal costGift;
	private BigDecimal costVenue;
	private BigDecimal costBonus;
	private BigDecimal costTranslation;
	private String userCreated;
	private Date dateCreated;
	private String userModified;
	private Date dateModified;
	private BigDecimal status;
	private Set<TacCourseAttendees> tacCourseAttendeeses = new HashSet<TacCourseAttendees>(0);
	private Set<TacCourseInstructor> tacCourseInstructors = new HashSet<TacCourseInstructor>(0);

	public TacCourseActivation() {
	}

	public TacCourseActivation(BigDecimal activationId, TacCourseMaster tacCourseMaster) {
		this.activationId = activationId;
		this.tacCourseMaster = tacCourseMaster;
	}

	public TacCourseActivation(BigDecimal activationId, TacActivity tacActivity, TacCourseMaster tacCourseMaster,
			TacCourseRoom tacCourseRoom, TacCourseDate tacCourseDate, BigDecimal dependentId, Date activationDate,
			String coordinatorId, BigDecimal costInstructor, BigDecimal costFood, BigDecimal costTransport,
			BigDecimal costAirticket, BigDecimal costHospitality, BigDecimal costGift, BigDecimal costVenue,
			BigDecimal costBonus, BigDecimal costTranslation, String userCreated, Date dateCreated, String userModified,
			Date dateModified, BigDecimal status, Set<TacCourseAttendees> tacCourseAttendeeses,
			Set<TacCourseInstructor> tacCourseInstructors) {
		this.activationId = activationId;
		this.tacActivity = tacActivity;
		this.tacCourseMaster = tacCourseMaster;
		this.tacCourseRoom = tacCourseRoom;
		this.tacCourseDate = tacCourseDate;
		this.dependentId = dependentId;
		this.activationDate = activationDate;
		this.coordinatorId = coordinatorId;
		this.costInstructor = costInstructor;
		this.costFood = costFood;
		this.costTransport = costTransport;
		this.costAirticket = costAirticket;
		this.costHospitality = costHospitality;
		this.costGift = costGift;
		this.costVenue = costVenue;
		this.costBonus = costBonus;
		this.costTranslation = costTranslation;
		this.userCreated = userCreated;
		this.dateCreated = dateCreated;
		this.userModified = userModified;
		this.dateModified = dateModified;
		this.status = status;
		this.tacCourseAttendeeses = tacCourseAttendeeses;
		this.tacCourseInstructors = tacCourseInstructors;
	}

	@Id

	@Column(name = "ACTIVATION_ID", unique = true, nullable = false, precision = 22, scale = 0)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "id_Sequence")
    @SequenceGenerator(name = "id_Sequence", sequenceName = "TAC_ACTIVATION_SEQ")
	public BigDecimal getActivationId() {
		return this.activationId;
	}

	public void setActivationId(BigDecimal activationId) {
		this.activationId = activationId;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ACTIVITY_ID")
	public TacActivity getTacActivity() {
		return this.tacActivity;
	}

	public void setTacActivity(TacActivity tacActivity) {
		this.tacActivity = tacActivity;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "COURSE_ID", nullable = false)
	public TacCourseMaster getTacCourseMaster() {
		return this.tacCourseMaster;
	}

	public void setTacCourseMaster(TacCourseMaster tacCourseMaster) {
		this.tacCourseMaster = tacCourseMaster;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ROOM_ID")
	public TacCourseRoom getTacCourseRoom() {
		return this.tacCourseRoom;
	}

	public void setTacCourseRoom(TacCourseRoom tacCourseRoom) {
		this.tacCourseRoom = tacCourseRoom;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "DATE_ID")
	public TacCourseDate getTacCourseDate() {
		return this.tacCourseDate;
	}

	public void setTacCourseDate(TacCourseDate tacCourseDate) {
		this.tacCourseDate = tacCourseDate;
	}

	@Column(name = "DEPENDENT_ID", precision = 22, scale = 0)
	public BigDecimal getDependentId() {
		return this.dependentId;
	}

	public void setDependentId(BigDecimal dependentId) {
		this.dependentId = dependentId;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "ACTIVATION_DATE", length = 7)
	public Date getActivationDate() {
		return this.activationDate;
	}

	public void setActivationDate(Date activationDate) {
		this.activationDate = activationDate;
	}

	@Column(name = "COORDINATOR_ID", length = 20)
	public String getCoordinatorId() {
		return this.coordinatorId;
	}

	public void setCoordinatorId(String coordinatorId) {
		this.coordinatorId = coordinatorId;
	}

	@Column(name = "COST_INSTRUCTOR", precision = 22, scale = 0)
	public BigDecimal getCostInstructor() {
		return this.costInstructor;
	}

	public void setCostInstructor(BigDecimal costInstructor) {
		this.costInstructor = costInstructor;
	}

	@Column(name = "COST_FOOD", precision = 22, scale = 0)
	public BigDecimal getCostFood() {
		return this.costFood;
	}

	public void setCostFood(BigDecimal costFood) {
		this.costFood = costFood;
	}

	@Column(name = "COST_TRANSPORT", precision = 22, scale = 0)
	public BigDecimal getCostTransport() {
		return this.costTransport;
	}

	public void setCostTransport(BigDecimal costTransport) {
		this.costTransport = costTransport;
	}

	@Column(name = "COST_AIRTICKET", precision = 22, scale = 0)
	public BigDecimal getCostAirticket() {
		return this.costAirticket;
	}

	public void setCostAirticket(BigDecimal costAirticket) {
		this.costAirticket = costAirticket;
	}

	@Column(name = "COST_HOSPITALITY", precision = 22, scale = 0)
	public BigDecimal getCostHospitality() {
		return this.costHospitality;
	}

	public void setCostHospitality(BigDecimal costHospitality) {
		this.costHospitality = costHospitality;
	}

	@Column(name = "COST_GIFT", precision = 22, scale = 0)
	public BigDecimal getCostGift() {
		return this.costGift;
	}

	public void setCostGift(BigDecimal costGift) {
		this.costGift = costGift;
	}

	@Column(name = "COST_VENUE", precision = 22, scale = 0)
	public BigDecimal getCostVenue() {
		return this.costVenue;
	}

	public void setCostVenue(BigDecimal costVenue) {
		this.costVenue = costVenue;
	}

	@Column(name = "COST_BONUS", precision = 22, scale = 0)
	public BigDecimal getCostBonus() {
		return this.costBonus;
	}

	public void setCostBonus(BigDecimal costBonus) {
		this.costBonus = costBonus;
	}

	@Column(name = "COST_TRANSLATION", precision = 22, scale = 0)
	public BigDecimal getCostTranslation() {
		return this.costTranslation;
	}

	public void setCostTranslation(BigDecimal costTranslation) {
		this.costTranslation = costTranslation;
	}

	@Column(name = "USER_CREATED", length = 20)
	public String getUserCreated() {
		return this.userCreated;
	}

	public void setUserCreated(String userCreated) {
		this.userCreated = userCreated;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "DATE_CREATED", length = 7)
	public Date getDateCreated() {
		return this.dateCreated;
	}

	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}

	@Column(name = "USER_MODIFIED", length = 20)
	public String getUserModified() {
		return this.userModified;
	}

	public void setUserModified(String userModified) {
		this.userModified = userModified;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "DATE_MODIFIED", length = 7)
	public Date getDateModified() {
		return this.dateModified;
	}

	public void setDateModified(Date dateModified) {
		this.dateModified = dateModified;
	}

	@Column(name = "STATUS", precision = 22, scale = 0)
	public BigDecimal getStatus() {
		return this.status;
	}

	public void setStatus(BigDecimal status) {
		this.status = status;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tacCourseActivation")
	public Set<TacCourseAttendees> getTacCourseAttendeeses() {
		return this.tacCourseAttendeeses;
	}

	public void setTacCourseAttendeeses(Set<TacCourseAttendees> tacCourseAttendeeses) {
		this.tacCourseAttendeeses = tacCourseAttendeeses;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tacCourseActivation")
	public Set<TacCourseInstructor> getTacCourseInstructors() {
		return this.tacCourseInstructors;
	}

	public void setTacCourseInstructors(Set<TacCourseInstructor> tacCourseInstructors) {
		this.tacCourseInstructors = tacCourseInstructors;
	}

}
