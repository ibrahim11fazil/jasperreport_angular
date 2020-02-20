import { Component, OnInit, ViewChild } from '@angular/core';
// import { Component, OnInit, } from '@angular/core';
import {InstructorSubjectReportService} from '../../service/instructor-subject-report.service';
import {InstructorSubjectReport} from '../../models/instructor-subject-report';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatTableDataSource,MatPaginator  } from '@angular/material'; 
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import * as fileSaver from 'file-saver'; 
import { MainComponent } from 'app/main/main.component';
import { LanguageUtil } from 'app/app.language';

@Component({
  selector: 'app-instructor-subject-report',
  templateUrl: './instructor-subject-report.component.html',
  styleUrls: ['./instructor-subject-report.component.scss']
})
export class InstructorSubjectReportComponent implements OnInit {
  @ViewChild('reportForm') 
  public MyForm: NgForm;
  courses: Array<InstructorSubjectReport>;
  instructSubjReportType: string;
  fromDate = new Date();
  toDate = new Date();
  instructSubjReport: InstructorSubjectReport;
  generatedReportStatus :string;
  fileSystemName: string;
  classpathFileName: string;
  nextClicked = false;  
  language:LanguageUtil;
  displayDownloadButton=false;
//  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'type', 'courseName', 'organisation'];
  // dataSource = this.courses; 
  dataSource =new MatTableDataSource<InstructorSubjectReport>(); 
  displayMessage = false;
  matSpinnerStatus = false;
  constructor( private route: ActivatedRoute, 
    private router: Router, 
    private mainComponent:MainComponent,private instructorSubjectReportService: InstructorSubjectReportService,
    public datepipe: DatePipe,private _snackBar: MatSnackBar) {
      this.instructSubjReportType="" ;
      this.instructSubjReport=new InstructorSubjectReport
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
    // this.instructorSubjectReportService.getAll().subscribe(data => { 
    //   this.dataSource.data = data as InstructorSubjectReport[];
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
    if(this.MyForm.valid){
    console.log("instuct subj Name: "+this.instructSubjReport.name);
    // alert("id value is "+this.courseReportType);
    
    // let from_date =this.datepipe.transform(this.courseDataReport.fromDate, 'dd-MMM-yy');
    // let to_date =this.datepipe.transform(this.courseDataReport.toDate, 'dd-MMM-yy');
    
    // this.courseDataReport.fromDate=from_date;
    // this.courseDataReport.toDate=to_date; 
    // alert("fromDate toDate  is "+this.instructSubjReport.companyName);
    // this.courseDataReportService.generateReport(this.courseReportType, from_date, to_date).subscribe(result => this.consolecheck());
    this.instructorSubjectReportService.generateReport(this.instructSubjReportType, this.instructSubjReport).subscribe(result => {
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
  }else{

    this._snackBar.open("Please fill all fields","",{duration:1000});
  }
    
  }

  consolecheck(){
    // alert("id 3 value is "+this.instructSubjReportType);
  }

  //using file system
  downloadFileSystem() {
    // this.courseStatusReportService.downloadFileSystem(this.fileSystemName)
    if(this,this.instructSubjReportType==="pdf"){
            this.instructorSubjectReportService.downloadPDFFileSystem(this.fileSystemName)
              .subscribe(response => {
                const filename = response.headers.get('filename'); 
                this.savePDFFile(response.body, filename);
              });
    }else{
      this.instructorSubjectReportService.downloadExcelFileSystem(this.fileSystemName)
      .subscribe(response => {
        const filename = response.headers.get('filename'); 
        this.saveExcelFile(response.body, filename);
      });

    }
  }
 
  // downloadClasspathFile() {
  //   this.instructorSubjectReportService.downloadClasspathFile(this.classpathFileName)
  //     .subscribe(response => {
  //       const filename = response.headers.get('filename'); 
  //       this.saveFile(response.body, filename);
  //     });
  // }
 
  savePDFFile(data: any, filename?: string) { 
      const blob = new Blob([data], {type: 'application/pdf'});
      // fileSaver.saveAs(blob, "InstructorSubjectReport.pdf");
      fileSaver.saveAs(blob, this.language.menu_instructorSubjectReport+".pdf"); 
  }

  saveExcelFile(data: any, filename?: string) { 
      const blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      // fileSaver.saveAs(blob, "InstructorSubjectReport.xlsx");
      fileSaver.saveAs(blob, this.language.menu_instructorSubjectReport+".pdf");
    
  }
 
}
