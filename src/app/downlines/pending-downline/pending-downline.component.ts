import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { UserService } from '../../services';
import { PendingDownlineDataSource } from './helper.data';
import swal from 'sweetalert2';
@Component({
  selector: 'app-pending-downline',
  templateUrl: './pending-downline.component.html',
  styleUrls: ['./pending-downline.component.scss']
})
export class PendingDownlineComponent implements OnInit {
  displayedColumns = ["First Name", "Last Name","Distributor Id", "Email","Action"];
  dataSource: PendingDownlineDataSource
  @ViewChild(MatPaginator) paginator: MatPaginator;
  error= '';
  loading = false;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.dataSource = new PendingDownlineDataSource(this.userService);
    this.dataSource.loadPendingDownlines();
    console.log('data source', this.dataSource)
  }

  deleteDownline(data){
  console.log('delete',data)
  this.userService.deletePendingDownline(data)
  .pipe()
  .subscribe(
    data => {
     console.log(data)
     this.dataSource.loadPendingDownlines();
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

}
