package qa.gov.customs.training.entity;
// Generated Apr 23, 2019 7:33:17 AM by Hibernate Tools 4.3.1.Final

import java.math.BigDecimal;
import java.sql.Blob;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

/**
 * TacInstructorMaster generated by hbm2java
 */
@Entity
@Table(name = "TAC_INSTRUCTOR_MASTER", schema = "CUST_TAC")
public class TacInstructorMaster implements java.io.Serializable {

	private BigDecimal instructorId;
	private BigDecimal typeFlag;
	private String jobId;
	private String name;
	private String department;
	private String jobTitle;
	private String ibanNo;
	private String companyName;
	private String qid;
	private String passportNo;
	private String phone;
	private String email;
	private String photo;
	private BigDecimal priority;
	//Many to many
	private Set<TacInstructorQualifications> tacInstructorQualificationses = new HashSet<TacInstructorQualifications>(0);
	//Many to many
	private Set<TacInstructorSubjects> tacInstructorSubjectses = new HashSet<TacInstructorSubjects>(0);
	//Many to many with priority
	private Set<TacCourseInstructor> tacCourseInstructors = new HashSet<TacCourseInstructor>(0);
	public TacInstructorMaster() {
	}



	public TacInstructorMaster(BigDecimal instructorId, String ibanNo) {
		this.instructorId = instructorId;
		this.ibanNo = ibanNo;
	}

	public TacInstructorMaster(BigDecimal instructorId, BigDecimal typeFlag, String jobId, String name,
			String department, String jobTitle, String ibanNo, String companyName, String qid, String passportNo,
			String phone, String email, String photo, BigDecimal priority,
			Set<TacInstructorQualifications> tacInstructorQualificationses,
			Set<TacCourseInstructor> tacCourseInstructors, Set<TacInstructorSubjects> tacInstructorSubjectses) {
		this.instructorId = instructorId;
		this.typeFlag = typeFlag;
		this.jobId = jobId;
		this.name = name;
		this.department = department;
		this.jobTitle = jobTitle;
		this.ibanNo = ibanNo;
		this.companyName = companyName;
		this.qid = qid;
		this.passportNo = passportNo;
		this.phone = phone;
		this.email = email;
		this.photo = photo;
		this.priority = priority;
		this.tacInstructorQualificationses = tacInstructorQualificationses;
		this.tacCourseInstructors = tacCourseInstructors;
		this.tacInstructorSubjectses = tacInstructorSubjectses;
	}

	@Id
	@Column(name = "INSTRUCTOR_ID", unique = true, nullable = false, precision = 22, scale = 0)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "id_Sequence")
    @SequenceGenerator(name = "id_Sequence", sequenceName = "TAC_INSTRUCTOR_SEQ",allocationSize = 1)
	public BigDecimal getInstructorId() {
		return this.instructorId;
	}

	public void setInstructorId(BigDecimal instructorId) {
		this.instructorId = instructorId;
	}

	@Column(name = "TYPE_FLAG", precision = 22, scale = 0)
	public BigDecimal getTypeFlag() {
		return this.typeFlag;
	}

	public void setTypeFlag(BigDecimal typeFlag) {
		this.typeFlag = typeFlag;
	}

	@Column(name = "JOB_ID", length = 20)
	public String getJobId() {
		return this.jobId;
	}

	public void setJobId(String jobId) {
		this.jobId = jobId;
	}

	@Column(name = "NAME", length = 20)
	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "DEPARTMENT", length = 20)
	public String getDepartment() {
		return this.department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	@Column(name = "JOB_TITLE", length = 20)
	public String getJobTitle() {
		return this.jobTitle;
	}

	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}

	@Column(name = "IBAN_NO", nullable = false, length = 20)
	public String getIbanNo() {
		return this.ibanNo;
	}

	public void setIbanNo(String ibanNo) {
		this.ibanNo = ibanNo;
	}

	@Column(name = "COMPANY_NAME", length = 20)
	public String getCompanyName() {
		return this.companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	@Column(name = "QID", length = 20)
	public String getQid() {
		return this.qid;
	}

	public void setQid(String qid) {
		this.qid = qid;
	}

	@Column(name = "PASSPORT_NO", length = 20)
	public String getPassportNo() {
		return this.passportNo;
	}

	public void setPassportNo(String passportNo) {
		this.passportNo = passportNo;
	}

	@Column(name = "PHONE", length = 20)
	public String getPhone() {
		return this.phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	@Column(name = "EMAIL", length = 20)
	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Column(name = "PHOTO")
	public String getPhoto() {
		return this.photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	@Column(name = "PRIORITY", precision = 22, scale = 0)
	public BigDecimal getPriority() {
		return this.priority;
	}

	public void setPriority(BigDecimal priority) {
		this.priority = priority;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tacInstructorMaster")
	public Set<TacInstructorQualifications> getTacInstructorQualificationses() {
		return this.tacInstructorQualificationses;
	}

	public void setTacInstructorQualificationses(Set<TacInstructorQualifications> tacInstructorQualificationses) {
		this.tacInstructorQualificationses = tacInstructorQualificationses;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tacInstructorMaster")
	public Set<TacCourseInstructor> getTacCourseInstructors() {
		return this.tacCourseInstructors;
	}

	public void setTacCourseInstructors(Set<TacCourseInstructor> tacCourseInstructors) {
		this.tacCourseInstructors = tacCourseInstructors;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "tacInstructorMaster")
	public Set<TacInstructorSubjects> getTacInstructorSubjectses() {
		return this.tacInstructorSubjectses;
	}

	public void setTacInstructorSubjectses(Set<TacInstructorSubjects> tacInstructorSubjectses) {
		this.tacInstructorSubjectses = tacInstructorSubjectses;
	}

	@Transient
	int start;

	@Transient
	int limit;

	@Transient
	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}
	@Transient
	public int getLimit() {
		return limit;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}
}
