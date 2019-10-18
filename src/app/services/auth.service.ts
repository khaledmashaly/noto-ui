import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../entities/User';
import { TokenResponse, UserDetails } from '../shared/auth';
import { Store } from '@ngrx/store';
import { setActiveUser } from '../store/actions/user.actions';
import { AppState } from '../store/states/app.state';

const baseAuthApi = '/auth';
const postOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		private http: HttpClient,
		private router: Router,
		private store: Store<AppState>
	) { }

	public logout(): void {
		this.router.navigateByUrl('/');
	}

	register(user: User): Observable<TokenResponse> {
		const registerApi = baseAuthApi + '/register';
		return this.http.post<TokenResponse>(registerApi, user, postOptions)
						.pipe( tap(console.log) );
	}

	login(user: User): Observable<void> {
		return this.http.post<void>('login', user)
						.pipe(
							tap(
								() => {
									console.log('login success');
									this.store.dispatch(setActiveUser({
										user: {
											email: '5aledmaged',
											fullname: 'khaled maged',
											password: '131414'
										}
									}));
								},
								(e: HttpErrorResponse) => {
									console.error(e.statusText);
								}
							)
						);
	}

	profile(): Observable<UserDetails> {
		const profileApi = baseAuthApi + '/profile';
		const options = {
			headers: new HttpHeaders({ 'Authorization': `Bearer` })
		};
		return this.http.get<UserDetails>(profileApi, options);
	}
}
