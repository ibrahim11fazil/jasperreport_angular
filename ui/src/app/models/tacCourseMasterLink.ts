import { TacCourseMaster } from "./tac-course-master";
import { TacActivity } from "./tac-activity";
import { Categories } from "./categories";
import { TrainingGuidelines } from "./training-guidelines";
import { TargetAudience } from "./target-audience";
import { ExpectedResults } from "./expected-results";

export interface TacCourseMasterLink   {

     prerequisitesId:Number
	subcourseFlag:Number
     locationType:Number
     tacActivities:TacActivity;
     tacCourseDates:Date[];

     

   
}