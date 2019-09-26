export class SupervisorResponseData {
    empNo: String;
    legacyCode: String;
    cNameAr: String;
    qid: String;
    positionAr: String;
    qualification: String;
    grade:String;
}

    //To bind data
export class SupervisorResponse {
    status: Boolean;
    code: number;
    message: String;
    data: SupervisorResponseData[];
}

export class ActivationDateRequest{
    activationId:Number
}

export class ActivationDateResponse {
    status: Boolean;
    code: number;
    message: String;
    data: ActivationDateDetails;
}

export interface ActivationDateDetails{
    activationId:number
     startDate:Date
     endDate:Date
}