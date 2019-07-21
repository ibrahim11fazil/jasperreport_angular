package qa.gov.customs.training.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Objects;

import javax.persistence.*;


@Embeddable
public class TacJobcardCourseLinkId implements Serializable {

	public TacJobcardCourseLinkId() {}

    private TacJobcard tacJobcard;
    private TacCourseMaster tacCourseMaster;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    public TacJobcard getTacJobcard() {
        return tacJobcard;
    }

    public void setTacJobcard(TacJobcard tacJobcard) {
        this.tacJobcard = tacJobcard;
    }
    //@JsonManagedReference
    //@JsonBackReference
    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    public TacCourseMaster getTacCourseMaster() {
        return tacCourseMaster;
    }

    public void setTacCourseMaster(TacCourseMaster tacCourseMaster) {
        this.tacCourseMaster = tacCourseMaster;
    }



	@Override
	public boolean equals(Object o) {
		if (this == o) return true;

		if (o == null || getClass() != o.getClass())
			return false;

		TacJobcardCourseLinkId that = (TacJobcardCourseLinkId) o;
		return Objects.equals(tacJobcard, that.tacJobcard) &&
				Objects.equals(tacCourseMaster, that.tacCourseMaster);
	}



	public int hashCode() {
		int result = 17;
		result = 37 * result + (getTacCourseMaster() == null ? 0 : this.getTacCourseMaster().hashCode());
		result = 37 * result + (getTacJobcard() == null ? 0 : this.getTacJobcard().hashCode());
		return result;
	}
}
