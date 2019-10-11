import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from './shared/user';
import { TokenResponse, UserDetails } from './shared/auth';

const baseAuthApi = '/auth';
const postOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const tokenName = 'jwt-token';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private token = '';

	constructor(private http: HttpClient, private router: Router) { }

	private saveToken(tokenResponse: TokenResponse): void {
		const token = tokenResponse.token;
		if (token) {
			this.token = token;
			localStorage.setItem(tokenName, token);
		}
	}

	public getToken(): string {
		if (!this.token) {
			this.token = localStorage.getItem(tokenName);
		}
		console.log('getToken(), this.token:', this.token && this.token.slice(0, 10));
		return this.token;
	}

	public logout(): void {
		this.token = '';
		localStorage.removeItem(tokenName);
		this.router.navigateByUrl('/');
	}

	public decodeToken(): UserDetails {
		const token = this.getToken();
		console.log('decodeToken(), token:', token && token.slice(0, 10));
		if (token) {
			let payload = token.split('.')[1];
			payload = atob(payload);
			return JSON.parse(payload);
		}
		return null;
	}

	public isLoggedIn(): boolean {
		const user = this.decodeToken();
		// TODO: remove console statments
		console.log('isLoggedIn(), user:', user);
		if (user) {
			return user.exp > Date.now() / 1000;
		}
		return false;
	}

	register(user: User): Observable<TokenResponse> {
		const registerApi = baseAuthApi + '/register';
		return this.http.post<TokenResponse>(registerApi, user, postOptions)
						.pipe( tap(this.saveToken) );
	}

	login(user: User): Observable<void> {
		return this.http.post<void>('login', user)
						.pipe(
							tap(
								() => {
									console.log('login success');
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
			headers: new HttpHeaders({ 'Authorization': `Bearer ${this.token}` })
		};
		return this.http.get<UserDetails>(profileApi, options);
	}
}
