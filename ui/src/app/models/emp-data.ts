export class EmpData {
   attendeesId:Number
   jobId:String
   jobTitle:String
   cnameAr:String
   mobile:String
   department:String
   count:Number
   attendanceFlag:Number
   percentage:Number
   generated:Boolean
   url:String
   constructor(attendeesId:Number,jobId:String,jobTitle:String,cnameAr:String,mobile:String,department:String,count:Number,percentage:Number) {
    this.attendeesId=attendeesId;
    this.jobId=jobId;
    this.jobTitle=jobTitle;
    this.cnameAr=cnameAr;
    this.mobile=mobile;
    this.department=department;
    this.count=count;
    this.percentage=percentage;
  
}
}

export interface ResponseEmpData {
    status: Boolean;
    code:number;
    message:String;
    data: EmpData[];
}

