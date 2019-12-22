import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap  } from 'rxjs/operators';
import { User } from '../entities/User';
import { Store } from '@ngrx/store';
import { AppState } from '../store/states/app.state';
import { ROUTE_NAMES } from '../modules/routing/routes-names';

const baseAuthApi = '/auth';
const postOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private authenticated = false;
	routes = ROUTE_NAMES;

	constructor(
		private http: HttpClient,
		private router: Router,
		private store: Store<AppState>
	) {
		this.store
			.select(appState => appState.userState)
			.subscribe(userState => this.authenticated = userState.isLoggedIn);
	}

	public isAuthenticated() {
		return this.authenticated;
	}

	public logout() {
		this.router.navigate([this.routes.appHome]);
	}

	register(user: User) {
		const registerApi = baseAuthApi + '/register';
		return this.http.post(registerApi, user, postOptions)
						.pipe( tap(console.log) );
	}

	login(user: User) {
		return this.http.post('login', user);
	}

	profile() {
		return this.http.get<User>('user/profile');
	}
}
