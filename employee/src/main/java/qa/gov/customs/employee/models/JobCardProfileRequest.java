package qa.gov.customs.employee.models;

public class JobCardProfileRequest {

    String jobIdRequested;
    String empName;
    String qid;

    public String getJobIdRequested() {
        return jobIdRequested;
    }

    public void setJobIdRequested(String jobIdRequested) {
        this.jobIdRequested = jobIdRequested;
    }

    public String getEmpName() {
        return empName;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    public String getQid() {
        return qid;
    }

    public void setQid(String qid) {
        this.qid = qid;
    }
}
