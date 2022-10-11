import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services';
import swal from 'sweetalert2';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  activityForm: FormGroup;
  submitted = false;
  hide;
  selfPv=0;
  listNumber=0;
  error =""
  isChange = false;
  loading = false;
  constructor(public form: FormBuilder, private userService: UserService, private router: Router) {


  }

  ngOnInit(): void {
    this.createForm();
    this.getActivity();

  }
  createForm() {
    this.activityForm = this.form.group({
     self_pv: ['', {
        validators: [Validators.required]
      }],
      list_number: ['', {
        validators: [Validators.required]
      }]
    });
  }

  getActivity(){
    this.userService.getActivity()
    .pipe()
    .subscribe(
      data => {
         console.log('data',data);
         this.selfPv = data.data.volume,
         this.listNumber = data.data.list_number
         swal.fire(data.message)
      },
      error => {
        console.log('errrr', error)
        this.error = error;
        this.loading = false;
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      });
  }

  get f() { return this.activityForm.controls; }
  onSubmit() {
    console.log('submit', this.activityForm.value);
    this.userService.updateActivity(this.activityForm.value)
      .pipe()
      .subscribe(
        data => {
           console.log("data",data);
           swal.fire(data.message)
        },
        error => {
          console.log('errrr', this.error["error"])
          this.error = error;
          this.loading = false;
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        });
  }
  onClear() {

  }
  onChange() {
    console.log("change")
    this.isChange = true;

  }

}
