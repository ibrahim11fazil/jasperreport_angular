export class TacInstructor {
    instructorId?: Number;
    jobId: String
    name: String
    ibanNo: String
    qid: String
    typeFlag?: Number;
    department?: String;
    jobTitle?: String;
    companyName?: String;
    passportNo?: String;
    phone?: String;
    email?: String;
    photo?: String;
    priority?: Number;
    public tacCommSubjects?:Subject[];
    public tacCommQualifications?:Qualification[];
    qualification?:String;

}

export class TacInstructorRequest {
    instructorId?: Number;
}

//To bind data
export interface ITacInstructor {
    status: Boolean;
    code: number;
    message: String;
    data: TacInstructor;
}
export interface ITacInstructorList {
    status: Boolean;
    code: number;
    message: String;
    data: TacInstructor[];
}

//GET ALL SUBJECTS
export interface Subject {
    subjectId:Number;
    subjectName:String;
    instructorId?:Number
}



export interface Qualification {
    qualificationId: Number;
    qualificationName: String;
    instructorId?:Number
}

export interface QualifiacationListResponse {
    status: Boolean;
    code: number;
    message: String;
    data: Qualification[];
}


export interface SubjectListResponse {
    status: Boolean;
    code: number;
    message: String;
    data: Subject[];
}



