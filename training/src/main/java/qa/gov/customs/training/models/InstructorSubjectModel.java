package qa.gov.customs.training.models;

import java.math.BigDecimal;

public class InstructorSubjectModel {

    private BigDecimal instructorId;
    private BigDecimal subjectId;

    public BigDecimal getInstructorId() {
        return instructorId;
    }

    public void setInstructorId(BigDecimal instructorId) {
        this.instructorId = instructorId;
    }

    public BigDecimal getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(BigDecimal subjectId) {
        this.subjectId = subjectId;
    }
}
