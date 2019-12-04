export class SmartProfileModel {
}

export class SmartProfileUserRequestModel {
    jobIdRequested?: String;
    qid?:String;
    empName?:String;
}


export class SmartProfileUserResponseModelQucik {
    constructor(legacyCode:String,cname_AR:String){
        this.legacycode=legacyCode;
        this.cname_AR=cname_AR;
    }
    legacycode: String;
    cname_AR?: String;
}

export interface SmartProfileUserResponseModelQucik1 {
    legacycode: String;
    cname_AR?: String;
}

export class SmartProfileUserResponseModelAjax {
    constructor(legacyCode:String,cname_AR:String){
        this.legacycode=legacyCode;
        this.cname_AR=cname_AR;
    }
    legacycode: String;
    cname_AR?: String;
    
}

export class SmartProfileUserResponseModel {
    job: String;
    bkey: String;
    email: String;
    empno: String;
    bacno: String;
    qid: String;
    dob: String;
    natio: String;
    title?: any;
    foa?: any;
    orgunit: String;
    legacycode: String;
    cname_AR?: String;
    mobile: String;
    orgunit_DESC_AR?: String;
    position_DESC_AR?: String;
    rec_ID: number;
    emp_STAT: String;
    foa_DESC: String;
    gender: String;
    gender_DESC: String;
    natio_DESC: String;
    country_KEY: String;
    country_KEYDESC: String;
    orgunit_DESC: String;
    position: String;
    position_DESC?: any;
    job_DESC?: any;
    job_DESC_AR?: String;
    pslevel?: String;
    run_DATE: Date;
    currentGradeDate:Date;
    nextGradeDate:Date;
    
    
}

export interface SmartProfileUserResponseAjax {
    code: number;
    message: String;
    status: boolean;
    count: number;
    data: SmartProfileUserResponseModelAjax[];
}

export interface SmartProfileUserResponse {
    code: number;
    message: String;
    status: boolean;
    count: number;
    data: SmartProfileUserResponseModel[];
}



export interface UserCourseResponseProfile {
    jobId: String;
    activationId: number;
    courseId: number;
    courseName: String;
    duration: number;
    category: String;
    attendeesId: number;
    courseStatus?: number;
}

export interface UserCourseRequestedResponse {
    code: number;
    message: String;
    status: boolean;
    count: number;
    data: UserCourseResponseProfile[];
}


export interface JobCardProfile {
    jobCardNo: number;
    jobGrade: String;
    admin_hours?: number;
    specialised_hours?: number;
    workshop_hours?: number;
    courseId: number;
    courseName: String;
    noOfHours?: number;
    category: String;
    statusFlag?: any;
    mandatoryFlag: number;
}

export interface JobCardProfileRequest {
    code: number;
    message: String;
    status: boolean;
    count: number;
    data: JobCardProfile[];
}

export interface UserCourseHistoryProfile {
    jobId: String;
    activationId: number;
    courseId: number;
    courseName: String;
    courseDate:Date;
    endDate:Date;
    status:String;
  
}
export interface UserCourseHistoryProfileResponse {
    code: number;
    message: String;
    status: boolean;
    count: number;
    data: UserCourseHistoryProfile[];
}
