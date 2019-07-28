export class EmpData {

   jobId:String
   jobTitle:String
   cnameAr:String
   mobile:String
   department:String
   constructor(jobId:String,jobTitle:String,cnameAr:String,mobile:String,department:String) {
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

