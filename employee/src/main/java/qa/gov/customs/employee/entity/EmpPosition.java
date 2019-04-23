package qa.gov.customs.employee.entity;
// Generated Apr 23, 2019 12:58:10 PM by Hibernate Tools 4.3.1.Final

import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * EmpPosition generated by hbm2java
 */
@Entity
@Table(name = "EMP_POSITION", schema = "CUST_EMPLOYEE")
public class EmpPosition implements java.io.Serializable {

	private String positionCode;
	private String positionDescEn;
	private String positionDescAr;
	private Set<EmpEmployeeMaster> empEmployeeMasters = new HashSet<EmpEmployeeMaster>(0);

	public EmpPosition() {
	}

	public EmpPosition(String positionCode) {
		this.positionCode = positionCode;
	}

	public EmpPosition(String positionCode, String positionDescEn, String positionDescAr,
			Set<EmpEmployeeMaster> empEmployeeMasters) {
		this.positionCode = positionCode;
		this.positionDescEn = positionDescEn;
		this.positionDescAr = positionDescAr;
		this.empEmployeeMasters = empEmployeeMasters;
	}

	@Id

	@Column(name = "POSITION_CODE", unique = true, nullable = false, length = 20)
	public String getPositionCode() {
		return this.positionCode;
	}

	public void setPositionCode(String positionCode) {
		this.positionCode = positionCode;
	}

	@Column(name = "POSITION_DESC_EN", length = 200)
	public String getPositionDescEn() {
		return this.positionDescEn;
	}

	public void setPositionDescEn(String positionDescEn) {
		this.positionDescEn = positionDescEn;
	}

	@Column(name = "POSITION_DESC_AR", length = 200)
	public String getPositionDescAr() {
		return this.positionDescAr;
	}

	public void setPositionDescAr(String positionDescAr) {
		this.positionDescAr = positionDescAr;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "empPosition")
	public Set<EmpEmployeeMaster> getEmpEmployeeMasters() {
		return this.empEmployeeMasters;
	}

	public void setEmpEmployeeMasters(Set<EmpEmployeeMaster> empEmployeeMasters) {
		this.empEmployeeMasters = empEmployeeMasters;
	}

}
