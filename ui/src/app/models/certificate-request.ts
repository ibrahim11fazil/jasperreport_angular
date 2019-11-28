export class CertificateRequest {

    certificateId:Number
   certificateUrl:String
   courseDate:String
   courseName:String
   userName:String
   jobId:String
   qId:String
   duration:String
   objective:String
   certificateUid:String
    activationId:Number
    endDate:String

   constructor(activationId:Number,jobId:String,userName:String,courseName:String,courseDate:String,endDate:String)
{
    this.activationId=activationId
    this.jobId=jobId
    this.userName=userName
    this.courseName=courseName
    this.courseDate=courseDate
    this.endDate=endDate
}
}


export class CertificateRequestOnlyJobId {
   jobId:String
}
export interface ResponseCertificate
{
    status: Boolean;
    code:number;
    message:String;
    data: CertificateRequest;
}
export interface ResponseCertificateList
{
    status: Boolean;
    code:number;
    message:String;
    data: CertificateRequest[];
}
