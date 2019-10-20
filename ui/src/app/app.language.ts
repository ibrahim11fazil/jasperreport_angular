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
    courseId:String=this.isArabic ? " Course Id1" : "Course Id"
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
    instructorName:String=this.isArabic ? "Instructor Name 1 " : "Instructor Name"
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

    // Course Managemnet

    courseStartDate:String=this.isArabic ? " Course Start Date1" : "Course Start Date"
    courseEndDate:String=this.isArabic ? "Course End Date1" : "Course End Date"
    manage:String=this.isArabic ? "Manage1" : "Manage"
    empName:String=this.isArabic ? "Name1" :"Name"
    department:String=this.isArabic ? "Department1" :"Department"
    jobTitle:String=this.isArabic ? "Job Title1" :"Job Title"
    mobile:String=this.isArabic ? "Mobile1" :"Mobile"
    attendance:String=this.isArabic ? "Attendance1" :"Attendance"
    filterColumn:String=this.isArabic ? "Type to filter the name column1...." : "Type to filter the name column...."
    attendancePercentage:String=this.isArabic ? "Attendance % 1" :"Attendance %"
    courseStatus:String=this.isArabic ? "Pass/Fail 1":"Pass/Fail" 
    certificate:String=this.isArabic ? "Certificate 1" : "Certificate"
    downloadCertificate:String=this.isArabic ? "Download Certificate1" : "Download Certificate"

    //Create Instructor

    title_instructorRegistration:String=this.isArabic ? " Instructor Registration 1" : "Instructor Registration"
    instructorType:String=this.isArabic ? "Instructor Type 1" : "Instructor Type"
    instructorEmployee:String=this.isArabic ? "Employee 1" : "Employee "
    instructorExternal:String=this.isArabic ? "External 1" : "External "
    organization:String=this.isArabic ?  "Organization 1" : "Organization"
    qid:String=this.isArabic ?  "QID 1" : "QID"
    passport:String=this.isArabic ?  "Passport 1" : "Passport"
    iBanNo:String=this.isArabic ?  "IBAN No 1" : "IBAN No"
    email:String=this.isArabic ? "E-mail 1" : "E-mail"
    phone:String=this.isArabic ? "Phone 1" : "Phone"
    subjects:String=this.isArabic ? "Subjects 1" : "Subjects"
    subjectName:String=this.isArabic ? "Subject 1" : "Subject"
    qualifications:String=this.isArabic ? "Qualifications 1" : "Qualifications"
    qualificationName:String=this.isArabic ? "Qualification Name 1":"Qualification Name"
    priority:String=this.isArabic ? "Priority 1" : "Priority"

    //Instructor Search

    title_instructorSearch:String=this.isArabic ? "Instructor Search 1" :"Instructor Search"
    instructorId:String=this.isArabic ? "Instructor Id 1" :"Instructor Id"
    update:String=this.isArabic ? "Update 1" :"Update"
    request:String=this.isArabic ? "Request 1" :"Request"
    


    //User Creation

    userCreation:String=this.isArabic ? "User Creation1" : "User Creation"
    jobId:String=this.isArabic ? "Job Id1" : "Job Id"
    role:String=this.isArabic ? "Role1" : "Role"
    enable:String=this.isArabic ? "Enable1" : "Enable"
    disable:String=this.isArabic ? "Disable1" : "Disable"
    status:String=this.isArabic ? "Status1" : "Status"

    //User Search

    title_userSearch:String=this.isArabic ? "User Search1" : "User Search"
    qIdJobId:String=this.isArabic ? "QID/JOBID 1" : "QID/JOBID"
    qIdUserId:String=this.isArabic ? "QID/UserId 1" : "QID/UserId" 


   // User Permissions

   //:String=this.isArabic ? "User Permission 1" : "User Permission" 

   //Job Card Creation

   title_jobCardCreation:String=this.isArabic ? "Job Card Creation 1" : "Job Card Creation"
   selectJobTitles:String=this.isArabic ? "Select JobTitles 1" : "Select JobTitles "
   jobNumber:String=this.isArabic ? "Job Number 1" : "Job Number"
   jobGrade:String=this.isArabic ? "Job Grade 1" : "Job Grade"
   selectJobGrade:String=this.isArabic ? "Select Job Grade 1" : "Select Job Grade"
   jobFamily:String=this.isArabic ? "Job Family 1" : "Job Family"
   selectJobFamily:String=this.isArabic ? "Select Job Family 1" : "Select Job Family"
   functionalArea:String=this.isArabic ? "Functional Area 1" : "Functional Area "
   jobDuties:String=this.isArabic ? "Job Duties1" : "Job Duties"
   conditionTogetJob:String=this.isArabic ? "Condition To get Job 1" :"Condition To get Job"
   jobSkills:String=this.isArabic ? "Job Skills1" : "Job Skills" 
   trainingCourses:String=this.isArabic ? "Training Course 1" : "Training Course" 

   //Job Card Search

   title_jobCardSearch:String=this.isArabic ? "Job Card Search 1" : "Job Card Search"
   jobCardNumber:String=this.isArabic ? "Job Card Number 1":"Job Card Number"
   jobGroup:String=this.isArabic ? "Job Group 1":"Job Group"
   jobcardId:String=this.isArabic ? "Job Card Id 1":"Job Card Id"
   hoursError:String=this.isArabic ? "Hours Error 1":"Hours Error"

  // CI System

    title_CISUsers:String=this.isArabic ? "CI System Users 1" : "CI System Users"
    caseID:String=this.isArabic ? "Case Id 1" : "Case Id"
    jobCode:String=this.isArabic ? "Job Code 1" : "Job Code"
    fullName:String=this.isArabic ? "Full Name 1" : "Full Name"
    decision:String=this.isArabic ? "Decision 1" : "Decision"
    decisionDetails:String=this.isArabic ? "Decision Details 1" : "Decision Details"
    decisionDate:String=this.isArabic ? "Decision Date 1" : "Decision Date"
    
    //CI System Course Suggestion
   
    title_CISCourseSuggestion:String=this.isArabic ? "CI System Course Suggestion 1" : "CI System Course Suggestion "
    requestId:String=this.isArabic ? "Request ID 1": "Request ID"
    caseId:String=this.isArabic ? "Case ID 1": "Case ID"
    requestedFor:String=this.isArabic ? "REQUESTED FOR 1" : "REQUESTED FOR"
    createdDate:String=this.isArabic ? "Created Date 1" : "Created Date"
   
   // Employee Request

    title_courseRequestSearch:String=this.isArabic ? "Course Request Search1": "Course Request Search"
    courseDetails:String=this.isArabic ? "Course Details 1" : "Course Details"
    locationName:String=this.isArabic ? "Location Name 1" : "Location Name"
    courseSuggession:String=this.isArabic ? "Course Suggession for Employee 1" : "Course Suggession for Employee"

    // My Tasks

    workflowType:String=this.isArabic ? "WorkflowType 1": "WorkflowType"
    createdOn:String=this.isArabic ? "Created On 1" : "Created On"
    taskName:String=this.isArabic ? "Task Name 1" : "Task Name"
    view:String=this.isArabic ? "View 1" : "view"
    requestedBy:String=this.isArabic ? "Requested By 1" : "Requested By"
    user:String=this.isArabic ? "User 1" : "User"
    estimatedDuration:String=this.isArabic ? "Estimated Duration 1" : "Estimated Duration"
    approvals:String=this.isArabic ? "Approvals 1" : "Approvals"
    action:String=this.isArabic ? "Action 1" : "Action"
    startDate:String=this.isArabic ? "Start Date 1" : "Start Date"
    comments:String=this.isArabic ? "Comments 1" : "Comments"
    addComment:String=this.isArabic ? "Add Comment 1" : "Add Comment"

    //History

    requestedTime:String=this.isArabic ? "Requested Time 1" : "Requested Time"
    

    
   //Smart Profile

   //title_searchWithJobId:String=this.isArabic ? "Search With jobId 1" : "Search With jobId"
   title_smartProfile:String=this.isArabic ? "Smart Profile 1" : "Smart Profile"
   position:String=this.isArabic ? "Position 1" : "Position"
   trainingCertificate:String=this.isArabic ? "Training Certificate 1" : "Training Certificate"
   jobCardDetails:String=this.isArabic ? "Job Card Details 1" : "Job Card Details"
   coursesAttendedCurrent:String=this.isArabic ? "Courses (Attended/Current)1" : "Courses (Attended/Current)"
   smartSuggestion:String=this.isArabic ? "Smart Suggestion 1" : "Smart Suggestion"



    //General
    btn_search:String=this.isArabic ? "Search1" : "Search"
    btn_save:String=this.isArabic ? "Save1" : "Save"
    btn_delete:String=this.isArabic ? "Delete1" : "Delete"
    btn_update:String=this.isArabic ? "Update1" : "Update"
    btn_manage:String=this.isArabic ? "Manage1" : "Manage"
    btn_status:String=this.isArabic ? "Status1" : "Status"
    btn_certificate:String=this.isArabic ? "Certificate 1" : "Certificate"
    btn_markAttendance:String=this.isArabic ? "Mark Attendance 1" : "Mark Attendance"
    btn_updateAttendance:String=this.isArabic ? "Update Attendance 1" : "Update Attendance"
    btn_add:String=this.isArabic ? "Add 1" : "Add"
    btn_request:String=this.isArabic ? "Request 1" : "Request"
    btn_details:String=this.isArabic ? "Details 1" : "Details"
    btn_requestSubmit:String=this.isArabic ? "Request Submit 1" : "Request Submit"
    btn_approve:String=this.isArabic ? "Approve 1" : "Approve "
    btn_reject:String=this.isArabic ? "Reject 1" : "Reject "

    //Titles

    //Main Components

    logout:String=this.isArabic ? "Logout 1":"Logout"
    totalAppMemory:String=this.isArabic ? "Total App Memory 1": "Total App Memory"
    totalMemoryUsed:String=this.isArabic ? "Total Memory Used 1" : "Total Memory Used"
    options:String=this.isArabic ? "Options 1" : "Options"
    layoutOptions:String=this.isArabic ? "Layout Options 1" : "Layout Options"
    collapsedSidebar:String=this.isArabic ? "Collapsed Sidebar 1":"Collapsed Sidebar"
    darkMode:String=this.isArabic ? "Dark Mode1":"Dark Mode"
    
    




    //Main Menu

    menu_dashboard:String=this.isArabic ? "Dashboard 1" : "Dashboard"
    menu_instructor:String=this.isArabic ? "Instructor 1" : "Instructor"
    menu_course:String=this.isArabic ? "Course 1" : "Course"
    menu_courseManagement:String=this.isArabic ? "Course Management 1" : "Course Management"
    menu_ci_system:String=this.isArabic ? "CI System 1" : "CI System"
    menu_smart_engine:String=this.isArabic ? "Smart Engine 1" : "Smart Engine"
    menu_reports:String=this.isArabic ? "Reports 1" : "Reports"
    menu_jobCard:String=this.isArabic ? "job Card 1" : "Job Card"
    menu_user:String=this.isArabic ? "Users 1" : "Users"
    menu_requests:String=this.isArabic ? "Training Requests 1" : "Training Requests"


    // Sub Menu 
    menu_welcome:String=this.isArabic ? "Welcome1" : "Welcome"
    menu_myCourses:String=this.isArabic ? "My Courses 1": "My Courses"
    menu_createCourses:String=this.isArabic ? "Create Courses 1" : "Create Courses"
    menu_manageCourses:String=this.isArabic ? "Manage Courses1" : " Manage Courses"
    menu_linkCourse:String=this.isArabic ? "Link Course 1" : "Link Course"
    menu_activity:String=this.isArabic ? "Activity 1" : "Activity"
    menu_manageActivations:String=this.isArabic ? "Manage Activations 1" : "Manage Activations"
    menu_activateCourse:String=this.isArabic ? "Activate Course 1" : "Activate Course"
    menu_createInstructor:String=this.isArabic ? "Create Instructor 1" : "Create Instructor"
    menu_manageInstructor:String=this.isArabic ? "Manage Instructor 1" : "Manage Instructor"
    menu_newUser:String=this.isArabic ? "New User 1" : "New User"
    menu_searchUser:String=this.isArabic ? "Search User 1" : "Search User"
    menu_userPermissions:String=this.isArabic ? "User Permissions 1" : "User Permissions"
    menu_searchJobCard:String=this.isArabic ? "Search Job Card 1" : "Search Job Card"
    menu_createJobCard:String=this.isArabic ? "Create Job Card 1" : "Create Job Card"
    menu_allEmployees:String=this.isArabic ? "All Employees 1" : "All Employees"
    menu_courseRequests:String=this.isArabic ? "Course Requests 1" : "Course Requests"
    menu_employeeRequests:String=this.isArabic ? "Employee Requests 1" : "Employee Requests"
    menu_myTasks:String=this.isArabic ? "My Tasks 1" : "My Tasks"
    menu_history:String=this.isArabic ? "History 1" : "History"
    menu_smartProfile:String=this.isArabic ? "Smart Profile 1" : "Smart Profile"


    //system error 
    error_resource_not_found=this.isArabic? "Resource Not found" : "Resource Not found"
    error_unauthorized=this.isArabic? "UnAuthorized" : "UnAuthorized1"
    error_bad_request=this.isArabic? "Bad Request, Contact Administrator" : "Bad Request, Contact Administrator"
    erro_unsupported_type=this.isArabic? "UnsupportedType, Contact Administrator" : "UnsupportedType, Contact Administrator"
    error_server_error=this.isArabic? "Server Error, Contact Administrator" : "Server Error, Contact Administrator"


    

   




}

