package qa.gov.customs.training.models;

import java.math.BigDecimal;

public class SeatCapacity {
    BigDecimal activationId;
    BigDecimal courseId;
    BigDecimal seatCapacity;

    public BigDecimal getActivationId() {
        return activationId;
    }

    public void setActivationId(BigDecimal activationId) {
        this.activationId = activationId;
    }

    public BigDecimal getCourseId() {
        return courseId;
    }

    public void setCourseId(BigDecimal courseId) {
        this.courseId = courseId;
    }

    public BigDecimal getSeatCapacity() {
        return seatCapacity;
    }

    public void setSeatCapacity(BigDecimal seatCapacity) {
        this.seatCapacity = seatCapacity;
    }
}
