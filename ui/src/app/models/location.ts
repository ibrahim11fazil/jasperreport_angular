export class Location {

    public locationId:Number;
	public  locationName:String;
	// private Set<TacCourseRoom> tacCourseRooms = new HashSet<TacCourseRoom>(0);
constructor(locationName:String)
{
    this.locationName=locationName;
}
}
export interface ResponseLocation{
    status: Boolean;
    code:number;
    message:String;
    data: Location[];
}