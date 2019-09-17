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
    data:WorkflowResponseData

}

export interface WorkflowResponseData {
    workflowType: string;
    fullName?: any;
    userId: string;
    email: string;
    mobile?: any;
    department: string;
    departmentId?: any;
    courseId: string;
    courseName: string;
    processId?: any;
    processKey?: any;
    createdOn?: any;
    trainingRequestId: string;
    jobId: string;
    jobTitle?: any;
    pernr?: any;
    cnameAr?: any;
    cnameEn?: any;
    qid?: any;
    activeFlag?: any;
    positionId?: any;
    secionCode?: any;
    gender?: any;
    dateofbirth?: any;
    passport?: any;
    iban?: any;
    courseActivationId?: any;
}


export interface UserRequestModel {
    workflowType: string;
    fullName?: any;
    userId?: any;
    email: string;
    mobile: string;
    department: string;
    departmentId: string;
    courseId: string;
    courseName: string;
    processId?: any;
    processKey?: any;
    createdOn: string;
    trainingRequestId: string;
    jobId: string;
    jobTitle: string;
    pernr?: any;
    cnameAr: string;
    cnameEn: string;
    qid?: any;
    activeFlag?: any;
    positionId?: any;
    secionCode?: any;
    gender?: any;
    dateofbirth?: any;
    passport?: any;
    iban?: any;
    courseActivationId: string;
    forUserJobId?: any;
    forUserjobTitle?: any;
    forUsercnameAr?: any;
    forUserQid?: any;
    fromUserJobId?: any;
    fromUserCnameAr?: any;
    investigationId?: any;
}


//Task Response
export interface TaskResponse{
    status: Boolean;
    code:number;
    message:String;
    data:TaskResponseData[]
  
}

export interface TaskResponseData {
    id: string;
    name: string;
    processId: string;
    executionId: string;
    userRequestModel: UserRequestModel;
}

//Comment Save for task
export class CommentSaveModel {
    taskId: string;
    processInstanceId: string;
    commandMessage: string;
}

//Comment Saved for Task
export interface CommentSaveResponse{
    status: Boolean;
    code:number;
    message:String;
    data:CommentSaveResponseModel
  
}


export interface CommentSaveResponseModel {
    id: string;
    type: string;
    userId?: any;
    time: Date;
    taskId: string;
    processInstanceId: string;
    action: string;
    message: string;
    fullMessage: string;
    tenantId?: any;
    rootProcessInstanceId?: any;
    removalTime?: any;
    persistentState: string;
    fullMessageBytes: string;
    messageParts: string[];
}


//get comments for task  request
export class CommentsForTask {
    taskId: string;
}


export interface CommentsForTaskResponse{
    status: Boolean;
    code:number;
    message:String;
    data:CommentsForTaskModel[]
  
}

//get comments for task  response
export interface CommentsForTaskModel {
    id: string;
    type: string;
    userId?: any;
    time: Date;
    taskId: string;
    processInstanceId: string;
    action: string;
    message: string;
    fullMessage: string;
    tenantId?: any;
    rootProcessInstanceId?: any;
    removalTime?: any;
    persistentState: string;
    fullMessageBytes: string;
    messageParts: string[];
}

//User task execution Details Request history
export class UserTaskHistoryExecutionsDetailsRequest {
    executionId: string;
}


//User Task executions Response history

export interface UserTaskHistoryResponse{
    status: Boolean;
    code:number;
    message:String;
    data:UserTaskResponseHistory[]
  
}

export interface TypeData {
    name: string;
    javaType: string;
    primitiveValueType: boolean;
    abstract: boolean;
    parent?: any;
}

export interface TypedDataValue {
    value: string;
    type: TypeData;
    transient: boolean;
}

export interface Type2 {
    name: string;
    primitiveValueType: boolean;
    abstract: boolean;
    parent?: any;
    javaType: string;
}

export interface SerializerData {
    name: string;
    serializationDataformat: string;
    type: Type2;
}

