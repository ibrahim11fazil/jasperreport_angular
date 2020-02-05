import { Injectable } from '@angular/core';
import { Prerequisites } from './models/prerequisites';
import { APPROVED_COURSES } from './app.constants';
import { messaging } from 'firebase';

@Injectable()
export class LanguageUtil {
  constructor(public isArabic: Boolean) {
  }

  //Activity Page
  title_activity: String = this.isArabic ? "النشاط التدريبي " : "Activity"
  label_ActivityName: String = this.isArabic ? "عنوان النشاط التادريبي" : "Activity Name"
  activity_message: String = this.isArabic ? "يجب عليك إدخال عنوان النشاط التادريبي" : "You must enter the activity Name"
  label_Id: String = this.isArabic ? " رقم النشاط" : "Id"
  label_delete: String = this.isArabic ? "حذف" : "Delete"
  validation_activity_length_5:String= this.isArabic?"اسم النشاط التدريبي يجب ان يكون أكبر من 5 حروف.":"activity name must be at least 5 characters long."
  valifation_activity_length_max_25:String=this.isArabic?" لا يمكن ان يتجاوز اسم النشاط التدريبي 25 حرف.":"  activity name cannot exceed 25 characters."

  //Course Creation
  title_courseDefinition: String = this.isArabic ? "تعريف دورة تدريبية" : "Course Definition"
  courseName: String = this.isArabic ? "عنوان الدورة التدريبية" : "Course Name"
  coursePeriod: String = this.isArabic ? "مدة الدورة التدريبية" : "Course Period"
  durationType: String = this.isArabic ? "نوع مدة الدورة التدريبية" : "Duration Type"
  courseObjective: String = this.isArabic ? "الهدف العام للدورة التدريبية" : "Course Objective"
  courseCategories: String = this.isArabic ? "تصنيف الدورة التدريبية" : "Course Categories"
  expectedResult: String = this.isArabic ? "النتائج المتوقعة" : "Expected Result"
  targetedAudiences: String = this.isArabic ? "الفئة المستهدفة" : "Targeted Audiences"
  noOfHours: String = this.isArabic ? "عدد الساعات" : "No of Hours"
  trainingGuidelines: String = this.isArabic ? "المحاور التدريبية" : "Training Guidelines"


  //Search Course

  title_searchCourse: String = this.isArabic ? "بحث " : "Search Course"
  courseId: String = this.isArabic ? " رقم الدورة" : "Course Id"
  btn_linkCourse: String = this.isArabic ? "ربط الدورة بالنشاط التدريبي" : "Link Course"




  //Link Course

  title_linkCourse: String = this.isArabic ? "ربط الدورة بالنشاط التدريبي" : "Link Course"
  courses: String = this.isArabic ? "عنوان الدورة التدريبية" : "courses"
  activityType: String = this.isArabic ? "نوع النشاط التدريبي" : "Activity Type"
  courseLocation: String = this.isArabic ? "مكان عقد البرنامج" : "Location"
  chooseADate: String = this.isArabic ? "اختر التاريخ" : "Choose A Date"
  subCourses: String = this.isArabic ? "تحتوي على دورات تدريبية فرعية" : "Subcourses"
  courseDate: String = this.isArabic ? "مواعيد التنفيذ" : "Course Date"
  preRequisites: String = this.isArabic ? "المتطلبات السابقة" : "Prerequisites"
  existingActivities=this.isArabic ? "الأنشطة التدريبية المتاحة" : "Existing Activities"


  //Activation Search

  activationSearch: String = this.isArabic ? "بحث تفعيل دورة تدريبية" : "Activation Search"
  activationId: String = this.isArabic ? "رقم التفعيل" : "Activation ID"
  activationDate: String = this.isArabic ? "تاريخ التفعيل" : "Activation Date"
  label_update: String = this.isArabic ? "تعديل" : "Update"
  seatCapacity:String=this.isArabic?"الطاقة الاستيعابية":"Seat Capacity"
  trainingCoordinatorMobile=this.isArabic?"رقم جوال مشرف الدورة التدريبية":"Coordinator Mobile1"


  //Activate Course

