import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root' })
export class UserService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
    private mobileSubject: BehaviorSubject<any>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.mobileSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('userMobile')));
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    public get mobileSubjectValue(): any {
        return this.mobileSubject.value
    }

    login(mobile: any) {
        console.log('type mobile', mobile)
        return this.http.post<any>(`${environment.apiUrl}/user/login`, { mobile })
            .pipe(map(user => {
                console.log('api call', user)
                // login successful if there's a jwt token in the response
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('isLogin', "true")
                    // localStorage.setItem('currentUser', JSON.stringify(user));
                    // this.currentUserSubject.next(user);
                    localStorage.setItem('userMobile', JSON.stringify(mobile))
                    this.mobileSubject.next(mobile);
                }

                return user;
            }));
    }


    verifyOtp(mobile: any, otp: any) {
        console.log('type mobile', mobile)
        return this.http.post<any>(`${environment.apiUrl}/user/verifyOtp`, { mobile, otp })
            .pipe(map(user => {
                console.log('api call', user)
                // login successful if there's a jwt token in the response
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user.data));
                    this.currentUserSubject.next(user);

                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.clear();
        this.currentUserSubject = new BehaviorSubject<any>(null);
        this.mobileSubject = new BehaviorSubject<any>(null);
        console.log('logout', this.currentUserSubject);
        console.log('subject', this.mobileSubject)
    }

    getProfile(data) {
        console.log('header', data)
        return this.http.get<any>(`${environment.apiUrl}/user/getProfile`, { headers: { 'Content-Type': 'application/json', 'Authorization': data.data.access_token } });
    }


    getActivity() {
        return this.http.get<any>(`${environment.apiUrl}/user/getActivity`);
    }


    registerDownline(data: any) {
        return this.http.post<any>(`${environment.apiUrl}/user/register`, { first_name: data.first_name, last_name: data.last_name, email: data.email, self_pv: data.self_pv, mobile: data.mobile, distributor_id: data.distributor_id, root_id: data.root_id, parent_id: data.parent_id, upline_name: data.upline_name })
            .pipe(map(user => {
                console.log('api call', user)
                return user


            }));
    }

    getPendingDownlines() {
        return this.http.get<any>(`${environment.apiUrl}/user/pendingDownlines`);
    }
    getActiveDownlines(data: any) {
        return this.http.post<any>(`${environment.apiUrl}/user/downlineList`, { root_id: data.root_id, level: data.level, page_no: data.page_no != "0" ? data.page_no : "0", page_size: data.page_size ? data.page_size : "10", search: data.search ? data.search : '' })
            .pipe(map(user => {
                console.log('api call', user)
                return user


            }));
    }

    deletePendingDownline(data: any) {
        return this.http.post<any>(`${environment.apiUrl}/user/deletePendingDownline`, { user_id: data.user_id.toString() })
            .pipe(map(user => {
                console.log('api call', user)
                return user


            }));
    }

    BlockUser(data: any) {
        return this.http.post<any>(`${environment.apiUrl}/user/blockUser`, { user_id: data.user_id.toString() })
            .pipe(map(user => {
                console.log('api call', user)
                return user


            }));
    }

    updateProfile(data: any) {
        return this.http.post<any>(`${environment.apiUrl}/user/updateProfile`, { first_name: data.first_name, last_name: data.last_name, email: data.email, mobile: data.mobile, distributor_id: data.distributor_id })
            .pipe(map(user => {
                console.log('api call', user)
                return user


            }));
    }

    updateActivity(data: any) {
        return this.http.post<any>(`${environment.apiUrl}/user/updateActivity`, { self_pv: data.self_pv.toString(), list_number: data.list_number.toString() })
            .pipe(map(user => {
                console.log('api call', user)
                return user


            }));
    }

}