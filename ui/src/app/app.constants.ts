
export const CONTENT_TYPE_FORM_URL_ENCODE="application/x-www-form-urlencoded"
export const CONTENT_TYPE_JSON="application/json"
export const PAGE_LIMIT=10

export const WF_REQUESTED="REQUESTED"
export const WF_PROCESSING="PROCESSING"
export const WF_APPROVED="APPROVED"
export const WF_REJECTED="REJECTED"
export const WF_CANCELLED="CANCELLED"


export const DURATION_FLAG_LIST = [
    { value: 1, viewValue: 'YEAR' },
    { value: 2, viewValue: 'MONTH' },
    { value: 3, viewValue: 'DAY' },
    { value: 4, viewValue: 'HOUR' }
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


//export const BASE_URL = "http://localhost:9001"
//export const BASE_URL = "http://localhost:9000"
//export const BASE_URL ="http://172.16.0.254:9000"
//export const BASE_URL ="http://localhost:7777"
export const BASE_URL ="http://172.16.0.254:7777"
//export const BASE_URL_FILE ="http://172.16.0.254:9021"
export const BASE_URL_FILE ="http://172.16.0.254:7777"

//export const BASE_URL ="http://localhost:9000"
//export const BASE_URL ="http://localhost:9000"


//Disable if gateway is down -- for development
var gateway = true
var authentication=""
var training=""
var user=""
var fileUploading=""
var cis=""
var employee=""
if(gateway){
    authentication="/authentication"
    training="/training"
    user="/user"
    fileUploading="/fileupload"
    cis="/cis"
    employee="/employee"

}

//http://localhost:9000/authentication/oauth/token
//AUTHENTICATION
export const LOGIN_URL = BASE_URL + authentication +"/oauth/token"

//TRAINING
export const CREATE_ACTIVITY = BASE_URL + training +"/create-activity"
export const LIST_ACTIVITY = BASE_URL + training + "/search-activity"
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
export const  GET_LOCATION=BASE_URL+training+"/get-all-courseLocation"
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
export const  GET_COURSE_DATE_DETAIL=BASE_URL+training+"/get-course-date"
export const  GET_ACTIVATIONS_BY_NAME=BASE_URL+training+"/list-activations-by-courseName"
export const   GET_ACTIVATIONS_BY_ID=BASE_URL+training+"/get-all-activationList"
//USER MANAGEMENT
export const  GET_ALL_SYSTEM_ROLES=BASE_URL+user+"/all-system-roles"
export const  SAVE_SYSTEM_USER=BASE_URL+user+"/create-system-user"
export const  GET_ALL_SYSTEM_USERS=BASE_URL+user+"/find-all-system-users"
export const  FIND_SYSTEM_USER_BYID=BASE_URL+user+"/find-system-user-by-id"
export const  DISABLE_SYSTEM_USER=BASE_URL+user+"/disable-system-user"
export const  ENABLE_SYSTEM_USER=BASE_URL+user+"/enable-system-user"
export const  GET_SYSTEM_USER=BASE_URL+user+"/find-system-user-by-id"
export const GET_ALL_USERS_BY_ROLE_ID=BASE_URL+user+"/find-all-system-users-by-role-role-id"

//FILE UPLOADING
export const  UPLOAD_FILE   = BASE_URL_FILE+fileUploading+"/uploadFile"
//export const  DOWNLOAD_FILE = BASE_URL+fileUploading+"/downloadFile"
export const  DOWNLOAD_FILE = BASE_URL_FILE+fileUploading+"/downloadFile"


//CIS Actions
export const GET_CIS_USERS=BASE_URL+cis+"/find-all-users-cases-for-cis"
export const GET_ALL_CIS_COURSES_I_REQUESTED=BASE_URL+cis+"/find-all-courses-i-requested"


//EMPLOYEE
export const  GET_EMPLOYEE_BY_ID = BASE_URL+employee+"/get-employee-by-jobid"
//get-employee-by-jobid
