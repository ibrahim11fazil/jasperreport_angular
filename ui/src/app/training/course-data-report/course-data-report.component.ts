// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'ms-course-data-report',
//   templateUrl: './course-data-report.component.html',
//   styleUrls: ['./course-data-report.component.scss']
// })
// export class CourseDataReportComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit, ViewChild } from '@angular/core';
// import { Component, OnInit, } from '@angular/core';
import { CourseDataReportService } from '../../service/course-data-report.service';
import {CourseDataReport} from '../../models/course-data-report'
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatTableDataSource,MatPaginator  } from '@angular/material'; 
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as fileSaver from 'file-saver'; 

 
@Component({
  selector: 'app-course-data-report',
  templateUrl: './course-data-report.component.html',
  styleUrls: ['./course-data-report.component.css']
})
export class CourseDataReportComponent implements OnInit {
  @ViewChild('reportForm',{static:false}) public MyForm: NgForm;
  courses: Array<CourseDataReport>;
  courseReportType: string;
  fromDate = new Date();
  toDate = new Date();
  courseDataReport: CourseDataReport;
  generatedReportStatus :string;
  fileSystemName: string;
  nextClicked = false; 
  classpathFileName: string;
//  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['courseName', 'duration', 'startDate', 'endDate'];
  // dataSource = this.courses; 
  dataSource =new MatTableDataSource<CourseDataReport>(); 
  
  constructor( private route: ActivatedRoute, 
    private router: Router, private courseDataReportService: CourseDataReportService,
    public datepipe: DatePipe,private _snackBar: MatSnackBar) {
      this.courseReportType="" ;
      this.courseDataReport=new CourseDataReport
     }
     ngAfterViewInit(): void {
      // this.dataSource.paginator = this.paginator;
     }
  
  ngOnInit() {
    console.log("im here ngonInit");
    this.courseDataReportService.getAll().subscribe(data => {
      
      console.log("getting data");
      // this.courses = data;
      this.dataSource.data = data as CourseDataReport[];
    });
  }

  public onNextClick(): void {
    this.nextClicked = true;
  }

  public onPreviousClick(): void {
    this.nextClicked = false;
  }

  public onSubmit(): void {
    if(this.nextClicked) {
      if(this.MyForm.valid){
        this.generateReport();
      }else{ 
            this._snackBar.open("Please Select Report Type : PDF/Excel","",{duration:3000});
        }
      
    }else {
      if(this.MyForm.valid){
        this.downloadFileSystem();
      }else{ 
            this._snackBar.open("Please Select Report Type : PDF/Excel","",{duration:3000});
        }
    }

  }

  generateReport(){
    // if(this.MyForm.valid){
    console.log("im here ger");
    // alert("id value is "+this.courseReportType);
    
    // let from_date =this.datepipe.transform(this.courseDataReport.fromDate, 'dd-MMM-yy');
    // let to_date =this.datepipe.transform(this.courseDataReport.toDate, 'dd-MMM-yy');
    
    // this.courseDataReport.fromDate=from_date;
    // this.courseDataReport.toDate=to_date; 
    // alert("fromDate toDate  is "+this.courseDataReport.startDate);
    // this.courseDataReportService.generateReport(this.courseReportType, from_date, to_date).subscribe(result => this.consolecheck());
    this.courseDataReportService.generateReport(this.courseReportType, this.courseDataReport).subscribe(result => {
      this.generatedReportStatus=result;
      // alert("HERER WE ARE");
      // alert("generated rport startus is "+this.generatedReportStatus);
    });
  // }else{

  //   this._snackBar.open("Please fill all fields","",{duration:1000});
  // }
    
  }


  public inputValidator(event: any) {
    // console.log("***event value"+event.target.value);
    // const pattern = /^[a-zA-Z0-9]*$/;
    const pattern = /^[0-9]*$/;   
    //let inputChar = String.fromCharCode(event.charCode)
    if (!pattern.test(event.target.value)) {
      // event.target.value = event.target.value.replace(/[^a-zA-Z0-9]/g, "");
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
      // invalid character, prevent input
      this._snackBar.open("Only Digits Allowed","",{duration:1500});

    }
  }
  consolecheck(){
    alert("id 3 value is "+this.courseReportType);
  }
 
  //using file system
  downloadFileSystem() {
    // this.courseStatusReportService.downloadFileSystem(this.fileSystemName)
    if(this,this.courseReportType==="pdf"){
            this.courseDataReportService.downloadPDFFileSystem(this.fileSystemName)
              .subscribe(response => {
                const filename = response.headers.get('filename'); 
                this.saveFile(response.body, filename);
              });
    }else{
      this.courseDataReportService.downloadExcelFileSystem(this.fileSystemName)
      .subscribe(response => {
        const filename = response.headers.get('filename'); 
        this.saveFile2(response.body, filename);
      });

    }
  }
 
  downloadClasspathFile() {
    this.courseDataReportService.downloadClasspathFile(this.classpathFileName)
      .subscribe(response => {
        const filename = response.headers.get('filename'); 
        this.saveFile(response.body, filename);
      });
  }
 
  saveFile(data: any, filename?: string) { 
      const blob = new Blob([data], {type: 'application/pdf'});
      fileSaver.saveAs(blob, "CourseDetailsReport.pdf"); 
  }

  saveFile2(data: any, filename?: string) { 
      const blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      fileSaver.saveAs(blob, "CourseDetailsReport.xlsx");
    
  }


}

