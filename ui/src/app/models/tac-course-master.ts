import { Categories } from "./categories";
import { TrainingGuidelines } from "./training-guidelines";
import { TargetAudience } from "./target-audience";
import { ExpectedResults } from "./expected-results";

export class TacCourseMaster {


    public courseId:Number
	public tacCourseCategory:Categories;
	public courseName:String
    public  duration:Number
    public objective:String
	public  durationFlag:Number
	public  numberofhours:Number
    public tacCourseGuidelineses:TrainingGuidelines[];
    public targetAudience:TargetAudience[];
    public expectedResults:ExpectedResults[];
    constructor(courseId:Number,tacCourseCategory:Categories,courseName:String,duration:Number,objective:String,durationFlag:Number,
        numberofhours:Number,tacCourseGuidelineses:TrainingGuidelines[],targetAudience:TargetAudience[],expectedResults:ExpectedResults[]) {
        this.courseId=courseId;
        this.tacCourseCategory=tacCourseCategory;
        this.courseName=courseName;
        this.duration=duration;
        this.objective=objective;
        this.numberofhours=numberofhours;
        this.durationFlag=durationFlag;
        this.tacCourseGuidelineses=tacCourseGuidelineses;
        this.targetAudience=targetAudience;
         this.expectedResults=expectedResults;
    }
}
    export interface ResponseTacCourseMaster {
        status: Boolean;
        code:number;
        message:String;
        data: TacCourseMaster;
    }
    
    
    export interface ITacActivityList {
        status: Boolean;
        code:number;
        message:String;
        data: TacCourseMaster[];
        count:number;
    }
    


