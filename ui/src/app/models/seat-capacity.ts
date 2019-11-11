export class SeatCapacity{
    activationId:Number
    courseId:Number
    seatCapacity:Number
    constructor(activationId:Number,courseId:Number,seatCapacity:Number) {
        this.activationId=activationId;
        this.courseId=courseId;
        this.seatCapacity=seatCapacity;
    }

}

export interface SeatCapacityResponse{
    status: Boolean;
    code:number;
    message:String;
    data: SeatCapacity;
}
