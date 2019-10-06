import { Injectable } from '@angular/core';
import { Prerequisites } from './models/prerequisites';

@Injectable()
export class LanguageUtil  {
    constructor(public isArabic: Boolean) {
    }

    //Activity Page
    title_activity:String=this.isArabic ? "Activity1 " : "Activity"
    label_ActivityName: String=this.isArabic ? "الافراد" : "Activity Name"
    activity_message:String=this.isArabic ? "You must enter the activity Name1" : "You must enter the activity Name"
    label_Id: String=this.isArabic ? " Id1 ": "Id"
    label_delete: String=this.isArabic ? "Delete1 " : "Delete"

    //Course Creation
    title_courseDefinition:String=this.isArabic ? "Course Definition1" : "Course Definition"
    courseName:String=this.isArabic ? "Course Name1" : "Course Name"
    coursePeriod:String=this.isArabic ? "Course Period1" : "Course Period"
    durationType:String=this.isArabic ? "Duration Type1" : "Duration Type"
    courseObjective:String=this.isArabic ? "Course Objective1" : "Course Objective"
    courseCategories:String=this.isArabic ? "Course Categories1" : "Course Categories"
    expectedResult:String=this.isArabic ? "Expected Result1" : "Expected Result"
    targetedAudiences:String=this.isArabic ? "Targeted Audiences1" : "Targeted Audiences"
    noOfHours:String=this.isArabic ? "No of Hours1" : "No of Hours"
    trainingGuidelines:String=this.isArabic ? "Training Guidelines1" : "Training Guidelines"

    //Search Course

    title_searchCourse:String=this.isArabic ? "Search Course1" : "Search Course"
    courseId:String=this.isArabic ? "Id1" : "Id"
    btn_linkCourse:String=this.isArabic ? "Link Course1" : "Link Course"

    //Link Course

    title_linkCourse:String=this.isArabic ? "Link Course1" : "Link Course"
    courses:String=this.isArabic ? "Courses1" : "courses"
    activityType:String=this.isArabic ? "Activity Type1" : "Activity Type" 
    courseLocation:String=this.isArabic ? "Location1" : "Location"
    chooseADate:String=this.isArabic ? "Choose A Date 1" : "Choose A Date"
    subCourses:String=this.isArabic ? "Subcourses 1" : "Subcourses"
    courseDate:String=this.isArabic ? "Course Date1 " : "Course Date"
    preRequisites:String=this.isArabic ? "Prerequisites1" : "Prerequisites"

    //Activation Search

    activationSearch:String=this.isArabic ? "Activation Search 1" : "Activation Search"
    activationId:String=this.isArabic ? "Activation ID 1" : "Activation ID"
    activationDate:String=this.isArabic ? "Activation Date1" : "Activation Date"
    label_update:String=this.isArabic ? "Update 1" : "Update"
    
    //Activate Course

    title_activateCourse:String=this.isArabic ? "Activate Course1" :"Activate Course"
    belongsTo:String=this.isArabic ? "Belongs To1": "Belongs To"
    trainingHall:String=this.isArabic ? "Training Hall 1" : "Training Hall"
    instructorName:String=this.isArabic ? "Instructor 1 " : "Instructor"
    trainingCoordinator:String=this.isArabic ? "Training Co-ordinator 1":"Training Co-ordinator"
    estimatedCost:String=this.isArabic ? "Estimated Cost 1" :"Estimated Cost"
    instructorCost:String=this.isArabic ? "Instructor Cost 1": "Instructor Cost"
    buffetCost:String=this.isArabic ? "Buffet Cost 1" : "Buffet Cost"
    internalTransportCost:String=this.isArabic ? "Internal Transport Cost 1" :"Internal Transport Cost"
    ticketCost:String=this.isArabic ? "Ticket Cost 1":"Ticket Cost "
    hospitalityCost:String=this.isArabic ? "Hospitality Cost1":"Hospitality Cost"
    giftCost:String=this.isArabic ? "Gift Cost1":"Gift Cost"
    hallReservationCost:String=this.isArabic ? "Hall Reservation Cost1": "Hall Reservation Cost"
    bonusCost:String=this.isArabic ? "Bonus Cost 1" : "Bonus Cost"
    translationCost:String=this.isArabic ?  "Translation Cost1" : "Translation Cost"



    //User Creation

    userCreation:String=this.isArabic ? "User Creation1" : "User Creation"
    jobId:String=this.isArabic ? "Job Id1" : "Job Id"
    role:String=this.isArabic ? "role1" : "role"
    enable:String=this.isArabic ? "enable1" : "enable"
    disable:String=this.isArabic ? "disable1" : "disable"
    status:String=this.isArabic ? "status1" : "status"

    //General
    btn_search:String=this.isArabic ? "Search1" : "Search"
    btn_save:String=this.isArabic ? "Save1" : "Save"
    btn_delete:String=this.isArabic ? "Delete1" : "Delete"
    btn_update:String=this.isArabic ? "Update1" : "Update"

    //Titles

}

