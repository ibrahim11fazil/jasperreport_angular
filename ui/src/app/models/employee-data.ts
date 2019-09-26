export class EmployeeData {
}

export class AbsentInfo{
    startDate:Date
    endDate:Date
    qid:String
}

export interface AbsentInfoResponse {
    status: Boolean;
    code:number;
    message:String;
    data: Boolean;
}


