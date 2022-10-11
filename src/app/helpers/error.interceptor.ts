import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import swal from 'sweetalert2';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {

            console.log('error interceptor',err.error.status)
            if ([401, 403].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api

                location.reload();
            } else if(err.error.status==400){
               if(err.error.message instanceof Array) {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.error.message[0]
                  })
               } else{
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.error.message
                  })
               }
             
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}