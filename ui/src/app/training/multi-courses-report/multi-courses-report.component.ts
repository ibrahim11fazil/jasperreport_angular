import { Component, OnInit, ViewChild } from '@angular/core';
// import { Component, OnInit, } from '@angular/core';
import { MultiCoursesReportService } from '../../service/multi-courses-report.service';
import {MultiCoursesReport} from '../../models/multi-courses-report'
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatTableDataSource,MatPaginator  } from '@angular/material'; 
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import * as fileSaver from 'file-saver'; 
import { LanguageUtil } from 'app/app.language';
import { MainComponent } from 'app/main/main.component';

@Component({
  selector: 'ms-multi-courses-report',
  templateUrl: './multi-courses-report.component.html',
  styleUrls: ['./multi-courses-report.component.scss']
})
export class MultiCoursesReportComponent implements OnInit {

  
  @ViewChild('reportForm') 
  public MyForm: NgForm;
  courses: Array<MultiCoursesReport>;
  multiCoursesReportType: string;
  fromDate = new Date();
  toDate = new Date();
  multiCoursesReport: MultiCoursesReport;
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
  dataSource =new MatTableDataSource<MultiCoursesReport>(); 
  
  constructor( private route: ActivatedRoute, 
    private mainComponent:MainComponent,
    private router: Router, private multiCoursesReportService: MultiCoursesReportService,
    public datepipe: DatePipe,private _snackBar: MatSnackBar) {
      this.multiCoursesReportType="" ;  
      this.multiCoursesReport=new MultiCoursesReport
      this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
     }
     ngDoCheck(): void
     {
      this.language = new LanguageUtil(this.mainComponent.layoutIsRTL());
     }
     ngAfterViewInit(): void { 
     }
  
  ngOnInit() {  
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
      
      this.multiCoursesReportService.generateReport(this.multiCoursesReportType, this.multiCoursesReport).subscribe(result => {
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
     }); 
  }

  public dateValidator(event:any){
    console.log(event);
    console.log("***event value "+event.targetElement.name);  
        
      // added to avoid null values during validation process
      if(event.targetElement.name==="startDate" && event.target.value===null) {
        this.multiCoursesReport.startDate=undefined
        event.target.value===undefined;
     }
     if(event.targetElement.name==="endDate" && event.target.value===null){
       this.multiCoursesReport.endDate=undefined
       event.target.value===undefined;
     }

     // added for validating end date should not be less than start date
      if((this.multiCoursesReport!=null && 
          this.multiCoursesReport.startDate != null && this.multiCoursesReport.endDate !=null))
      {
        this.startDate = this.datepipe.transform(this.multiCoursesReport.startDate,"yyyy-MM-dd");
        this.endDate = this.datepipe.transform(this.multiCoursesReport.endDate,"yyyy-MM-dd"); 
         
        if(this.endDate < this.startDate)
        {
          if(event.targetElement.name==="startDate") 
            this.multiCoursesReport.startDate=undefined
          if(event.targetElement.name==="endDate")
            this.multiCoursesReport.endDate=undefined
          event.target.value ="";
          this._snackBar.open(this.language.datesValidationInDelgation.toString(),"",{duration:1500});
        } 
      }
      console.log("***startDate value "+ this.multiCoursesReport.startDate);  
      console.log("***endDate value "+this.multiCoursesReport.endDate);  
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
  consolecheck(){
    alert("id 3 value is "+this.multiCoursesReportType);
  }
 
  //using file system
  downloadFileSystem() {
    // this.courseStatusReportService.downloadFileSystem(this.fileSystemName)
    if(this,this.multiCoursesReportType==="pdf"){
            this.multiCoursesReportService.downloadPDFFileSystem(this.fileSystemName)
              .subscribe(response => {
                const filename = response.headers.get('filename'); 
                this.savePDFFile(response.body, filename);
              });
    }else{
      this.multiCoursesReportService.downloadExcelFileSystem(this.fileSystemName)
      .subscribe(response => {
        const filename = response.headers.get('filename'); 
        this.saveExcelFile(response.body, filename);
      });

    }
  }
 
  // downloadClasspathFile() {
  //   this.multiCoursesReportService.downloadClasspathFile(this.classpathFileName)
  //     .subscribe(response => {
  //       const filename = response.headers.get('filename'); 
  //       this.saveFile(response.body, filename);
  //     });
  // }
 
  savePDFFile(data: any, filename?: string) { 
      const blob = new Blob([data], {type: 'application/pdf'});
      // fileSaver.saveAs(blob, "MultiCoursesReport.pdf"); 
      fileSaver.saveAs(blob, this.language.menu_multiCoursesReport+".pdf");
  }

  saveExcelFile(data: any, filename?: string) { 
      const blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      // fileSaver.saveAs(blob, "MultiCoursesReport.xlsx");
      fileSaver.saveAs(blob, this.language.menu_multiCoursesReport+".xlsx");
    
  }

}
