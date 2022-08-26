import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../../core/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { first } from 'rxjs-compat/operator/first';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  formErrors = {
    'mobile': ''
  };
  validationMessages = {
    'mobile': {
      'required': 'Please enter your email',
      'pattern': 'please enter your vaild number'
    },
    'password': {
      'required': 'please enter your password',
      'pattern': 'The password must contain numbers and letters',
      'minlength': 'Please enter more than 4 characters',
      'maxlength': 'Please enter less than 25 characters',
    }
  };

  constructor(private router: Router,
    private fb: FormBuilder, private userService: UserService) {
    // redirect to home if already logged in
    if (this.userService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.buildForm();
     localStorage.removeItem("isLogin");
    localStorage.removeItem("userMobile");
  }

  buildForm() {
    this.userForm = this.fb.group({
      'mobile': ['', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ]
      ]
    });


    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    // if (!this.userForm) {
    //   return;
    // }
    // const form = this.userForm;
    // for (const field in this.formErrors) {
    //   if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
    //     this.formErrors[field] = '';
    //     const control = form.get(field);
    //     if (control && control.dirty && !control.valid) {
    //       const messages = this.validationMessages[field];
    //       for (const key in control.errors) {
    //         if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
    //           this.formErrors[field] += messages[key] + ' ';
    //         }
    //       }
    //     }
    //   }
    // }
  }
  login() {
    console.log('form', this.userForm.value)
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.login(this.userForm.value.mobile)
      .pipe()
      .subscribe(
        data => {
          this.router.navigate(['/verifyOtp']);
        },
        error => {
          console.log('errrr', this.error["error"])
          this.error = error;
          this.loading = false;
        });
  }
  // this.router.navigate(['/']);
}


