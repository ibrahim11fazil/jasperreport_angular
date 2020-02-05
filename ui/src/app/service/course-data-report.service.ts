import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CourseDataReport} from '../models/course-data-report';
import { GET_ALL_COURSE_REPORT, PDF_REPORT_DOWNLOAD, EXCEL_REPORT_DOWNLOAD } from 'app/app.constants';


@Injectable({
  providedIn: 'root'
})
export class CourseDataReportService {

  private courseUrl :string;
  private courseUrl2 :string;
  constructor(private http: HttpClient ) {
    // this.courseUrl = 'http://localhost:8080/report';
    // this.courseUrl2 = 'http://localhost:8080/getCourse';
    
   }

  getAll(): Observable<CourseDataReport[]> {
      return this.http.get<CourseDataReport[]>(this.courseUrl2);
  }
  // generateReport(id: String): Observable<CourseDataReport> {
  //   return this.http.post(this.courseUrl);
  // }

  // public generateReport(id: string, fromDate:string, toDate:string) {
  //   console.log();
  //   alert("id 2value is "+id);courseData
  //   return this.http.get<CourseDataReport>(`${this.courseUrl}/${fromDate}/${toDate}/${id}`);
    
  // }

  // public   generateReport(reportType: string, courseData:CourseDataReport) {
    public   generateReport(reportType: string, courseData:Object): Observable<any> {
    console.log();
    // let body = JSON.stringify(courseData); 
    // console.log("CourseDate"+courseData.fromDate);
    // alert("id 2value is "+id);courseData
    // return this.http.get<CourseDataReport>(`${this.courseUrl}/${fromDate}/${toDate}/${reportType}`);
    // return this.http.get<CourseDataReport>(`${this.courseUrl}/${courseData}/${reportType}`);
    return this.http.post(`${GET_ALL_COURSE_REPORT}/${reportType}`,courseData,{responseType: 'text'});
  }


  downloadPDFFileSystem(filename: string): Observable<HttpResponse<Blob>> {
    // downloadFileSystem(fileType: string): Observable<HttpResponse<Blob>> {
        console.log("download call"); 
        let headers = new HttpHeaders();
        headers = headers.append('Accept', 'application/pdf');
        filename="CourseDetailsReport.pdf";
        // return this.http.get('/api/files/system/' + filename, {
        //   headers: headers,
        //   observe: 'response',
        //   responseType: 'text'
        // });
        return this.http.get(`${PDF_REPORT_DOWNLOAD}/${filename}`, {
          headers: headers,
          observe: 'response',
          responseType: 'blob'
        });
    }
 
// downloadFileSystem(filename: string): Observable<HttpResponse<Blob>> {
  downloadExcelFileSystem(fileType: string): Observable<HttpResponse<Blob>> {
    console.log("download call" + fileType); 
      let headers = new HttpHeaders();
      
      headers = headers.append('Accept', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      fileType="CourseDetailsReport.xlsx";
      console.log("download call" + fileType);  
      return this.http.get(`${EXCEL_REPORT_DOWNLOAD}/${fileType}`, {
        headers: headers,
        observe: 'response',
        responseType: 'blob'
      });
  }

  downloadClasspathFile(filename: string): Observable<HttpResponse<string>> {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'text/csv; charset=utf-8');
 
    return this.http.get('/api/files/classpath/' + filename, {
      headers: headers,
      observe: 'response',
      responseType: 'text'
    });
  }

 
}
