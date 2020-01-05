export const  RESOURCE_NOT_FOUND = 404;
export const  BAD_REQUEST = 400;
export const  UNAUTHORIZED = 401;
export const  UNSUPPORTED_TYPE = 415;
export const  SERVER_ERROR = 500;
export const  SUCCESS = 200;
export const  CREATED = 201;
export const  RESOURCE_FOUND = 405;


export const  IS_RTL_DEFAULT =true

export const AUTOLOGOUT_IN_MIU=30

export const CONTENT_TYPE_FORM_URL_ENCODE="application/x-www-form-urlencoded"
export const CONTENT_TYPE_JSON="application/json"
export const PAGE_LIMIT=10

export const WF_REQUESTED="REQUESTED"
export const WF_PROCESSING="PROCESSING"
export const WF_APPROVED="APPROVED"
export const WF_REJECTED="REJECTED"
export const WF_CANCELLED="CANCELLED"


export const DURATION_FLAG_LIST = [
    { value: 1, viewValue: 'سنة' },//year
    { value: 2, viewValue: 'شهر' },//month
    { value: 3, viewValue: 'يوم' },//day
    // { value: 4, viewValue: 'HOUR' }
];
export const SEARCH_BY=
[
    { value: 1, viewValue: 'بحث برقم البطاقة' },//jobcardno
    { value: 2, viewValue: 'بحث بالدرجة' },//jobgrade
    { value: 3, viewValue: 'بحث بالمسمى الوظيفي' },//jobtitle
    { value: 4, viewValue: 'عرض جميع البطاقات' },//show all jobcard
];
export const COURSE_FILTER = [
    { value: 1, viewValue: 'NEXT YEAR' },
    { value: 2, viewValue: 'NEXT MONTH' },
    { value: 3, viewValue: 'NEXT WEEK' },
    { value: 4, viewValue: 'ALL COURSES' },
];

export const PRIORITY_LIST = [
    { value: 1, viewValue: 'Primary' },
    { value: 2, viewValue: 'Secondary' },
    { value: 3, viewValue: 'Third' },
    { value: 4, viewValue: 'Fourth' },
];

export const IS_SUB_COURSES=[
    { value: 0, viewValue: 'No' },
    { value: 1, viewValue: 'Yes' },
  ];

export const OPTIONAL_OR_NOT = [
    { value: 0, viewValue: 'Mandatory' },
    { value: 1, viewValue: 'Optional' },
];

export const WORKFLOW_1_EMP_REQUEST="01_employee_training_req_v_1";
export const WORKFLOW_2_EMP_REQUEST="02_head_of_section_course_suggestion_v_1";
export const WORKFLOW_3_EMP_REQUEST="03_training_request_from_head_v_1";
export const WORKFLOW_4_EMP_REQUEST="04_cis_course_request_v_1";
export const WORKFLOW_5_EMP_REQUEST="05_audit_manger_course_request_v_1";
export const ROLE_TRAINING_ADMIN="train_admin"
export const ROLE_SYS_ADMIN="sys_admin"
export const ROLE_TRAINING_MANAGER="train_mgr"
export const ROLE_TRAINING_ASSIS_MANAGER="train_asst_mgr"
export const ROLE_TRAINING_COORDINATOR="train_coordinator"
export const ROLE_TRAINING_HEAD_TCE="head_tce"
export const ROLE_HR_DEPT="hr_dept"
export const ROLE_CHAIRMAN_ASSISTANT="chairman_asst"
export const ROLE_CI_SYSTEM="ci_system"
export const ROLE_AUDI_DEPT="audi_dept"
export const ROLE_DEPT_MGR="dept_mgr"
export const ROLE_DEPT_HEAD="dept_head"
export const ROLE_EMPLOYEE="employee"

export const	ADMINISTRATIVE_COURSE= 1
export const	SPECIALISED_COURSE= 2
export const	WORKSHOP_COURSE=3
export const	GENERAL_COURSE =4


//LOCAL
export const BASE_URL = "http://localhost:9000"
//export const BASE_URL_FILE = "http://localhost:9000"

//QA
 // export const BASE_URL ="http://172.16.0.254:9000"
 // export const BASE_URL_FILE ="http://172.16.0.254:9000"

//PROD
// export const BASE_URL ="http://172.16.0.137:9000"
// export const BASE_URL_FILE ="http://172.16.0.137:9000"


