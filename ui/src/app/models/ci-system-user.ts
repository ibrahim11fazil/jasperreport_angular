export class CiSystemUser {
    id: Number;
    jobCode: String;
    fullName: String;
    deparatment: String;
    deparatmentType: Number;
    decision: String;
    decisionDetails: String;
    decisionDate: String;
}

export class CiCourseRequestedUsers {

    requestedId: Number;
    fromUser: String;
    toUser: String;
    statusFlag: Number;
    investigationId: Number;
    createdDate: String;
    courseNumber: Number;
    remark: String;
    start: Number;
    limit: Number;
}

export class CiSystemUsersRequest {
    id?: Number;
    jobCode?: String;
    start: Number;
    limit: Number;
}

export interface CISystemUserResponseList {
    status: Boolean;
    code: number;
    message: String;
    data: CiSystemUser[];
}

export interface CiCourseRequestedUsersList {
    status: Boolean;
    code: number;
    message: String;
    data: CiCourseRequestedUsers[];
}