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
}



export interface Qualifiacation {
    qualificationId: Number;
    qualificationName: String;
}

export interface QualifiacationListResponse {
    status: Boolean;
    code: number;
    message: String;
    data: Qualifiacation[];
}


export interface SubjectListResponse {
    status: Boolean;
    code: number;
    message: String;
    data: Subject[];
}



