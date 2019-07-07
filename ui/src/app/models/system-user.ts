import { TacInstructor } from "./tac-instructor";

export class SystemUser {
    id:Number
    password:String
    roleId:Number
    enabled:Number
}

export class SearchUser {
    name?:String
    jobId?:Number
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


export interface ISystemInstructorResponseList {
    status: Boolean;
    code:number;
    message:String;
    data: TacInstructor[];
}


export interface GenericResponse {
    status: Boolean;
    code:number;
    message:String;
    data:any;
}

export interface MawaredUser{
      jobId:String;
      jobTitle:String;
      pernr:String;
      cnameAr:String;
      cnameEn:String;
      qid:String;
      mobile:String;
      email:String;
      activeFlag:String;
      positionId:String;
      secionCode:String;
      gender:String;
        dateofbirth:String;
      department:String;
      departmentId:String;
      passport:String;
      iban:String;
}

export interface MawaredUserResponse {
    status: Boolean;
    code:number;
    message:String;
    data:MawaredUser;
}