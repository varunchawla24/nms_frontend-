import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
// import { environment } from '../../environment';
// import { AuthenticationService } from '../_services';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    // constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to api url
        const currentUser =  JSON.parse(localStorage.getItem('currentUser'));
        console.log('interceptr',currentUser["access_token"])
        const isLoggedIn = currentUser && currentUser["access_token"];
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `${currentUser["access_token"]}`
                }
            });
        }

        return next.handle(request);
    }
}