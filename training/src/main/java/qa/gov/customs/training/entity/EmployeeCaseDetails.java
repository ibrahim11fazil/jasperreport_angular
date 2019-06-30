//package qa.gov.customs.training.entity;
//
//import javax.persistence.*;
//import java.math.BigDecimal;
//import java.math.BigInteger;
//
//@Entity
//@Table(name="EMP_CASE_DETAILS")
//public class EmployeeCaseDetails {
//
//    @Id
//    @Column(name="SNO")
//    Long id;
//    @Column(name="MJOBID")
//    String jobCode;
//    @Column(name="CNAME_AR")
//    String fullName;
//    @Column(name="DEPARTMENT")
//    String deparatment;
//    @Column(name="DECISION_TYPE")
//    BigInteger deparatmentType;
//    @Column(name="DECISION")
//    String decision;
//    @Column(name="DECISION_DETAILS")
//    String decisionDetails;
//    @Column(name="DECISION_DATE")
//    String decisionDate;
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getJobCode() {
//        return jobCode;
//    }
//
//    public void setJobCode(String jobCode) {
//        this.jobCode = jobCode;
//    }
//
//    public String getFullName() {
//        return fullName;
//    }
//
//    public void setFullName(String fullName) {
//        this.fullName = fullName;
//    }
//
//    public String getDeparatment() {
//        return deparatment;
//    }
//
//    public void setDeparatment(String deparatment) {
//        this.deparatment = deparatment;
//    }
//
//    public BigInteger getDeparatmentType() {
//        return deparatmentType;
//    }
//
//    public void setDeparatmentType(BigInteger deparatmentType) {
//        this.deparatmentType = deparatmentType;
//    }
//
//    public String getDecision() {
//        return decision;
//    }
//
//    public void setDecision(String decision) {
//        this.decision = decision;
//    }
//
//    public String getDecisionDetails() {
//        return decisionDetails;
//    }
//
//    public void setDecisionDetails(String decisionDetails) {
//        this.decisionDetails = decisionDetails;
//    }
//
//    public String getDecisionDate() {
//        return decisionDate;
//    }
//
//    public void setDecisionDate(String decisionDate) {
//        this.decisionDate = decisionDate;
//    }
//
//    @Transient
//    int start;
//
//    @Transient
//    int limit;
//
//    public int getStart() {
//        return start;
//    }
//
//    public void setStart(int start) {
//        this.start = start;
//    }
//
//    public int getLimit() {
//        return limit;
//    }
//
//    public void setLimit(int limit) {
//        this.limit = limit;
//    }
//}
