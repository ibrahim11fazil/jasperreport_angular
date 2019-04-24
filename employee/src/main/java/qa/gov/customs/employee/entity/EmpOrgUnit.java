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
 * EmpOrgUnit generated by hbm2java
 */
@Entity
@Table(name = "EMP_ORG_UNIT", schema = "CUST_EMPLOYEE")
public class EmpOrgUnit implements java.io.Serializable {

	private String orgUnitCode;
	private String orgUnitDescEn;
	private String orgUnitDescAr;
	private Set<EmpEmployeeMaster> empEmployeeMasters = new HashSet<EmpEmployeeMaster>(0);

	public EmpOrgUnit() {
	}

	public EmpOrgUnit(String orgUnitCode) {
		this.orgUnitCode = orgUnitCode;
	}

	public EmpOrgUnit(String orgUnitCode, String orgUnitDescEn, String orgUnitDescAr,
			Set<EmpEmployeeMaster> empEmployeeMasters) {
		this.orgUnitCode = orgUnitCode;
		this.orgUnitDescEn = orgUnitDescEn;
		this.orgUnitDescAr = orgUnitDescAr;
		this.empEmployeeMasters = empEmployeeMasters;
	}

	@Id

	@Column(name = "ORG_UNIT_CODE", unique = true, nullable = false, length = 20)
	public String getOrgUnitCode() {
		return this.orgUnitCode;
	}

	public void setOrgUnitCode(String orgUnitCode) {
		this.orgUnitCode = orgUnitCode;
	}

	@Column(name = "ORG_UNIT_DESC_EN", length = 200)
	public String getOrgUnitDescEn() {
		return this.orgUnitDescEn;
	}

	public void setOrgUnitDescEn(String orgUnitDescEn) {
		this.orgUnitDescEn = orgUnitDescEn;
	}

	@Column(name = "ORG_UNIT_DESC_AR", length = 200)
	public String getOrgUnitDescAr() {
		return this.orgUnitDescAr;
	}

	public void setOrgUnitDescAr(String orgUnitDescAr) {
		this.orgUnitDescAr = orgUnitDescAr;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "empOrgUnit")
	public Set<EmpEmployeeMaster> getEmpEmployeeMasters() {
		return this.empEmployeeMasters;
	}

	public void setEmpEmployeeMasters(Set<EmpEmployeeMaster> empEmployeeMasters) {
		this.empEmployeeMasters = empEmployeeMasters;
	}

}