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
import { LanguageUtil } from 'app/app.language';
import { MainComponent } from 'app/main/main.component';

 
@Component({
  selector: 'app-course-data-report',
  templateUrl: './course-data-report.component.html',
  styleUrls: ['./course-data-report.component.scss']
})
export class CourseDataReportComponent implements OnInit {
  @ViewChild('reportForm') 
  public MyForm: NgForm;
  courses: Array<CourseDataReport>;
  courseReportType: string;
  fromDate = new Date();
  toDate = new Date();
  courseDataReport: CourseDataReport;
  generatedReportStatus :string;
  fileSystemName: string;
  nextClicked = false; 
  classpathFileName: string;
  displayMessage = false;
  matSpinnerStatus = false;
  language:LanguageUtil;
  displayDownloadButton=false;
  startDate:string;
  endDate:string;
//  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['courseName', 'duration', 'startDate', 'endDate'];
  // dataSource = this.courses; 
  dataSource =new MatTableDataSource<CourseDataReport>(); 
  
  constructor( private route: ActivatedRoute, 
    private mainComponent:MainComponent,
    private router: Router, private courseDataReportService: CourseDataReportService,
    public datepipe: DatePipe,private _snackBar: MatSnackBar) {
      this.courseReportType="" ;
      
      this.courseDataReport=new CourseDataReport
      this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
     }
     ngDoCheck(): void
     {
      this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
     }
     ngAfterViewInit(): void {
      // this.dataSource.paginator = this.paginator;
     }
  
  ngOnInit() { 
    //console.log("im here ngonInit");
    // this.courseDataReportService.getAll().subscribe(data => { 
    //   console.log("getting data");
    //   // this.courses = data;
    //   this.dataSource.data = data as CourseDataReport[];
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
    this.displayDownloadButton=false;
    if(this.nextClicked) {
      if(this.MyForm.valid){  
        this.matSpinnerStatus=true; 
        this.generateReport();
      }else{ 
            this._snackBar.open(this.language.error_select_report_type,"",{duration:1500});
      }
      
    }else {
      if(this.MyForm.valid){  
        this.downloadFileSystem();
      }else{  
            this._snackBar.open(this.language.error_select_report_type,"",{duration:1500});
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

      if(this.generatedReportStatus==="No Data Found"){
        this.displayDownloadButton=false; 
        this.generatedReportStatus= this.language.delegationsNotFound.toString();
      }else{
        this.displayDownloadButton=true; 
        this.generatedReportStatus= this.language.label_report_status_success;
      }
      
      this.displayMessage=true;
      this.matSpinnerStatus=false;
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
      // this._snackBar.open("Only Digits Allowed","",{duration:1500});
      this._snackBar.open(this.language.error_only_digits_allowed,"",{duration:1500});

    }
  }

 public dateValidator(event:any){
    console.log(event);
    console.log("***event value "+event.targetElement.name);  
      
      // added to avoid null values during validation process
      if(event.targetElement.name==="startDate" && event.target.value===null) {
        this.courseDataReport.startDate=undefined
        event.target.value===undefined;
     }
     if(event.targetElement.name==="endDate" && event.target.value===null){
       this.courseDataReport.endDate=undefined
       event.target.value===undefined;
     }

     // added for validating end date should not be less than start date
      if((this.courseDataReport!=null && 
          this.courseDataReport.startDate != null && this.courseDataReport.endDate !=null))
      {
        this.startDate = this.datepipe.transform(this.courseDataReport.startDate,"dd-MM-yyyy");
        this.endDate = this.datepipe.transform(this.courseDataReport.endDate,"dd-MM-yyyy"); 
         
        if(this.endDate < this.startDate)
        {
          if(event.targetElement.name==="startDate") 
            this.courseDataReport.startDate=undefined
          if(event.targetElement.name==="endDate")
            this.courseDataReport.endDate=undefined
          event.target.value ="";
          this._snackBar.open(this.language.datesValidationInDelgation.toString(),"",{duration:1500});
        } 
      }
      console.log("***startDate value "+ this.courseDataReport.startDate);  
      console.log("***endDate value "+this.courseDataReport.endDate);  
    }
  // public endDateInputValidator(event:any){
  //   console.log(event);
  //   console.log("***event value"+event.target.value);  
  //      this.startDate = this.datepipe.transform(this.courseDataReport.startDate,"dd-MM-yyyy");
  //      this.endDate = this.datepipe.transform(this.courseDataReport.endDate,"dd-MM-yyyy");  
  //     if((this.startDate != null && this.endDate !=null) && (this.endDate) < (this.startDate)){
  //       event.target.value ="";
  //       this._snackBar.open("Only Digits Allowed","",{duration:1500});
  //     }  
  // }


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
                this.savePDFFile(response.body, filename);
              });
    }else{
      this.courseDataReportService.downloadExcelFileSystem(this.fileSystemName)
      .subscribe(response => {
        const filename = response.headers.get('filename'); 
        this.saveExcelFile(response.body, filename);
      });

    }
  }
 
  // downloadClasspathFile() {
  //   this.courseDataReportService.downloadClasspathFile(this.classpathFileName)
  //     .subscribe(response => {
  //       const filename = response.headers.get('filename'); 
  //       this.saveFile(response.body, filename);
  //     });
  // }
 
  savePDFFile(data: any, filename?: string) { 
      const blob = new Blob([data], {type: 'application/pdf'});
      fileSaver.saveAs(blob,this.language.menu_courseDataReport+".pdf"); 
  }

  saveExcelFile(data: any, filename?: string) { 
      const blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      fileSaver.saveAs(blob, this.language.menu_courseDataReport+".xlsx");
    
  }


}