  title_activateCourse: String = this.isArabic ? "تفعيل دورة تدريبية" : "Activate Course"
  belongsTo: String = this.isArabic ? "تنتمي إلى" : "Belongs To"
  trainingHall: String = this.isArabic ? "القاعة" : "Training Hall"
  instructorName: String = this.isArabic ? "اسم المدرب " : "Instructor Name"
  trainingCoordinator: String = this.isArabic ? "اسم المشرف" : "Training Co-ordinator"
  estimatedCost: String = this.isArabic ? "التكلفة التقديرية" : "Estimated Cost"
  instructorCost: String = this.isArabic ? "تكلفة المدرب" : "Instructor Cost"
  buffetCost: String = this.isArabic ? "تكلفة البوفيه" : "Buffet Cost"
  internalTransportCost: String = this.isArabic ? "تكلفة التنقل الداخلي" : "Internal Transport Cost"
  ticketCost: String = this.isArabic ? "تكلفة تذاكر الطيران" : "Ticket Cost "
  hospitalityCost: String = this.isArabic ? "تكلفة الضيافة والفندقة" : "Hospitality Cost"
  giftCost: String = this.isArabic ? "تكفة الهدايا والتذكارات" : "Gift Cost"
  hallReservationCost: String = this.isArabic ? "تكلفة حجز القاعة" : "Hall Reservation Cost"
  bonusCost: String = this.isArabic ? "تكلفة المكافآت" : "Bonus Cost"
  translationCost: String = this.isArabic ? "تكلفة الترجمة" : "Translation Cost"

  // Course Managemnet

  courseStartDate: String = this.isArabic ? " تاريخ بداية الدورة التدريبية" : "Course Start Date"
  courseEndDate: String = this.isArabic ? "تاريخ نهاية الدورة التدريبية" : "Course End Date"
  manage: String = this.isArabic ? "التحكم" : "Manage"
  empName: String = this.isArabic ? "الاسم" : "Name"
  department: String = this.isArabic ? "الإدارة" : "Department"
  jobTitle: String = this.isArabic ? "المسمى الوظيفي" : "Job Title"
  mobile: String = this.isArabic ? "رقم الجوال" : "Mobile"
  attendance: String = this.isArabic ? "الحضور" : "Attendance"
  filterColumn: String = this.isArabic ? "اختيار من متعدد" : "Type to filter the name column...."
  attendancePercentage: String = this.isArabic ? "نسبة الحضور" : "Attendance %"
  courseStatus: String = this.isArabic ? "ناجح / راسب" : "Pass/Fail"
  certificate: String = this.isArabic ? "الشهادة" : "Certificate"
  downloadCertificate: String = this.isArabic ? "تحميل الشهادة" : "Download Certificate"
  previousCourse: String = this.isArabic ? "الدورات السابقة" : "Previous Courses"
  currentCourse: String = this.isArabic ? "الدورت الحالية" : "Current Courses"
  futureCourse: String = this.isArabic ? "الدورات المستقبلية" : "Future Courses"



  //Create Instructor

  title_instructorRegistration: String = this.isArabic ? " تسجيل محاضر" : "Instructor Registration"
  instructorType: String = this.isArabic ? "نوع المحاضر " : "Instructor Type"
  instructorEmployee: String = this.isArabic ? "موظف" : "Employee "
  instructorExternal: String = this.isArabic ? "خارجي" : "External "
  organization: String = this.isArabic ? "الجهة" : "Organization"
  qid: String = this.isArabic ? "الرقم الشخصي" : "QID"
  passport: String = this.isArabic ? "رقم جواز السفر" : "Passport"
  iBanNo: String = this.isArabic ? "رقم حساب البنك الأيبان" : "IBAN No"
  email: String = this.isArabic ? "البريد الإلكتروني" : "E-mail"
  phone: String = this.isArabic ? "رقم الهاتف" : "Phone"
  subjects: String = this.isArabic ? "المواد" : "Subjects"
  subjectName: String = this.isArabic ? "المادة" : "Subject"
  qualifications: String = this.isArabic ? "المؤهلات" : "Qualifications"
  qualificationName: String = this.isArabic ? "عنوان المؤهل" : "Qualification Name"
  priority: String = this.isArabic ? "الأولوية" : "Priority"


  //Instructor Search

  title_instructorSearch: String = this.isArabic ? "بحث عن محاضر" : "Instructor Search"
  instructorId: String = this.isArabic ? "رقم المحاضر" : "Instructor Id"
  update: String = this.isArabic ? "تعديل" : "Update"
  request: String = this.isArabic ? "طلب" : "Request"



