
export const CONTENT_TYPE_FORM_URL_ENCODE="application/x-www-form-urlencoded"
export const CONTENT_TYPE_JSON="application/json"



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
export const SEARCH_COURSE = BASE_URL + training +"/search-course"