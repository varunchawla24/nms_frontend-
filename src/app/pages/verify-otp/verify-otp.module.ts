import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import { VerifyOtpComponent } from './verify-otp.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { MatCard, MatCardModule } from '@angular/material/card';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { UserService } from '../../services/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { ErrorInterceptor, JwtInterceptor } from '../../helpers';

const appRoutes: Routes = [
    { path: '', component: VerifyOtpComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    NgOtpInputModule,
    NgxOtpInputModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  declarations: [VerifyOtpComponent],
  providers: [UserService]
})
export class VerifyOtpModule { }
