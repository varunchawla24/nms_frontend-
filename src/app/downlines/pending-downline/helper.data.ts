import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { MatPaginator } from "@angular/material/paginator";
import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { TrainingService, UserService } from "../../services";

export class PendingDownlineDataSource implements DataSource<any> {

    private downlineSubject = new BehaviorSubject<any[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private userService: UserService) {}

    connect(collectionViewer: CollectionViewer): Observable<any[]> {
        return this.downlineSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.downlineSubject.complete();
        this.loadingSubject.complete();
    }

    loadPendingDownlines() {
           console.log('aya kya')
        this.loadingSubject.next(true);

        this.userService.getPendingDownlines().pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe(downlines => 
            this.downlineSubject.next(downlines.data));
    }    
}