//  export const BASE_URL ="http://10.64.3.32:9000"
//  export const BASE_URL_FILE ="http://10.64.3.32:9000"

//export const BASE_URL ="http://localhost:7777"
//export const BASE_URL ="http://172.16.0.254:7777"

// export const BASE_URL ="http://172.16.0.254:7777"
//export const BASE_URL_FILE ="http://172.16.0.254:9021"
//export const BASE_URL_FILE ="http://172.16.0.254:7777"

// export const BASE_URL ="http://localhost:9000"
// export const BASE_URL_FILE ="http://localhost:9000"


//export const BASE_URL ="http://localhost:9000"

export const VERSION_UI ="qa_1.0.3"

//Disable if gateway is down -- for development
var gateway = true
var authentication=""
var authenticationrefresh=""
var training=""
var user=""
var fileUploading=""
var cis=""
var employee=""
var workflow=""
if(gateway){
    authentication="/authentication"
    authenticationrefresh="/authrefresh"
    training="/training"
    user="/user"
    fileUploading="/fileupload"
    cis="/cis"
    employee="/employee"
    workflow="/workflow"
}

//http://localhost:9000/authentication/oauth/token
//AUTHENTICATION
export const LOGIN_URL = BASE_URL + authentication +"/oauth/token"
export const REFRESH_TOKEN=BASE_URL + authenticationrefresh +"/oauth/token?grant_type=refresh_token&refresh_token="

