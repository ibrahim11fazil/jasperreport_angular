import { TacActivity } from "./tac-activity";
import { TacCourseMaster } from "./tac-course-master";
import { TrainingRoom } from "./training-room";
import { CourseDate } from "./courseDate";
import { TacInstructor } from "./tac-instructor";


export class TacActivation {

    public activationId:Number
	public tacActivity?:TacActivity;
	public tacCourseMaster?:TacCourseMaster;
	public tacCourseRoom?:TrainingRoom;
	public tacCourseDate?:CourseDate;
	public  dependentId:Number;
	//public activationDate:Date;
	public  coordinatorId:Number;
	public  costInstructor:Number;
	public  costFood:Number;
	public  costTransport:Number;
	public  costAirticket:Number;
	public  costHospitality:Number;
	public  costGift:Number;
	public  costVenue:Number;
	public  costBonus:Number;
	public  costTranslation:Number;
	
	public  status:Number;
	//public tacCourseAttendeeses = TacCourseAttendees[];
    public tacCourseInstructors:TacInstructor[];
    
    constructor(activationId:Number,tacActivity:TacActivity,tacCourseMaster:TacCourseMaster,tacCourseRoom:TrainingRoom,tacCourseDate:CourseDate,
        dependentId:Number,coordinatorId:Number,costInstructor:Number,costFood:Number,costTransport:Number,costAirticket:Number,
        costHospitality:Number,costGift:Number,costVenue:Number,costBonus:Number,costTranslation:Number,tacCourseInstructors:TacInstructor[],status:Number )
        {

            this.activationId=activationId;
            this.tacActivity=tacActivity;
            this.tacCourseMaster=tacCourseMaster;
            this.tacCourseRoom=tacCourseRoom;
            this.tacCourseDate=tacCourseDate;
            this.dependentId=dependentId;
            this.coordinatorId=coordinatorId;
            this.costInstructor=costInstructor;
            this.costFood=costFood;
            this.costTransport=costTransport;
            this.costAirticket=costAirticket;
            this.costHospitality=costHospitality;
            this.costGift=costGift;
            this.costVenue=costVenue;
            this.costBonus=costBonus;
            this.costTranslation=costTranslation;
            this.tacCourseInstructors=tacCourseInstructors;
            this.status=status;
        }

}

export interface ResponseTacActivation{
    status: Boolean;
    code:number;
    message:String;
    data: TacActivation[];
}
export interface ResponseActivationDetail{
    status: Boolean;
    code:number;
    message:String;
    data: TacActivation;
}

export interface ActivationDetails{
	 tacCourseMaster?:TacCourseMaster;
	 tacCourseRoom?:TrainingRoom;
     tacCourseDate?:CourseDate;
}