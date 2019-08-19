import { TacInstructor } from "./tac-instructor";

export class ActivationData {


    activationId: Number
    courseId:Number
    courseName:String
    duration:Number
    durationFlag: Number
    dateId:Number
    courseDate: Date
    locationId: Number
    locationName: String
    roomID: Number
    roomName: String
    coordinator:Number
    costInstructor: Number
    costFood: Number
    costTransport: Number
    costAirticket: Number
    costHospitality: Number
    costGift: Number
    costVenue: Number
    costBonus: Number
    costTranslation: Number
    belongsTo: Number
instructors:TacInstructor[]


    constructor(activationId: Number,courseId:Number,courseName:String,duration:Number,durationFlag: Number,dateId:Number,
        courseDate: Date,locationId: Number,locationName:String,roomID: Number,roomName: String,coordinator:Number,costInstructor: Number,
        costFood: Number,costTransport: Number,costAirticket: Number,costHospitality: Number,costGift: Number,
        costVenue: Number,costBonus: Number,costTranslation: Number,belongsTo: Number)
        {
            this.activationId=activationId
            this.courseId=courseId
            this.courseName=courseName
            this.duration=duration
            this.durationFlag=durationFlag
            this.courseDate=courseDate
            this.locationId=locationId
            this.locationName=locationName
            this.roomID=roomID
            this.roomName=roomName
            this.coordinator=coordinator
            this.costInstructor=costInstructor
            this.costFood=costFood
            this.costTransport=costTransport
            this.costAirticket=costAirticket
            this.costHospitality=costHospitality
            this.costGift=costGift
            this.costVenue=costVenue
            this.costBonus=costBonus
            this.costTranslation=costTranslation
            this.belongsTo=belongsTo
            this.dateId=dateId
        }
}

export interface ResponseActivationData{
    status: Boolean;
    code:number;
    message:String;
    data: ActivationData;
}