  //User Creation

  userCreation: String = this.isArabic ? "إنشاء مستخدم" : "User Creation"
  jobId: String = this.isArabic ? "الرقم الوظيفي" : "Job Id"
  role: String = this.isArabic ? "نوع الحساب" : "Role"
  enable: String = this.isArabic ? "تفعيل" : "Enable"
  disable: String = this.isArabic ? "الغاء تفعيل" : "Disable"
  status: String = this.isArabic ? "الحالة" : "Status"
  password:String=this.isArabic?"كلمة السر" : "password"
  invalidUser:String=this.isArabic? "مستخدم غير موجود":"Invalid User"
  provideBlank:String=this.isArabic? "اترك مساحة فارغة في حالة الرغبة في عدم تغيير كلمة السر" : "Please provide blank area for no change in password"



  //User Search

  title_userSearch: String = this.isArabic ? "بحث عن مستخدم" : "User Search"
  qIdJobId: String = this.isArabic ? "الرقم الشخصي / الرقم الوظيفي" : "QID/JOBID"
  qIdUserId: String = this.isArabic ? "الرقم الشخصي / رقم المستخدم" : "QID/UserId"



  // User Permissions

  //:String=this.isArabic ? "User Permission 1" : "User Permission" 

  //Job Card Creation

  title_jobCardCreation: String = this.isArabic ? "إنشاء بطاقة الوصف الوظيفي والبطاقة التدريبية" : "Job Card Creation"
  selectJobTitles: String = this.isArabic ? "اختر المسمى الوظيفي" : "Select JobTitles "
  jobNumber: String = this.isArabic ? "كود الوظيفة" : "Job Number"
  jobGrade: String = this.isArabic ? "الدرجة الوظيفية / المالية" : "Job Grade"
  selectJobGrade: String = this.isArabic ? "اختر الدرجة" : "Select Job Grade"
  jobFamily: String = this.isArabic ? "المجموعة العامة" : "Job Family"
  selectJobFamily: String = this.isArabic ? "اختر المجموعة العامة" : "Select Job Family"
  functionalArea: String = this.isArabic ? "المجموعة النوعية" : "Functional Area "
  jobDuties: String = this.isArabic ? "واجبات الوظيفة" : "Job Duties"
  conditionTogetJob: String = this.isArabic ? "اشتراطات شغل الوظيفة" : "Condition To get Job"
  jobSkills: String = this.isArabic ? "القدرات والمهارات" : "Job Skills"
  trainingCourses: String = this.isArabic ? "الدرات التدريبية" : "Training Course"


  //Job Card Search

  title_jobCardSearch: String = this.isArabic ? "بحث عن بطاقات الوصف الوظيفي والبطاقات التدريبية" : "Job Card Search"
  jobCardNumber: String = this.isArabic ? " رقم بطاقة الوصف الوظيفي والتدريبي" : "Job Card Number"
  jobGroup: String = this.isArabic ? "مجموعة الوظائف" : "Job Group"
  jobcardId: String = this.isArabic ? "رقم البطاقة" : "Job Card Id"
  hoursError: String = this.isArabic ? "أخطاء ساعات" : "Hours Error"


  // CI System

  title_CISUsers: String = this.isArabic ? "مستخدمي نظام التحقيقات والقضايا" : "CI System Users"
  caseID: String = this.isArabic ? "رقم التحقيق" : "Case Id"
  jobCode: String = this.isArabic ? "رقم الوظيفة" : "Job Code"
  fullName: String = this.isArabic ? "الاسم بالكامل" : "Full Name"
  decision: String = this.isArabic ? "القرار" : "Decision"
  decisionDetails: String = this.isArabic ? "تفاصيل القرار" : "Decision Details"
  decisionDate: String = this.isArabic ? "تاريخ القرار" : "Decision Date"


  //CI System Course Suggestion

  title_CISCourseSuggestion: String = this.isArabic ? "الدورة المقترحة من نظام التحقيقات والقضايا" : "CI System Course Suggestion "
  requestId: String = this.isArabic ? "رقم الطلب" : "Request ID"
  caseId: String = this.isArabic ? "رقم التحقيق" : "Case ID"
  requestedFor: String = this.isArabic ? "مطلوب لـ" : "REQUESTED FOR"
  createdDate: String = this.isArabic ? "تاريخ الانشاء" : "Created Date"


