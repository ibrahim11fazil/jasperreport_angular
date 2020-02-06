import { Component, OnInit, ViewChild } from '@angular/core';
// import { Component, OnInit, } from '@angular/core';
import { CourseStatusReportService } from '../../service/course-status-report.service';
import {CourseStatusReport} from '../../models/course-status-report';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatTableDataSource,MatPaginator  } from '@angular/material'; 
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import * as fileSaver from 'file-saver'; 

@Component({
  selector: 'app-course-status-report',
  templateUrl: './course-status-report.component.html',
  styleUrls: ['./course-status-report.component.css']
})
export class CourseStatusReportComponent implements OnInit { 
  @ViewChild('reportForm') 
  public MyForm: NgForm;
  courses: Array<CourseStatusReport>;
  courseStatusReportType: string;
  fromDate = new Date();
  toDate = new Date();
  courseStatusReport: CourseStatusReport;
  generatedReportStatus :string;
  fileSystemName: string;
  classpathFileName: string;
  nextClicked = false;  
//  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['courseName', 'duration', 'startDate', 'endDate'];
  // dataSource = this.courses; 
  dataSource =new MatTableDataSource<CourseStatusReport>(); 
  displayMessage = false;
  matSpinnerStatus=false;
  constructor( private route: ActivatedRoute, 
    private router: Router, private courseStatusReportService: CourseStatusReportService,
    public datepipe: DatePipe,private _snackBar: MatSnackBar) {
      this.courseStatusReportType="" ;
      this.courseStatusReport=new CourseStatusReport
      
     }
     ngAfterViewInit(): void {
      // this.dataSource.paginator = this.paginator;
     }
  
  ngOnInit() { 
    // console.log("im here ngonInit");
    // this.courseStatusReportService.getAll().subscribe(data => {
      
    //   console.log("getting data");
    //   // this.courses = data;
    //   this.dataSource.data = data as CourseStatusReport[];
    // });
  }

  public onNextClick(): void {
    this.nextClicked = true;
  }

  public onPreviousClick(): void {
    this.nextClicked = false;
  }

  public onSubmit(): void {
    this.displayMessage=false;
    if(this.nextClicked) {
      if(this.MyForm.valid){
        this.matSpinnerStatus=true; 
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
    // alert("fromDate toDate  is "+this.courseStatusReport.startDate);
    // this.courseDataReportService.generateReport(this.courseReportType, from_date, to_date).subscribe(result => this.consolecheck());
    this.courseStatusReportService.generateReport(this.courseStatusReportType, this.courseStatusReport).subscribe(result => {
      this.generatedReportStatus=result;
      this.displayMessage=true;
      this.matSpinnerStatus=false;
      // this.dataSource.data = result as Array<CourseStatusReport> ;
      // alert("HERER WE ARE");
      // alert("generated rport startus is "+result);
    });
  // }else{ 
  //     this._snackBar.open("Please fill all fields","",{duration:1000});
  // }
    
  }

public toDateInputValidator(event:any){
   console.log("***event value"+event.target.value); 
    // const pattern = /^[0-9]*$/;   
    //let inputChar = String.fromCharCode(event.charCode)
    // if (event.target.value >) {
      // event.target.value = event.target.value.replace(/[^a-zA-Z0-9]/g, "");
      // event.target.value = event.target.value.replace(/[^0-9]/g, "");
      // invalid character, prevent input
      // this._snackBar.open("Only Digits Allowed","",{duration:1500});

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
    alert("id 3 value is "+this.courseStatusReport);
  }
 
//using file system
  downloadFileSystem() {
    // this.courseStatusReportService.downloadFileSystem(this.fileSystemName)
    if(this,this.courseStatusReportType==="pdf"){
            this.courseStatusReportService.downloadPDFFileSystem(this.fileSystemName)
              .subscribe(response => {
                const filename = response.headers.get('filename'); 
                this.saveFile(response.body, filename);
              });
    }else{
      this.courseStatusReportService.downloadExcelFileSystem(this.fileSystemName)
      .subscribe(response => {
        const filename = response.headers.get('filename'); 
        this.saveFile2(response.body, filename);
      });

    }
  }
 
  downloadClasspathFile() {
    this.courseStatusReportService.downloadClasspathFile(this.classpathFileName)
      .subscribe(response => {
        const filename = response.headers.get('filename'); 
        this.saveFile(response.body, filename);
      });
  }
 
  saveFile(data: any, filename?: string) { 
      const blob = new Blob([data], {type: 'application/pdf'});
      fileSaver.saveAs(blob, "CourseStatusReport.pdf"); 
  }

  saveFile2(data: any, filename?: string) { 
      const blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      fileSaver.saveAs(blob, "CourseStatusReport.xlsx");
    
  }

}