export interface UserTaskResponseHistory {
    id: string;
    rootProcessInstanceId: string;
    processInstanceId: string;
    executionId: string;
    processDefinitionId: string;
    processDefinitionKey: string;
    processDefinitionName?: any;
    processDefinitionVersion?: any;
    caseInstanceId?: any;
    caseExecutionId?: any;
    caseDefinitionId?: any;
    caseDefinitionKey?: any;
    caseDefinitionName?: any;
    eventType?: any;
    sequenceCounter: number;
    removalTime?: any;
    activityInstanceId: string;
    taskId?: any;
    timestamp: Date;
    tenantId?: any;
    userOperationId?: any;
    revision: number;
    variableName: string;
    variableInstanceId: string;
    scopeActivityInstanceId?: any;
    serializerName: string;
    longValue?: any;
    doubleValue?: any;
    textValue: string;
    textValue2: string;
    byteValue?: any;
    byteArrayId?: any;
    name: string;
    value: string;
    typeName: string;
    time: Date;
    typedValue: TypedDataValue;
    serializer: SerializerData;
    errorMessage: string;
    byteArrayValueId: string;
    byteArrayValue: string;
    variableTypeName: string;
    persistentState: string;
}

//User Task executions Response starts 


//User Task execute  Task 
export class UserTaskExecuteRequest {
    taskId: string;
    processId: string;
    assigne: string;
    role: string;
    action: string;
    executionId: string;
}

//User Task execute Response Model
export interface UserTaskExecuteResponseModel {
    taskId: string;
    processId: string;
    assigne: string;
    role: string;
    action: string;
    executionId: string;
    processInstanceId?: any;
    commandMessage?: any;
    status: boolean;
}

//
export interface UserTaskExecuteResponse{
    status: Boolean;
    code:number;
    message:String;
    data:UserTaskExecuteResponseModel
  
}


//History User Request{}

export class HistoryUserRequest{
    firstResult?:number;
    maxResult?:number;
    executionId?:String;
    processId?:String;
}


//History User Response {}
export interface HistoryUserResponse{
    status: Boolean;
    code:number;
    message:String;
    data:HistoryUserResponseByUser[]
}


export interface HistoryUserResponseByUser {
    id: string;
    rootProcessInstanceId: string;
    processInstanceId?: any;
    executionId?: any;
    processDefinitionId: string;
    processDefinitionKey: string;
    processDefinitionName?: any;
    processDefinitionVersion?: any;
    caseInstanceId?: any;
    caseExecutionId?: any;
    caseDefinitionId?: any;
    caseDefinitionKey?: any;
    caseDefinitionName?: any;
    eventType?: any;
    sequenceCounter: number;
    removalTime?: any;
    time: Date;
    type: string;
    userId: string;
    groupId?: any;
    taskId: string;
    operationType: string;
    assignerId?: any;
    tenantId?: any;
    persistentState: string;
}


//History ProcessId Response {}
export interface HistoryProcessResponse{
    status: Boolean;
    code:number;
    message:String;
    data:HistoryUserResponseByProcess[]
}


export interface PrimitiveType {
    name: string;
    javaType: string;
    primitiveValueType: boolean;
    abstract: boolean;
    parent?: any;
}

export interface TypedUserValue {
    value: any;
    type: PrimitiveType;
    transient: boolean;
    objectTypeName: string;
    serializationDataFormat: string;
    objectType: string;
    deserialized?: boolean;
    valueSerialized: string;
}

export interface TypePrimitive2 {
    name: string;
    javaType: string;
    primitiveValueType: boolean;
    abstract: boolean;
    parent?: any;
}

export interface SerializerData {
    name: string;
    type: TypePrimitive2;
    serializationDataformat: string;
}

export interface HistoryUserResponseByProcess {
    id: string;
    rootProcessInstanceId: string;
    processInstanceId: string;
    executionId: string;
    processDefinitionId: string;
    processDefinitionKey: string;
    processDefinitionName?: any;
    processDefinitionVersion?: any;
    caseInstanceId?: any;
    caseExecutionId?: any;
    caseDefinitionId?: any;
    caseDefinitionKey?: any;
    caseDefinitionName?: any;
    eventType?: any;
    sequenceCounter: number;
    removalTime?: any;
    activityInstanceId: string;
    taskId?: any;
    timestamp: Date;
    tenantId?: any;
    userOperationId?: any;
    revision: number;
    variableName: string;
    variableInstanceId: string;
    scopeActivityInstanceId?: any;
    serializerName: string;
    longValue?: any;
    doubleValue?: any;
    textValue: string;
    textValue2: string;
    byteValue?: any;
    byteArrayId?: any;
    name: string;
    value: any;
    typeName: string;
    time: Date;
    typedValue: TypedUserValue;
    serializer: SerializerData;
    errorMessage?: any;
    byteArrayValueId: string;
    byteArrayValue: string;
    variableTypeName: string;
    persistentState: string;
}