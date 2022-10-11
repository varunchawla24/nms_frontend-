import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxOtpInputConfig } from 'ngx-otp-input';
import { UserService } from '../../services/user.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.scss']
})
export class VerifyOtpComponent implements OnInit {
  verifyOtpForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  filled = false;
  otp;
  profileData: any;
  constructor(private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.checkLogin();

  }

  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 4,
    autofocus: true,
    classList: {
      inputBox: 'my-super-box-class',
      input: 'my-super-class',
      inputFilled: 'my-super-filled-class',
      inputDisabled: 'my-super-disable-class',
      inputSuccess: 'my-super-success-class',
      inputError: 'my-super-error-class',
    },
  };

  checkLogin() {
    const is_login = localStorage.getItem('isLogin');
    console.log('is login', is_login);
    if (is_login == "true") {
      this.router.navigate(['/verifyOtp']);

    } else {
      this.router.navigate(['/login']);
    }
  }
  //  buildForm() {
  //   this.verifyOtpForm = this.formBuilder.group({
  //     otp: ['', Validators.required]
  // });

  // // get return url from route parameters or default to '/'
  // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  //  }
  onOtpChange(event) {
    console.log('event', event)

  }

  handeOtpChange(value: string[]): void {
    console.log('change', value);
  }

  handleFillEvent(value: string): void {
    console.log('fill', value);
    this.filled = true;
    this.otp = value;
  }

  verifyOtp() {
    console.log('subject', this.userService.mobileSubjectValue)
    const mobile = this.userService.mobileSubjectValue;
    console.log('fsff', mobile)
    this.userService.verifyOtp(mobile, this.otp)
      .pipe()
      .subscribe(
        data => {
          console.log('data', data.data)
          if (localStorage.getItem('currentUser')) {
            this.getProfile(data);
          }

        },
        error => {
          console.log('errrr', this.error["error"])
          this.error = error;
          this.loading = false;
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.error.message
          })

        });
  }
  getProfile(data) {
    this.userService.getProfile(data)
      .pipe()
      .subscribe(
        data => {
          this.profileData = data.data;
          console.log('data', this.profileData)
          localStorage.setItem('profile', JSON.stringify(this.profileData));
          this.router.navigate(['/']);
        },
        error => {
          console.log('err', error)
          this.error = error;
          this.loading = false;
          console.log('errrr', this.error["error"])
        });

  }

}
