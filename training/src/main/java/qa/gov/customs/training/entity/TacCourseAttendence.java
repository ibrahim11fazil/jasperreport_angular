package qa.gov.customs.training.entity;
// Generated Apr 23, 2019 7:33:17 AM by Hibernate Tools 4.3.1.Final

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

/**
 * TacCourseAttendence generated by hbm2java
 */
@Entity
@Table(name = "TAC_COURSE_ATTENDENCE", schema = "CUST_TAC")
public class TacCourseAttendence implements java.io.Serializable {

	private BigDecimal attendenceId;
	//private TacCourseAttendenceId id;
	private TacCourseAttendees tacCourseAttendees;
	private Date attendanceDate;
	private BigDecimal attendanceFlag;



	public TacCourseAttendence() {
	}

	public TacCourseAttendence(BigDecimal attendenceId, TacCourseAttendees tacCourseAttendees,Date attendanceDate,BigDecimal attendanceFlag) {
		this.attendenceId = attendenceId;
		this.tacCourseAttendees = tacCourseAttendees;
		this.attendanceDate=attendanceDate;
		this.attendanceFlag=attendanceFlag;
	}

	@Id

	@Column(name = "ATTENDANCE_ID", unique = true, nullable = false, precision = 22, scale = 0)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "id_Sequence")
	@SequenceGenerator(name = "id_Sequence", sequenceName = "TAC_ATTENDENCE_SEQ",allocationSize = 1)

	public BigDecimal getAttendenceId() {
		return attendenceId;
	}

	public void setAttendenceId(BigDecimal attendenceId) {
		this.attendenceId = attendenceId;
	}
//	@EmbeddedId
//
//	@AttributeOverrides({
//			@AttributeOverride(name = "attendanceId", column = @Column(name = "ATTENDANCE_ID", nullable = false, precision = 22, scale = 0)),
//			@AttributeOverride(name = "courseDate", column = @Column(name = "COURSE_DATE", length = 7)),
//			@AttributeOverride(name = "attendanceFlag", column = @Column(name = "ATTENDANCE_FLAG", nullable = false, precision = 22, scale = 0)),
//			@AttributeOverride(name = "remark", column = @Column(name = "REMARK")) })
//	public TacCourseAttendenceId getId() {
//		return this.id;
//	}
//
//	public void setId(TacCourseAttendenceId id) {
//		this.id = id;
//	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ATTENDEES_ID", nullable = false, insertable = false, updatable = false)
	public TacCourseAttendees getTacCourseAttendees() {
		return this.tacCourseAttendees;
	}

	public void setTacCourseAttendees(TacCourseAttendees tacCourseAttendees) {
		this.tacCourseAttendees = tacCourseAttendees;
	}


    public Date getAttendanceDate() {
        return attendanceDate;
    }

    public void setAttendanceDate(Date attendanceDate) {
        this.attendanceDate = attendanceDate;
    }

    public BigDecimal getAttendanceFlag() {
        return attendanceFlag;
    }

    public void setAttendanceFlag(BigDecimal attendanceFlag) {
        this.attendanceFlag = attendanceFlag;
    }
}
