package qa.gov.customs.training.models;

import java.math.BigDecimal;

public class LocationData {

    private BigDecimal locationId;
    private String locationName;

    public BigDecimal getLocationId() {
        return locationId;
    }

    public void setLocationId(BigDecimal locationId) {
        this.locationId = locationId;
    }

    public String getLocationName() {
        return locationName;
    }

    public void setLocationName(String locationName) {
        this.locationName = locationName;
    }
}
