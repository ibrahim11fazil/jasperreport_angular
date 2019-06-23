export class SystemUser {
    id:Number
    password:String
    roleId:Number
    enabled:Number
}

export class SearchUser {
    jobId:Number
    start:Number
	limit:Number
}

export class SearchUserByRole {
    roleId:Number
}

export class SystemUserResponse{
    id:Number
    password:String
    roleId:Number
    enabled:Number
    username:String
    email:String
    fullName:String
}

export interface SystemUserResponseArray{
    id:Number
    enabled?:Number
    username?:String
    fullName?:String
}




export interface ISystemUserResponse {
    status: Boolean;
    code:number;
    message:String;
    data: SystemUserResponse;
}

export interface ISystemUserResponseList {
    status: Boolean;
    code:number;
    message:String;
    data: SystemUserResponseArray[];
}


export interface GenericResponse {
    status: Boolean;
    code:number;
    message:String;
    data:any;
}
