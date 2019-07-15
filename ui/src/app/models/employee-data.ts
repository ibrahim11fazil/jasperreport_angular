export class EmployeeData {
}

export interface JobGrades {
    psLevel: string;
}

export interface JobDetails {
    job: string;
    jobDesc: string;
    jobDescAr: string;
}

export interface EmployeeJobsList {
    code: number;
    message: string;
    status: boolean;
    count: number;
    data: JobDetails[];
}