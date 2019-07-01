export class TrainingRoom {
    public roomId:Number;
	public  roomName:String;
	// private Set<TacCourseRoom> tacCourseRooms = new HashSet<TacCourseRoom>(0);
constructor(roomId:Number,roomName:String)
{
    this.roomId=roomId;
    this.roomName=roomName;
}
}
export interface ResponseRoom{
    status: Boolean;
    code:number;
    message:String;
    data: TrainingRoom[];
}

export interface ResponseRoomDetail{
    status: Boolean;
    code:number;
    message:String;
    data: TrainingRoom;
}
