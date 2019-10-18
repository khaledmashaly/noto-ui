import { Injectable, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/states/app.state';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate, OnInit {
	isLoggedIn = false;

	constructor(
		private store: Store<AppState>,
		private router: Router
	) {}

	ngOnInit() {
		this.store
			.select(appState => appState.userState.isLoggedIn)
			.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
	}

	canActivate() {
		if (!this.isLoggedIn) {
			this.router.navigateByUrl('/');
			return false;
		}
		return true;
	}
}
