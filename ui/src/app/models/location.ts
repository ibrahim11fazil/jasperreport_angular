import { TrainingRoom } from "./training-room";

export class Location {

    public locationId:Number;
    public  locationName:String;
    public trainingRoom:TrainingRoom;
	// private Set<TacCourseRoom> tacCourseRooms = new HashSet<TacCourseRoom>(0);
constructor(locationId:Number,locationName:String)
{
    this.locationId=locationId;
    this.locationName=locationName;
}
}
export interface ResponseLocation{
    status: Boolean;
    code:number;
    message:String;
    data: Location[];
}