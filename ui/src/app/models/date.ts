export class Date {

    public dateId:Number;
	public  courseDate:Date;
	// private Set<TacCourseRoom> tacCourseRooms = new HashSet<TacCourseRoom>(0);
constructor(dateId:Number,courseDate:Date)
{
    this.dateId=dateId;
    this.courseDate=courseDate;

}
}
export interface ResponseDate{
    status: Boolean;
    code:number;
    message:String;
    data: Date[];
}