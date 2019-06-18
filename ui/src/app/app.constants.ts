
export const CONTENT_TYPE_FORM_URL_ENCODE="application/x-www-form-urlencoded"
export const CONTENT_TYPE_JSON="application/json"
export const DURATION_FLAG_LIST = [
    { value: 1, viewValue: 'YEAR' },
    { value: 2, viewValue: 'MONTH' },
    { value: 3, viewValue: 'DAY' },
    { value: 4, viewValue: 'HOUR' }
];


//export const BASE_URL = "http://localhost:9001"
export const BASE_URL = "http://localhost:9000"

//Disable if gateway is down -- for development
var gateway = true
var authentication=""
var training=""
if(gateway){
    authentication="/authentication"
    training="/training"

}
//http://localhost:9000/authentication/oauth/token
export const LOGIN_URL = BASE_URL + authentication +"/oauth/token"
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
