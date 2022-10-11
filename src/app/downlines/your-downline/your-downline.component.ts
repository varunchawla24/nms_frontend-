import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserService } from '../../services';
import { YoursDownlineDataSource } from './helper.data';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import swal from 'sweetalert2';
@Component({
  selector: 'app-your-downline',
  templateUrl: './your-downline.component.html',
  styleUrls: ['./your-downline.component.scss']
})
export class YourDownlineComponent implements OnInit {
  displayedColumns = ["Name", "Email", "Upline Name", "Distributor Id", "Self PV", "Frontline Count", "Training Count","List Count", "Download Report", "Block User"];
  error = ''
  loading = false;
  totalRows = 0;
  pageSize = 10;
  currentPage = 0;
  pageSizeOptions: number[] = [10,25,50];
  formula:string = "Downline Report";
  status: any[];
  downlineData= [];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  length;
  csv_data = []
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    const data = {
      "root_id": JSON.parse(localStorage.getItem('profile')).root_id.toString(),
      "level": "1",
      "page_no":  this.currentPage.toString(),
      "page_size": this.pageSize.toString()
    }
    this.loadDownlines(data);
    console.log('data source', this.dataSource)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log('data sourcew',this.dataSource)
  }
  loadDownlines(data) {
    this.userService.getActiveDownlines(data)
      .pipe()
      .subscribe(
        data => {
          this.downlineData = data.data
          this.length = this.downlineData.length
          this.dataSource = new MatTableDataSource<any>(this.downlineData);
          console.log('lennngh',this.length)
          swal.fire(data.message);

          setTimeout(() => {
            this.paginator.pageIndex = this.currentPage;
            this.paginator.length = data.data[0].total_count ? data.data[0].total_count : 0;
          });
          this.loading = false;
          // this.dataSource.paginator = this.paginator;
          //  console.log('paginator',this.paginator)
          // this.dataSource.data = data.data
          // console.log('data', this.downlineData)
          // setTimeout(() => {
          //   this.paginator.pageIndex = this.currentPage;
          //   this.paginator.length = data.data[0].total_count ? data.data[0].total_count : 0;
          //   console.log('length',this.paginator.length)
          // });
          // this.loading = false;
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

  // getNextData(currentSize, offset, limit){
  //   const data = {
  //     "root_id": JSON.parse(localStorage.getItem('profile')).root_id.toString(),
  //     "level": "1",
  //     "page_size": limit,
  //     "page_no": offset
  //   }
  //   this.userService.getActiveDownlines(data)
  //   .pipe()
  //   .subscribe(
  //     data => {
  //       this.paginator.length = 10;
  //       this.downlineData = data.data
  //       this.paginator.length = data.data[0].total_count ? data.data[0].total_count : 0;
  //       this.dataSource = new MatTableDataSource<any>(this.downlineData);
  //       this.dataSource._updateChangeSubscription();
  //       this.dataSource.paginator = this.paginator;
  //       // this.dataSource.data = data.data
  //       // console.log('data', this.downlineData)
  //       // setTimeout(() => {
  //       //   this.paginator.pageIndex = this.currentPage;
  //       //   this.paginator.length = data.data[0].total_count ? data.data[0].total_count : 0;
  //       //   console.log('length',this.paginator.length)
  //       // });
  //       // this.loading = false;
  //     },
  //     error => {
  //       console.log('errrr', this.error["error"])
  //       this.error = error;
  //       this.loading = false;
  //     });


  // }

  pageChanged(event: PageEvent) {
    console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    const data = {
      "root_id": JSON.parse(localStorage.getItem('profile')).root_id.toString(),
      "level": "1",
      "page_no": this.currentPage.toString(),
      "page_size": this.pageSize.toString()
    }
    this.loadDownlines(data);
  }

  // pageChanged(event){
  //   console.log('event',event)
  //   this.loading = true;

  //   let pageIndex = event.pageIndex;
  //   let pageSize = event.pageSize;

  //   let previousIndex = event.previousPageIndex;

  //   let previousSize = pageSize * pageIndex;

  //   this.getNextData(previousSize, pageIndex!=0 ? (pageIndex).toString() : "1" , pageSize.toString());
  // }
  downloadCSV(data) {

    var csv_data = [
      {
       name: data.full_name,
       distributor: data.distributor_id,
       email: data.email,
       self: data.self_pv==null ? 0 : data.self_pv,
       frontline: data.frontline_count,
       training: data.training_count
      }
    ];

    var options = {
      title: 'Downline Report',
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      useBom: true,
      headers: ['Name', 'Distributor Id', 'Email', 'Self PV', 'Frontline Count', 'Training Count']
    };

    new ngxCsv(csv_data, this.formula, options);
  }
  downloadAllReport(){

    for (let downline of this.downlineData) {
      console.log('loop',downline); 
      var obj=
        {
         name: downline.full_name,
         distributor: downline.distributor_id,
         email: downline.email,
         self: downline.self_pv == null ? 0 : downline.self_pv,
         frontline: downline.frontline_count,
         training: downline.training_count
        }


      this.csv_data.push(obj);
      
    }

    console.log('final csv ',this.csv_data);
  
      var options = {
        title: 'Downline Report',
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalseparator: '.',
        showLabels: true,
        showTitle: true,
        useBom: true,
        headers: ['Name','Distributor Id', 'Email', 'Self PV', 'Frontline Count', 'Training Count']
      };
  
      new ngxCsv(this.csv_data, this.formula, options);
  
  }

  applySearch(event){
    console.log('event',event)
     this.currentPage =0;
     this.pageSize = 10;
      const data = {
        "root_id": JSON.parse(localStorage.getItem('profile')).root_id.toString(),
        "level": "1",
        "page_no": this.currentPage.toString(),
        "page_size": this.pageSize.toString(),
        "search": event
      }
      this.loadDownlines(data);

  }

  blockUser(data) {
    console.log('data',data)
this.userService.BlockUser(data)
.pipe()
.subscribe(
    data => {
        console.log('data',data)
        this.ngOnInit();
        swal.fire(data.message)
    },
    error => {
      console.log('errrr',this.error["error"])
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
