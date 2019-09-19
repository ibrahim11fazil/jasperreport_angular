package qa.gov.customs.employee.entity;

import java.math.BigDecimal;
import java.sql.Clob;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

public class EmpExternalStudyMaster {
	
	private BigDecimal srlNo;
	private EmpUniverstity empUniverstity;
	private EmpMajor empMajor;
	private EmpEducationLevel empEducationLevel;
	private String jobId;
	private Date startDate;
	private Date endDate;
	private String evaluation;
	private BigDecimal TotalHours;
	private BigDecimal remainingHours;
	private Clob remarks;
	private String conductCertificate;
	private String status;
	private Set<EmpSelfstudyDetails> empSelfstudyDetailses = new HashSet<EmpSelfstudyDetails>(0);
	
	
	public EmpExternalStudyMaster(BigDecimal srlNo, EmpUniverstity empUniverstity, EmpMajor empMajor,
			EmpEducationLevel empEducationLevel, String jobId, Date startDate,Date endDate, String evaluation,
			BigDecimal remainingHours, Clob remarks, String conductCertificate, String status,
			Set<EmpSelfstudyDetails> empSelfstudyDetailses) {
		this.srlNo = srlNo;
		this.empUniverstity = empUniverstity;
		this.empMajor = empMajor;
		this.empEducationLevel = empEducationLevel;
		this.jobId = jobId;
		this.startDate = startDate;
		this.endDate = endDate;
		this.evaluation = evaluation;
		this.remainingHours = remainingHours;
		this.remarks = remarks;
		this.conductCertificate = conductCertificate;
		this.status = status;
		this.empSelfstudyDetailses = empSelfstudyDetailses;
	}
	
	
	
@Id
	
    @Column(name = "SRL_NO", unique = true, nullable = false, precision = 22, scale = 0)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "Id_Sequence")
    @SequenceGenerator(name = "Id_Sequence", sequenceName = "EMP_EXTERNALSTUDY_ID_SEQ",allocationSize = 1)
	public BigDecimal getSrlNo() {
		return srlNo;
	}
	public void setSrlNo(BigDecimal srlNo) {
		this.srlNo = srlNo;
	}
	public EmpUniverstity getEmpUniverstity() {
		return empUniverstity;
	}
	public void setEmpUniverstity(EmpUniverstity empUniverstity) {
		this.empUniverstity = empUniverstity;
	}
	public EmpMajor getEmpMajor() {
		return empMajor;
	}
	public void setEmpMajor(EmpMajor empMajor) {
		this.empMajor = empMajor;
	}
	public EmpEducationLevel getEmpEducationLevel() {
		return empEducationLevel;
	}
	public void setEmpEducationLevel(EmpEducationLevel empEducationLevel) {
		this.empEducationLevel = empEducationLevel;
	}
	public String getJobId() {
		return jobId;
	}
	public void setJobId(String jobId) {
		this.jobId = jobId;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public String getEvaluation() {
		return evaluation;
	}
	public void setEvaluation(String evaluation) {
		this.evaluation = evaluation;
	}
	public BigDecimal getTotalHours() {
		return TotalHours;
	}
	public void setTotalHours(BigDecimal totalHours) {
		TotalHours = totalHours;
	}
	public BigDecimal getRemainingHours() {
		return remainingHours;
	}
	public void setRemainingHours(BigDecimal remainingHours) {
		this.remainingHours = remainingHours;
	}
	public Clob getRemarks() {
		return remarks;
	}
	public void setRemarks(Clob remarks) {
		this.remarks = remarks;
	}
	public String getConductCertificate() {
		return conductCertificate;
	}
	public void setConductCertificate(String conductCertificate) {
		this.conductCertificate = conductCertificate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Set<EmpSelfstudyDetails> getEmpSelfstudyDetailses() {
		return empSelfstudyDetailses;
	}
	public void setEmpSelfstudyDetailses(Set<EmpSelfstudyDetails> empSelfstudyDetailses) {
		this.empSelfstudyDetailses = empSelfstudyDetailses;
	}
}
