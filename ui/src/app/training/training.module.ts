import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
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
  MatSlideToggleModule
} from '@angular/material';

import {TranslateModule} from "@ngx-translate/core";
import { WelcomeComponent } from './welcome/welcome.component';
import {TrainingRoutes} from "./training.routing";

@NgModule({
  declarations: [WelcomeComponent],
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
    MatListModule,
    MatMenuModule,
    RouterModule.forChild(TrainingRoutes),
    TranslateModule
  ]
})
export class TrainingModule { }
