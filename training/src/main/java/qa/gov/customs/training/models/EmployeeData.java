package qa.gov.customs.training.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Date;
//@JsonIgnoreProperties(ignoreUnknown = true)
public class EmployeeData {



        private String jobId;
        private String jobTitle;
        private String pernr;
        private String cnameAr;
        private String cnameEn;
        private String qid;
        private String mobile;
        private String email;
        private String activeFlag;
        private String positionId;
        private String secionCode;
        private String gender;
        private Date dateofbirth;
        private String department;
        private String departmentId;
        private String passport;
        private String iban;

        public String getJobId() {
            return jobId;
        }

        public void setJobId(String jobId) {
            this.jobId = jobId;
        }

        public String getPernr() {
            return pernr;
        }

        public void setPernr(String pernr) {
            this.pernr = pernr;
        }

        public String getCnameAr() {
            return cnameAr;
        }

        public void setCnameAr(String cnameAr) {
            this.cnameAr = cnameAr;
        }

        public String getCnameEn() {
            return cnameEn;
        }

        public void setCnameEn(String cnameEn) {
            this.cnameEn = cnameEn;
        }

        public String getQid() {
            return qid;
        }

        public void setQid(String qid) {
            this.qid = qid;
        }

        public String getMobile() {
            return mobile;
        }

        public void setMobile(String mobile) {
            this.mobile = mobile;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getActiveFlag() {
            return activeFlag;
        }

        public void setActiveFlag(String activeFlag) {
            this.activeFlag = activeFlag;
        }

        public String getPositionId() {
            return positionId;
        }

        public void setPositionId(String positionId) {
            this.positionId = positionId;
        }

        public String getSecionCode() {
            return secionCode;
        }

        public void setSecionCode(String secionCode) {
            this.secionCode = secionCode;
        }

        public String getGender() {
            return gender;
        }

        public void setGender(String gender) {
            this.gender = gender;
        }

        public Date getDateofbirth() {
            return dateofbirth;
        }

        public void setDateofbirth(Date dateofbirth) {
            this.dateofbirth = dateofbirth;
        }

        public String getDepartment() {
            return department;
        }

        public void setDepartment(String department) {
            this.department = department;
        }

        public String getDepartmentId() {
            return departmentId;
        }

        public void setDepartmentId(String departmentId) {
            this.departmentId = departmentId;
        }

        public String getPassport() {
            return passport;
        }

        public void setPassport(String passport) {
            this.passport = passport;
        }

        public String getIban() {
            return iban;
        }

        public void setIban(String iban) {
            this.iban = iban;
        }

        public String getJobTitle() {
            return jobTitle;
        }

        public void setJobTitle(String jobTitle) {
            this.jobTitle = jobTitle;
        }


}
