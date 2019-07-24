
export interface TacJobcardCondition {
    jobConditions: string;
    conditionsId: number;
}

export interface TacJobcardSkill {
    jobSkills: string;
    skillsID: number;
}

export interface TacJobcardDuty {
    dutyDescription: string;
    dutiesId: number;
}

export interface JobCardData {
    job: string;
    jobGrade: string;
    jobGroup: string;
    jobTitle: string;
    specialGroup: string;
    jobcardNo: number;
    tacJobcardConditions: TacJobcardCondition[];
    tacJobcardSkills: TacJobcardSkill[];
    tacJobcardDuties: TacJobcardDuty[];
    jobCardCourseLinkModelList:CourseJobCard[];
    trainingCenterStatus?:Boolean;
    adminHours:Number;
    specialisedHours:Number;
    workshopHours:Number;
    hourFlag:Number;
}

export interface IJobCardDataListResponse {
    status: Boolean;
    code:number;
    message:String;
    data: JobCardData[];
}

export interface IJobCardDataResponse {
    status: Boolean;
    code:number;
    message:String;
    data: JobCardData;
}

export class JobCardDataSearch {
    job?:String
    start:Number
	limit:Number
}

export interface IJobCardDataSearchResponse {
    status: Boolean;
    code:number;
    message:String;
    data: JobCardData[];
}

export interface JobGradesListResponse {
    code: number;
    message: string;
    status: boolean;
    count: number;
    data: JobGrades[];
}

export interface JobFamily {
    jobFamily: string;
    jobFamilyShort: string;
    jobFamilyText: string;
}

export interface JobFamilyListResponses {
    code: number;
    message: string;
    status: boolean;
    count: number;
    data: JobFamily[];
}

export interface JobGrades {
    psLevel: string;
}

export interface JobTitle {
    job: string;
    jobDesc: string;
    jobDescAr: string;
}

export interface JobTitleListResponse {
    code: number;
    message: string;
    status: boolean;
    count: number;
    data: JobTitle[];
}


export interface FunctionalArea {
    otype: string;
    objid: string;
    objectText: string;
    lang: string;
}

export interface FunctionalAreaResponseList {
    code: number;
    message: string;
    status: boolean;
    count: number;
    data: FunctionalArea[];
}


export interface CourseJobCard{
courseId: number;
jobcardNo: number;
mandatoryFlag: number;
}


export class SearchJobCard{
    job?: any;
    page: number;
    limit: number;
}

export class JobGradeStatus{
    status:String
    isText:Boolean
    isFinished:Boolean
}