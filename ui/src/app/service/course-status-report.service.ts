import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CourseStatusReport} from '../models/course-status-report';
import { PDF_REPORT_DOWNLOAD, EXCEL_REPORT_DOWNLOAD, GET_COURSE_STATUS_REPORT } from 'app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class CourseStatusReportService {
 
  private courseUrl :string;
  private courseUrl2 :string;
  constructor(private http: HttpClient ) {
    // this.courseUrl = 'http://localhost:8080/courseStatusReport';
    // this.courseUrl2 = 'http://localhost:8080/getCourse';
    
   }

  getAll(): Observable<CourseStatusReport[]> {
      return this.http.get<CourseStatusReport[]>(this.courseUrl2);
  } 
  
    public   generateReport(reportType: string, courseData:Object): Observable<any> {
    console.log(); 
    return this.http.post(`${GET_COURSE_STATUS_REPORT}/${reportType}`,courseData,{responseType: 'text'});
  }


  downloadPDFFileSystem(filename: string): Observable<HttpResponse<Blob>> {
    // downloadFileSystem(fileType: string): Observable<HttpResponse<Blob>> {
        console.log("download call"); 
        let headers = new HttpHeaders();
        headers = headers.append('Accept', 'application/pdf');
        filename="CourseStatusReport.pdf";
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
      fileType="CourseStatusReport.xlsx";
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
