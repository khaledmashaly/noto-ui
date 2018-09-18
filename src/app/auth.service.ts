import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './shared/user';
import { Observable } from 'rxjs';

const authApi = 'http://localhost:3000/auth';
const httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private http: HttpClient) { }

	// TODO: change any to a specific type
	login(user: User): Observable<any> {
		return this.http
			.post(authApi, user, { ...httpHeaders });
	}
}
