package qa.gov.customs.training.models;

import qa.gov.customs.training.entity.TacCourseDate;
import qa.gov.customs.training.entity.TacCourseMaster;
import qa.gov.customs.training.entity.TacCourseRoom;

public class ActivationDetails {
    private TacCourseMaster tacCourseMaster;
    private TacCourseRoom tacCourseRoom;
    private TacCourseDate tacCourseDate;


    public TacCourseMaster getTacCourseMaster() {
        return tacCourseMaster;
    }

    public void setTacCourseMaster(TacCourseMaster tacCourseMaster) {
        this.tacCourseMaster = tacCourseMaster;
    }

    public TacCourseRoom getTacCourseRoom() {
        return tacCourseRoom;
    }

    public void setTacCourseRoom(TacCourseRoom tacCourseRoom) {
        this.tacCourseRoom = tacCourseRoom;
    }

    public TacCourseDate getTacCourseDate() {
        return tacCourseDate;
    }

    public void setTacCourseDate(TacCourseDate tacCourseDate) {
        this.tacCourseDate = tacCourseDate;
    }


}
