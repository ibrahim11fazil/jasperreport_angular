import { Categories } from "./categories";
import { TrainingGuidelines } from "./training-guidelines";
import { TargetAudience } from "./target-audience";
import { ExpectedResults } from "./expected-results";
import { TacActivity } from "./tac-activity";
import { CourseDate } from "./courseDate";
import { Prerequisites } from "./prerequisites";


export class TacCourseMaster {


    public courseId:Number
	public tacCourseCategory:Categories;
	public courseName:String
    public  duration:Number
    public objective:String
	public  durationFlag:Number
	public  numberofhours:Number
    public tacCourseGuidelineses:TrainingGuidelines[];
    public tacCourseAudiences:TargetAudience[];
    public tacCourseOutcomes:ExpectedResults[];
    //public prerequisitesId:Number
    public subcourseFlag:Number
    public locationType:Number
    public tacCourseDates:CourseDate[];
    public tacActivities:TacActivity[];
    public tacCoursePrerequisiteses:Prerequisites[];
   
    
    constructor(courseId:Number,tacCourseCategory:Categories,courseName:String,duration:Number,objective:String,durationFlag:Number,
        numberofhours:Number,tacCourseGuidelineses:TrainingGuidelines[],targetAudience:TargetAudience[],expectedResults:ExpectedResults[],tacCoursePrerequisiteses:Prerequisites[],subcourseFlag:Number,locationType:Number,tacCourseDates:CourseDate[],tacActivities:TacActivity[]) {
        this.courseId=courseId;
        this.tacCourseCategory=tacCourseCategory;
        this.courseName=courseName;
        this.duration=duration;
        this.objective=objective;
        this.numberofhours=numberofhours;
        this.durationFlag=durationFlag;
        this.tacCourseGuidelineses=tacCourseGuidelineses;
        this.tacCourseAudiences=targetAudience;
         this.tacCourseOutcomes=expectedResults;
         this.tacCoursePrerequisiteses=tacCoursePrerequisiteses;
    this. subcourseFlag=subcourseFlag;
    this. locationType=locationType;
    this. tacCourseDates=tacCourseDates;
    this. tacActivities=tacActivities;
    }
}
    export class SearchCourse    {
    courseId?:Number;
    courseName?:String;
    start:Number;
    limit:Number;
    }
    export interface ResponseTacCourseMaster {
        status: Boolean;
        code:number;
        message:String;
        data: TacCourseMaster;
    }

    export class TacCourseMasterSub{
        public courseName?:String
    }
    
    
    export interface ITacCourseMasterList {
        status: Boolean;
        code:number;
        message:String;
        data: TacCourseMaster[];
        count:number;
    }

    export interface Course{
         hours:Number;
         categoryId:Number;
         categoryName:String;
         courseId:Number;
         tacCourseCategory:Categories;
         courseName:String;
    }

   

    export interface ITacCourseList {
        status: Boolean;
        code:number;
        message:String;
        data: Course[];
        count:number;
    }

    export class CourseActivityDatesRequest{
        public courseId:Number
        public activityId:Number
    }

    export class CourseManagementRes{
        public courseName:String
        public course_date:String
        public end_date:String
        public activation_id:Number
        public courseStatus:Number
    }
    export interface ITacCourseManagementList {
        status: Boolean;
        code:number;
        message:String;
        data: CourseManagementRes[];
        count:number;
    }
    export interface myTaskCount {
        status: Boolean;
        code:number;
        message:String;
        data: Number;
        count:number;
    }
    
    


