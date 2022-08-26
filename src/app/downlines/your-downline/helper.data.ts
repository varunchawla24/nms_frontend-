import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { TrainingService, UserService } from "../../services";

export class YoursDownlineDataSource implements DataSource<any> {

    private activeDownlineSubject = new BehaviorSubject<any[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private userService: UserService) {}

    connect(collectionViewer: CollectionViewer): Observable<any[]> {
        return this.activeDownlineSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.activeDownlineSubject.complete();
        this.loadingSubject.complete();
    }

    loadDownlines(data) {
        console.log('aya kya')
        this.loadingSubject.next(true);

        this.userService.getActiveDownlines(data).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe(downlines => 
            this.activeDownlineSubject.next(downlines.data));
    }    
}