export class SmartProfileModel {
}

export interface SmartProfileUserRequestModel {
    jobIdRequested: string;
}


export interface SmartProfileUserResponseModel {
    job: string;
    bkey: string;
    email: string;
    empno: string;
    bacno: string;
    qid: string;
    dob: string;
    natio: string;
    title?: any;
    foa?: any;
    orgunit: string;
    legacycode: string;
    cname_AR: string;
    mobile: string;
    orgunit_DESC_AR: string;
    position_DESC_AR: string;
    rec_ID: number;
    emp_STAT: string;
    foa_DESC: string;
    gender: string;
    gender_DESC: string;
    natio_DESC: string;
    country_KEY: string;
    country_KEYDESC: string;
    orgunit_DESC: string;
    position: string;
    position_DESC?: any;
    job_DESC?: any;
    job_DESC_AR: string;
    pslevel: string;
    run_DATE: Date;
}

export interface SmartProfileUserResponseModel {
    code: number;
    message: string;
    status: boolean;
    count: number;
    data: SmartProfileUserResponseModel[];
}

export interface UserCourseRequestedResponseProfile {
    jobId: string;
    activationId: number;
    courseId: number;
    courseName: string;
    duration: number;
    category: string;
    attendeesId: number;
    courseStatus?: number;
}

export interface UserCourseRequestedResponse {
    code: number;
    message: string;
    status: boolean;
    count: number;
    data: UserCourseRequestedResponseProfile[];
}


export interface JobCardProfile {
    jobCardNo: number;
    jobGrade: string;
    admin_hours?: number;
    specialised_hours?: number;
    workshop_hours?: number;
    courseId: number;
    courseName: string;
    noOfHours?: number;
    category: string;
    statusFlag?: any;
    mandatoryFlag: number;
}

export interface JobCardProfileRequest {
    code: number;
    message: string;
    status: boolean;
    count: number;
    data: JobCardProfile[];
}
