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
 * EmpSubGroup generated by hbm2java
 */
@Entity
@Table(name = "EMP_SUB_GROUP", schema = "CUST_EMPLOYEE")
public class EmpSubGroup implements java.io.Serializable {

	private String empSubGroupCode;
	private String empSubGroupDescEn;
	private String empSubGroupDescAr;
	private Set<EmpEmployeeMaster> empEmployeeMasters = new HashSet<EmpEmployeeMaster>(0);

	public EmpSubGroup() {
	}

	public EmpSubGroup(String empSubGroupCode) {
		this.empSubGroupCode = empSubGroupCode;
	}

	public EmpSubGroup(String empSubGroupCode, String empSubGroupDescEn, String empSubGroupDescAr,
			Set<EmpEmployeeMaster> empEmployeeMasters) {
		this.empSubGroupCode = empSubGroupCode;
		this.empSubGroupDescEn = empSubGroupDescEn;
		this.empSubGroupDescAr = empSubGroupDescAr;
		this.empEmployeeMasters = empEmployeeMasters;
	}

	@Id

	@Column(name = "EMP_SUB_GROUP_CODE", unique = true, nullable = false, length = 20)
	public String getEmpSubGroupCode() {
		return this.empSubGroupCode;
	}

	public void setEmpSubGroupCode(String empSubGroupCode) {
		this.empSubGroupCode = empSubGroupCode;
	}

	@Column(name = "EMP_SUB_GROUP_DESC_EN", length = 200)
	public String getEmpSubGroupDescEn() {
		return this.empSubGroupDescEn;
	}

	public void setEmpSubGroupDescEn(String empSubGroupDescEn) {
		this.empSubGroupDescEn = empSubGroupDescEn;
	}

	@Column(name = "EMP_SUB_GROUP_DESC_AR", length = 200)
	public String getEmpSubGroupDescAr() {
		return this.empSubGroupDescAr;
	}

	public void setEmpSubGroupDescAr(String empSubGroupDescAr) {
		this.empSubGroupDescAr = empSubGroupDescAr;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "empSubGroup")
	public Set<EmpEmployeeMaster> getEmpEmployeeMasters() {
		return this.empEmployeeMasters;
	}

	public void setEmpEmployeeMasters(Set<EmpEmployeeMaster> empEmployeeMasters) {
		this.empEmployeeMasters = empEmployeeMasters;
	}

}
