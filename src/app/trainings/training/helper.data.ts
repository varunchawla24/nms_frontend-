import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { TrainingService } from "../../services";

export class TrainingDataSource implements DataSource<any> {

    private trainingSubject = new BehaviorSubject<any[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private trainingService: TrainingService) {}

    connect(collectionViewer: CollectionViewer): Observable<any[]> {
        return this.trainingSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.trainingSubject.complete();
        this.loadingSubject.complete();
    }

    loadTrainings() {
           console.log('aya kya')
        this.loadingSubject.next(true);

        this.trainingService.getTrainingList().pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe(trainings => 
            this.trainingSubject.next(trainings.data));
    }    
}