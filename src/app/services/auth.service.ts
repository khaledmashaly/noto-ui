import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap  } from 'rxjs/operators';
import { User } from '../entities/User';
import { TokenResponse } from '../shared/auth';
import { Store } from '@ngrx/store';
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

	public logout() {
		this.router.navigateByUrl('/');
	}

	register(user: User): Observable<TokenResponse> {
		const registerApi = baseAuthApi + '/register';
		return this.http.post<TokenResponse>(registerApi, user, postOptions)
						.pipe( tap(console.log) );
	}

	login(user: User) {
		return this.http.post('login', user);
	}

	profile() {
		const profileApi = baseAuthApi + '/profile';
		const options = {
			headers: new HttpHeaders({ 'Authorization': `Bearer` })
		};
		return this.http.get<User>(profileApi, options);
	}
}
