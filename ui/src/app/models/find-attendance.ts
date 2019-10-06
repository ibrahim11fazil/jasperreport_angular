export class FindAttendance {

    courseName:String;
      course_date:Date;
      end_date:Date;
      activation_id:Number;

      constructor(activation_id:Number,course_date:Date,end_date:Date) {

        this.activation_id=activation_id;
        this.course_date=course_date;
        this.end_date=end_date;
    }
}

export class FindAttendanceResponse {
  status: Boolean;
  code: number;
  message: String;
  data: FindAttendance[];
}
