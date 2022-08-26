import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import { VerifyOtpComponent } from './verify-otp.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { MatCard, MatCardModule } from '@angular/material/card';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';

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
    MatCardModule
    
  ],
  declarations: [VerifyOtpComponent],
  providers: [
    UserService
]
})
export class VerifyOtpModule { }
