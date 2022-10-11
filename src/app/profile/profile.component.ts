import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  registerForm: FormGroup;
  submitted = false;
  hide;
  root_id;
  parent_id;
  full_name;
  error = '';
  loading = false;
  email;
  distributor_id;
  first_name;
  last_name;
  mobile;
  isChange = false;
  constructor(public form: FormBuilder, private userService: UserService, private router: Router) {


  }

  ngOnInit(): void {
    this.createForm();
    this.root_id = JSON.parse(localStorage.getItem('profile')).root_id;
    this.parent_id = JSON.parse(localStorage.getItem('profile')).parent_id;
    this.full_name = JSON.parse(localStorage.getItem('profile')).full_name;
    console.log('dsds', this.root_id)
    this.email = JSON.parse(localStorage.getItem('profile')).email;
    this.first_name = JSON.parse(localStorage.getItem('profile')).first_name;
    this.last_name = JSON.parse(localStorage.getItem('profile')).last_name;
    this.mobile = JSON.parse(localStorage.getItem('profile')).mobile;
    this.distributor_id = JSON.parse(localStorage.getItem('profile')).distributor_id;

  }
  createForm() {
    this.registerForm = this.form.group({
      first_name: ['', {
        validators: [Validators.required]
      }],
      last_name: ['', {
        validators: [Validators.required]
      }],
      email: ['',
        Validators.required
      ],
      mobile: ['', {
        validators: [Validators.minLength(10)]
      }],
      distributor_id: ['', {
        validators: [Validators.required]
      }]
    });
    //   this.registerForm.setValue({
    //     first_name: JSON.parse(localStorage.getItem('profile')).first_name,
    //     last_name: JSON.parse(localStorage.getItem('profile')).last_name,
    //     email: JSON.parse(localStorage.getItem('profile')).email,
    //     mobile: JSON.parse(localStorage.getItem('profile')).mobile,
    //     distributor_id: JSON.parse(localStorage.getItem('profile')).distributor_id
    //  });
  }

  get f() { return this.registerForm.controls; }
  onSubmit() {
    console.log('submit', this.registerForm.value);
    this.userService.updateProfile(this.registerForm.value)
      .pipe()
      .subscribe(
        data => {
          this.userService.logout();
          this.router.navigate(["/login"])
        },
        error => {
          console.log('errrr', this.error["error"])
          this.error = error;
          this.loading = false;
        });


  }
  onClear() {

  }
  onChange() {
    console.log("change")
    this.isChange = true;

  }

}
