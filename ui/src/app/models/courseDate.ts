import { TacActivity } from "./tac-activity";

export class CourseDate {

    public dateId:Number;
    public  tacCourseDate?:Date;
    public  courseDate:Date;
    public tacActivity:TacActivity;
	// private Set<TacCourseRoom> tacCourseRooms = new HashSet<TacCourseRoom>(0);
constructor(dateId:Number,tacCourseDate:Date)
{
    this.dateId=dateId;
    this.tacCourseDate=tacCourseDate;

}
}
export interface ResponseDate{
    status: Boolean;
    code:number;
    message:String;
    data: CourseDate[];
}

export interface ResponseDateDetail{
    status: Boolean;
    code:number;
    message:String;
    data: CourseDate;
}


