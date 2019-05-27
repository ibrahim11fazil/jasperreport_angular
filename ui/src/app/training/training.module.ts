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
  MatFormFieldModule,
  MatExpansionModule,
  MatInputModule,
  MatSelectModule, 
  MatSlideToggleModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TranslateModule} from "@ngx-translate/core";
import { WelcomeComponent } from './welcome/welcome.component';
import {TrainingRoutes} from "./training.routing";
import { ActivityComponent } from './activity/activity.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { SearchCourseComponent } from './search-course/search-course.component';

@NgModule({
  declarations: [WelcomeComponent, ActivityComponent, CreateCourseComponent, ActivityListComponent, SearchCourseComponent],
  imports: [
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
  MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    RouterModule.forChild(TrainingRoutes),
    TranslateModule
  ]
})
export class TrainingModule { }
