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
  MatRadioModule
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
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    RouterModule.forChild(TrainingRoutes),
    TranslateModule
  ],
	entryComponents : [
		CourseActionDialog
	]
})
export class TrainingModule { }
