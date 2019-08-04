import { TacCourseAttendees } from "./tac-course-attendees";

export class TacCourseAttendance {

    attendenceId:Number;
	tacCourseAttendees:TacCourseAttendees;
    attendanceDate:Date;
    attendanceFlag:Number
    
    constructor(attendenceId:Number,tacCourseAttendees:TacCourseAttendees,attendanceDate:Date,
        attendanceFlag:Number )
{
    this.attendenceId=attendenceId;
    this.tacCourseAttendees=tacCourseAttendees;
    this.attendanceDate=attendanceDate;
    this.attendanceFlag=attendanceFlag;
}

}
