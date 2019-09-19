package qa.gov.customs.employee.models;

import java.math.BigDecimal;
import java.sql.Clob;
import java.util.Date;

import qa.gov.customs.employee.entity.EmpEducationLevel;
import qa.gov.customs.employee.entity.EmpMajor;
import qa.gov.customs.employee.entity.EmpSelfstudyMaster;
import qa.gov.customs.employee.entity.EmpUniverstity;

public class empSelfStudyRecord {
	
	private String universityNameEn;
	private String eniversityNameAr;
	private String majorDescAr;
	private String majorDescEn;
	private String educationLevelDescEn;
	private String educationLevelDescAr;
	private String jobId;
	private String status;
	private String SUBJECT_NAME; 
	private Date END_DATE;
	public String getUniversityNameEn() {
		return universityNameEn;
	}
	public void setUniversityNameEn(String universityNameEn) {
		this.universityNameEn = universityNameEn;
	}
	public String getEniversityNameAr() {
		return eniversityNameAr;
	}
	public void setEniversityNameAr(String eniversityNameAr) {
		this.eniversityNameAr = eniversityNameAr;
	}
	public String getMajorDescAr() {
		return majorDescAr;
	}
	public void setMajorDescAr(String majorDescAr) {
		this.majorDescAr = majorDescAr;
	}
	public String getMajorDescEn() {
		return majorDescEn;
	}
	public void setMajorDescEn(String majorDescEn) {
		this.majorDescEn = majorDescEn;
	}
	public String getEducationLevelDescEn() {
		return educationLevelDescEn;
	}
	public void setEducationLevelDescEn(String educationLevelDescEn) {
		this.educationLevelDescEn = educationLevelDescEn;
	}
	public String getEducationLevelDescAr() {
		return educationLevelDescAr;
	}
	public void setEducationLevelDescAr(String educationLevelDescAr) {
		this.educationLevelDescAr = educationLevelDescAr;
	}
	public String getJobId() {
		return jobId;
	}
	public void setJobId(String jobId) {
		this.jobId = jobId;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getSUBJECT_NAME() {
		return SUBJECT_NAME;
	}
	public void setSUBJECT_NAME(String sUBJECT_NAME) {
		SUBJECT_NAME = sUBJECT_NAME;
	}
	public Date getEND_DATE() {
		return END_DATE;
	}
	public void setEND_DATE(Date eND_DATE) {
		END_DATE = eND_DATE;
	} 
	
}