//TRAINING
export const CREATE_ACTIVITY = BASE_URL + training +"/create-activity"
export const LIST_ACTIVITY = BASE_URL + training + "/search-activity"
export const  GET_ACTIVITY_COURSE= BASE_URL + training + "/search-activity"
export const DELETE_ACTIVITY = BASE_URL + training + "/remove-activity"
export const CREATE_COURSE = BASE_URL + training +"/create-course"
export const GET_COURSE_BY_ID = BASE_URL + training +"/get-course-by-id"
export const SEARCH_COURSE = BASE_URL + training +"/search-course"
export const DELETE_COURSE = BASE_URL + training +"/disable-course"
export const ENABLE_COURSE = BASE_URL + training +"/enable-course"
export const GET_ALL_COURSE_CATEGORIES = BASE_URL + training +"/get-all-course-categories"
export const GET_ALL_COURSE_TARGET = BASE_URL + training +"/get-all-course-target-groups"
export const  GET_ALL_ACTIVITIES =BASE_URL + training +"/list-activity"
export const  GET_ALL_COURSES=BASE_URL+training+"/list-courses"
export const GET_ALL_COURSES_WITH_HOUR_AND_CATEGORY = BASE_URL+training+"/list-courses-with-hour-and-category"
export const  GET_LOCATION=BASE_URL+training+"/get-all-course-location"
export const   GET_PREREQUISITES=BASE_URL+training+"/get-all-course-prerequisites"
export const  LINK_COURSE = BASE_URL + training + "/link-course-with-activity"
export const  SAVE_INSTRUCTOR=BASE_URL+training+"/create-instructor"
export const  GET_TRAINING_ROOM=BASE_URL+training+"/get-training-room"
export const GET_INSTRUCTORS=BASE_URL+training+"/list-instructors"
export const GET_INSTRUCTORS_BY_NAME=BASE_URL+training+"/list-instructors-by-name"
export const GET_MAIN_COURSES=BASE_URL+training+"/get-all-mainCourse"
export const  SAVE_ACTIVATION=BASE_URL+training+"/activate-course"
export const GET_ALL_SUBJECTS=BASE_URL+training+"/list-subjects"
export const GET_ALL_QUALIFICATIONS=BASE_URL+training+"/list-qualifications"
export const GET_INSTRUCTOR_BY_ID=BASE_URL+training+"/get-instructor-by-id"
export const GET_ALL_DATES_FOR_COURSES_BY_ACTIVITY_ID=BASE_URL+training+"/get-course-dates-by-id-and-activity-id"
export const  GET_ALL_COURSE_ACTIVATION=BASE_URL+training+"/get-all-courseActivation"
export const  GET_COURSE_ROOM_DETAIL=BASE_URL+training+"/get-course-room"
export const  GET_SEAT_CAPACITY=BASE_URL+training+"/get-seat-capacity"
export const  GET_COURSE_DATE_DETAIL=BASE_URL+training+"/get-course-date"
export const  GET_ACTIVATIONS_BY_NAME=BASE_URL+training+"/list-activations-by-courseName"
export const  GET_ACTIVATIONS_BY_ID=BASE_URL+training+"/get-all-activation-list"
export const  GET_CURRENT_COURSES=BASE_URL+training+"/get-current-courses"
export const  GET_PREVIOUS_COURSES=BASE_URL+training+"/get-previous-courses"
export const  GET_FUTURE_COURSES=BASE_URL+training+"/get-future-courses"
export const  CREATE_JOB_CARD=BASE_URL+training+"/create-job-card"
export const  GET_JOB_CARD_BY_ID=BASE_URL+training+"/get-job-card-byid"
export const  SEARCH_JOB_CARD=BASE_URL+training+"/list-job-card-by-job"
export const  GET_JOB_CARD_BYID=BASE_URL+training+"/get-job-card-byid"
export const  GET_EMPLOYEE_DATA_ATTENDANCE=BASE_URL+training+"/get-employee-data-attendance"
//export const  GET_PARTICIPANT_DATA=BASE_URL+training+"/get-participant-data"
export const CANCEL_COURSE=BASE_URL+training+"/cancel-course"
export const  GET_MAWARED_DATA=BASE_URL+training+"/get-mawared-data"
export const  DIRECT_ENROLL_PARTICIPANT=BASE_URL+training+"/direct-enroll-participant"
export const  DELETE_PARTICIPANT=BASE_URL+training+"/delete-participant"
export const  MARK_INITIAL_ATTENDANCE=BASE_URL+training+"/mark-initial-attendance"
export const  MARK_ATTENDANCE=BASE_URL+training+"/mark-attendance"
export const  GET_COURSE_COMPLETION=BASE_URL+training+"/get-course-completion"
export const  SEARCH_FUTURE_COURSES=BASE_URL+training+"/search-future-courses" 
export const  FUTURE_COURSE_FILTER=BASE_URL+training+"/get-course-filter"
export const  WORK_FLOW_REQUEST=BASE_URL+training+"/save-request"
export const  GET_ACTIVATION_DATES_BY_ACTIVATIONID=BASE_URL+training+"/course-date-by-activation"
export const  PREVIOUS_ATTENDANCE=BASE_URL+training+"/get-previous-attendance"
export const  GET_JOB_CARD_USER_PROFILE=BASE_URL+training+"/jobcard_user_profile";
export const  GET_FULL_JOBCARD=BASE_URL+training+"/jobcard_data";
export const  GET_USER_COURSE_ATTENDED=BASE_URL+training+"/user_courses_attended";
export const  GET_EMP_COURSE_HISTORICALDATA=BASE_URL+training+"/get-historical-course-data";
export const  COORDINATOR_COURSES=BASE_URL+training+"/coordinator-courses";
export const  INSTRUCTOR_COURSES=BASE_URL+training+"/instructor-courses";
export const  GET_LIST_FOR_CANCELLATION=BASE_URL+training+"/cancel-request-list";
export const  CANCEL_REQUEST=BASE_URL+training+"/cancel-request";
export const  CANCEL_REQUEST_STATUS=BASE_URL+training+"/cancel-request-status";


//USER MANAGEMENT
export const  GET_ALL_SYSTEM_ROLES=BASE_URL+user+"/all-system-roles"
export const  SAVE_SYSTEM_USER=BASE_URL+user+"/create-system-user"
export const  GET_ALL_SYSTEM_USERS=BASE_URL+user+"/find-all-system-users"
export const  FIND_SYSTEM_USER_BYID=BASE_URL+user+"/find-system-user-by-id"
export const  DISABLE_SYSTEM_USER=BASE_URL+user+"/disable-system-user"
export const  ENABLE_SYSTEM_USER=BASE_URL+user+"/enable-system-user"
export const  GET_SYSTEM_USER=BASE_URL+user+"/find-system-user-by-id"
export const  GET_ALL_USERS_BY_ROLE_ID=BASE_URL+user+"/find-all-system-users-by-role-role-id"
export const  GET_ALL_PERMISSIONS = BASE_URL+user+"/find-all-system-permissions"
export const  GET_ALL_PERMISSIONS_FOR_ROLE = BASE_URL+user+"/find-all-system-permissions-for-role"
export const  UPDATE_ROLE_AND_PERMISSION = BASE_URL+ user + "/update-role-and-permission"
export const UPDATE_PASSWORD = BASE_URL+ user + "/update-password"

