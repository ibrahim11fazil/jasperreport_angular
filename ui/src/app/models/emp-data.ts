export class EmpData {
   attendeesId:Number
   jobId:String
   jobTitle:String
   cnameAr:String
   mobile:String
   department:String
   count:Number
   attendanceFlag:Number
   checked:Boolean
   percentage:Number
   generated:Boolean
   url:String
   psLevel:String
   activationId:Number
   seatCapacity:Number
   remark:String
   constructor(attendeesId:Number,jobId:String,jobTitle:String,cnameAr:String,mobile:String,
    department:String,count:Number,percentage:Number,psLevel:String,activationId:Number,seatCapacity:Number,remark:String){
    this.attendeesId=attendeesId;
    this.jobId=jobId;
    this.jobTitle=jobTitle;
    this.cnameAr=cnameAr;
    this.mobile=mobile;
    this.department=department;
    this.count=count;
    this.percentage=percentage;
    this.psLevel=psLevel;
    this.activationId=activationId
    this.seatCapacity=seatCapacity
    this.remark=remark
  
}
}

export interface ResponseEmpData {
    status: Boolean;
    code:number;
    message:String;
    data: EmpData[];
}
export interface ResponseEmpDataDetail {
    status: Boolean;
    code:number;
    message:String;
    data: EmpData;
}

