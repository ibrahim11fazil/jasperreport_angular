export class CourseRequest {

    empNo: String;
    legacyCode: String;
    cNameAr: String;
    qid: String;
    positionAr: String;
    qualification: String;
    grade:String;
}

    //To bind data
export interface CourseRequestResponse {
    status: Boolean;
    code: number;
    message: String;
    data: CourseRequest;
}
