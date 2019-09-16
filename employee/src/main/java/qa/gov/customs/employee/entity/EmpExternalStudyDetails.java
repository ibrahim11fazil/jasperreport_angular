package qa.gov.customs.employee.entity;

import java.math.BigDecimal;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

public class EmpExternalStudyDetails {
	private BigDecimal SRL_NO;
	private String SUBJECT_NAME; 
	private BigDecimal NO_OF_HOURS; 
	private Date END_DATE; 
	private String EVALUATION;
	private String GRADE;
	private BigDecimal REMAINING_HOURS;
	private String REMARKS;
	private EmpSelfstudyMaster empSelfstudyMaster;
	private BigDecimal DETAILS_SRL_NO;
	

	public BigDecimal getSRL_NO() {
		return SRL_NO;
	}
	public void setSRL_NO(BigDecimal sRL_NO) {
		SRL_NO = sRL_NO;
	}
	public String getSUBJECT_NAME() {
		return SUBJECT_NAME;
	}
	public void setSUBJECT_NAME(String sUBJECT_NAME) {
		SUBJECT_NAME = sUBJECT_NAME;
	}
	public BigDecimal getNO_OF_HOURS() {
		return NO_OF_HOURS;
	}
	public void setNO_OF_HOURS(BigDecimal nO_OF_HOURS) {
		NO_OF_HOURS = nO_OF_HOURS;
	}
	public Date getEND_DATE() {
		return END_DATE;
	}
	public void setEND_DATE(Date eND_DATE) {
		END_DATE = eND_DATE;
	}
	public String getEVALUATION() {
		return EVALUATION;
	}
	public void setEVALUATION(String eVALUATION) {
		EVALUATION = eVALUATION;
	}
	public String getGRADE() {
		return GRADE;
	}
	public void setGRADE(String gRADE) {
		GRADE = gRADE;
	}
	public BigDecimal getREMAINING_HOURS() {
		return REMAINING_HOURS;
	}
	public void setREMAINING_HOURS(BigDecimal rEMAINING_HOURS) {
		REMAINING_HOURS = rEMAINING_HOURS;
	}
	public String getREMARKS() {
		return REMARKS;
	}
	public void setREMARKS(String rEMARKS) {
		REMARKS = rEMARKS;
	}
	public EmpSelfstudyMaster getEmpSelfstudyMaster() {
		return empSelfstudyMaster;
	}
	public void setEmpSelfstudyMaster(EmpSelfstudyMaster empSelfstudyMaster) {
		this.empSelfstudyMaster = empSelfstudyMaster;
	}
	
@Id
	
    @Column(name = "DETAILS_SRL_NO", unique = true, nullable = false, precision = 22, scale = 0)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "Id_Sequence")
    @SequenceGenerator(name = "Id_Sequence", sequenceName = "EMP_EXTSTUDYDETAILS_ID_SEQ",allocationSize = 1)
	public BigDecimal getDETAILS_SRL_NO() {
		return DETAILS_SRL_NO;
	}
	public void setDETAILS_SRL_NO(BigDecimal dETAILS_SRL_NO) {
		DETAILS_SRL_NO = dETAILS_SRL_NO;
	}
}
