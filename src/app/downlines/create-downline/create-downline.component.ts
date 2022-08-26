import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services';

@Component({
  selector: 'app-create-downline',
  templateUrl: './create-downline.component.html',
  styleUrls: ['./create-downline.component.scss']
})
export class CreateDownlineComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  hide;
  root_id;
  parent_id;
  full_name;
  error = '';
  loading = false;
  constructor(public form: FormBuilder, private userService: UserService, private router: Router) {


  }

 
  ngOnInit() {
    this.createForm();
    this.root_id = JSON.parse(localStorage.getItem('profile')).root_id;
    this.parent_id = JSON.parse(localStorage.getItem('profile')).parent_id;
    this.full_name = JSON.parse(localStorage.getItem('profile')).full_name;
    console.log('dsds',this.root_id)

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
      self_pv: [
        '', {
          validators: [Validators.required]
        }
      ],
      distributor_id:[   '', {
        validators: [Validators.required]
      }]
    });
  }
  get number() {
    return this.registerForm.get('mobile');
  }
  get username() {
    return this.registerForm.get('first_name');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get f() { return this.registerForm.controls; }
  // checkUserExists() {


  //         this.profileForm.value.userName.setErrors({ userExists: `User Name  already exists` });

  // }
  onSubmit() {
    console.log('submit',this.registerForm.value);
    this.submitted = true;
     // stop here if form is invalid
     if (this.registerForm.invalid) {
      return;
  }
   
    const registerRequest = {
      "first_name": this.registerForm.value.first_name,
      "last_name": this.registerForm.value.last_name,
      "email": this.registerForm.value.email,
      "mobile": this.registerForm.value.mobile,
      "distributor_id": this.registerForm.value.distributor_id,
      "self_pv": this.registerForm.value.self_pv,
      "root_id": this.root_id.toString(),
      "parent_id": this.parent_id.toString(),
      "upline_name": this.full_name
    }
    this.userService.registerDownline(registerRequest)
.pipe()
.subscribe(
    data => {
       alert(data)
       this.onClear();
    },
    error => {
      console.log("error",error)
      console.log('errrr',this.error["error"])
        this.loading = false;
        alert(this.error)
    });
  }
  onClear(){
       // clear errors and reset ticket fields
       this.submitted = false;
       this.f.first_name.reset();
       this.f.last_name.reset();
       this.f.email.reset();
       this.f.mobile.reset();
       this.f.distributor_id.reset();
       this.f.self_pv.reset();
  }
       
}
