import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserDetails } from '../shared/auth';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
	isLoggedIn: boolean;
	user: UserDetails;
	navEnd: Observable<NavigationEnd>;

	constructor(private router: Router, private auth: AuthService) {
		this.navEnd = this.router.events.pipe(
			filter(event => event instanceof NavigationEnd)
		) as Observable<NavigationEnd>;
	}

	ngOnInit() {
		this.checkLoginStatus();
		this.navEnd.subscribe(() => {
			this.checkLoginStatus();
		});
	}

	private checkLoginStatus(): void {
		this.isLoggedIn = this.auth.isLoggedIn();
		if (this.isLoggedIn) {
			this.user = this.auth.decodeToken();
		}
		else {
			this.user = null;
		}
		console.log('inside ngOnInit() of Header, isLoggedIn:', this.isLoggedIn, ', userDetails:', this.user);
	}
}
