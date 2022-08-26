import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class TrainingService {


    constructor(private http: HttpClient) {
    }
    getTrainingList() {
        return this.http.get<any>(`${environment.apiUrl}/training/getTrainingList`);
    }
    saveTrainingList(training_id, is_taken){
        return this.http.post<any>(`${environment.apiUrl}/training/saveUserTraining`, { training_id,is_taken})
        .pipe(map(traininigRes => {
            console.log('api call',traininigRes)
            return traininigRes;
        }));
    }
}