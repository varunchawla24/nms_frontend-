import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor, JwtInterceptor } from '../helpers';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ActivityComponent } from './activity/activity.component';
import { FormsRouterModule } from '../forms/forms.router';
import { Angular2CsvModule } from 'angular2-csv';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

export const appRoutes: Routes = [
    { path: '', component: ActivityComponent },
]

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    RouterModule.forChild(appRoutes),
    HttpClientModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatTableModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    Angular2CsvModule,
    MatFormFieldModule,
    FormsRouterModule,
    MatInputModule
  ],
  declarations: [ActivityComponent],
  providers: [  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }]
})
export class ActivityModule { }