//FILE UPLOADING  -- > BASE_URL_FILE
export const  UPLOAD_FILE   =     BASE_URL+fileUploading+"/uploadFile"
export const  DOWNLOAD_FILE =     BASE_URL+fileUploading+"/downloadFile"
export const GET_CERTIFICATE=     BASE_URL+fileUploading+"/downloadFile/certificate/"
export const GENERATE_CERTIFICATE = BASE_URL+fileUploading+"/generate-certificate"
export const LIST_CERTIFICATE = BASE_URL+fileUploading+"/list-certificates"
export const LIST_CERTIFICATE_BYJOBID=BASE_URL+fileUploading+"/list-certificates-byjobid"

//CIS Actions
export const GET_CIS_USERS=BASE_URL+cis+"/find-all-users-cases-for-cis"
export const GET_ALL_CIS_COURSES_I_REQUESTED=BASE_URL+cis+"/find-all-courses-i-requested"


//EMPLOYEE
export const  GET_EMPLOYEE_BY_ID = BASE_URL+employee+"/get-employee-by-jobid"
//get-employee-by-jobid
export const  GET_JOB_TITLE=BASE_URL+employee+"/list-jobs"
export const  GET_JOB_GRADES=BASE_URL+employee+"/list-grades"
export const  GET_JOB_FAMILY=BASE_URL+employee+"/list-jobfamily"
export const  GET_FUNCTIONAL_AREA=BASE_URL+employee+"/list-functional-area"
export const  EMP_UNDER_SUPERVSIOR=BASE_URL+employee+"/employees_under_supervisor"
//WORKFLOW validations in Employee
export const  CHECK_THE_USER_IS_ABSENT_BETWEEN_DATES=BASE_URL+employee + "/check-the-user-is-absent-between-dates";
export const  GET_EMPLOYEE_PROFILE=BASE_URL+employee + "/get-emp-profile";
export const  GET_EMPLOYEE_BASIC_INFO=BASE_URL+employee +"/get-emp-profile-basic";
export const  GET_DIRECTENROLL_EMPLOYEE_BASIC_INFO=BASE_URL+employee +"/get-directEnroll-profile-basic"


//WORKFLOW
export const  GET_MY_TASKS=BASE_URL+workflow+"/my-tasks"
export const  GET_MY_WITH_DELEGATIONS=BASE_URL+workflow+"/my-tasks-delegation"
export const  EXECUTE_TASK=BASE_URL+workflow+"/execute-task"
export const  SAVE_COMMENT=BASE_URL+workflow+"/save-comment"
export const  GET_COMMENTS=BASE_URL+workflow+"/task-comments"

//export const  PROCESS_TASK_DETAILS=BASE_URL+workflow+"/process-history-task-details"
export const  PROCESS_HISTORY_BY_EXECUTION_ID=BASE_URL+workflow+"/process-history-task-details"
export const  PROCESS_HISTORY_BY_USER=BASE_URL+workflow+"/process-history-by-user-id"
export const  PROCESS_HISTORY_BY_PROCESS_ID=BASE_URL+workflow+"/process-history"
export const  SAVE_USER_DELEGATION=BASE_URL+workflow+"/save-user-delegation"
export const  GET_MY_DELEGATION=BASE_URL+workflow+"/get-user-delegation"
export const  DELETE_MY_DELEGATION=BASE_URL+workflow+"/delete-user-delegation"

//WORKFLOW VALIDATIONS IN TRAINING
export const  CHECK_THE_REQUEST_IS_OVERRIDING=BASE_URL+training +"/check-the-request-is-overriding"
export const  CHECK_THE_REQUEST_IS_VALID=BASE_URL+training +"/check-the-user-is-already-applied-with-activation-id"
export const  CHECK_FOR_SEATS=BASE_URL+training +"/check-for-seats"
//export const  CHECK_THE_USER_IS_ABSENT_BETWEEN_DATES=BASE_URL+employee + "/check-the-user-is-absent-between-dates";

//Dashboard
export const   PREVIOUS_ATTENDED_COURSES=BASE_URL+training+"/get-attended-courses"
export const   ONGOING_COURSES=BASE_URL+training+"/currently-attending-courses"
export const   APPROVED_COURSES=BASE_URL+training+"/get-approved-courses"
export const   TASK_COUNT=BASE_URL+workflow+"/my-tasks-count"