  // Employee Request

  title_courseRequestSearch: String = this.isArabic ? "البحث في طلب دورة تدريبية" : "Course Request Search"
  courseDetails: String = this.isArabic ? "تفاصيل الدورة التدريبية" : "Course Details"
  locationName: String = this.isArabic ? "المكان" : "Location Name"
  courseSuggession: String = this.isArabic ? "الدورة المقترحة لموظف" : "Course Suggession for Employee"

  // My Tasks

  workflowType: String = this.isArabic ? "نوع سير العمل" : "WorkflowType"
  createdOn: String = this.isArabic ? "تم الإنشاء في" : "Created On"
  taskName: String = this.isArabic ? "اسم المهمة" : "Task Name"
  view: String = this.isArabic ? "عرض" : "view"
  requestedBy: String = this.isArabic ? "تم الطلب بواسطة" : "Requested By"
  user: String = this.isArabic ? "المستخدم" : "User"
  estimatedDuration: String = this.isArabic ? "المدة التقديرية" : "Estimated Duration"
  approvals: String = this.isArabic ? "الموافقات" : "Approvals"
  action: String = this.isArabic ? "الاجراء" : "Action"
  startDate: String = this.isArabic ? "تاريخ البداية" : "Start Date"
  comments: String = this.isArabic ? "التعليقات" : "Comments"
  addComment: String = this.isArabic ? "أضف تعليق" : "Add Comment"
  requiredComment:String=  this.isArabic ? "التعليق مطلوب" : " Required Comment"
  noSeatComment: String = this.isArabic?"عفوا لا توجد مقاعد متاحة, تم":"No Seats available, Rejected"
  noSeatMessage: string = this.isArabic?"لا توجد مقاعد متاحة, رجاء الرفض":"No Seats available, Kindly reject"
  chooseStartDate: String = this.isArabic ? "اختر تاريخ البداية" : "Choose Start Date"
  chooseEndDate: String = this.isArabic ? "اختر تاريخ النهاية" : "Choose End Date"
  validationDelegation:String = this.isArabic?"تاريخ البداية مطلوب":"JobId,start Date and End Date  is required"
  datesValidationInDelgation:String= this.isArabic?"التواريخ غير صالحة, تاريخ النهاية قبل تاريخ البداية او":"Dates are not valid, end date is same or after the start date"
  delegationsNotFound:String=this.isArabic?"لم يتم العثور علي العناصر":"No items found"
  invalidSearchInput:String=this.isArabic?" معيار بحث غير صالح":"Invalid Search"
  
  //History

  requestedTime: String = this.isArabic ? "الوقت المطلوب" : "Requested Time"

  //Smart Profile

  //title_searchWithJobId:String=this.isArabic ? "البحث برقم الوظيفة" : "Search With jobId"
  title_smartProfile: String = this.isArabic ? "الملف الشخصي " : "Smart Profile"
  //position: String = this.isArabic ? "المنصب" : "Position"
  title_delegation: String = this.isArabic ? "Delegations" : "Delegations"
  position: String = this.isArabic ? " المسمى الوظيفي":"Position"
  trainingCertificate: String = this.isArabic ? "شهادة التدريب" : "Training Certificate"
  jobCardDetails: String = this.isArabic ? "تفاضيل بطاقة الوصف الوظيفي والتدريبي" : "Job Card Details"
  coursesAttendedCurrent: String = this.isArabic ? "الدورات الحالية / التي تم حضورها" : "Courses (Attended/Current)"
  smartSuggestion: String = this.isArabic ? "الاقتراح الالكتروني" : "Smart Suggestion"
  responsibilities:String=this.isArabic? "المسؤوليات" : "Responsibilities"
  employeeName:String=  this.isArabic ? " اسم الموظف" :"Employee Name"
  currentGradeDate:String=this.isArabic?"تاريخ الدرجة الحالية":"CurrentGradeDate1"
  nextGradeDate:String=this.isArabic?"تاريخ الترقية القادمة":"NextGradeDate1"





