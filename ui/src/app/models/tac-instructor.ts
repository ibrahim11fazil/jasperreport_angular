export class TacInstructor {
    jobid:String
    name:String
    ibanno:String
    qid:String
}

//To bind data
export interface ITacInstructor {
    status: Boolean;
    code:number;
    message:String;
    data: TacInstructor;
}