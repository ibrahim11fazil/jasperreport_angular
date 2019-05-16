export class TacActivity {
    activityName:String
    activityId:Number
    constructor(activityName:String,activityId:Number) {
        this.activityId=activityId;
        this.activityName=activityName;
    }
}


export interface ResponseTacActivity {
    status: Boolean;
    code:number;
    message:String;
    data: TacActivity;
}


export interface ITacActivityList {
    status: Boolean;
    code:number;
    message:String;
    data: TacActivity[];
    count:number;
}
