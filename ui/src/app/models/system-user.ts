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

export interface UserRole{
  id:Number
  name:String
  remark:String
}



export interface SystemUserResponseArray{
    id:Number
    enabled?:Number
    username?:String
    fullName?:String
    roles?:UserRole[]
    roleName?:String
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

export interface LoginResponseObj {
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_in: number;
    scope: string;
    email: string;
    jid: number;
    qid: string;
    cNameAr: string;
    roles: string[];
    permissions: string[];
    jti: string;
}

export interface UserPermission{
     id:Number
     rpId:Number;
     name:String
     remark:String
}

export interface UserPermissionResponse{
    status: Boolean;
    code:number;
    message:String;
    data:UserPermission[];
}


export class UpdateRoleRequest{
    id:Number;
    name:String;
    remark:String;
    permissions:UserPermission[]
}

export class UpdateRoleResponse{
    status: Boolean;
    code:number;
    message:String;
}

export class SystemPermissionByRoleREquest{
    roleId:Number
}




