export class Workflow {
}


export class EmployeeCourseRequest {
    courseId: Number;
    courseName: String;
    courseActivationId: Number;
    workflowType: String;
}

export interface WorkflowResponse{
    status: Boolean;
    code:number;
    message:String;
  
}