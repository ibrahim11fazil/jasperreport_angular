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
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * TacCommSubjects generated by hbm2java
 */
@Entity
@Table(name = "TAC_COMM_SUBJECTS", schema = "CUST_TAC")
public class TacCommSubjects implements java.io.Serializable {

	private BigDecimal subjectId;
	private String subjectName;
	private String userCreated;
	private Date dateCreated;
	private String userModified;
	private Date dateModified;
	private Set<TacInstructorSubjects> tacInstructorSubjectses = new HashSet<TacInstructorSubjects>(0);

	public TacCommSubjects() {
	}

	public TacCommSubjects(BigDecimal subjectId) {
		this.subjectId = subjectId;
	}

	public TacCommSubjects(BigDecimal subjectId, String subjectName, String userCreated, Date dateCreated,
			String userModified, Date dateModified, Set<TacInstructorSubjects> tacInstructorSubjectses) {
		this.subjectId = subjectId;
		this.subjectName = subjectName;
		this.userCreated = userCreated;
		this.dateCreated = dateCreated;
		this.userModified = userModified;
		this.dateModified = dateModified;
		this.tacInstructorSubjectses = tacInstructorSubjectses;
	}

	@Id

	@Column(name = "SUBJECT_ID", unique = true, nullable = false, precision = 22, scale = 0)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "id_Sequence")
    @SequenceGenerator(name = "id_Sequence", sequenceName = "TAC_SUBJECT_SEQ")
	public BigDecimal getSubjectId() {
		return this.subjectId;
	}

	public void setSubjectId(BigDecimal subjectId) {
		this.subjectId = subjectId;
	}

	@Column(name = "SUBJECT_NAME", length = 500)
	public String getSubjectName() {
		return this.subjectName;
	}

	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}

	@Column(name = "USER_CREATED", length = 50)
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

	@Column(name = "USER_MODIFIED", length = 50)
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

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tacCommSubjects")
	public Set<TacInstructorSubjects> getTacInstructorSubjectses() {
		return this.tacInstructorSubjectses;
	}

	public void setTacInstructorSubjectses(Set<TacInstructorSubjects> tacInstructorSubjectses) {
		this.tacInstructorSubjectses = tacInstructorSubjectses;
	}

}
