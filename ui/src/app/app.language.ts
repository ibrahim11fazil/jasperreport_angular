import { Injectable } from '@angular/core';

@Injectable()
export class LanguageUtil  {
    constructor(public isArabic: Boolean) {
    }

    //Activity Page
    activity_title:String=this.isArabic ? "Activity1 " : "Activity"
    label_ActivityName: String=this.isArabic ? "الافراد" : "Activity Name"
    activity_message:String=this.isArabic ? "You must enter the activity Name1" : "You must enter the activity Name"
    label_Id: String=this.isArabic ? " Id1 ": "Id"
    label_delete: String=this.isArabic ? "Delete1 " : "Delete"

    //Course Creation
    course_title:String=this.isArabic ? "Course Definition1" : "Course Definition"
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

    searchCourse:String=this.isArabic ? "Search Course" : "Search Course"
    //User Creation

    userCreation:String=this.isArabic ? "User Creation1" : "User Creation"
    jobId:String=this.isArabic ? "Job Id1" : "Job Id"
    role:String=this.isArabic ? "role1" : "role"
    enable:String=this.isArabic ? "enable1" : "enable"
    disable:String=this.isArabic ? "disable1" : "disable"
    status:String=this.isArabic ? "status1" : "status"

    //General
    btn_search: String=this.isArabic ? "Search1" : "Search"
    btn_save: String=this.isArabic ? "Save1" : "Save"
    btn_delete: String=this.isArabic ? "Delete1" : "Delete"

    //Titles

}

