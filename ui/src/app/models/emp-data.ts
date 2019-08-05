export class EmpData {
   attendeesId:Number
   jobId:String
   jobTitle:String
   cnameAr:String
   mobile:String
   department:String
   constructor(attendeesId:Number,jobId:String,jobTitle:String,cnameAr:String,mobile:String,department:String) {
    this.attendeesId=attendeesId;
    this.jobId=jobId;
    this.jobTitle=jobTitle;
    this.cnameAr=cnameAr;
    this.mobile=mobile;
    this.department=department;
}
}

export interface ResponseEmpData {
    status: Boolean;
    code:number;
    message:String;
    data: EmpData[];
}

