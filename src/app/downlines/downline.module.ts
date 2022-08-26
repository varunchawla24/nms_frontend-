import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { TrainingService } from '../services/training.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor, JwtInterceptor } from '../helpers';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CreateDownlineComponent } from './create-downline/create-downline.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsRouterModule } from '../forms/forms.router';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../services';
import { PendingDownlineComponent } from './pending-downline/pending-downline.component';
import { YourDownlineComponent } from './your-downline/your-downline.component';
import { Angular2CsvModule } from 'angular2-csv';

export const appRoutes: Routes = [
    { path: '', component: CreateDownlineComponent },
    { path: 'pending-downline', component: PendingDownlineComponent },
	{ path: 'downline', component: YourDownlineComponent },

]

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes),
		CommonModule,
		FormsRouterModule,
		FlexLayoutModule,
		MatButtonModule,
		MatToolbarModule,
		MatCardModule,
		MatTabsModule,
		MatIconModule,
		 MatInputModule,
		 ReactiveFormsModule,
		 FormsModule,
		 MatToolbarModule,
		 MatTableModule,
		 MatCheckboxModule,
		 MatPaginatorModule,
		 Angular2CsvModule
  ],
  declarations: [CreateDownlineComponent, PendingDownlineComponent, YourDownlineComponent],
  providers: [  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },UserService]
})
export class DownlineModule { }
