export class TacInstructor {
    instructorId:Number
    jobid:String
    name:String
    ibanno:String
    qid:String

    constructor(instructorId:Number,jobid:String,name:String,ibanno:String,qid:String) {
        this.instructorId=instructorId;
        this.jobid=jobid;
        this.name=name;
        this.ibanno=ibanno;
        this.qid=qid;

    }
}

//To bind data
export interface ITacInstructor {
    status: Boolean;
    code:number;
    message:String;
    data: TacInstructor;
}
export interface ITacInstructorList {
    status: Boolean;
    code:number;
    message:String;
    data: TacInstructor[];
}