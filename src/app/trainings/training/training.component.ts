import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { TrainingService } from '../../services/training.service';
import { TrainingDataSource } from './helper.data';
import swal from 'sweetalert2';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  error = '';
  loading = false;
  trainingData: any;
  rows: any[] = [];
  sortedData: any[];
  showResponsiveTableCode;
  checkboxChecked = false;

  @ViewChild(MatPaginator, { static: true }) paginator1: MatPaginator;
  displayedColumns = ["seqNo", "Training", "Training Taken"];
  dataSource: TrainingDataSource

  constructor(private trainingService: TrainingService, private router: Router) { }

  ngOnInit(): void {
    this.dataSource = new TrainingDataSource(this.trainingService);
    this.dataSource.loadTrainings();
    console.log('data source', this.dataSource)
  }

  userTraining(event) {
    console.log('event', event)
    this.checkboxChecked = !this.checkboxChecked

  }

  saveUserTraining(training_id, is_taken) {
    this.trainingService.saveTrainingList(training_id, is_taken)
      .pipe()
      .subscribe(
        data => {
          console.log('data save train', data)
          swal.fire(
            data.message
          )
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

  isAllSelected(item) {
    console.log('items', item)
    this.dataSource["trainingSubject"]["_value"].forEach(val => {
      console.log('value wala',val)
      if (val.training_id == item.training_id) {
        this.checkboxChecked = !val.is_taken;
        console.log("pehla", this.checkboxChecked);
        console.log('final',this.checkboxChecked)
        this.saveUserTraining(item.training_id.toString(), this.checkboxChecked);

       
      }
      // else {
      //  this.checkboxChecked = false;
      //  console.log("dusra")
      // }

    });
  }



}

