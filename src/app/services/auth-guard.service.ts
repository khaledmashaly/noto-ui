import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ROUTE_NAMES } from '../modules/routing/routes-names';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	routes = ROUTE_NAMES;

	constructor(
		private router: Router,
		private authService: AuthService
	) {}

	canActivate() {
		if (!this.authService.isAuthenticated()) {
			this.router.navigate([this.routes.appHome]);
			return false;
		}
		return true;
	}
}
