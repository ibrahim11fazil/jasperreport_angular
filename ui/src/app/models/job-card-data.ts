
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
