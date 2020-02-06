import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatGridListModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatTabsModule,
  MatChipsModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatInputModule,
  MatSelectModule, 
  MatSlideToggleModule,
  MatDialog,
  MatDialogModule,
  MatRadioButton,
  MatRadioModule,
  MatCheckbox,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule
  
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TranslateModule} from "@ngx-translate/core";
import { WelcomeComponent } from './welcome/welcome.component';
import {TrainingRoutes} from "./training.routing";
import { ActivityComponent } from './activity/activity.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { SearchCourseComponent, CourseActionDialog } from './search-course/search-course.component';
import {CourseLinkComponent} from './course-link/course-link.component';
import { ActivateCourseComponent } from './activate-course/activate-course.component';
import { CreateInstructorComponent } from './create-instructor/create-instructor.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import {A11yModule} from '@angular/cdk/a11y';    
import {DragDropModule} from '@angular/cdk/drag-drop';    
import {PortalModule} from '@angular/cdk/portal';    
import {ScrollingModule} from '@angular/cdk/scrolling';    
import {CdkStepperModule} from '@angular/cdk/stepper';    
import {CdkTableModule} from '@angular/cdk/table';    
import {CdkTreeModule} from '@angular/cdk/tree'; 

import {    
  MatProgressBarModule,    
  MatSortModule,    
  MatStepperModule,    
  MatTableModule,       
  MatToolbarModule  
} from '@angular/material';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { CisSystemComponent } from './cis-system/cis-system.component';
import { SearchInstructorComponent } from './search-instructor/search-instructor.component';
import { CisCourseRequestsIMadeComponent } from './cis-course-requests-i-made/cis-course-requests-i-made.component';
import { ActivationsComponent } from './activations/activations.component';
import { CourseManagementComponent } from './course-management/course-management.component';   
import { JobCardComponent } from './job-card/job-card.component';
import { JobCardSearchComponent } from './job-card-search/job-card-search.component';
//import { CalendarRoutes } from 'app/calendar/calendar.routing';
import { CalendarModule,DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { EmpRequestComponent } from './emp-request/emp-request.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { ViewTaskDetailsComponent } from './popup/view-task-details/view-task-details.component';
import { MyTasksHistoryComponent } from './my-tasks-history/my-tasks-history.component';
import { UserPermissionsComponent } from './user-permissions/user-permissions.component';
import { SmartProfileComponent } from './smart-profile/smart-profile.component';
import { EmpReqeustCancelComponent } from './emp-reqeust-cancel/emp-reqeust-cancel.component';
import { EmpDelegationComponent } from './emp-delegation/emp-delegation.component';
import { CourseDataReportComponent } from './course-data-report/course-data-report.component';
import { CourseStatusReportComponent } from './course-status-report/course-status-report.component';
import { InstructorSubjectReportComponent } from './instructor-subject-report/instructor-subject-report.component';



@NgModule({
  declarations: [
    WelcomeComponent, 
    ActivityComponent, 
    CreateCourseComponent,
     ActivityListComponent, 
     SearchCourseComponent,
     CourseLinkComponent, 
     ActivateCourseComponent,
     CourseActionDialog,
     CreateInstructorComponent,
     UserCreationComponent,
     UserSearchComponent,
     FileUploaderComponent,
     CisSystemComponent,
     SearchInstructorComponent,
     CisCourseRequestsIMadeComponent,
     ActivationsComponent,
     CourseManagementComponent,
     JobCardComponent,
     JobCardSearchComponent,
     EmpRequestComponent,
     MyTasksComponent,
     MyTasksHistoryComponent,
     UserPermissionsComponent,
     SmartProfileComponent,
     EmpReqeustCancelComponent,
     EmpDelegationComponent,
     CourseDataReportComponent,
     CourseStatusReportComponent,
     InstructorSubjectReportComponent
     ],
  imports: [
    InfiniteScrollModule,
    A11yModule,    
    CdkStepperModule,    
    CdkTableModule,    
    CdkTreeModule,
    PortalModule,    
    ScrollingModule,
    MatProgressBarModule,    
    MatSortModule,    
    MatStepperModule,    
    MatTableModule,       
    MatToolbarModule,      
    DragDropModule,    
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatInputModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatSlideToggleModule,
    NgxDatatableModule,
    MatListModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    RouterModule.forChild(TrainingRoutes),
    TranslateModule,
   // RouterModule.forChild(CalendarRoutes),
		CalendarModule.forRoot({
   		provide: DateAdapter,
   		useFactory: adapterFactory
    	}),
  ],
	entryComponents : [
    CourseActionDialog
	]
})
export class TrainingModule { }