  //General
  btn_search: String = this.isArabic ? "بحث" : "Search"
  btn_save: String = this.isArabic ? "حفظ" : "Save"
  btn_delete: String = this.isArabic ? "حذف" : "Delete"
  btn_update: String = this.isArabic ? "تعديل" : "Update"
  btn_manage: String = this.isArabic ? "التحكم" : "Manage"
  btn_status: String = this.isArabic ? "الحالة" : "Status"
  btn_certificate: String = this.isArabic ? "الشهادة" : "Certificate"
  btn_markAttendance: String = this.isArabic ? "تعيين الحضور" : "Mark Attendance"
  btn_updateAttendance: String = this.isArabic ? "تعديل الحضور" : "Update Attendance"
  btn_add: String = this.isArabic ? "اضافة" : "Add"
  btn_request: String = this.isArabic ? "طلب" : "Request"
  btn_details: String = this.isArabic ? "التفاصيل" : "Details"
  btn_requestSubmit: String = this.isArabic ? "اعتماد الطلب" : "Request Submit"
  btn_approve: String = this.isArabic ? "موافقة" : "Approve "
  btn_reject: String = this.isArabic ? "رفض" : "Reject "
  noDataToDisplay=this.isArabic? "لايوجد بيانات":"No Data to Display"
  btn_cancelCourse:String=this.isArabic ? "الغاء دورة تدريبية" :"Cancel Course"
  cancelCourse: String = this.isArabic ? "الغاء دورة تدريبية" : "Cancel Course"
  btn_done:String=this.isArabic? "تم":"Done"
  btn_addParticipants:String=this.isArabic ? "إضافة مشاركين" :"Add Participants"
  btn_clear: String = this.isArabic ? "مسح" : "Clear"
  



  //Titles

  //Main Components

  logout: String = this.isArabic ? "خروج" : "Logout"
  totalAppMemory: String = this.isArabic ? "اجمالي مساحة التخزين" : "Total App Memory"
  totalMemoryUsed: String = this.isArabic ? "مساحة التخزين المستخدمة" : "Total Memory Used"
  options: String = this.isArabic ? "خيارات" : "Options"
  layoutOptions: String = this.isArabic ? "خيارات الواجهة" : "Layout Options"
  collapsedSidebar: String = this.isArabic ? "الشريط الجانبي" : "Collapsed Sidebar"
  darkMode: String = this.isArabic ? "الوضع الداكن" : "Dark Mode"
  sidebarFilters: String = this.isArabic ? "تصفية الشريط الجانبي" : "Sidebar Filters "
  headerFilters: String = this.isArabic ? "تصفية العناوين" : "Header Filters "
  login_success:String = this.isArabic?" تم تسجيل الدخول بنجاح":"Successfully Logged In!"
  login_expire:String = this.isArabic?" تم انهاء جلسة العمل ":"Session Expired"
  logout_sucess:String = this.isArabic?"تم تسجيل الخروج " : "Successfully logged out!"
  //Main Menu

  menu_dashboard: String = this.isArabic ? "لوحة العمل" : "Dashboard"
  menu_instructor: String = this.isArabic ? "المحاضر" : "Instructor"
  menu_course: String = this.isArabic ? "الدورة التدريبية" : "Course"
  menu_courseManagement: String = this.isArabic ? "إدارة الدورة التدريبية" : "Course Management"
  menu_ci_system: String = this.isArabic ? "نظام التحقيقات والقضايا" : "CI System"
  menu_smart_engine: String = this.isArabic ? " ملف الموظف " : "Smart Engine"
  menu_reports: String = this.isArabic ? "التقارير" : "Reports"
  menu_jobCard: String = this.isArabic ? "بطاقة الوصف الوظيفي والتدريبي" : "Job Card"
  menu_user: String = this.isArabic ? "المستخدمين" : "Users"
  menu_requests: String = this.isArabic ? "طلبات التدريب" : "Training Requests"



