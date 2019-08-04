import { TacActivation } from "./tac-activation";

export class TacCourseAttendees {

     attendeesId:Number
     tacCourseActivation:TacActivation
     jobId:Number
	courseStatus:Number
	attendancePercentage:Number
	//private Clob remark;
    certificateSerialNo:Number
    

    constructor(attendeesId:Number,tacCourseActivation:TacActivation,jobId:Number,courseStatus:Number,
        attendancePercentage:Number,certificateSerialNo:Number )
{
    this.attendeesId=attendeesId;
    this.tacCourseActivation=tacCourseActivation;
    this.jobId=jobId;
    this.courseStatus=courseStatus;
    this.attendancePercentage=attendancePercentage;
    certificateSerialNo=certificateSerialNo;
}
}
