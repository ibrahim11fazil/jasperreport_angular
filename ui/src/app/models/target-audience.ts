export class TargetAudience {
    audienceId:Number
    targetId:Number
    targentName:String


constructor(targentName:String) {
 //this.guidelineId=guidelineId;
    this.targentName=targentName;
}
}

export interface ResponseTargetAudiences{
    status: Boolean;
    code:number;
    message:String;
    data: TargetAudience[];
}