  // Sub Menu 
  menu_welcome: String = this.isArabic ? "مرحباً " : "Welcome"
  menu_myCourses: String = this.isArabic ? "دوراتي التدريبية" : "My Courses"
  menu_createCourses: String = this.isArabic ? "إنشاء دورات تدريبية" : "Create Courses"
  menu_manageCourses: String = this.isArabic ? "إدارة الدورات التدريبية" : " Manage Courses"
  menu_linkCourse: String = this.isArabic ? "ربط الدورات التدريبية " : "Link Course"
  menu_activity: String = this.isArabic ? "النشاط التدريبي" : "Activity"
  menu_manageActivations: String = this.isArabic ? "إدارة الأنشطة التدريبية" : "Manage Activations"
  menu_activateCourse: String = this.isArabic ? "تفعيل دورة تدريبية" : "Activate Course"
  menu_createInstructor: String = this.isArabic ? "انشاء محاضر" : "Create Instructor"
  menu_manageInstructor: String = this.isArabic ? "ادارة محاضر" : "Manage Instructor"
  menu_newUser: String = this.isArabic ? "مستخدم جديد" : "New User"
  menu_searchUser: String = this.isArabic ? "بحث عن مستخدم" : "Search User"
  menu_userPermissions: String = this.isArabic ? "صلاحيات المستخدم" : "User Permissions"
  menu_searchJobCard: String = this.isArabic ? "بحث عن بطاقة الوصف الوظيفي والتدريبي" : "Search Job Card"
  menu_createJobCard: String = this.isArabic ? "انشاء بطاقة الوصف الوظيفي والتدريبي" : "Create Job Card"
  menu_allEmployees: String = this.isArabic ? "جميع الموظفين" : "All Employees"
  menu_courseRequests: String = this.isArabic ? "طلبات الدورات التدريبية" : "Course Requests"
  menu_employeeRequests: String = this.isArabic ? "توصيات الموظفين" : "Employee Requests"
  menu_employeeRequestsCancel: String = this.isArabic ? "الغاء طلب دورة تدريبية" : "Cancel My Requests"
  menu_employeeDelegation: String = this.isArabic ? "إدارة التفويض" : "Delegation"
  menu_myTasks: String = this.isArabic ? "مهامي" : "My Tasks"
  menu_history: String = this.isArabic ? "معلومات سابقة" : "History"
  menu_smartProfile: String = this.isArabic ? "الملف الشخصي " : "Smart Profile"
  menu_manageAttendance: String = this.isArabic ? "ادارة الحضور " : "Manage Attendance"
  menu_courseDataReport: String = this.isArabic ? "Course Data Report" : "Course Data Report"
  menu_courseStatusReport: String = this.isArabic ? "Course Status Report" : "Course Status Report"
  menu_instructorSubjectReport: String = this.isArabic ? "Instructor Subjects Report" : "Instructor Subjects Report"


  //system error 
  error_resource_not_found = this.isArabic ? "لم يتم العثور على بيانات" : "Resource Not found"
  error_unauthorized = this.isArabic ? "الصلاحية غير موجودة" : "UnAuthorized"
  error_bad_request = this.isArabic ? "لم يتم استكمال العملية، يرجى التواصل مع الدعم الفني" : "Bad Request, Contact Administrator"
  erro_unsupported_type = this.isArabic ? "لم يتم استكمال العملية، يرجى التواصل مع الدعم الفني" : "Unsupported Type, Contact Administrator"
  error_server_error = this.isArabic ? " مشكلة بالخادم، يرجى التواصل مع الدعم الفني" : "Server Error, Contact Administrator"

  //error validation 
  error_invalid_user = this.isArabic ? "المستخدم غير موجود" : "Invalid User"
  error_fill_all_forms = this.isArabic ? "جميع البيانات مطلوبة" : "Fill all inputs"
  error_request_exisit = this.isArabic ? "الطلب موجود بالفعل" : "The request alredy exisit."
  error_user_absent = this.isArabic ? "تم تسجيل غياب للمستخدم في هذا التاريخ، حاول بتاريخ آخر" : "The use is absent on the date,Try another date "
  error_date_request = this.isArabic ? "لقد قمت بطلب دورة في نفس التاريخ، اختر تاريخ آخر" : "You are alraeady requested for another course in the same time. Try some other dates"
   seat_full_message=this.isArabic ? "تم اكتمال العدد":" Seats are full1" 


  //jobcard status
  jobcard_total36hours = this.isArabic ? "الاجمالي 36 ساعة للورشة" : "Total 36 Hours of Workshop"
  jobcard_total60hours = this.isArabic ? "الاجمالي 60 ساعة للدورة التدريبية" : "Total 60 Hours of course"
  jobcard_total40hoursAdmin = this.isArabic ? "الاجمالي 40 ساعة للدورة التدريبية الإدارية" : "Total 40 Hours of Administrative Course"
  jobcard_total20hoursSpl = this.isArabic ? "الاجمالي 20 للدورة التخصصية" : "Total 20 Hours of Specialised Course"
  jobcard_total20hoursAdmin = this.isArabic ? "الاجمالي 20 ساعة للدورة التدريبية الإدارية" : "Total 20 Hours of Administrative Course"
  jobcard_total40hoursSpl = this.isArabic ? "الاجمالي 40 للدورة التخصصية" : "Total 40 Hours of Specialised Course"


