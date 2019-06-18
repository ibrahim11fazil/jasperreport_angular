import { Categories } from "./categories";
import { TrainingGuidelines } from "./training-guidelines";
import { TargetAudience } from "./target-audience";
import { ExpectedResults } from "./expected-results";
import { TacActivity } from "./tac-activity";

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
    public prerequisitesId:Number
    public subcourseFlag:Number
    public locationType:Number
    public tacCourseDates:Date[];
    public tacActivities:TacActivity[];
    
    constructor(courseId:Number,tacCourseCategory:Categories,courseName:String,duration:Number,objective:String,durationFlag:Number,
        numberofhours:Number,tacCourseGuidelineses:TrainingGuidelines[],targetAudience:TargetAudience[],expectedResults:ExpectedResults[],prerequisitesId:Number,subcourseFlag:Number,locationType:Number,tacCourseDates:Date[],tacActivities:TacActivity[]) {
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
         this.prerequisitesId=prerequisitesId;
    this. subcourseFlag=subcourseFlag;
    this. locationType=locationType;
    this. tacCourseDates=tacCourseDates;
    this. tacActivities=tacActivities;
    }
}
    export interface ResponseTacCourseMaster {
        status: Boolean;
        code:number;
        message:String;
        data: TacCourseMaster;
    }
    
    
    export interface ITacCourseMasterList {
        status: Boolean;
        code:number;
        message:String;
        data: TacCourseMaster[];
        count:number;
    }

    export interface Course{


         courseId:Number,
         tacCourseCategory:Categories;
         courseName:String
    }

    export interface ITacCourseList {
        status: Boolean;
        code:number;
        message:String;
        data: Course[];
        count:number;
    }
    
    


