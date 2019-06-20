export class SystemRoles {
       id:Number
       remark:String
}


export interface ISystemRoles {
    status: Boolean;
    code:number;
    message:String;
    data: SystemRoles[];
}


