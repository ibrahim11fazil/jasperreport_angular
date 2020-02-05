import { CourseStatusReport } from './course-status-report';

export class ResponseType {
    status: Boolean;
    code:number;
    message:String;
    data: CourseStatusReport[];
}
