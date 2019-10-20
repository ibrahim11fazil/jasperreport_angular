package qa.gov.customs.training.entity;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "COURSE_ACTIVATION_DETAILS")
public class ActivationData {
    @Id
    @Column(name = "ACTIVATION_ID")
    private BigDecimal activationId;
    @Column(name = "COURSE_ID")
    private BigDecimal courseId;
    @Column(name = "COURSE_NAME")
    private String courseName;

    @Column(name = "DEPENDENT_ID")
    private BigDecimal BelongsTo;
    @Column(name = "DURATION")
    private BigDecimal duration;
    @Column(name = "DURATION_FLAG")
    private BigDecimal durationFlag;
    @Column(name = "DATE_ID")
    private BigDecimal dateId;
    @Column(name = "COURSE_DATE")
    private Date courseDate;
    @Column(name = "LOCATION_ID")
    private BigDecimal locationId;
    @Column(name = "LOCATION_NAME")
    private String locationName;
    @Column(name = "ROOM_ID")
    private BigDecimal roomID;
    @Column(name = "ROOM_NAME")
    private String roomName;
    @Column(name = "COORDINATOR_ID")
    private BigDecimal coordinator;
    @Column(name = "COST_INSTRUCTOR")
    private BigDecimal costInstructor;
    @Column(name = "COST_FOOD")
    private BigDecimal costFood;
    @Column(name = "COST_TRANSPORT")
    private BigDecimal costTransport;
    @Column(name = "COST_AIRTICKET")
    private BigDecimal costAirticket;
    @Column(name = "COST_HOSPITALITY")
    private BigDecimal costHospitality;
    @Column(name = "COST_GIFT")
    private BigDecimal costGift;
    @Column(name = "COST_VENUE")
    private BigDecimal costVenue;
    @Column(name = "COST_BONUS")
    private BigDecimal costBonus;
    @Column(name = "COST_TRANSLATION")
    private BigDecimal costTranslation;

    @Transient
    private List<TacInstructorMaster> instructors;

    public List<TacInstructorMaster> getInstructors() {
        return instructors;
    }

    public void setInstructors(List<TacInstructorMaster> instructors) {
        this.instructors = instructors;
    }

    public BigDecimal getDateId() {
        return dateId;
    }

    public void setDateId(BigDecimal dateId) {
        this.dateId = dateId;
    }

    public BigDecimal getActivationId() {
        return activationId;
    }

    public void setActivationId(BigDecimal activationId) {
        this.activationId = activationId;
    }

    public BigDecimal getBelongsTo() {
        return BelongsTo;
    }

    public void setBelongsTo(BigDecimal belongsTo) {
        BelongsTo = belongsTo;
    }

    public BigDecimal getDuration() {
        return duration;
    }

    public void setDuration(BigDecimal duration) {
        this.duration = duration;
    }

    public BigDecimal getDurationFlag() {
        return durationFlag;
    }

    public void setDurationFlag(BigDecimal durationFlag) {
        this.durationFlag = durationFlag;
    }

    public BigDecimal getCoordinator() {
        return coordinator;
    }

    public void setCoordinator(BigDecimal coordinator) {
        this.coordinator = coordinator;
    }

    public BigDecimal getCourseId() {
        return courseId;
    }

    public void setCourseId(BigDecimal courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public Date getCourseDate() {
        return courseDate;
    }

    public void setCourseDate(Date courseDate) {
        this.courseDate = courseDate;
    }

    public BigDecimal getLocationId() {
        return locationId;
    }

    public void setLocationId(BigDecimal locationId) {
        this.locationId = locationId;
    }

    public String getLocationName() {
        return locationName;
    }

    public void setLocationName(String locationName) {
        this.locationName = locationName;
    }

    public BigDecimal getRoomID() {
        return roomID;
    }

    public void setRoomID(BigDecimal roomID) {
        this.roomID = roomID;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    public BigDecimal getCostInstructor() {
        return costInstructor;
    }

    public void setCostInstructor(BigDecimal costInstructor) {
        this.costInstructor = costInstructor;
    }

    public BigDecimal getCostFood() {
        return costFood;
    }

    public void setCostFood(BigDecimal costFood) {
        this.costFood = costFood;
    }

    public BigDecimal getCostTransport() {
        return costTransport;
    }

    public void setCostTransport(BigDecimal costTransport) {
        this.costTransport = costTransport;
    }

    public BigDecimal getCostAirticket() {
        return costAirticket;
    }

    public void setCostAirticket(BigDecimal costAirticket) {
        this.costAirticket = costAirticket;
    }

    public BigDecimal getCostHospitality() {
        return costHospitality;
    }

    public void setCostHospitality(BigDecimal costHospitality) {
        this.costHospitality = costHospitality;
    }

    public BigDecimal getCostGift() {
        return costGift;
    }

    public void setCostGift(BigDecimal costGift) {
        this.costGift = costGift;
    }

    public BigDecimal getCostVenue() {
        return costVenue;
    }

    public void setCostVenue(BigDecimal costVenue) {
        this.costVenue = costVenue;
    }

    public BigDecimal getCostBonus() {
        return costBonus;
    }

    public void setCostBonus(BigDecimal costBonus) {
        this.costBonus = costBonus;
    }

    public BigDecimal getCostTranslation() {
        return costTranslation;
    }

    public void setCostTranslation(BigDecimal costTranslation) {
        this.costTranslation = costTranslation;
    }
}