  //Dashboard
  approved_courses= this.isArabic? "الدورات التي تم الموافقة عليها" :"Approved Courses"
  request_future_courses= this.isArabic? "طلب دورة تدريبية مستقبلية":"Request Future Courses"
  ongoing_courses= this.isArabic? "الدورات الحالية" :"Ongoing Courses"
  attended_courses= this.isArabic? "الدورات التي تم حضورها" : "Attended Courses"
  smartEngineSuggestion= this.isArabic? "اقتراحات محرك التدريب الذكي" : "Smart Engine Suggestion"
  myTasks= this.isArabic? "مهامي" : "My Tasks"
  

  //messages

  selectCourseOrActivitytoviewdate=this.isArabic?"اختر نشاط أو دورة تدريبية لعرض التاريخ" :"Select Course or Activity to view date"
  attendanceMarkedSuccessfully=this.isArabic? "تم تسجيل الحضور بنجاح": "Attendance Marked Successfully"
  courseCancelSuccessfull=this.isArabic? "تم الغاء الدورة التدريبية": "Successfully Cancelled Course"
  couldNotMarkFutureAttendance=this.isArabic? "لا يمكن تعيين الحضور في المستقبل":"Could not mark attendance for future dates"
  deleteParticipants=this.isArabic?"حذف المشاركين":"Delete Participants"
  courseHistory=this.isArabic?"تاريخ الدورات التدريبية" :"Course History"
  jobcardNotFound=this.isArabic?"لم يتم العثور علي بطاقة وظيفية او تدريبية":"No Job Card Found"
  cancelRequest=this.isArabic?"هذا الطلب تم الغاءه بواسطة المستخدم":"This request is cancelled by user"



  //REquest cancel page
  cancelRequestTitle=this.isArabic?"طلب الغاء دورة تدريبية":"Cancel Course Request"
  cancelRequestCreatedOn=this.isArabic?"تم الانشاء في":"Created On"
  cancelRequestcourse=this.isArabic?"دورة تدريبية":"Course"
  cancelRequestjobId=this.isArabic?"الرقم الوظيفي":"Job Number"
  cancelRequestStatus=this.isArabic?"الحالة":"Status"
  cancelRequestProcessing=this.isArabic?"المعالجة":"Processing"
  cancelRequestCancelled=this.isArabic?"تم الالغاء":"Cancelled"
  cancelRequestAction=this.isArabic?"اجراء":"Action"
  cancelRequestCancelRequest=this.isArabic?"الغاء":"Cancel"

  //delegation
  delegation_fromUser=this.isArabic?"تم التعيين من":"Assigned From"
  delegation_toUser=this.isArabic?"تم التعيين الي":"Assigned To"
  delegation_startDate=this.isArabic?"تاريخ البداية":"Start Date"
  delegation_endDate=this.isArabic?"تاريخ النهاية":"End Date"
  delegation_action=this.isArabic?"الاجراء":"Action"
  delegation_action_delete=this.isArabic?"الاجراء":"Action"
  delegation_action_delete_btn=this.isArabic?"حذف":"Delete"

  change_password_title= this.isArabic?"كلمة السر":"Password"
  confirm_change_password_title= this.isArabic?"تأكيد كلمة السر ":"Confirm Password "
  changepassword= this.isArabic?"تغيير كلمة السر":"Change Password"
  changepassword_success = this.isArabic?"تم تغيير كلمة السر بنجاح.":"Password Updated Successfully."
  changepassword_failed = this.isArabic?"لم يتم تغيير كلمة السر , يمكن التواصل مع الدعم للمساعدة.":"Password Updation Failed, Contact Administrator."
  changepassword_lenth_8= this.isArabic?"كلمة السر يجب ان لا تقل عن 8 أحرف":"Enter a valid password of length greater than 8"
  changepassword_notmatch= this.isArabic?"كلمة السر غير متطابقة":"Password is not matching"
 
   

  
}

