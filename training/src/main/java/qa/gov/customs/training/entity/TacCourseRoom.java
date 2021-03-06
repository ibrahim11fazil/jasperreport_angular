package qa.gov.customs.training.entity;
// Generated Apr 23, 2019 7:33:17 AM by Hibernate Tools 4.3.1.Final


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

/**
 * TacCourseRoom generated by hbm2java
 */
@Entity
@Table(name = "TAC_COURSE_ROOM", schema = "CUST_TAC")
public class TacCourseRoom implements java.io.Serializable {

    private BigDecimal roomId;
    private TacCourseLocation tacCourseLocation;
    private String roomName;
    private Set<TacCourseActivation> tacCourseActivations = new HashSet<TacCourseActivation>(0);

    public TacCourseRoom() {
    }

    public TacCourseRoom(BigDecimal roomId) {
        this.roomId = roomId;
    }

    public TacCourseRoom(BigDecimal roomId, TacCourseLocation tacCourseLocation, String roomName,
                         Set<TacCourseActivation> tacCourseActivations) {
        this.roomId = roomId;
        this.tacCourseLocation = tacCourseLocation;
        this.roomName = roomName;
        this.tacCourseActivations = tacCourseActivations;
    }

    @Id

    @Column(name = "ROOM_ID", unique = true, nullable = false, precision = 22, scale = 0)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_Sequence")
    @SequenceGenerator(name = "id_Sequence", sequenceName = "TAC_ROOM_SEQ", allocationSize = 1)
    public BigDecimal getRoomId() {
        return this.roomId;
    }

    public void setRoomId(BigDecimal roomId) {
        this.roomId = roomId;
    }

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "LOCATION_ID")
    public TacCourseLocation getTacCourseLocation() {
        return this.tacCourseLocation;
    }

    public void setTacCourseLocation(TacCourseLocation tacCourseLocation) {
        this.tacCourseLocation = tacCourseLocation;
    }

    @Column(name = "ROOM_NAME", length = 250)
    public String getRoomName() {
        return this.roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    //@JsonManagedReference(value="room")
    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "tacCourseRoom")
    public Set<TacCourseActivation> getTacCourseActivations() {
        return this.tacCourseActivations;
    }

    public void setTacCourseActivations(Set<TacCourseActivation> tacCourseActivations) {
        this.tacCourseActivations = tacCourseActivations;
    }

}
